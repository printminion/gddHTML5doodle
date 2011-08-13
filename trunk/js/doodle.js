/*functions from doodle.html*/
var translateZDefault = 140;
var currentState = 'plane';

var p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p211, p212, p201, p202 = undefined;

var rotateYValue, rotateXValue, translateZValue = 0;
var container = undefined;
var debugMode = 'console'; // conosle, window, none
var debug = new Array();
var debugBorder = new Array();
var activeStep = 0;
//all global timeouts 
var timeOutStep1 = undefined;
var timeout2 = undefined;
var loader = undefined;
function step(n) {
	/*
	 * undo if possible & neccessary an old state
	 */
	if (activeStep != 0) {
		undoLastStep(activeStep);
	}
        clearAllStepTimeouts();
	$('#steps button').removeClass('selected');
	$('#steps button#btnStep' + n).addClass('selected');

	switch (n) {
	case 1:
	    _gaq.push(['_trackPageview','/step/flatworld']);

		step1();
		break;
	case 2:
	    _gaq.push(['_trackPageview','/step/superstarsworld']);

		step2();
		break;
	case 3:
	    _gaq.push(['_trackPageview','/step/teamworld']);
		step3();
		break;
	case 4:
	    _gaq.push(['_trackPageview','/step/4world']);

		step4();
		break;
	case 6:
	    _gaq.push(['_trackPageview','/step/stopworld']);

		step6();
		break;

	default:
	    _gaq.push(['_trackPageview','/step/unknown']);
		
		alert('not implemented step' + n);
		break;
	}

}
function startAgain(audioEl) {
 
                    audioEl.currentTime = 0;

            
}
function playPreloadSound(stop) {
	audioElement = document.getElementById('audio');
        if(stop != undefined) {
            
            audioElement.removeEventListener('ended', startAgain, true);
        }
        else {
            audioElement.addEventListener('ended', startAgain(this), false);
            audioElement.play();
        }
}
function undoLastStep(n) {
	switch (n) {

	case 3:
		undoStep3();
		break;
	case 2:
		undoStep2();
		break;
	}
}
/**
 * when the step is changed then remove all the timeouts
 */
function clearAllStepTimeouts() {
    window.clearTimeout(timeOutStep1);
    window.clearTimeout(timeout2);
     window.removeEventListener('humanShowEnded');
}

function step1() {
	// be sure that we will be in the plane mode when we start with step1
	if (currentState != "plane")
		changeShape('plane');
	activeStep = 1;
	/*
	 * start music - 2257__Andrew_Duke__click1.wav
         * stopp rotating
	 */
     
	/*
	 * map container z rotate => isometric image
	 */

	$('#container').css('-webkit-transform', 'rotateX(21deg) rotateY(3deg)');

	/*
	 * start music - gdd2011beat.mp3
	 */
	window.analyserObj.source.noteOn(0);

	/*
	 * start beat on each cell
	 */
	window.analyserObj.rolloutPannels();
	/*
	 * fade each cell into show maps pieces
	 */
	timeOutStep1 = window.setTimeout("step(2)", 18000);

}

function step2() {
	activeStep = 2;
	/*
	 * transform to 3d - rotate, music beat
	 */
	changeShape('3d');
	$('#container').css('-webkit-transform', 'rotateX(0deg) rotateY(0deg)');

	// starting roate, adding spinanimation
	spinEnable(true);
	
	/*
	 * start showing "superstars"
	 */
        window.addEventListener('humanShowEnded', function() {
            //wait 20sec and show step3
            timeout2 = window.setTimeout("step(3)", 40000);
        }, false); // humanShowEnded
	window.canvasObj.printPeople();

	/*
	 * on 10th - superstar - show buzzer
         * this is implementated :) todo:make buzzer nice ;) 
	 */
       

}

function spinEnable(spin) {
	document.getElementById('shape-container').style.webkitAnimation = spin ? "spinanimation 10s infinite linear" : '';
}

function undoStep2() {
	// removing the "german supertars"
	window.canvasObj.toggleBackToWorld();
        //stopping adding Superstars
        
        
}

