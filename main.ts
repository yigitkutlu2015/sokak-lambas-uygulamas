basic.showString("Lamba")
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    if (input.lightLevel() < 100) {
        led.setBrightness(255)
    } else if (input.lightLevel() < 200) {
        led.setBrightness(100)
    } else {
        led.setBrightness(0)
    }
})
