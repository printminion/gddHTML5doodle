/*functions from doodle.html*/
var translateZDefault = 140;
var currentState = 'plane';

var p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p211, p212, p201, p202 = undefined;

var rotateYValue, rotateXValue, translateZValue = 0;
var container = undefined;


function step(n) {
	
	switch (n) {
	case 1:
		step1();
		break;
	case 2:
		step2();
		break;
	case 3:
		step3();
		break;
	case 4:
		step4();
		break;
	case 5:
		step5();
		break;
	case 6:
		step6();
		break;

	default:
		alert('not implemented step' + n);
		break;
	}
	
	
}


function step1() {
	/*
	 * start music - 2257__Andrew_Duke__click1.wav
	 */
	
	/*
	 * map container z rotate => isometric image
	 */
	
	/*
	 * start music - gdd2011beat.mp3
	 */
	
	
	/*
	 * start beat on each cell
	 */	
	
	/*
	 * fade each cell into show maps pieces
	 */
	
}

function step2() {
	/*
	 * transform to 3d - rotate, music beat
	 */
	
	/*
	 * start showing "superstars"
	 */
	
	/*
	 * on 10th - superstar - show buzzer
	 */

}

function step3() {
	/*
	 * onBuzzer click
	 */
	
	/*
	 * move earth - to the left
	 */
	
	
	/*
	 * add 3 videos of us
	 */
	
	/*
	 * add nyan cat - running around the globe
	 */
	
	/*
	 * start nyan song loop - if with copyright is ok
	 */
	
	/*
	 * add end titles with superstars, credits and so on
	 */
	
}

function step4() {
	
}

function step5() {
	
}
function step6() {
	
}





function init() {

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
	 



	 document.getElementById('rotateY').addEventListener('change', function(e) {
	rotateYValue = this.valueAsNumber;

	document.getElementById('rotateYValue').innerText = rotateYValue;


	container.style.webkitTransform = 'rotateY(' + rotateYValue + 'deg)';

}, false);


document.getElementById('rotateX').addEventListener('change', function(e) {
	rotateXValue = this.valueAsNumber;

	document.getElementById('rotateXValue').innerText = rotateXValue;

/*
	var p01 = document.getElementById('p01');
	p01.style.webkitTransform = 'rotateX(' + rotateXValue + 'deg) rotateY(0deg) translateZ(' + translateZValue + 'px)';

	var p03 = document.getElementById('p03');
	p03.style.webkitTransform = 'rotateX(' + rotateXValue + 'deg) rotateY(72deg) translateZ(' + translateZValue + 'px)';

	var p05 = document.getElementById('p05');
	p05.style.webkitTransform = 'rotateX(' + rotateXValue + 'deg) rotateY(144deg) translateZ(' + translateZValue + 'px)';
*/



}, false);



document.getElementById('translateZ').addEventListener('change', function(e) {

	translateZValue = this.valueAsNumber;
	document.getElementById('translateZValue').innerText = translateZValue;

	updateZ(translateZValue);

}, false);
}


function resetCanvas(){

}

function updateCanvas(percent) {
	updateZ(translateZValue + percent);

}

