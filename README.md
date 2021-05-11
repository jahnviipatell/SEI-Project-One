# SEI-Project-One
This was my first project, 4 weeks into the General Assembly Software Engineering Immersive course and also the first instance of applying logic with vanilla JavaScript.

![Screen Recording 2021-05-10 at 17 05 12](https://user-images.githubusercontent.com/78035012/117689829-0fa99880-b1b2-11eb-8c91-24d40dd82b6a.gif)

Deployment 
This game has been deployed with GitHub Pages, click to view my version of Space Invaders. 
Getting Started
Access the source code via the 'Clone or download' button
Open the index.html file in your browser of choice to start the game.
Goal and Timeframe:
To build a grid-based browser game with pure JavaScript in 7 days.
Technologies Used:
JavaScript (ES6)
HTML5
CSS
GitHub
Overview
My version of the classic Space Invaders game has a Covid-19 inspired twist. The aim of the game has remained the same: for the user to shoot the invading virus molecules before they reach dangerously close to the player. The fleet of molecules periodically drop a molecular bomb at the player which must be dodged or a life is lost. The player can move left or right and fire a shot from the syringe to eliminate any molecules it comes in contact with. The game ends one of two ways: if the player loses all 3 lives or if the fleet of molecules reach the player. Once the player has won or died, the player can choose to play again. 

The aim of the game is to achieve the highest score before the molecules reach the syringe. 

Insert screenrecord of game here 
Process
I started developing the game by sketching out a plan of all the different functionalities the game should have, and ranked them to critical for MVP and Nice-To-Haves. I then started pseudocoding my MVP down into bite size chunks to make sure I could deliver it in time to allow time for polishing and styling.
There were five key parts of the game: 
Creating a formation of attacking molecules.

My formation consists of three different molecules, these were allocated their own class in CSS and added to a cell in the 15 x 15 grid using a for loop. 
 
Using a set interval to move this formation across and down the grid.
 

For each cell the corresponding CSS covid class was removed and readded at a position of +1 or -1 depending on the direction of travel. 
The direction of travel changes when the xCount reaches 7 and this moves the entire formation down the grid and closer to the player. 
 
Adding the player/syringe on the grid with the ability to move left and right and fire upwards to the molecules. 
This was achieved by adding an event listener on the corresponding keys. 
The spacebar initialised the setInterval for firing a vaccine up towards the attacking molecules until collision is detected. This interval would only timeout when the player successfully targets a molecule or when the vaccine reaches the top of the grid; allowing the player to fire another shot. 
Setting an interval at which a molecule will be dropped down at the player. 
This was achieved by choosing a random cell which contains any of the three covid classes and checking if the cell directly below is empty (does not contain a molecule), if so an attacking cell would be dropped from this position. 
Adding the total score and lives lost functionality.
 
Challenges 
To achieve the correct movement for the formation of molecules. My formation started moving diagonally and it took a lot of playing around with the code before I realised I needed to reverse the cells. 
To get the attacking molecules to only fire from the bottom row of the formation. Initially these attacks were intialised within the formation and the attacking molecule would replace the existing molecule. This was a bug that took a while to fix, but eventually I added in an if statement to check if the row below has an associated covid class before allowing a molecule to fire. 
Known errors which still exist: 
occasionally one of the molecules within the covid formation gets stuck on the grid
The setInterval for the laser attack is too slow and can sometimes collide with two covid molecules with just one touch of the spacebar by the player. 
Wins
I was really pleased with the overall game and what I had achieved as my first attempt using JavaScript. 
Future Features
Adding a leaderboard using Local Storage to keep track of high scores.
Make the game responsive and fully functioning on mobile and tablet. 
Increasing the speed at which the formation moves every time it moves down the grid. 
Refactoring the code, allowing for reusable functions and less repetitive code. 
 
