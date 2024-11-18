"use strict";

window.addEventListener("load", init);

function init () {
    createTiles();
    displayTiles();
}

// #region model

const tiles = [
  [0, 2, 1, 2, 3, 4, 2, 6, 7, 8, 9],
  [1, 1, 1, 2, 2, 4, 5, 6, 7, 7, 8],
  [2, 2, 3, 3, 4, 4, 5, 7, 7, 8, 9],
  [3, 3, 1, 2, 3, 6, 5, 6, 8, 8, 9],
  [4, 4, 1, 1, 3, 5, 5, 6, 7, 9, 9],
  [5, 1, 1, 1, 6, 6, 5, 7, 7, 8, 9],
  [6, 6, 2, 2, 5, 5, 7, 7, 7, 8, 8],
  [7, 1, 1, 3, 3, 5, 6, 8, 8, 9, 9],
  [8, 8, 1, 1, 1, 3, 7, 7, 8, 9, 9],
  [9, 9, 1, 2, 3, 7, 6, 8, 8, 9, 9],
];

const GRID_HEIGHT = tiles.length;
const GRID_WIDTH = tiles.length;
const TILE_SIZE = 32;

function getTileAtCoord({row, col}) {

return row, col
}

function getTileAtPos(position) {

}

function coordFromPos(position) {

}

function posFromCoord(row, col) {

}

function createTiles() {
    const background = document.querySelector("#background")
    for (let row = 0; row < GRID_HEIGHT; row++) {
        for (let col = 0; col < GRID_WIDTH; col++) {
        const tile = 
        }
    }
    

    background.style.setProperty("--GRID_WIDTH", GRID_WIDTH);
    background.style.setProperty("--GRID_HEIGHT", GRID_HEIGHT);
    background.style.setProperty("--TILE_SIZE", TILE_SIZE);
}

function displayTiles() {
    const visualTiles = document.querySelectorAll(".tile");

    for (let row = 0; row < GRID_HEIGHT; row++) {
      for (let col = 0; col < GRID_WIDTH; col++) {
        const index = row * GRID_WIDTH + col;

        const visualTile = visualTiles[index];

        const tileType = getTileAtCoord({row, col})

        const tileClass = getClassForTileType(tileType)

        visualTile.classList.add(tileClass);
      }
    }
}

function getClassForTileType(tiletype) {
    switch(tiletype) {
        case 0:
            return "grass";
        case 1:
            return "path";
        case 2:
            return "wall";
        case 4:
            return "flowers";
        case 5:
            return "abyss";
        case 6:
            return "lava";
        case 7:
            return "water";
        case 8:
            return "well";
        case 9:
            return "redwall";
    }
}