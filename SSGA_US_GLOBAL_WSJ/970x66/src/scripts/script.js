var adDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("ad");

    useInAppCloseButton();
    addEventListeners();
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
    //document.getElementById("expand-button").addEventListener("click", expand);
    document.getElementById("expand_button_wt").addEventListener("click", expand);
    document.getElementById("expand_button_bk").addEventListener("click", expand);

    document.getElementById("close-button").addEventListener("click", collapse);
    //document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
    document.getElementById("bgExit").addEventListener("click", clickthrough);
    //document.getElementById("user-action-button").addEventListener("click", userActionCounter);
}

function expand() {
    console.log("expand");
    CRAFTWW.advanceFrm();

    EB.expand();
    adDiv.classList.remove("collapsed");
    adDiv.classList.add("expanded");
    //CRAFTWW.expandPanel();
    
}

function collapse() {
    adDiv.classList.remove("expanded");
    adDiv.classList.add("collapsed");
    EB.collapse();
    CRAFTWW.advanceFrmCollapse();
}

function clickthrough() {
    console.log("clickthrough");
    EB.clickthrough();
}

function userActionCounter() {
    EB.userActionCounter("CustomInteraction");
}

window.addEventListener("load", initEB);
