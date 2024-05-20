let key = 0
let Mode = 2
piano.RGB_Program().setBrightness(50)
piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
piano.RGB_Program().show()
basic.pause(5)
basic.forever(function () {
    key = piano.Touch()
    if (key == piano.TouchButton(piano.touch.L)) {
        Mode = 1
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        piano.RGB_Program().show()
    } else if (key == piano.TouchButton(piano.touch.M)) {
        Mode = 2
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        piano.RGB_Program().show()
    } else if (key == piano.TouchButton(piano.touch.H)) {
        Mode = 3
        piano.RGB_Program_Close()
        piano.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().show()
    }
    piano.PlayPiano(Mode)
})
