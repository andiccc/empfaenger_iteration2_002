radio.onReceivedNumber(function (receivedNumber) {
    id = receivedNumber
})
let id = 0
id = 0
music.setVolume(100)
let vafunkgruppe = 0
radio.setGroup(vafunkgruppe)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (vafunkgruppe > 0) {
            vafunkgruppe += -1
            radio.setGroup(vafunkgruppe)
            basic.showString("" + (vafunkgruppe))
            basic.pause(500)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (vafunkgruppe < 10) {
            vafunkgruppe += 1
            radio.setGroup(vafunkgruppe)
            basic.showString("" + (vafunkgruppe))
            basic.pause(500)
        }
    }
    basic.clearScreen()
    if (id == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (id == 2) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (id == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (id == 4) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        music.ringTone(262)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        for (let index = 0; index < 2; index++) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(50)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    } else if (id == 5) {
        radio.sendValue("Temp", input.temperature())
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (id == 6) {
        radio.sendValue("Licht", input.lightLevel())
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    music.stopAllSounds()
})
