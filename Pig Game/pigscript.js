"use strict";

const func = function () {};

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");

const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

const dice_score1 = document.querySelector(".dice-score1");
const dice_score2 = document.querySelector(".dice-score2");

const dice = document.querySelector(".dice");
const diceimg = document.querySelector(".dice-img");

const gamebtn = document.querySelector(".new-game");
const dicebtn = document.querySelector(".roll-dice");
const holdbtn = document.querySelector(".hold");

let score = 0;
let overallscore1 = 0;
let overallscore2 = 0;
let player1 = true;
let player2 = false;

const colorfunc = function (player1, player2) {
  if (player1 === true) {
    box1.style.backgroundColor = " rgb(255, 255, 255, 0.9)";
    box2.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
  } else {
    box1.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    box2.style.backgroundColor = "rgb(255, 255, 255, 0.9)";
  }
};

dicebtn.addEventListener("click", function () {
  if (player1 === true || player2 === true) {
    dice.classList.remove("animation");
    void dice.offsetWidth;
    dice.classList.add("animation");

    const dicenum = Math.trunc(Math.random() * 6) + 1;
    diceimg.src = `dice-${dicenum}.png`;
    colorfunc(player1, player2);
    if (dicenum != 1) {
      score += dicenum;
      if (player1 === true) {
        dice_score1.textContent = score;
      } else {
        dice_score2.textContent = score;
      }
    } else {
      score = 0;
      if (player1 === true) {
        player1 = false;
        player2 = true;
        colorfunc(player1, player2);
        dice_score1.textContent = score;
      } else {
        player1 = true;
        player2 = false;
        colorfunc(player1, player2);
        dice_score2.textContent = score;
      }
    }
  }
});

if (player1 === true || player2 == true) {
  holdbtn.addEventListener("click", function () {
    if (score != 0) {
      if (player1 === true) {
        player1 = false;
        player2 = true;
        colorfunc(player1, player2);
        overallscore1 += score;
        score1.textContent = overallscore1;
        score = 0;
        dice_score1.textContent = 0;
      } else {
        player1 = true;
        player2 = false;
        colorfunc(player1, player2);
        overallscore2 += score;
        score2.textContent = overallscore2;
        score = 0;
        dice_score2.textContent = 0;
      }

      if (overallscore1 >= 50) {
        box1.style.backgroundColor = "black";
        box1.style.color = "white";
        para1.textContent = "🎉Hurrah! Player1 won...";
        player1 = false;
        player2 = false;
      }
      if (overallscore2 >= 50) {
        box2.style.backgroundColor = "black";
        box2.style.color = "white";
        para2.textContent = "🎉Hurrah! Player2 won...";
        player1 = false;
        player2 = false;
      }
    }
  });
}

gamebtn.addEventListener("click", function () {
  score = 0;
  overallscore1 = 0;
  overallscore2 = 0;
  player1 = true;
  player2 = false;
  colorfunc(player1, player2);
  score1.textContent = overallscore1;
  dice_score1.textContent = score;

  box1.style.color = "black";
  box2.style.color = "black";
  para1.textContent = "";
  para2.textContent = "";
  score2.textContent = overallscore2;
  dice_score2.textContent = score;
});
