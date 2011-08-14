var nightStar = function () {
    debugAdd("init nightStar");
    this.stars = 40;
    this.debug = new Array();
    this.starType = 'canvas';//nyan
};



nightStar.prototype.paintStarinCanvas = function (canvas) {
            canvas.width =15;
            canvas.height =15;
	   var c=canvas.getContext("2d");
	   c.strokeStyle="#002DAF"; //  line color
	   c.lineWidth=1; // line width
	   c.fillStyle="#E1E9FF"; // fill color
 	   c.moveTo(7.5,0); // 1
	   c.lineTo(3.75,15); // 2
	   c.lineTo(15,6); // 3
	   c.lineTo(0,6); // 4
	   c.lineTo(11.25,15); // 5
 	   c.closePath();	   
	   c.stroke();
	   c.fill();
}

/**
 *
 */
nightStar.prototype.addingScaleFactorToStars = function() {
   debugAdd("addingScaleFactorToStars");
     for(i=0;i<this.stars;i++) {
         var currentStar = document.getElementById('star'+i);
         currentStar.style.webkitTransform = 'scale('+Math.random()+')';
    }
    
}

nightStar.prototype.addStarField = function() {
    //createStar(1);
    
    debugAdd('Adding Stars');
    if(this.starType == 'canvas') {
        for(i=0;i<this.stars;i++) {
            this.createStar(i);
        }
    }
    if(this.starType == 'nyan') {
        stars = 5;
        for(i=0;i<this.stars;i++) {
            this.createNyanStar(i);
        }
    }
    this.addingScaleFactorToStars();
}

nightStar.prototype.createNyanStar = function (id) {
    var div = document.createElement('canvas');
    var container =document.getElementById('background');
    var posLeft = this.GetRandom(0,container.offsetWidth);
    var posTop = this.GetRandom(0, container.offsetHeight-100);
     debugAdd('currentStar Position left:' +  posLeft + ' top:' + posTop);
    div.setAttribute('class', 'nyanStar');
    div.setAttribute('id', 'star'+id);
    div.setAttribute('style','-webkit-transform: scale(0);left:'+posLeft+'px;top:'+posTop+'px');
    container.insertBefore(div, container.firstChild); 
}

nightStar.prototype.createStar = function (id) {
    var div = document.createElement('canvas');
    var container = document.getElementById('background');
    var posLeft = this.GetRandom(0,container.offsetWidth);
    var posTop = this.GetRandom(0, container.offsetHeight-100);
     debugAdd('currentStar Position left:' +  posLeft + ' top:' + posTop);
    div.setAttribute('class', 'star');
    div.setAttribute('id', 'star'+id);
    div.setAttribute('style','-webkit-transform: scale(0);left:'+posLeft+'px;top:'+posTop+'px');
    container.insertBefore(div, container.firstChild);
    this.paintStarinCanvas(div);
    
}

nightStar.prototype.GetRandom = function ( min, max ) {
	if( min > max ) {
		return( -1 );
	}
	if( min == max ) {
		return( min );
	}
 
        return( min + parseInt( Math.random() * ( max-min+1 ) ) );
}

/**
 *changes the scale factor
 */
nightStar.prototype.removeStars = function() {
    setTimeout("window.nightStar.deleteStars()" , 2000 );
    //setting scale to 0 and add eventListener
   
        for(i=0;i<this.stars;i++) {
            var currentStar = document.getElementById('star'+i);
            currentStar.style.webkitTransform = 'scale(0)';
        }
     
}
/**
* delete the scale factor from 
* the dom
*/
nightStar.prototype.deleteStars = function() {
    if(this.starType == 'canvas') 
        var getAllStars = document.getElementsByClassName('star');
    if(this.starType == 'nyan') 
          var getAllStars = document.getElementsByClassName('nyanStar');
    var anz = getAllStars.length;
    //make sure that all the stars will be removed from the dom
  
        for(i=0;i<anz;i++) {
            var idM = getAllStars[getAllStars.length-1].getAttribute('id');
            var removeMe = document.getElementById(idM); 
           // document.getElementById('container').removeChild(removeMe);
            document.getElementById('background').removeChild(removeMe);
        }
     
   
}


nightStar.prototype.toggleDayNight = function() {
    var body = document.getElementsByTagName('body');
    var whatIsNow=body[0].getAttribute('class');
    var newClass = 'day';
    switch(whatIsNow) {
        case 'day':
            newClass = 'night';
            this.addStarField();
        break;
        case 'night':
            newClass = 'day';
            this.removeStars();
        break;
    }
    body[0].setAttribute('class',newClass);
    debugAdd('make ' + newClass);

    
}

nightStar.prototype.toggleStars = function () {
    //starType
    var toggler = document.getElementById('toggleStar');
    switch(this.starType) {
        case 'nyan':
            this.starType = 'canvas';
            this.stars = 40;
            toggler.innerHTML = 'Nyan Stars';
 
        break;
        case 'canvas':
            this.starType = 'nyan';
            toggler.innerHTML = 'canvas Stars';
            this.stars = 5;
        break;
    }
    debugAdd('StarType now:'+this.starType + '<br/> Anzahl Stars:' + this.stars);
}
