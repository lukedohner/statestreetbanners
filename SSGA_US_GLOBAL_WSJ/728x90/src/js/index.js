var CRAFTWW = CRAFTWW || {};

(function() {
	CRAFTWW.startAd = function() {

		var adWidth = 728;
		var adHeight = 90;

		if(	checkFallback() ) {
			var adBox = document.getElementById("adBox");
			var textHolder = document.getElementById("textHolder");
			var cta = document.getElementById("cta");
			var mintCover = document.getElementById("mintCover");
			var logo = document.getElementById("logo");
			var copy_f6 = document.getElementById("copy_f6");
			var copy_f7 = document.getElementById("copy_f7");
			var copy_f8 = document.getElementById("copy_f8");
			var copy_f9 = document.getElementById("copy_f9");
			var copy_f10 = document.getElementById("copy_f10");
			var copy_f11 = document.getElementById("copy_f11");
			var legal = document.getElementById("legal");
			var bgExit = document.getElementById("bgExit");

			var textArray = [ "marketVolatility.png",
							  "challengingEnvi.png",
							  "naturalDisasters.png",
							  "capitalGains.png",
							  "weakenedCurr.png",
							  "callable.png",
							  "housingMarket.png",
							  "basisPoint.png",
							  "averageDaily.png",
							  "account.png",
							  "boom.png",
							  "certificateDep.png",
							  "devaluedCurr.png",
							  "interest.png",
							  "annualReturn.png",
							  "bondPrices.png",
							  "trends.png",
							  "bust.png",
							  "buyingPower.png",
							  "cdRate.png",
							  "cashMarket.png",
							  "bubble.png",
							  "cashMarket.png"
				];

			var xPos = [266, 3, 10, 430, 170, 590, 221, 470, 13, 630];
			var yPos = [15, 47, 1, 22, 66, 30, 33, 20, 65, 8];
			var a = 0;
			var b = 0;
			var c = 400;

		
			// Set positioning or setPos() is used to position Div element, sets initially opacity, and z-index positioning

			function setPos(_elem, _visi, _xpos, _ypos, _zpos){
				if(_elem){
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
			} 

			function createCaption(){
				var newDiv = document.createElement('div');
				var imgStr = "<img src='" + textArray[b] + "' />";
				var randX = Math.floor((Math.random()*adWidth)-50);
				var randY = Math.floor((Math.random()*adHeight));
				newDiv.innerHTML = imgStr;
				textHolder.appendChild(newDiv);
			
				if(a < 10){
					setPos(newDiv, "visible", xPos[a], yPos[a], a);
				}else{
					setPos(newDiv, "visible", randX, randY, a);
				}

				newDiv.className = 'fade';
			
				if(b < textArray.length - 1){
					b ++;
				}else{
					b = 0;
				}
				a ++;
				c -= (a + 30);
				if(c < 10){
					c = 10;
				}
				if(a === 300){
					//console.log("done");
				}else{
					setTimeout(createCaption, c);
				}

				if( a === 80){
					displayMint();
				}
			}


			function displayMint(){
				mintCover.style.transition = 'opacity 1s ease-in-out 0s';
				mintCover.style.webkitTransition = 'opacity 1s ease-in-out 0s';
				mintCover.style.opacity = 1;
			}

			function advance(){

				clearInterval(timer);
			
				if(phase === 0){

					createCaption();	
					timer = setInterval(advance, 3000);
			
				}
					if(phase === 1){
				
					logo.style.transition = 'opacity .4s ease-in-out 0s';
					logo.style.webkitTransition = 'opacity .4s ease-in-out 0s';
					logo.style.opacity = 1;

					copy_f6.style.transition = 'opacity .4s ease-in-out .6s';
					copy_f6.style.webkitTransition = 'opacity .4s ease-in-out .6s';
					copy_f6.style.opacity = 1;
				
					timer = setInterval(advance, 4000);
				}
				if(phase === 2){
				
					copy_f6.style.transition = 'opacity .4s ease-in-out .6s';
					copy_f6.style.webkitTransition = 'opacity .4s ease-in-out .6s';
					copy_f6.style.opacity = 0;

					copy_f7.style.transition = 'opacity .4s ease-in-out .6s';
					copy_f7.style.webkitTransition = 'opacity .4s ease-in-out .6s';
					copy_f7.style.opacity = 1;
				
					timer = setInterval(advance, 4000);
				}

				if(phase === 3){
					copy_f7.style.transition = 'opacity .4s ease-in-out 0s';
					copy_f7.style.webkitTransition = 'opacity .4s ease-in-out 0s';
					copy_f7.style.opacity = 0;

					copy_f8.style.transition = 'opacity .4s ease-in-out .6s';
					copy_f8.style.webkitTransition = 'opacity .4s ease-in-out .6s';
					copy_f8.style.opacity = 1;

					timer = setInterval(advance, 4000);
				}

				if(phase === 4){
					copy_f8.style.transition = 'opacity .4s ease-in-out 0s';
					copy_f8.style.webkitTransition = 'opacity .4s ease-in-out 0s';
					copy_f8.style.opacity = 0;

					copy_f9.style.transition = 'opacity .4s ease-in-out .6s';
					copy_f9.style.webkitTransition = 'opacity .4s ease-in-out .6s';
					copy_f9.style.opacity = 1;

					timer = setInterval(advance, 4000);
				}

				if(phase === 5){
					copy_f9.style.transition = 'opacity .4s ease-in-out 0s';
					copy_f9.style.webkitTransition = 'opacity .4s ease-in-out 0s';
					copy_f9.style.opacity = 0;

					copy_f10.style.transition = 'opacity .4s ease-in-out .8s';
					copy_f10.style.webkitTransition = 'opacity .4s ease-in-out .8s';
					copy_f10.style.opacity = 1;

					timer = setInterval(advance, 2800);
				}

				if(phase === 6){

					copy_f10.style.transition = 'top .4s ease-in-out 0s';
					copy_f10.style.webkitTransition = 'top .4s ease-in-out 0s';
					copy_f10.style.top = "-1px";



					copy_f11.style.transition = 'opacity .4s ease-in-out .3s';
					copy_f11.style.webkitTransition = 'opacity .4s ease-in-out .3s';
					copy_f11.style.opacity = 1;

					logo.style.transition = 'top .8s ease-in-out .6s';
					logo.style.webkitTransition = 'top .8s ease-in-out .8s';
					logo.style.top = "14px";

					legal.style.transition = 'opacity .4s ease-in-out .7s';
					legal.style.webkitTransition = 'opacity .4s ease-in-out .9s';
					legal.style.opacity = 1;

					cta.style.transition = 'opacity .4s ease-in-out .3s';
					cta.style.webkitTransition = 'opacity .4s ease-in-out .3s';
					cta.style.opacity = 1;

					timer = setInterval(advance, 2800);
				}
			
				phase ++;
			}		
		
		
		

			var timer = setInterval(advance, 200);
			var phase = 0;		
	
			//setPos(guide, "visible", 0, 0, 1);
			setPos(textHolder, "visible", 0, 0, 2);
			setPos(mintCover, "hidden", 0, 0, 3);
	

			setPos(logo, "hidden", 561, 22, 4);
			setPos(copy_f6, "hidden", 0, 0, 5);
			setPos(copy_f7, "hidden", 0, 0, 5);
			setPos(copy_f8, "hidden", 0, 0, 5);
			setPos(copy_f9, "hidden", 0, 0, 5);
			setPos(copy_f10, "hidden", 0, 17, 5);
			setPos(copy_f11, "hidden", -1, 0, 5);
			setPos(legal, "hidden", 25, 72, 10);
			setPos(cta, "hidden", 19, 93, 11);
			setPos(bgExit, "visible", 0, 0, 999);

			bgExit.onclick = function() {
				callClickTag();
			};
			
			adBox.style.visibility = "visible";
		
		
			
		
		
		
		
		}


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
				if (document.addEventListener){ 
					a.addEventListener('click', callClickTag, false);	
				}
							
				var img = new Image();
				img.src = './static.jpg';
				img.style.border = '0';
					
				a.appendChild( img );
				document.body.appendChild( a );

				return false;
			}
			return true;
		}

	};
})();