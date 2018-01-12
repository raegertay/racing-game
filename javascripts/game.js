document.addEventListener('DOMContentLoaded', function() {

  const racingTrack = document.getElementsByClassName('racing-track')[0]
  const player = document.getElementById('player')
  const computer = document.getElementById('computer')
  const accelerateBtn = document.getElementById('accelerate-btn')
  let gameHasStarted = false

  accelerateBtn.addEventListener('click', () => {
    if (!gameHasStarted) {
      gameHasStarted = true
      computerStart()
    }
    let newLeftPercentage = Math.round(player.offsetLeft / racingTrack.offsetWidth * 100) + 1
    console.log(`Position of player: ${newLeftPercentage}%`)
    player.style.left = `${newLeftPercentage}%`
  })

  const computerStart = () => {
    setInterval(() => {
      let newLeftPercentage = Math.round(computer.offsetLeft / racingTrack.offsetWidth * 100) + 1
      console.log(`Position of computer: ${newLeftPercentage}%`)
      computer.style.left = `${newLeftPercentage}%`
    }, 200)
  }

});
