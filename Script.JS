/*Find the penguin game: Chapter 11 */

// This script will run a function that will generate a random number and that number will represent which DIV the Yeti hides in. This DIV will get an id of "Yeti" and also the click event listener.

// event listener to run the game function when the page loads
window.addEventListener("load", newGame);

// Click event listener on the "play again" button to restart the game
document.getElementById("button").addEventListener("click", function() {
  window.location.reload();
});

// Funtcion defeinition of the newGame() function
function newGame() {
  // Generate a random interger
  var randNum = Math.floor(Math.random() * 9) + 2;
  console.log(randNum);
  // Build of collection of <div>s, use the random number to select one and add the yeti ID to the element
  document.getElementsByTagName("div")[randNum].setAttribute("id", "yeti");
  // add event listener to the div that NOW has an id of 'Yeti'
  document.getElementById("yeti").addEventListener("click", function() {
      window.alert("ROWRRR! You found the Yeti, you lose!");
      document.getElementById("sound").play();
  });
}
