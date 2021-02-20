function init() {

  //! Variables
  //! grid
  const grid = document.querySelector('.grid')
  const height = 10
  const width = 10
  const rows = []
  //! syringe
  const syringeClass = 'syringe'
  const syringeStartRow = 9
  const syringeStartColumn = 5
  let syringeCurrentRow = 9
  let syringeCurrentColumn = 5
  //! covid19
  const covid19Class = 'covid19'
  const covid19StartPosition = 0

  //! Make a grid with syringe
  function createGrid(syringeStartRow, syringeStartColumn, covid19StartPosition) {
    // Outside for loop creates all of the rows within the grid
    for (let i = 0; i < height; i++) {
      // Initialise current row
      const row = []
      // Inside for loop creates all cells within current row
      for (let j = 0; j < width; j++) {
        // Create cell
        const cell = document.createElement('div')
        // Set cell text
        cell.textContent = `${i === 0 ? '' : i}${j}`
        grid.appendChild(cell)
        row.push(cell)
      }
      rows.push(row)
    }
    addSyringe(syringeStartRow, syringeStartColumn)
    addCovid19(covid19StartPosition)
  }

  //! Add formation of virus
  function addCovid19() {
    rows.forEach((row, index) => {
      if (index < 5) {
        row.forEach((column, index) => {
          index > 3 ? column.classList.add(covid19Class) : null
        })
      }
    })
    console.log(rows)
  }

  //! Formation movement 
  function onStart() {
    let covidCells = document.querySelectorAll('.covid19').length

    // while (covidCells > 0) {
    // setInterval(() => {
    //   rows.forEach((row, index) => {
    //     row.forEach((cell, index) => {
    //       if (cell.className === covid19Class) {
    //         cell.classList.remove(covid19Class)
    //         row[index - 1].classList.add(covid19Class)
    //       }
    //     })
    //     console.log(index)
    //   })
    // }, 1000)
    // covidCells = document.querySelectorAll('.covid19').length
    // }
    alert('No More Covid!')
    // console.log(covidCells)
    // let i = 0


  }
  //! Add syringe to grid
  function addSyringe(row, column) {
    rows[row][column].classList.add(syringeClass)
    // cells[position].classList.add(syringeClass)
  }
  function removeSyringe(row, column) {
    rows[row][column].classList.remove(syringeClass)
    // cells[position].classList.add(syringeClass)
  }

  //! Syringe movement
  function handleKeyDown(event) {
    const key = event.keyCode
    removeSyringe(syringeCurrentRow, syringeCurrentColumn)
    if (key === 39 && syringeCurrentColumn % width !== width - 1) {
      syringeCurrentColumn++
    } else if (key === 37 && syringeCurrentColumn % width !== 0) {
      syringeCurrentColumn--
    } else {
      console.log('INVALID KEY')
    }
    addSyringe(syringeCurrentRow, syringeCurrentColumn)
  }
  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartRow, syringeStartColumn, covid19StartPosition)
  onStart()








}

window.addEventListener('DOMContentLoaded', init)
