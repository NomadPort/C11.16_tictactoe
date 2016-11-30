/**
 * Created by Vernon on 11/30/2016.
 */

$(document).ready(function () {
    $(".square").click(square_clicked);         // Call function number_clicked when clicking on a number button
    $(".operator").click(operator_clicked);     // for any 4 of the operator (/ X - +) buttons
    $(".equal").click(equal_clicked);           // for equal "=" sign
    $(".special").click(special_clicked);       // for the clear keys (C and CE)
});

function square_clicked () {

    var square_index = $(this).text();

    var numString = $(this).text();
    numString = numString.trim();   // .trim Removes white space from the string/text.

    // console.log("numString: " + numString);
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
    this.
}

player1