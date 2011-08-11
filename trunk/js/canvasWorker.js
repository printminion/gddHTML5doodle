var canvasWorker = function () {
    this.currentPeopleIndex = 0;
    this.originContent = new Array();
    this.people = new Array();
    this.people[0] = {
        name: 'Albert Einstein',
        dynmapId:'01', 
        picUrl: 'images/germanPeople/aeinstein.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Albert_Einstein',
        founded: 'General relativity'
    };
    this.people[1] = {
        name: 'Wilhelm Röntgen',
        dynmapId:'02', 
        picUrl: 'images/germanPeople/konradroentgen.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Konrad_Rontgen',
        founded: 'X-rays'
    };
    this.people[2] = {
        name: 'Konrad Zuse',
        dynmapId:'03', 
        picUrl: 'images/germanPeople/konradzuse.jpg', 
        wikiUrl: 'http://de.wikipedia.org/wiki/Konrad_Zuse',
        founded: 'Z1,Z3 ( the first programable computer )'
    };
    this.people[3] = {
        name: 'Philip Reis',
        dynmapId:'04', 
        picUrl: 'images/germanPeople/philipreis.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Philip_Reis',
        founded: 'the first make-and-break telephone'
    };
    this.people[4] = {
        name: 'Heinrich Hertz',
        dynmapId:'05', 
        picUrl: 'images/germanPeople/heinrichhertz.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Heinrich_Hertz',
        founded: 'Electromagnetic radiation Photoelectric effect  (MHz, KHz,..)'
    };
    this.people[5] = {
        name: 'Johannes Gutenberg',
        dynmapId:'06', 
        picUrl: 'images/germanPeople/johannesgutenberg.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Johannes_Gutenberg',
        founded: 'global inventor of the printing press, Gutenberg Bible'
    };
    this.people[6] = {
        name: 'William IV, Duke of Bavaria',
        dynmapId:'07', 
        picUrl: 'images/germanPeople/wilhelmvonbayern.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/William_IV,_Duke_of_Bavaria',
        founded: 'issued purity regulation for the brewing of Bavarian Beer'
    };
    this.people[7] = {
        name: 'Julius Lothar Meyer',
        dynmapId:'08', 
        picUrl: 'images/germanPeople/Lmeyer.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Lothar_Meyer',
        founded: 'Periodic table of chemical elements'
    };
    this.people[8] = {
        name: 'Karlheinz Brandenburg',
        dynmapId:'09', 
        picUrl: 'images/germanPeople/karlheinzbrandenburg.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Karlheinz_Brandenburg',
        founded: 'co-developer of the MP3 file format'
    };
    this.people[9] = {
        name: 'Gottlieb Daimler',
        dynmapId:'10', 
        picUrl: 'images/germanPeople/gottliebdaimler.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Gottlieb_Daimler',
        founded: 'automotive pioneer,  invented the first high-speed petrol engine'
    };
    this.people[10] = {
        name: 'Karl Benz',
        dynmapId:'16', 
        picUrl: 'images/germanPeople/ottohahn.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Otto_Hahn',
        founded: 'Nuclear fission,Discovery of radioactive elements '
    };
    this.people[11] = {
        name: 'Melitta Bentz',
        dynmapId:'17', 
        picUrl: 'images/germanPeople/melittabentz.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Melitta_Bentz',
        founded: 'invented the coffee filter in 1908'
    };
    this.people[12] = {
        name: 'Felix Hoffmann',
        dynmapId:'18', 
        picUrl: 'images/germanPeople/felixhoffmann.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Felix_Hoffmann',
        founded: 'synthesized acetylsalicylic acid ( known as ASPIRIN )'
    };             
    this.people[13] = {
        name: 'Hans von Ohain',
        dynmapId:'19', 
        picUrl: 'images/germanPeople/hansvonohain.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Hans_Joachim_Pabst_von_Ohain',
        founded: 'one of the inventors of jet propulsion'
    };                            
                                  
    this.people[14] = {
        name: 'Robert Koch',
        dynmapId:'20', 
        picUrl: 'images/germanPeople/robertkoch.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Robert_Koch',
        founded: 'Isolation of anthrax, tuberculosis and cholera'
    };    
    this.people[15] = {
        name: 'Artur Fischer',
        dynmapId:'21', 
        picUrl: 'images/germanPeople/arturfischer.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Artur_Fischer',
        founded: 'inventor of "S Plug" (Split-)Wallplug'
    };  
    this.people[16] = {
        name: 'Artur Fischer',
        dynmapId:'22', 
        picUrl: 'images/germanPeople/arturfischer.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Artur_Fischer',
        founded: 'inventor of "S Plug" (Split-)Wallplug'
    };  
    this.people[17] = {
        name: 'Emil Berner',
        dynmapId:'23', 
        picUrl: 'images/germanPeople/emilberner.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Emil_Berliner',
        founded: 'developing the disc record gramophone '
    };  
    this.people[18] = {
        name: 'Martin Luther',
        dynmapId:'24', 
        picUrl: 'images/germanPeople/martinluther.jpeg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Martin_Luther',
        founded: 'initiated the Protestant Reformation'
    };   
    this.people[19] = {
        name: 'Otto von Guericke',
        dynmapId:'25', 
        picUrl: 'images/germanPeople/ottovonguerick.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Otto_von_Guericke',
        founded: 'Research and experiment for vacuums'
    };                                   
    //http://de.wikipedia.org/wiki/Melitta_Bentz
                                 

};
canvasWorker.prototype.drawRectTop = function (imgSrc,ctx) {
    var img = new Image();          
    img.onload = function () {   
        // Filled triangle
        ctx.strokeStyle="black"; //  line color
        ctx.lineWidth=5; // line width
        ctx.fillStyle = 'transparent';
        ctx.moveTo(30,55); // 1
        ctx.lineTo(210,55); // 2
        ctx.lineTo(120,220); // 3
              
        ctx.closePath();	   
        ctx.stroke();
        ctx.fill();

        ctx.clip();

        ctx.drawImage(img,0,0,220,240);
    //console.log('im here', ctx, img);
    };
    img.src = imgSrc;
}
/**
             *
             *   ctx.strokeStyle="#002DAF"; //  line color
                   ctx.lineWidth=1; // line width
                   ctx.fillStyle = 'transparent';
                   ctx.moveTo(80,0); // 1
                   ctx.lineTo(0,170); // 2
                   ctx.lineTo(160,170); // 3
              
                   ctx.closePath();	   
                   ctx.stroke();
                   ctx.fill();

                    ctx.clip();

                    ctx.drawImage(img,0,0, 170,160);
                    console.log('im here', ctx, img);
           save
            *
            */
