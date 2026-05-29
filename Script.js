/**
 * Task 1: Dynamic Greeting System
 * Asks for the user's name and triggers a personalized alert box.
 */
function greetUser() {
    let userName = prompt("Hello! Welcome to the application. What is your name?");
    
    if (userName && userName.trim() !== "") {
        alert("Greetings, " + userName + "! Welcome to your newly built Coding Ecosystem. Let's create great apps together!");
    } else {
        alert("Welcome, guest! Let's get started on learning Development!");
    }
}

/**
 * Task 2: Core Algorithm for the Number Guessing Game Engine
 * Generates an integer between 1 and 10 and benchmarks user guess inputs.
 */
function startGuessingGame() {
    // Generate a secure pseudo-random number from 1 to 10
    let computerNumber = Math.floor(Math.random() * 10) + 1;
    
    // Accept numerical configuration from user via dialog window layout
    let userGuess = prompt("Enter a number between 1 and 10:");
    
    // Access DOM element target node layout context to update screen live values
    let resultDisplay = document.getElementById("game-result");
    
    if (userGuess === null) {
        // Handle Cancel option
        return;
    }
    
    // Parse input string directly to integer type safely
    let guessedNumber = parseInt(userGuess);
    
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
        alert("Invalid execution! Please supply a valid numerical input bounded perfectly between 1 and 10.");
        resultDisplay.innerText = "❌ Please enter a valid number (1-10).";
        resultDisplay.style.color = "#ff4d4d";
    } else if (guessedNumber === computerNumber) {
        alert("Outstanding precision! You guessed perfectly! The secret number was indeed " + computerNumber + ". 🎯");
        resultDisplay.innerText = "🎉 Victory! You guessed the exact number: " + computerNumber + "!";
        resultDisplay.style.color = "#00ffcc";
    } else {
        alert("Almost close! Incorrect prediction. The machine generated code " + computerNumber + ". Try again!");
        resultDisplay.innerText = "❌ Missed! Computer thought: " + computerNumber + ". Your Guess: " + guessedNumber;
        resultDisplay.style.color = "#ff9f43";
    }
}
