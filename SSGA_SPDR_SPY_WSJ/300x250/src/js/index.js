var CRAFTWW = CRAFTWW || {};

(function(){
	CRAFTWW.startAd = function() {

		checkFallback();

		var adBox = document.getElementById("adBox");
		var bgExit = document.getElementById("bgExit");

		var copy1 = document.getElementById("copy-l1");
		var copy2 = document.getElementById("copy-l2");
		var copy3 = document.getElementById("copy-l3");
		var copy4 = document.getElementById("copy-l4");
		var copy5 = document.getElementById("copy-l5");
		var copy6 = document.getElementById("copy-l6");

		var frame7 = document.getElementById("frame-7");
		var frame8 = document.getElementById("frame-8");	
		var frame9Legal = document.getElementById("frame-9-legal");						
		var frame10 = document.getElementById("frame-10");

		var copyL1Txt = document.getElementById("copy-l1-txt");
		var copyL1bTxt = document.getElementById("copy-l1b-txt");
		var copyL2Txt = document.getElementById("copy-l2-txt");
		var copyL3Txt = document.getElementById("copy-l3-txt");
		var copyL4Txt = document.getElementById("copy-l4-txt");
		var copyL5Txt = document.getElementById("copy-l5-txt");
		var copyL5bTxt = document.getElementById("copy-l5b-txt");
		var copyL6Txt = document.getElementById("copy-l6-txt");
		var copyL6bTxt = document.getElementById("copy-l6b-txt");

		var copyHidden1 = document.getElementById("copy-hidden1");
		var copyHidden2 = document.getElementById("copy-hidden2");
		var copyHidden3 = document.getElementById("copy-hidden3");

		var copyWhite1 = document.getElementById("copy-white1");
		var copyWhite2 = document.getElementById("copy-white2");
		var copyWhite3 = document.getElementById("copy-white3");

		var logo = document.getElementById("logo");

		setPos(copy1, "visible", 500, 1, 2);
		setPos(copy2, "visible", -250, 26, 3);
		setPos(copy3, "visible", 500, 50, 4);
		setPos(copy4, "visible", -250, 76, 5);
		setPos(copy5, "visible", 500, 100, 6);
		setPos(copy6, "visible", -250, 126, 7);

		setPos(frame7, "hidden", 20, 30, 8);
		setPos(frame8, "hidden", 20, 30, 9);
		setPos(frame9Legal, "hidden", 0, 0, 10);
		setPos(frame10, "hidden", 20, 30, 11);		

		setPos(logo, "hidden", 90, 200, 1);

		// Set positioning or setPos() is used to position Div element, sets initially opacity, and z-index positioning

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
				a.href = "{{PUB_CLICKTHROUGH}}";
				a.target = "_blank";

				var img = new Image();
				img.src = './static.jpg';

				a.appendChild( img );
				document.body.appendChild( a );

				return;
			}
		}

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

		function rePosition(_elem, _xvalue, _yvalue, _duration, _ease, _delay){
			var specs = 'all ' + _duration + 's ' + _ease + ' ' + _delay + 's';
			_elem.style.transition = specs;
			_elem.style.webkitTransition = specs;
			_elem.style.left = _xvalue + 'px';
			_elem.style.top = _yvalue + 'px';
		}

		bgExit.onclick = function() {
			 EB.clickthrough();  // jshint ignore:line
		};

		adBox.style.visibility = "visible";

		var timer = setInterval(advance, 200);
		var phase = 0;

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

				timer = setInterval(advance, 3000);
			}

			if(phase === 1){		

				var copy1w = copy1.offsetLeft;
				var copy2w = copy2.offsetLeft;
				var copy3w = copy3.offsetLeft;
				var copy4w = copy4.offsetLeft;
				var copy5w = copy5.offsetLeft;
				var copy6w = copy6.offsetLeft;

				slide(copy1, (copy1w +'px'), 40, 'linear', 0.5);
				slide(copy2, (copy2w +'px'), 42, 'linear', 0.5);
				slide(copy3, (copy3w +'px'), 44, 'linear', 0.5);
				slide(copy4, (copy4w +'px'), 46, 'linear', 0.5);
				slide(copy5, (copy5w +'px'), 48, 'linear', 0.5);
				slide(copy6, (copy6w +'px'), 50, 'linear', 0.5);

				colorChange(copyWhite1, 0.75, 40, 'linear', 0.5);
				colorChange(copyWhite2, 0.75, 40, 'linear', 0.5);
				colorChange(copyWhite3, 0.75, 40, 'linear', 0.5);

				fadeOut(copyL1Txt, 0.75, 'ease-in-out', 0);
				fadeOut(copyL1bTxt, 0.75, 'ease-in-out', 0);
				fadeOut(copyL2Txt, 0.75, 'ease-in-out', 0);
				fadeOut(copyL3Txt, 0.75, 'ease-in-out', 0);								
				fadeOut(copyL4Txt, 0.75, 'ease-in-out', 0);
				fadeOut(copyL5Txt, 0.75, 'ease-in-out', 0);
				fadeOut(copyL5bTxt, 0.75, 'ease-in-out', 0);
				fadeOut(copyL6Txt, 0.75, 'ease-in-out', 0);
				fadeOut(copyL6bTxt, 0.75, 'ease-in-out', 0);			

				timer = setInterval(advance, 1000);
			}

			if(phase === 2){
				tweenDelay += 0.5;

				rePosition(copy1, 154, 24, 0.5, 'ease-in-out', tweenDelay);
				rePosition(copy5, 113, 24, 0.5, 'ease-in-out', tweenDelay);
				rePosition(copy6, -8, 56, 0.5, 'ease-in-out', tweenDelay);

				fade(copyHidden1, 0.5, 'ease-in-out', 0.5);
				fade(copyHidden2, 0.5, 'ease-in-out', 0.5);
				fade(copyHidden3, 0.5, 'ease-in-out', 0.5);					
		
				timer = setInterval(advance, 2000);
			}

			if(phase === 3){		
				tweenDelay += 2;
		
				fadeOut(copy1, 0.7, 'linear', 0);
				fadeOut(copy5, 0.7, 'linear', 0);
				fadeOut(copy6, 0.7, 'linear', 0);	
				
				fadeOut(copyHidden1, 0.7, 'linear', 0);
				fadeOut(copyHidden2, 0.7, 'linear', 0);
				fadeOut(copyHidden3, 0.7, 'linear', 0);	

				fade(frame7, 1, 'ease-in-out', 0.5);

				tweenDelay += 4;
				tweenDelay = tweenDelay*1000;

				timer = setInterval(advance, 2800);
			}

			if(phase === 4){		
				tweenDelay += 2;

				fadeOut(frame7, 0.2, 'ease-in-out', tweenDelay);
				fade(frame8, 1, 'ease-in-out', tweenDelay);

				tweenDelay += 4;
				tweenDelay = tweenDelay*1000;
				
				timer = setInterval(advance, 3000);
			}
			if(phase === 5){		
				tweenDelay += 2;

				fadeOut(frame8, 1, 'ease-in-out', tweenDelay);
				fade(frame10, 1, 'ease-in-out', tweenDelay);

				tweenDelay += 4.5;
				tweenDelay = tweenDelay*1000;
				
				timer = setInterval(advance, 4000);
			}
			if(phase === 6){		
				tweenDelay += 0;

				fadeOut(frame10, 1, 'ease-in-out', tweenDelay);
				fade(frame9Legal, 1, 'ease-in-out', tweenDelay);

				tweenDelay += 4;
				tweenDelay = tweenDelay*1000;
				
				timer = setInterval(advance, 1000);
			}
			if(phase === 7){		
				tweenDelay += 3;

				fadeOut(frame9Legal, 1, 'ease-in-out', tweenDelay);
				fade(frame10, 1, 'ease-in-out', tweenDelay);
			}
			
			phase ++;
		}	
	};
})();