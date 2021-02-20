function init() {

  //! Variables
  //! Grid
  const grid = document.querySelector('.grid')
  const width = 10
  const cellCount = width * width
  const cells = []
  console.log(cells)
  //! Syringe
  const syringeClass = 'syringe'
  const syringeStartPosition = 95
  let syringeCurrentPosition = 95
  //! Covid19
  const covid19Class = 'covid19'
  const covid19StartPosition = 9


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

  // function moveRow() {
  //   setInterval(() => {
  //     cells.forEach((cell, index) => {
  const rowOne = cells.slice(0, 10)
  console.log(rowOne)
  // if (cell.className === covid19Class && 0 < index && index < 10) {
  // if (cells[4] === 0) {
  //     cell.classList.remove(covid19Class)
  // rowOne[index + 10].classList.add(covid19Class)
  //   } else {
  //     cell.classList.remove(covid19Class)
  //     cells[index - 1].classList.add(covid19Class)
  //   }
  // } else if (cell.className === covid19Class && 10 < index && index < 20) {
  //   setTimeout(() => {
  //     cell.classList.remove(covid19Class)
  //     cells[index - 1].classList.add(covid19Class)
  //   }, 400)
  // }
  //       })
  //   }, 2000)
  // }


  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartPosition)
  addCovid19()
  // moveRow()
}

window.addEventListener('DOMContentLoaded', init)