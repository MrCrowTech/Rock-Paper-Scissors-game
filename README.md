# Rock Paper Scissors

My first real JavaScript project. A small browser game where you play
rock, paper, scissors against the computer. Built about a year into
learning web development on my own.

## What It Does

- Pick rock, paper, or scissors by clicking a button
- The computer picks something random in the same turn
- The result of the round (win, lose, draw) shows up right away
- Score is tracked and stays visible across rounds

Simple rules, simple loop, good practice for the basics.

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Plain HTML for the buttons, plain CSS for the layout, and vanilla JS
for the game logic. No frameworks, no libraries.

## What I Practiced

- Working with the DOM and event listeners on buttons
- Using `Math.random()` to make the computer pick something
- Writing small functions and chaining them together
- Updating the page (score, round result) without a refresh
- Thinking through the win/lose/draw logic in plain conditionals

## How It Works

1. You click one of the three buttons (rock, paper, or scissors)
2. JS picks a random move for the computer
3. Both choices are compared using a small function
4. The round result and updated score are pushed back to the page

The whole game lives in one `script.js` file with a few short functions.
Easy to read on purpose.

## Run It Locally

1. Clone the repo
2. Open `index.html` in your browser
3. Start clicking

No installs, no dependencies, no server needed.

## What's Next

- Add a "best of N" mode with a clear win screen
- Show the computer's pick with an emoji or small image
- Add a reset button to zero the score
- Animate the result text when a round ends
- Maybe add a small sound effect on win/lose

## Connect

- GitHub: [MrCrowTech](https://github.com/MrCrowTech)
