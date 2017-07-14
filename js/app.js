var winningCond =
[
[1,2,3],[4,5,6],[7,8,9],
[1,4,7],[2,5,8],[3,6,9],
[1,5,9],[3,5,7]
];

var O = [];
var X = [];
var turns = 0;
var winner = false;

//playing the Game
$playGame = function()
{
  if (!winner){
    if (!$(this).data('clicked'))
    {
      if (turns % 2 === 0)
      {
        O.push(parseInt(this.id));
        $(this).data('clicked', true);
        $(this).html("O").css({"color":"blue", "text-align":"center","font-size":"100px"});
        turns++;
  		  $(this).addClass('avoidClick');
      }
      else
      {
        X.push(parseInt(this.id));
        $(this).data('clicked', true);
        $(this).html("X").css({"color":"red", "text-align":"center","font-size":"100px"});
        turns++;
        $(this).addClass('avoidClick');
      }
    }
     winnerWinner(O, 'O');
     winnerWinner(X, 'X');
    //  console.log(this.id);
    //  console.log("turns are " + turns);
    //  console.log("x is " + X);
    //  console.log("o is " + O);
  }
}

function winnerWinner(array, letter){

    for( i = 0 ; i < winningCond.length; i++)
    {
        var currentWinCond = winningCond[i];

        if (array.filter(function (elem){
        return currentWinCond.indexOf(elem) > -1;
        }).length == currentWinCond.length)
        {
          winner = true;
          alert('WINNER is ' + letter);
        }
        // else
        // {
        //     console.log(false);
        // }
    }
}

$(".square").on("click", $playGame);
