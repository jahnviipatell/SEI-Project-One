function init() {

  //! Variables
  //! Start button
  const startButton = document.querySelector('button')
  console.log('button')
  //! Score!
  const score = document.querySelector('span.points')
  console.log(score)
  let currentScore = 0
  //! Grid
  const grid = document.querySelector('.grid')
  const width = 10
  const height = 10
  const cellCount = width * height
  const cells = []
  console.log(cells)
  //! Syringe
  const syringeClass = 'syringe'
  const syringeStartPosition = 95
  let syringeCurrentPosition = 95
  //!Laser
  // const laserPosition = undefined
  const laserClass = 'laser'
  //! Covid19
  const covid19Class = 'covid19'
  //! Attack
  const attackClass = 'attack'
  let attackCurrentPosition = 0


  //! Make a grid with syringe
  function createGrid(syringeStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      cell.nodeValue = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addSyringe(syringeStartPosition)
  }

  function addSyringe(position) {
    cells[position].classList.add(syringeClass)
  }
  function removeSyringe(position) {
    cells[position].classList.remove(syringeClass)
  }
  //! Syringe movement
  function handleKeyMovement(event) {
    let keyDown = event.keyCode
    if (keyDown === 32) {
      event.preventDefault()
    }
  }
  function handleKeyDown(event) {
    const key = event.keyCode
    removeSyringe(syringeCurrentPosition)
    if (key === 39 && syringeCurrentPosition % width !== width - 1) {
      syringeCurrentPosition++
    } else if (key === 37 && syringeCurrentPosition % width !== 0) {
      syringeCurrentPosition--
    } else if (key === 32 && laserExists === false) {
      laser()
    } else {
      console.log('INVALID KEY')
    }
    //! keydown for spacebar call laser function from below
    addSyringe(syringeCurrentPosition)
  }
  document.addEventListener('keyup', handleKeyDown)
  document.addEventListener('keydown', handleKeyMovement)
  createGrid(syringeStartPosition)

  // function GAME() {
  //   const resetGame = setInterval(() => {


  //! Add formation of virus
  function addCovid19() {
    for (let i = 4; i < 10; i++) {
      cells[i].classList.add(covid19Class)
    }
    //! different classes to be added to these for different gifs for each row
    for (let i = 14; i < 20; i++) {
      cells[i].classList.add(covid19Class)
    }
    for (let i = 24; i < 30; i++) {
      cells[i].classList.add(covid19Class)
    }
    for (let i = 34; i < 40; i++) {
      cells[i].classList.add(covid19Class)
    }
    for (let i = 44; i < 50; i++) {
      cells[i].classList.add(covid19Class)
    }
  }


  //   //! Score
  function scorePoints() {
    currentScore = currentScore + 20
    score.innerText = currentScore
  }

  let laserExists = false
  //!Laser!
  function laser() {
    let laserPosition = syringeCurrentPosition - 10
    laserExists = true
    const laserTimer = setInterval(() => {
      if (laserExists === false) {
        //! If a laser doesn't exist add the laser
        cells[laserPosition].classList.add(laserClass)
      } else if (laserExists === true && laserPosition > 9) {
        //! Check laser isn't at the top of screen before moving it up one space
        cells[laserPosition].classList.remove(laserClass)
        if (cells[laserPosition].className !== covid19Class) {
          laserPosition = laserPosition - 10
          cells[laserPosition].classList.add(laserClass)
        } else {
          clearInterval(laserTimer)
          cells[laserPosition].classList.remove(laserClass)
          cells[laserPosition].classList.remove(covid19Class)
          laserExists = false
          // ADD POINTS TO SCORE BOARD*********************************
          scorePoints()
        }
      } else if (laserExists === true && laserPosition <= 9) {
        //! Remove laserClass when it reaches the top of the screen and restart interval
        cells[laserPosition].classList.remove(laserClass)
        laserExists = false
        clearInterval(laserTimer)
      }
      console.log(laserPosition)
    }, 200)
  }


  //! Move formation
  let xDirection = true
  let xCount = 0

  function moveFormation() {
    const move = setInterval(() => {
      //! Check for GAME OVER
      for (let i = 90; i <= 99; i++) {
        if (cells[i].className === covid19Class && syringeClass) {
          // clearInterval(move)
          // console.log('Game Over!')
          gameOver()
        }
      }
      //! To check if bottomRow contains a virus and removes the virus
      for (let i = 90; i <= 99; i++)
        if (cells[i].className === covid19Class || syringeClass) {
          cells[i].classList.remove(covid19Class)
        }
      //! Move down every 4 iterations
      if (xCount === 4) {
        for (let i = 90; i >= 0; i--) {
          if (cells[i].className === covid19Class) {
            cells[i].classList.remove(covid19Class)
            cells[i + 10].classList.add(covid19Class)
          }
        }
        xCount = 0
        xDirection = !xDirection
        console.log(xDirection)
      } else {
        //! Move left or right depending on current direction of movement
        if (xDirection === true) {
          cells.forEach((cell, index) => {
            if (cell.className === covid19Class) {
              cells[index].classList.remove(covid19Class)
              cells[index - 1].classList.add(covid19Class)
            }
          })
          xCount = xCount + 1
          console.log(xCount)
        } else if (xDirection === false) {
          cells.reverse().forEach((cell, index) => {
            if (cell.className === covid19Class) {
              cells[index].classList.remove(covid19Class)
              cells[index - 1].classList.add(covid19Class)
            }
          })
          xCount = xCount + 1
          console.log(xCount)
          cells.reverse()
        } else {
          //! When the loop is broken
          console.log('wrong again')
        }
      }
      // !GAME OVER!
      function gameOver() {
        console.log('Game Over!')
        clearInterval(move)
        //* ZOOM INTO SCORE?********************
      }
    }, 1000)
  }


  let randomCell = 0
  let attackExists = false
  let attackPosition = 0

  // console.log(randomCell.innerText)
  // //! Virus Attack!
  function virusAttack() {
    let randomCell = cells[Math.floor(Math.random() * (cells.length))]
    // console.log(randomCell)
    let randomNumber = Number(randomCell.innerText)
    console.log(randomNumber)
    attackPosition = randomNumber + 10

    const attackTimer = setInterval(() => {

      if (attackExists === false) {
        for (let i = 99; i > 0; i--) {
          randomCell = cells[Math.floor(Math.random() * (cells.length))]
          console.log(randomCell)
          randomNumber = Number(randomCell.innerText)

          //! is even gives approx. 50% probabilty of firing - change this if needed 
          if (cells[i].className === covid19Class && randomNumber % 2 === 0) {
            cells[attackPosition].classList.add(attackClass)
            console.log('Fire!')
          }
          attackExists = true
        }
      } else if (attackExists === true && attackPosition < 90) {
        cells[attackPosition].classList.remove(attackClass)
        if (cells[attackPosition].className !== covid19Class) {
          attackPosition = attackPosition + 10
          cells[attackPosition].classList.add(attackClass)
        }
      } else if (attackExists === true && attackPosition >= 90) {
        cells[attackPosition].classList.remove(attackClass)
      } else if (cells.className === syringeClass && cells.className === attackClass) {
        //* LOSE LIFE************************************************************************
        console.log('Lose Life!')
      }

    }, 1000)
  }



  //! START GAME
  function startGame() {
    console.log('Game Started!')
    addCovid19()
    moveFormation()
    virusAttack()

  }
  startButton.addEventListener('click', startGame)

  //* RESET GAME BRACKET BELOW
  // }, 10000)





}
window.addEventListener('DOMContentLoaded', init)