// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lamees Hemdan
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"
const randomNumber = Math.floor(Math.random() * 6) + 1  
// returns a random integer from 1 to 6 into variable "randomNumber"

function myButtonClicked () {
  // input
  const guess = parseInt(document.getElementById("guess").value)
  // process
  if (guess == randomNumber) {
    // output
    document.getElementById('answer').innerHTML = "Correct!"
  } else {
    document.getElementById('answer').innerHTML = "Incorrect, the number was " + randomNumber
  }
}
