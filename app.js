'use strict';

var remainingAttempts = 6;

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomWord(words) {
    let index = getRandomIndex(words.length);
    let word = words[index];
    return word;
}