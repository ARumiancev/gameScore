"use strict";

// alert("JS veikia")

let score = document.getElementById("score");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let input = document.getElementById("input");
let team1 = document.getElementById("team1");
let team2 = document.getElementById("team2");
let maxScore= document.getElementById("maxScore");

var number1 = 0;
var number2 = 0;
var maxNumber = 0;
// score.textContent = `${number1} to ${number2}`;
maxScore.textContent = `Playing to ${maxNumber}`;

team1.addEventListener("click", function(){
    if(number1 < maxNumber && number2 !=maxNumber){
    number1++;
    score1.textContent = `${number1}`;
    // score.textContent = `${number1} to ${number2}`;
    maxScore.textContent = `Playing to ${maxNumber}`;
    // console.log(number1);
    maxNumber = input.value;
        if (number1==maxNumber){
            score1.style.color = "green";
        }
    } 
});

team2.addEventListener("click", function(){
    if(number2 < maxNumber && number1 !=maxNumber){
    number2++;
    score2.textContent = `${number2}`;
    // score.textContent = `${number1} to ${number2}`;
    maxScore.textContent = `Playing to ${maxNumber}`;
    console.log(number2);
    maxNumber = input.value;
        if (number2==maxNumber){
            score2.style.color = "green";
        }
    }
});

input.addEventListener("change", function(){
    if(number1 != maxNumber){
        maxNumber = input.value;
        console.log(maxNumber);
        maxScore.textContent = `Playing to: ${maxNumber}`;
    } else {
        maxNumber = 1;
    }
});

document.getElementById("reset").addEventListener("click", isNaujo);

function isNaujo(){
    number1=0;
    number2=0;
    // maxNumber=1;
    // input.value=1;
    
    // score.style.color = "black";
    maxScore.textContent = `Playing to: ${maxNumber}`;
    // score.textContent = `${number1} to ${number2}`;
    score1.textContent = `${number1}`;
    score2.textContent = `${number2}`;
    score1.style.color = "black";
    score2.style.color = "black"
    // return number1, number2, maxNumber;
}
