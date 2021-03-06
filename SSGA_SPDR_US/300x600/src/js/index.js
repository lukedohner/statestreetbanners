var CRAFTWW = CRAFTWW || {};

(function(){
	CRAFTWW.startAd = function() {

		if (checkFallback() ) {
			var adBox = document.getElementById("adBox");
			var bgExit = document.getElementById("bgExit");		

			var copy1 = document.getElementById("copy-l1");
			var copy2 = document.getElementById("copy-l2");
			var copy3 = document.getElementById("copy-l3");
			var copy4 = document.getElementById("copy-l4");
			var copy5 = document.getElementById("copy-l5");
			var copy6 = document.getElementById("copy-l6");
			var copy7 = document.getElementById("copy-l7");
			var copy8 = document.getElementById("copy-l8");
			var copy9 = document.getElementById("copy-l9");
			var copy10 = document.getElementById("copy-l10");
			var copy11 = document.getElementById("copy-l11");
			var copy12 = document.getElementById("copy-l12");
			var copy13 = document.getElementById("copy-l13");
			var copy14 = document.getElementById("copy-l14");
			var copy15 = document.getElementById("copy-l15");
			var copy16 = document.getElementById("copy-l16");
			var copy17 = document.getElementById("copy-l17");							

			var frame7 = document.getElementById("frame-7");
			var frame8 = document.getElementById("frame-8");	
			var frame9 = document.getElementById("frame-9");						
			var frame10 = document.getElementById("frame-10");

			var frameLegal = document.getElementById("frame-legal");			

			var copyL1Txt = document.getElementById("copy-l1-txt");
			var copyL2Txt = document.getElementById("copy-l2-txt");
			var copyL3Txt = document.getElementById("copy-l3-txt");
			var copyL4Txt = document.getElementById("copy-l4-txt");
			var copyL4bTxt = document.getElementById("copy-l4b-txt");				
			var copyL5Txt = document.getElementById("copy-l5-txt");		
			var copyL6Txt = document.getElementById("copy-l6-txt");
			var copyL7Txt = document.getElementById("copy-l7-txt");		
			var copyL8Txt = document.getElementById("copy-l8-txt");
			var copyL8bTxt = document.getElementById("copy-l8b-txt");				
			var copyL9Txt = document.getElementById("copy-l9-txt");
			var copyL10Txt = document.getElementById("copy-l10-txt");
			var copyL11Txt = document.getElementById("copy-l11-txt");
			var copyL12Txt = document.getElementById("copy-l12-txt");
			var copyL12bTxt = document.getElementById("copy-l12b-txt");			
			var copyL13Txt = document.getElementById("copy-l13-txt");
			var copyL14Txt = document.getElementById("copy-l14-txt");
			var copyL15Txt = document.getElementById("copy-l15-txt");
			var copyL16Txt = document.getElementById("copy-l16-txt");
			var copyL17Txt = document.getElementById("copy-l17-txt");				

			var copyHidden1 = document.getElementById("copy-hidden1");
			var copyHidden2 = document.getElementById("copy-hidden2");
			var copyHidden3 = document.getElementById("copy-hidden3");

			var copyWhite4 = document.getElementById("copy-white4");
			var copyWhite8 = document.getElementById("copy-white8");
			var copyWhite12 = document.getElementById("copy-white12");

			var logo = document.getElementById("logo");

			function setPos(_elem, _visi, _xpos, _ypos, _zpos){
				_elem.style.position = "absolute";
				_elem.style.left = _xpos + "px";
				_elem.style.top = _ypos + "px";
				if(_visi === "hidden"){
					_elem.style.opacity = 0;
				}else{
					_elem.style.opacity = 1;
				}
				_elem.style.zIndex = _zpos;
			}

			function slide(_elem, _endPos, _duration, _ease, _delay){

				var specs = 'left ' + _duration + 's ' + _ease + ' ' + _delay + 's';
				
				_elem.style.transition = specs;
				_elem.style.webkitTransition = specs;
				_elem.style.left = _endPos;
			}	

			function fade(_elem, _duration, _ease, _delay){
				
				var specs = 'all ' + _duration + 's ' + _ease + ' ' + _delay + 's';
				
				_elem.style.opacity = 0;
				_elem.style.transition = specs;
				_elem.style.webkitTransition = specs;
				_elem.style.opacity = 1; 
			}

			function fadeOut(_elem, _duration, _ease, _delay){
				
				var specs = 'opacity ' + _duration + 's ' + _ease + ' ' + _delay + 's';
				
				_elem.style.transition = specs;
				_elem.style.webkitTransition = specs;
				_elem.style.opacity = 0; 
			}

			function colorChange(_elem, _duration, _ease, _delay){
				var specs = 'color ' + _duration + 's ' + _ease + ' ' + _delay + 's';
				_elem.style.color = '#3e692d';
				_elem.style.transition = specs;
				_elem.style.webkitTransition = specs;
				_elem.style.color = '#fff'; 
			}

			function fontsizeChange(_elem, _duration, _ease, _delay){
				var specs = 'font-size' + _duration + 's ' + _ease + ' ' + _delay + 's';
				_elem.style.transition = specs;
				_elem.style.webkitTransition = specs;
				_elem.style.fontSize = '41px'; 
			}				

			function rePosition(_elem, _xvalue, _yvalue, _duration, _ease, _delay){
				var specs = 'all ' + _duration + 's ' + _ease + ' ' + _delay + 's';
				_elem.style.transition = specs;
				_elem.style.webkitTransition = specs;
				_elem.style.left = _xvalue + 'px';
				_elem.style.top = _yvalue + 'px';
			}

			bgExit.onclick = function() {
				 callClickTag();
			};

			function advance(){
				var tweenDelay = 0;
				clearInterval(timer);
				
				if(phase === 0){

					logo.style.transition = 'opacity .4s linear 0s';
					logo.style.webkitTransition = 'opacity .4s linear 0s';
					logo.style.opacity = 1;
					
					slide(copy1, "-913px", 11, 'linear', 0);
					slide(copy2, "1213px", 14, 'linear', 0);
					slide(copy3, "-913px", 16, 'linear', 0);
					slide(copy4, "1213px", 13, 'linear', 0);
					slide(copy5, "-913px", 11, 'linear', 0);
					slide(copy6, "1213px", 12, 'linear', 0);
					slide(copy7, "-913px", 11, 'linear', 0);
					slide(copy8, "1213px", 14, 'linear', 0);
					slide(copy9, "-913px", 16, 'linear', 0);
					slide(copy10, "1213px", 13, 'linear', 0);
					slide(copy11, "-913px", 11, 'linear', 0);
					slide(copy12, "1213px", 12, 'linear', 0);
					slide(copy13, "-913px", 11, 'linear', 0);
					slide(copy14, "1213px", 14, 'linear', 0);
					slide(copy15, "-913px", 16, 'linear', 0);						
					slide(copy16, "1213px", 14, 'linear', 0);
					slide(copy17, "-913px", 16, 'linear', 0);

					timer = setInterval(advance, 3000);
				}

				if(phase === 1){		

					var copy1w = copy1.offsetLeft;
					var copy2w = copy2.offsetLeft;
					var copy3w = copy3.offsetLeft;
					var copy4w = copy4.offsetLeft;
					var copy5w = copy5.offsetLeft;
					var copy6w = copy6.offsetLeft;
					var copy7w = copy7.offsetLeft;
					var copy8w = copy8.offsetLeft;
					var copy9w = copy9.offsetLeft;
					var copy10w = copy10.offsetLeft;
					var copy11w = copy11.offsetLeft;
					var copy12w = copy12.offsetLeft;
					var copy13w = copy13.offsetLeft;
					var copy14w = copy14.offsetLeft;
					var copy15w = copy15.offsetLeft;
					var copy16w = copy16.offsetLeft;
					var copy17w = copy17.offsetLeft;					

					slide(copy1, (copy1w +'px'), 40, 'linear', 0.5);
					slide(copy2, (copy2w +'px'), 42, 'linear', 0.5);
					slide(copy3, (copy3w +'px'), 44, 'linear', 0.5);
					slide(copy4, (copy4w +'px'), 46, 'linear', 0.5);
					slide(copy5, (copy5w +'px'), 48, 'linear', 0.5);
					slide(copy6, (copy6w +'px'), 50, 'linear', 0.5);
					slide(copy7, (copy7w +'px'), 44, 'linear', 0.5);
					slide(copy8, (copy8w +'px'), 40, 'linear', 0.5);
					slide(copy9, (copy9w +'px'), 42, 'linear', 0.5);
					slide(copy10, (copy10w +'px'), 44, 'linear', 0.5);
					slide(copy11, (copy11w +'px'), 40, 'linear', 0.5);
					slide(copy12, (copy12w +'px'), 42, 'linear', 0.5);
					slide(copy13, (copy13w +'px'), 44, 'linear', 0.5);
					slide(copy14, (copy14w +'px'), 46, 'linear', 0.5);
					slide(copy15, (copy15w +'px'), 48, 'linear', 0.5);				
					slide(copy16, (copy16w +'px'), 46, 'linear', 0.5);
					slide(copy17, (copy17w +'px'), 48, 'linear', 0.5);	

					colorChange(copyWhite4, 0.75, 40, 'linear', 0.5);
					colorChange(copyWhite8, 0.75, 40, 'linear', 0.5);
					colorChange(copyWhite12, 0.75, 40, 'linear', 0.5);

					fadeOut(copyL1Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL2Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL3Txt, 0.75, 'ease-in-out', 0);								
					fadeOut(copyL4Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL4bTxt, 0.75, 'ease-in-out', 0);					
					fadeOut(copyL5Txt, 0.75, 'ease-in-out', 0);			
					fadeOut(copyL6Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL7Txt, 0.75, 'ease-in-out', 0);													
					fadeOut(copyL8Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL8bTxt, 0.75, 'ease-in-out', 0);					
					fadeOut(copyL9Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL10Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL11Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL12Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL12bTxt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL13Txt, 0.75, 'ease-in-out', 0);								
					fadeOut(copyL14Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL15Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL16Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL17Txt, 0.75, 'ease-in-out', 0);															

					timer = setInterval(advance, 1000);
				}

				if(phase === 2){
					tweenDelay += 0.5;				
	
					var mq = window.matchMedia( "(max-device-width: 480px)" );

					if( mq.matches ) {
						fade(copyHidden1, 0.25, 'ease-in-out', tweenDelay);
						fade(copyHidden2, 0.25, 'ease-in-out', tweenDelay);
						fade(copyHidden3, 0.25, 'ease-in-out', tweenDelay);	

						rePosition(copy4, 51, 177, 0.25, 'ease-in-out', tweenDelay);
						rePosition(copy8, -44, 130, 0.25, 'ease-in-out', tweenDelay);
						rePosition(copy12, 22, 224, 0.25, 'ease-in-out', tweenDelay);						

						fontsizeChange(copy4, 5, 'easeOutCubic', tweenDelay);
						fontsizeChange(copy8, 5, 'easeOutCubic', tweenDelay);
						fontsizeChange(copy12, 5, 'easeOutCubic', tweenDelay);

					} else {
						fade(copyHidden1, 0.25, 'ease-in-out', tweenDelay);
						fade(copyHidden2, 0.25, 'ease-in-out', tweenDelay);
						fade(copyHidden3, 0.25, 'ease-in-out', tweenDelay);

						rePosition(copy4, 51, 177, 0.25, 'ease-in-out', tweenDelay);
						rePosition(copy8, -35, 130, 0.25, 'ease-in-out', tweenDelay);
						rePosition(copy12, 22, 224, 0.25, 'ease-in-out', tweenDelay);

						fontsizeChange(copy4, 10, 'easeOutCubic', tweenDelay);
						fontsizeChange(copy8, 10, 'easeOutCubic', tweenDelay);
						fontsizeChange(copy12, 10, 'easeOutCubic', tweenDelay);		
					}

					timer = setInterval(advance, 4000);
				}

				if(phase === 3){		
					tweenDelay += 0;
			
					fadeOut(copy4, 0.5, 'ease-in-out', tweenDelay);
					fadeOut(copy8, 0.5, 'ease-in-out', tweenDelay);
					fadeOut(copy12, 0.5, 'ease-in-out', tweenDelay);	
					
					fadeOut(copyHidden1, 0.5, 'ease-in-out', tweenDelay);
					fadeOut(copyHidden2, 0.5, 'ease-in-out', tweenDelay);
					fadeOut(copyHidden3, 0.5, 'ease-in-out', tweenDelay);	

					fade(frame7, 1, 'ease-in-out', tweenDelay);

					tweenDelay += 4;
					tweenDelay = tweenDelay*1000;

					timer = setInterval(advance, 3500);
				}

				if(phase === 4){		
					tweenDelay += 0;

					fadeOut(frame7, 0.2, 'ease-in-out', tweenDelay);
					fade(frame8, 1, 'ease-in-out', tweenDelay);

					tweenDelay += 4;
					tweenDelay = tweenDelay*1000;
					
					timer = setInterval(advance, 3000);
				}

				if(phase === 5){		
					tweenDelay += 0;

					fadeOut(frame8, 1, 'ease-in-out', tweenDelay);
					fade(frame9, 1, 'ease-in-out', tweenDelay);

					tweenDelay += 5;
					tweenDelay = tweenDelay*1000;
					
					timer = setInterval(advance, 2500);
				}

				if(phase === 6){		
					tweenDelay += 0;

					fadeOut(frame9, 1, 'ease-in-out', tweenDelay);
					fade(frame10, 1, 'ease-in-out', tweenDelay);

					tweenDelay += 5;
					tweenDelay = tweenDelay*1000;
					
					timer = setInterval(advance, 2500);
				}


				if(phase === 7){		
					tweenDelay += 0;

					fadeOut(logo, 1, 'ease-in-out', tweenDelay);
					fadeOut(frame10, 1, 'ease-in-out', tweenDelay);
					fade(frameLegal, 1, 'ease-in-out', tweenDelay);

					tweenDelay += 2;
					tweenDelay = tweenDelay*1000;
					
					timer = setInterval(advance, 1000);
				}			

				if(phase === 8){		
					tweenDelay += 3;
					fadeOut(frameLegal, 1, 'ease-in-out', tweenDelay);

					fade(logo, 1, 'ease-in-out', tweenDelay);
					fade(frame10, 1, 'ease-in-out', tweenDelay);
				}

				phase ++;
			}

			setPos(copy1, "visible", 500, 1, 2);
			setPos(copy2, "visible", -250, 26, 3);
			setPos(copy3, "visible", 500, 52, 4);
			setPos(copy4, "visible", -250, 78, 5);
			setPos(copy5, "visible", 500, 104, 6);
			setPos(copy6, "visible", -250, 130, 7);
			setPos(copy7, "visible", 500, 156, 4);
			setPos(copy8, "visible", -250, 182, 5);
			setPos(copy9, "visible", 500, 208, 6);
			setPos(copy10, "visible", -250, 234, 7);
			setPos(copy11, "visible", 500, 260, 2);
			setPos(copy12, "visible", -250, 286, 3);
			setPos(copy13, "visible", 500, 314, 4);
			setPos(copy14, "visible", -250, 342, 5);
			setPos(copy15, "visible", 500, 370, 6);	
			setPos(copy16, "visible", -250, 398, 4);
			setPos(copy17, "visible", 500, 426, 5);					

			setPos(frame7, "hidden", 0, 0, 8);
			setPos(frame8, "hidden", 0, 0, 9);
			setPos(frame9, "hidden", 0, 0, 10);
			setPos(frame10, "hidden", 0, 0, 11);

			setPos(frameLegal, "hidden", 0, 0, 13);

			setPos(logo, "hidden", 119, 528, 1);

			adBox.style.visibility = "visible";

			var timer = setInterval(advance, 200);
			var phase = 0;			
		}

		function useFallback() {
			var rv = -1;
			var ua = navigator.userAgent;
			var re  = new RegExp( "MSIE ([0-9]{1,}[\.0-9]{0,})" );

			if (re.exec(ua) != null)
			rv = parseFloat( RegExp.$1 );

			if ( rv > 0 && rv < 10 )
			        return true;
			else
			        return false;
			}

			function checkFallback() {
				if ( useFallback() ) {
					var body = document.body;
					 
					while ( body.firstChild ) {
						body.removeChild( body.firstChild );
					}

					var a = document.createElement( 'a' );
					if (document.addEventListener){ 
						a.addEventListener('click', callClickTag, false);	
					}

					var img = new Image();
					img.src = 'static.jpg';
					img.style.border = '0px';

					a.appendChild( img );
					document.body.appendChild( a );

					return false;
				}
				return true;
		}
	};
})();