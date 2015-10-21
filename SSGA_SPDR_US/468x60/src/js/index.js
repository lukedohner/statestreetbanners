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

			var frame7 = document.getElementById("frame-7");
			var frame7b = document.getElementById("frame-7b");
			var frame8 = document.getElementById("frame-8");	
			var frame9 = document.getElementById("frame-9");						
			var frame10 = document.getElementById("frame-10");
			var frameLegal = document.getElementById("frame-legal");		

			var copyL1Txt = document.getElementById("copy-l1-txt");
			var copyL1bTxt = document.getElementById("copy-l1b-txt");
			var copyL2Txt = document.getElementById("copy-l2-txt");
			var copyL2bTxt = document.getElementById("copy-l2b-txt");		
			var copyL3Txt = document.getElementById("copy-l3-txt");
			var copyL4Txt = document.getElementById("copy-l4-txt");
			var copyL4bTxt = document.getElementById("copy-l4b-txt");

			var copyHidden1 = document.getElementById("copy-hidden1");
			var copyHidden2 = document.getElementById("copy-hidden2");
			var copyHidden3 = document.getElementById("copy-hidden3");

			var copyWhite1 = document.getElementById("copy-white1");
			var copyWhite2 = document.getElementById("copy-white2");
			var copyWhite3 = document.getElementById("copy-white3");

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
			function fontsizeChange(_elem, _duration, _ease, _delay){
				var specs = 'font-size' + _duration + 's ' + _ease + ' ' + _delay + 's';
				_elem.style.transition = specs;
				_elem.style.webkitTransition = specs;
				_elem.style.fontSize = '22px'; 
			}

			bgExit.onclick = function() {
				 callClickTag();
			}

			function advance(){
				var tweenDelay = 0;
				clearInterval(timer);
				
				if(phase === 0){
					
					slide(copy1, "-913px", 11, 'linear', 0);
					slide(copy2, "1213px", 12, 'linear', 0);
					slide(copy3, "-913px", 13, 'linear', 0);
					slide(copy4, "-913px", 14, 'linear', 0);

					timer = setInterval(advance, 3000);
				}

				if(phase === 1){		

					var copy1w = copy1.offsetLeft;
					var copy2w = copy2.offsetLeft;
					var copy3w = copy3.offsetLeft;
					var copy4w = copy4.offsetLeft;

					slide(copy1, (copy1w +'px'), 40, 'linear', 0.5);
					slide(copy2, (copy2w +'px'), 42, 'linear', 0.5);
					slide(copy3, (copy3w +'px'), 44, 'linear', 0.5);
					slide(copy4, (copy4w +'px'), 46, 'linear', 0.5);

					colorChange(copyWhite1, 0.75, 40, 'linear', 0.5);
					colorChange(copyWhite2, 0.75, 40, 'linear', 0.5);
					colorChange(copyWhite3, 0.75, 40, 'linear', 0.5);

					fadeOut(copyL1Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL1bTxt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL2Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL2bTxt, 0.75, 'ease-in-out', 0);				
					fadeOut(copyL3Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL4Txt, 0.75, 'ease-in-out', 0);
					fadeOut(copyL4bTxt, 0.75, 'ease-in-out', 0);			
					
					timer = setInterval(advance, 1000);
				}

				if(phase === 2){
					logo.style.transition = 'opacity .4s linear 2s';
					logo.style.webkitTransition = 'opacity .4s linear 2s';
					logo.style.opacity = 1;

					tweenDelay += 0.5;
					
					
					fontsizeChange(copy1, 0.5, 'ease-in-out', tweenDelay);
					fontsizeChange(copy2, 0.5, 'ease-in-out', tweenDelay);				
					fontsizeChange(copy4, 0.5, 'ease-in-out', tweenDelay);
					/*
					fontsizeChange(copyWhite1, 0.5, 'ease-in-out', tweenDelay);
					fontsizeChange(copyWhite2, 0.5, 'ease-in-out', tweenDelay);				
					fontsizeChange(copyWhite3, 0.5, 'ease-in-out', tweenDelay);
					*/

					var mq = window.matchMedia( "(max-device-width: 480px)" );
					
					if( mq.matches ) {
						rePosition(copy1, -22, 17, 0.5, 'ease-in-out', tweenDelay);
						rePosition(copy2, 876, 17, 0.5, 'ease-in-out', tweenDelay);
						rePosition(copy4, 335, 17, 0.5, 'ease-in-out', tweenDelay);				
					} else {
						

						rePosition(copy1, -22, 17, 0.5, 'ease-in-out', tweenDelay);
						rePosition(copy2, 876, 17, 0.5, 'ease-in-out', tweenDelay);
						rePosition(copy4, 335, 17, 0.5, 'ease-in-out', tweenDelay);			
					}

					fade(copyHidden1, 0.5, 'ease-in-out', 0.5);
					fade(copyHidden2, 0.5, 'ease-in-out', 0.5);
					fade(copyHidden3, 0.5, 'ease-in-out', 0.5);					
			
					tweenDelay += 6;
					tweenDelay = tweenDelay*1000;

					timer = setInterval(advance, 4000);
				}

				if(phase === 3){
					tweenDelay += 3.5;
			
					fadeOut(copy1, 0.5, 'linear', 0);
					fadeOut(copy2, 0.5, 'linear', 0);
					fadeOut(copy4, 0.5, 'linear', 0);	
					
					fadeOut(copyHidden1, 0.5, 'linear', 0);
					fadeOut(copyHidden2, 0.5, 'linear', 0);
					fadeOut(copyHidden3, 0.5, 'linear', 0);	

					tweenDelay += 4;
					tweenDelay = tweenDelay*1000;

					fade(frame7, 1, 'ease-in-out', 0.5);

					timer = setInterval(advance, 3500);
				}

				if(phase === 4){		
					tweenDelay += 0;

					fadeOut(frame7, 0.2, 'ease-in-out', tweenDelay);
					fade(frame7b, 1, 'ease-in-out', tweenDelay);

					tweenDelay += 4;
					tweenDelay = tweenDelay*1000;
					
					timer = setInterval(advance, 3000);
				}

				if(phase === 5){		
					tweenDelay += 0;

					fadeOut(frame7b, 0.2, 'ease-in-out', tweenDelay);
					fade(frame8, 1, 'ease-in-out', tweenDelay);

					tweenDelay += 4;
					tweenDelay = tweenDelay*1000;
					
					timer = setInterval(advance, 3000);
				}

				if(phase === 6){		
					tweenDelay += 0;

					fadeOut(frame8, 1, 'ease-in-out', tweenDelay);
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
					tweenDelay += 0;

					slideUp(frameLegal, "-95px", 1.9, 'linear', 0.5);

					tweenDelay += 3;
					tweenDelay = tweenDelay*1000;

					timer = setInterval(advance, 2500);
				}

				if(phase === 9){		
					tweenDelay += 0;

					slideUp(frameLegal, "-163px", 1.9, 'linear', 0.5);

					tweenDelay += 3;
					tweenDelay = tweenDelay*1000;

					timer = setInterval(advance, 2500);
				}

				if(phase === 10){		
					tweenDelay += 0;

					slideUp(frameLegal, "-234px", 1.9, 'linear', 0.5);

					tweenDelay += 3;
					tweenDelay = tweenDelay*1000;

					timer = setInterval(advance, 2500);
				}

				if(phase === 11){		
					tweenDelay += 0;

					slideUp(frameLegal, "-335px", 1.9, 'linear', 0.5);

					tweenDelay += 3;
					tweenDelay = tweenDelay*1000;

					timer = setInterval(advance, 2500);
				}								

				if(phase === 12){		
					tweenDelay += 1;

					fadeOut(frameLegal, 1, 'ease-in-out', tweenDelay);
					fade(frame10, 1, 'ease-in-out', tweenDelay);
				}		
				
				phase ++;
			}
			setPos(copy1, "visible", 620, -1, 2);
			setPos(copy2, "visible", 456, 18, 3);
			setPos(copy3, "visible", 510, 66, 4);
			setPos(copy4, "visible", 510, 37, 5);

			setPos(frame7, "hidden", 0, 0, 8);
			setPos(frame7b, "hidden", 0, 0, 8);
			setPos(frame8, "hidden", 0, 0, 9);
			setPos(frame9, "hidden", 0, 0, 20);
			setPos(frameLegal, "hidden", 0, 0, 20);
			setPos(frame10, "hidden", 0, 0, 11);		

			setPos(logo, "hidden", 409, 32, 1);
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