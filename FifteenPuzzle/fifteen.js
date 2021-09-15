const WIDTH = 100;
const HEIGHT = 100;
var column = 3;
var row = 3;

$(document).ready(function () {
   
    var init = function () {

        $("#puzzlearea div").each(function (index, value) {
            // calculate x and y for this piece
            var x = xPosition(index);
            var y = yPosition(index);
            // set basic style and background
            $(this).addClass("puzzlepiece");
            $(this).css({
                "left": x + "px", "top": y + "px", "background-image": "url('tree.jpg')",
                "background-position": -x + "px " + (-y) + "px"
            });
            $(this).data('orgX', x)
            $(this).data('orgY', y)
            //console.log($(this).data('orgX') + " " + $(this).data('orgY'))


        })
    }
    init();
    function xPosition(index) {
        return (index % 4) * 100;
    }
    function yPosition(index) {
        return Math.floor(index / 4) * 100;
    }
    $("#shufflebutton").click(function () {
        init();
        let tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        let randomizedPuzzle = shuffleTiles(tileArray);

        $("#puzzlearea div").each(function (idx) {
            let newIdx = randomizedPuzzle[idx];
            var x = xPosition(newIdx);
            var y = yPosition(newIdx);
            var oldX = xPosition(idx);
            var oldY = yPosition(idx);
            $(this).addClass("puzzlepiece");
            $(this).css({
                "left": x + "px", "top": y + "px", "background-image": "url('tree.jpg')",
                "background-position": -oldX + "px " + (-oldY) + "px"
            });
            $(this).data('x', x)
            $(this).data('y', y)
        });
        moveBlankSquare(randomizedPuzzle);
    });

    $("#puzzlearea div").hover(
        function () {
            var div = $(this);
            var checkMov = isTileMovable(div);
            if (checkMov) {
                $(this).addClass("movablepiece");
            }
        },
        function () {
            $(this).removeClass("movablepiece");
        }
    );

    $("#puzzlearea div").click(function () {

        $("#shufflebutton").off();
        var div = $(this);
        var checkMov = isTileMovable(div);
        if (checkMov) {
            movePiece(div);
           
        } else {
            alert("Tile can't move");
        }        
        
    });


    var shuffleTiles = function (tiles) {
        let totalShuffle = tiles.length;
        for (let i = 0; i <= 200; i++) {
            let index1 = Math.floor(Math.random() * totalShuffle);
            let index2 = Math.floor(Math.random() * totalShuffle);
            let tmp = tiles[index1];
            tiles[index1] = tiles[index2];
            tiles[index2] = tmp;
        }
        return tiles;
    };

    var moveBlankSquare = function (tiles) {
        let totalTiles = tiles.length;
        let index = Math.floor(Math.random() * totalTiles);
        var div = $("#puzzlearea div")[index];
        let divX = $(div).position().left;
        let divY = $(div).position().top;
        $(div).css({
            top: column * HEIGHT,
            left: row * WIDTH,
        });
        row = divX / 100;
        column = divY / 100;
    };

    var isTileMovable = function (div) {
        var blankSquareX = row * WIDTH;
        var blankSquareY = column * HEIGHT;

        var tilePosition = $(div).position();
        var x = tilePosition.left;
        var y = tilePosition.top;

        var rightPosition = x + 100;
        var topPosition = y - 100;
        var leftPosition = x - 100;
        var downPosition = y + 100;        
        
        var leftCheck = false;
        var rightCheck = false;
        var topCheck = false;
        var downCheck = false;

        if(rightPosition == blankSquareX && y == blankSquareY){
            leftCheck = true;
        }
        if(leftPosition == blankSquareX && y == blankSquareY){
            rightCheck = true;
        }
        if(topPosition == blankSquareY && x == blankSquareX){
            topCheck = true
        }
        if(downPosition == blankSquareY && x == blankSquareX){
            downCheck = true;
        }

        if(leftCheck || rightCheck || topCheck || downCheck){
            return true;
        }

        return false;
    };


    var movePiece = function (div) {
        var tilePosition = div.position();
        var x = tilePosition.left;
        var y = tilePosition.top;

        var tempX = x / 100;
        var tempY = y / 100;
        $(div).css({
            top: column * HEIGHT,
            left: row * WIDTH,
        });
        row = tempX;
        column = tempY;
    }

    
    


    

});

