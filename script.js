let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Button is clicked");
    if (turnO === true) {
      btn.innerHTML = "O";
      turnO = false;
    } else {
      btn.innerHTML = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});
const resetGame =() =>{
  enableButtons();
  msgContainer.classList.add("hide");
}
const disableButtons = () =>{
  for(let button of buttons){
    button.disabled = true;
  }
}

const enableButtons = () =>{
  for(let button of buttons){
    button.disabled = false;
    button.innerText="";
  }

}
const showMessage = (winner) =>{
  msg.innerText =`Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableButtons();

};
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1Val = buttons[pattern[0]].innerText;
    let pos2Val = buttons[pattern[1]].innerText;
    let pos3Val = buttons[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        showMessage(pos1Val);
      }
    }
  }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
