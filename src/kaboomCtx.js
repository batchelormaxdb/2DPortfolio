import kaboom from "kaboom"; //Add file name "kaboom.js for deployed app"

export const k = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game"),
})