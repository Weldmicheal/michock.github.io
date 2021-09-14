/*
init = function() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }        
};
window.onload = function(){
init();
}*/



$(document).ready(function (){
    $("#controls").click(function(){
        alert("hello");
    });
  
    var init = function(){
        $("#puzzlearea div").each(function(index, value){
             // calculate x and y for this piece
            var x = ((index % 4) * 100) ;
            var y = (Math.floor(index / 4) * 100) ; 
            // set basic style and background
            $(this).addClass("puzzlepiece");
            $(this).css({"left": x + "px", "top": y + "px", "background-image": "url('background.jpg')",
                            "background-position": -x + "px " + (-y) + "px"});
           
            //store x and y for later
            $(this).data('x', x)
            $(this).data( 'y', y)
            console.log($(this).data('x') + " " + $(this).data('y'))


        })
    }
    init();

    $("div").click(function (){
        $(this).css({"left": 300 + "px", "top" : 300 + "px"});
    })
    
});