function step3() {
     
	if (currentState != "3d") {
		changeShape('3d');
	}

	activeStep = 3;
	/*
	 * onBuzzer click
	 */
	// make night
	window.nightStar.toggleDayNight();
	/*
	 * move earth - to the left
	 */
        

        

        document.getElementById('shape-container').style.webkitAnimation = "spinanimation 10s infinite linear";
        
        $('#container').addClass('leftNyan');

	$('#persons section.current').attr('class', 'past');
	
    
	/*
	 * add 3 videos of us
	 */
 
        window.videoObj.addVideos();
	/*
	 * add nyan cat - running around the globe
	 */
	document.getElementById('nyannyan').style.display = 'block';
	/*
	 * start nyan song loop - if with copyright is ok
	 */
         document.getElementById('container').addEventListener("transitionend", function () {console.log('done')}, true);
         document.getElementsByTagName('body')[0].addEventListener("transitionend", function () {console.log('done')}, true);
	/*
	 * add end titles with superstars, credits and so on
	 */
        $('#credits').css('display', 'block');
        window.setTimeout("showCredits()", 3000);
        
        //$('#creditCont').removeClass('cdown').addClass('cup');

}

function showCredits() {
    var creditsCont = document.getElementById('creditCont');         creditsCont.setAttribute('class', 'cup');
}

function undoStep3() {
	window.nightStar.toggleDayNight();
         $('#container').removeClass('leftNyan');
	document.getElementById('nyannyan').style.display = 'none';
        window.videoObj.removeVideos();
        document.getElementById('shape-container').style.webkitAnimation = '';
}

function step4() {
	document.getElementById('shape-container').style.webkitAnimation = "";
}

function step6() {
	showDebugBorder();
}
/**
 * fixed bug in chrome
 */
function videoMuteHelper() {
	var video = document.getElementsByTagName('video');
	var max = video.length;
	for (i = 0; i < video.length; i++) {
		video[i].muted = true;
	}
}

/* functions from doodle.html */
var translateZDefault = 140;
var currentState = 'plane';
var analyserState = true;
var p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p211, p212, p201, p202 = undefined;
var audioElement;

function removeDebugBorder() {

	try {
            document.getElementById('logo').addEventListener('click', showDebugBorder, false);
	
	} catch (e) {

	}

}

function showDebugBorder() {
        debugAdd("adding Borders to Elements");
        $('.d').toggleClass('debugd');
        $('.r').toggleClass('debugr');
        $('.g').toggleClass('debugg');
	
}

/**
 * this method started the step1 after the music is loaded
 * here we can add some magic functions. we can wait until four our five things are loaded and say: "hey im ready"
 */
