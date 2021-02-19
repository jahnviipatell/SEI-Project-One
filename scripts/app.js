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
  const covid19StartPosition = [2]

  //! Make a grid with syringe
  function createGrid(syringeStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addSyringe(syringeStartPosition)
    addCovid19(covid19StartPosition)
  }
  function addCovid19(covid19StartPosition) {
    cells[covid19StartPosition].classList.add(covid19Class)
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
  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartPosition)









}

window.addEventListener('DOMContentLoaded', init)
