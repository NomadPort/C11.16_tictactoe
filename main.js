
$(document).ready(function () {
    $(".cell").click(cell_clicked);         // Call function cell_clicked when clicking on a cell button
    $('.game_body').click(interaction);

});

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
    /*
    console.log("numString: " + numString);
     var isItEmpty = array1[index];

     if (isItEmpty === " ") {
     array1[index] = numString;
     var new_h4 = $("<h4>", {
     text: " " + array1[index] + " "
     });
     $(".container1 .display").append(new_h4);
     } else {
     array1[index] = array1[index] + numString;
     // console.log("index: " + index + array1[index]);
     $(".container1 .display h4:last-child").text(array1[index]);
     }
     */
 // end of function number_clicked

var square_template = function () {
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

/*
var player_template = function () {
    this.name;
    this.games_played;
    this.games_won;
    this.one_owned;
    this.two_owned;
    this.three_owned;
    this.A_owned;
    this.B_owned;
    this.C_owned;
    this.increase_A_by_one();
    this.increase_B_by_one();
    this.increase_C_by_one();
}

var player1 = new player_template()


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

function start_game (){

}

function send_message(){

}

function interaction(p1 , p2){
}
