document.addEventListener('DOMContentLoaded', function() {

  // Change game settings here
  const playerSpeed = 1.6 // in percentage
  const computerEasySpeed = 0.5 // in percentage
  const computerMediumSpeed = 0.8 // in percentage
  const computerHardSpeed = 1.1 // in percentage
  const computerAccelerationFrequency = 100 // in milliseconds

  // Do not touch
  const racingTrack = document.getElementsByClassName('racing-track')[0]
  const player = document.getElementById('player')
  const computer = document.getElementById('computer')
  const accelerateBtn = document.getElementById('accelerate-btn')
  const difficultSelection = document.getElementById('difficulty-selection')
  const restartBtn = document.getElementById('restart-btn')
  let gameHasStarted = false
  let intervalId = null

  // Accelerate button starts the game and also move player's car
  accelerateBtn.addEventListener('click', () => {
    if (!gameHasStarted) {
      gameHasStarted = true
      computerStart()
    }
    let newLeftPercentage = calculuateNewPosition(player, playerSpeed)
    player.style.left = `${newLeftPercentage}%`
    // console.log(`Position of player: ${newLeftPercentage}%`)
    if (hasWon(player)) {
      displayResult('You won!')
      gameOver()
    }
  })

  const computerStart = () => {
    let computerSpeed = getComputerSpeed()
    intervalId = setInterval(() => {
      let newLeftPercentage = calculuateNewPosition(computer, computerSpeed)
      computer.style.left = `${newLeftPercentage}%`
      // console.log(`Position of computer: ${newLeftPercentage}%`)
      if (hasWon(computer)) {
        displayResult('You lost!')
        gameOver()
      }
    }, computerAccelerationFrequency)
  }

  // In percentage
  const calculuateNewPosition = (car, speed) => {
    return (car.offsetLeft / racingTrack.offsetWidth * 100) + speed
  }

  const hasWon = (car) => {
    return (car.offsetLeft + car.offsetWidth) > racingTrack.offsetWidth
  }

  const displayResult = (message) => {
    const displayMessage = document.createElement('div')
    displayMessage.id = 'result'
    displayMessage.append(message)
    document.getElementById('race-area').append(displayMessage)
  }

  const gameOver = () => {
    clearInterval(intervalId)
    accelerateBtn.disabled = true
  }

  // Return computer speed based on selected difficulty
  const getComputerSpeed = () => {
    switch (difficultSelection.value) {
      case 'easy':
        return computerEasySpeed
      case 'medium':
        return computerMediumSpeed
      case 'hard':
        return computerHardSpeed
    }
  }

  const restart = () => {
    clearInterval(intervalId)
    accelerateBtn.disabled = false
    gameHasStarted = false
    player.style.left = 0
    computer.style.left = 0
    const result = document.getElementById('result')
    if (result)
      result.remove()
  }

  restartBtn.addEventListener('click', restart)

});
