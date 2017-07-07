
$(".jumbotron").addClass("text-center");


// X and O are set to zero once either hit 15 we will have a winner
var O = 0;
var X = 0;
var turns = 0;

//playing the Game
$playGame = function()
{
  if (!$(this).data('clicked'))
  {
    if (turns % 2 === 0)
    {
      O += parseInt(this.id);
      $(this).data('clicked', true);
      $(this).html("X").css({"color":"blue", "text-align":"center","font-size":"60px"});
      turns++;
    }
    else
    {
      X += parseInt(this.id);
      $(this).data('clicked', true);
      $(this).html("O").css({"color":"red", "text-align":"center","font-size":"60px"});
      turns++;
    }
  }
  $winnerWinner();
   console.log(this.id);
   console.log("turns are " + turns);
   console.log("x is " + X);
   console.log("o is " + O);
}

// Win condition
$winnerWinner = function(){
  if(X === 15 && turns > 2)
  {
    alert('O is the winner');
  }
  else if (O === 15 && turns > 2) {
    alert('X is the winner');
  }
}


$(".square").on("click", $playGame);
