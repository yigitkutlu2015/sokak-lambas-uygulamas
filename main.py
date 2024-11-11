basic.show_string("Lamba")

def on_forever():
    basic.show_leds("""
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        """)
    if input.light_level() < 100:
        led.set_brightness(255)
    elif input.light_level() < 200:
        led.set_brightness(100)
    else:
        led.set_brightness(0)
basic.forever(on_forever)
