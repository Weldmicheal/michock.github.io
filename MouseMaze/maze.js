var error = false;
var start = false;
var win = false;
function reset(){
    start = true;
    error = false;
    $(".boundary").css("background-color", "#eeeeee"); 
    result("Game started!");
}
function makeRed() {
    if(start){
        $(".boundary").css("background-color", "red")
        error = true;
        result("Sorry, you Lost. :[ ");
    }
}
function end(){
    if(!error && start){
        result("You Win! :]");
        start = false;
        win = true;
        
    }else if (error){
        result("Sorry, you Lost. :[");
    }
}
function result(message){
    $("h2#status").text(message);
}

function restart(){
    if(win){
        result("Click the \"S\" to begin.");
        win = false;
    }
}
$(document).ready(function(){
    
    $("#start").click(reset);    
    $(".boundary").mouseover(makeRed);           
    $("#end").mouseover(end);
    $("#maze").mouseleave(makeRed);
    $("#end").mouseleave(restart);
});