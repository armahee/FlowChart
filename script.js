var stepNum = 0;
var isRunning = false;

var cSpeed = 1;
function speed(i){
	var speed_btn = document.getElementsByClassName('speed_btn')[0];
	var btns = document.getElementsByClassName('btnForm');
	if(!i){
		if(speed_btn.classList.contains('none')){
			speed_btn.classList.remove('none');
		}
		else{
			speed_btn.classList.add('none');
		}
	}
	else{
		speed_btn.classList.add('none');
		btns[6].classList.remove('BgBlue');
		btns[7].classList.remove('BgBlue');
		btns[8].classList.remove('BgBlue');
	}
	if(i == 1){
		btns[6].classList.add('BgBlue');
		cSpeed = 1.5;
	}
	else if(i == 2){
		btns[7].classList.add('BgBlue');
		cSpeed = 1;
	}
	else if(i == 3){
		btns[8].classList.add('BgBlue');
		cSpeed = 0.66;
	}
}

var tour = [
	'icn-txt',
	'pipeline-txt',
	'ARM-txt',
	'run-btn-txt',
	'step-btn-txt',
	'previous-btn-txt',
	'invisible-btn-txt',
	'information-btn-txt',
	'a31',
	'd31'
];
var clickElem = ['register_bank', 'ALU', 'barrel-shifter', 'address-register', 'incrementer', 'data-out', 'data-in', 'instruction-decode', 'a31', 'd31'];
var isHide = new Array(8);
isHide.fill(false);
var hideLis = new Array();
var flowHide = false;
function next(step_i) {
	document.getElementsByClassName(tour[step_i])[0].classList.remove('none');
	if(step_i){
		document.getElementsByClassName(tour[step_i-1])[0].classList.add('none');
	}
	if(!step_i){
		document.getElementById('btnRun').classList.add('hideImportant');
		document.getElementById('btnRun').onclick = function() {};
		document.getElementById('btnStep').classList.add('hideImportant');
		document.getElementById('btnStep').onclick = function() {};
		document.getElementById('btnBack').classList.add('hideImportant');
		document.getElementById('btnBack').onclick = function() {};
		document.getElementById('btnInvisible').classList.add('hideImportant');
		document.getElementById('btnInvisible').onclick = function() {};
		document.getElementsByClassName('btnForm')[4].classList.add('hideImportant');
		document.getElementsByClassName('btnForm')[4].onclick = function() {};
		document.getElementsByClassName('btnForm')[5].classList.add('hideImportant');
		document.getElementsByClassName('btnForm')[5].onclick = function() {};
		document.getElementsByClassName('help-icn')[0].classList.add('none');
		document.getElementsByClassName('shader')[0].classList.remove('none');
		document.getElementsByClassName('flow_chart')[2].style.zIndex = '55';
		isHide.fill(false);
		hideLis = new Array();
	}
	else if(step_i == 1){
		document.getElementsByClassName('flow_chart')[1].style.zIndex = '50';
		document.getElementById('flowchart_img').style.background = 'white';
		if(document.getElementsByClassName('flow_chart')[1].style.display == 'none'){
			document.getElementsByClassName('flow_chart')[1].style.display = 'block';
			flowHide = true;
		}
	}
	else if(step_i == 2){
		if(flowHide){
			document.getElementsByClassName('flow_chart')[1].style.display = 'none';
			flowHide = false;
		}
		document.getElementsByClassName('flow_chart')[1].style.zIndex = '15';
		document.getElementById('flowchart_img').style.background = 'transparent';
		document.getElementById('messageBox').style.zIndex = '35';
		document.getElementsByClassName('msgBoxBg')[0].style.background = 'white';
	}
	else if(step_i == 3){
		document.getElementById('messageBox').style.zIndex = '25';
		document.getElementsByClassName('msgBoxBg')[0].style.background = 'transparent';
		document.getElementById('btnRun').classList.remove('hideImportant');
	}
	else if(step_i == 4){
		document.getElementById('btnRun').classList.add('hideImportant');
		document.getElementById('btnStep').classList.remove('hideImportant');
	}
	else if(step_i == 5){
		document.getElementById('btnStep').classList.add('hideImportant');
		document.getElementById('btnBack').classList.remove('hideImportant');
	}
	else if(step_i == 6){
		document.getElementById('btnBack').classList.add('hideImportant');
		document.getElementById('btnInvisible').classList.remove('hideImportant');
	}
	else if(step_i == 7){
		document.getElementById('btnInvisible').classList.add('hideImportant');
		document.getElementsByClassName('animatable_chart')[0].style.zIndex = '50';
		for (var i = 0; i < clickElem.length; i++) {
			document.getElementById(clickElem[i]).classList.add('BgWhite');
			document.getElementById(clickElem[i]).style.opacity = '100%';
			if(document.getElementById(clickElem[i]).classList.contains('hide')){
				document.getElementById(clickElem[i]).classList.remove('hide');
				isHide[i] = true;
				if(i == 7){
					document.getElementsByClassName('stepone')[4].classList.remove('hide');
				}
			}
		}
		if(document.getElementById('btnInvisible').value == 'Invisible'){
			document.getElementById(clickElem[8]).classList.remove('hideImportant');
			document.getElementById(clickElem[9]).classList.remove('hideImportant');
		}
		document.getElementsByClassName('stepone')[4].style.opacity = '100%';
		var alBlue = document.getElementsByClassName('BgPink');
		for (var i = 0; i < alBlue.length; i++) {
			if(!alBlue[i].classList.contains('hide') && !alBlue[i].classList.contains('BgWhite') && !alBlue[i].classList.contains('menuSteps')){
				hideLis.push(alBlue[i]);
				alBlue[i].classList.add('hide');
			}
		}
	}
}
function tour_back(step_i){
	//alert(tour[step_i + 1]);
	document.getElementsByClassName(tour[step_i + 1])[0].classList.add('none');
	document.getElementsByClassName(tour[step_i])[0].classList.remove('none');
	if(!step_i){	
		document.getElementsByClassName('flow_chart')[2].style.zIndex = '55';
		isHide.fill(false);
		hideLis = new Array();

		if(flowHide){
			document.getElementsByClassName('flow_chart')[1].style.display = 'none';
			flowHide = false;
		}
			document.getElementsByClassName('flow_chart')[1].style.zIndex = '15';
			document.getElementById('flowchart_img').style.background = 'transparent';
	}
	else if(step_i == 1){
		document.getElementsByClassName('flow_chart')[1].style.zIndex = '50';
		document.getElementById('flowchart_img').style.background = 'white';
		if(document.getElementsByClassName('flow_chart')[1].style.display == 'none'){
			document.getElementsByClassName('flow_chart')[1].style.display = 'block';
			flowHide = true;
		}
		document.getElementById('messageBox').style.zIndex = '25';
		document.getElementsByClassName('msgBoxBg')[0].style.background = 'transparent';
	}
	else if(step_i == 2){
		document.getElementById('messageBox').style.zIndex = '35';
		document.getElementsByClassName('msgBoxBg')[0].style.background = 'white';
		document.getElementById('btnRun').classList.add('hideImportant');
	}
	else if(step_i == 3){
		document.getElementById('btnRun').classList.remove('hideImportant');
		document.getElementById('btnStep').classList.add('hideImportant');
	}
	else if(step_i == 4){
		document.getElementById('btnStep').classList.remove('hideImportant');
		document.getElementById('btnBack').classList.add('hideImportant');
	}
	else if(step_i == 5){
		document.getElementById('btnBack').classList.remove('hideImportant');
		document.getElementById('btnInvisible').classList.add('hideImportant');
	}
	else if(step_i == 6){
		document.getElementsByClassName('animatable_chart')[0].style.zIndex = '16';
		for (var i = 0; i < clickElem.length; i++) {
			document.getElementById(clickElem[i]).classList.remove('BgWhite');
			if(isHide[i]){
				document.getElementById(clickElem[i]).classList.add('hide');
				if(i == 7){
					document.getElementsByClassName('stepone')[4].classList.add('hide');
				}
			}
		}
		for (var i = 0; i < hideLis.length; i++) {
			hideLis[i].classList.remove('hide');
		}
		document.getElementById('btnInvisible').classList.remove('hideImportant');
	}
}
function dismiss() {
	if(flowHide){
		document.getElementsByClassName('flow_chart')[1].style.display = 'none';
		flowHide = false;
	}
	document.getElementsByClassName('animatable_chart')[0].style.zIndex = '16';
	for (var i = 0; i < clickElem.length; i++) {
		document.getElementById(clickElem[i]).classList.remove('BgWhite');
		if(isHide[i]){
			document.getElementById(clickElem[i]).classList.add('hide');
			if(i == 7){
				document.getElementsByClassName('stepone')[4].classList.add('hide');
			}
		}
	}
	for (var i = 0; i < hideLis.length; i++) {
		hideLis[i].classList.remove('hide');
	}
	if(document.getElementById('btnInvisible').value == 'Invisible'){
		document.getElementById(clickElem[8]).classList.add('hideImportant');
		document.getElementById(clickElem[9]).classList.add('hideImportant');
	}
	document.getElementById('btnRun').classList.remove('hideImportant');
	document.getElementById('btnRun').onclick = function() { run(); }
	document.getElementById('btnStep').classList.remove('hideImportant');
	document.getElementById('btnStep').onclick = function() { steps(); }
	document.getElementById('btnBack').classList.remove('hideImportant');
	document.getElementById('btnBack').onclick = function() { back(); }
	document.getElementById('btnInvisible').classList.remove('hideImportant');
	document.getElementById('btnInvisible').onclick = function() { visibility(); }
	document.getElementsByClassName('help-icn')[0].classList.remove('none');
	document.getElementsByClassName('btnForm')[4].classList.remove('hideImportant');
	document.getElementsByClassName('btnForm')[4].onclick = function() { speed(); }
	document.getElementsByClassName('btnForm')[5].classList.remove('hideImportant');
	document.getElementsByClassName('btnForm')[5].onclick = function() { next(0); }
	document.getElementsByClassName('shader')[0].classList.add('none');
	document.getElementById('messageBox').style.zIndex = '25';
	document.getElementsByClassName('msgBoxBg')[0].style.background = 'transparent';
	document.getElementsByClassName('flow_chart')[1].style.zIndex = '15';
	document.getElementById('flowchart_img').style.background = 'transparent';
	document.getElementsByClassName('btns')[0].style.display = 'block';
	for (var i = 0; i < tour.length; i++) {
		document.getElementsByClassName(tour[i])[0].classList.add('none');
	}
}
function removeShade(argument) {
	// body...
}
function msgPop(elem) {
	var allelem = document.getElementsByClassName('msgPop');
	if(document.getElementsByClassName(elem.id)[0].classList.contains('none')){
		for (var i = 0; i < allelem.length; i++) {
			allelem[i].classList.add('none');
		}
		//document.getElementsByClassName('shader')[0].classList.remove('none');
		document.getElementsByClassName(elem.id)[0].classList.remove('none');
		//elem.classList.add('BgWhite');
		//if(elem.classList.contains('hide')){
			//elem.classList.remove('hide');
		//}
		//elem.style.zIndex = '40';
	}
	else{
		//elem.classList.remove('BgWhite');
		//document.getElementsByClassName('shader')[0].classList.add('none');
		document.getElementsByClassName(elem.id)[0].classList.add('none');
	}
}
function visibility() {
	var btn = document.getElementById('btnInvisible');
	if(btn.value == 'Invisible'){
		btn.value = 'Visible';
		document.getElementsByClassName('flow_chart')[1].style.display = 'none';
		document.getElementsByClassName('Control')[0].classList.remove('hideImportant');
		document.getElementsByClassName('text_top')[0].classList.remove('hideImportant');
		document.getElementsByClassName('text_bottom')[0].classList.remove('hideImportant');
	}
	else{
		btn.value = 'Invisible';
		document.getElementsByClassName('flow_chart')[1].style.display = 'block';
		document.getElementsByClassName('Control')[0].classList.add('hideImportant');
		document.getElementsByClassName('text_top')[0].classList.add('hideImportant');
		document.getElementsByClassName('text_bottom')[0].classList.add('hideImportant');
	}
} 
var stepFinder = [
	['flow_chart_three','arrow_dwn1','upper_arrow_f','upper_arrow','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','upper_arrow','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','upper_arrow','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow','r_bb6','lower_arrow1','arrow_dwn10'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','upper_arrow','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow','r_bb6','lower_arrow1','arrow_dwn10'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','upper_arrow','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow','r_bb6','lower_arrow1','arrow_dwn10'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','upper_arrow','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow','r_bb6','lower_arrow1','arrow_dwn10']
];
var stepDelay = [
	[1500,1500,1500,1500,3000,1500,2500,1500,1500,1500],
	[1500,1500,1500,1500,3000,1500,2700,1500,1500,1500],
	[1500,1500,1500,1500,3000,1500,2500,1500,1500,2500,3000,2000,2000],
	[1500,1500,1500,1500,3000,1500,2500,1500,1500,2500,3000,2000,2000],
	[1500,1500,1500,1500,3000,1500,2500,1500,1500,2500,1500,3500,1500],
	[1500,1500,1500,1500,3000,1500,2500,1500,1500,2500,1500,3500,1500]
];
var readingDelay = [
	[1500,3200,2200,5000,6000,2200,2200,2800,2200,2200],
	[1500,3200,2200,5000,6000,2200,3000,2800,2200,2200],
	[1500,3200,2200,5000,5400,2200,3000,2800,3400,6000,4200,4800,3000],
	[1500,3200,2200,5000,5400,2200,3000,2800,3400,6000,4200,4800,3000],
	[1500,3200,2200,5000,5400,2200,3000,3000,3400,6200,3600,2200,3000],
	[1500,3200,2200,5000,5400,2200,3000,3000,3400,6200,3600,2200,3000]
];
function stop() {
	document.getElementsByClassName('btns')[1].style.display = 'none';
	isRunning = false;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function run() {
	isRunning = true;
	document.getElementsByClassName('btns')[0].style.display = 'none';
	document.getElementsByClassName('btns')[1].style.display = 'block';
	if(document.getElementsByClassName(stepFinder[menuNum][stepFinder[menuNum].length - 1])[0].classList.contains('nextStep')){
		var alBlue = document.getElementsByClassName('BgPink');
		for (var i = 0; i < alBlue.length; i++) {
			if(!alBlue[i].classList.contains('hide') && !alBlue[i].classList.contains('menuSteps')){
				alBlue[i].classList.add('hide');
			}
		}
		document.getElementsByClassName('text_top')[0].classList.add('hide');
		document.getElementsByClassName('text_bottom')[0].classList.add('hide');
		document.getElementsByClassName('Control')[0].classList.add('hide');
		document.getElementsByClassName('alu')[0].classList.add('hide');
		document.getElementsByClassName('stepseven')[7].classList.add('hide');
		document.getElementsByClassName('alu_overlap')[0].classList.add('hide');
		document.getElementsByClassName('stepseven')[9].classList.add('hide');
		document.getElementsByClassName('stepthree')[1].classList.add('hide');
		document.getElementsByClassName('stepone')[4].classList.add('hide');

		document.getElementsByClassName(stepFinder[menuNum][stepFinder[menuNum].length - 1])[0].classList.remove('nextStep');
		document.getElementsByClassName(stepFinder[menuNum][0])[0].classList.add('nextStep');
		document.getElementById('step'+(menuNum+1)+'_'+(stepFinder[menuNum].length - 1)).classList.remove('BgPink');
	}
	for (var j = 0; j < stepFinder[menuNum].length; j++) {
		if(document.getElementsByClassName(stepFinder[menuNum][j])[0].classList.contains('nextStep')){
			if(j < stepFinder[menuNum].length-1){
				for (var i = j; i < stepFinder[menuNum].length; i++) {
					if(!isRunning){
						document.getElementsByClassName('btns')[1].style.display = 'none';
						document.getElementsByClassName('btns')[0].style.display = 'block';
						break;
					}
					if(document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.contains('nextStep')){
						if(i > 2 && menuNum > 1){
							window.scrollTo(0,100+((i-3)*100));
						}
						else if(menuNum > 1){
							window.scrollTo(0,0);
						}
						else if(!i){
							window.scrollTo(0,0);
						}
						if(i && i < stepFinder[menuNum].length-1){
							document.getElementById('step'+(menuNum+1)+'_'+i).classList.remove('BgPink');
						}
						if(i < stepFinder[menuNum].length-1){
							stepNum++;
							document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.remove('nextStep');
							document.getElementsByClassName(stepFinder[menuNum][i+1])[0].classList.add('nextStep');
							document.getElementById('step'+(menuNum+1)+'_'+(i+1)).classList.add('BgPink');
							await sleep(readingDelay[menuNum][i+1]*cSpeed);
							window['step_'+(i+1)](i);
						}
					}
					if(i < stepFinder[menuNum].length-2){
						await sleep(stepDelay[menuNum][i+1]);
					}
					if(!isRunning){
						document.getElementsByClassName('btns')[1].style.display = 'none';
						document.getElementsByClassName('btns')[0].style.display = 'block';
						break;
					}
				}
			}
			document.getElementsByClassName('btns')[1].style.display = 'none';
			document.getElementsByClassName('btns')[0].style.display = 'block';
			break;
		}
	}
	document.getElementsByClassName('btns')[1].style.display = 'none';
	document.getElementsByClassName('btns')[0].style.display = 'block';
}
async function steps() {
	for (var i = 0; i < stepFinder[menuNum].length; i++) {
		if(document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.contains('nextStep')){
			if(i > 2 && menuNum > 1){
				window.scrollTo(0,100+((i-3)*100));
			}
			else if(menuNum > 1){
				window.scrollTo(0,0);
			}
			else if(!i){
				window.scrollTo(0,0);
			}
			if(i && i < stepFinder[menuNum].length-1){
				document.getElementById('step'+(menuNum+1)+'_'+i).classList.remove('BgPink');
			}
			if(i < stepFinder[menuNum].length-1){
				stepNum++;
				document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.remove('nextStep');
				document.getElementsByClassName(stepFinder[menuNum][i+1])[0].classList.add('nextStep');
				document.getElementById('step'+(menuNum+1)+'_'+(i+1)).classList.add('BgPink');
				await sleep(readingDelay[menuNum][i+1]*cSpeed);
				window['step_'+(i+1)](i+1);
			}
			break;
		}
	}
}
function step_1(i) {
	var elem1 = document.getElementsByClassName('r_bb1')[0];
	var epos1 = 100, pos1 = 0;
	elem1.style.opacity = pos1 + '%';
	elem1.classList.remove('BgDpPink');
	elem1.classList.remove('hide');
	var elem = document.getElementsByClassName('upper_arrow_f')[0];
	var epos = 8, pos = epos + 50;
	elem.style.top = pos + 'px';
	elem.classList.remove('BgDpPink');
	var elem_1 = document.getElementsByClassName('text_top')[0];
	var epos_1 = 100, pos_1 = 0;
	elem_1.style.opacity = pos_1 + '%';
	elem_1.classList.remove('hide');
	var id = null;
	var id1 = setInterval(frame1, 5);
	function frame1() {
		if(stepNum < i){
			elem1.classList.add('hide');
		}
		if (pos1 == epos1) {
			elem.classList.remove('hide');
			id = setInterval(frame, 5);
			clearInterval(id1);
		} else {
			pos1+=2; 
			elem1.style.opacity = pos1 + "%";
		}
	}
	function frame() {
		if(stepNum < i){
			elem.classList.add('hide');
			elem_1.classList.add('hide');
		}
		if (pos == epos) {
			clearInterval(id);
		} else {
			pos--; 
			elem.style.top = pos + "px";
			pos_1 += 2;
			elem_1.style.opacity = pos_1 + '%';
		}
	}
}
function step_2(i) {
	var elem = document.getElementsByClassName('arrow_dwn1')[0];
	var epos = 1024, pos = epos + 50;
	elem.style.top = pos + 'px';
	elem.classList.remove('hide');
	var elem_1 = document.getElementsByClassName('text_bottom')[0];
	var epos_1 = 100, pos_1 = 0;
	elem_1.style.opacity = pos_1 + '%';
	elem_1.classList.remove('hide');
	var elem1 = document.getElementsByClassName('r_bb7')[0];
	var epos1 = 100, pos1 = 0;
	elem1.style.opacity = pos1 + '%';
	elem1.classList.remove('hide');
	var id1 = null;
	var id = setInterval(frame, 5);
	function frame() {
		if(stepNum < i){
			elem.classList.add('hide');
			elem_1.classList.add('hide');
		}
		if (pos == epos) {
			id1 = setInterval(frame1, 1);
			clearInterval(id);
		} else {
			pos--; 
			elem.style.top = pos + "px";
			pos_1 += 2;
			elem_1.style.opacity = pos_1 + '%';
		}
	}
	function frame1() {
		if(stepNum < i){
			elem1.classList.add('hide');
		}
		if (pos1 == epos1) {
			clearInterval(id1);
		} else {
			pos1+=5; 
			elem1.style.opacity = pos1 + "%";
		}
	}
}
function step_3(i) {
	var elem2 = document.getElementsByClassName('data_in_arrow')[0];
	var epos2 = 901, pos2 = epos2 + 50;
	elem2.style.top = pos2 + 'px';
	elem2.classList.remove('hide');
	var elem3 = document.getElementsByClassName('r4')[0];
	var epos3 = 100, pos3 = 0;
	elem3.style.opacity = pos3 + '%';
	elem3.classList.remove('hide');
	var elem4 = document.getElementsByClassName('stepone')[4];
	var epos4 = 100, pos4 = 0;
	elem4.style.opacity = pos4 + '%';
	elem4.classList.remove('hide');
	var elem5 = document.getElementsByClassName('row_4_arrow')[0];
	var epos5 = 3, pos5 = epos5 + 50;
	elem5.style.top = pos5 + 'px';
	var elem5_1 = document.getElementsByClassName('Control')[0];
	var epos5_1 = 100, pos5_1 = 0;
	elem5_1.style.opacity = pos5_1 + '%';
	elem5_1.classList.remove('hide');
	var id4 = null;
	var id3 = null;
	var id2 = setInterval(frame2, 5);
	function frame2() {
		if(stepNum < i){
			elem2.classList.add('hide');
		}
		if (pos2 == epos2) {
			id3 = setInterval(frame3, 1);
			clearInterval(id2);
		} else {
			pos2--; 
			elem2.style.top = pos2 + "px";
		}
	}
	function frame3() {
		if(stepNum < i){
			elem3.classList.add('hide');
			elem4.classList.add('hide');
		}
		if (pos3 == epos3) {
			elem5.classList.remove('hide');
			id4 = setInterval(frame4, 5);
			clearInterval(id3);
		} else {
			pos3+=5; 
			elem3.style.opacity = pos3 + "%";
			pos4+=5; 
			elem4.style.opacity = pos4 + "%";
		}
	}
	function frame4() {
		if(stepNum < i){
			elem5.classList.add('hide');
		}
		if (pos5 == epos5) {
			clearInterval(id4);
		} else {
			pos5--; 
			elem5.style.top = pos5 + "px";
			pos5_1 += 2;
			elem5_1.style.opacity = pos5_1 + '%';
		}
	}
}
function step_4(i) {
	var elem = document.getElementsByClassName('upper_arrow')[0];
	var epos = 122, pos = epos - 50;
	elem.style.top = pos + 'px';
	elem.classList.remove('hide');
	var id = setInterval(frame, 5);
	var elem1 = document.getElementsByClassName('r_bb2')[0];
	var epos1 = 100, pos1 = 0;
	elem1.style.opacity = pos1 + '%';
	elem1.classList.remove('hide');
	var id1 = null;
	var elem2 = document.getElementsByClassName('f_c_t')[0];
	var epos2 = 84, pos2 = 0;
	elem2.style.width = pos2 + 'px';
	elem2.classList.remove('hide');
	var id2 = null;
	var elem3 = document.getElementsByClassName('clip_4innnn')[0];
	var epos3 = 129, pos3 = 0;
	elem3.style.height = pos3 + 'px';
	elem3.classList.remove('BgDpPink');
	elem3.classList.add('BgPink');
	elem3.classList.remove('hide');
	var id3 = null;
	var elem4 = document.getElementsByClassName('right_bar_1')[0];
	var epos4 = 384, pos4 = epos4 + 50;
	var elem5 = document.getElementsByClassName('stepsix')[6];
	var epos5 = 100, pos5 = 0;
	var id4 = null;
	var elem5_1 = document.getElementsByClassName('r_bb3')[0];
	var epos5_1 = 100, pos5_1 = 0;
	elem5_1.style.opacity = pos5_1 + '%';
	elem5_1.classList.remove('hide');
	var id5 = null;
	var elem6 = document.getElementsByClassName('clip_4in')[0];
	var epos6 = 85, pos6 = 210;//85.5
	elem6.style.top = pos6 + 'px';
	var epos6_1 = 125, pos6_1 = 0;
	elem6.style.height = pos6_1 + 'px';
	var id6 = null;
	var elem7 = document.getElementsByClassName('right_bar')[0];
	var epos7 = 384, pos7 = epos7 + 50;
	elem7.style.left = pos7 + 'px';
	var id7 = null;
	var elem8 = document.getElementsByClassName('r_bb1')[0];
	var epos8 = 100, pos8 = 90;
	var id8 = null;
	function frame() {
		if(stepNum < i){
			elem.classList.add('hide');
		}
		if (pos == epos) {
			id1 = setInterval(frame1, 1);
			clearInterval(id);
		} else {
			pos++; 
			elem.style.top = pos + "px";
		}
	}

	
	function frame1() {
		if(stepNum < i){
			elem1.classList.add('hide');
		}
		if (pos1 == epos1) {
			id2 = setInterval(frame2, 1);
			clearInterval(id1);
		} else {
			pos1+=2;
			elem1.style.opacity = pos1 + '%';
		}
	}
	function frame2() {
		if(stepNum < i){
			elem2.classList.add('hide');
		}
		if (pos2 == epos2) {
			id3 = setInterval(frame3, 1);
			elem6.classList.remove('hide');
			id6 = setInterval(frame6, 5);
			clearInterval(id2);
		} else {
			pos2++; 
			elem2.style.width = pos2 + "px";
		}
	}
	function frame3() {
		if(stepNum < i){
			elem3.classList.add('hide');
		}
		if (pos3 == epos3) {
			elem4.style.left = pos4 + 'px';
			elem5.style.opacity = pos5 + '%';
			elem4.classList.remove('hide');
			id4 = setInterval(frame4, 5);
			clearInterval(id3);
		} else {
			pos3+=3; 
			elem3.style.height = pos3 + "px";
		}
	}
	function frame4() {
		if(stepNum < i){
			elem4.classList.add('hide');
			elem5.classList.add('hide');
		}
		if (pos4 == epos4) {
			id5 = setInterval(frame5, 5);
			clearInterval(id4);
		} else {
			pos5+=2;
			elem5.style.opacity = pos5 + '%';
			pos4--; 
			elem4.style.left = pos4 + "px";
		}
	}
	function frame5() {
		if(stepNum < i){
			elem5_1.classList.add('hide');
		}
		if(pos5_1 == epos5_1){
			clearInterval(id5);
		}
		else{
			pos5_1+=5;
			elem5_1.style.opacity = pos5_1 + '%';
		}
	}
	function frame6() {
		if(stepNum < i){
			elem6.classList.add('hide');
		}
		if(pos6 == epos6){
			elem6.style.top = '85.5px';
			elem7.classList.remove('hide');
			id7 = setInterval(frame7, 5);
			clearInterval(id6);
		}
		else{
			pos6-=5;
			elem6.style.top = pos6 + 'px';
			pos6_1+=5;
			elem6.style.height = pos6_1 + 'px';
		}
	}
	function frame7() {
		if(stepNum < i){
			elem7.classList.add('hide');
		}
		if(pos7 == epos7){
			elem8.style.opacity = pos8 + '%';
			elem8.classList.add('BgDpPink');
			id8 = setInterval(frame8, 5);
			clearInterval(id7);
		}
		else{
			pos7--;
			elem7.style.left = pos7 + 'px';
		}
	}
	function frame8() {
		if(stepNum < i){
			elem8.classList.add('hide');
		}
		if(pos8 == epos8){
			clearInterval(id8);
		}
		else{
			pos8+=5;
			elem8.style.opacity = pos8 + '%';
		}
	}
}
function step_5(i) {
	var elem1 = document.getElementsByClassName('abus_straitline')[0];
	var epos1 = 300, pos1 = 0;
	elem1.style.height = pos1 + 'px';
	elem1.classList.remove('hide');
	var elem = document.getElementsByClassName('bank_arrow_2')[0];
	var epos = 694, pos = epos - 50;
	elem.style.top = pos + 'px';
	var elem3 = document.getElementsByClassName('stepthree')[1];
	var epos3 = 100, pos3 = 0;
	elem3.style.opacity = pos + '%';
	elem3.classList.remove('hide');
	var id = null;
	var id1 = setInterval(frame1, 5);
	function frame1() {
		if(stepNum < i){
			elem1.classList.add('hide');
			elem3.classList.add('hide');
		}
		if (pos1 == epos1) {
			elem3.style.opacity = epos3 + '%';
			elem.classList.remove('hide');
			id = setInterval(frame, 5);
			clearInterval(id1);
		} else {
			pos1+=5; 
			if(pos3 < epos3){
				pos3+=4;
				elem3.style.opacity = pos3 + '%';
			}
			elem1.style.height = pos1 + "px";
		}
	}
	function frame() {
		if(stepNum < i){
			elem.classList.add('hide');
		}
		if (pos == epos) {
			clearInterval(id);
		} else {
			pos++; 
			elem.style.top = pos + "px";
		}
	}
}
function step_6(i) {
	if(!menuNum){
		var elem = document.getElementsByClassName('StraitLine')[0];
		var epos = 50, pos = 0;
		elem.style.height = pos + 'px';
		elem.classList.remove('hide');
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('StraitLine_Arrow')[0];
		var epos1 = 305, pos1 = epos1 - 50;
		elem1.style.left = pos1 + 'px';
		var id1 = null;
		var elem2 = document.getElementsByClassName('clip_4inn')[0];
		var epos2 = 180, pos2 = 0;
		elem2.style.height = pos2 + 'px';
		elem2.classList.remove('hide');
		var id2 = null;
		var elem3 = document.getElementsByClassName('right_bar_22')[0];
		var epos3 = 290, pos3 = 445;
		elem3.style.left = pos3 + 'px';
		var epos3_1 = 155, pos3_1 = 0;
		elem3.style.width = pos3_1 + 'px';
		elem3.classList.remove('hide');
		var id3 = null;
		var elem4 = document.getElementsByClassName('r_bb44_arrow')[0];
		var epos4 = 576, pos4 = epos4 - 50;//top = '576px';
		elem4.style.top = pos4 + 'px';
		var id4 = null;
		function frame() {
			if(stepNum < i){
				elem.classList.add('hide');
			}
			if (pos == epos) {
				elem1.classList.remove('hide');
				id1 = setInterval(frame1, 1);
				clearInterval(id);
			} else {
				pos++; 
				elem.style.height = pos + "px";
			}
		}
		function frame1() {
			if(stepNum < i){
				elem1.classList.add('hide');
			}
			if (pos1 == epos1) {
				id2 = setInterval(frame2, 1);
				clearInterval(id1);
			} else {
				pos1+=5; 
				elem1.style.left = pos1 + "px";
			}
		}
		function frame2() {
			if(stepNum < i){
				elem2.classList.add('hide');
			}
			if (pos2 == epos2) {
				id3 = setInterval(frame3, 1);
				clearInterval(id2);
			} else {
				pos2++; 
				elem2.style.height = pos2 + "px";
			}
		}
		function frame3() {
			if(stepNum < i){
				elem3.classList.add('hide');
			}
			if (pos3_1 == epos3_1) {
				elem4.classList.remove('hide');
				id4 = setInterval(frame4, 5);
				clearInterval(id3);
			} else {
				pos3--; 
				elem3.style.left = pos3 + "px";
				pos3_1++; 
				elem3.style.width = pos3_1 + "px";
			}
		}
		function frame4() {
			if(stepNum < i){
				elem4.classList.add('hide');
			}
			if (pos4 == epos4) {
				clearInterval(id4);
			} else {
				pos4++; 
				elem4.style.top = pos4 + "px";
			}
		}
	}
	else{
		var elem = document.getElementsByClassName('arrow_dwn10')[0];
		var epos = 931, pos = epos + 50;
		elem.style.top = pos + 'px';
		elem.classList.remove('hide');
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('clip_4innn')[0];
		var epos1 = 570, pos1 = epos1 + 370;//570
		elem1.style.top = pos1 + 'px';
		var epos1_1 = 370, pos1_1 = 0;//370
		elem1.style.height = pos1_1 + 'px';
		elem1.classList.remove('hide');
		var elem2 = document.getElementsByClassName('stepfour')[6];
		var epos2 = 100, pos2 = 0;
		elem2.style.opacity = pos2 + '%';
		elem2.classList.remove('hide');
		var id1 = null;
		var elem3 = document.getElementsByClassName('right_bar_22')[0];
		var epos3 = 290, pos3 = 445;
		var epos3_1 = 155, pos3_1 = 0;
		elem3.style.left = pos3 + 'px';
		elem3.style.width = pos3_1 + 'px';
		elem3.classList.remove('hide');
		var id3 = null;
		var elem4 = document.getElementsByClassName('r_bb44_arrow')[0];
		var epos4 = 576, pos4 = epos4 - 50;//top = '576px';
		elem4.style.top = pos4 + 'px';
		var id4 = null;
		function frame() {
			if(stepNum < i){
				elem.classList.add('hide');
			}
			if (pos == epos) {
				elem1.classList.remove('hide');
				id1 = setInterval(frame1, 1);
				clearInterval(id);
			} else {
				pos--; 
				elem.style.top = pos + "px";
			}
		}
		function frame1() {
			if(stepNum < i){
				elem1.classList.add('hide');
				elem2.classList.add('hide');
			}
			if (pos1_1 == epos1_1) {
				id3 = setInterval(frame3, 1);
				clearInterval(id1);
			} else {
				pos1-=5; 
				elem1.style.top = pos1 + "px";
				pos1_1+=5; 
				elem1.style.height = pos1_1 + "px";
				if(pos2 < 100){
					pos2+=2;
					elem2.style.opacity = pos2 + '%';
				}
			}
		}
		function frame3() {
			if(stepNum < i){
				elem3.classList.add('hide');
			}
			if (pos3 == epos3) {
				elem4.classList.remove('hide');
				id4 = setInterval(frame4, 5);
				clearInterval(id3);
			} else {
				pos3--; 
				elem3.style.left = pos3 + "px";
				pos3_1++; 
				elem3.style.width = pos3_1 + "px";
			}
		}
		function frame4() {
			if(stepNum < i){
				elem4.classList.add('hide');
			}
			if (pos4 == epos4) {
				clearInterval(id4);
			} else {
				pos4++; 
				elem4.style.top = pos4 + "px";
			}
		}
	}
}
function step_7(i) {
	var elem5 = document.getElementsByClassName('r_bb4_4')[0];
	var epos5 = 100, pos5 = 0;
	elem5.style.opacity = pos5 + '%';
	elem5.classList.remove('hide');
	var id5 = setInterval(frame5, 1);
	function frame5() {
		if(stepNum < i){
			elem5.classList.add('hide');
		}
		if (pos5 == epos5) {
			clearInterval(id5);
		} else {
			pos5+=2;
			elem5.style.opacity = pos5 + '%';
		}
	}
}
function step_8(i) {
	var elem = document.getElementsByClassName('r_bb4_arrow')[0];
	var epos = 703, pos = epos - 50;
	elem.style.top = pos + 'px';
	elem.classList.remove('hide');
	var id = setInterval(frame, 5);
	var elem1 = document.getElementsByClassName('r_bb5')[0];
	var epos1 = 100, pos1 = 0;
	elem1.style.opacity = pos1 + '%';
	elem1.classList.remove('hide');
	var id1 = null;
	function frame() {
		if(stepNum < i){
			elem.classList.add('hide');
		}
		if (pos == epos) {
			id1 = setInterval(frame1, 1);
			clearInterval(id);
		} else {
			pos++; 
			elem.style.top = pos + "px";
		}
	}

	
	function frame1() {
		if(stepNum < i){
			elem1.classList.add('hide');
		}
		if (pos1 == epos1) {
			clearInterval(id1);
		} else {
			pos1+=2;
			elem1.style.opacity = pos1 + '%';
		}
	}

}
function step_9(i) {
	if(menuNum < 2){
		var elem = document.getElementsByClassName('alu_arrow')[0];
		var epos = 830, pos = epos - 50;
		elem.style.top = pos + 'px';
		elem.classList.remove('hide');
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('alu_arrow1')[0];
		var epos1 = 32, pos1 = 30+242;
		var epos1_1 = 240, pos1_1 = 0;
		elem1.style.left = pos1 + 'px';
		elem1.style.width = pos1_1 + 'px';
		elem1.classList.remove('hide');
		var id1 = null;

		var elem2 = document.getElementsByClassName('left_strait_line_2')[0];
		var epos2 = 325, pos2 = 895;
		elem2.style.top = pos2 + 'px';
		var epos2_1 = 570, pos2_1 = 0;
		elem2.style.height = pos2_1 + 'px';
		elem2.classList.remove('hide');
		var elem3 = document.getElementsByClassName('alu')[0];
		var epos3 = 100, pos3 = 0;
		elem3.style.opacity = pos3 + '%';
		elem3.classList.remove('hide');
		var elem3_1 = document.getElementsByClassName('stepseven')[7];
		var epos3_1 = 100, pos3_1 = 0;
		elem3_1.style.opacity = pos3_1 + '%';
		elem3_1.classList.remove('hide');
		var id2 = null;
		var elem4 = document.getElementsByClassName('cl_path_2')[0];
		var epos4 = 30, pos4 = epos4 - 25;
		elem4.style.left = pos4 + 'px';
		var id3 = null;
		function frame() {
			if(stepNum < i){
				elem.classList.add('hide');
			}
			if (pos == epos) {
				id1 = setInterval(frame1, 5);
				clearInterval(id);
			} else {
				pos++; 
				elem.style.top = pos + "px";
			}
		}

		function frame1() {
			if(stepNum < i){
				elem1.classList.add('hide');
			}
			if (pos1 == epos1) {
				elem1.style.left = '30px';
				elem1.style.width = '242px';
				id2 = setInterval(frame2, 1);
				clearInterval(id1);
			} else {
				pos1-=5; 
				elem1.style.left = pos1 + "px";
				pos1_1+=5; 
				elem1.style.width = pos1_1 + "px";
			}
		}
		function frame2() {
			if(stepNum < i){
				elem2.classList.add('hide');
				elem3.classList.add('hide');
				elem3_1.classList.add('hide');
			}
			if (pos2 == epos2) {
				elem4.classList.remove('hide');
				id3 = setInterval(frame3, 5);
				clearInterval(id2);
			} else {
				pos2-=5; 
				elem2.style.top = pos2 + "px";
				pos2_1+=5; 
				elem2.style.height = pos2_1 + "px";
				if(pos3 < 100){
					pos3++;
					elem3.style.opacity = pos3 + '%';
				}
				if(pos3_1 < 100){
					pos3_1++;
					elem3_1.style.opacity = pos3_1 + '%';
				}
			}
		}
		function frame3() {
			if(stepNum < i){
				elem4.classList.add('hide');
			}
			if (pos4 == epos4) {
				document.getElementsByClassName('r_bb3')[0].classList.add('BgDpPink');
				clearInterval(id3);
			} else {
				pos4++; 
				elem4.style.left = pos4 + "px";
			}
		}
	}
	else{
		var elem = document.getElementsByClassName('alu_arrow')[0];
		var epos = 830, pos = epos - 50;
		elem.style.top = pos + 'px';
		elem.classList.remove('hide');
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('alu_arrow1')[0];
		var epos1 = 32, pos1 = 30+242;
		var epos1_1 = 240, pos1_1 = 0;
		elem1.style.left = pos1 + 'px';
		elem1.style.width = pos1_1 + 'px';
		elem1.classList.remove('hide');
		var id1 = null;

		var elem2 = document.getElementsByClassName('left_strait_line_2')[0];
		var epos2 = 325, pos2 = 895;
		elem2.style.top = pos2 + 'px';
		var epos2_1 = 570, pos2_1 = 0;
		elem2.style.height = pos2_1 + 'px';
		elem2.classList.remove('hide');
		var elem3 = document.getElementsByClassName('alu')[0];
		var epos3 = 100, pos3 = 0;
		elem3.style.opacity = pos3 + '%';
		elem3.classList.remove('hide');
		var elem3_1 = document.getElementsByClassName('stepseven')[7];
		var epos3_1 = 100, pos3_1 = 0;
		elem3_1.style.opacity = pos3_1 + '%';
		elem3_1.classList.remove('hide');
		var id2 = null;
		elem4 = document.getElementsByClassName('left_strait_line_1')[0];
		var epos4 = 85, pos4 = 350;
		elem4.style.top = pos4 + 'px';
		var epos4_1 = 265, pos4_1 = 0;
		elem4.style.height = pos4_1 + 'px';
		elem4.classList.remove('hide');
		var id3 = null;
		var elem5 = document.getElementsByClassName('cl_path_1')[0];
		var epos5 = 30, pos5 = epos5 - 50;
		elem5.style.left = pos5 + 'px';
		var id4 = null;

		function frame() {
			if(stepNum < i){
				elem.classList.add('hide');
			}
			if (pos == epos) {
				id1 = setInterval(frame1, 5);
				clearInterval(id);
			} else {
				pos++; 
				elem.style.top = pos + "px";
			}
		}

		function frame1() {
			if(stepNum < i){
				elem1.classList.add('hide');
			}
			if (pos1 == epos1) {
				elem1.style.left = '30px';
				elem1.style.width = '242px';
				id2 = setInterval(frame2, 1);
				clearInterval(id1);
			} else {
				pos1-=5; 
				elem1.style.left = pos1 + "px";
				pos1_1+=5; 
				elem1.style.width = pos1_1 + "px";
			}
		}
		function frame2() {
			if(stepNum < i){
				elem2.classList.add('hide');
				elem3.classList.add('hide');
				elem3_1.classList.add('hide');
			}
			if (pos2 == epos2) {
				elem4.classList.remove('hide');
				id3 = setInterval(frame3, 5);
				clearInterval(id2);
			} else {
				pos2-=5; 
				elem2.style.top = pos2 + "px";
				pos2_1+=5; 
				elem2.style.height = pos2_1 + "px";
				if(pos3 < 100){
					pos3++;
					elem3.style.opacity = pos3 + '%';
				}
				if(pos3_1 < 100){
					pos3_1++;
					elem3_1.style.opacity = pos3_1 + '%';
				}
			}
		}
		function frame3() {
			if(stepNum < i){
				elem4.classList.add('hide');
			}
			if (pos4 == epos4) {
				elem5.classList.remove('hide');
				id4 = setInterval(frame4, 1);
				clearInterval(id3);
			} else {
				pos4-=5; 
				elem4.style.top = pos4 + "px";
				pos4_1+=5; 
				elem4.style.height = pos4_1 + "px";
			}
		}
		function frame4() {
			if(stepNum < i){
				elem5.classList.add('hide');
			}
			if (pos5 == epos5) {
				document.getElementsByClassName('r_bb1')[0].classList.add('BgDpPink');
				document.getElementsByClassName('upper_arrow_f')[0].classList.add('BgDpPink');
				clearInterval(id4);
			} else {
				pos5++; 
				elem5.style.left = pos5 + "px";
			}
		}
	}
}
function step_10(i) {
	if(menuNum < 4){
		document.getElementsByClassName('StraitLine')[0].classList.add('BgDpPink');
		document.getElementsByClassName('StraitLine_Arrow')[0].classList.add('BgDpPink');
		document.getElementsByClassName('clip_4inn')[0].classList.add('BgDpPink');
		document.getElementsByClassName('clip_4innn_overlap')[0].classList.add('BgDpPink');
		document.getElementsByClassName('clip_4inn_arm')[0].classList.add('BgDpPink');
		document.getElementsByClassName('clip_4inn_arrow')[0].classList.add('BgDpPink');
		var elem = document.getElementsByClassName('StraitLine')[0];
		var epos = 50, pos = 0;
		elem.style.height = pos + 'px';
		elem.classList.remove('hide');
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('StraitLine_Arrow')[0];
		var epos1 = 305, pos1 = epos1 - 50;
		elem1.style.left = pos1 + 'px';
		var id1 = null;
		var elem2 = document.getElementsByClassName('clip_4inn')[0];
		var epos2 = 180, pos2 = 0;
		elem2.style.height = pos2 + 'px';
		elem2.classList.remove('hide');
		var id2 = null;
		var elem3 = document.getElementsByClassName('clip_4innn_overlap')[0];
		var epos3 = 370, pos3 = 0;//370
		elem3.style.height = pos3 + 'px';
		elem3.classList.remove('hide');
		var elem3_1 = document.getElementsByClassName('stepfour')[8];
		var epos3_1 = 100, pos3_1 = 0;
		elem3_1.style.opacity = pos3_1 + '%';
		elem3_1.classList.remove('hide');
		var id3 = null;
		var elem4 = document.getElementsByClassName('clip_4inn_arm')[0];
		var epos4 = 243, pos4 = 243 + 217;//243
		elem4.style.left = pos4 + 'px';
		var epos4_1 = 215, pos4_1 = 0;//217
		elem4.style.width = pos4_1 + 'px';
		elem4.classList.remove('hide');
		var id4 = null;
		var elem5 = document.getElementsByClassName('clip_4inn_arrow')[0];
		var epos5 = 925, pos5 = epos5 - 50;
		elem5.style.top = pos5 + 'px';
		var id5 = null;
		function frame() {
			if(stepNum < i){
				elem.classList.add('hide');
			}
			if (pos == epos) {
				elem1.classList.remove('hide');
				id1 = setInterval(frame1, 1);
				clearInterval(id);
			} else {
				pos++; 
				elem.style.height = pos + "px";
			}
		}
		function frame1() {
			if(stepNum < i){
				elem1.classList.add('hide');
			}
			if (pos1 == epos1) {
				id2 = setInterval(frame2, 1);
				clearInterval(id1);
			} else {
				pos1+=5; 
				elem1.style.left = pos1 + "px";
			}
		}
		function frame2() {
			if(stepNum < i){
				elem2.classList.add('hide');
			}
			if (pos2 == epos2) {
				id3 = setInterval(frame3, 1);
				clearInterval(id2);
			} else {
				pos2++; 
				elem2.style.height = pos2 + "px";
			}
		}
		function frame3() {
			if(stepNum < i){
				elem3.classList.add('hide');
				elem3_1.classList.add('hide');
			}
			if (pos3 == epos3) {
				id4 = setInterval(frame4, 5);
				clearInterval(id3);
			} else {
				pos3+=10; 
				elem3.style.height = pos3 + "px";
				if(pos3_1 < 100){
					pos3_1+=4;
					elem3_1.style.opacity = pos3_1 + '%';
				}
			}
		}
		function frame4() {
			if(stepNum < i){
				elem4.classList.add('hide');
			}
			if (pos4_1 == epos4_1) {
				elem4.style.left = '243.001px';
				elem4.style.width = '217px';
				elem5.classList.remove('hide');
				id5 = setInterval(frame5, 5);
				clearInterval(id4);
			} else {
				pos4-=5; 
				elem4.style.left = pos4 + "px";
				pos4_1+=5;
				elem4.style.width = pos4_1 + 'px';
			}
		}
		function frame5() {
			if(stepNum < i){
				elem5.classList.add('hide');
			}
			if (pos5 == epos5) {
				clearInterval(id5);
			} else {
				pos5++; 
				elem5.style.top = pos5 + "px";
			}
		}
	}
	else{
		var elem = document.getElementsByClassName('arrow_dwn1')[0];
		var epos = 1024, pos = epos + 50;
		elem.style.top = pos + 'px';
		elem.classList.add('BgDpPink');
		var elem1 = document.getElementsByClassName('r_bb7')[0];
		var epos1 = 100, pos1 = 90;
		elem1.style.opacity = pos1 + '%';
		elem1.classList.add('BgDpPink');
		var id1 = null;
		var id = setInterval(frame, 5);
		function frame() {
			if(stepNum < i){
				elem.classList.remove('BgDpPink');
			}
			if (pos == epos) {
				id1 = setInterval(frame1, 1);
				clearInterval(id);
			} else {
				pos--; 
				elem.style.top = pos + "px";
			}
		}
		function frame1() {
			if(stepNum < i){
				elem1.classList.remove('BgDpPink');
			}
			if (pos1 == epos1) {
				clearInterval(id1);
			} else {
				pos1++; 
				elem1.style.opacity = pos1 + "%";
			}
		}
	}
}
function step_11(i) {
	if(menuNum < 4){
		var elem = document.getElementsByClassName('r_bb6')[0];
		var epos = 100, pos = 0;
		elem.style.opacity = pos + '%';
		elem.classList.remove('hide');
		var id = setInterval(frame, 1);
		var elem1 = document.getElementsByClassName('arrow_dwn')[0];
		var epos1 = 1024, pos1 = epos1 - 50;
		elem1.style.top = pos1 + 'px';
		var id1 = null;
		function frame() {
			if(stepNum < i){
				elem.classList.add('hide');
			}
			if(epos == pos){
				elem1.classList.remove('hide');
				id1 = setInterval(frame1, 5);
				clearInterval(id);
			}
			else{
				pos++;
				elem.style.opacity = pos + '%';
			}
		}
		function frame1() {
			if(stepNum < i){
				elem1.classList.add('hide');
			}
			if(epos1 == pos1){
				clearInterval(id1);
			}
			else{
				pos1++;
				elem1.style.top = pos1 + 'px';
			}
		}
	}
	else{
		var elem = document.getElementsByClassName('arrow_dwn10')[0];
		var epos = 931, pos = epos + 50;
		elem.style.top = pos + 'px';
		elem.classList.add('BgDpPink');
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('clip_4innn_overlap')[0];
		var epos1 = 570, pos1 = epos1 + 370;//570
		elem1.style.top = pos1 + 'px';
		var epos1_1 = 370, pos1_1 = 0;//370
		elem1.style.height = pos1_1 + 'px';
		elem1.classList.add('BgDpPink');
		elem1.classList.remove('hide');
		var elem2 = document.getElementsByClassName('stepfour')[8];
		var epos2 = 100, pos2 = 0;
		elem2.style.opacity = pos2 + '%';
		elem2.classList.remove('hide');
		var id1 = null;
		var elem3 = document.getElementsByClassName('right_bar_22_overlap')[0];
		var epos3 = 290, pos3 = 445;
		var epos3_1 = 155, pos3_1 = 0;
		elem3.classList.add('BgDpPink');
		elem3.style.left = pos3 + 'px';
		elem3.style.width = pos3_1 + 'px';
		elem3.classList.remove('hide');
		var id3 = null;
		var elem4 = document.getElementsByClassName('r_bb44_arrow')[0];
		var epos4 = 576, pos4 = epos4 - 50;//top = '576px';
		var id4 = null;
		var elem5 = document.getElementsByClassName('r_bb4_4')[0];
		var epos5 = 100, pos5 = 90;
		var id5 = null;

		var elem6 = document.getElementsByClassName('r_bb4_arrow')[0];
		var epos6 = 703, pos6 = epos6 - 50;
		var id6 = null;
		var elem7 = document.getElementsByClassName('r_bb5')[0];
		var epos7 = 100, pos7 = 90;
		var id7 = null;
		var elem8 = document.getElementsByClassName('alu_arrow_overlap')[0];
		var epos8 = 65, pos8 = 0;
		elem8.style.height = pos2 + 'px';
		elem8.classList.add('BgDpPink');
		elem8.classList.remove('hide');
		var id8 = null;
		var elem9 = document.getElementsByClassName('alu_arrow1_overlap')[0];
		var epos9 = 32, pos9 = 30+242;
		var epos9_1 = 240, pos9_1 = 0;
		elem9.style.left = pos9 + 'px';
		elem9.style.width = pos9_1 + 'px';
		elem9.classList.add('BgDpPink');
		elem9.classList.remove('hide');
		var id9 = null;
		var elem10 = document.getElementsByClassName('left_strait_line_2_overlap')[0];
		var epos10 = 325, pos10 = 895;
		elem10.style.top = pos10 + 'px';
		var epos10_1 = 570, pos10_1 = 0;
		elem10.style.height = pos10_1 + 'px';
		elem10.classList.add('BgDpPink');
		elem10.classList.remove('hide');
		var elem11 = document.getElementsByClassName('alu_overlap')[0];
		var epos11 = 100, pos11 = 0;
		elem11.style.opacity = pos11 + '%';
		elem11.classList.remove('hide');
		var elem11_1 = document.getElementsByClassName('stepseven')[9];
		var epos11_1 = 100, pos11_1 = 0;
		elem11_1.style.opacity = pos11_1 + '%';
		elem11_1.classList.remove('hide');
		var id10 = null;
		var elem12 = document.getElementsByClassName('cl_path_2')[0];
		var epos12 = 30, pos12 = epos12 - 25;
		var id11 = null;
		var elem13 = document.getElementsByClassName('r_bb3')[0];
		var epos13 = 100, pos13 = 90;
		var id12 = null;
		function frame() {
			if(stepNum < i){
				elem.classList.add('hide');
			}
			if (pos == epos) {
				elem1.classList.remove('hide');
				id1 = setInterval(frame1, 5);
				clearInterval(id);
			} else {
				pos--; 
				elem.style.top = pos + "px";
			}
		}
		function frame1() {
			if(stepNum < i){
				elem1.classList.add('hide');
				elem2.classList.add('hide');
			}
			if (pos1_1 == epos1_1) {
				id3 = setInterval(frame3, 1);
				clearInterval(id1);
			} else {
				pos1-=5; 
				elem1.style.top = pos1 + "px";
				pos1_1+=5; 
				elem1.style.height = pos1_1 + "px";
				if(pos2 < 100){
					pos2+=2;
					elem2.style.opacity = pos2 + '%';
				}
			}
		}
		function frame3() {
			if(stepNum < i){
				elem3.classList.add('hide');
			}
			if (pos3 == epos3) {
				elem4.style.top = pos4 + 'px';
				elem4.classList.add('BgDpPink');
				id4 = setInterval(frame4, 5);
				clearInterval(id3);
			} else {
				pos3-=5; 
				elem3.style.left = pos3 + "px";
				pos3_1+=5; 
				elem3.style.width = pos3_1 + "px";
			}
		}
		function frame4() {
			if(stepNum < i){
				elem4.classList.remove('BgDpPink');
			}
			if (pos4 == epos4) {
				elem5.style.opacity = pos5 + '%';
				elem5.classList.add('BgDpPink');
				id5 = setInterval(frame5, 1);
				clearInterval(id4);
			} else {
				pos4++; 
				elem4.style.top = pos4 + "px";
			}
		}
		function frame5() {
			if(stepNum < i){
				elem5.classList.remove('BgDpPink');
			}
			if(epos5 == pos5){
				elem6.classList.add('BgDpPink');
				elem6.style.top = pos6 + 'px';
				id6 = setInterval(frame6, 5);
				clearInterval(id5);
			}
			else{
				pos5++;
				elem5.style.opacity = pos5 + '%';
			}
		}
		function frame6() {
			if(stepNum < i){
				elem6.classList.remove('BgDpPink');
			}
			if (pos6 == epos6) {
				elem7.style.opacity = pos7 + '%';
				elem7.classList.add('BgDpPink');
				id7 = setInterval(frame7, 1);
				clearInterval(id6);
			} else {
				pos6++; 
				elem6.style.top = pos6 + "px";
			}
		}

		
		function frame7() {
			if(stepNum < i){
				elem7.classList.remove('BgDpPink');
			}
			if (pos7 == epos7) {
				id8 = setInterval(frame8, 5);
				clearInterval(id7);
			} else {
				pos7+=2;
				elem7.style.opacity = pos7 + '%';
			}
		}
		function frame8() {
			if(stepNum < i){
				elem8.classList.add('hide');
			}
			if (pos8 == epos8) {
				id9 = setInterval(frame9, 5);
				clearInterval(id8);
			} else {
				pos8++; 
				elem8.style.height = pos8 + "px";
			}
		}

		function frame9() {
			if(stepNum < i){
				elem9.classList.add('hide');
			}
			if (pos9 == epos9) {
				elem9.style.left = '30px';
				elem9.style.width = '242px';
				id10 = setInterval(frame10, 1);
				clearInterval(id9);
			} else {
				pos9-=5; 
				elem9.style.left = pos9 + "px";
				pos9_1+=5; 
				elem9.style.width = pos9_1 + "px";
			}
		}
		function frame10() {
			if(stepNum < i){
				elem10.classList.add('hide');
				elem11.classList.add('hide');
				elem11_1.classList.add('hide');
			}
			if (pos10 == epos10) {
				elem12.style.left = pos12 + 'px';
				elem12.classList.add('BgDpPink');
				elem12.classList.remove('hide');
				id11 = setInterval(frame11, 5);
				clearInterval(id10);
			} else {
				pos10-=5; 
				elem10.style.top = pos10 + "px";
				pos10_1+=5; 
				elem10.style.height = pos10_1 + "px";
				if(pos11 < 100){
					pos11++;
					elem11.style.opacity = pos11 + '%';
				}
				if(pos11_1 < 100){
					pos11_1++;
					elem11_1.style.opacity = pos11_1 + '%';
				}
			}
		}
		function frame11() {
			if(stepNum < i){
				elem12.classList.remove('BgDpPink');
			}
			if (pos12 == epos12) {
				elem13.style.opacity = pos13 + '%';
				elem13.classList.add('BgDpPink');
				id12 = setInterval(frame12, 1);
				clearInterval(id11);
			} else {
				pos12++; 
				elem12.style.left = pos12 + "px";
			}
		}
		function frame12() {
			if(stepNum < i){
				elem13.classList.remove('BgDpPink');
			}
			if (pos13 == epos13) {
				clearInterval(id12);
			}
			else{
				pos13++;
				elem13.style.opacity = pos13 + '%';
			}
		}
	}
}
function step_12(i) {
	var elem14 = document.getElementsByClassName('lower_arrow1')[0];
	var epos14 = 172, pos14 = epos14 + 50;
	elem14.classList.add('BgDpPink');
	elem14.style.top = pos14 + 'px';
	elem14.classList.remove('hide');
	var elem14_1 = document.getElementsByClassName('stepnone')[2];
	var epos14_1 = 100, pos14_1 = 0;
	elem14_1.style.opacity = pos14_1 + '%';
	elem14_1.classList.remove('hide');
	var id13 = setInterval(frame13, 5);
	var elem = document.getElementsByClassName('r_bb1')[0];
	var epos = 100, pos = 90;
	var id = null;
	function frame13() {
		if(stepNum < i){
			elem14.classList.add('hide');
		}
		if(pos14 == epos14){
			elem.style.opacity = pos + '%';
			elem.classList.add('BgDpPink');
			id = setInterval(frame, 5);
			clearInterval(id13);
		}
		else{
			pos14--;
			elem14.style.top = pos14 + 'px';
			pos14_1+=2;
			elem14_1.style.opacity = pos14_1 + '%';
		}
	}
	function frame() {
		if(stepNum < i){
			elem.classList.add('hide');
		}
		if(pos == epos){
			clearInterval(id);
		}
		else{
			pos++;
			elem.style.opacity = pos + '%';
		}
	}
}
function back() {
	for (var i = 0; i < stepFinder[menuNum].length; i++) {
		if(document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.contains('nextStep')){
			if(i < 9 && menuNum > 1){
				window.scrollTo(0,0+((i-3)*100));
			}
			else if(menuNum > 1){
				window.scrollTo(0,2000);
			}
			if(i){
				stepNum--;
				document.getElementById('step'+(menuNum+1)+'_'+i).classList.remove('BgPink');
				document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.remove('nextStep');
				document.getElementsByClassName(stepFinder[menuNum][i - 1])[0].classList.add('nextStep');
				window['back_'+(i)](i-1);
			}
			if(i > 1){
				document.getElementById('step'+(menuNum+1)+'_'+(i - 1)).classList.add('BgPink');
			}
			break;
		}
	}
}
function back_1(i) {
	var elem = document.getElementsByClassName('upper_arrow_f')[0];
	var epos = 58, pos = 8;
	var elem_1 = document.getElementsByClassName('text_top')[0];
	var epos_1 = 0, pos_1 = 100;
	var id = setInterval(frame, 5);
	var elem1 = document.getElementsByClassName('r_bb1')[0];
	var epos1 = 0, pos1 = 100;
	var id1 = null;
	function frame() {
		if (pos == epos) {
			elem.classList.add('hide');
			elem_1.classList.add('hide');
			if(stepNum > i){
				elem.classList.remove('hide');
				elem_1.classList.remove('hide');
			}
			id1 = setInterval(frame1, 5);
			clearInterval(id);
		} else {
			pos++; 
			elem.style.top = pos + "px";
			pos_1 -= 2;
			elem_1.style.opacity = pos_1 + '%';
		}
	}
	function frame1() {
		if (pos1 == epos1) {
			elem1.classList.add('hide');
			if(stepNum > i){
				elem1.classList.remove('hide');
			}
			clearInterval(id1);
		} else {
			pos1-=2; 
			elem1.style.opacity = pos1 + "%";
		}
	}
}
function back_2(i) {
	var elem1 = document.getElementsByClassName('r_bb7')[0];
	var epos1 = 0, pos1 = 100;
	var id1 = id1 = setInterval(frame1, 1);
	var elem = document.getElementsByClassName('arrow_dwn1')[0];
	var epos = 1074, pos = 1024;
	var elem_1 = document.getElementsByClassName('text_bottom')[0];
	var epos_1 = 0, pos_1 = 100;
	var id = null;
	function frame1() {
		if (pos1 == epos1) {
			elem1.classList.add('hide');
			if(stepNum > i){
				elem1.classList.remove('hide');
			}
			id = setInterval(frame, 1);
			clearInterval(id1);
		} else {
			pos1-=5; 
			elem1.style.opacity = pos1 + "%";
		}
	}
	function frame() {
		if (pos == epos) {
			elem.classList.add('hide');
			elem_1.classList.add('hide');
			if(stepNum > i){
				elem.classList.remove('hide');
				elem_1.classList.remove('hide');
			}
			clearInterval(id);
		} else {
			pos++; 
			elem.style.top = pos + "px";
			pos_1 -= 2;
			elem_1.style.opacity = pos_1 + '%';
		}
	}
}
function back_3(i) {
	var elem5 = document.getElementsByClassName('row_4_arrow')[0];
	var epos5 = 53, pos5 = 3;
	var elem5_1 = document.getElementsByClassName('Control')[0];
	var epos5_1 = 0, pos5_1 = 100;
	var id4 = setInterval(frame4, 5);
	var elem3 = document.getElementsByClassName('r4')[0];
	var epos3 = 0, pos3 = 100;
	var elem4 = document.getElementsByClassName('stepone')[4];
	var epos4 = 0, pos4 = 100;
	var id3 = null;
	var elem2 = document.getElementsByClassName('data_in_arrow')[0];
	var epos2 = 951, pos2 = 901;
	var id2 = null;
	function frame4() {
		if (pos5 == epos5) {
			elem5.classList.add('hide');
			if(stepNum > i){
				elem5.classList.remove('hide');
			}
			id3 = setInterval(frame3, 1);
			clearInterval(id4);
		} else {
			pos5++; 
			elem5.style.top = pos5 + "px";
			pos5_1 -= 2;
			elem5_1.style.opacity = pos5_1 + '%';
		}
	}
	function frame3() {
		if (pos3 == epos3) {
			elem3.classList.add('hide');
			elem4.classList.add('hide');
			if(stepNum > i){
				elem3.classList.remove('hide');
				elem4.classList.remove('hide');
			}
			id2 = setInterval(frame2, 5);
			clearInterval(id3);
		} else {
			pos3-=5; 
			elem3.style.opacity = pos3 + "%";
			pos4-=5; 
			elem4.style.opacity = pos4 + "%";
		}
	}
	function frame2() {
		if (pos2 == epos2) {
			elem2.classList.add('hide');
			if(stepNum > i){
				elem2.classList.remove('hide');
			}
			clearInterval(id2);
		} else {
			pos2++; 
			elem2.style.top = pos2 + "px";
		}
	}
}
function back_4(i) {
	var elem4 = document.getElementsByClassName('right_bar_1')[0];
	var epos4 = 434, pos4 = 384;
	document.getElementsByClassName('r_bb3')[0].classList.add('hide');
	var id4 = setInterval(frame4, 5);
	var elem3 = document.getElementsByClassName('clip_4innnn')[0];
	var epos3 = 0, pos3 = 129;
	elem3.style.height = pos3 + 'px';
	var id3 = null;
	var elem2 = document.getElementsByClassName('f_c_t')[0];
	var epos2 = 0, pos2 = 84;
	elem2.style.width = pos2 + 'px';
	var id2 = null;
	var elem1 = document.getElementsByClassName('r_bb2')[0];
	var epos1 = 0, pos1 = 100;
	elem1.style.opacity = pos1 + '%';
	var id1 = null;
	var elem = document.getElementsByClassName('upper_arrow')[0];
	var epos = 72, pos = 122;
	elem.style.top = pos + 'px';
	var id = null;
	document.getElementsByClassName('r_bb1')[0].classList.remove('BgDpPink');
	var elem7 = document.getElementsByClassName('right_bar')[0];
	var epos7 = 434, pos7 = 384;
	elem7.style.left = pos7 + 'px';
	var id7 = setInterval(frame7, 5);
	var elem6 = document.getElementsByClassName('clip_4in')[0];
	var epos6 = 210, pos6 = 85;//85.5
	elem6.style.top = pos6 + 'px';
	var epos6_1 = 0, pos6_1 = 125;
	elem6.style.height = pos6_1 + 'px';
	var id6 = null;
	function frame4() {
		if (pos4 == epos4) {
			elem4.classList.add('hide');
			elem4.style.left = '384px';
			if(stepNum > i){
				elem4.classList.remove('hide');
			}
			id3 = setInterval(frame3, 1);
			clearInterval(id4);
		} else {
			pos4++; 
			elem4.style.left = pos4 + "px";
		}
	}
	function frame3() {
		if (pos3 == epos3) {
			elem3.classList.add('hide');
			if(stepNum > i){
				elem3.classList.remove('hide');
			}
			id2 = setInterval(frame2, 1);
			clearInterval(id3);
		} else {
			pos3-=3; 
			elem3.style.height = pos3 + "px";
		}
	}
	function frame2() {
		if (pos2 == epos2) {
			elem2.classList.add('hide');
			if(stepNum > i){
				elem2.classList.remove('hide');
			}
			id1 = setInterval(frame1, 1);
			clearInterval(id2);
		} else {
			pos2--; 
			elem2.style.width = pos2 + "px";
		}
	}
	function frame1() {
		if (pos1 == epos1) {
			elem1.classList.add('hide');
			if(stepNum > i){
				elem1.classList.remove('hide');
			}
			id = setInterval(frame, 5);
			clearInterval(id1);
		} else {
			pos1-=2;
			elem1.style.opacity = pos1 + '%';
		}
	}
	function frame() {
		if (pos == epos) {
			elem.classList.add('hide');
			if(stepNum > i){
				elem.classList.remove('hide');
			}
			clearInterval(id);
		} else {
			pos--; 
			elem.style.top = pos + "px";
		}
	}
	function frame7() {
		if (pos7 == epos7) {
			elem7.classList.add('hide');
			if(stepNum > i){
				elem7.classList.remove('hide');
			}
			id6 = setInterval(frame6, 5);
			clearInterval(id7);
		} else {
			pos7++; 
			elem7.style.left = pos7 + "px";
		}
	}
	function frame6() {
		if (pos6 == epos6) {
			elem6.classList.add('hide');
			if(stepNum > i){
				elem6.classList.remove('hide');
			}
			clearInterval(id6);
		} else {
			pos6+=5; 
			elem6.style.top = pos6 + "px";
			pos6_1-=5;
			elem6.style.height = pos6_1 + 'px';
		}
	}
}
function back_5(i) {
	var elem3 = document.getElementsByClassName('stepthree')[1];
	var epos3 = 0, pos3 = 100;
	var elem1 = document.getElementsByClassName('abus_straitline')[0];
	var epos1 = 0, pos1 = 300;
	var elem = document.getElementsByClassName('bank_arrow_2')[0];
	var epos = 644, pos = 694;
	var id1 = null;
	var id = setInterval(frame, 5);
	function frame() {
		if (pos == epos) {
			elem.classList.add('hide');
			if(stepNum > i){
				elem.classList.remove('hide');
			}
			id1 = setInterval(frame1, 5);
			clearInterval(id);
		} else {
			pos-=2; 
			elem.style.top = pos + "px";
		}
	}
	function frame1() {
		if (pos1 == epos1) {
			elem1.classList.add('hide');
			elem3.classList.add('hide');
			elem3.style.opacity = epos3 + '%';
			elem.classList.add('hide');
			if(stepNum > i){
				elem1.classList.remove('hide');
				elem3.classList.remove('hide');
				elem.classList.remove('hide');
			}
			clearInterval(id1);
		} else {
			pos1-=5; 
			if(pos3 > epos3){
				pos3-=3;
				elem3.style.opacity = pos3 + '%';
			}
			elem1.style.height = pos1 + "px";
		}
	}
}
function back_6(i) {
	if (!menuNum) {
		var elem = document.getElementsByClassName('StraitLine')[0];
		var epos = 0, pos = 50;
		var elem1 = document.getElementsByClassName('StraitLine_Arrow')[0];
		var epos1 = 255, pos1 = 305;
		var elem2 = document.getElementsByClassName('clip_4inn')[0];
		var epos2 = 0, pos2 = 180;
		var elem3 = document.getElementsByClassName('right_bar_22')[0];
		var epos3 = 445, pos3 = 290;
		var epos3_1 = 0, pos3_1 = 155;
		var elem4 = document.getElementsByClassName('r_bb44_arrow')[0];
		var epos4 = 526, pos4 = 576;//top = '576px';
		var elem5 = document.getElementsByClassName('r_bb4_4')[0];
		var epos5 = 0, pos5 = 100;
		var id = null;
		var id1 = null;
		var id2 = null;
		var id3 = null;
		var id4 = null;
		var id5 = setInterval(frame5, 1);
		function frame5() {
			if (pos5 == epos5) {
				elem5.classList.add('hide');
				if(stepNum > i){
					elem5.classList.remove('hide');
				}
				id4 = setInterval(frame4, 5);
				clearInterval(id5);
			} else {
				pos5-=2;
				elem5.style.opacity = pos5 + '%';
			}
		}
		function frame4() {
			if (pos4 == epos4) {
				elem4.classList.add('hide');
				if(stepNum > i){
					elem4.classList.remove('hide');
				}
				id3 = setInterval(frame3, 1);
				clearInterval(id4);
			} else {
				pos4--; 
				elem4.style.top = pos4 + "px";
			}
		}
		function frame3() {
			if (pos3_1 == epos3_1) {
				elem3.classList.add('hide');
				if(stepNum > i){
					elem3.classList.remove('hide');
				}
				id2 = setInterval(frame2, 1);
				clearInterval(id3);
			} else {
				pos3++; 
				elem3.style.left = pos3 + "px";
				pos3_1--; 
				elem3.style.width = pos3_1 + "px";
			}
		}
		function frame2() {
			if (pos2 == epos2) {
				elem2.classList.add('hide');
				if(stepNum > i){
					elem2.classList.remove('hide');
				}
				id1 = setInterval(frame1, 1);
				clearInterval(id2);
			} else {
				pos2--; 
				elem2.style.height = pos2 + "px";
			}
		}
		function frame1() {
			if (pos1 == epos1) {
				elem1.classList.add('hide');
				if(stepNum > i){
					elem1.classList.remove('hide');
				}
				id = setInterval(frame, 5);
				clearInterval(id1);
			} else {
				pos1-=5; 
				elem1.style.left = pos1 + "px";
			}
		}
		function frame() {
			if (pos == epos) {
				elem.classList.add('hide');
				if(stepNum > i){
					elem.classList.remove('hide');
				}
				clearInterval(id);
			} else {
				pos--; 
				elem.style.height = pos + "px";
			}
		}
	}
	else{
		var elem = document.getElementsByClassName('arrow_dwn10')[0];
		var epos = 981, pos = 931;
		var elem1 = document.getElementsByClassName('clip_4innn')[0];
		var epos1 = 940, pos1 = 570;//570
		var epos1_1 = 0, pos1_1 = 370;//370
		var elem2 = document.getElementsByClassName('stepfour')[6];
		var epos2 = 0, pos2 = 100;
		var elem3 = document.getElementsByClassName('right_bar_22')[0];
		var epos3 = 445, pos3 = 290;
		var epos3_1 = 0, pos3_1 = 155;
		var elem4 = document.getElementsByClassName('r_bb44_arrow')[0];
		var epos4 = 526, pos4 = 576;//height = '576px';
		var elem5 = document.getElementsByClassName('r_bb4_4')[0];
		var epos5 = 0, pos5 = 100;
		var id = null;
		var id1 = null;
		var id3 = null;
		var id4 = null;
		var id5 = setInterval(frame5, 1);

		function frame5() {
			if (pos5 == epos5) {
				elem5.classList.add('hide');
				if(stepNum > i){
					elem5.classList.remove('hide');
				}
				id4 = setInterval(frame4, 5);
				clearInterval(id5);
			} else {
				pos5-=2;
				elem5.style.opacity = pos5 + '%';
			}
		}
		function frame4() {
			if (pos4 == epos4) {
				elem4.classList.add('hide');
				if(stepNum > i){
					elem4.classList.remove('hide');
				}
				id3 = setInterval(frame3, 1);
				clearInterval(id4);
			} else {
				pos4--; 
				elem4.style.top = pos4 + "px";
			}
		}
		function frame3() {
			if (pos3 == epos3) {
				elem3.classList.add('hide');
				if(stepNum > i){
					elem3.classList.remove('hide');
				}
				id1 = setInterval(frame1, 1);
				clearInterval(id3);
			} else {
				pos3++; 
				elem3.style.left = pos3 + "px";
				pos3_1--; 
				elem3.style.width = pos3_1 + "px";
			}
		}
		function frame1() {
			if (pos1_1 == epos1_1) {
				elem1.classList.add('hide');
				elem1.style.top = '570px';
				elem1.style.height = '370px';
				elem2.classList.add('hide');
				if(stepNum > i){
					elem1.classList.remove('hide');
					elem2.classList.remove('hide');
				}
				id = setInterval(frame, 5);
				clearInterval(id1);
			} else {
				pos1+=5; 
				elem1.style.top = pos1 + "px";
				pos1_1-=5; 
				elem1.style.height = pos1_1 + "px";
				if(pos2 < 100){
					pos2-=2;
					elem2.style.opacity = pos2 + '%';
				}
			}
		}
		function frame() {
			if (pos == epos) {
				elem.classList.add('hide');
				if(stepNum > i){
					elem.classList.remove('hide');
				}
				clearInterval(id);
			} else {
				pos++; 
				elem.style.top = pos + "px";
			}
		}
	}
}
function back_7(i) {
	var elem5 = document.getElementsByClassName('r_bb4_4')[0];
	var epos5 = 0, pos5 = 100;
	var id5 = setInterval(frame5, 1);
	function frame5() {
		if (pos5 == epos5) {
			elem5.classList.add('hide');
			if(stepNum > i){
				elem5.classList.remove('hide');
			}
			clearInterval(id5);
		} else {
			pos5-=2;
			elem5.style.opacity = pos5 + '%';
		}
	}
}
function back_8(i) {
	var elem1 = document.getElementsByClassName('r_bb5')[0];
	var epos1 = 0, pos1 = 100;
	var elem = document.getElementsByClassName('r_bb4_arrow')[0];
	var epos = 653, pos = 703;
	var id1 = setInterval(frame1, 1);
	var id = null;
	function frame1() {	
		if (pos1 == epos1) {
			elem1.classList.add('hide');
			if(stepNum > i){
				elem1.classList.remove('hide');
			}
			id = setInterval(frame, 5);
			clearInterval(id1);
		} else {
			pos1-=2;
			elem1.style.opacity = pos1 + '%';
		}
	}
	function frame() {
		if (pos == epos) {
			elem.classList.add('hide');
			if(stepNum > i){
				elem.classList.remove('hide');
			}
			clearInterval(id);
		} else {
			pos--; 
			elem.style.top = pos + "px";
		}
	}
}
function back_9(i) {
	if (menuNum < 2) {
		document.getElementsByClassName('r_bb3')[0].classList.remove('BgDpPink');
		var elem = document.getElementsByClassName('alu_arrow')[0];
		var epos = 780, pos = 830;
		var elem1 = document.getElementsByClassName('alu_arrow1')[0];
		var epos1 = 270, pos1 = 30;
		var epos1_1 = 2, pos1_1 = 242;
		var elem2 = document.getElementsByClassName('left_strait_line_2')[0];
		var epos2 = 895, pos2 = 325;
		var epos2_1 = 0, pos2_1 = 570;
		var elem3 = document.getElementsByClassName('alu')[0];
		var epos3 = 0, pos3 = 100;
		var elem3_1 = document.getElementsByClassName('stepseven')[7];
		var epos3_1 = 0, pos3_1 = 100;
		var elem4 = document.getElementsByClassName('cl_path_2')[0];
		var epos4 = 5, pos4 = 30;
		var id = null;
		var id1 = null;
		var id2 = null;
		var id3 = setInterval(frame3, 5);
		function frame3() {
			if (pos4 == epos4) {
				elem4.classList.add('hide');
				if(stepNum > i){
					elem4.classList.remove('hide');
				}
				id2 = setInterval(frame2, 1);
				clearInterval(id3);
			} else {
				pos4--; 
				elem4.style.left = pos4 + "px";
			}
		}

		function frame2() {
			if (pos2 == epos2) {
				elem2.classList.add('hide');
				elem3.classList.add('hide');
				elem3_1.classList.add('hide');
				if(stepNum > i){
					elem2.classList.remove('hide');
					elem3.classList.remove('hide');
					elem3_1.classList.remove('hide');
				}
				id1 = setInterval(frame1, 5);
				clearInterval(id2);
			} else {
				pos2+=5; 
				elem2.style.top = pos2 + "px";
				pos2_1-=5; 
				elem2.style.height = pos2_1 + "px";
				if(pos3 > 0){
					pos3--;
					elem3.style.opacity = pos3 + '%';
				}
				if(pos3_1 > 0){
					pos3_1--;
					elem3_1.style.opacity = pos3_1 + '%';
				}
			}
		}

		function frame1() {
			if (pos1 == epos1) {
				elem1.style.left = '272px';
				elem1.style.width = '0px';
				elem1.classList.add('hide');
				if(stepNum > i){
					elem1.classList.remove('hide');
				}
				id = setInterval(frame, 5);
				clearInterval(id1);
			} else {
				pos1+=5; 
				elem1.style.left = pos1 + "px";
				pos1_1-=5; 
				elem1.style.width = pos1_1 + "px";
			}
		}
		
		function frame() {
			if (pos == epos) {
				elem.classList.add('hide');
				if(stepNum > i){
					elem.classList.remove('hide');
				}
				clearInterval(id);
			} else {
				pos--; 
				elem.style.top = pos + "px";
			}
		}
	}
	else{
		document.getElementsByClassName('r_bb1')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('upper_arrow_f')[0].classList.remove('BgDpPink');

		elem4 = document.getElementsByClassName('left_strait_line_1')[0];
		var epos4 = 350, pos4 = 85;
		var epos4_1 = 0, pos4_1 = 265;
		var id3 = null;
		var elem5 = document.getElementsByClassName('cl_path_1')[0];
		var epos5 = -20, pos5 = 30;
		var id4 = setInterval(frame4, 5);

		var elem = document.getElementsByClassName('alu_arrow')[0];
		var epos = 780, pos = 830;
		var elem1 = document.getElementsByClassName('alu_arrow1')[0];
		var epos1 = 270, pos1 = 30;
		var epos1_1 = 2, pos1_1 = 242;
		var elem2 = document.getElementsByClassName('left_strait_line_2')[0];
		var epos2 = 895, pos2 = 325;
		var epos2_1 = 0, pos2_1 = 570;
		var elem3 = document.getElementsByClassName('alu')[0];
		var epos3 = 0, pos3 = 100;
		var elem3_1 = document.getElementsByClassName('stepseven')[7];
		var epos3_1 = 0, pos3_1 = 100;
		var id = null;
		var id1 = null;
		var id2 = null;

		function frame4() {
			if (pos5 == epos5) {
				elem5.classList.add('hide');
				if(stepNum > i){
					elem5.classList.remove('hide');
				}
				id3 = setInterval(frame3, 5);
				clearInterval(id4);
			} else {
				pos5--;
				elem5.style.left = pos5 + "px";
			}
		}
		function frame3() {
			if (pos4 == epos4) {
				elem5.classList.add('hide');
				if(stepNum > i){
					elem5.classList.remove('hide');
				}
				id2 = setInterval(frame2, 1);
				clearInterval(id3);
			} else {
				pos4+=5; 
				elem4.style.top = pos4 + "px";
				pos4_1-=5; 
				elem4.style.height = pos4_1 + "px";
			}
		}
		function frame2() {
			if (pos2 == epos2) {
				elem2.classList.add('hide');
				elem3.classList.add('hide');
				elem3_1.classList.add('hide');
				if(stepNum > i){
					elem2.classList.remove('hide');
					elem3.classList.remove('hide');
					elem3_1.classList.remove('hide');
				}
				id1 = setInterval(frame1, 5);
				clearInterval(id2);
			} else {
				pos2+=5; 
				elem2.style.top = pos2 + "px";
				pos2_1-=5; 
				elem2.style.height = pos2_1 + "px";
				if(pos3 > 0){
					pos3--;
					elem3.style.opacity = pos3 + '%';
				}
				if(pos3_1 > 0){
					pos3_1--;
					elem3_1.style.opacity = pos3_1 + '%';
				}
			}
		}

		function frame1() {
			if (pos1 == epos1) {
				elem1.style.left = '272px';
				elem1.style.width = '0px';
				elem1.classList.add('hide');
				if(stepNum > i){
					elem1.classList.remove('hide');
				}
				id = setInterval(frame, 5);
				clearInterval(id1);
			} else {
				pos1+=5; 
				elem1.style.left = pos1 + "px";
				pos1_1-=5; 
				elem1.style.width = pos1_1 + "px";
			}
		}
		
		function frame() {
			if (pos == epos) {
				elem.classList.add('hide');
				if(stepNum > i){
					elem.classList.remove('hide');
				}
				clearInterval(id);
			} else {
				pos--; 
				elem.style.top = pos + "px";
			}
		}
	}
}
function back_10(i) {
	if(menuNum < 4){
		var elem = document.getElementsByClassName('StraitLine')[0];
		var epos = 0, pos = 50;
		var elem1 = document.getElementsByClassName('StraitLine_Arrow')[0];
		var epos1 = 255, pos1 = 305;
		var elem2 = document.getElementsByClassName('clip_4inn')[0];
		var epos2 = 0, pos2 = 180;
		var elem3 = document.getElementsByClassName('clip_4innn_overlap')[0];
		var epos3 = 0, pos3 = 370;//370
		var elem3_1 = document.getElementsByClassName('stepfour')[8];
		var epos3_1 = 0, pos3_1 = 100;
		var elem4 = document.getElementsByClassName('clip_4inn_arm')[0];
		var epos4 = 460, pos4 = 243;//243
		var epos4_1 = 0, pos4_1 = 215;//217
		var elem5 = document.getElementsByClassName('clip_4inn_arrow')[0];
		var epos5 = 875, pos5 = 925;
		var id = null;
		var id1 = null;
		var id2 = null;
		var id3 = null;
		var id4 = null;
		var id5 = setInterval(frame5, 5);
		function frame5() {
			if (pos5 == epos5) {
				elem5.classList.add('hide');
				if(stepNum > i){
					elem5.classList.remove('hide');
				}
				elem4.style.left = pos4 + 'px';
				elem4.style.width = pos4_1 + 'px';
				id4 = setInterval(frame4, 5);
				clearInterval(id5);
			} else {
				pos5--; 
				elem5.style.top = pos5 + "px";
			}
		}
		function frame4() {
			if (pos4_1 == epos4_1) {
				elem4.classList.add('hide');
				if(stepNum > i){
					elem4.classList.remove('hide');
				}
				elem3.style.height = pos3 + 'px';
				id3 = setInterval(frame3, 1);
				clearInterval(id4);
			} else {
				pos4+=5; 
				elem4.style.left = pos4 + "px";
				pos4_1-=5;
				elem4.style.width = pos4_1 + 'px';
			}
		}
			
		function frame3() {
			if (pos3 == epos3) {
				elem3.classList.add('hide');
				elem3_1.classList.add('hide');
				if(stepNum > i){
					elem3.classList.remove('hide');
					elem3_1.classList.remove('hide');
				}
				id2 = setInterval(frame2, 1);
				clearInterval(id3);
			} else {
				pos3-=10; 
				elem3.style.height = pos3 + "px";
				if(pos3_1 > 0){
					pos3_1-=4;
					elem3_1.style.opacity = pos3_1 + '%';
				}
			}
		}
		function frame2() {
			if (pos2 == epos2) {
				elem2.classList.add('hide');
				if(stepNum > i){
					elem2.classList.remove('hide');
				}
				id1 = setInterval(frame1, 1);	
				clearInterval(id2);
			} else {
				pos2--; 
				elem2.style.height = pos2 + "px";
			}
		}
		function frame1() {
			if (pos1 == epos1) {
				elem1.classList.add('hide');
				if(stepNum > i){
					elem1.classList.remove('hide');
				}
				id = setInterval(frame, 5);
				clearInterval(id1);
			} else {
				pos1-=5; 
				elem1.style.left = pos1 + "px";
			}
		}
		function frame() {
			if (pos == epos) {
				elem.classList.add('hide');
				if(stepNum > i){
					elem.classList.remove('hide');
				}
				clearInterval(id);
			} else {
				pos--; 
				elem.style.height = pos + "px";
			}
		}
	}
	else{
		var elem1 = document.getElementsByClassName('r_bb7')[0];
		var epos1 = 90, pos1 = 100;
		var elem = document.getElementsByClassName('arrow_dwn1')[0];
		var epos = 1074, pos = 1024;
		var id = null;
		var id1 = setInterval(frame1, 5);
		function frame1() {
			if (pos1 == epos1) {
				elem1.classList.remove('BgDpPink');
				elem1.style.opacity = '100%';
				if(stepNum > i){
					elem1.classList.add('BgDpPink');
				}
				id = setInterval(frame, 1);
				clearInterval(id1);
			} else {
				pos1--; 
				elem1.style.opacity = pos1 + "%";
			}
		}
		function frame() {
			if (pos == epos) {
				elem.classList.remove('BgDpPink');
				elem.style.top = '1024px';
				if(stepNum > i){
					elem.classList.add('BgDpPink');
				}
				clearInterval(id);
			} else {
				pos++; 
				elem.style.top = pos + "px";
			}
		}
	}
}
function back_11(i) {
	if(menuNum < 4){
		var elem = document.getElementsByClassName('r_bb6')[0];
		var epos = 0, pos = 100;
		var elem1 = document.getElementsByClassName('arrow_dwn')[0];
		var epos1 = 974, pos1 = 1024;
		var id = null;
		var id1 = setInterval(frame1, 5);

		function frame1() {
			if(epos1 == pos1){
				elem1.classList.add('hide');
				if(stepNum > i){
					elem1.classList.remove('hide');
				}
				id = setInterval(frame, 1);
				clearInterval(id1);
			}
			else{
				pos1--;
				elem1.style.top = pos1 + 'px';
			}
		}
		function frame() {
			if(epos == pos){
				elem.classList.add('hide');
				if(stepNum > i){
					elem.classList.remove('hide');
				}
				clearInterval(id);
			}
			else{
				pos--;
				elem.style.opacity = pos + '%';
			}
		}
	}
	else{
		var elem = document.getElementsByClassName('r_bb4_arrow')[0];
		var epos = 653, pos = 703;
		var elem1 = document.getElementsByClassName('r_bb5')[0];
		var epos1 = 90, pos1 = 100;
		var elem2 = document.getElementsByClassName('alu_arrow_overlap')[0];
		var epos2 = 0, pos2 = 65;
		var elem3 = document.getElementsByClassName('alu_arrow1_overlap')[0];
		var epos3 = 270, pos3 = 30;
		var epos3_1 = 2, pos3_1 = 242;
		var elem4 = document.getElementsByClassName('left_strait_line_2_overlap')[0];
		var epos4 = 895, pos4 = 325;
		var epos4_1 = 0, pos4_1 = 570;
		var elem5 = document.getElementsByClassName('alu_overlap')[0];
		var epos5 = 0, pos5 = 100;
		var elem5_1 = document.getElementsByClassName('stepseven')[9];
		var epos5_1 = 0, pos5_1 = 100;
		var elem6 = document.getElementsByClassName('cl_path_2')[0];
		var epos6 = 5, pos6 = 30;
		var elem7 = document.getElementsByClassName('r_bb3')[0];
		var epos7 = 90, pos7 = 100;
		var elem8 = document.getElementsByClassName('lower_arrow1')[0];
		var epos8 = 222, pos8 = 172;
		var elem8_1 = document.getElementsByClassName('stepnone')[2];
		var epos8_1 = 0, pos8_1 = 100;

		var elem9 = document.getElementsByClassName('r_bb4_4')[0];
		var epos9 = 90, pos9 = 100;

		var elem10 = document.getElementsByClassName('r_bb44_arrow')[0];
		var epos10 = 526, pos10 = 576;//height = '576px';
		var elem11 = document.getElementsByClassName('right_bar_22_overlap')[0];
		var epos11 = 445, pos11 = 290;
		var epos11_1 = 0, pos11_1 = 155;
		var elem12 = document.getElementsByClassName('clip_4innn_overlap')[0];
		var epos12 = 940, pos12 = 570;
		var epos12_1 = 0, pos12_1 = 370;
		var elem12_2 = document.getElementsByClassName('stepfour')[8];
		var epos12_2 = 0, pos12_2 = 100;
		var elem13 = document.getElementsByClassName('arrow_dwn10')[0];
		var epos13 = 981, pos13 = 931;//height = '577.5px';

		var id = null;
		var id1 = null;
		var id2 = null;
		var id3 = null;
		var id4 = null;
		var id5 = null;
		var id7 = null;
		var id8 = null;
		var id9 = null;
		var id10 = null;
		var id11 = null;
		var id6 = setInterval(frame6, 1);
		function frame6() {
			if (pos7 == epos7) {
				elem7.classList.remove('BgDpPink');
				elem7.style.opacity = '100%';
				if(stepNum > i){
					elem7.classList.add('BgDpPink');
				}
				id5 = setInterval(frame5, 5);
				clearInterval(id6);
			}
			else{
				pos7--;
				elem7.style.opacity = pos7 + '%';
			}
		}
		function frame5() {
			if (pos6 == epos6) {
				elem6.classList.remove('BgDpPink');
				elem6.classList.add('hide');
				elem6.style.left = '30px';
				if(stepNum > i){
					elem6.classList.add('BgDpPink');
					elem6.classList.remove('hide');
				}
				id4 = setInterval(frame4, 1);
				clearInterval(id5);
			} else {
				pos6--; 
				elem6.style.left = pos6 + "px";
			}
		}
		function frame4() {
			if (pos4 == epos4) {
				elem4.classList.add('hide');
				elem5.classList.add('hide');
				elem5_1.classList.add('hide');
				if(stepNum > i){
					elem4.classList.remove('hide');
					elem5.classList.remove('hide');
					elem5_1.classList.remove('hide');
				}
				id3 = setInterval(frame3, 5);
				clearInterval(id4);
			} else {
				pos4+=5; 
				elem4.style.top = pos4 + "px";
				pos4_1-=5; 
				elem4.style.height = pos4_1 + "px";
				if(pos5 > 0){
					pos5--;
					elem5.style.opacity = pos5 + '%';
				}
				if(pos5_1 > 0){
					pos5_1--;
					elem5_1.style.opacity = pos5_1 + '%';
				}
			}
		}
		function frame3() {
			if (pos3 == epos3) {
				elem3.style.left = '272px';
				elem3.style.width = '0px';
				elem3.classList.add('hide');
				if(stepNum > i){
					elem3.classList.remove('hide');
				}
				id2 = setInterval(frame2, 5);
				clearInterval(id3);
			} else {
				pos3+=5; 
				elem3.style.left = pos3 + "px";
				pos3_1-=5; 
				elem3.style.width = pos3_1 + "px";
			}
		}
		function frame2() {
			if (pos2 == epos2) {
				elem2.classList.add('hide');
				if(stepNum > i){
					elem2.classList.remove('hide');
				}
				id1 = setInterval(frame1, 5);
				clearInterval(id2);
			} else {
				pos2--; 
				elem2.style.height = pos2 + "px";
			}
		}
		function frame1() {
			if (pos1 == epos1) {
				elem1.classList.remove('BgDpPink');
				elem1.style.opacity = '100%';
				if(stepNum > i){
					elem1.classList.add('BgDpPink');
				}
				id = setInterval(frame, 5);
				clearInterval(id1);
			} else {
				pos1--;
				elem1.style.opacity = pos1 + '%';
			}
		}
		function frame() {
			if (pos == epos) {
				elem.classList.remove('BgDpPink');
				elem.style.top = '703px';
				if(stepNum > i){
					elem.classList.add('BgDpPink');
				}
				id7 = setInterval(frame7, 5);
				clearInterval(id);
			} else {
				pos--; 
				elem.style.top = pos + "px";
			}
		}
		function frame7() {
			if(pos9== epos9){
				elem9.classList.remove('BgDpPink');
				elem9.style.opacity = '100%';
				if(stepNum > i){
					elem9.classList.add('BgDpPink');
				}
				id8 = setInterval(frame8, 5);
				clearInterval(id7);
			}
			else{
				pos9--;
				elem9.style.opacity = pos9 + '%';
			}
		}
		function frame8() {
			if(pos10 == epos10){
				elem10.classList.remove('BgDpPink');
				elem10.style.top = '577.5px';
				if(stepNum > i){
					elem10.classList.add('BgDpPink');
				}
				id9 = setInterval(frame9, 5);
				clearInterval(id8);
			}
			else{
				pos10--;
				elem10.style.top = pos10 + 'px';
			}
		}
		function frame9() {
			if(pos11 == epos11){
				elem11.classList.add('hide');
				if(stepNum > i){
					elem11.classList.remove('hide');
				}
				id10 = setInterval(frame10, 5);
				clearInterval(id9);
			}
			else{
				pos11+=5;
				elem11.style.left = pos11 + 'px';
				pos11_1-=5;
				elem11.style.width = pos11_1 + 'px';
			}
		}
		function frame10() {
			if(pos12 == epos12){
				elem12.classList.add('hide');
				if(stepNum > i){
					elem12.classList.remove('hide');
				}
				id11 = setInterval(frame11, 5);
				clearInterval(id10);
			}
			else{
				pos12+=5;
				elem12.style.top = pos12 + 'px';
				pos12_1-=5;
				elem12.style.height = pos12_1 + 'px';
				if(pos12_2 > 0){
					pos12_2-=2;
					elem12_2.style.opacity = pos12_2 + '%';
				}
			}
		}
		function frame11() {
			if(pos13 == epos13){
				elem13.classList.remove('BgDpPink');
				elem13.style.top = '931px';
				if(stepNum > i){
					elem13.classList.add('BgDpPink');
				}
				clearInterval(id11);
			}
			else{
				pos13++;
				elem13.style.top = pos13 + 'px';
			}
		}
	}
}
function back_12(i) {
	var elem1 = document.getElementsByClassName('r_bb1')[0];
	var epos1 = 90, pos1 = 100;
	elem1.style.opacity = pos1 + '%';
	var id1 = setInterval(frame1, 5);
	var elem = document.getElementsByClassName('lower_arrow1')[0];
	var epos = 222, pos = 172;
	var elem_1 = document.getElementsByClassName('stepnone')[2];
	var epos_1 = 0, pos_1 = 100;
	var id = null;
	function frame1() {
		if(epos1 == pos1){
			elem1.classList.remove('BgDpPink');
			elem1.style.opacity = '100%';
			if(stepNum > i){
				elem1.classList.add('BgDpPink');
			}
			id = setInterval(frame, 5);
			clearInterval(id1);
		}
		else{
			pos1--;
			elem1.style.opacity = pos1 + '%';
		}
	}
	function frame() {
		if(epos == pos){
			elem.classList.add('hide');
			elem_1.classList.add('hide');
			if(stepNum > i){
				elem.classList.remove('hide');
				elem_1.classList.remove('hide');
			}
			clearInterval(id);
		}
		else{
			pos++;
			elem.style.top = pos + 'px';
			pos_1-=2;
			elem_1.style.opacity = pos_1 + '%';
		}
	}
}
