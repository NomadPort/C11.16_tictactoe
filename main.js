
$(document).ready(function () {
    $(".cell").click(cell_clicked);         // Call function cell_clicked when clicking on a cell button
    $('.game_body').click(interaction);
    $(".header h1").click(nxnTTT);

});

var player1 =null;
var player2 =null;

var P1 = new player_template();
var P2 = new player_template();

P1.name = "Bobby";
P1.games_played = 3;

P2.name = "Jane";
P2.games_played = 5;

var winner_name = P1.name;
var loser_name = P2.name;
var P1_array = [];

function cell_clicked () {
    var fun_phrase = [" wears her pants backwards.", " thinks that driving home in the rain is fun.", " can light a flame by burping.", " drives a stick shift with 3 hands.", " accelerates to a stop.", " sleeps all the time.", " thinks heavy thoughts.", " flagellates."];

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

    var num1 = $(this).attr('cell_num');    // the number is really a string, so need to convert to a number
    num1 = Number(num1);
    P1_array.push(num1);
    var length = P1_array.length;

    console.log("num1: " + num1 + "P1_array: " + P1_array);

    if (length >= 3) {                      // don't check for winning condition unless player has X'd or O'd 3 cells

        for (var m = 0; m < 8; ++m) {       // go thru each winning condition
            count = 0;

            for (var i = 0; i < length; ++i) { // go thru the player's cells
                P1_num = P1_array[i];

                for (var n = 0; n < 3; n++) {
                    if (P1_num === winning_conditions[m][n]) {  // see if player's cell matches a cell from the chosen winning condition
                        count++
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
                        $(".stats_body h2").append(P1.games_played);
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
    this.games_played = 0;
    this.games_won = 0;
    this.games_lost = 0;

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
    function start_game(){
        send_message(symbol + ' Go First')
    }
    function send_message(msg) {
        $('.who_turn').text(msg)
    }


/* reset game: on click game board reverts to blank*/
function reset() {
    $('.cell').innerHTML = '';
}

    function next_move(square) {
        square.innerText = symbol;
        switch_turn();
    }

    function switch_turn(){
        if (symbol === 'X'){
            symbol = 'O';
            player1 = null;
            player2 = '0';
        }
        else {
            symbol = 'X';
            player1 = 'X';
            player2 = 'O';
        }
    }

function nxnTTT () {
    var n = 3;
    var win_conditions = [];

    for (var i=0; i < n; ++i) {                 // for horizontal rows
        for (var j=0; j < n; ++j) {
            win_conditions[i][j] = (i*n) + j;
        }
    }

    for (i=0; i < n; i++) {                     // for vertical columns
        for (j=0; j < n; j++) {
            win_conditions[(i+n)][j] = (j*n) + i;
        }
    }

    for (j=0; j < n; ++j) {
        win_conditions[2*n][j] = j * (n+1);
    }

    for (j=0; j < n; j++) {
        win_conditions[2*n+1][j] = (j+1)(n-1);
    }

    console.log("win conditions: " + win_oonditions);
}

