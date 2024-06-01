let leftScore = document.querySelector(".left-score h1");
let rightScore = document.querySelector(".right-score h1");
let leftIncBtn = document.querySelector(".left-score .buttons .increase");
let leftDecBtn = document.querySelector(".left-score .buttons .decrease");
let rightIncBtn = document.querySelector(".right-score .buttons .increase");
let rightDecBtn = document.querySelector(".right-score .buttons .decrease");
let resetBtn = document.querySelector('button.reset');

function resetScores() {
  leftScore.textContent = 0;
  rightScore.textContent = 0;
}

leftDecBtn.addEventListener("click", () => {
  leftScore.textContent = Number(leftScore.textContent) - 1;
});

leftIncBtn.addEventListener("click", () => {
  leftScore.textContent = Number(leftScore.textContent) + 1;
});

rightDecBtn.addEventListener("click", () => {
  rightScore.textContent = Number(rightScore.textContent) - 1;
});

rightIncBtn.addEventListener("click", () => {
  rightScore.textContent = Number(rightScore.textContent) + 1;
});

document.addEventListener('keydown', (e) => {
  if (e.key === "ArrowRight") rightScore.textContent = Number(rightScore.textContent) + 1;
  if (e.key === "ArrowLeft") leftScore.textContent = Number(leftScore.textContent) + 1;

  if (e.code === "Space") resetScores();
});

resetBtn.addEventListener('click', () => {
  resetScores();
});
