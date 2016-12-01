
$(document).ready(function () {
    $(".cell").click(cell_clicked);         // Call function cell_clicked when clicking on a cell button
    $('.game_body').click(interaction);
    $(".header h1").click(nxnTTT);

});

var whose_turn = "P1";

var player1 =null;
var player2 =null;

var P1 = new player_template();
var P2 = new player_template();

P2.change_turn_to_false();

var P1_array = [];
var P2_array = [];

function cell_clicked () {
    var fun_phrase = [" would trample a kid on Black Friday." , " runs shirtless to show off body." , " is a total brand whore." , " will find a reason to take shirt off." , " makes bed before going out 'just in case'." , " will drive 3+ hours in hopes of hooking up." , " probably buys 'likes' on instagram." , " loses keys while driving."]
    var winning_conditions = [ [0,4,8], [2,4,6], [0,1,2], [3,4,5], [0,3,6], [1,4,7], [2,5,8], [6,7,8] ];
    // there are 8 winning conditions for 3 x 3 tic tac toe
    //   0    1    2
    //   3    4    5
    //   6    7    8

    $(".stats_body p").append(P1.name);
    $(".stats_body h2").append(P1.games_played);
    $(".stats_body h3").append(P1.games_won);
    $(".stats_body h4").append(P2.name);
    $(".stats_body h5").append(P2.games_played);
    $(".stats_body h6").append(P2.games_lost);

    var num = $(this).attr('cell_num');    // the number is really a string, so need to convert to a number
    num = Number(num);

    if (whose_turn === "P1") {
        P1_array.push(num);
        var length = P1_array.length;
        player_array = P1_array;

        var winner_name = P1.name;
        var loser_name = P2.name;
        whose_turn = "P2";
        console.log("num: " + num + "   P1_array: " + P1_array);
    } else {
        P2_array.push(num);
        var length = P2_array.length;
        player_array = P2_array;

        var winner_name = P2.name;
        var loser_name = P1.name;
        whose_turn = "P1";

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
                        $(".game_body h5").text(winner_name + " has won!  " + loser_name + fun_phrase[f]);
                        P1.increment_games_played();
                        P1.increment_games_won();
                        P2.increment_games_played();
                        P2.increment_games_lost();
                        $(".stats_body p").append(P1.name);
                        $(".stats_body h3").append(P1.games_won);
                        $(".stats_body h4").append(P2.name);
                        $(".stats_body h5").append(P2.games_played);
                        $(".stats_body h6").append(P2.games_lost);
                        return;                 // if we have a winner, no need to check for winning condition any longer
                    }
                } // end of inner for loop
            } // end of middle for loop
        } // end of outer for loop
    } // end of outer if block
}

function interaction(p1 , p2){
    var first_player_name = $(".header p").text();
    var second_player_name = $(".header h6").text()
    console.log("1st player name: " + first_player_name + "  2nd player name: " + second_player_name);

    P1.name = first_player_name;
    P2.name = second_player_name;
}

var square_template = function () {
    this.make_X = function() {
        $(this).text('X');
    };
    this.make_O = function() {
        $(this).text('O');
    };
    this.clearXO = function() {
        $(this).text(' ');
    };
};

function player_template() {
    this.name = "No Name Yet";
    this.turn = true;
    this.games_played = 0;
    this.games_won = 0;
    this.games_lost = 0;

    this.change_turn_to_true = function() {
        this.turn = true;
    }
    this.change_turn_to_false = function() {
        this.turn = false;
    }
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
    square.innerText = symbol;
    switch_turn();
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
    send_message(player + "It's " + symbol + " turn.");
}

/* reset game: on click game board reverts to blank*/
function reset() {
    $('.cell').innerHTML = '';
}



function nxnTTT () {
    var n = 3;
    var win_conditions = [];

    for (var i=0; i < n; ++i) {                 // for horizontal rows
        for (var j=0; j < n; ++j) {
            win_conditions[i][j].push((i*n) + j);
        }
    }

    for (i=0; i < n; i++) {                     // for vertical columns
        for (j=0; j < n; j++) {
            win_conditions[(i+n)][j].push((j*n) + i);
        }
    }

    for (j=0; j < n; ++j) {
        win_conditions[2*n][j].push(j * (n+1));
    }

    for (j=0; j < n; j++) {
        win_conditions[2*n+1][j].push((j+1)(n-1));
    }

    console.log("win conditions: " + win_oonditions);
}

