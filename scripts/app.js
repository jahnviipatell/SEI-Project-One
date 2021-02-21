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

  //! Move formation







  // function moveFormation() {
  //   setInterval(() => {
  //     //! 1 ==> LEFT
  //     //! 0 ==> RIGHT
  //     let direction = 1
  //     for (let i = 0; i < height; i++) {
  //       // let direction = 1
  //       if (i !== 0) {
  //         for (let i = 89; i > 0; i--) {
  //           cells.forEach((cell, i) => {
  //             if (cell.className === covid19Class) {
  //               cells[i].classList.remove(covid19Class)
  //               cells[i + 10].classList.add(covid19Class)
  //             }
  //           })
  //         }if (direction === 1 && cells[i].className === covid19Class) {
  //         //   cells[i].classList.remove(covid19Class)
  //         //   cells[i - 1].classList.add(covid19Class)
  //         //   direction = 0
  //         // } else if (direction === 0 && cells[i].className === covid19Class) {
  //         //   cells[i].classList.remove(covid19Class)
  //         //   cells[i + 1].classList.add(covid19Class)
  //         //   direction = 1
  //         // }
  //       }
  //     }
  //     // clearInterval()
  //   }, 2000)





  document.addEventListener('keydown', handleKeyDown)
  createGrid(syringeStartPosition)
  addCovid19()
  // moveFormation()

}

window.addEventListener('DOMContentLoaded', init)