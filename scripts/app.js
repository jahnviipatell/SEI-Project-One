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
    } else {
      console.log('INVALID KEY')
    }
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

  //! Move formation
  //! 1 ==> LEFT
  //! 0 ==> RIGHT

  // const direction = true
  // let count = 0

  // function moveDown() {
  //   for (let i = 89; i > 0; i--) {
  //     if (cells[i].className === covid19Class) {
  //       cells[i].classList.remove(covid19Class)
  //       cells[i + 10].classList.add(covid19Class)
  //     }
  //   }
  // }

  // function moveLeft() {
  //   for (let i = 0; i < 1; i++) {
  //     cells.forEach((cell, index) => {
  //       if (cell.className === covid19Class) {
  //         cells[index].classList.remove(covid19Class)
  //         cells[index - 1].classList.add(covid19Class)
  //       }
  //     })
  //   }
  // }

  // function moveRight() {
  //   for (let i = 0; i < 1; i++) {
  //     cells.forEach((cell, index) => {
  //       if (cell.className === covid19Class) {
  //         cells[index].classList.remove(covid19Class)
  //         cells[index + 1].classList.add(covid19Class)
  //       }
  //     })
  //   }
  // }


  // let direction = true
  // let count = 0

  // function formation() {
  //   setInterval(() => {
  //     if (count === 5) {
  //       return moveDown()
  //       direction !== direction
  //     } else if (direction === true) {
  //       return moveLeft()
  //       count = count + 1
  //     } else if (direction === false) {
  //       return moveRight()
  //       count = count + 1
  //     } else {
  //       console.log('something has gone wrong!')
  //     }
  //   }, 2000)
  // }

  //! first version
  let xDirection = true
  let xCount = 0
  // let yCount = 0

  function moveFormation() {
    setInterval(() => {
      if (xCount === 4) {
        for (let i = 89; i > 0; i--) {
          if (cells[i].className === covid19Class) {
            cells[i].classList.remove(covid19Class)
            cells[i + 10].classList.add(covid19Class)
          }
          // xCount = 0
        }
        xDirection !== xDirection
        console.log(xDirection)
      } else if (xDirection === true) {
        for (let i = 0; i < 1; i++) {
          cells.forEach((cell, index) => {
            if (cell.className === covid19Class) {
              cells[index].classList.remove(covid19Class)
              cells[index - 1].classList.add(covid19Class)
            }
          })
          xCount = xCount + 1
          console.log(xCount)
        }
      } else if (xDirection === false) {
        for (let i = 0; i < 1; i++) {
          cells.forEach((cell, index) => {
            if (cell.className === covid19Class) {
              cells[index].classList.remove(covid19Class)
              cells[index + 1].classList.add(covid19Class)
            }
          })
          xCount = xCount + 1
          console.log(xCount)
        }
      } else {
        console.log('Something went wrong...')
      }
    }, 2000)
  }







  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartPosition)
  addCovid19()
  moveFormation()
  // moveDown()
  // moveLeft()
  // moveRight()
  // formation()


}

window.addEventListener('DOMContentLoaded', init)