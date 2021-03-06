/**
 * Created by Vernon on 12/2/2016.
 */

$(document).ready(function () {
    $(".header h1").click(nxnTTT);
});

var count;
var whose_turn = "P_one";
var player1 =null;
var player2 =null;
var winning_conditions;
var n = 9;

var P1 = new player_template();
P1.name = "Frank";
P1.games_played = 7;
P1.games_won = 3;
P1.games_lost = 41;

var P2 = new player_template();
P2.name = "Janie";
P2.games_played = 29;
P2.games_won = 15;
P2.games_lost = 1;

var P1_array = [];
var P2_array = [];


function create_NxN_TTTboard () {
    for (var x = 0; x < n; x++) {
        console.log("crazy");
        for (var y = 0; y < n; y++) {
            console.log("nuts");
            $(".game_body2").append($("<div>",
                {
                    class: "cell",
                    height: 85/n+"%",
                    width:  70/n+"%",
                    onclick:"next_move(this);",
                    cell_num: (n*x)+y
                }));
        }
        $(".game_body2").append("<br>");
    }
}

function nxnTTT () {                            // get winning_condition array of arrays for any odd number n
    var horizontal_winners = [];
    var vertical_winners = [];
    var diagonal_1_winner = [];
    var diagonal_2_winner = [];

    create_NxN_TTTboard (n);

    $(".cell").click(cell_clicked);

    for (var i=0; i < n; ++i) {                 // for horizontal rows
        horizontal_winners[i] = [];
        for (var j=0; j < n; ++j) {
            horizontal_winners[i].push((i*n) + j);
        }
    }

    for (i=0; i < n; i++) {                     // for vertical columns
        vertical_winners[i] = [];
        for (j=0; j < n; j++) {
            vertical_winners[i].push((j*n) + i);
        }
    }

    for (i=0; i < 1; ++i) {
        diagonal_1_winner[i] = [];
        for (j=0; j < n; ++j) {                     // for diagonal going upper left corner to bottom right corner
            diagonal_1_winner[i].push(j * (n+1));
        }
    }

    for (i=0; i < 1; ++i) {
        diagonal_2_winner[i] = [];
        for (j = 0; j < n; j++) {                     // for diagonal going from bottom left corner to upper right corner
            diagonal_2_winner[i].push((j + 1) * (n - 1));
        }
    }

    console.log("horizontal winners: ", horizontal_winners + "   vertical winners: ", vertical_winners + "   diagonal_1_winner: ", diagonal_1_winner + "  diagonal_2_winner: " + diagonal_2_winner);

    var inter1 = horizontal_winners.concat(vertical_winners);
    console.log("horiz + verti = ", inter1);
    var inter2 = inter1.concat(diagonal_1_winner);
    console.log("inter2 = ", inter2);
    winning_conditions = inter2.concat(diagonal_2_winner);
    console.log("final: ", winning_conditions);

    // there will be 2n+2 arrays that are each of n length each
}

function cell_clicked () {
    var fun_phrase = [" would trample a kid on Black Friday." , " runs shirtless to show off body." , " is a total brand whore." , " will find a reason to take shirt off." , " makes bed before going out 'just in case'." , " will drive 3+ hours in hopes of hooking up." , " probably buys 'likes' on instagram." , " loses keys while driving."];

    console.log("winning_conditions: ", winning_conditions);

    $("#P1_name_slot").text(P1.name);
    $("#P1_games_slot").text(P1.games_won);
    $("#P2_name_slot").text(P2.name);
    $("#P2_games_slot").text(P2.games_lost);
    $("#games_played_slot").text(P2.games_played);

    var num = $(this).attr('cell_num');    // the number is really a string, so need to convert to a number
    num = Number(num);

    if (whose_turn === "P_one") {
        P1_array.push(num);
        var length = P1_array.length;
        player_array = P1_array;

        var winner_name = P1.name;
        var loser_name = P2.name;
        whose_turn = "P_two";
        console.log("num: " + num + "   P1_array: " + P1_array);
    } else {
        P2_array.push(num);
        var length = P2_array.length;
        player_array = P2_array;

        var winner_name = P2.name;
        var loser_name = P1.name;
        whose_turn = "P_one";

        console.log("num: " + num + "   P2_array: " + P2_array);
    }

    if (length >= n) {                      // don't check for winning condition unless player has X'd or O'd 3 cells

        for (var m = 0; m < (2*n+2); ++m) {       // go thru each winning condition
            count = 0;

            for (var i = 0; i < length; ++i) { // go thru the player's cells
                box_num = player_array[i];

                for (var k = 0; k < n; k++) {
                    if (box_num === winning_conditions[m][k]) {  // see if player's cell matches a cell from the chosen winning condition
                        count++;
                    }

                    console.log("m: " + m + "  k: " + k + "  cell value: " + winning_conditions[m][k] + "  count: " + count);

                    if (count === n) {
                        var f = Math.floor(Math.random()*8);
                        $(".game_body2 h3").text(winner_name + " has won!  " + loser_name + fun_phrase[f]);
                        $('.cell').prop( "onclick", null );
                        //using jquery to remove onlick button when we have winner.
                        $('.cell').off();
                        //turn off click.

                        P1.increment_games_played();
                        P1.increment_games_won();
                        P2.increment_games_played();
                        P2.increment_games_lost();
                        $("#P1_name_slot").text(P1.name);
                        $("#P1_games_slot").text(P1.games_won);
                        $("#P2_name_slot").text(P2.name);
                        $("#P2_games_slot").text(P2.games_lost);
                        $("#games_played_slot").text(P2.games_played);
                        return;                 // if we have a winner, no need to check for winning condition any longer
                    }
                } // end of inner for loop
            } // end of middle for loop
        } // end of outer for loop
    } // end of outer if block
}

