document.addEventListener("DOMContentLoaded", function (){

    let player1Score = 0;
    let player2Score = 0;
    //we will use this array to update the history on each roll
    let history = [];

    const reset = document.getElementById("reset");
    const roll = document.getElementById('roll');
    const player1ResultDisplay = document.getElementById("player1-score-value");
    const player2ResultDisplay = document.getElementById("player2-score-value");
    const resultMessage = document.getElementById("result");
    const historyList = document.getElementById("history-list");
    const diceImages = document.querySelectorAll(".dice img");

    function game(){
        let result = "";
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        diceImages[0].src = "Dice/" + roll1 +".png";
        diceImages[1].src = "Dice/" + roll2 +".png";

        if(roll1 > roll2){
            result = "Player 1 won! 🎉";
            player1Score++;
        }else if(roll1 < roll2){
            result = "Player 2 won! 🏆";
            player2Score++;
        }else{
            result =  "It's a Draw!🤝";
        }

        player1ResultDisplay.textContent = player1Score;
        player2ResultDisplay.textContent = player2Score;
        resultMessage.textContent = result;
        //the result text becomes visible with this
        resultMessage.classList.add("visible");
        
        //generate the text for history
        let historyNow = "Round " + (history.length + 1) + ": Player 1 rolled " + roll1 + ", Player 2 rolled " + roll2 + " → " + result;

        history.push(historyNow);

        UpdateHistory()
    }

    function UpdateHistory(){
        //first we delete the history and then rebuild it 
        historyList.innerHTML = ''
        for (const item of history) {
            const li = document.createElement("li");
            li.textContent = item; 
            historyList.append(li);
          }
    }

    function resetGame(){
        player1Score = 0;
        player2Score = 0;
        history = [];
        player1ResultDisplay.textContent = "0";
        player2ResultDisplay.text = "0";
        resultMessage.textContent = "";
        //becomes invisible again if resetted
        resultMessage.classList.remove("visible");
        diceImages[0].src = "Dice/6.png";
        diceImages[1].src = "Dice/6.png";
        UpdateHistory();
    }

    roll.addEventListener("click",game);
    reset.addEventListener("click",resetGame);
}
);