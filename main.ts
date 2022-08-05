let Movimiento = 0
basic.forever(function () {
    pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
    Movimiento = pins.digitalReadPin(DigitalPin.P0)
    if (Movimiento == 0) {
        basic.showNumber(Movimiento)
        for (let index = 0; index < 10; index++) {
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(175, music.beat(BeatFraction.Quarter))
        }
        basic.showString("SIUUUUU")
    } else {
        basic.showNumber(0)
    }
    music.stopMelody(MelodyStopOptions.All)
    basic.clearScreen()
})
