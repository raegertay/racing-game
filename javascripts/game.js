document.addEventListener('DOMContentLoaded', function() {

  const racingTrack = document.getElementsByClassName('racing-track')[0]
  const player = document.getElementById('player')
  const accelerateBtn = document.getElementById('accelerate-btn')

  accelerateBtn.addEventListener('click', () => {
    let newLeftPercentage = Math.round(player.offsetLeft / racingTrack.offsetWidth * 100) + 1
    console.log(`Position of car: ${newLeftPercentage}%`)
    player.style.left = `${newLeftPercentage}%`
  })



});
