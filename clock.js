// Basic clock function to carry out as program runs
$ = require('jquery')

let clock_s
let clock_m
let clock_h
let clockDate

// Creation of clock data, runs first to load clock at program startup, than to update it in the interval
clockDate = new Date
if (clockDate.getHours() < 10) {
    clock_h = 0
} else {
    clock_h = ''
}
if (clockDate.getMinutes() < 10) {
    clock_m = 0
} else {
    clock_m = ''
}
if (clockDate.getSeconds() < 10) {
    clock_s = 0
} else {
    clock_s = ''
}
$('.clock-text').text(`${clock_h}${clockDate.getHours()} : ${clock_m}${clockDate.getMinutes()} : ${clock_s}${clockDate.getSeconds()}`)

let clockTime = setInterval(() => {
    clockDate = new Date
    

    if (clockDate.getHours() < 10) {
        clock_h = 0
    } else {
        clock_h = ''
    }
    if (clockDate.getMinutes() < 10) {
        clock_m = 0
    } else {
        clock_m = ''
    }
    if (clockDate.getSeconds() < 10) {
        clock_s = 0
    } else {
        clock_s = ''
    }
    $('.clock-text').text(`${clock_h}${clockDate.getHours()} : ${clock_m}${clockDate.getMinutes()} : ${clock_s}${clockDate.getSeconds()}`)
    // console.log(clockDate.getHours(), clockDate.getMinutes(), clockDate.getSeconds())
}, 1000)

$('.clock-button').click(() => {
    $('#timer-container').hide()
    $('#stopwatch-container').hide()
    $('#clock-container').show()
})

$('.timer-button').click(() => {
    $('#stopwatch-container').hide()
    $('#clock-container').hide()
    $('#timer-container').show()
})

$('.stopwatch-button').click(() => {
    $('#timer-container').hide()
    $('#clock-container').hide()
    $('#stopwatch-container').show()
})