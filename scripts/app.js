function init() {

  //! Variables
  const grid = document.querySelector('.grid')

  const width = 10
  const cellCount = width * width
  const cells = []

  const syringeClass = 'syringe'
  const syringeStartPosition = 95
  let syringeCurrentPosition = 95

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
  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartPosition)
}

window.addEventListener('DOMContentLoaded', init)
