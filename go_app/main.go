// Created By: Lamees Hemdan
// Created On: April 2023
//
// This file contains the main function for the go_app application.

package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	// This function genreates random numbers from 1 to 6
	var guess int
	var number int

	// input
	fmt.Println("This program generates a random number from 1 to 6")
	fmt.Println("Enter a number from 1 to 6")
	fmt.Scanln(&guess)

	// process

	rand.Seed(time.Now().UnixNano())
	min := 1
	max := 6
	number = rand.Intn(max-min) + min

	// output
	if guess == number {
		fmt.Println("You guessed right")
	}
	if guess != number {
		fmt.Println("You guessed wrong")
		fmt.Println("The number was", number)
	}
}
