$(document).ready(function () {
    $(".start_three").click(threeByThree);
    $(".start_six").click(sixBySix);
    $('.restart').click(restart_game);
});
function threeByThree(){
    n = Number($(".start_three").val());
    nxnTTT();
}
function sixBySix(){
    n = Number($(".start_six").val());
    nxnTTT();
}
var n;
var count;
var whose_turn = "P_one";
var winning_conditions;

function player_template() {
    this.name = "No Name Yet";
}
var P1 = new player_template();
P1.name = "Frank";
var P2 = new player_template();
P2.name = "Janie";
var P1_array = [];
var P2_array = [];
var frank_stat = null;
var janie_stat = null;

function  create_NxN_TTTboard(n){
    $(".game_body2").html('');
    $(".start").prop('disabled', true);
    console.log('this is game body 2' + $(".game_body2").text().length );
        for (var x = 0; x < n; x++) {
            for (var y = 0; y < n; y++) {
                $(".game_body2").append($("<button>",
                    {
                        class: " cell btn btn-default col-xs" +"-"+12/n,
                        height: 35/n+"vw",
                        cell_num: (n*x)+y // give each cell its own cell_num
                    }));
            }
        }
}

function nxnTTT () {
    $(".start_three").prop('disabled',true);
    $(".start_six").prop('disabled',true);
    // get winning_condition array of arrays for any odd number n
    var horizontal_winners = [];
    var vertical_winners = [];
    var diagonal_1_winner = [];
    var diagonal_2_winner = [];

    create_NxN_TTTboard (n);
    start_game();

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
        for (j = 0; j < n; j++) {                     // for diagonal going from bottom upper right to bottom left
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

    // there will be 2n+2 arrays that are each of n length each// there will be 2n+2 arrays that are each of n length each
}



function cell_clicked () {
    // these will be used once there a game has been won (lost)
    var fun_phrase = [" would trample a kid on Black Friday." , " runs shirtless to show off body." , " didn't trip, the floor looked like it needed a hug" , " will find a reason to take shirt off." , " is a smart person, but just does stupid things" , " will drive 3+ hours in hopes of hooking up." , " probably buys 'likes' on instagram." , " loses keys while driving.","really need a high-five"];
    if($(this).text()!==''){
        return;
    }
    // the number is really a string, so need to convert to a number
    var num = $(this).attr('cell_num');
    num = Number(num);
    next_move(this);
    if (whose_turn === "P_one") {
        // each player will take ownership of the cells (pushing onto his/her array
        P1_array.push(num);
        var length = P1_array.length;
        var player_array = P1_array;
        var winner_name = P1.name;
        var loser_name = P2.name;
        whose_turn = "P_two";
    } else {
        P2_array.push(num);
        var length = P2_array.length;
        var player_array = P2_array;
        var winner_name = P2.name;
        var loser_name = P1.name;
        whose_turn = "P_one";
    }

    // don't check for winning condition unless player has X'd or O'd n cells
    if (length >= n) {

        for (var m = 0; m < (2*n+2); ++m) {       // go thru each winning condition
            count = 0;

            for (var i = 0; i < length; ++i) { // go thru the player's cells
                var box_num = player_array[i];

                for (var k = 0; k < n; k++) {
                    if (box_num === winning_conditions[m][k]) {  // see if player's cell matches a cell from the chosen winning condition
                        count++;
                    }

                    console.log("m: " + m + "  k: " + k + "  cell value: " + winning_conditions[m][k] + "  count: " + count);

                    if (count === n) {
                        var f = Math.floor(Math.random()*8);
                        $(".game_container h3").text(winner_name + " has won!  " + loser_name + fun_phrase[f]);
                        $('.cell').prop( "onclick", null );
                        //using jquery to remove onlick button when we have winner.
                        $('.cell').off();
                        //turn off click.
                        if(winner_name === "Frank"){
                            frank_stat++;
                            $('.frank_stat').text(frank_stat);
                        }

                        if(winner_name === "Janie"){
                            janie_stat++;
                            $('.janie_stat').text(janie_stat);
                        }

                        return;
                    }
                } // end of inner for loop
            } // end of middle for loop
        } // end of outer for loop
    } // end of outer if block
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
    if ($(square).text()==="") {
        $(square).text(symbol);
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
function restart_game() {
    $(".cell").text("");
    $(".start").prop('disabled', false);
    P1_array= [];
    P2_array= [];
    nxnTTT ();
    $(".game_container > h3").text("");

}