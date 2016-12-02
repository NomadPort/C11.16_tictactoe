
$(document).ready(function () {
    $(".cell").click(cell_clicked);         // Call function cell_clicked when clicking on a cell button
    $(".reset").click(reset_button);

});

var count;
var whose_turn = "P_one";
var player1 =null;
var player2 =null;

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

function cell_clicked () {
    var fun_phrase = [" would trample a kid on Black Friday." , " runs shirtless to show off body." , " is a total brand whore." , " will find a reason to take shirt off." , " makes bed before going out 'just in case'." , " will drive 3+ hours in hopes of hooking up." , " probably buys 'likes' on instagram." , " loses keys while driving."];

    var winning_conditions = [ [0,4,8], [2,4,6], [0,1,2], [3,4,5], [0,3,6], [1,4,7], [2,5,8], [6,7,8] ];
    // there are 8 winning conditions for 3 x 3 tic tac toe
    //   0    1    2
    //   3    4    5
    //   6    7    8

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

    if (length >= 3) {                      // don't check for winning condition unless player has X'd or O'd 3 cells

        for (var m = 0; m < 8; ++m) {       // go thru each winning condition
            count = 0;

            for (var i = 0; i < length; ++i) { // go thru the player's cells
                box_num = player_array[i];

                for (var n = 0; n < 3; n++) {
                    if (box_num === winning_conditions[m][n]) {  // see if player's cell matches a cell from the chosen winning condition
                        count++;
                    }
                    console.log("m: " + m + "  n: " + n + "  cell value: " + winning_conditions[m][n] + "  count: " + count);
                    if (count === 3) {
                        var f = Math.floor(Math.random()*8);
                        $(".game_body h3").text(winner_name + " has won!  " + loser_name + fun_phrase[f]);
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
    send_message(player + ' with ' +symbol + ' Go First');
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

    //
    // function next_move(square) {
    //     if(square.innerText != ""){
    //
    //     }else {
    //         square.innerText = symbol;
    //         switch_turn();
    //     }
    // }

function reset_button() {
     $('.cell').empty();
    // location.reload();
    console.log('has been reset');
    $('.cell').attr('onclick', 'next_move(.cell);');
}

