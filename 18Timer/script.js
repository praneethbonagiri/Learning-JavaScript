const displayTime = document.getElementById('display-time')
const stopBtn = document.getElementById('stop-btn')

function showTime() {
    const currentTime = new Date()
    const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    // console.log(formattedTime)
    displayTime.innerText = formattedTime
}

// call this function repeatedly after few seconds
let interval = setInterval(showTime, 1000)

stopBtn.addEventListener("click", () => {
    clearInterval(interval)
})