function updateZ(transZ) {

	if (currentState == '3d') {
		
	p01.style.webkitTransform = ' rotateY(0deg) rotateX(52.5deg) translateZ(' + transZ  + 'px) ';
	p02.style.webkitTransform = ' rotateY(72deg)rotateX(52.5deg) translateZ(' + transZ  + 'px) ';
	p03.style.webkitTransform = ' rotateY(144deg) rotateX(52.5deg) translateZ(' + transZ  + 'px) ';
	p04.style.webkitTransform = ' rotateY(216deg) rotateX(52.5deg)  translateZ(' + transZ  + 'px) ';
	p05.style.webkitTransform = ' rotateY(288deg) rotateX(52.5deg)  translateZ(' + transZ  + 'px) ';

    p06.style.webkitTransform = ' rotateY(0deg) rotateX(11deg)  translateZ(' + transZ  + 'px) ';
	p07.style.webkitTransform = ' rotateY(72deg) rotateX(11deg)  translateZ(' + transZ  + 'px) ';
	p08.style.webkitTransform = ' rotateY(144deg) rotateX(11deg)  translateZ(' + transZ  + 'px) ';
	p09.style.webkitTransform = ' rotateY(216deg) rotateX(11deg)  translateZ(' + transZ  + 'px) ';
	p10.style.webkitTransform = ' rotateY(288deg) rotateX(11deg)  translateZ(' + transZ  + 'px) ';

	p16.style.webkitTransform = ' rotateY(36deg) rotateX(-11deg)  translateZ(' + transZ  + 'px) ';
	p17.style.webkitTransform = ' rotateY(108deg) rotateX(-11deg)  translateZ(' + transZ  + 'px) ';
	p18.style.webkitTransform = ' rotateY(180deg) rotateX(-11deg)  translateZ(' + transZ  + 'px) ';
	p19.style.webkitTransform = ' rotateY(252deg) rotateX(-11deg)  translateZ(' + transZ  + 'px) ';
	p20.style.webkitTransform = ' rotateY(324deg) rotateX(-11deg)  translateZ(' + transZ  + 'px) ';

	p21.style.webkitTransform = ' rotateY(34deg) rotateX(-52.5deg)  translateZ(' + transZ  + 'px) ';
	p22.style.webkitTransform = ' rotateY(108deg) rotateX(-52.5deg)  translateZ(' + transZ  + 'px) ';
	p23.style.webkitTransform = ' rotateY(180deg) rotateX(-52.5deg)  translateZ(' + transZ  + 'px) ';
	p24.style.webkitTransform = ' rotateY(252deg) rotateX(-52.5deg)  translateZ(' + transZ  + 'px) ';
	p25.style.webkitTransform = ' rotateY(324deg) rotateX(-52.5deg)  translateZ(' + transZ  + 'px) ';
	
	
	} else {

		p01.style.webkitTransform = ' translateX(259px) translateY(-116px)  rotateZ(57deg) translateZ(' + transZ  + 'px) ';
		p02.style.webkitTransform = 'translateX(356px) translateY(-65px) translateZ(' + transZ  + 'px) ';
		p03.style.webkitTransform = 'translateX(453px) translateY(-118px)  rotateZ(-58deg) translateZ(' + transZ  + 'px) ';
		p04.style.webkitTransform = 'translateX(728px) translateY(-65px) translateZ(' + transZ  + 'px) ';
		p05.style.webkitTransform = 'translateX(914px) translateY(-65px) translateZ(' + transZ  + 'px) ';

		p06.style.webkitTransform = 'translateX(170px) translateY(47px) translateZ(' + transZ  + 'px) ';
		p07.style.webkitTransform = 'translateX(356px) translateY(47px) translateZ(' + transZ  + 'px) ';
		p08.style.webkitTransform = 'translateX(542px) translateY(47px) translateZ(' + transZ  + 'px) ';
		p09.style.webkitTransform = 'translateX(728px) translateY(47px) translateZ(' + transZ  + 'px) ';
		p10.style.webkitTransform = 'translateX(914px) translateY(47px) translateZ(' + transZ  + 'px) ';

		p16.style.webkitTransform = 'translateX(263px) translateY(103px) translateZ(' + transZ  + 'px) ';
		p17.style.webkitTransform = 'translateX(449px) translateY(103px) translateZ(' + transZ  + 'px) ';
		p18.style.webkitTransform = 'translateX(635px) translateY(103px) translateZ(' + transZ  + 'px) ';
		p19.style.webkitTransform = 'translateX(821px) translateY(103px) translateZ(' + transZ  + 'px) ';
		p20.style.webkitTransform = 'translateX(1007px) translateY(103px) translateZ(' + transZ  + 'px) ';
		p201.style.webkitTransform = 'translateX(1007px) translateY(103px) translateZ(' + transZ  + 'px) ';
		p202.style.webkitTransform = 'translateX(70px) translateY(209px) rotateZ(-57deg) translateZ(' + transZ  + 'px) ';

		p21.style.webkitTransform = ' translateX(253px) translateY(217px) translateZ(' + transZ  + 'px) ';
		p22.style.webkitTransform = 'translateX(449px) translateY(217px) translateZ(' + transZ  + 'px) ';
		p23.style.webkitTransform = 'translateX(635px) translateY(217px) translateZ(' + transZ  + 'px) ';
		p24.style.webkitTransform = 'translateX(733px) translateY(271px) rotateZ(-62deg) translateZ(' + transZ  + 'px) ';
		p25.style.webkitTransform = 'translateX(167px) translateY(267px) rotateZ(-57deg) translateZ(' + transZ  + 'px) ';

		p211.style.webkitTransform = 'translateX(263px) translateY(217px) translateZ(' + transZ  + 'px) ';
		p212.style.webkitTransform = 'translateX(354px) translateY(269px) rotateZ(-57deg) translateZ(' + transZ  + 'px) ';
	

	
	}
	
}

function changeShape(type) {
	currentState = type;
	
	if( type == '3d') {
		document.getElementById('shape3d').disabled = true;
		document.getElementById('shapePlane').disabled = false;

		$('#icosahedron').removeClass('plane').addClass('d3');
		$('div#icosahedron div').removeClass('plane').addClass('d3');

		
	} else {
		document.getElementById('shape3d').disabled = false;
		document.getElementById('shapePlane').disabled = true;
		
		$('#icosahedron').removeClass('d3').addClass('plane');
		$('div#icosahedron div').removeClass('d3').addClass('plane');
		

	}
	
}

