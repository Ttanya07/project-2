function magenta () {
    reset_LED()
    basic.showString("R")
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function green () {
    reset_LED()
    basic.showString("G")
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function white () {
    reset_LED()
    basic.showString("W")
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function reset_LED () {
    led.enable(false)
}
function yellow () {
    reset_LED()
    basic.showString("R")
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function blue () {
    reset_LED()
    basic.showString("B")
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function red () {
    reset_LED()
    basic.showString("R")
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function cyan () {
    reset_LED()
    basic.showString("C")
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
reset_LED()
basic.forever(function () {
    blue()
    basic.pause(1000)
    red()
    basic.pause(1000)
    green()
    basic.pause(1000)
})
