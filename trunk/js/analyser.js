/**
 * analyser.js
 * this file analyses the sound wich will be loaded async
 * and make it avaiable to render some visualisation 
 * in context with the current played music!
 *
 */
var analyser = function () {

}

analyser.prototype.init = function () {
    console.log("im here");
    //number of channels to visualize
    this.visChannels = 19;
    this.context = null;
    this.source = 0;
    this.jsProcessor = 0;
   
    this.topic = 'jsfftwebaudio';
    this.comment_teaser = 'Please leave a comment...'; 
    this.spectrum_on = true;	
    //this.ctxD = document.getElementById('dIV');
    this.theme = ["rgba(255, 255, 255,","rgba(240, 240, 240,","rgba(210, 210, 210,","rgba(180, 180, 180,","rgba(150, 150, 150,","rgba(120, 120, 150,","rgba(90, 90, 150,","rgba(60, 60, 180,","rgba(30, 30, 180,","rgba(0, 0, 200,","rgba(0, 0, 210,","rgba(0, 0, 220,","rgba(0, 0, 230,","rgba(0, 0, 240,","rgba(0, 0, 255,","rgba(0, 30, 255,","rgba(0, 60, 255,","rgba(0, 90, 255,","rgba(0, 120, 255,","rgba(0, 150, 255,"];
		
    this.histoindex = 0;
    this.histomax = 500;
		
    this.histobuffer_x = new Array();
    this.histobuffer_y = new Array();
    this.histobuffer_t = new Array();
    for (a=0;a<this.histomax;a++) {
        this.histobuffer_t[a] = 0;
    }
		
    this.maxvalue = new Array();
    for (a=0;a<1024;a++) {
        this.maxvalue[a] = 0;
    }
		
    this.currentvalue = new Array();
		
    this.frameBufferSize = 4096;
    this.bufferSize = this.frameBufferSize/4;
		
    this.signal = new Float32Array(this.bufferSize);
    this.peak = new Float32Array(this.bufferSize);
		
    this.fft = new FFT(this.bufferSize, 44100);
		
		
    //this.canvas = document.getElementById('fft');
    //this.ctx = this.canvas.getContext('2d');
    //cubus stuff
   
   
    this.initAudio();
}


window.onload = function () {
    console.log("FOO");
    
};
 


analyser.prototype.loadSample = function (url) {
    // Load asynchronously

    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    (function(ObjContext) {
        request.onload = function() { 
            ObjContext.source.buffer = ObjContext.context.createBuffer(request.response, false);
            ObjContext.source.looping = false;
            // ObjContext.source.noteOn(0);
            //ObjContext.bindEvents();
            //ObjContext.initSpectralAnalyser(ObjContext.currentvalue.length);
            ObjContext.visualizer();				// run jsfft visualizer
        }
    ;
    })(this);
    request.send();
}

analyser.prototype.initAudio = function () {
    this.context = new webkitAudioContext();
    this.source = this.context.createBufferSource();

    // This AudioNode will do the amplitude modulation effect directly in JavaScript
    this.jsProcessor = this.context.createJavaScriptNode(2048);

    this.jsProcessor.onaudioprocess = window.analyserObj.audioAvailable;			// run jsfft audio frame event

    // Connect the processing graph: source -> jsProcessor -> analyser -> destination
    this.source.connect(this.jsProcessor);
    this.jsProcessor.connect(this.context.destination);

    // Load the sample buffer for the audio source
    this.loadSample("media/gdd2011beat.mp3");
}

	
analyser.prototype.audioAvailable = function (event) {
    // Copy input arrays to output arrays to play sound
    var inputArrayL = event.inputBuffer.getChannelData(0);
    var inputArrayR = event.inputBuffer.getChannelData(1);
    var outputArrayL = event.outputBuffer.getChannelData(0);
    var outputArrayR = event.outputBuffer.getChannelData(1);
			
    var n = inputArrayL.length;
    for (var i = 0; i < n; ++i) {
        outputArrayL[i] = inputArrayL[i];
        outputArrayR[i] = inputArrayR[i];
                         
        window.analyserObj.signal[i] = (inputArrayL[i] + inputArrayR[i]) / 2;		// create data frame for fft - deinterleave and mix down to mono
    }
			
    // perform forward transform
    window.analyserObj.fft.forward(window.analyserObj.signal);
			
    for ( var i = 0; i < window.analyserObj.bufferSize/8; i++ ) {
        magnitude = window.analyserObj.fft.spectrum[i] * 1000; 					// multiply spectrum by a zoom value
				
        window.analyserObj.currentvalue[i] = magnitude;
				
        if (magnitude > window.analyserObj.maxvalue[i]) {
            window.analyserObj.maxvalue[i] = magnitude;
            window.analyserObj.makeSize(magnitude-20);
        } else {
            if (window.analyserObj.maxvalue[i] > 10) {
                window.analyserObj.maxvalue[i]--;
            }
        }
			
    }
			
			
}
analyser.prototype.breakPlay = function () {
    this.source.noteOff(0);
}		

analyser.prototype.startPlay = function () {
    this.source.noteOn(0);
}

analyser.prototype.makeSize = function (x,y)  {
    y = Math.floor(y);
			
    this.histobuffer_t[this.histoindex] = 19;
	
    this.histobuffer_y[this.histoindex++] = y;
			
    if (this.histoindex > this.histomax) {
        this.histoindex = 0;
    }
}



		
		
analyser.prototype.initSpectralAnalyser = function (length) {
    var idD = 'analyse';
  /*  for (var i=0; i<length; i++) {
        // Draw rectangle bars for each frequency bin
        var div = document.createElement('div');
        div.setAttribute('id', idD+i);
        div.setAttribute('style', 'border:1px solid black;width:10px;height:10px');
        div.innerHTML = i;
        this.ctxD.appendChild(div);
    }*/
}		
analyser.prototype.visualizer = function () {
	
    //ctx.clearRect(0,0, canvas.width, canvas.height);
    
		   
    if (this.spectrum_on) {
        //this.ctx.fillStyle = '#000044';

        for (var i=0; i<this.visChannels; i++) {
            // Draw rectangle bars for each frequency bin
            var zIndex =  120+Math.round(this.currentvalue[i]);
            updateZ(zIndex, i+1);
        }
    }
 
    t = setTimeout('window.analyserObj.visualizer()',50);
}
	
	
analyser.prototype.toggle_spectrum = function () {
    if (this.spectrum_on) {
        this.spectrum_on = false;
    } else {
        this.spectrum_on = true;		
    }
}

analyser.prototype.bindEvents = function () {
    this.breakPlay();
    var breakMe = document.getElementById('stop');
    var playMe = document.getElementById('play');
    breakMe.setAttribute('enabled');
   try {
    (function(analyserObj) {
        breakMe.addEventListener('click', function (event) {
               
                    analyserObj.breakPlay();
        }, true);
        playMe.addEventListener('click', function (event) {
                    
                    analyserObj.startPlay();
        }, true);
    })(this);    
    } catch(e) {
        debugAdd(e);
    }
}
