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
			var copy18 = document.getElementById("copy-l18");
			var copy19 = document.getElementById("copy-l19");
			var copy20 = document.getElementById("copy-l20");

			var frame7 = document.getElementById("frame-7");
			var frame8 = document.getElementById("frame-8");	
			var frame9 = document.getElementById("frame-9");						
			var frame10 = document.getElementById("frame-10");

			var frameLegal = document.getElementById("frame-legal");			

			var copyL1Txt = document.getElementById("copy-l1-txt");
			var copyL2Txt = document.getElementById("copy-l2-txt");
			var copyL3Txt = document.getElementById("copy-l3-txt");
			var copyL4Txt = document.getElementById("copy-l4-txt");		
			var copyL5Txt = document.getElementById("copy-l5-txt");		
			var copyL6Txt = document.getElementById("copy-l6-txt");
			var copyL6bTxt = document.getElementById("copy-l6b-txt");			
			var copyL7Txt = document.getElementById("copy-l7-txt");		
			var copyL8Txt = document.getElementById("copy-l8-txt");
			var copyL9Txt = document.getElementById("copy-l9-txt");
			var copyL9bTxt = document.getElementById("copy-l9b-txt");			
			var copyL10Txt = document.getElementById("copy-l10-txt");
			var copyL11Txt = document.getElementById("copy-l11-txt");
			var copyL12Txt = document.getElementById("copy-l12-txt");
			var copyL13Txt = document.getElementById("copy-l13-txt");
			var copyL13bTxt = document.getElementById("copy-l13b-txt");			
			var copyL14Txt = document.getElementById("copy-l14-txt");
			var copyL15Txt = document.getElementById("copy-l15-txt");	
			var copyL16Txt = document.getElementById("copy-l16-txt");
			var copyL17Txt = document.getElementById("copy-l17-txt");
			var copyL18Txt = document.getElementById("copy-l18-txt");
			var copyL19Txt = document.getElementById("copy-l19-txt");
			var copyL20Txt = document.getElementById("copy-l20-txt");

			var copyHidden1 = document.getElementById("copy-hidden1");
			var copyHidden2 = document.getElementById("copy-hidden2");
			var copyHidden3 = document.getElementById("copy-hidden3");

			var copyWhite6 = document.getElementById("copy-white6");
			var copyWhite9 = document.getElementById("copy-white9");
			var copyWhite13 = document.getElementById("copy-white13");

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

			function slideUp(_elem, _endPos, _duration, _ease, _delay){

				var specs = 'top ' + _duration + 's ' + _ease + ' ' + _delay + 's';
				
				_elem.style.transition = specs;
				_elem.style.webkitTransition = specs;
				//_elem.style.transition-duration = '4s';
				//_elem.style.webkitTransition-duration = '4s';
				_elem.style.top = _endPos;
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
					slide(copy16, "1213px", 11, 'linear', 0);
					slide(copy17, "-913px", 12, 'linear', 0);
					slide(copy18, "1213px", 11, 'linear', 0);
					slide(copy19, "-913px", 14, 'linear', 0);
					slide(copy20, "1213px", 16, 'linear', 0);											

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
					var copy18w = copy18.offsetLeft;
					var copy19w = copy19.offsetLeft;
					var copy20w = copy20.offsetLeft;					

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
					slide(copy16, (copy16w +'px'), 40, 'linear', 0.5);
					slide(copy17, (copy17w +'px'), 42, 'linear', 0.5);
					slide(copy18, (copy18w +'px'), 44, 'linear', 0.5);
					slide(copy19, (copy19w +'px'), 46, 'linear', 0.5);
					slide(copy20, (copy20w +'px'), 48, 'linear', 0.5);									

					colorChange(copyWhite6, 0.75, 40, 'linear', 0.5);
					colorChange(copyWhite9, 0.75, 40, 'linear', 0.5);
					colorChange(copyWhite13, 0.75, 40, 'linear', 0.5);

					fadeOut(copyL1Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL2Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL3Txt, 0.75, 'ease-in-out', 0);								
					fadeOut(copyL4Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL5Txt, 0.75, 'ease-in-out', 0);				
					fadeOut(copyL6Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL6bTxt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL7Txt, 0.75, 'ease-in-out', 0);													
					fadeOut(copyL8Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL9Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL9bTxt, 0.75, 'ease-in-out', 0);					
					fadeOut(copyL10Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL11Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL12Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL13Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL13bTxt, 0.75, 'ease-in-out', 0);													
					fadeOut(copyL14Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL15Txt, 0.75, 'ease-in-out', 0);										
					fadeOut(copyL16Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL17Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL18Txt, 0.75, 'ease-in-out', 0);								
					fadeOut(copyL19Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL20Txt, 0.75, 'ease-in-out', 0);

					timer = setInterval(advance, 1000);
				}

				if(phase === 2){
					tweenDelay += 0.5;			

					var mq = window.matchMedia( "(max-device-width: 480px)" );

					if( mq.matches ) {
						rePosition(copy6, 110, 212, 0.25, 'ease-in-out', tweenDelay);
						rePosition(copy9, 235, 180, 0.25, 'ease-in-out', tweenDelay);
						rePosition(copy13, 124, 244, 0.25, 'ease-in-out', tweenDelay);

						fade(copyHidden1, 0.5, 'ease-in-out', tweenDelay);
						fade(copyHidden2, 0.5, 'ease-in-out', tweenDelay);
						fade(copyHidden3, 0.5, 'ease-in-out', tweenDelay);	
					} else {
						rePosition(copy6, 118, 210, 0.25, 'ease-in-out', tweenDelay);
						rePosition(copy9, 255, 180, 0.25, 'ease-in-out', tweenDelay);
						rePosition(copy13, 134, 242, 0.25, 'ease-in-out', tweenDelay);

						fade(copyHidden1, 0.5, 'ease-in-out', tweenDelay);
						fade(copyHidden2, 0.5, 'ease-in-out', tweenDelay);
						fade(copyHidden3, 0.5, 'ease-in-out', tweenDelay);	
					}

					timer = setInterval(advance, 4000);
				}

				if(phase === 3){		
					tweenDelay += 0;
			
					fadeOut(copy6, 0.5, 'ease-in-out', tweenDelay);
					fadeOut(copy9, 0.5, 'ease-in-out', tweenDelay);
					fadeOut(copy13, 0.5, 'ease-in-out', tweenDelay);	
					
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
					
					timer = setInterval(advance, 2000);
				}			

				if(phase === 8){		
					tweenDelay += 0;

					slideUp(frameLegal, "-165px", 48, 'easeOutCubic', 2);

					tweenDelay += 3;
					tweenDelay = tweenDelay*1000;

					timer = setInterval(advance, 4000);
				}

				if(phase === 9){		
					tweenDelay += 0;

					slideUp(frameLegal, "-315px", 48, 'easeOutCubic', 2);

					tweenDelay += 3;
					tweenDelay = tweenDelay*1000;

					timer = setInterval(advance, 4000);
				}

				if(phase === 10){		
					tweenDelay += 3;

					fade(logo, 1, 'ease-in-out', tweenDelay);
					fadeOut(frameLegal, 1, 'ease-in-out', tweenDelay);
					fade(frame10, 1, 'ease-in-out', tweenDelay);
				}

				phase ++;
			}

			setPos(copy1, "visible", 500, 1, 2);
			setPos(copy2, "visible", -250, 24, 3);
			setPos(copy3, "visible", 500, 48, 4);
			setPos(copy4, "visible", -250, 72, 5);
			setPos(copy5, "visible", 500, 96, 6);
			setPos(copy6, "visible", -250, 120, 7);
			setPos(copy7, "visible", 500, 144, 4);
			setPos(copy8, "visible", -250, 168, 5);
			setPos(copy9, "visible", 500, 192, 6);
			setPos(copy10, "visible", -250, 216, 7);
			setPos(copy11, "visible", 500, 240, 2);
			setPos(copy12, "visible", -250, 264, 3);
			setPos(copy13, "visible", 500, 288, 4);
			setPos(copy14, "visible", -250, 312, 5);
			setPos(copy15, "visible", 500, 336, 6);
			setPos(copy16, "visible", -250, 360, 2);
			setPos(copy17, "visible", 500, 384, 3);
			setPos(copy18, "visible", -250, 408, 4);
			setPos(copy19, "visible", 500, 432, 5);
			setPos(copy20, "visible", -250, 456, 6);					

			setPos(frame7, "hidden", 0, 0, 8);
			setPos(frame8, "hidden", 0, 0, 9);
			setPos(frame9, "hidden", 0, 0, 10);
			setPos(frame10, "hidden", 0, 0, 11);

			setPos(frameLegal, "hidden", 0, 0, 13);

			setPos(logo, "hidden", 0, 0, 1);

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