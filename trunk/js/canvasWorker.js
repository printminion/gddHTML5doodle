var canvasWorker = function () {
    this.currentPeopleIndex = 0;
    this.originContent = new Array();
    this.people = new Array();
    this.timeout = undefined;
    
    //+6, 7, +16, 17, 8, 9, 10, +20
    
    
    this.people[0] = {
        name: 'Albert Einstein',
        dynmapId:'20', 
        picUrl: 'images/germanPeople/aeinstein.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Albert_Einstein',
        founded: 'General relativity'
    };
    
    this.people[1] = {
            name: 'Otto Hahn',
            dynmapId:'16', 
            picUrl: 'images/germanPeople/ottohahn.jpg', 
            wikiUrl: 'http://en.wikipedia.org/wiki/Otto_Hahn',
            founded: 'Nuclear fussion - discovery of radioactive elements'
	};
    
    this.people[2] = {
        name: 'Wilhelm R&ouml;ntgen',
        dynmapId:'07', 
        picUrl: 'images/germanPeople/konradroentgen.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Konrad_Rontgen',
        founded: 'X-rays'
    };
    
    
    this.people[3] = {
        name: 'Konrad Zuse',
        dynmapId:'17', 
        picUrl: 'images/germanPeople/konradzuse.jpg', 
        wikiUrl: 'http://de.wikipedia.org/wiki/Konrad_Zuse',
        founded: 'First programable computer. Aka Z1, Z3'
    };

    this.people[4] = {
            name: 'Karlheinz Brandenburg',
            dynmapId:'08', 
            picUrl: 'images/germanPeople/karlheinzbrandenburg.jpg', 
            wikiUrl: 'http://en.wikipedia.org/wiki/Karlheinz_Brandenburg',
            founded: 'MP3 file format - co-developer'
        };
    
    this.people[5] = {
        name: 'Philip Reis',
        dynmapId:'10', 
        picUrl: 'images/germanPeople/philipreis.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Philip_Reis',
        founded: 'The first make-and-break telephone'
    };
    
    this.people[6] = {
        name: 'Heinrich Hertz',
        dynmapId:'01', 
        picUrl: 'images/germanPeople/heinrichhertz.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Heinrich_Hertz',
        founded: 'MHz, KHz - Electromagnetic radiation Photoelectric effect'
    };
    this.people[7] = {
            name: 'William IV, Duke of Bavaria',
            dynmapId:'02', 
            picUrl: 'images/germanPeople/wilhelmvonbayern.jpg', 
            wikiUrl: 'http://en.wikipedia.org/wiki/William_IV,_Duke_of_Bavaria',
            founded: 'Bavarian Beer - issued purity regulation for the brewing '
        };
    
    
    this.people[8] = {
            name: 'Melitta Bentz',
            dynmapId:'03', 
            picUrl: 'images/germanPeople/melittabentz.jpg', 
            wikiUrl: 'http://en.wikipedia.org/wiki/Melitta_Bentz',
            founded: 'Coffee filter - invented in 1908'
    };
    
    this.people[9] = {
            name: 'You',
            dynmapId:'06', 
            picUrl: 'images/germanPeople/you.jpg', 
            wikiUrl: 'http://google.com',
            founded: ''
        };  
    
    
    this.people[10] = {
        name: 'Johannes Gutenberg',
        dynmapId:'04', 
        picUrl: 'images/germanPeople/johannesgutenberg.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Johannes_Gutenberg',
        founded: 'Printing press - global inventor, Gutenberg Bible'
    };
    

    
    this.people[11] = {
        name: 'Julius Lothar Meyer',
        dynmapId:'05', 
        picUrl: 'images/germanPeople/Lmeyer.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Lothar_Meyer',
        founded: 'Periodic table of chemical elements'
    };

    this.people[12] = {
        name: 'Gottlieb Daimler',
        dynmapId:'11', 
        picUrl: 'images/germanPeople/gottliebdaimler.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Gottlieb_Daimler',
        founded: 'First high-speed petrol engine - inventor, automotive pioneer'
    };
    

    this.people[13] = {
        name: 'Felix Hoffmann',
        dynmapId:'12', 
        picUrl: 'images/germanPeople/felixhoffmann.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Felix_Hoffmann',
        founded: 'ASPIRIN - synthesized. Aka acetylsalicylic acid'
    };             
    this.people[14] = {
        name: 'Hans von Ohain',
        dynmapId:'13', 
        picUrl: 'images/germanPeople/hansvonohain.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Hans_Joachim_Pabst_von_Ohain',
        founded: 'Jet propulsion - one of the inventors'
    };                            
                                  
    this.people[15] = {
        name: 'Robert Koch',
        dynmapId:'14', 
        picUrl: 'images/germanPeople/robertkoch.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Robert_Koch',
        founded: 'Isolation of anthrax, tuberculosis and cholera'
    };
    
    this.people[16] = {
        name: 'Artur Fischer',
        dynmapId:'15', 
        picUrl: 'images/germanPeople/arturfischer.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Artur_Fischer',
        founded: 'S Plug - inventor. Aka (Split-)Wallplug'
    };  
    this.people[17] = {
        name: 'Emil Berner',
        dynmapId:'18', 
        picUrl: 'images/germanPeople/emilberner.jpg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Emil_Berliner',
        founded: 'Disc record gramophone - developer'
    };  
    this.people[18] = {
        name: 'Martin Luther',
        dynmapId:'19', 
        picUrl: 'images/germanPeople/martinluther.jpeg', 
        wikiUrl: 'http://en.wikipedia.org/wiki/Martin_Luther',
        founded: 'Protestant Reformation - initiator'
    };
    
    this.people[19] = {
        name: 'Otto von Guericke',
        dynmapId:'20', 
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
     var infoBox = document.getElementById('humanInfo');
     infoBox.style.display = 'none';
    this.originContent.forEach(function(value,key) {
        var injectIn = document.getElementById('p'+value.pId);
        injectIn.removeChild(injectIn.firstChild);
        injectIn.appendChild(value.element);
    });
}
            
canvasWorker.prototype.printPeopleInfo = function (humanObj) {
   
	this.onPersonUpdate(humanObj);
     
	 
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
        this.timeout = window.setTimeout("canvasObj.printPeople()", 5000);
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
};

canvasWorker.prototype.onPersonUpdate = function(person){
	
};

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

