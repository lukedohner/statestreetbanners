var CRAFTWW = CRAFTWW || {};

(function(){
    CRAFTWW.startAd = function() {

        if (checkFallback() ) {
            var adDiv;

            var copyL1Txt;
            var copyL1bTxt;
            var copyL2Txt;
            var copyL3Txt;
            var copyL4Txt;
            var copyL4bTxt;
            var copyL5Txt;
            var copyL5bTxt;

            var copyHidden1;
            var copyHidden2;
            var copyHidden3;

            var copyWhite1;
            var copyWhite4;
            var copyWhite5;

            var copy1;
            var copy2;
            var copy3;
            var copy4;
            var copy5;

            // var colcopyl1 = document.getElementById("colcopyl1");
            // var colcopyl2 = document.getElementById("colcopyl2");
            // var colcopyl3 = document.getElementById("colcopyl3");
            // var colcopyl4 = document.getElementById("colcopyl4");

            var frame7;
            var frame8;    
            var frame9;           
            var frame10;
            var frame11a;
            var frame11b;
            var frameLegal;

            var holder;
            var closeButton;
            var panel_phase;
            var panel_timer;

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

            function useInAppCloseButton() {
                var sdkData = EB.getSDKData();

                if (sdkData !== null) {
                    if (sdkData.SDKType === "MRAID") {
                        // set sdk to use custom close button
                        EB.setExpandProperties({
                            useCustomClose: true
                        });
                    }
                }
            }

            function addEventListeners() {
                document.getElementById("clickToExpand").addEventListener("click", expand);
                document.getElementById("expand-button").addEventListener("click", expand);
                document.getElementById("close-button").addEventListener("click", collapse);
                document.getElementById("clickthrough-button1").addEventListener("click", clickthrough1);
                document.getElementById("clickthrough-button2").addEventListener("click", clickthrough2);
            }

            //// BELOW SIZMEK CODE ////////

            function expand() {
                EB.expand();
                console.log("expand");

                adDiv.classList.remove("collapsed");
                adDiv.classList.add("expanded");

                createExpandContent();
                call_expand_animation();


                phase = 0;
                panel_phase = 0;    
                setPos(copy1, "visible", 710, 1, 2);
                setPos(copy2, "visible", 420, 30, 3);
                setPos(copy3, "visible", 700, 60, 4);
                setPos(copy4, "visible", 290, 90, 5);
                setPos(copy5, "visible", 580, 120, 6);

                setPos(frame7, "hidden", 353, 113, 8);
                setPos(frame8, "hidden", 200, 113, 9);
                setPos(frame9, "hidden", 184, 113, 10);
                setPos(frame10, "hidden", 282, 113, 11);
                setPos(frame11a, "hidden", 275, 96, 12);
                setPos(frame11b, "hidden", 347, 136, 13);
                setPos(frameLegal, "hidden", 0, 0, 50);    

                set_expand_elems();
            }

            function collapse() {
                console.log("collapse");

                adDiv.classList.remove("expanded");
                adDiv.classList.add("collapsed");
                EB.collapse();
                panel_phase = 999;
                clearInterval(panel_timer);
                //kill(null, [frame7, frame8, frame9, frame10, frame11a, frame11b, frameLegal, copy1, copy2, copy3, copy4, copy5, copy6]);

                panel_phase = 0;

                // setPos(colcopyl1, "visible", 620, -11, 2);
                // setPos(colcopyl2, "visible", 456, 21, 3);
                // setPos(colcopyl3, "visible", 510, 44, 4);
                // setPos(colcopyl4, "visible", 456, 65, 5);


                setPos(copy1, "visible", 710, -1, 2);
                setPos(copy2, "visible", 420, 30, 3);
                setPos(copy3, "visible", 700, 60, 4);
                setPos(copy4, "visible", 290, 90, 5);
                setPos(copy5, "visible", 580, 120, 6);

                setPos(frame7, "hidden", 353, 113, 8);
                setPos(frame8, "hidden", 200, 113, 9);
                setPos(frame9, "hidden", 184, 113, 10);
                setPos(frame10, "hidden", 282, 113, 11);
                setPos(frame11a, "hidden", 275, 96, 12);
                setPos(frame11b, "hidden", 347, 136, 13);
                setPos(frameLegal, "hidden", 0, 0, 50);    
            }

            function clickthrough1() {
                callClickTag();
            }

            function clickthrough2() {
                callClickTag();              
            }

            function startAd() {
                adDiv = document.getElementById("ad");

                if (typeof useInAppCloseButton === "function")  {
                    useInAppCloseButton();
                }
                
                if (typeof addEventListeners === "function")  {
                    addEventListeners();
                }

                ////////////////////////////////////////////////
                //////  start code from standard banner - RJ ///////

                //var collapseCopy = document.getElementById("collapseCopy");
                var colcopyl1 = document.getElementById("colcopyl1");
            var colcopyl2 = document.getElementById("colcopyl2");
            var colcopyl3 = document.getElementById("colcopyl3");
            var colcopyl4 = document.getElementById("colcopyl4");

            var colcopyHidden1 = document.getElementById("colcopy-hidden1");
            var colcopyHidden2 = document.getElementById("colcopy-hidden2");
            var colcopyHidden3 = document.getElementById("colcopy-hidden3");


                //var opportunity = document.getElementById("opportunity");
                var expandBtn = document.getElementById("expand-button");
                var clickToExpand = document.getElementById("clickToExpand");
                var logo = document.getElementById("logo");
                var closeButton = document.getElementById("close-button");
                //var guide = document.getElementById("guide");
                var clickthrough1 = document.getElementById("clickthrough-button1");
                var clickthrough2 = document.getElementById("clickthrough-button2");

                setPos(closeButton, "visible", 908, -8, 25);
                //setPos(collapseCopy, "visible", 300, 0, 21);
                setPos(colcopyl1, "visible", 620, -1, 2);
                setPos(colcopyl2, "visible", 456, 21, 3);
                setPos(colcopyl3, "visible", 510, 44, 4);
                setPos(colcopyl4, "visible", 456, 65, 5);



                setPos(clickthrough1, "visible", 0, 0, 21);
                setPos(clickthrough2, "visible", 0, 0, 21);
                
                //setPos(opportunity, "hidden", 311, 0, 23);
                setPos(expandBtn, "visible", 908, -8, 22);
                
                setPos(clickToExpand, "hidden", 567, 28, 24);

                var timer = setInterval(advance, 200);
                var phase = 0;             
                //////  start code from COLLAPSED banner
                function advance(){
                    var tweenDelay = 0;
                    clearInterval(timer);
                        
                    if(phase === 0){
                     console.log("phase===0")       
                    //slide(collapseCopy, "-1300px", 7, 'linear', 0); 
                    slide(colcopyl1, "-913px", 11, 'linear', 0);
                    slide(colcopyl2, "1213px", 12, 'linear', 0);
                    slide(colcopyl3, "-913px", 13, 'linear', 0);
                    slide(colcopyl4, "1213px", 14, 'linear', 0);
                    //fade(opportunity, 1, 'ease-in-out', 3.7);
                    timer = setInterval(advance, 3000);
                    }
                    if(phase === 1){
                        console.log("phase===1")
                    var colcopyl1w = colcopyl1.offsetLeft;
                    var colcopyl2w = colcopyl2.offsetLeft;
                    var colcopyl3w = colcopyl3.offsetLeft;
                    var colcopyl4w = colcopyl4.offsetLeft;
                    slide(colcopyl1, (colcopyl1w +'px'), 40, 'linear', 0.5);
                    slide(colcopyl2, (colcopyl2w +'px'), 42, 'linear', 0.5);
                    slide(colcopyl3, (colcopyl3w +'px'), 44, 'linear', 0.5);
                    slide(colcopyl4, (colcopyl4w +'px'), 46, 'linear', 0.5);

                    colorChange(colcopywhite1, 0.75, 40, 'linear', 0.5);
                    colorChange(colcopywhite4, 0.75, 40, 'linear', 0.5);

                    fadeOut(colcopyl1txt, 0.75, 'ease-in-out', 0);
                     fadeOut(colcopyl1btxt, 0.75, 'ease-in-out', 0);
                    fadeOut(colcopyl2txt, 0.75, 'ease-in-out', 0);
                    fadeOut(colcopyl2btxt, 0.75, 'ease-in-out', 0);
                    fadeOut(colcopyl3txt, 0.75, 'ease-in-out', 0);
                    fadeOut(colcopyl4txt, 0.75, 'ease-in-out', 0);
                    fadeOut(colcopyl4btxt, 0.75, 'ease-in-out', 0);
                    
                    //slide(opportunity, "243px", 0.6, 'ease-in-out', 0); 

                    timer = setInterval(advance, 1000);
                    }
                    if(phase === 2){
                        console.log("phase===2")
                   var mq = window.matchMedia( "(max-device-width: 480px)" );

               if( mq.matches ) {
                        fade(colcopyHidden1, 0.5, 'ease-in-out', 0.2);
                        fade(colcopyHidden2, 0.5, 'ease-in-out', 0.2);

                        rePosition(colcopyl1, 271, 32, 0.5, 'ease-in-out', tweenDelay);
                        //rePosition(colcopy2, 305, 32, 0.5, 'ease-in-out', tweenDelay);
                        rePosition(colcopyl4, 455, 32, 0.5, 'ease-in-out', tweenDelay);
                        fade(clickToExpand, 0.3, 'ease-in-out', 0.4);       
                    } else {
                        fade(colcopyHidden1, 0.5, 'ease-in-out', 0.2);
                        fade(colcopyHidden2, 0.5, 'ease-in-out', 0.2);
                        
                        rePosition(colcopyl1, 271, 32, 0.5, 'ease-in-out', tweenDelay);
                        //rePosition(colcopyl2, 262, 32, 0.5, 'ease-in-out', tweenDelay);
                        rePosition(colcopyl4, 455, 32, 0.5, 'ease-in-out', tweenDelay);                 
                        fade(clickToExpand, 0.3, 'ease-in-out', .9);
                    }

                    timer = setInterval(advance, 1000);
                    }

                    phase ++;
                }

                ///////  end code from standard banner  ////////////
                ////////////////////////////////////////////////////

            }

            function initEB() {
                if (!EB.isInitialized()) {
                    EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
                } else {
                    startAd();
                }
            }
            startAd();            

            function set_expand_elems(){
                copyL1Txt = document.getElementById("copy-l1-txt");
                copyL1bTxt = document.getElementById("copy-l1b-txt");
                copyL2Txt = document.getElementById("copy-l2-txt");
                copyL3Txt = document.getElementById("copy-l3-txt");
                copyL4Txt = document.getElementById("copy-l4-txt");
                copyL4bTxt = document.getElementById("copy-l4b-txt");    
                copyL5Txt = document.getElementById("copy-l5-txt");
                copyL5bTxt = document.getElementById("copy-l5b-txt"); 

                copyHidden1 = document.getElementById("copy-hidden1");
                copyHidden2 = document.getElementById("copy-hidden2");
                copyHidden3 = document.getElementById("copy-hidden3");

                copyWhite1 = document.getElementById("copy-white1");
                copyWhite4 = document.getElementById("copy-white4");
                copyWhite5 = document.getElementById("copy-white5");
                
                copy1 = document.getElementById("copy-l1");
                copy2 = document.getElementById("copy-l2");
                copy3 = document.getElementById("copy-l3");
                copy4 = document.getElementById("copy-l4");
                copy5 = document.getElementById("copy-l5");

                frame7 = document.getElementById("frame-7");
                frame8 = document.getElementById("frame-8");    
                frame9 = document.getElementById("frame-9");                     
                frame10 = document.getElementById("frame-10");
                frame11a = document.getElementById("frame-11a");
                frame11b = document.getElementById("frame-11b");
                frameLegal = document.getElementById("frame-legal");
                closeButton = document.getElementById("close-button");

                setPos(copy1, "visible", 710, 1, 2);
                setPos(copy2, "visible", 420, 30, 3);
                setPos(copy3, "visible", 700, 60, 4);
                setPos(copy4, "visible", 290, 90, 5);
                setPos(copy5, "visible", 580, 120, 6);

                setPos(frame7, "hidden", 0, 0, 8);
                setPos(frame8, "hidden", 0, 0, 9);
                setPos(frame9, "hidden", 0, 0, 10);
                setPos(frame10, "hidden", 282, 113, 11);
                setPos(frame11a, "hidden", 275, 96, 12);
                setPos(frame11b, "hidden", 347, 136, 13);
                setPos(frameLegal, "hidden", 0, 0, 50);

                setPos(logo, "visible", 878, 195, 30);

                setPos(closeButton, "visible", 908, -8, 1225);
            }

            function call_expand_animation(){
                
                set_expand_elems();

                var tweenDelay;
                panel_timer = setInterval(panel_advance, 200);
                panel_phase = 0;

                function panel_advance(){
                    var tweenDelay = 0;
                    clearInterval(panel_timer);

                    if(panel_phase === 0){
                        slide(copy1, "-180px", 6, 'linear', 0);
                        slide(copy2, "600px", 7, 'linear', 0);
                        slide(copy3, "-110px", 8, 'linear', 0);
                        slide(copy4, "600px", 6, 'linear', 0);
                        slide(copy5, "-210px", 7, 'linear', 0);

                        panel_timer = setInterval(panel_advance, 3000);
                    }

                    if(panel_phase === 1){
                        var copy1w = copy1.offsetLeft;
                        var copy4w = copy4.offsetLeft;
                        var copy5w = copy5.offsetLeft;

                        slide(copy1, (copy1w +'px'), 40, 'linear', 0.5);
                        slide(copy4, (copy4w +'px'), 44, 'linear', 0.5);
                        slide(copy5, (copy5w +'px'), 46, 'linear', 0.5);            

                        colorChange(copyWhite1, 0.75, 40, 'linear', 0.5);
                        colorChange(copyWhite4, 0.75, 40, 'linear', 0.5);
                        colorChange(copyWhite5, 0.75, 40, 'linear', 0.5);

                        fadeOut(copyL1Txt, 0.5, 'ease-in-out', 0);
                        fadeOut(copyL1bTxt, 0.5, 'ease-in-out', 0);
                        fadeOut(copyL2Txt, 0.5, 'ease-in-out', 0);
                        fadeOut(copyL3Txt, 0.5, 'ease-in-out', 0);
                        fadeOut(copyL4Txt, 0.5, 'ease-in-out', 0);
                        fadeOut(copyL4bTxt, 0.5, 'ease-in-out', 0);            
                        fadeOut(copyL5Txt, 0.5, 'ease-in-out', 0);
                        fadeOut(copyL5bTxt, 0.5, 'ease-in-out', 0);           

                        panel_timer = setInterval(panel_advance, 1000);
                    }

                    if(panel_phase === 2){
                        var mq = window.matchMedia( "(max-device-width: 480px)" );
                            
                        if( mq.matches ) {
                            rePosition(copy1, 162, 110, 0.5, 'ease-in-out', tweenDelay);
                            rePosition(copy4, 74, 110, 0.5, 'ease-in-out', tweenDelay);
                            rePosition(copy5, 360, 110, 0.5, 'ease-in-out', tweenDelay);             
                        } else {
                            rePosition(copy1, 182,  110, 0.5, 'ease-in-out', 0);
                            rePosition(copy4, 104, 110, 0.5, 'ease-in-out', 0);
                            rePosition(copy5, 364, 110, 0.5, 'ease-in-out', 0);
                        }

                        fade(copyHidden1, 1, 'ease-in-out', 0);
                        fade(copyHidden2, 1, 'ease-in-out', 0);
                        fade(copyHidden3, 1, 'ease-in-out', 0); 

                        panel_timer = setInterval(panel_advance, 2500);          
                    }

                    if(panel_phase === 3){
                        tweenDelay += 0;
                    
                        fadeOut(copy1, 0.5, 'linear', tweenDelay);
                        fadeOut(copy4, 0.5, 'linear', tweenDelay);
                        fadeOut(copy5, 0.5, 'linear', tweenDelay);  
                            
                        fadeOut(copyHidden1, 0.5, 'linear', tweenDelay);
                        fadeOut(copyHidden2, 0.5, 'linear', tweenDelay);
                        fadeOut(copyHidden3, 0.5, 'linear', tweenDelay);    

                        fade(frame7, 1, 'ease-in-out', tweenDelay);

                        tweenDelay += 4;
                        tweenDelay = tweenDelay*1000;

                        panel_timer = setInterval(panel_advance, 3500);
                    }

                    if(panel_phase === 4){        
                        tweenDelay += 0;

                        fadeOut(frame7, 0.2, 'ease-in-out', tweenDelay);
                        fade(frame8, 1, 'ease-in-out', tweenDelay);

                        tweenDelay += 4;
                        tweenDelay = tweenDelay*1000;
                            
                        panel_timer = setInterval(panel_advance, 3000);
                    }

                    if(panel_phase === 5){

                        tweenDelay += 0;

                        fadeOut(frame8, 1, 'ease-in-out', tweenDelay);
                        fade(frame9, 1, 'ease-in-out', tweenDelay);

                        tweenDelay += 4.5;
                        tweenDelay = tweenDelay*1000;
                            
                        panel_timer = setInterval(panel_advance, 3000);
                    }    

                    if(panel_phase === 6){
                        tweenDelay += 0;

                        fadeOut(frame9, 1, 'ease-in-out', tweenDelay);
                        fade(frame11a, 1, 'ease-in-out', tweenDelay);
                        fade(frame11b, 1, 'ease-in-out', tweenDelay);

                        tweenDelay += 4.5;
                        tweenDelay = tweenDelay*1000;
                            
                        panel_timer = setInterval(panel_advance, 3000);
                    }

                    if(panel_phase === 7){        
                        tweenDelay += 0;

                        fadeOut(frame11a, 1, 'ease-in-out', tweenDelay);
                        fadeOut(frame11b, 1, 'ease-in-out', tweenDelay);
                        fadeOut(logo, 1, 'ease-in-out', tweenDelay);            
                        fade(frameLegal, 1, 'ease-in-out', tweenDelay);

                        tweenDelay += 1.5;
                        tweenDelay = tweenDelay*1000;
                            
                        panel_timer = setInterval(panel_advance, 1000);
                    }  
                    
                    if(panel_phase === 8){        
                        tweenDelay += 2;

                        fadeOut(frameLegal, 1, 'ease-in-out', tweenDelay);
                        fade(logo, 1, 'ease-in-out', tweenDelay); 
                        fade(frame11a, 1, 'ease-in-out', tweenDelay);
                        fade(frame11b, 1, 'ease-in-out', tweenDelay);
                    }

                    panel_phase ++;
                }    

            }

            function createExpandContent(){
                holder = document.getElementById("holder");
                holder.innerHTML = "";
                holder.innerHTML = '<div id=cta><div id=copy-l1 class=copy><span id=copy-l1-txt>housing currency, challenging, environment, weakened currency, boom, bust, world market volatility, complex</span> <span id=copy-white1>investing</span> <span id=copy-l1b-txt>trends, devalued currency, challenging, complex environment,</span></div><div id=copy-l2 class=copy><span id=copy-l2-txt>world market volatility, market volatility, investing trends, natural disasters, devalued currency, challenging, complex environment</span></div><div id=copy-l3 class=copy><span id=copy-l3-txt>weakened currency, boom, bust, housing currency, challenging, complex environment, weakened currency, boom, bust, housing market, bubble</span></div><div id=copy-l4 class=copy><span id=copy-l4-txt>world market volatility, investing trends, natural disasters, devalued currency, complex</span> <span id=copy-white4>world</span> <span id=copy-l4b-txt>environment, weakened currency, challenging,</span></div><div id=copy-l5 class=copy><span id=copy-l5-txt>market volatility, boom, challenging, bust, housing market, bubble, complex environment, challenging,</span> <span id=copy-white5>complex</span> <span id=copy-l5b-txt>market volatility, weakened currency, complex environment,</span></div><div><span id=copy-hidden1>The</span> <span id=copy-hidden2>of</span> <span id=copy-hidden3>is</span></div><div id=frame-7><img src=images/copy-f7.png></div><div id=frame-8><img src=images/copy-f8.png></div><div id=frame-9><img src=images/copy-f9.png></div><div id=frame-10><img src=images/copy-f10.png></div><div id=frame-11a><img src=images/copy-f11a.png></div><div id=frame-11b><img src=images/copy-f11b.png></div><div id=frame-legal><img src=images/copy-legal.png></div><div id=logo><img src=images/logo.png width=142px height="72px"></div></div>';

                set_expand_elems();
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

            window.addEventListener("load", initEB);

        }
        function useFallback() {
                var rv = -1;
                var ua = navigator.userAgent;
                var re  = new RegExp( "MSIE ([0-9]{1,}[\.0-9]{0,})" );

                if (re.exec(ua) !== null)
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
                    };

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