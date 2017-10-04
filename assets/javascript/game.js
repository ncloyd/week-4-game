$(document).ready(function() {

    // global variables:
    var randomnumber; //undefined
    var lose = [];
    var win = [];
    var previous = 0;
    var crystalImages = ["assets/images/orange.png", "assets/images/green.png", "assets/images/red.png", "assets/images/purple.png", ];

    // $(".randomnumber").on("click", function() {

    // on page load need:
    // number between 19-120 chosen as the random number
    // new random number generated every time user wins or loses    

    // random number between 1-12 to be applied to each crystal
    // crystal number value shouldn't change until
    //       window is refreshed or new game

    //as each crystal is clicked the value should be added to the previous click
    // until user count equals the random number
    // if it equals then we add a win
    // if user score is greaater than random number value we increment a lose

    var resetandStart = function() {

        // $(".crystalContainer").empty();

        randomnumber = Math.floor(Math.random() * 101) + 19;

        $(".randomnumber").html("Random result: " + randomnumber);


        for (var i = 0; i < 4; i++) {

            var random = Math.floor(Math.random() * 11) + 1;


            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            crystal.html(random);

        }
        //crystal.append("<img>");
        //  var crystalImg = $("<img>");
        //  // $(crystalImg).attr("src",  crystalImages[i]);
        // $(".crystal img").attr("src", crystalImages[i]);
        //  // console.log(crystalImages[i]);

        $(".crystalContainer").append(crystal);
        // $(".crystal").append(crystalImg);

    }

    resetandStart();

    var reset = function() {


    }

    //event delegation is important

    $(document).on('click', ".crystal", function() {

        var num = parseInt($(this).attr('data-random'));
        previous += num;

        if (previous === randomnumber) {
            win++;
            console.log("you win!");
            $("#win").html("Wins: " + win);
            previous = 0;
            resetandStart();

        } else if (previous > randomnumber) {
            lose++;
            console.log("you lose!");
            $("#lose").html("Losses: " + lose);
            previous = 0;
            resetandStart();
        }

        $(".score").html("Your total score is: " + previous);
        console.log(previous);
    });

});


// var img = new Image();
// var div = document.getElementById('crystals');

// img.onload = function (){
// div.appendChild(img);
// };

// img.src='assets/images/orange.png';



// $("#crystal1").on("click", function() {
//     var crystalval1 = Math.floor(Math.random() * 12) + 1;
//     });

// $("#crystal2").on("click", function() {
//     var crystalval2 = Math.floor(Math.random() * 12) + 1;
//     console.log(crystalval2);
// });

// $("#crystal3").on("click", function() {
//     var crystalval3 = Math.floor(Math.random() * 12) + 1;
//     console.log(crystalval3);
// });

// $("#crystal4").on("click", function() {
//     var crystalval4 = Math.floor(Math.random() * 12) + 1;
//     console.log(crystalval4);
// });


//random number we are trying to reach

//Option 1 Game design notes:
//The random number shown at the start of the game should be between 19 - 120.
//Each crystal should have a random hidden value between 1 - 12.

// display 4 jewel buttons
//jewel buttons need to have a random value assigned to them
//random computer value needs to change with each game
//user score needs to calculate with each click of the jewel
// win count increases if the players score matches the random computer value
// lose count increases if score goes above random number
// game restrts with a win or lose