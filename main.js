
$(document).ready(function () {
    $(".cell").click(cell_clicked);         // Call function cell_clicked when clicking on a cell button
    $('.game_body').click(interaction);

});

var player1 =null;
var player2 =null;

function cell_clicked () {
    var winning_conditions = [ [0, 4, 8], [2, 4, 6], [0,1,2], [3,4,5], [0,3,6], [1,4,7], [2,5,8], [6,7,8] ];
    // there are 8 winning conditions for 3 x 3 tic tac toe
    //   0    1    2
    //   3    4    5
    //   6    7    8

    var P1_array = [4, 6, 7, 5, 0];
    var length = P1_array.length;

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
                        console.log("We have a winner!!");
                        return;                 // if we have a winner, no need to check for winning condition any longer
                    }
                }
            }
        }
    }
}

     function interaction(p1 , p2){
     }

     /*
     var player1 = new player_template();

     square_template = function () {
     this.make_X = function() {
     $(this).text('X');
     };
     this.make_O = function() {
     $(this).text('O');
     };
     this.clearXO = function() {
     $(this).text(' ');
     }
     };

     player_template = function () {
     this.name = "Cung";
     this.games_played = 3;
     this.games_won = 4;
     this.one_owned;
     this.two_owned;
     this.three_owned;
     this.A_owned;
     this.B_owned;
     this.C_owned;
     this.increase_A_by_one();
     this.increase_B_by_one();
     this.increase_C_by_one();
     };
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

