document.addEventListener('DOMContentLoaded', function() {

  const racingTrack = document.getElementsByClassName('racing-track')[0]
  const player = document.getElementById('player')
  const computer = document.getElementById('computer')
  const accelerateBtn = document.getElementById('accelerate-btn')
  const playerSpeed = 5;
  const computerSpeed = 5;
  let gameHasStarted = false
  let intervalId = null;

  accelerateBtn.addEventListener('click', () => {
    if (!gameHasStarted) {
      gameHasStarted = true
      computerStart()
    }
    let newLeftPercentage = Math.round(player.offsetLeft / racingTrack.offsetWidth * 100) + playerSpeed
    console.log(`Position of player: ${newLeftPercentage}%`)
    player.style.left = `${newLeftPercentage}%`
    if ((player.offsetLeft + player.offsetWidth) > racingTrack.offsetWidth) {
      const winMessage = document.createElement('p')
      winMessage.append('You won!')
      document.getElementsByTagName('body')[0].append(winMessage)
      clearInterval(intervalId)
      accelerateBtn.disabled = true
    }
  })

  const computerStart = () => {
    intervalId = setInterval(() => {
      let newLeftPercentage = Math.round(computer.offsetLeft / racingTrack.offsetWidth * 100) + computerSpeed
      console.log(`Position of computer: ${newLeftPercentage}%`)
      computer.style.left = `${newLeftPercentage}%`
      if ((computer.offsetLeft + computer.offsetWidth) > racingTrack.offsetWidth) {
        const winMessage = document.createElement('p')
        winMessage.append('You lost!')
        document.getElementsByTagName('body')[0].append(winMessage)
        clearInterval(intervalId)
        accelerateBtn.disabled = true
      }
    }, 200)
  }



});
