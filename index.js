var letters = ["X", "O"]
var player1 = letters[0];
var player2 = letters [1];
var whoIsPlaying = 0;
var startGame = false;

function randomLetter(){
    var randomNum = Math.floor(Math.random() * 2); 
    player1 = letters[randomNum];

    if (player1 === letters[0]) {
        player2 = letters[1];
    }
    else if (player1 === letters[1]) {
        player2 = letters[0];
    }

}


function check(player){
    if (($("#one").text() === player) &&  ($("#two").text() === player) &&  ($("#three").text() === player )) {
        $("p.write-up").text(player + " wins!");
        
        
    }

    else if (($("#four").text() === player) &&  ($("#five").text() === player) &&  ($("#six").text() === player )) {
        $("p.write-up").text(player + " wins!");
       
    }

    else if (($("#seven").text() === player) &&  ($("#eight").text() === player) &&  ($("#nine").text() === player )) {
        $("p.write-up").text(player + " wins!");
    
    }

    else if (($("#one").text() === player) &&  ($("#four").text() === player) &&  ($("#seven").text() === player )) {
        $("p.write-up").text(player + " wins!");
        
    }

    else if (($("#two").text() === player) &&  ($("#five").text() === player) &&  ($("#eight").text() === player )) {
        $("p.write-up").text(player + " wins!");
       
    }

    else if (($("#three").text() === player) &&  ($("#six").text() === player) &&  ($("#nine").text() === player )) {
        $("p.write-up").text(player + " wins!");
      
    }

    else if (($("#seven").text() === player) &&  ($("#five").text() === player) &&  ($("#three").text() === player )) {
        $("p.write-up").text(player + " wins!");
       
    }

    else if (($("#one").text() === player) &&  ($("#five").text() === player) &&  ($("#nine").text() === player )) {
        $("p.write-up").text(player + " wins!");
       
    }


}


function restartGame(){
    $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
    whoIsPlaying = 0;
    $("p.write-up").text("Who needs a pen and paper when you have got this!");
}

randomLetter();


$("button").click(function(){
    restartGame();
})

$("td").click(function(){


    if (!startGame) {

        whoIsPlaying++;

        if ((whoIsPlaying % 2 === 0)){
            //  player 2
            var userClick = $(this);
            userClick.addClass("pressed");
        
            setTimeout(function(){
                userClick.removeClass("pressed");
            }, 300);
            
            if (userClick.text() === ""){
                userClick.text(player2);
            } 
            
            check(player2);

        } else {
        //  player 1
            var userClick = $(this);
            userClick.addClass("pressed");
        
            setTimeout(function(){
                userClick.removeClass("pressed");
            }, 300);
        
            if (userClick.text() === ""){
                userClick.text(player1);
            } 
           
            check(player1);
        }
    
    }
        })

    