function kickstart() {
    debugAdd('now im starting...much fun');
    showBootstrap('stop');
    playPreloadSound('stop');
    step(1);
   
}
function showBootstrap(stop) {
    
    var wait = document.getElementById('loadingIndicator');
    if(stop == undefined) {
        debugAdd("show init layer");
        wait.style.display = 'block';
        loader = 'active';
    } else {
        loader = undefined;
        wait.style.display = 'none';
    }
}
function init() {
	// fix an chrome bug, workaround
	videoMuteHelper();
        //show wait 
        showBootstrap();
        //adding here new eventListener, wait that all is loaded
        window.document.addEventListener('analyserLoaded', function() {debugAdd('loaded All.. now building BufferArray')}, true);
        window.document.addEventListener('analyserBuffered', function() { kickstart();debugAdd('the buffer is ready')}, true);
        window.document.addEventListener('analyserCriticalError', function() {alert('the mp3 is not found, maybe a network error?')}, true);
	// remove the debug border analyserCriticalError
	removeDebugBorder();
	if (analyserState == true) {
		window.analyserObj = new analyser();
		window.analyserObj.init();
	}

	/*
	 * play preload sound
	 */
	playPreloadSound();
	// init the people class :P
	window.canvasObj = new canvasWorker();
	window.nightStar = new nightStar();
        window.videoObj = new videoDev();
	/*
	 * add people as html
	 */

	for (i in window.canvasObj.people) {
		$('#persons')
				.append(
						'<section id="person'
								+ window.canvasObj.people[i].dynmapId
								+ '" class="future">'
								+ '<img src="' + window.canvasObj.people[i].picUrl + '" width="150"/>'
								+ '<h3>'
								+ window.canvasObj.people[i].name
								+ '</h3><a href="'
								+ window.canvasObj.people[i].wikiUrl
								+ '" target="_blank">'
								+ window.canvasObj.people[i].founded
								+ '</a></section>');
	}

	/*
	 * start showing "superstars"
	 */
	window.canvasObj.onPersonUpdate = function(person) {
		$('#person' + person.dynmapId).prev().attr('class', 'past');
		$('#person' + person.dynmapId).attr('class', 'current');
	};

	document.getElementById('translateZ').value = translateZDefault;

	rotateYValue = document.getElementById('rotateY').value;
	rotateXValue = document.getElementById('rotateX').value;
	translateZValue = document.getElementById('translateZ').value;

	container = document.getElementById('shape');

	p01 = document.getElementById('p01');
	p02 = document.getElementById('p02');
	p03 = document.getElementById('p03');
	p04 = document.getElementById('p04');
	p05 = document.getElementById('p05');
	p06 = document.getElementById('p06');
	p07 = document.getElementById('p07');
	p08 = document.getElementById('p08');
	p09 = document.getElementById('p09');
	p10 = document.getElementById('p10');
	p11 = document.getElementById('p11');
	p12 = document.getElementById('p12');
	p13 = document.getElementById('p13');
	p14 = document.getElementById('p14');
	p15 = document.getElementById('p15');
	p16 = document.getElementById('p16');
	p17 = document.getElementById('p17');
	p18 = document.getElementById('p18');
	p19 = document.getElementById('p19');
	p20 = document.getElementById('p20');

	p211 = document.getElementById('p211');
	p212 = document.getElementById('p212');

	p201 = document.getElementById('p201');
	p202 = document.getElementById('p202');

	document
			.getElementById('rotateY')
			.addEventListener(
					'change',
					function(e) {
						rotateYValue = this.valueAsNumber;
						document.getElementById('rotateYValue').innerText = rotateYValue;
						container.style.webkitTransform = 'rotateX('
								+ rotateXValue + 'deg) rotateY(' + rotateYValue
								+ 'deg) rotateZ(' + rotateZValue + 'deg)';

					}, false);

	document
			.getElementById('rotateX')
			.addEventListener(
					'change',
					function(e) {
						rotateXValue = this.valueAsNumber;
						document.getElementById('rotateXValue').innerText = rotateXValue;
						container.style.webkitTransform = 'rotateX('
								+ rotateXValue + 'deg) rotateY(' + rotateYValue
								+ 'deg) rotateZ(' + rotateZValue + 'deg)';
					}, false);

	document
			.getElementById('rotateZ')
			.addEventListener(
					'change',
					function(e) {
						rotateZValue = this.valueAsNumber;
						document.getElementById('rotateZValue').innerText = rotateZValue;
						container.style.webkitTransform = 'rotateX('
								+ rotateXValue + 'deg) rotateY(' + rotateYValue
								+ 'deg) rotateZ(' + rotateZValue + 'deg)';
					}, false);

	document
			.getElementById('translateZ')
			.addEventListener(
					'change',
					function(e) {
						translateZValue = this.valueAsNumber;
						document.getElementById('translateZValue').innerText = translateZValue;
						updateZ(translateZValue);
					}, false);
}

function resetCanvas() {

}

function updateCanvas(percent) {
	updateZ(translateZValue + percent);

}

