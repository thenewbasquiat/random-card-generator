/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { bottom } from "@popperjs/core";

window.onload = function() {
  const b = document.querySelector("button");
  b.addEventListener("click", generateCard);
};

function generateCard() {
  const suits = ["♥", "♦", "♣", "♠"];

  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suitIndex = [Math.floor(Math.random() * suits.length)];
  const cardIndex = [Math.floor(Math.random() * cards.length)];

  const randomSuit = suits[suitIndex];
  const randomCard = cards[cardIndex];

  const topSuit = document.querySelector(".top-suit");
  topSuit.innerText = randomSuit;

  const bottomSuit = document.querySelector(".bottom-suit");
  bottomSuit.InnerText = randomSuit;

  const cardValue = document.querySelector(".number");
  cardValue.innerText = randomCard;

  const suitColors = suitIndex >= 2 ? "black" : "red";
  topSuit.style.color = suitColors;
  bottomSuit.style.color = suitColors;
  cardValue.style.color = suitColors;
}
