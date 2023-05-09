# Guess Game

This is a simple JavaScript guess game where the player tries to guess a randomly generated number within a specified range.

## How to Play

1. Open the `index.html` file in a web browser.
2. The game will display a random number between a specified range.
3. Enter your guess in the input field provided.
4. Click the "Guess" button to submit your guess.
5. The game will provide feedback on whether your guess was too high or too low.
6. Keep guessing until you correctly guess the number.

## Features

- Randomly generates a number within a specified range.
- Validates user input to ensure only valid numbers are accepted.
- Provides feedback on whether the guess is too high or too low.
- Keeps track of the number of attempts made by the player.
- Displays a message when the player guesses the correct number.

## Technologies Used

- HTML
- CSS
- JavaScript

## Game Implementation Details

The game is implemented using JavaScript and consists of the following main components:

- **Random Number Generation:** The game generates a random number using the `Math.random()` function and scales it to the desired range using mathematical operations.
- **User Input Validation:** The game validates the user's guess to ensure it is a valid number within the specified range.
- **Guess Comparison:** The game compares the user's guess with the generated number and provides feedback on whether it is too high or too low.
- **Attempt Tracking:** The game keeps track of the number of attempts made by the player.
- **Win Condition:** The game checks if the player has guessed the correct number and displays a congratulatory message when they do.

Feel free to modify and enhance the game as per your requirements and have fun playing the Guess Game!
