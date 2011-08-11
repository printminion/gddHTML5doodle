function createPerspectiveMatrix(fFoVVy,     //Field of View vertical (Öffnungswinkel in Grad)
                                 fAspect,    // Bildhöhe zu Bildbreite
								 fZnear,     //Mindestabstand sichtbarer Punkte
								 fZfar) {     //Höchstabstand sichtbarer Punkte

  return (Matrix.create([[Math.tan(fFoVVy* Math.PI / 180.0)/fAspect, 0, 0, 0],
               [0, 1/Math.tan(fFoVVy* Math.PI / 180.0), 0, 0],
               [0, 0, (fZnear+fZfar)/(fZnear-fZfar), 2*fZnear*fZfar/(fZnear-fZfar)],
               [0, 0, -1, 0]]));

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BEGINN Erweiterungen für sylvester.js 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//flatten konvertiert eine 2D-Matrix in ein 1D-Feld
Matrix.prototype.flatten = function () {

    var result = [];
    if (this.elements.length == 0)
        return [];


    for (var j = 0; j < this.elements[0].length; j++)
        for (var i = 0; i < this.elements.length; i++)
            result.push(this.elements[i][j]);
    return result;
};

Matrix.prototype.ensure4x4 = function() {

    if (this.elements.length == 4 &&
        this.elements[0].length == 4)
        return this;

    if (this.elements.length > 4 ||
        this.elements[0].length > 4)
        return null;

    for (var i = 0; i < this.elements.length; i++) 	{
	
        for (var j = this.elements[i].length; j < 4; j++) {
            if (i == j)
                this.elements[i].push(1);
            else
                this.elements[i].push(0);
        }
    }

    for (var i = this.elements.length; i < 4; i++) 	{
	
        if (i == 0)
            this.elements.push([1, 0, 0, 0]);
        else if (i == 1)
            this.elements.push([0, 1, 0, 0]);
        else if (i == 2)
            this.elements.push([0, 0, 1, 0]);
        else if (i == 3)
            this.elements.push([0, 0, 0, 1]);
    }

    return this;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ENDE Erweiterungen für sylvester.js 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// Die Funktion initGL erkennt den Browser (derzeit webkit und Minefield)
  function initGL()  {
  
    var canvas = document.getElementById("WebGL-canvas"); //herkömmliche Javascript-Funktion um auf die Zeichenfläche zugreifen zu können.
    try    {
	
      gl = canvas.getContext("experimental-webgl");
    }  catch(e)  {  }
    if (!gl)    {
	
      try      {
	  
        gl = canvas.getContext("webkit-3d");
      }   catch(e)   {   }
    }
    if (!gl)    {
	
      try      {
	  
        gl = canvas.getContext("moz-webgl");
      }   catch(e)  {   }
    }
    if (!gl)    {
	
      alert("WebGL not found. Please check if your browser supports WebGL.");
    }
  }


//Die Funktion getShader durchsucht die Quelldatei (diese hier vor dir!) nach den Shader Scripten und
  // sorgt dafür, dass die Shader im WebGL-Kontext benutzt werden können.
  function getShader(gl, id)  {
  
      var shaderScript = document.getElementById(id); //die id ist ein String mit dem Namen des Script-Objektes, z.B. "shader-fs"
      if (!shaderScript)
          return null;

      var str = "";
      var k = shaderScript.firstChild;
      while (k)      {
	  
          if (k.nodeType == 3)
              str += k.textContent;
          k = k.nextSibling;
      }

      var shader;
      if (shaderScript.type == "x-shader/x-fragment")      {
	  
          shader = gl.createShader(gl.FRAGMENT_SHADER);
      }
      else if (shaderScript.type == "x-shader/x-vertex")      {
	  
          shader = gl.createShader(gl.VERTEX_SHADER);
      }
      else      {
	  
          return null;
      }

      gl.shaderSource(shader, str); //str enhält hier den kompletten Quellcode des Shaderscripts
      gl.compileShader(shader);     

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))    {
	  
          alert(gl.getShaderInfoLog(shader));
          return null;
      }

      return shader;
  }

  function initShaders()  {
  
    var fragmentShader = getShader(gl, "shader-fs");
    var vertexShader   = getShader(gl, "shader-vs");

    shaderProgram      = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))    {
	
      alert("Could not initialise shaders");
    }

    gl.useProgram(shaderProgram);

    vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);
	
    vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
    gl.enableVertexAttribArray(vertexColorAttribute);
 
  }

  function setMatrixUniforms()  {
  
    var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
    gl.uniformMatrix4fv(pUniform, false, new Float32Array(pMatrix.flatten()));
	
	var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
    gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix.flatten()));
	
	 
  }

//function create3DTranslationMatrix(v) konvertiert einen Vektor in eine Translationsmatrix
function create3DTranslationMatrix(v) {

  if(v.elements.length != 3)  {
  
    throw "Invalid vector length";
  }
  var Mtrans = Matrix.I(4); //Einheitsmatrix anlegen
  Mtrans.elements[0][3] = v.elements[0];
  Mtrans.elements[1][3] = v.elements[1];
  Mtrans.elements[2][3] = v.elements[2];
  return(Mtrans);
};//function create3DTranslationMatrix(v)
  

  




/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