function updateZ(transZ, containerId) {

	if (currentState == '3d') {
		if (containerId != undefined) {
			transZ = 140 + transZ;
			switch (containerId) {
			case 1:
				p01.style.webkitTransform = ' rotateY(0deg) rotateX(52.5deg) translateZ('
						+ transZ + 'px) ';
				break;
			case 2:
				p02.style.webkitTransform = ' rotateY(72deg)rotateX(52.5deg) translateZ('
						+ transZ + 'px) ';
				break;
			case 3:
				p03.style.webkitTransform = ' rotateY(144deg) rotateX(52.5deg) translateZ('
						+ transZ + 'px) ';
				break;
			case 4:
				p04.style.webkitTransform = ' rotateY(216deg) rotateX(52.5deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 5:
				p05.style.webkitTransform = ' rotateY(288deg) rotateX(52.5deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 6:
				p06.style.webkitTransform = ' rotateY(0deg) rotateX(11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 7:
				p07.style.webkitTransform = ' rotateY(72deg) rotateX(11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 8:
				p08.style.webkitTransform = ' rotateY(144deg) rotateX(11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 9:
				p09.style.webkitTransform = ' rotateY(216deg) rotateX(11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 10:
				p10.style.webkitTransform = ' rotateY(288deg) rotateX(11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 11:
				p16.style.webkitTransform = ' rotateY(36deg) rotateX(-11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 12:
				p17.style.webkitTransform = ' rotateY(108deg) rotateX(-11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 13:
				p18.style.webkitTransform = ' rotateY(180deg) rotateX(-11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 14:
				p19.style.webkitTransform = ' rotateY(252deg) rotateX(-11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 15:
				p20.style.webkitTransform = ' rotateY(324deg) rotateX(-11deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 16:
				p21.style.webkitTransform = ' rotateY(34deg) rotateX(-52.5deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 17:
				p22.style.webkitTransform = ' rotateY(108deg) rotateX(-52.5deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 18:
				p23.style.webkitTransform = ' rotateY(180deg) rotateX(-52.5deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 19:
				p24.style.webkitTransform = ' rotateY(252deg) rotateX(-52.5deg)  translateZ('
						+ transZ + 'px) ';
				break;
			case 20:
				p25.style.webkitTransform = ' rotateY(324deg) rotateX(-52.5deg)  translateZ('
						+ transZ + 'px) ';
				break;
			}
		} else {
			p01.style.webkitTransform = ' rotateY(0deg) rotateX(52.5deg) translateZ('
					+ transZ + 'px) ';
			p02.style.webkitTransform = ' rotateY(72deg)rotateX(52.5deg) translateZ('
					+ transZ + 'px) ';
			p03.style.webkitTransform = ' rotateY(144deg) rotateX(52.5deg) translateZ('
					+ transZ + 'px) ';
			p04.style.webkitTransform = ' rotateY(216deg) rotateX(52.5deg)  translateZ('
					+ transZ + 'px) ';
			p05.style.webkitTransform = ' rotateY(288deg) rotateX(52.5deg)  translateZ('
					+ transZ + 'px) ';

			p06.style.webkitTransform = ' rotateY(0deg) rotateX(11deg)  translateZ('
					+ transZ + 'px) ';
			p07.style.webkitTransform = ' rotateY(72deg) rotateX(11deg)  translateZ('
					+ transZ + 'px) ';
			p08.style.webkitTransform = ' rotateY(144deg) rotateX(11deg)  translateZ('
					+ transZ + 'px) ';
			p09.style.webkitTransform = ' rotateY(216deg) rotateX(11deg)  translateZ('
					+ transZ + 'px) ';
			p10.style.webkitTransform = ' rotateY(288deg) rotateX(11deg)  translateZ('
					+ transZ + 'px) ';

			p16.style.webkitTransform = ' rotateY(36deg) rotateX(-11deg)  translateZ('
					+ transZ + 'px) ';
			p17.style.webkitTransform = ' rotateY(108deg) rotateX(-11deg)  translateZ('
					+ transZ + 'px) ';
			p18.style.webkitTransform = ' rotateY(180deg) rotateX(-11deg)  translateZ('
					+ transZ + 'px) ';
			p19.style.webkitTransform = ' rotateY(252deg) rotateX(-11deg)  translateZ('
					+ transZ + 'px) ';
			p20.style.webkitTransform = ' rotateY(324deg) rotateX(-11deg)  translateZ('
					+ transZ + 'px) ';

			p21.style.webkitTransform = ' rotateY(34deg) rotateX(-52.5deg)  translateZ('
					+ transZ + 'px) ';
			p22.style.webkitTransform = ' rotateY(108deg) rotateX(-52.5deg)  translateZ('
					+ transZ + 'px) ';
			p23.style.webkitTransform = ' rotateY(180deg) rotateX(-52.5deg)  translateZ('
					+ transZ + 'px) ';
			p24.style.webkitTransform = ' rotateY(252deg) rotateX(-52.5deg)  translateZ('
					+ transZ + 'px) ';
			p25.style.webkitTransform = ' rotateY(324deg) rotateX(-52.5deg)  translateZ('
					+ transZ + 'px) ';

		}
		// change
		/**/

	} else {
		if (containerId != undefined) {
			transZ = 50 + transZ;
			switch (containerId) {
			case 1:
				p01.style.webkitTransform = ' translateX(-241px) translateY(-116px) rotateZ(57deg) translateZ('
						+ transZ + 'px) ';
				break;
			case 2:
				p02.style.webkitTransform = ' translateX(-145px) translateY(-67px) translateZ('
						+ transZ + 'px) ';
				break;
			case 3:
				p03.style.webkitTransform = ' translateX(-49px) translateY(-116px) rotateZ(-58deg) translateZ('
						+ transZ + 'px) ';
				break;
			case 4:
				p04.style.webkitTransform = ' translateX(228px) translateY(-67px) translateZ('
						+ transZ + 'px) ';

				break;
			case 5:
				p05.style.webkitTransform = ' translateX(414px) translateY(-67px) translateZ('
						+ transZ + 'px) ';

				break;
			case 6:
				p06.style.webkitTransform = ' translateX(-330px) translateY(47px) translateZ('
						+ transZ + 'px) ';

				break;
			case 7:
				p08.style.webkitTransform = ' translateX(42px) translateY(47px) translateZ('
						+ transZ + 'px) ';
				p25.style.webkitTransform = ' translateX(-333px) translateY(267px) rotateZ(-57deg) translateZ('
						+ transZ + 'px) ';
				break;
			case 8:
				p07.style.webkitTransform = ' translateX(-144px) translateY(47px) translateZ('
						+ transZ + 'px) ';
				break;
			case 9:
				p09.style.webkitTransform = ' translateX(228px) translateY(47px) translateZ('
						+ transZ + 'px) ';

				break;
			case 10:
				p10.style.webkitTransform = ' translateX(414px) translateY(47px) translateZ('
						+ transZ + 'px) ';

				break;
			case 11:
				p16.style.webkitTransform = ' translateX(-237px) translateY(103px) translateZ('
						+ transZ + 'px) ';

				break;
			case 12:
				p17.style.webkitTransform = ' translateX(-51px) translateY(103px) translateZ('
						+ transZ + 'px) ';
				p211.style.webkitTransform = ' translateX(-237px) translateY(217px) translateZ('
						+ transZ + 'px) ';
				break;
			case 13:
				p18.style.webkitTransform = ' translateX(135px) translateY(103px) translateZ('
						+ transZ + 'px) ';

				break;
			case 14:
				p19.style.webkitTransform = ' translateX(321px) translateY(103px) translateZ('
						+ transZ + 'px) ';

				break;
			case 15:
				p20.style.webkitTransform = ' translateX(-430px) translateY(209px) rotateZ(-57deg) translateZ('
						+ transZ + 'px) ';
				break;
			case 16:
				p201.style.webkitTransform = ' translateX(507px) translateY(103px) translateZ('
						+ transZ + 'px) ';
				p23.style.webkitTransform = ' translateX(135px) translateY(217px) translateZ('
						+ transZ + 'px) ';

				p202.style.webkitTransform = ' translateX(-430px) translateY(209px) rotateZ(-57deg) translateZ('
						+ transZ + 'px) ';

				p21.style.webkitTransform = ' translateX(-247px) translateY(217px) translateZ('
						+ transZ + 'px) ';

				p22.style.webkitTransform = ' translateX(-51px) translateY(217px) translateZ('
						+ transZ + 'px) ';

				p24.style.webkitTransform = ' translateX(233px) translateY(271px) rotateZ(-62deg) translateZ('
						+ transZ + 'px) ';

				p212.style.webkitTransform = ' translateX(-146px) translateY(269px) rotateZ(-57deg) translateZ('
						+ transZ + 'px) ';
				break;
			}
		} else {
			p01.style.webkitTransform = ' translateX(-241px) translateY(-116px) rotateZ(57deg) translateZ('
					+ transZ + 'px) ';
			p02.style.webkitTransform = ' translateX(-145px) translateY(-67px) translateZ('
					+ transZ + 'px) ';
			p03.style.webkitTransform = ' translateX(-49px) translateY(-116px) rotateZ(-58deg) translateZ('
					+ transZ + 'px) ';
			p04.style.webkitTransform = ' translateX(228px) translateY(-67px) translateZ('
					+ transZ + 'px) ';
			p05.style.webkitTransform = ' translateX(414px) translateY(-67px) translateZ('
					+ transZ + 'px) ';

			p06.style.webkitTransform = ' translateX(-330px) translateY(47px) translateZ('
					+ transZ + 'px) ';
			p07.style.webkitTransform = ' translateX(-144px) translateY(47px) translateZ('
					+ transZ + 'px) ';
			p08.style.webkitTransform = ' translateX(42px) translateY(47px) translateZ('
					+ transZ + 'px) ';
			p09.style.webkitTransform = ' translateX(228px) translateY(47px) translateZ('
					+ transZ + 'px) ';
			p10.style.webkitTransform = ' translateX(414px) translateY(47px) translateZ('
					+ transZ + 'px) ';

			p16.style.webkitTransform = ' translateX(-237px) translateY(103px) translateZ('
					+ transZ + 'px) ';
			p17.style.webkitTransform = ' translateX(-51px) translateY(103px) translateZ('
					+ transZ + 'px) ';
			p18.style.webkitTransform = ' translateX(135px) translateY(103px) translateZ('
					+ transZ + 'px) ';
			p19.style.webkitTransform = ' translateX(321px) translateY(103px) translateZ('
					+ transZ + 'px) ';
			p20.style.webkitTransform = ' translateX(-430px) translateY(209px) rotateZ(-57deg) translateZ('
					+ transZ + 'px) ';
			p21.style.webkitTransform = ' translateX(-247px) translateY(217px) translateZ('
					+ transZ + 'px) ';
			p22.style.webkitTransform = ' translateX(-51px) translateY(217px) translateZ('
					+ transZ + 'px) ';
			p23.style.webkitTransform = ' translateX(135px) translateY(217px) translateZ('
					+ transZ + 'px) ';
			p24.style.webkitTransform = ' translateX(233px) translateY(271px) rotateZ(-62deg) translateZ('
					+ transZ + 'px) ';
			p25.style.webkitTransform = ' translateX(-333px) translateY(267px) rotateZ(-57deg) translateZ('
					+ transZ + 'px) ';
		}

	}

}

