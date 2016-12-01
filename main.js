
$(document).ready(function () {
    $(".cell").click(cell_clicked);         // Call function cell_clicked when clicking on a number button
    $('.game_body').click(interaction);

});

var P1_array = [];
var P1_A = 0;
var P1_B = 0;
var P1_C = 0;
var P1_1 = 0;
var P1_2 = 0;
var P1_3 = 0;

function cell_clicked () {
    var letter;
    var number;

    var cell_index = $(this).text();
    cell_index = cell_index.trim();         // .trim Removes white space from the string/text.
    console.log("in cell_clicked and cell_index is: " + cell_index);

    letter = cell_index.substring(0,1);
    number = cell_index.substring(1);
    console.log("letter: " + letter, " number: ", number);

    if (letter === "A") {
        P1_A++;
    } else if (letter === "B") {
        P1_B++;
    } else {
        P1_C++;
    }

    if (number === "1") {
        P1_1++;
    } else if (number === "2") {
        P1_2++;
    } else {
        P1_3++;
    }

    console.log("A: " + P1_A + "  B: " + P1_B + "  C: " + P1_C + "  1: " + P1_1 + "  2: " + P1_2 + "  3: " + P1_3);

    // P1_array.push(cell_index);

    /* console.log("numString: " + numString);
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
} // end of function number_clicked

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
