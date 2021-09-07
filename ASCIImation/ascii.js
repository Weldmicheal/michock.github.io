window.onload = function () {
    "use strict";

    //disable stop at the beginning 
    document.getElementById("stop").disabled = true;
    //Play Controls
    document.getElementById("start").onclick = beginAnimation;
    document.getElementById("stop").onclick = stopAnimation;

    //Animation
    document.getElementById("animation").onchange = selectAnimation;
    document.getElementById("fontsize").onchange = changeFontSize;
    document.getElementById("turbo").onchange = changeSpeed;
    var myAnimation = null;
}

function selectAnimation() {

    var animationType = document.getElementById("animation").value;
    document.getElementById("textarea").value = ANIMATIONS[animationType];

}
function beginAnimation(speedType) {

    //disable start and animation selection whilst enable stop when animation has started:
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    document.getElementById("stop").disabled = false;

    var speed;

    var animation = ANIMATIONS[document.getElementById("animation").value];
    frames = animation.split("=====\n");
    var i = 0;
    if (speedType === "Turbo") {
        clearInterval(myAnimation);
        if (document.getElementById("turbo").checked) {
            speed = 50;
        } else {
            speed = 250;
        }
    } else {
        if (document.getElementById("turbo").checked) {
            speed = 50;
        } else {
            speed = 250;
        }
    }
    function showFrames() {
        if (i < frames.length) {
            document.getElementById("textarea").value = frames[i];
        } else {
            i = 0;
            document.getElementById("textarea").value = frames[i];
        }
        i += 1;
    }
    myAnimation = setInterval(showFrames, speed);
}

function stopAnimation() {
    //Enable start and animation selection whilst disable stop when stop button is clicked
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(myAnimation);
    myAnimation = null;
    document.getElementById("textarea").value = ANIMATIONS[document.getElementById("animation").value];
}

function changeFontSize() {
    var fontSize = document.getElementById("fontsize").value;
    document.getElementById("textarea").style.fontSize = fontSize + "pt";
}

function changeSpeed() {
    if (myAnimation !== null) {
        beginAnimation("Turbo");
    }
}