canvasWorker.prototype.drawRectDown = function (imgSrc,ctx) {
    var img = new Image();          
    img.onload = function () {   
        // Filled triangle
        ctx.strokeStyle="black"; //  line color
        ctx.lineWidth=5; // line width
        ctx.fillStyle = 'transparent';
        ctx.moveTo(120,0); // 1
        ctx.lineTo(30,165); // 2
        ctx.lineTo(210,165); // 3
              
        ctx.closePath();	   
        ctx.stroke();
        ctx.fill();

        ctx.clip();

        ctx.drawImage(img,0,0, 240,240);
        console.log('im here', ctx, img);
    };
    img.src = imgSrc;
}
            
/**
             * creates an new canvas element in the dom and inject it into the given 
             * object from the dymaxion map
             */
canvasWorker.prototype.createCanvas = function (id, peopleObj) {
    var canvas = document.createElement('canvas');
    canvas.setAttribute('id', id);
    canvas.setAttribute('mkpeople' , id);
    canvas.setAttribute('width' , 240);
    canvas.setAttribute('height' , 220);
    var injectIn = document.getElementById('p'+peopleObj.dynmapId);
    //save the old Element of the "worlds part" to toggle back
    var fallObj = {
        element:injectIn.firstChild, 
        pId:peopleObj.dynmapId
        };
    this.originContent.push(fallObj);
                
    var pathId = injectIn.firstChild.src.split('path0');

    injectIn.removeChild(injectIn.firstChild);
    injectIn.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    if(pathId[1]=='1.png') {
        this.drawRectTop(peopleObj.picUrl,ctx);
    }
    if(pathId[1]=='2.png')
        this.drawRectDown(peopleObj.picUrl,ctx);
    
}
canvasWorker.prototype.toggleBackToWorld = function () {
    //removes all the pictures
    this.originContent.forEach(function(value,key) {
        var injectIn = document.getElementById('p'+value.pId);
        injectIn.removeChild(injectIn.firstChild);
        injectIn.appendChild(value.element);
    });
}
            
canvasWorker.prototype.printPeopleInfo = function (humanObj) {
   
    //build here the human info
    var infoBox = document.getElementById('humanInfo');
    infoBox.style.display = 'block';
    var img = new Image();
    img.width = 200;
    img.height = 200;
    img.src = humanObj.picUrl;
    infoBox.innerHTML = '';
    img.style.float = 'left';
    var Name = document.createElement('h2');
    Name.innerHTML = humanObj.name;
    
    var Link = document.createElement('a');
    Link.innerHTML =  humanObj.name + ' on wikipedia';
    Link.setAttribute('href', humanObj.wikiUrl);
    Link.setAttribute('target', '_blank');
    
    var infoTxt = document.createElement('p');
    infoTxt.innerHTML = humanObj.founded;
    infoBox.appendChild(Name);
    infoBox.appendChild(infoTxt);
    infoBox.appendChild(Link);
    
    infoBox.appendChild(img);
   
}
/**
 * buzzer// this is the 
 */
            
canvasWorker.prototype.printPeople = function() {
    //check if this is smaller
    if(this.currentPeopleIndex < this.people.length) {
        debugAdd('Adding "stars"' + this.people[this.currentPeopleIndex].name);
        this.createCanvas(this.currentPeopleIndex,this.people[this.currentPeopleIndex]);
        this.printPeopleInfo(this.people[this.currentPeopleIndex]);
        this.currentPeopleIndex++;
        canvasObj
        window.setTimeout("canvasObj.printPeople()", 5000);
    }
    /*
    (function(canvasWorkerObj){
        canvasWorkerObj.people.forEach(function(value,key) {
            console.log(key,value);
            canvasWorkerObj.createCanvas(key,value);
            //Hier eine Pause einführen und die Informationen über den aktuellen 
            canvasWorkerObj.printPeopleInfo(value);
            //Person anzeigen
           // debugAdd("Delay100");
            //delay(1000);
            
        });
    })(this); */
    //this.bindEvents(document.getElementById('container'));
}
/**
             * binds the events to the canvas elements and calc if the 
             * click is on the picture ! in path
             */

            
canvasWorker.prototype.calcWidth = function (e) {
    var x;
    var y;
    if (e.pageX || e.pageY) { 
        x = e.pageX;
        y = e.pageY;
    }
    else { 
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
    } 
  
    var coord = new Array(x,y);
    
    return coord;
}

