function init() {

  //! Variables
  //! grid
  const grid = document.querySelector('.grid')
  const width = 10
  const cellCount = width * width
  const cells = []
  //! syringe
  const syringeClass = 'syringe'
  const syringeStartPosition = 95
  let syringeCurrentPosition = 95
  //! covid19
  const covid19Class = 'covid19'
  const covid19StartPosition = 0

  //! Make a grid with syringe
  function createGrid(syringeStartPosition, covid19StartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addSyringe(syringeStartPosition)
    addCovid19(covid19StartPosition)
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
  //! Formation movement 
  function onStart() {
    // const covidCells = document.querySelectorAll('.covid19')
    // console.log(covidCells)
    // let i = 0

    // setInterval(() => {
    cells.forEach((cell, index) => {
      if (cell.className === covid19Class) {
        cell.classList.remove(covid19Class)
        cells[index - 1].classList.add(covid19Class)
      }
      console.log(index)
    })
    // }, 1000)

  }
  //! Add syringe to grid
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
  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartPosition, covid19StartPosition)
  onStart()








}

window.addEventListener('DOMContentLoaded', init)
