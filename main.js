
$(document).ready(function () {
    $(".square").click(square_clicked);         // Call function square_clicked when clicking on a number button

});

function square_clicked () {

    var square_index = $(this).text();
    square_index = square_index.trim();         // .trim Removes white space from the string/text.
    console.log("in square clicked and square_index is: " + square_index);

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

square_template = function () {
    this.make_X = function() {
        $(this).text('X');
    }
    this.make_O = function() {
        $(this).text('O');
    }
    this.clearXO = function() {
        $(this).text(' ');
    }
}

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
}$(document).ready(function () {
    $(".square").click(square_clicked);         // Call function number_clicked when clicking on a number button

});


function square_clicked () {

    var square_index = $(this).text();
    square_index = square_index.trim();         // .trim Removes white space from the string/text.
    console.log("in square clicked and square_index is: " + square_index);

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

square_template = function () {
    this.make_X = function() {
        $(this).text('X');
    }
    this.make_O = function() {
        $(this).text('O');
    }
    this.clearXO = function() {
        $(this).text(' ');
    }
}

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
}

function start_game (){

}

function send_message(){

}

