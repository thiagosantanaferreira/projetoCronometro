const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milsecondsEl = document.querySelector("#miliseconds")

const startBtn = document.querySelector("#startBtn")
const pausarBtn = document.querySelector("#pausarBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0
let seconds = 0
let milseconds = 0
let isPaused = false

startBtn.addEventListener("click", startTime)
pausarBtn.addEventListener("click",pauseTime)
resumeBtn.addEventListener('click',resumeTime)
resetBtn.addEventListener('click',resetTime)

function startTime(){

    interval = setInterval(()=>{
        if(!isPaused){
            milseconds += 10

            if(milseconds === 1000){
                seconds++
                milseconds = 0
            }
            if(seconds === 60){
                minutes++
                milseconds =0
            }
            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            milsecondsEl.textContent = formatMilseconds(milseconds)
        }
    },10)
startBtn.style.display = "none"
pausarBtn.style.display = "block"

}


function pauseTime(){
    isPaused = true
    pausarBtn.style.display ="none"
    resumeBtn.style.display ="block"
}

function resumeTime(){
    isPaused = false
    pausarBtn.style.display ="block"
    resumeBtn.style.display ="none"
}

function resetTime(){
    clearInterval(interval)
    
    minutes = 0
    seconds = 0
    milseconds = 0

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    milsecondsEl.textContent = "000"

    startBtn.style.display = "block"
    pausarBtn.style.display = "none"
    resumeBtn.style.display = "none"
    isPaused = false
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

function formatMilseconds(time){
    return time < 100 ? `${time}`.padStart(3,"0") : time
}