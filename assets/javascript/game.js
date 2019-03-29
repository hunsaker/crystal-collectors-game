var newRound = function() {
  score = 0
  $("#score").text(score)
  goal = Math.floor(Math.random() * 102) + 19
  $("#goal").text(goal)
  $("#crystal1").val(Math.floor(Math.random() * 12) + 1)
  $("#crystal2").val(Math.floor(Math.random() * 12) + 1)
  $("#crystal3").val(Math.floor(Math.random() * 12) + 1)
  $("#crystal4").val(Math.floor(Math.random() * 12) + 1)
}

$(document).ready(function() {
  var wins = 0
  $("#wins").text(wins)
  var losses = 0
  $("#losses").text(losses)

  newRound() 
  
  $(".crystal-images").on("click", function() {
      score += parseInt($(this).val())
      $("#score").text(score)

      if (score > goal) {
          losses += 1
          $("#losses").text(losses)
          alert("You Lose!!!")
          newRound()

      } else if (score === goal) {
          wins += 1
          $("#wins").text(wins)
          alert("You Win!!!")
          newRound()
      }
  })
})
