
window.onload = function () {
    
    document.getElementById("decorate").onclick = delayIncrease;
    document.getElementById("bling").onchange = popAlert;
};
function delayIncrease (){   
    setInterval(biggerFont, 500);   
}
function biggerFont (){
    var textArea = document.getElementById('usertext');
    var fontSize = window.getComputedStyle(textArea).getPropertyValue('font-size');
    var size = parseInt(fontSize); 
    // console.log(size);
    console.log(window.getComputedStyle(textArea).getPropertyValue('font-family'));
    document.getElementById("usertext").style.fontSize =  size + 2 + "pt";
}


function popAlert () {      
    alert("Bling changed");
    if (document.getElementById('bling').checked){
        var text = document.getElementById("usertext");
        text.style.fontWeight = "bold";
        text.style.textDecoration = "underline";
        text.style.color = "green";        
        document.body.style.backgroundImage = "url('hundreddollar.png')";  
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";      
    }else {
        var text = document.getElementById("usertext");
        text.style.fontWeight = "normal";
        text.style.textDecoration = "none";
        text.style.color = "black";
        document.body.style.backgroundImage = "none";
        
    }
}