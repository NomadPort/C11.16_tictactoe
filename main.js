
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
    $(this).removeAttr('onclick');
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
    function start_game(){
        send_message(symbol + ' Go First')
    }
    function send_message(msg) {
        $('.who_turn').text(msg)
    }


/* reset game: on click game board reverts to blank*/
function reset_game() {
    $('.cell').empty();
    $('.cell').click(cell_clicked())
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

function create_NxN_TTTboard (N) {

    for (var x = 0; x < N; x++) {
        console.log("crazy");
        for (var y = 0; y < N; y++) {
            console.log("nuts");
            $(".game_body").append($("<div>",
                {
                    class: "cell"
                }));
        }
        $(".game_body").append("<br>");
    }
}

function nxnTTT () {                            // get winning_condition array of arrays for any odd number n
    var n = 5;                                  // there will be 2n+2 arrays that are each of n length each
    var horizontal_winners = [];
    var vertical_winners = [];
    var diagonal_1_winner = [];
    var diagonal_2_winner = [];

    create_NxN_TTTboard (n);

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
    var final_winning_conditions = inter2.concat(diagonal_2_winner);
    console.log("final: ", final_winning_conditions);
}

