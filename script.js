document
  .getElementById("playerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form refresh

    const player1Name = document.getElementById("player-name1").value;
    const player2Name = document.getElementById("player-name2").value;

    // Display the names on screen
    document.getElementById(
      "playerDisplay"
    ).textContent = `Player 1: ${player1Name}, Player 2: ${player2Name}`;
  });
