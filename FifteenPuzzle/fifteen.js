
$(document).ready(function () {

    const SQUAREWIDTH = 100;
    const SQUAREHEIGHT = 100;

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


        })
    }
    var column = 3;
    var row = 3;
    init();
    function xPosition(index) {
        return (index % 4) * 100;
    }
    function yPosition(index) {
        return Math.floor(index / 4) * 100;
    }
    $("#shufflebutton").click(function () {
       $("#shufflebutton").off();

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
        
        var flag = true;

        $("#puzzlearea div").each(function (idx, val) {

		var top = parseInt($(this).position().top);

		var left = parseInt($(this).position().left);
            console.log("x: " + left + " Y: " + top)

		if (left != (idx%4*100) || top != parseInt(idx/4)*100) //checks if each piece matches its left and top position

		{

			flag = false;

		}

	});

    if(flag){
        alert("You Win...! Shuffle and Try Again")
        $("#shufflebutton").on();
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

   

    var isTileMovable = function (div) {
        var blankSquareX = row * SQUAREWIDTH;
        var blankSquareY = column * SQUAREHEIGHT;

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

        var tmpX = x / 100;
        var tmpY = y / 100;
        $(div).css({
            top: column * SQUAREHEIGHT,
            left: row * SQUAREWIDTH,
        });
        row = tmpX;
        column = tmpY;
    }

    var moveBlankSquare = function (tiles) {
        let totalTiles = tiles.length;
        let index = Math.floor(Math.random() * totalTiles);
        var div = $("#puzzlearea div")[index];
        let divX = $(div).position().left;
        let divY = $(div).position().top;
        $(div).css({
            top: column * SQUAREHEIGHT,
            left: row * SQUAREWIDTH,
        });
        row = divX / 100;
        column = divY / 100;
    };
    


    

});

