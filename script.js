var stepNum = 0;
var isRunning = false;
function removeShade(argument) {
	// body...
}
function msgPop(elem) {
	var allelem = document.getElementsByClassName('msgPop');
	if(document.getElementsByClassName(elem.id)[0].classList.contains('none')){
		/*for (var i = 0; i < allelem.length; i++) {
			allelem[i].classList.add('none');
		}*/
		elem.classList.add('BgWhite');
		if(elem.classList.contains('hide')){
			elem.classList.remove('hide');
		}
		document.getElementsByClassName('shader')[0].classList.remove('none');
		document.getElementsByClassName(elem.id)[0].classList.remove('none');
	}
	else{
		elem.classList.remove('BgWhite');
		document.getElementsByClassName('shader')[0].classList.add('none');
		document.getElementsByClassName(elem.id)[0].classList.add('none');
	}
}
function visibility() {
	var btn = document.getElementById('btnInvisible');
	if(btn.value == 'Invisible'){
		btn.value = 'Visible';
		document.getElementsByClassName('flow_chart')[1].style.display = 'none';
	}
	else{
		btn.value = 'Invisible';
		document.getElementsByClassName('flow_chart')[1].style.display = 'block';
	}
} 
var stepFinder = [
	['flow_chart_three','arrow_dwn1','upper_arrow_f','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow','r_bb6','lower_arrow1'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow','r_bb6','lower_arrow1'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow','r_bb6','lower_arrow1'],
	['flow_chart_three','arrow_dwn1','upper_arrow_f','bank_arrow_2','StraitLine','r_bb4_4','r_bb5','r_bb1','alu_arrow','r_bb6','lower_arrow1']
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
	for (var j = 0; j < stepFinder[menuNum].length; j++) {
		if(document.getElementsByClassName(stepFinder[menuNum][j])[0].classList.contains('nextStep')){
			if(j < stepFinder[menuNum].length-1){
				for (var i = j; i < stepFinder[menuNum].length; i++) {
					if(!isRunning){
						break;
					}
					if(document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.contains('nextStep')){
						if(i && i < stepFinder[menuNum].length-1){
							document.getElementById('step'+(menuNum+1)+'_'+i).classList.remove('BgPink');
						}
						if(i < stepFinder[menuNum].length-1){
							stepNum++;
							document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.remove('nextStep');
							document.getElementsByClassName(stepFinder[menuNum][i+1])[0].classList.add('nextStep');
							document.getElementById('step'+(menuNum+1)+'_'+(i+1)).classList.add('BgPink');
							await sleep(1000);
							window['step_'+(i+1)](i);
						}
					}
					if(i < stepFinder[menuNum].length-2){
						await sleep(3000);
					}
					if(!isRunning){
						break;
					}
				}
			}
			break;
		}
	}
	document.getElementsByClassName('btns')[0].style.display = 'block';
}
async function steps() {
	for (var i = 0; i < stepFinder[menuNum].length; i++) {
		if(document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.contains('nextStep')){
			if(i && i < stepFinder[menuNum].length-1){
				document.getElementById('step'+(menuNum+1)+'_'+i).classList.remove('BgPink');
			}
			if(i < stepFinder[menuNum].length-1){
				stepNum++;
				document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.remove('nextStep');
				document.getElementsByClassName(stepFinder[menuNum][i+1])[0].classList.add('nextStep');
				document.getElementById('step'+(menuNum+1)+'_'+(i+1)).classList.add('BgPink');
				await sleep(1000);
				window['step_'+(i+1)](i+1);
			}
			break;
		}
	}
}
function step_1(i) {
	var elem = document.getElementsByClassName('arrow_dwn1')[0];
	var epos = 1025, pos = epos + 50;
	elem.style.top = pos + 'px';
	elem.classList.remove('hide');
	var elem1 = document.getElementsByClassName('r_bb7')[0];
	var epos1 = 100, pos1 = 0;
	elem1.style.opacity = pos1 + '%';
	elem1.classList.remove('hide');
	var id1 = null;
	var elem2 = document.getElementsByClassName('data_in_arrow')[0];
	var epos2 = 902, pos2 = epos2 + 50;
	elem2.style.top = pos2 + 'px';
	var id2 = null;
	var elem3 = document.getElementsByClassName('r4')[0];
	var epos3 = 100, pos3 = 0;
	elem3.style.opacity = pos3 + '%';
	elem3.classList.remove('hide');
	var elem4 = document.getElementsByClassName('stepone')[4];
	var epos4 = 100, pos4 = 0;
	elem4.style.opacity = pos4 + '%';
	elem4.classList.remove('hide');
	var id3 = null;
	var elem5 = document.getElementsByClassName('row_4_arrow')[0];
	var epos5 = 5, pos5 = epos5 + 50;
	elem5.style.top = pos5 + 'px';
	var id4 = null;
	var id = setInterval(frame, 1);
	function frame() {
		if(stepNum < i){
			elem.classList.add('hide');
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
			elem1.classList.add('hide');
		}
		if (pos1 == epos1) {
			elem2.classList.remove('hide');
			id2 = setInterval(frame2, 5);
			clearInterval(id1);
		} else {
			pos1+=5; 
			elem1.style.opacity = pos1 + "%";
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
		}
	}
}
function step_2(i) {
	var elem = document.getElementsByClassName('upper_arrow_f')[0];
	var epos = 10, pos = epos - 50;
	elem.style.top = pos + 'px';
	elem.classList.remove('hide');
	var id = setInterval(frame, 5);
	var elem1 = document.getElementsByClassName('r_bb1')[0];
	var epos1 = 100, pos1 = 0;
	elem1.style.opacity = pos1 + '%';
	elem1.classList.remove('hide');
	var id1 = null;
	var elem2 = document.getElementsByClassName('right_bar')[0];
	var epos2 = 385, pos2 = epos2 - 50;
	elem2.style.left = pos2 + 'px';
	var id2 = null;
	var elem3 = document.getElementsByClassName('clip_4in')[0];
	var epos3 = 228, pos3 = 0;
	elem3.style.height = pos3 + 'px';
	elem3.classList.remove('hide');
	var id3 = null;
	var elem4 = document.getElementsByClassName('right_bar_1')[0];
	var epos4 = 385, pos4 = epos4 + 10;
	elem4.style.left = pos4 + 'px';
	var id4 = null;
	var elem5 = document.getElementsByClassName('stepsix')[6];
	var epos5 = 100, pos5 = 0;
	elem5.style.opacity = pos5 + '%';
	elem5.classList.remove('hide');
	var elem6 = document.getElementsByClassName('r_bb3')[0];
	var epos6 = 100, pos6 = 0;
	elem6.style.opacity = pos6 + '%';
	elem6.classList.remove('hide');
	var id5 = null;
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
			elem2.classList.remove('hide');
			id2 = setInterval(frame2, 5);
			clearInterval(id1);
		} else {
			pos1+=5; 
			elem1.style.opacity = pos1 + "%";
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
			elem2.style.left = pos2 + "px";
		}
	}
	function frame3() {
		if(stepNum < i){
			elem3.classList.add('hide');
		}
		if (pos3 == epos3) {
			elem3.style.height = "228.1px";
			elem4.classList.remove('hide');
			id4 = setInterval(frame4, 5);
			clearInterval(id3);
		} else {
			pos3+=4; 
			elem3.style.height = pos3 + "px";
		}
	}
	function frame4() {
		if(stepNum < i){
			elem4.classList.add('hide');
			elem5.classList.add('hide');
		}
		if (pos4 == epos4) {
			id5 = setInterval(frame5, 1);
			clearInterval(id4);
		} else {
			pos5+=10;
			elem5.style.opacity = pos5 + '%';
			pos4--; 
			elem4.style.left = pos4 + "px";
		}
	}
	function frame5() {
		if(stepNum < i){
			elem6.classList.add('hide');
		}
		if (pos6 == epos6) {
			clearInterval(id5);
		} else {
			pos6+=2;
			elem6.style.opacity = pos6 + '%';
		}
	}
}
function step_3(i) {
	var elem1 = document.getElementsByClassName('abus_straitline')[0];
	var epos1 = 300, pos1 = 0;
	elem1.style.height = pos1 + 'px';
	elem1.classList.remove('hide');
	var elem = document.getElementsByClassName('bank_arrow_2')[0];
	var epos = 695, pos = epos - 50;
	elem.style.top = pos + 'px';
	var elem3 = document.getElementsByClassName('stepthree')[1];
	var epos3 = 100, pos3 = 0;
	elem3.style.opacity = pos + '%';
	elem3.classList.remove('hide');
	var id = null;
	var id1 = setInterval(frame1, 0.001);
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
				pos3+=3;
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
function step_4(i) {
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
		var epos4 = 577, pos4 = epos4 - 50;//height = '577.5px';
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
		var epos = 929, pos = epos + 50;
		elem.style.top = pos + 'px';
		elem.classList.remove('hide');
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('clip_4innn')[0];
		var epos1 = 568, pos1 = epos1 + 367;//570
		elem1.style.top = pos1 + 'px';
		var epos1_1 = 365, pos1_1 = 0;//367
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
		var epos4 = 577, pos4 = epos4 - 50;//height = '577.5px';
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
				elem1.style.top = '570px';
				elem1.style.height = '367px';
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
function step_5(i) {
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
function step_6(i) {
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
function step_7(i) {
	if(menuNum < 2){
		document.getElementById('step'+(menuNum+1)+'_7').classList.add('BgDpPink');

		document.getElementsByClassName('r_bb1')[0].classList.add('BgDpPink');
		document.getElementsByClassName('upper_arrow')[0].classList.add('BgDpPink');
		document.getElementsByClassName('r_bb2')[0].classList.add('BgDpPink');
		document.getElementsByClassName('f_c_t')[0].classList.add('BgDpPink');
		var elem = document.getElementsByClassName('upper_arrow')[0];
		var epos = 125, pos = epos - 50;
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
		elem3.classList.remove('hide');
		var id3 = null;
		var elem4 = document.getElementsByClassName('right_bar_1')[0];
		var epos4 = 385, pos4 = epos4 + 10;
		var elem5 = document.getElementsByClassName('stepsix')[6];
		var epos5 = 100, pos5 = 0;
		var id4 = null;
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
				elem4.classList.add('BgDpPink');
				id4 = setInterval(frame4, 5);
				clearInterval(id3);
			} else {
				pos3+=3; 
				elem3.style.height = pos3 + "px";
			}
		}
		function frame4() {
			if(stepNum < i){
				elem4.classList.remove('BgDpPink');
				elem5.classList.remove('BgDpPink');
			}
			if (pos4 == epos4) {
				document.getElementsByClassName('r_bb3')[0].classList.add('BgDpPink');
				clearInterval(id4);
			} else {
				pos5+=10;
				elem5.style.opacity = pos5 + '%';
				pos4--; 
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
		var epos1 = 30, pos1 = epos1+240;
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
				clearInterval(id3);
			} else {
				pos4++; 
				elem4.style.left = pos4 + "px";
			}
		}
	}
}
function step_8(i) {
	if(menuNum < 2){
		document.getElementById('step'+(menuNum+1)+'_7').classList.remove('BgDpPink');
	}
	else{
		document.getElementById('step'+(menuNum+1)+'_8').classList.add('BgDpPink');
	}
	if(menuNum < 2){
		var elem = document.getElementsByClassName('alu_arrow')[0];
		var epos = 830, pos = epos - 50;
		elem.style.top = pos + 'px';
		elem.classList.remove('hide');
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('alu_arrow1')[0];
		var epos1 = 30, pos1 = epos1+240;
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
				clearInterval(id3);
			} else {
				pos4++; 
				elem4.style.left = pos4 + "px";
			}
		}
	}
	else if(menuNum < 4){
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
		var epos3 = 360, pos3 = 0;//365
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
				elem3.style.height = '365px';
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
		var elem = document.getElementsByClassName('StraitLine')[0];
		var epos = 50, pos = 0;
		elem.classList.add('BgDpPink');
		elem.style.height = pos + 'px';
		elem.classList.remove('hide');
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('StraitLine_Arrow')[0];
		var epos1 = 305, pos1 = epos1 - 50;
		elem1.classList.add('BgDpPink');
		elem1.style.left = pos1 + 'px';
		var id1 = null;
		var elem2 = document.getElementsByClassName('clip_4inn')[0];
		var epos2 = 180, pos2 = 0;
		elem2.classList.add('BgDpPink');
		elem2.style.height = pos2 + 'px';
		elem2.classList.remove('hide');
		var id2 = null;
		var elem3 = document.getElementsByClassName('right_bar_22_overlap')[0];
		var epos3 = 290, pos3 = 445;
		var epos3_1 = 155, pos3_1 = 0;
		elem3.classList.add('BgDpPink');
		elem3.style.left = pos3 + 'px';
		elem3.style.width = pos3_1 + 'px';
		elem3.classList.remove('hide');
		var id3 = null;
		var elem4 = document.getElementsByClassName('r_bb44_arrow')[0];
		var epos4 = 577, pos4 = epos4 - 50;//height = '577.5px';
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
				pos2+=5; 
				elem2.style.height = pos2 + "px";
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
				clearInterval(id4);
			} else {
				pos4++; 
				elem4.style.top = pos4 + "px";
			}
		}
	}

}
function step_9(i) {
	document.getElementById('step'+(menuNum+1)+'_8').classList.remove('BgDpPink');
	if(menuNum < 4){
		var elem = document.getElementsByClassName('r_bb6')[0];
		var epos = 100, pos = 0;
		elem.style.opacity = pos + '%';
		elem.classList.remove('hide');
		var id = setInterval(frame, 1);
		var elem1 = document.getElementsByClassName('arrow_dwn')[0];
		var epos1 = 1022, pos1 = epos1 - 50;
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
		document.getElementById('step'+(menuNum+1)+'_9').classList.add('BgDpPink');
		var elem = document.getElementsByClassName('r_bb4_4')[0];
		var epos = 100, pos = 0;
		elem.style.opacity = pos + '%';
		elem.classList.add('BgDpPink');
		var id = setInterval(frame, 1);
		function frame() {
			if(stepNum < i){
				elem.classList.remove('BgDpPink');
			}
			if(epos == pos){
				clearInterval(id);
			}
			else{
				pos++;
				elem.style.opacity = pos + '%';
			}
		}
	}
}
function step_10(i) {
	if(menuNum < 4){
		var elem = document.getElementsByClassName('lower_arrow1')[0];
		var epos = 170, pos = epos + 50;
		elem.style.top = pos + 'px';
		var elem_1 = document.getElementsByClassName('stepnone')[2];
		var epos_1 = 100, pos_1 = 0;
		elem_1.style.opacity = pos_1 + '%';
		elem_1.classList.remove('hide');
		elem.classList.remove('hide');
		var id = setInterval(frame, 5);
		function frame() {
			if(stepNum < i){
				elem.classList.add('hide');
				elem_1.classList.add('hide');
			}
			if(epos == pos){
				clearInterval(id);
			}
			else{
				pos--;
				elem.style.top = pos + 'px';
				pos_1+=2;
				elem_1.style.opacity = pos_1 + '%';
			}
		}
	}
	else{
		document.getElementById('step'+(menuNum+1)+'_9').classList.remove('BgDpPink');
		document.getElementById('step'+(menuNum+1)+'_10').classList.add('BgDpPink');
		
		var elem = document.getElementsByClassName('r_bb4_arrow')[0];
		var epos = 703, pos = epos - 50;
		elem.classList.add('BgDpPink');
		elem.style.top = pos + 'px';
		var id = setInterval(frame, 5);
		var elem1 = document.getElementsByClassName('r_bb5')[0];
		var epos1 = 100, pos1 = 0;
		var id1 = null;


		var elem2 = document.getElementsByClassName('alu_arrow_overlap')[0];
		var epos2 = 65, pos2 = 0;
		elem2.style.height = pos2 + 'px';
		elem2.classList.add('BgDpPink');
		elem2.classList.remove('hide');
		var id2 = null;
		var elem3 = document.getElementsByClassName('alu_arrow1_overlap')[0];
		var epos3 = 30, pos3 = epos3+240;
		var epos3_1 = 240, pos3_1 = 0;
		elem3.style.left = pos3 + 'px';
		elem3.style.width = pos3_1 + 'px';
		elem3.classList.add('BgDpPink');
		elem3.classList.remove('hide');
		var id3 = null;
		var elem4 = document.getElementsByClassName('left_strait_line_2_overlap')[0];
		var epos4 = 325, pos4 = 895;
		elem4.style.top = pos4 + 'px';
		var epos4_1 = 570, pos4_1 = 0;
		elem4.style.height = pos4_1 + 'px';
		elem4.classList.add('BgDpPink');
		elem4.classList.remove('hide');
		var elem5 = document.getElementsByClassName('alu_overlap')[0];
		var epos5 = 100, pos5 = 0;
		elem5.style.opacity = pos5 + '%';
		elem5.classList.add('BgDpPink');
		elem5.classList.remove('hide');
		var elem5_1 = document.getElementsByClassName('stepseven')[9];
		var epos5_1 = 100, pos5_1 = 0;
		elem5_1.style.opacity = pos5_1 + '%';
		elem5_1.classList.remove('hide');
		var id4 = null;
		var elem6 = document.getElementsByClassName('cl_path_2')[0];
		var epos6 = 30, pos6 = epos6 - 25;
		var id5 = null;
		var elem7 = document.getElementsByClassName('r_bb3')[0];
		var epos7 = 100, pos7 = 0;
		var id6 = null;
		var elem8 = document.getElementsByClassName('lower_arrow1')[0];
		var epos8 = 170, pos8 = epos8 + 50;
		elem8.classList.add('BgDpPink');
		elem8.style.top = pos8 + 'px';
		var elem8_1 = document.getElementsByClassName('stepnone')[2];
		var epos8_1 = 100, pos8_1 = 0;
		elem8_1.style.opacity = pos8_1 + '%';
		elem8_1.classList.remove('hide');
		var id7 = null;
		function frame() {
			if(stepNum < i){
				elem.classList.remove('BgDpPink');
			}
			if (pos == epos) {
				elem1.style.opacity = pos1 + '%';
				elem1.classList.add('BgDpPink');
				id1 = setInterval(frame1, 1);
				clearInterval(id);
			} else {
				pos++; 
				elem.style.top = pos + "px";
			}
		}

		
		function frame1() {
			if(stepNum < i){
				elem1.classList.remove('BgDpPink');
			}
			if (pos1 == epos1) {
				id2 = setInterval(frame2, 5);
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
				id3 = setInterval(frame3, 5);
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
			if (pos3 == epos3) {
				id4 = setInterval(frame4, 1);
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
				elem4.classList.add('hide');
				elem5.classList.add('hide');
				elem5_1.classList.add('hide');
			}
			if (pos4 == epos4) {
				elem6.style.left = pos6 + 'px';
				elem6.classList.add('BgDpPink');
				id5 = setInterval(frame5, 5);
				clearInterval(id4);
			} else {
				pos4-=5; 
				elem4.style.top = pos4 + "px";
				pos4_1+=5; 
				elem4.style.height = pos4_1 + "px";
				if(pos5 < 100){
					pos5++;
					elem5.style.opacity = pos5 + '%';
				}
				if(pos5_1 < 100){
					pos5_1++;
					elem5_1.style.opacity = pos5_1 + '%';
				}
			}
		}
		function frame5() {
			if(stepNum < i){
				elem6.classList.remove('BgDpPink');
			}
			if (pos6 == epos6) {
				elem7.style.opacity = pos7 + '%';
				elem7.classList.add('BgDpPink');
				id6 = setInterval(frame6, 1);
				clearInterval(id5);
			} else {
				pos6++; 
				elem6.style.left = pos6 + "px";
			}
		}
		function frame6() {
			if(stepNum < i){
				elem7.classList.remove('BgDpPink');
			}
			if (pos7 == epos7) {
				elem8.classList.remove('hide');
				id7 = setInterval(frame7, 5);
				clearInterval(id6);
			}
			else{
				pos7++;
				elem7.style.opacity = pos7 + '%';
			}
		}
		function frame7() {
			if(stepNum < i){
				elem8.classList.add('hide');
			}
			if(pos8 == epos8){
				clearInterval(id7);
			}
			else{
				pos8--;
				elem8.style.top = pos8 + 'px';
				pos8_1+=2;
				elem8_1.style.opacity = pos8_1 + '%';
			}
		}
	}
}
function step_11(i) {
	// body...
}
function back() {
	for (var i = 0; i < stepFinder[menuNum].length; i++) {
		if(document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.contains('nextStep')){
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
	var elem5 = document.getElementsByClassName('row_4_arrow')[0];
	var epos5 = 55, pos5 = 5;
	var id4 = setInterval(frame4, 5);
	var elem3 = document.getElementsByClassName('r4')[0];
	var epos3 = 0, pos3 = 100;
	var elem4 = document.getElementsByClassName('stepone')[4];
	var epos4 = 0, pos4 = 100;
	var id3 = null;
	var elem2 = document.getElementsByClassName('data_in_arrow')[0];
	var epos2 = 952, pos2 = 902;
	var id2 = null;
	var elem1 = document.getElementsByClassName('r_bb7')[0];
	var epos1 = 0, pos1 = 100;
	var id1 = null;
	var elem = document.getElementsByClassName('arrow_dwn1')[0];
	var epos = 1075, pos = 1025;
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
			id1 = setInterval(frame1, 1);
			clearInterval(id2);
		} else {
			pos2++; 
			elem2.style.top = pos2 + "px";
		}
	}
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
function back_2(i) {
	var elem6 = document.getElementsByClassName('r_bb3')[0];
	var epos6 = 0, pos6 = 100;
	var id5 = setInterval(frame5, 1);
	var elem5 = document.getElementsByClassName('stepsix')[6];
	var epos5 = 0, pos5 = 100;
	var elem4 = document.getElementsByClassName('right_bar_1')[0];
	var epos4 = 395, pos4 = 385;
	var id4 = null;
	var elem3 = document.getElementsByClassName('clip_4in')[0];
	var epos3 = 0, pos3 = 228;
	var id3 = null;
	var elem2 = document.getElementsByClassName('right_bar')[0];
	var epos2 = 335, pos2 = 385;
	var id2 = null;
	var elem1 = document.getElementsByClassName('r_bb1')[0];
	var epos1 = 0, pos1 = 100;
	var id1 = null;
	var elem = document.getElementsByClassName('upper_arrow_f')[0];
	var epos = -40, pos = 10;
	var id = null;
	function frame5() {
		if (pos6 == epos6) {
			elem6.classList.add('hide');
			if(stepNum > i){
				elem6.classList.remove('hide');
			}
			id4 = setInterval(frame4, 5);
			clearInterval(id5);
		} else {
			pos6-=2;
			elem6.style.opacity = pos6 + '%';
		}
	}
	function frame4() {
		if (pos4 == epos4) {
			elem4.classList.add('hide');
			elem5.classList.add('hide');
			if(stepNum > i){
				elem4.classList.remove('hide');
				elem5.classList.remove('hide');
			}
			id3 = setInterval(frame3, 1);
			clearInterval(id4);
		} else {
			pos5-=10;
			elem5.style.opacity = pos5 + '%';
			pos4++; 
			elem4.style.left = pos4 + "px";
		}
	}
	function frame3() {
		if (pos3 == epos3) {
			elem3.classList.add('hide');
			elem3.style.height = "228.1px";
			elem4.classList.add('hide');
			if(stepNum > i){
				elem3.classList.remove('hide');
				elem4.classList.remove('hide');
			}
			id2 = setInterval(frame2, 5);
			clearInterval(id3);
		} else {
			pos3-=4; 
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
			elem2.style.left = pos2 + "px";
		}
	}
	function frame1() {
		if (pos1 == epos1) {
			elem1.classList.add('hide');
			elem2.classList.add('hide');
			if(stepNum > i){
				elem1.classList.remove('hide');
				elem2.classList.remove('hide');
			}
			id = setInterval(frame, 5);
			clearInterval(id1);
		} else {
			pos1-=5; 
			elem1.style.opacity = pos1 + "%";
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
function back_3(i) {
	var elem3 = document.getElementsByClassName('stepthree')[1];
	var epos3 = 0, pos3 = 100;
	var elem1 = document.getElementsByClassName('abus_straitline')[0];
	var epos1 = 0, pos1 = 300;
	var elem = document.getElementsByClassName('bank_arrow_2')[0];
	var epos = 645, pos = 695;
	var id1 = null;
	var id = setInterval(frame, 5);
	function frame() {
		if (pos == epos) {
			elem.classList.add('hide');
			if(stepNum > i){
				elem.classList.remove('hide');
			}
			id1 = setInterval(frame1, 0.001);
			clearInterval(id);
		} else {
			pos--; 
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
			if(pos3 < epos3){
				pos3-=3;
				elem3.style.opacity = pos3 + '%';
			}
			elem1.style.height = pos1 + "px";
		}
	}
}
function back_4(i) {
	if(!menuNum){
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
		var epos4 = 527, pos4 = 577;//height = '577.5px';
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
		var epos = 979, pos = 929;
		var elem1 = document.getElementsByClassName('clip_4innn')[0];
		var epos1 = 935, pos1 = 568;//570
		var epos1_1 = 0, pos1_1 = 365;//367	
		var elem2 = document.getElementsByClassName('stepfour')[6];
		var epos2 = 0, pos2 = 100;
		var elem3 = document.getElementsByClassName('right_bar_22')[0];
		var epos3 = 445, pos3 = 290;
		var epos3_1 = 0, pos3_1 = 155;
		var elem4 = document.getElementsByClassName('r_bb44_arrow')[0];
		var epos4 = 527, pos4 = 577;//height = '577.5px';
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
				elem1.style.height = '367px';
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
function back_5(i) {
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
function back_6(i) {
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
function back_7(i) {
	if(menuNum < 2){
		document.getElementById('step'+(menuNum+1)+'_7').classList.remove('BgDpPink');

		var elem4 = document.getElementsByClassName('right_bar_1')[0];
		var epos4 = 395, pos4 = 385;
		document.getElementsByClassName('r_bb3')[0].classList.remove('BgDpPink');
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
		var epos = 75, pos = 125;
		elem.style.top = pos + 'px';
		var id = null;
		function frame4() {
			if (pos4 == epos4) {
				elem4.classList.remove('BgDpPink');
				elem4.style.left = '385px';
				if(stepNum > i){
					elem4.classList.add('BgDpPink');
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
				document.getElementsByClassName('r_bb1')[0].classList.remove('BgDpPink');
				document.getElementsByClassName('upper_arrow')[0].classList.remove('BgDpPink');
				document.getElementsByClassName('r_bb2')[0].classList.remove('BgDpPink');
				document.getElementsByClassName('f_c_t')[0].classList.remove('BgDpPink');
				document.getElementsByClassName('r_bb3')[0].classList.remove('BgDpPink');
				clearInterval(id);
			} else {
				pos--; 
				elem.style.top = pos + "px";
			}
		}

	}
	else{
		var elem4 = document.getElementsByClassName('cl_path_2')[0];
		var epos4 = 5, pos4 = 30;
		var id3 = setInterval(frame3, 5);
		var elem2 = document.getElementsByClassName('left_strait_line_2')[0];
		var epos2 = 895, pos2 = 325;
		var epos2_1 = 0, pos2_1 = 570;
		var elem3 = document.getElementsByClassName('alu')[0];
		var epos3 = 0, pos3 = 100;
		var elem3_1 = document.getElementsByClassName('stepseven')[7];
		var epos3_1 = 0, pos3_1 = 100;
		var id2 = null;
		var elem1 = document.getElementsByClassName('alu_arrow1')[0];
		var epos1 = 270, pos1 = 30;
		var epos1_1 = 0, pos1_1 = 240;
		var id1 = null;
		var elem = document.getElementsByClassName('alu_arrow')[0];
		var epos = 780, pos = 830;
		var id = null;
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
function back_8(i) {
	if(menuNum < 2){
		document.getElementById('step'+(menuNum+1)+'_7').classList.add('BgDpPink');
	}
	else{
		document.getElementById('step'+(menuNum+1)+'_8').classList.remove('BgDpPink');
	}
	if (menuNum < 2) {
		var elem = document.getElementsByClassName('alu_arrow')[0];
		var epos = 780, pos = 830;
		var elem1 = document.getElementsByClassName('alu_arrow1')[0];
		var epos1 = 270, pos1 = 30;
		var epos1_1 = 0, pos1_1 = 240;
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
	else if (menuNum < 4) {
		var elem = document.getElementsByClassName('StraitLine')[0];
		var epos = 0, pos = 50;
		var elem1 = document.getElementsByClassName('StraitLine_Arrow')[0];
		var epos1 = 255, pos1 = 305;
		var elem2 = document.getElementsByClassName('clip_4inn')[0];
		var epos2 = 0, pos2 = 180;
		var elem3 = document.getElementsByClassName('clip_4innn_overlap')[0];
		var epos3 = 0, pos3 = 360;//365
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
	else {
		var elem = document.getElementsByClassName('StraitLine')[0];
		var epos = 0, pos = 50;
		var elem1 = document.getElementsByClassName('StraitLine_Arrow')[0];
		var epos1 = 255, pos1 = 305;
		var elem2 = document.getElementsByClassName('clip_4inn')[0];
		var epos2 = 0, pos2 = 180;
		var elem3 = document.getElementsByClassName('right_bar_22_overlap')[0];
		var epos3 = 445, pos3 = 290;
		var epos3_1 = 0, pos3_1 = 155;
		var elem4 = document.getElementsByClassName('r_bb44_arrow')[0];
		var epos4 = 527, pos4 = 577;//height = '577.5px';
		var id = null;
		var id1 = null;
		var id2 = null;
		var id3 = null;
		var id4 = setInterval(frame4, 5);

		function frame4() {
			if (pos4 == epos4) {
				elem4.classList.remove('BgDpPink');
				elem4.style.top = '577.5px';
				if(stepNum > i){
					elem4.classList.add('BgDpPink');
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
				id2 = setInterval(frame2, 1);
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
				id1 = setInterval(frame1, 1);
				clearInterval(id2);
			} else {
				pos2-=5; 
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
}
function back_9(i) {
	document.getElementById('step'+(menuNum+1)+'_8').classList.add('BgDpPink');
	if(menuNum < 4){
		var elem = document.getElementsByClassName('r_bb6')[0];
		var epos = 0, pos = 100;
		var elem1 = document.getElementsByClassName('arrow_dwn')[0];
		var epos1 = 972, pos1 = 1022;
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
		document.getElementById('step'+(menuNum+1)+'_9').classList.remove('BgDpPink');
		var elem = document.getElementsByClassName('r_bb4_4')[0];
		var epos = 0, pos = 100;
		var id = setInterval(frame, 1);
		function frame() {
			if(epos == pos){
				elem.classList.remove('BgDpPink');
				elem.style.opacity = '100%';
				if(stepNum > i){
					elem.classList.add('BgDpPink');
				}
				clearInterval(id);
			}
			else{
				pos-=2;
				elem.style.opacity = pos + '%';
			}
		}
	}
}
function back_10(i) {
	if(menuNum < 4){
		var elem = document.getElementsByClassName('lower_arrow1')[0];
		var epos = 220, pos = 170;
		var elem_1 = document.getElementsByClassName('stepnone')[2];
		var epos_1 = 0, pos_1 = 100;
		var id = setInterval(frame, 5);
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
	else{
		document.getElementById('step'+(menuNum+1)+'_10').classList.remove('BgDpPink');
		document.getElementById('step'+(menuNum+1)+'_9').classList.add('BgDpPink');
		var elem = document.getElementsByClassName('r_bb4_arrow')[0];
		var epos = 653, pos = 703;
		var elem1 = document.getElementsByClassName('r_bb5')[0];
		var epos1 = 0, pos1 = 100;
		var elem2 = document.getElementsByClassName('alu_arrow_overlap')[0];
		var epos2 = 0, pos2 = 65;
		var elem3 = document.getElementsByClassName('alu_arrow1_overlap')[0];
		var epos3 = 270, pos3 = 30;
		var epos3_1 = 0, pos3_1 = 240;
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
		var epos7 = 0, pos7 = 100;
		var elem8 = document.getElementsByClassName('lower_arrow1')[0];
		var epos8 = 220, pos8 = 170;
		var id = null;
		var id1 = null;
		var id2 = null;
		var id3 = null;
		var id4 = null;
		var id5 = null;
		var id6 = null;
		var id7 = setInterval(frame7, 5);
		function frame7() {
			if(pos8 == epos8){
				elem8.classList.add('hide');
				elem8.style.top = '170px';
				if(stepNum > i){
					elem8.classList.remove('hide');
				}
				id6 = setInterval(frame6, 1);
				clearInterval(id7);
			}
			else{
				pos8++;
				elem8.style.top = pos8 + 'px';
			}
		}
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
				elem6.style.left = '30px';
				if(stepNum > i){
					elem6.classList.add('BgDpPink');
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
				id1 = setInterval(frame1, 1);
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
				pos1-=2;
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
				clearInterval(id);
			} else {
				pos--; 
				elem.style.top = pos + "px";
			}
		}
	}
}
function back_11(i) {
	// body...
}