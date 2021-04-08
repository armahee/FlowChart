var stepNum = 0;
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
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function run() {
	document.getElementsByClassName('btns')[0].style.display = 'none';
	for (var j = 0; j < stepFinder[menuNum].length; j++) {
		if(document.getElementsByClassName(stepFinder[menuNum][j])[0].classList.contains('nextStep')){
			if(j < stepFinder[menuNum].length-1){
				for (var i = j; i < stepFinder[menuNum].length; i++) {
					if(document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.contains('nextStep')){
						if(i && i < stepFinder[menuNum].length-1){
							document.getElementById('step'+(menuNum+1)+'_'+i).classList.remove('BgPink');
						}
						if(i < stepFinder[menuNum].length-1){
							stepNum++;
							document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.remove('nextStep');
							document.getElementsByClassName(stepFinder[menuNum][i+1])[0].classList.add('nextStep');
							document.getElementById('step'+(menuNum+1)+'_'+(i+1)).classList.add('BgPink');
							window['step_'+(i+1)](i);
						}
					}
					if(i < stepFinder[menuNum].length-2){
						await sleep(3000);
					}
				}
			}
			break;
		}
	}
	document.getElementsByClassName('btns')[0].style.display = 'block';
}
function steps() {
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
				window['step_'+(i+1)](i);
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
	var id3 = null;
	var elem4 = document.getElementsByClassName('stepone')[4];
	var epos4 = 100, pos4 = 0;
	elem4.style.opacity = pos4 + '%';
	elem4.classList.remove('hide');
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
		var elem5 = document.getElementsByClassName('r_bb4_4')[0];
		var epos5 = 100, pos5 = 0;
		elem5.style.opacity = pos5 + '%';
		elem5.classList.remove('hide');
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
				elem5.classList.add('hide');
			}
			if (pos4 == epos4) {
				//id5 = setInterval(frame5, 1);
				clearInterval(id4);
			} else {
				pos4++; 
				elem4.style.top = pos4 + "px";
			}
		}
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
		var elem5 = document.getElementsByClassName('r_bb4_4')[0];
		var epos5 = 100, pos5 = 0;
		elem5.style.opacity = pos5 + '%';
		elem5.classList.remove('hide');
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
				pos--; 
				elem.style.top = pos + "px";
			}
		}
		function frame1() {
			if(stepNum < i){
				elem1.classList.add('hide');
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
				//id5 = setInterval(frame5, 1);
				clearInterval(id4);
			} else {
				pos4++; 
				elem4.style.top = pos4 + "px";
			}
		}
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
	if(!menuNum){
		document.getElementById('step1_7').classList.add('BgDpPink');
	}
	else if(menuNum < 2){
		document.getElementById('step2_7').classList.add('BgDpPink');
	}
	if(menuNum < 2){
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
				elem4.classList.add('hide');
				elem5.classList.add('hide');
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
	if(!menuNum){
		document.getElementById('step1_7').classList.remove('BgDpPink');
	}
	else if(menuNum < 2){
		document.getElementById('step2_7').classList.remove('BgDpPink');
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
		var epos3 = 365, pos3 = 0;
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
			}
			if (pos3 == epos3) {
				id4 = setInterval(frame4, 5);
				clearInterval(id3);
			} else {
				pos3+=5; 
				elem3.style.height = pos3 + "px";
				if(pos3_1 < 100){
					pos3_1+=2;
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
		var id4 = null;/*
		var elem5 = document.getElementsByClassName('r_bb4_4')[0];
		var epos5 = 100, pos5 = 0;
		elem5.style.opacity = pos5 + '%';
		elem5.classList.remove('hide');
		var id5 = null;*/
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
			if (pos3 == epos3) {
				elem4.style.top = pos4 + 'px';
				elem4.classList.add('BgDpPink');
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
				//id5 = setInterval(frame5, 1);
				clearInterval(id4);
			} else {
				pos4++; 
				elem4.style.top = pos4 + "px";
			}
		}
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
				elem.classList.add('hide');
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
				elem.classList.add('hide');
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
				elem1.classList.add('hide');
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
				elem6.classList.add('hide');
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
				document.getElementById('step'+(menuNum+1)+'_'+i).classList.remove('BgPink');
				document.getElementsByClassName(stepFinder[menuNum][i])[0].classList.remove('nextStep');
				document.getElementsByClassName(stepFinder[menuNum][i - 1])[0].classList.add('nextStep');
				window['back_'+(i)](i);
			}
			if(i > 1){
				document.getElementById('step'+(menuNum+1)+'_'+(i - 1)).classList.add('BgPink');
			}
			break;
		}
	}
}
function back_1(i) {
	document.getElementsByClassName('arrow_dwn1')[0].classList.add('hide');
	document.getElementsByClassName('r_bb7')[0].classList.add('hide');
	document.getElementsByClassName('data_in_arrow')[0].classList.add('hide');
	document.getElementsByClassName('r4')[0].classList.add('hide');
	document.getElementsByClassName('stepone')[4].classList.add('hide');
	document.getElementsByClassName('row_4_arrow')[0].classList.add('hide');
}
function back_2(i) {
	document.getElementsByClassName('upper_arrow_f')[0].classList.add('hide');
	document.getElementsByClassName('r_bb1')[0].classList.add('hide');
	document.getElementsByClassName('right_bar')[0].classList.add('hide');
	document.getElementsByClassName('clip_4in')[0].classList.add('hide');
	document.getElementsByClassName('right_bar_1')[0].classList.add('hide');
	document.getElementsByClassName('stepsix')[6].classList.add('hide');
	document.getElementsByClassName('r_bb3')[0].classList.add('hide');
}
function back_3(i) {
	document.getElementsByClassName('abus_straitline')[0].classList.add('hide');
	document.getElementsByClassName('bank_arrow_2')[0].classList.add('hide');
	document.getElementsByClassName('stepthree')[1].classList.add('hide');
}
function back_4(i) {
	if(!menuNum){
		document.getElementsByClassName('StraitLine')[0].classList.add('hide');
		document.getElementsByClassName('StraitLine_Arrow')[0].classList.add('hide');
		document.getElementsByClassName('clip_4inn')[0].classList.add('hide');
		document.getElementsByClassName('right_bar_22')[0].classList.add('hide');
		document.getElementsByClassName('r_bb44_arrow')[0].classList.add('hide');
		document.getElementsByClassName('r_bb4_4')[0].classList.add('hide');
	}
	else{
		document.getElementsByClassName('arrow_dwn10')[0].classList.add('hide');
		document.getElementsByClassName('clip_4innn')[0].classList.add('hide');
		document.getElementsByClassName('stepfour')[6].classList.add('hide');
		document.getElementsByClassName('right_bar_22')[0].classList.add('hide');
		document.getElementsByClassName('r_bb44_arrow')[0].classList.add('hide');
		document.getElementsByClassName('r_bb4_4')[0].classList.add('hide');
	}
}
function back_5(i) {
	document.getElementsByClassName('r_bb4_4')[0].classList.add('hide');
}
function back_6(i) {
	document.getElementsByClassName('r_bb4_arrow')[0].classList.add('hide');
	document.getElementsByClassName('r_bb5')[0].classList.add('hide');
}
function back_7(i) {
	if(!menuNum){
		document.getElementById('step1_7').classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb1')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('upper_arrow')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb2')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('f_c_t')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb3')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('right_bar_1')[0].classList.remove('BgDpPink');
	}
	else if( menuNum < 2){
		document.getElementById('step2_7').classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb1')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('upper_arrow')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb2')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('f_c_t')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb3')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('right_bar_1')[0].classList.remove('BgDpPink');
	}
	if(menuNum < 2){
		document.getElementsByClassName('upper_arrow')[0].classList.add('hide');
		document.getElementsByClassName('r_bb2')[0].classList.add('hide');
		document.getElementsByClassName('f_c_t')[0].classList.add('hide');
		document.getElementsByClassName('clip_4innnn')[0].classList.add('hide');
	}
	else{
		document.getElementsByClassName('alu_arrow')[0].classList.add('hide');
		document.getElementsByClassName('alu_arrow1')[0].classList.add('hide');
		document.getElementsByClassName('left_strait_line_2')[0].classList.add('hide');
		document.getElementsByClassName('alu')[0].classList.add('hide');
		document.getElementsByClassName('stepseven')[7].classList.add('hide');
		document.getElementsByClassName('cl_path_2')[0].classList.add('hide');
	}
}
function back_8(i) {
	if(!menuNum){
		document.getElementById('step1_7').classList.add('BgDpPink');
	}
	else if(menuNum < 2){
		document.getElementById('step2_7').classList.add('BgDpPink');
	}
	else{
		document.getElementById('step'+(menuNum+1)+'_8').classList.remove('BgDpPink');
	}
	if (menuNum < 2) {
		document.getElementsByClassName('alu_arrow')[0].classList.add('hide');
		document.getElementsByClassName('alu_arrow1')[0].classList.add('hide');
		document.getElementsByClassName('left_strait_line_2')[0].classList.add('hide');
		document.getElementsByClassName('alu')[0].classList.add('hide');
		document.getElementsByClassName('stepseven')[5].classList.add('hide');
		document.getElementsByClassName('cl_path_2')[0].classList.add('hide');
	}
	else if (menuNum < 4) {
		document.getElementsByClassName('StraitLine')[0].classList.add('hide');
		document.getElementsByClassName('StraitLine_Arrow')[0].classList.add('hide');
		document.getElementsByClassName('clip_4inn')[0].classList.add('hide');
		document.getElementsByClassName('clip_4innn_overlap')[0].classList.add('hide');
		document.getElementsByClassName('stepfour')[8].classList.add('hide');
		document.getElementsByClassName('clip_4inn_arm')[0].classList.add('hide');
		document.getElementsByClassName('clip_4inn_arrow')[0].classList.add('hide');
		document.getElementsByClassName('StraitLine')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('StraitLine_Arrow')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('clip_4inn')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('clip_4innn_overlap')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('clip_4inn_arm')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('clip_4inn_arrow')[0].classList.remove('BgDpPink');
	}
	else {
		document.getElementsByClassName('StraitLine')[0].classList.add('hide');
		document.getElementsByClassName('StraitLine_Arrow')[0].classList.add('hide');
		document.getElementsByClassName('clip_4inn')[0].classList.add('hide');
		document.getElementsByClassName('right_bar_22_overlap')[0].classList.add('hide');
		document.getElementsByClassName('StraitLine')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('StraitLine_Arrow')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('clip_4inn')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('right_bar_22_overlap')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb44_arrow')[0].classList.remove('BgDpPink');
	}
}
function back_9(i) {
	document.getElementById('step'+(menuNum+1)+'_8').classList.add('BgDpPink');
	if(menuNum < 4){
		document.getElementsByClassName('r_bb6')[0].classList.add('hide');
		document.getElementsByClassName('arrow_dwn')[0].classList.add('hide');
	}
	else{
		document.getElementById('step'+(menuNum+1)+'_9').classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb4_4')[0].classList.remove('BgDpPink');
	}
}
function back_10(i) {
	if(menuNum < 4){
		document.getElementsByClassName('lower_arrow1')[0].classList.add('hide');
		document.getElementsByClassName('stepnone')[2].classList.add('hide');
	}
	else{
		document.getElementById('step'+(menuNum+1)+'_10').classList.remove('BgDpPink');
		document.getElementById('step'+(menuNum+1)+'_9').classList.add('BgDpPink');
		document.getElementsByClassName('r_bb4_arrow')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb5')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('alu_arrow_overlap')[0].classList.add('hide');
		document.getElementsByClassName('alu_arrow_overlap')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('alu_arrow1_overlap')[0].classList.add('hide');
		document.getElementsByClassName('alu_arrow1_overlap')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('left_strait_line_2_overlap')[0].classList.add('hide');
		document.getElementsByClassName('left_strait_line_2_overlap')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('alu_overlap')[0].classList.add('hide');
		document.getElementsByClassName('alu_overlap')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('stepseven')[9].classList.add('hide');
		document.getElementsByClassName('cl_path_2')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('r_bb3')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('lower_arrow1')[0].classList.add('hide');
		document.getElementsByClassName('lower_arrow1')[0].classList.remove('BgDpPink');
		document.getElementsByClassName('stepnone')[2].classList.add('hide');
	}
}
function back_11(i) {
	// body...
}