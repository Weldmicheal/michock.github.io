
window.onload = function () {
    
    //document.getElementById("decorate").onclick = delayIncrease;
    document.getElementById("bling").onchange = popAlert;
};
let timer = null;
function delayIncrease (){
    console.log(timer);   
    if(timer === null){
        timer = setInterval(biggerFont, 500);

    }else {
        clearInterval(timer);
        timer = null;
    }
}
function biggerFont (){
    var element = document.getElementById('usertext');
    var style = window.getComputedStyle(element).getPropertyValue('font-size');
    var size = parseInt(style); 
    // console.log(size);
    console.log(window.getComputedStyle(element).getPropertyValue('font-family'));
    document.getElementById("usertext").style.fontSize =  size + 2 + "pt";
}

function popAlert () {
    alert("Bling changed");
    if (document.getElementById('bling').checked){
        var text = document.getElementById("usertext");
        text.style.fontWeight = "bold";
        text.style.textDecoration = "underline";
        text.style.color = "green";        
        document.body.style.backgroundImage = "url('hundred.jpg')";        
    }else {
        var text = document.getElementById("usertext");
        text.style.fontWeight = "normal";
        text.style.textDecoration = "none";
        text.style.color = "black";
        document.body.style.backgroundImage = "none";
        
    }
}