/* This is for the N x N tic tac toe.  Index2.html uses this as its base js file. */

$(document).ready(function () {
    $(".start").click(nxnTTT);
    $('.reset').click(reset_game);
});

var n = 13;
var count;
var whose_turn = "P_one";
var player1 =null;
var player2 =null;
var winning_conditions;

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
        for (var y = 0; y < n; y++) {
            $(".game_body2").append($("<div>",
                {
                    class: "cell",
                    height: 85/n+"%",               // make height and width fit within the div game_body2
                    width:  70/n+"%",
                    onclick:"next_move(this);",     // give cells ability to switch turns
                    cell_num: (n*x)+y               // give each cell its own cell_num
                }));
        }
        $(".game_body2").append("<br>");            // start the next n cells on another row
    }

}
    0,1     2,3     4,5     6,7     8,9
                                            i * (n-m+1) + j
i:  0,0     1,1     2,2     3,3     4,4

j:  0,1     0,1     0,1     0,1     0,1

    0,0     +2,+2   +4,+4   +6,+6   +8,+8

function mWinsInNxN (m, n) {
    for (var i=0; i < n; ++i) {                 // for horizontal rows
        horizontal_winners[i] = [];
        for (var j=0; j <= (n-m); ++j) {
            for (var k=j; k < (m+j); ++k) {
                horizontal_winners[j + i + (n-m)].push((i*n) + k);
            }
        }
    }

    for (i=0; i < n; i++) {                     // for vertical columns
        vertical_winners[i] = [];
        for (j=0; j <= (n-m); j++) {
            for (var k=j; k < (m+j); ++k)
            vertical_winners[2*i+j].push(k*n + j);
        }
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

    var inter1 = horizontal_winners.concat(vertical_winners);   // begin concatenating the 4 arrays of arrays into 1 array of arrays
    console.log("horiz + verti = ", inter1);
    var inter2 = inter1.concat(diagonal_1_winner);
    console.log("inter2 = ", inter2);
    winning_conditions = inter2.concat(diagonal_2_winner);
    console.log("final: ", winning_conditions);

    // there will be 2n+2 arrays that are each of n length each
}

function cell_clicked () {
    var fun_phrase = [" would trample a kid on Black Friday." , " runs shirtless to show off body." , " is a total brand whore." , " will find a reason to take shirt off." , " makes bed before going out 'just in case'." , " will drive 3+ hours in hopes of hooking up." , " probably buys 'likes' on instagram." , " loses keys while driving."]; // these will be used once there a game has been won (lost)

    console.log("winning_conditions: ", winning_conditions);

    $("#P1_name_slot").text(P1.name);
    $("#P1_games_slot").text(P1.games_won);
    $("#P2_name_slot").text(P2.name);
    $("#P2_games_slot").text(P2.games_lost);
    $("#games_played_slot").text(P2.games_played);

    var num = $(this).attr('cell_num');    // the number is really a string, so need to convert to a number
    num = Number(num);

    if (whose_turn === "P_one") {           // each player will take ownership of the cells (pushing onto his/her array
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

    if (length >= n) {                      // don't check for winning condition unless player has X'd or O'd n cells

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
    location.reload();
}