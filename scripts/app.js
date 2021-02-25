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
  const laserClass = 'laser'
  //! Covid19
  const covid20Class = 'covid20'
  const covid21Class = 'covid21'
  const covid22Class = 'covid22'
  //! Attack
  const attackClass = 'attack'

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


  //! Add formation of virus
  function addCovid19() {
    for (let i = 4; i < 10; i++) {
      cells[i].classList.add(covid20Class)
    }
    for (let i = 14; i < 20; i++) {
      cells[i].classList.add(covid21Class)
    }
    for (let i = 24; i < 30; i++) {
      cells[i].classList.add(covid22Class)
    }
    for (let i = 34; i < 40; i++) {
      cells[i].classList.add(covid21Class)
    }
    for (let i = 44; i < 50; i++) {
      cells[i].classList.add(covid20Class)
    }
  }


  //   //! Score
  function scorePoints() {
    currentScore = currentScore + 20
    score.innerText = currentScore
  }


  let covidCount = 24
  let laserExists = false
  //!Laser!
  function laser() {
    let laserPosition = syringeCurrentPosition - 10
    laserExists = true
    const laserTimer = setInterval(() => {
      if (covidCount === 0) {
        addCovid19()
        covidCount = 24
      } if (laserExists === false) {
        //! If a laser doesn't exist add the laser
        cells[laserPosition].classList.add(laserClass)
      } else if (laserExists === true && laserPosition > 9) {
        //! Check laser isn't at the top of screen before moving it up one space
        cells[laserPosition].classList.remove(laserClass)
        if (cells[laserPosition].className !== covid20Class && cells[laserPosition].className !== covid21Class && cells[laserPosition].className !== covid22Class) {
          laserPosition = laserPosition - 10
          cells[laserPosition].classList.add(laserClass)
        } else {
          clearInterval(laserTimer)
          cells[laserPosition].classList.remove(laserClass)
          cells[laserPosition].classList.remove(covid20Class)
          cells[laserPosition].classList.remove(covid21Class)
          cells[laserPosition].classList.remove(covid22Class)

          laserExists = false
          scorePoints()
          covidCount--
          console.log(covidCount)
        }
      } else if (laserExists === true && laserPosition <= 9) {
        //! Remove laserClass when it reaches the top of the screen and restart interval
        cells[laserPosition].classList.remove(laserClass)
        cells[laserPosition].classList.remove(covid20Class)
        cells[laserPosition].classList.remove(covid21Class)
        cells[laserPosition].classList.remove(covid22Class)
        laserExists = false
        clearInterval(laserTimer)
      }
      // console.log(laserPosition)
    }, 200)
  }


  //! Move formation
  let xDirection = true
  let xCount = 0

  function moveFormation() {
    const move = setInterval(() => {
      //! Check for GAME OVER
      for (let i = 90; i <= 99; i++) {
        if (cells[i].className === covid20Class && cells[i].className === syringeClass) {
          // clearInterval(move)
          // console.log('Game Over!')
          gameOver()
        } else if (cells[i].className === covid21Class && cells[i].className === syringeClass) {
          // clearInterval(move)
          // console.log('Game Over!')
          gameOver()
        } else if (cells[i].className === covid22Class && cells[i].className === syringeClass) {
          // clearInterval(move)
          // console.log('Game Over!')
          gameOver()
        }
      }
      //! To check if bottomRow contains a virus and removes the virus
      for (let i = 90; i <= 99; i++)
        if (cells[i].className === syringeClass || cells[i].className === covid20Class) {
          cells[i].classList.remove(covid20Class)
        } else if (cells[i].className === syringeClass || cells[i].className === covid21Class) {
          cells[i].classList.remove(covid21Class)
        } else if (cells[i].className === syringeClass || cells[i].className === covid22Class) {
          cells[i].classList.remove(covid22Class)
        }

      //! Move down every 4 iterations
      if (xCount === 4) {
        for (let i = 90; i >= 0; i--) {
          if (cells[i].className === covid20Class) {
            cells[i].classList.remove(covid20Class)
            cells[i + 10].classList.add(covid20Class)
          } else if (cells[i].className === covid21Class) {
            cells[i].classList.remove(covid21Class)
            cells[i + 10].classList.add(covid21Class)
          } else if (cells[i].className === covid22Class) {
            cells[i].classList.remove(covid22Class)
            cells[i + 10].classList.add(covid22Class)
          }
        }
        xCount = 0
        xDirection = !xDirection
        // console.log(xDirection)
      } else {
        //! Move left or right depending on current direction of movement
        if (xDirection === true) {
          cells.forEach((cell, index) => {
            if (cell.className === covid20Class) {
              cells[index].classList.remove(covid20Class)
              cells[index - 1].classList.add(covid20Class)
            } else if (cell.className === covid21Class) {
              cells[index].classList.remove(covid21Class)
              cells[index - 1].classList.add(covid21Class)
            } else if (cell.className === covid22Class) {
              cells[index].classList.remove(covid22Class)
              cells[index - 1].classList.add(covid22Class)
            }
          })
          xCount = xCount + 1
          // console.log(xCount)
        } else if (xDirection === false) {
          cells.reverse().forEach((cell, index) => {
            if (cell.className === covid20Class) {
              cells[index].classList.remove(covid20Class)
              cells[index - 1].classList.add(covid20Class)
            } else if (cell.className === covid21Class) {
              cells[index].classList.remove(covid21Class)
              cells[index - 1].classList.add(covid21Class)
            } else if (cell.className === covid22Class) {
              cells[index].classList.remove(covid22Class)
              cells[index - 1].classList.add(covid22Class)
            }
          })
          xCount = xCount + 1
          // console.log(xCount)
          cells.reverse()
        } else if (cells !== covid20Class && cells !== covid21Class && cells !== covid22Class) {
          addCovid19()
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
    }, 2000)
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
    // console.log(randomNumber)
    let lifeCount = 3


    const attackTimer = setInterval(() => {

      if (attackExists === false) {
        randomCell = cells[Math.floor(Math.random() * (cells.length))]
        // console.log(randomCell)
        randomNumber = Number(randomCell.innerText)
        attackPosition = randomNumber + 10

        //! is even gives approx. 50% probabilty of firing - change this if needed 
        if (randomCell.className === covid20Class && randomNumber % 2 === 0 && cells[randomNumber + 10].className !== covid21Class) {
          cells[attackPosition].classList.add(attackClass)
          console.log('Fire!')
          attackExists = true
        } else if (randomCell.className === covid21Class && randomNumber % 2 === 0 && cells[randomNumber + 10].className !== covid22Class) {
          cells[attackPosition].classList.add(attackClass)
          console.log('Fire!')
          attackExists = true
        } else if (randomCell.className === covid22Class && randomNumber % 2 === 0 && cells[randomNumber + 10].className !== covid21Class) {
          cells[attackPosition].classList.add(attackClass)
          console.log('Fire!')
          attackExists = true
        }
      } else if (attackExists === true) {
        if (attackPosition < 90) {
          cells[attackPosition].classList.remove(attackClass)
          attackPosition = attackPosition + 10
          cells[attackPosition].classList.add(attackClass)
        } if (attackPosition >= 90) {
          if (cells.className !== syringeClass) {
            cells[attackPosition].classList.remove(attackClass)
            attackExists = false
          }
        }
        if (cells[attackPosition].className === syringeClass) {
          console.log('Lose Life!')
          lifeCount--
          // //! Lose Life
          if (lifeCount === 2) {
            document.querySelector('div.life3').innerText = ('')
          } else if (lifeCount === 1) {
            document.querySelector('div.life2').innerText = ('')
          } else if (lifeCount === 0) {
            document.querySelector('div.life1').innerText = ('')
            clearInterval(attackTimer)
            console.log('GAME OVER!')
            lifeCount = lifeCount - 1
            attackExists = false
          } else {
            console.log('INNER WRONG!')
          }
        }
      } else {
        console.log('OUTER WRONG!')
      }
    }, 200)
  }

  //! START GAME
  function startGame() {
    console.log('Game Started!')
    addCovid19()
    moveFormation()
    virusAttack()

  }
  startButton.addEventListener('click', startGame)

}
window.addEventListener('DOMContentLoaded', init)