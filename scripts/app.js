function init() {

  //! Variables
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

  let laserExists = false
  //!Laser!
  function laser() {
    let laserPosition = syringeCurrentPosition - 10
    laserExists = true
    const laserTimer = setInterval(() => {
      if (laserExists === false) {
        //! If a laser doesn't exist add the laser
        cells[laserPosition].classList.add(laserClass)
      } else if (laserExists === true && laserPosition + 89 > 99) {
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
        }
      } else if (laserExists === true && laserPosition + 89 < 99) {
        //! Remove laserClass when it reaches the top of the screen and restart interval
        cells[laserPosition].classList.remove(laserClass)
        laserExists = false
        clearInterval(laserTimer)
      }
      // console.log(syringeCurrentPosition)
      console.log(laserPosition)
    }, 200)
  }


  //! Virus Attack!
  function virusAttack() {
    const attackTimer = setInterval(() => {
      const randomCell = cells[Math.floor(Math.random() * (cells.length))]
      console.log(randomCell)
      randomCell.id = ('random')
      let attackPosition = Number(randomCell.innerText) + 10
      if (randomCell.className === covid19Class && randomCell.id === ('random')) {
        console.log('FOUND ONE')
        cells[attackPosition].classList.add(attackClass)
        if (cells.className === attackClass) {
          cells[attackPosition].classList.remove(attackClass)
          attackPosition = attackPosition + 10
          cells[attackPosition + 10].classList.add(attackClass)
        } else if (cells.className === syringeClass) {
          // LOSE LIFE*******************************************
        } else if (attackPosition - 89 < 10) {
          cells[attackPosition].classList.remove(attackClass)
        }
      }
    }, 1000)
  }

  //   cells[attackPosition].classList.add(attackClass)
  // }
  // cells[attackPosition].classList.remove(attackClass)
  // cells[attackPosition + 10].classList.add(attackClass)
  //! Move formation
  let xDirection = true
  let xCount = 0

  function moveFormation() {
    const move = setInterval(() => {
      //! To check if bottomRow contains a virus and removes the virus
      for (let i = 89; i <= 99; i++)
        if (cells[i].className === covid19Class || syringeClass) {
          cells[i].classList.remove(covid19Class)
          // INSERT GAME OVER******************************
        }
      //! Move down every 4 iterations
      if (xCount === 4) {
        for (let i = 89; i >= 0; i--) {
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
      // gameOver()
    }, 1000)
  }
  //! place this in the gameOver function 
  // clearInterval(move)
  // function gameOver() {

  // }







  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartPosition)
  addCovid19()
  moveFormation()
  virusAttack()

  // laser()
  //* when laser active - randomly fires before click event?

}

window.addEventListener('DOMContentLoaded', init)