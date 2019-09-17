$ = require('jquery')
let timerAudio = new Audio('Alarm01.wav')
// variables used for keeping track of hours, minutes, and seconds as time counts down
let timer_xh = 0
let timer_xm = 0
let timer_xs = 0

// variables used for placing a 0 before the hours, minutes, and seconds if less than 10
let timer_h
let timer_m
let timer_s

let timer_mytime

$('.timer-box--hours').dblclick(() => {
    $('.timer-box--hours').hide()
    $('.timer-box--hours-input').show().focus()
})

$('.timer-box--hours-input').blur(() => {
    timer_xh = parseInt($('.timer-box--hours-input').val()) || 0
    if (timer_xh < 10) {
        timer_h = 0
    } else {
        timer_h = ''
    }
    $('.timer-box--hours').text(`${timer_h}${timer_xh}`)
    $('.timer-box--hours-input').hide()
    $('.timer-box--hours').show()
})

$('.timer-box--minutes').dblclick(() => {
    $('.timer-box--minutes').hide()
    $('.timer-box--minutes-input').show().focus()
})

$('.timer-box--minutes-input').blur(() => {
    timer_xm = parseInt($('.timer-box--minutes-input').val()) || 0
    if (timer_xm < 10) {
        timer_m = 0
    } else {
        timer_m = ''
    }
    $('.timer-box--minutes').text(`${timer_m}${timer_xm}`)
    $('.timer-box--minutes-input').hide()
    $('.timer-box--minutes').show()
})

$('.timer-box--seconds').dblclick(() => {
    $('.timer-box--seconds').hide()
    $('.timer-box--seconds-input').show().focus()
})

$('.timer-box--seconds-input').blur(() => {
    timer_xs = parseInt($('.timer-box--seconds-input').val()) || 0
    if (timer_xs < 10) {
        timer_s = 0
    } else {
        timer_s = ''
    }
    $('.timer-box--seconds').text(`${timer_s}${timer_xs}`)
    $('.timer-box--seconds-input').hide()
    $('.timer-box--seconds').show()
})

function timerStart() {
    if (timer_xs === 0 && timer_xm === 0 && timer_xh === 0) {
        timerAudio.loop = true
        timerAudio.play()
    } else {
        if (timer_xh) {
            if (!timer_xm) {
                if (!timer_xs) {
                    timer_xh--
                    timer_xm = 59
                    timer_xs = 59 
                } else {
                    timer_xs--
                    
                }
            } else {
                if (!timer_xs) {
                    timer_xm--
                    timer_xs = 59
                } else {
                    timer_xs--
                }
            }
        } else {
            if (!timer_xm) {
                if (!timer_xs) {
                    timer_xh--
                    timer_xm = 59
                    timer_xs = 59 
                } else {
                    timer_xs--
                    
                }
            } else {
                if (!timer_xs) {
                    timer_xm--
                    timer_xs = 59
                } else {
                    timer_xs--
                }
            }
        }
    }
    if (timer_xh < 10) {
        timer_h = 0
    } else {
        timer_h = ''
    }
    if (timer_xm < 10) {
        timer_m = 0
    } else {
        timer_m = ''
    }
    if (timer_xs < 10) {
        timer_s = 0
    } else {
        timer_s = ''
    }
    // Change timer display
    $('.timer-box--hours').text(`${timer_h}${timer_xh}`)
    $('.timer-box--minutes').text(`${timer_m}${timer_xm}`)
    $('.timer-box--seconds').text(`${timer_s}${timer_xs}`)
    // update input fields to current time
    $('.timer-box--hours-input').val(timer_xh)
    $('.timer-box--minutes-input').val(timer_xm)
    $('.timer-box--seconds-input').val(timer_xs)   
}

$('.timer-button--start').click(() => {
    if (timer_xs === 0 && timer_xm === 0 && timer_xh === 0) {
        return
    } else {
        setTimeout(() => {
            timer_mytime = setInterval(timerStart, 1000)
        }, 1000)
    }
})

$('.timer-button--pause').click(() => {
    clearInterval(timer_mytime)
})

$('.timer-button--stop').click(() => {
    timerAudio.pause()
    timerAudio.currentTime = 0
    timerAudio.loop = false
    clearInterval(timer_mytime)
    timer_xh = 0
    timer_xm = 0
    timer_xs = 0
    $('.timer-box--hours-input').val(timer_xh)
    $('.timer-box--minutes-input').val(timer_xm)
    $('.timer-box--seconds-input').val(timer_xs)
    $('.timer-box--hours').text('00')
    $('.timer-box--minutes').text('00')
    $('.timer-box--seconds').text('00')
})