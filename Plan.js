//! Layout
//? Game Name
// H1
//? Score
// localStorage
//? Lives
// 3
//? Play Button
// Button
//? Grid size?
// square
//? Aliens
// how many?
//? Player 
// One 

//! Process
//? Play Button
// addEventListener
// Start timer for game
// when timer === 0 show final score alert
// Aliens start moving across the screen

//? Alien
// Aliens appear in formation - number of aliens per row ==> width/2 - number of lines ==> height/2
// Each line has a different start time to move across the screen - bottom line moves first followed by the one above and so on.
// When alien is hit => addClassList of hide on that alien && +50 points


//? Player moves right --> & <-- left
//? Player can fire beam upwards on keyDown
// if player kills all aliens before timer is up === MORE aliens 
// when all aliens die - refresh aliens
// when player is hit => remove.classList? (life div) (how to remove them in order?)
// if time is 0 ===> game over

//? Aliens move in FOMRATION --> & <--
//? Aliens move down one line every time they reach edge of grid
// if aliens reach bottom of grid ===> game over
//? Speed of aliens increases every time they move down by one grid space 
//? Aliens randomly fire beam downwards
// Timer for beam being fired
// Random alien selected
// Math.random
// if beam hits player ===> lose life

//! GAME OVER
// Alert with score
// Play again button

//! Collision detection
// if position of any alien div === any laser beam ==> remove alien + animation(addClassList for css related to explosion?)

//! How to create beam?
// setInterval
// yPosition?
// when y is at bottom of screen .remove

//! How to move aliens in formation 
// Assign each row of aliens a different time Interval, offset each by a few milliseconds
// move each row across the page on loop - going down one line every time they hit a boundary