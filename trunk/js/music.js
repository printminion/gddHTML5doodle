window.util = window.url || {};

util.max = function(array) {
	var max = array[0];
	var len = array.length;
	for ( var i = 0; i < len; ++i) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

util.average = function(array) {
	var sum = 0;
	var len = array.length;
	for ( var i = 0; i < len; ++i) {
		sum += array[i];
	}
	return sum / len;
}

function Sound() {
	const
	MIX_TO_MONO = false;
	const
	NUM_SAMPLES = 2048;

	var self_ = this;
	var context_ = new (window.AudioContext || window.webkitAudioContext)();
	var source_ = null;
	var jsProcessor_ = null;
	var analyser_ = null;
	var numZero_ = 0;

	this.playing = false;

	var processAudio_ = function(e) {

		// Get left/right input and output arrays
		var inputArrayL = e.inputBuffer.getChannelData(0);
		var inputArrayR = e.inputBuffer.getChannelData(1);

		// Set output data.
		e.outputBuffer.getChannelData(0).set(inputArrayL)
		e.outputBuffer.getChannelData(1).set(inputArrayR)

		// TODO(ericbidelman): Figure out if this is safe.
		// Don't do any of the remaining processing/computation if there's no
		// input.
		if (inputArrayL[0] == 0 && inputArrayR[0] == 0) {
			numZero_++;

			if (numZero_ > 10) { // silence, assume no input
				gradient.style.backgroundSize = '76% 41%, 55% 100%, 100% 100%';
				resetCanvas();
				// canvas.classList.add('hidden');
				numZero_ = 0;
			}
			return;
		}

		var freqByteData = new Uint8Array(analyser_.frequencyBinCount);

		if (waveForm.checked) {
			analyser_.getByteTimeDomainData(freqByteData);
		} else {
			analyser_.getByteFrequencyData(freqByteData);
			// analyser_.fftSize = 2048;
		}

		var percent = Math.min((util.max(freqByteData) / 150) * 100, 105);
		// console.log(percent)

		updateCanvas(percent);

		// gradient.style.backgroundSize = '76% 41%, 55% 100%, ' + percent + '%,
		// ' + percent + '%';

		if (showCanvas.checked) {
			self_.renderFFT('canvas', freqByteData);
		}
	};

	this.renderFFT = function(format, freqByteData) {
		if (format == 'canvas') {
			const
			SPACER_WIDTH = 5;
			const
			BAR_WIDTH = 5;
			const
			numBars = Math.round(canvas.width / SPACER_WIDTH);

			/*
			 * ctx.clearRect(0, 0, canvas.width, canvas.height);
			 *  // Draw rectangle for each frequency bin. var y = (canvas.height /
			 * 2) + 3; for (var i = 0; i < numBars; ++i) { var magnitude =
			 * freqByteData[i]; var height = magnitude / (canvas.height / 50);
			 * ctx.fillRect(i * SPACER_WIDTH, y, BAR_WIDTH, -height);
			 * ctx.fillRect(i * SPACER_WIDTH, y, BAR_WIDTH, height); }
			 */

		}
	};

	this.initAudio = function(arrayBuffer) {
		if (source_) {
			runCmd('stop');
		}

		source_ = context_.createBufferSource();
		source_.looping = false;

		// Use async decoder if it is available.
		if (context_.decodeAudioData) {
			context_.decodeAudioData(arrayBuffer, function(buffer) {
				source_.buffer = buffer;
			}, function(e) {
				console.log(e);
			});
		} else {
			source_.buffer = context_
					.createBuffer(arrayBuffer, MIX_TO_MONO /* mixToMono */);
		}

		// This AudioNode will do the amplitude modulation effect directly in
		// JavaScript
		jsProcessor_ = context_
				.createJavaScriptNode(NUM_SAMPLES /* bufferSize */,
						1 /* num inputs */, 1 /* num outputs */);
		jsProcessor_.onaudioprocess = processAudio_;

		analyser_ = context_.createAnalyser();

		/*
		 * var gainNode = context_.createGainNode(); gainNode.gain.value = 10;
		 * source_.connect(gainNode); gainNode.connect(jsProcessor_)
		 */

		// Connect the processing graph: source -> jsProcessor -> analyser ->
		// destination
		source_.connect(analyser_);

		analyser_.connect(jsProcessor_);
		jsProcessor_.connect(context_.destination);

		// source_.connect(context_.destination);

		// runCmd('play');
	};

	this.load = function(url) {
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';
		request.onload = function(e) {
			document.querySelector("[data-func='play']").disabled = false;
			self_.initAudio(request.response);
		};
		request.send();
	};

	this.play = function() {
		// var convolver = context_.createConvolver();
		// source_.connect(convolver);
		source_.noteOn(0);

		this.playing = true;
	};

	this.stop = function() {
		source_.noteOff(0);

		this.playing = false;
	};
}

function runCmd(el) {
	if (typeof el == 'string') {
		var func = el;
	} else {
		var func = el.dataset.func.toLowerCase();
	}
	sound[func]();
	el.disabled = !el.disabled;
	switch (func) {
	case 'play':
		document.querySelector("[data-func='stop']").disabled = false;
		break;
	case 'stop':
		document.querySelector("[data-func='play']").disabled = false;
		break;
	default:
		// noop
	}
}

var waveForm = undefined;
// var canvas = undefined;
var showCanvas = undefined;
var gradient = undefined;
// var ctx = undefined;
// ctx.fillStyle = undefined; //rgba(68,0,3,0.2)

var sound = undefined;

function initialize() {

	console.log('init');
	sound = new Sound();

	waveForm = document.getElementById('waveform');
	canvas = document.getElementById('fft');
	showCanvas = document.getElementById('show-canvas');
	gradient = document.getElementById('gradient');
	// ctx = canvas.getContext('2d');
	// ctx.fillStyle = 'rgba(0,0,0,0.1)'; //rgba(68,0,3,0.2)

	sound.load('IO-5.0.ogg');

	showCanvas.addEventListener('change', function(e) {
		canvas.log('change');
		// canvas.classList.toggle('hidden');

	}, false);
}
