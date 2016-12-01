
$(document).ready(function () {
    $(".cell").click(cell_clicked);         // Call function cell_clicked when clicking on a cell button
    $('.game_body').click(interaction);

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
var P1_array = [];

function cell_clicked () {
    var winning_conditions = [ [0,4,8], [2,4,6], [0,1,2], [3,4,5], [0,3,6], [1,4,7], [2,5,8], [6,7,8] ];
    // there are 8 winning conditions for 3 x 3 tic tac toe
    //   0    1    2
    //   3    4    5
    //   6    7    8

    var length = P1_array.length;

    $(".stats_body p").append(P1.name);
    $(".stats_body h2").append(P2.name);
    $(".stats_body h3").append(P1.games_played);
    $(".stats_body h4").append(P2.games_played);

    var numString = $(this).text();
    console.log("numString:" + numString);
    var num1 = Number(numString);
    P1_array.push(num1);
    console.log("num1: " + num1);

    if (length >= 3) {                      // don't check for winning condition unless player has X'd or O'd 3 cells

        for (var m = 0; m < 8; ++m) {       // go through each winning condition
            count = 0;

            for (var i = 0; i < length; ++i) { // go thru the player's cells
                P1_num = P1_array[i];

                for (var n = 0; n < 3; n++) {
                    if (P1_num === winning_conditions[m][n]) {  // see if player's cell matches a cell from the chosen winning condition
                        count++
                    }

                    console.log("m: " + m + "  n: " + n + "  cell value: " + winning_conditions[m][n] + "  count: " + count);

                    if (count === 3) {
                        $(".game_body h5").text(winner_name + " has won!  Word to the mother!")
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
    this.name;
    this.games_played;
    this.games_won;
    this.array;
}
    /*
 this.increase_A_by_one() {

    };
 this.increase_B_by_one() {

    };
 this.increase_C_by_one();
 */

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

