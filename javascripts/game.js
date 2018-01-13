document.addEventListener('DOMContentLoaded', function() {

  const racingTrack = document.getElementsByClassName('racing-track')[0]
  const player = document.getElementById('player')
  const computer = document.getElementById('computer')
  const accelerateBtn = document.getElementById('accelerate-btn')
  const playerSpeed = 1.5 // in percentage
  const computerSpeed = 0.1 // in percentage
  const computerAccelerationFrequency = 10 // in milliseconds
  let gameHasStarted = false
  let intervalId = null

  accelerateBtn.addEventListener('click', () => {
    if (!gameHasStarted) {
      gameHasStarted = true
      computerStart()
    }
    let newLeftPercentage = calculuateNewPosition(player, playerSpeed)
    player.style.left = `${newLeftPercentage}%`
    console.log(`Position of player: ${newLeftPercentage}%`)
    if (hasWon(player)) {
      displayResult('You won!')
      gameOver()
    }
  })

  const computerStart = () => {
    intervalId = setInterval(() => {
      let newLeftPercentage = calculuateNewPosition(computer, computerSpeed)
      computer.style.left = `${newLeftPercentage}%`
      console.log(`Position of computer: ${newLeftPercentage}%`)
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

  const gameOver= () => {
    clearInterval(intervalId)
    accelerateBtn.disabled = true
  }

});