function changeShape(type) {
	currentState = type;

	if (type == '3d') {
		document.getElementById('shape3d').innerText = 'plane';

		$('#icosahedron').removeClass('plane').addClass('d3');
		$('div#icosahedron div').removeClass('plane').addClass('d3');

	} else {
		document.getElementById('shape3d').innerText = '3d';

		$('#icosahedron').removeClass('d3').addClass('plane');
		$('div#icosahedron div').removeClass('d3').addClass('plane');
                /*stop rotateing in plane
                 ***/
                document.getElementById('shape-container').style.webkitAnimation = "";
	}

}
/**
 *this method shows the developer videos from us in the world
 *but im very tired
 */
function addDeveloperVideos() {
    
}

/*
 * debugging Stuff
 */

function debugShow(msg) {

	switch (debugMode) {
	case 'console':
		console.log(msg);
		break;
	case 'window':
		try {
			var debugContainer = document.getElementById('debug');
			var node = document.createElement('p');
			node.innerHTML = msg;
			debugContainer.insertBefore(node, debugContainer.firstChild);
		} catch (e) {

		}
		break;
	}
        if(loader != undefined) {
            /**
             * show bootstrap
             */
            try {
			var debugContainer = document.getElementById('boot');
			var node = document.createElement('p');
			node.innerHTML = msg;
			debugContainer.insertBefore(node, debugContainer.firstChild);
		} catch (e) {

		}
        }

}
function debugAdd(msg) {
	debug.push(msg);
	debugShow(msg);
}