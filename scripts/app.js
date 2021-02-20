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
    //! Rows
    // const rowOne = cells.slice(0, 10)
    // const rowTwo = cells.slice(10, 20)
    // const rowThree = cells.slice(20, 30)
    // const rowFour = cells.slice(30, 40)
    // const rowFive = cells.slice(40, 50)
    // const rowSix = cells.slice(50, 60)
    // const rowSeven = cells.slice(60, 70)
    // const rowEight = cells.slice(70, 80)
    // const rowNine = cells.slice(80, 90)
    // const rowTen = cells.slice(90, 100)
    // console.log(rowOne[0])

    // function moveRow() {
    moveRow = setInterval(() => {
      // function move() => {
      for (let i = 4; i < 0; i++) {
        cells[i].classList.remove(covid19Class)
        cells[i - 1].classList.add(covid19Class)
      }
    }, 2000)
    // for (let i = 4; i < 10; i++) {
    //   cells[i].classList.add(covid19Class)
    // }
    // cells.forEach((cell, index) => {
    // console.log(rowOne)
    // rowOne.map(index => {
    //   return index + 10
    // if (cell.className === covid19Class && 0 < index && index < 10) {
    //   if (rowOne[0] === covid19Class) {
    //     rowOne.classList.remove(covid19Class)
    //     // rowOne[index + 10].classList.add(covid19Class)
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
    // })
    // }, 2000)
    // }





    // END OF MAKE A GRID WITH SYRINGE FUNCTION (closing bracket below)
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





  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartPosition)
  addCovid19()
  moveRow()

}

window.addEventListener('DOMContentLoaded', init)