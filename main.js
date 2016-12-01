
var message = 'X';

$(document).ready(function () {
    $(".cell").click(cell_clicked);         // Call function square_clicked when clicking on a number button
    $('.game_body').click(interaction);
});

function cell_clicked () {

    var cell_index = $(this).text();
    cell_index = cell_index.trim();         // .trim Removes white space from the string/text.
    console.log("in cell clicked and cell_index is: " + cell_index);

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

function interaction(p1 , p2){
}





var symbol = 'X';
function start_game(){
    send_message(symbol + ' Go First')
}
function send_message(message) {
    $('.who_turn').text(message)
}

function next_move(square) {
    square.innerText = symbol;
    switch_turn();
}
function switch_turn(){
    if (symbol === 'X'){
        symbol = 'O';
    }
    else {
        symbol = 'X';
    }
    send_message("it's " + symbol)
}