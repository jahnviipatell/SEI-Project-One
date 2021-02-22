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
  let laserPosition = undefined
  const laserClass = 'laser'
  //! Covid19
  const covid19Class = 'covid19'
  // const covid19StartPosition = 0


  //! Make a grid with syringe
  function createGrid(syringeStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
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
    setInterval(() => {
      if (laserExists === false) {
        cells[laserPosition].classList.add(laserClass)
      } else {
        cells[laserPosition].classList.remove(laserClass)
        laserPosition = laserPosition - 10
        cells[laserPosition].classList.add(laserClass)
      }
      // console.log(syringeCurrentPosition)


    }, 2000)
  }




  //! Move formation
  let xDirection = true
  let xCount = 0

  function moveFormation() {
    const move = setInterval(() => {
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
          console.log('wrong again')
        }
      }
      // gameOver()
    }, 2000)
  }
  //! place this in the gameOver function 
  // clearInterval(move)
  // function gameOver() {

  // }







  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartPosition)
  addCovid19()
  moveFormation()
  // moveDown()
  // moveLeft()
  // moveRight()
  // formation()
  // laser()

}

window.addEventListener('DOMContentLoaded', init)