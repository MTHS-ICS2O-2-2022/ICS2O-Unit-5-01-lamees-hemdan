// Copyright (c) 2023 Lamees Hemdan All rights reserved
//
// Created by: Lamees Hemdan
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"
const randomNumber = Math.floor(Math.random() * 6) + 1  
// returns a random integer from 1 to 6 into variable "randomNumber"

function myButtonClicked () {
  // input
  const guess = parseInt(document.getElementById("guessed-number").value)
  // process
  if (guess == randomNumber) {
    // output
    document.getElementById('answer').innerHTML = "Correct!"
  }
  if (guess != randomNumber) {
    // output
    document.getElementById('answer').innerHTML = "Incorrect, try again!" 
  }
}
