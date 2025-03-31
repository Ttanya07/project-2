def magenta():
    reset_LED()
    basic.show_string("R")
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
def green():
    reset_LED()
    basic.show_string("G")
    pins.digital_write_pin(DigitalPin.P1, 0)
def white():
    reset_LED()
    basic.show_string("W")
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
def reset_LED():
    led.enable(False)
def yellow():
    reset_LED()
    basic.show_string("R")
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 0)
def blue():
    reset_LED()
    basic.show_string("B")
    pins.digital_write_pin(DigitalPin.P2, 0)
def red():
    reset_LED()
    basic.show_string("R")
    pins.digital_write_pin(DigitalPin.P0, 0)
def cyan():
    reset_LED()
    basic.show_string("C")
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
reset_LED()

def on_forever():
    blue()
    basic.pause(1000)
    red()
    basic.pause(1000)
    green()
    basic.pause(1000)
basic.forever(on_forever)