function player_template() {
    this.name = "No Name Yet";
    this.turn = true;
    this.games_played = 0;
    this.games_won = 0;
    this.games_lost = 0;

    this.change_turn_to_true = function() {
        this.turn = true;
    };
    this.change_turn_to_false = function() {
        this.turn = false;
    };
    this.increment_games_played = function() {
        this.games_played += 1;
    };
    this.increment_games_won = function() {
        this.games_won += 1;
    };
    this.increment_games_lost = function() {
        this.games_lost += 1;
    };
    this.array;
}

var symbol = 'X';
var player = 'Frank';
function start_game(){
    send_message(player + ' with ' +symbol + ' Go First')
}

function send_message(message) {
    $('.who_turn').text(message);
}
function next_move(square) {
    if (square.innerText === "") {
        square.innerText = symbol;
        switch_turn();
    }else {
        return false;
    }
}

function switch_turn(){
    if (symbol === 'X'){
        symbol = 'O';
        player = 'Janie'
    }
    else {
        symbol = 'X';
        player = 'Frank'
    }
    send_message(player + " 's " + symbol + " turn.");
}

/* reset game: on click game board reverts to blank*/
function reset_game() {
    $('.cell').empty();
    $('.game_body').load();
    count = 0;
    /*  $('.cell').attr('onclick', 'next_move(.cell);');*/
}

function next_move(square) {
    if(square.innerText != ""){

    }else {
        square.innerText = symbol;
        switch_turn();
    }
}

// initialize function initializes the leap motion controller
// imgSrc1 is a string that holds the path or url to an image
// width1 and height1 are strings that sets the width and heights of the respective image. e.g. '250px' or '1.5em';
// sensitivity a number that determines how sensitive the leap motion images are to your movement.
// for the sensitivity 1 is normal. 0.5 is half as sensitive. 2 is twice as sensitive, etc.
// imgSrc2, width2, and height2 are optional parameters that create a second image on screen for a second hand
// if the last 3 parameters aren't passed in, then only one image ever pops up


var leapMotion = initialize("job_photo_man.png", "5em", "5em", 1);

// the initialize function also returns an object that holds functions for the different gestures
// for this example ive stored the return object in a variable called leapMotion
// the returned object also holds an items array that holds up 2 different items each representing a hand
// for this example the items array would be leapMotion.array with leapMotionarray[0] being the first item
// each item also holds a position array that holds 2 values.
// the 0th index of the position array holds the x position of the item relative to the left of the screen
// the 1st index of the position array holds the y position of the item relative to the top of the screen

// the methods below are the functions that run for each respective gesture. can be custom made to do whatever
leapMotion.circle = function() {
    $(".game_body").css("background-color","lightblue");
    var element = document.elementFromPoint(leapMotion.items[0].position[0], leapMotion.items[0].position[1])
};
leapMotion.keyTap = function() {
    $(".game_body2").css("background-color","purple");
};
leapMotion.screenTap = function() {
    $(".game_body2").css("background-color","lightyellow");
};
leapMotion.swipe = function() {
    $(".game_body2").css("background-color","lightpink");
};