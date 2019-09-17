$ = require('jquery')
let stopwatch_xs = 0
let stopwatch_xm = 0
let stopwatch_xh = 0
let stopwatch_h
let stopwatch_m
let stopwatch_s
let stopwatch_mytime

    
function stopWatch() {
    stopwatch_xs++

    if (stopwatch_xs === 60) {
        stopwatch_xs = 0
        stopwatch_xm++
    }
    if (stopwatch_xm === 60) {
        stopwatch_xm = 0
        stopwatch_xh++
    }

    if (stopwatch_xs < 10) {
        stopwatch_s = 0
       } else {
        stopwatch_s = ''
       }
    if (stopwatch_xm < 10) {
        stopwatch_m = 0
    } else {
        stopwatch_m = ''
    }
    if (stopwatch_xh < 10) {
        stopwatch_h = 0
    } else {
        stopwatch_h = ''
    }

   
    $('.stopwatch-text--seconds').text(`${stopwatch_s}${stopwatch_xs}`)
    $('.stopwatch-text--minutes').text(`${stopwatch_m}${stopwatch_xm}`)
    $('.stopwatch-text--hours').text(`${stopwatch_h}${stopwatch_xh}`)
    
}

$('.stopwatch-button--start').click(() => {
    if (!stopwatch_mytime) {
        setTimeout(() => {
            stopwatch_mytime = setInterval(stopWatch, 1000)
             stopWatch()
            } , 1000)
       
       
    }  
})

$('.stopwatch-button--pause').click(() => {
    clearInterval(stopwatch_mytime)
    stopwatch_mytime = undefined
})

$('.stopwatch-button--stop').click(() => {
    clearInterval(stopwatch_mytime)
    stopwatch_mytime = undefined
    stopwatch_xs = 0
    stopwatch_xm = 0
    stopwatch_xh = 0
    $('.stopwatch-text--seconds').text('00')
    $('.stopwatch-text--minutes').text('00')
    $('.stopwatch-text--hours').text('00')
})

