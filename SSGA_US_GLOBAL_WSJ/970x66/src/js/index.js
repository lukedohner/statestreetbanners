var CRAFTWW = CRAFTWW || {};

(function() {
	CRAFTWW.startAd = function() {

		checkFallback();
		var adWidth = 970;
		var adHeight = 66;
		var adHeight2 = 418;
		var adBox = document.getElementById("adBox");
		var textHolder = document.getElementById("textHolder");
		var textHolder2 = document.getElementById("textHolder2");
		var cta = document.getElementById("cta");
		var mintCover = document.getElementById("mintCover");
        var mintCoverExpand = document.getElementById("mintCoverExpand");
		
		var logo = document.getElementById("logo");
		var copy_f6 = document.getElementById("copy_f6");
		var copy_f7 = document.getElementById("copy_f7");
		var copy_f8 = document.getElementById("copy_f8");
		var copy_f9 = document.getElementById("copy_f9");
		var copy_f10 = document.getElementById("copy_f10");
		var copy_f11 = document.getElementById("copy_f11");

		var copy_f12 = document.getElementById("copy_f12");
		var copy_f13 = document.getElementById("copy_f13");
		var copy_f14 = document.getElementById("copy_f14");

		var copy_f15 = document.getElementById("copy_f15");
		var legal = document.getElementById("legal");
        var expand_button_wt = document.getElementById("expand_button_wt");
        var expand_button_bk = document.getElementById("expand_button_bk");

        var close_button = document.getElementById("close-button");
		var bgExit = document.getElementById("bgExit");
		
		var panel = document.getElementById("panel");
        //var guide = document.getElementById("guide");
        var tweenDelay = 0;
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

		var xPos = [66, 550, 240, 800, 400, 710, 200, 615, 10, 820];
		var yPos = [45, 10, 43, 21, 52, 1, 33, 20, 65, 8];
		var a = 0;
		var b = 0;
		var c = 400;

		var xPos2 = [66, 550, 240, 800, 400, 710, 200, 615, 10, 820, 10, 300, 715, 70, 520];
		var yPos2 = [45, 10, 343, 21, 252, 19, 33, 120, 195, 408, 300, 23, 320, 165, 411];
		var a2 = 0;
		var b2 = 0;
		var c2 = 400;
        
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

		// setPos(guide, "visible", 0, 0, 1);
		setPos(textHolder, "visible", 0, 0, 2);
		setPos(textHolder2, "visible", 0, 0, 0);
		setPos(mintCover, "hidden", 0, 0, 3);
		
		setPos(mintCoverExpand, "hidden", 0, 0, 3);
		
		
		setPos(copy_f6, "hidden", 19, 31, 5);
		setPos(copy_f7, "hidden", 120, 20, 6);
		setPos(copy_f8, "hidden", 628, 21, 7);

		setPos(copy_f9, "hidden", 374, 193, 8);
		
		setPos(copy_f10, "hidden", 124, 193, 9);

		setPos(copy_f11, "hidden", 162, 193, 9);

		setPos(copy_f12, "hidden", 172, 193, 9);
		setPos(copy_f13, "hidden", 175, 193, 9);
		
		setPos(copy_f14, "hidden", 260, 178, 9);

  		setPos(copy_f15, "hidden", 378, 221, 9);
  		 
    	setPos(logo, "hidden", 769, 328, 4);
		setPos(legal, "hidden", 37, 394, 10);
		setPos(cta, "hidden", 19, 93, 11);
		setPos(expand_button_wt, "hidden", 910, 4, 230);
		setPos(expand_button_bk, "hidden", 910, 4, 231);

 		setPos(close_button, "hidden", 911, 3, 131);

		setPos(bgExit, "visible", 0, 0, 120);

		// Set positioning or setPos() is used to position Div element, sets initially opacity, and z-index positioning

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
         //Expanded
		function createCaption2(){
			var newDiv = document.createElement('div');
			var imgStr = "<img src='" + textArray[b2] + "' />";
			var randX = Math.floor((Math.random()*adWidth)-50);
			var randY = Math.floor((Math.random()*adHeight2));
			newDiv.innerHTML = imgStr;
			textHolder2.appendChild(newDiv);
			
			if(a2 < 15){
				setPos(newDiv, "visible", xPos2[a2], yPos2[a2], a2);
			}else{
				setPos(newDiv, "visible", randX, randY, a2);
			}

			newDiv.className = 'fade';
			
			if(b2 < textArray.length - 1){
				b2 ++;
			}else{
				b2 = 0;
			}
			a2 ++;
			c2 -= (a2 + 30);
			if(c2 < 15){
				c2 = 15;
			}
			if(a2 === 300){
				//console.log("done");
			}else{
				setTimeout(createCaption2, c2);
			}

			if( a2 === 80){
				displayMint2();
			}
		}



		bgExit.onclick = function() {
			EB.clickthrough(); // jshint ignore:line
		};

		function displayMint(){
			mintCover.style.transition = 'opacity 1s ease-in-out 0s';
			mintCover.style.webkitTransition = 'opacity 1s ease-in-out 0s';
			mintCover.style.opacity = 1;
		}
		
		function displayMint2(){
			console.log(displayMint2);
			mintCoverExpand.style.transition = 'opacity 1s ease-in-out 0s';
			mintCoverExpand.style.webkitTransition = 'opacity 1s ease-in-out 0s';
			mintCoverExpand.style.opacity = 1;
		}
		function slide(_elem, _endPos, _duration, _ease, _delay){

			var specs = 'left ' + _duration + 's ' + _ease + ' ' + _delay + 's';
			
			_elem.style.transition = specs;
			_elem.style.webkitTransition = specs;
			_elem.style.left = _endPos;
		}

		function slidetop(_elem, _endPos, _duration, _ease, _delay){

			var specs = 'top ' + _duration + 's ' + _ease + ' ' + _delay + 's';
			
			_elem.style.transition = specs;
			_elem.style.webkitTransition = specs;
			_elem.style.top = _endPos;
		}



		CRAFTWW.expandPanel = function(){
			//panel.style.height = 30px;
            //expandPanel(panel, "30px", .01, 'ease-in-out', 0);

			expandPanel(panel, "130px", 300000, 'ease-in-out', 11000);
		}

		function expandPanel(_elem, _endPos, _duration, _ease, _delay){

			var specs = 'height ' + _duration + 's ' + _ease + ' ' + _delay + 's';
			
			_elem.style.transition = specs;
			_elem.style.webkitTransition = specs;
			_elem.style.height = _endPos;
		}

		adBox.style.visibility = "visible";

		var timer = setInterval(advance, 200);
		var phase = 0;
        //called on expand
		CRAFTWW.advanceFrm = function(){
			removechildTextHolder2();
			phase = 3;
			advance();
		};
        //called on collapse
		CRAFTWW.advanceFrmCollapse = function(){
			removechildTextHolder2();
			phase = 2;
			advance();

			mintCoverExpand.style.opacity = 0;
			copy_f7.style.opacity = 1;
			copy_f8.style.opacity = 1;

			copy_f9.style.opacity = 0;
			copy_f10.style.opacity = 0;
			copy_f11.style.opacity = 0;
			copy_f12.style.opacity = 0;
			copy_f13.style.opacity = 0;

			setPos(copy_f14, "hidden", 260, 178, 9);
			setPos(copy_f15, "hidden", 378, 221, 9);
	  		 
	    	setPos(logo, "hidden", 769, 328, 4);
			setPos(legal, "hidden", 37, 394, 10);
		};

			function removechildTextHolder2(){
			while (textHolder2.hasChildNodes()) {   
            textHolder2.removeChild(textHolder2.firstChild);
				}
			}


		function advance(){
 
			clearInterval(timer);
			
			if(phase === 0){
                expand_button_bk.style.transition = 'opacity .1s ease-in-out 0s';
				expand_button_bk.style.webkitTransition = 'opacity .1s ease-in-out 0s';
				expand_button_bk.style.opacity = 1;

				createCaption();	
				timer = setInterval(advance, 3000);
			
			}

			if(phase === 1){

                expand_button_bk.style.transition = 'opacity 0s ease-in-out 0s';
				expand_button_bk.style.webkitTransition = 'opacity 0s ease-in-out 0s';
				expand_button_bk.style.opacity = 0;

                expand_button_wt.style.transition = 'opacity 0s ease-in-out 0s';
				expand_button_wt.style.webkitTransition = 'opacity 0s ease-in-out 0s';
				expand_button_wt.style.opacity = 1;

				copy_f7.style.transition = 'opacity .4s ease-in-out .6s';
				copy_f7.style.webkitTransition = 'opacity .4s ease-in-out .6s';
				copy_f7.style.opacity = 1;
				
				timer = setInterval(advance, 4000);
			}

			if(phase === 2){
				tweenDelay += 0.75;
				slide(copy_f7, "30px", 0.35, 'ease-in-out', tweenDelay);

                //copy_f8 is "Click to Expand"
				copy_f8.style.transition = 'opacity .4s ease-in-out .6s';
				copy_f8.style.webkitTransition = 'opacity .4s ease-in-out .6s';
				copy_f8.style.opacity = 1;
                //phase = 3;
				//timer = setInterval(advance, 4000);
				//End of collaped animation
			}

			if(phase === 3){
				console.log("advance phase === 3");
				
				createCaption2();
				
				close_button.style.transition = 'opacity .4s ease-in-out 0s';
				close_button.style.webkitTransition = 'opacity .4s ease-in-out 0s';
				close_button.style.opacity = 1;

				timer = setInterval(advance, 4000);
			}

			if(phase === 4){
				mintCoverExpand.style.transition = 'opacity .4s ease-in-out .8s';
				mintCoverExpand.style.webkitTransition = 'opacity .4s ease-in-out .8s';
				mintCoverExpand.style.opacity = 1;
				copy_f10.style.transition = 'opacity .2s ease-in-out 0s';
				copy_f10.style.webkitTransition = 'opacity .2s ease-in-out 0s';
				copy_f10.style.opacity = 1;

              
                logo.style.transition = 'opacity .4s ease-in-out 0s';
				logo.style.webkitTransition = 'opacity .4s ease-in-out 0s';
				logo.style.opacity = 1;

				timer = setInterval(advance, 3000);
			}

			if(phase === 5){
				copy_f10.style.transition = 'opacity .4s ease-in-out 0s';
				copy_f10.style.webkitTransition = 'opacity .4s ease-in-out 0s';
				copy_f10.style.opacity = 0;

                copy_f11.style.transition = 'opacity .4s ease-in-out .8s';
				copy_f11.style.webkitTransition = 'opacity .4s ease-in-out .2s';
				copy_f11.style.opacity = 1;

				timer = setInterval(advance, 2800);
			}
			
			if(phase === 6){
				copy_f11.style.transition = 'opacity .4s ease-in-out 0s';
				copy_f11.style.webkitTransition = 'opacity .4s ease-in-out 0s';
				copy_f11.style.opacity = 0;

                copy_f12.style.transition = 'opacity .4s ease-in-out .8s';
				copy_f12.style.webkitTransition = 'opacity .4s ease-in-out .2s';
				copy_f12.style.opacity = 1;

				timer = setInterval(advance, 2800);
			}

			if(phase === 7){
				copy_f12.style.transition = 'opacity .4s ease-in-out 0s';
				copy_f12.style.webkitTransition = 'opacity .4s ease-in-out 0s';
				copy_f12.style.opacity = 0;

                copy_f13.style.transition = 'opacity .4s ease-in-out .8s';
				copy_f13.style.webkitTransition = 'opacity .4s ease-in-out .2s';
				copy_f13.style.opacity = 1;

				timer = setInterval(advance, 2800);
			}

			if(phase === 8){
				copy_f13.style.transition = 'opacity .4s ease-in-out 0s';
				copy_f13.style.webkitTransition = 'opacity .4s ease-in-out 0s';
				copy_f13.style.opacity = 0;

                copy_f14.style.transition = 'opacity .4s ease-in-out .8s';
				copy_f14.style.webkitTransition = 'opacity .4s ease-in-out .2s';
				copy_f14.style.opacity = 1;

				copy_f15.style.transition = 'opacity .4s ease-in-out .8s';
				copy_f15.style.webkitTransition = 'opacity .4s ease-in-out .8s';
				copy_f15.style.opacity = 1;

 				tweenDelay=0;
				slidetop(logo, "305px", 0.5, 'ease-in-out', tweenDelay);

				legal.style.transition = 'opacity .4s ease-in-out .3s';
				legal.style.webkitTransition = 'opacity .4s ease-in-out .3s';
				legal.style.opacity = 1;

				//timer = setInterval(advance, 2800);
			}

			phase ++;
		}
	};
})();