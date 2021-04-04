function Heater (action: string) {
    if (action == "on" || action == "ON") {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (action == "off" || action == "OFF") {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
function Door (action: string) {
    if (action == "O" || action == "o") {
        Dge = 0
        for (let index = 0; index < 60; index++) {
            Dge += 1
            pins.servoWritePin(AnalogPin.P12, Dge)
            control.waitMicros(10000)
        }
    } else if (action == "C" || action == "c") {
        Dge = 60
        for (let index = 0; index < 60; index++) {
            Dge += -1
            pins.servoWritePin(AnalogPin.P12, Dge)
            control.waitMicros(10000)
        }
    }
}
function WidowsOpen () {
    Dge = 10
    for (let index = 0; index < 80; index++) {
        Dge += 1
        pins.servoWritePin(AnalogPin.P16, Dge)
        control.waitMicros(10000)
    }
}
function Cloths (action: string) {
    if (action == "O" || action == "o") {
        Dge = 120
        for (let index = 0; index < 100; index++) {
            Dge += -1
            pins.servoWritePin(AnalogPin.P8, Dge)
            control.waitMicros(10000)
        }
    } else if (action == "C" || action == "c") {
        Dge = 20
        for (let index = 0; index < 100; index++) {
            Dge += 1
            pins.servoWritePin(AnalogPin.P8, Dge)
            control.waitMicros(10000)
        }
    }
}
function lamp (level: number) {
    Light = level
    pins.analogWritePin(AnalogPin.P0, Math.map(Light, 0, 5, 0, 1023))
    basic.pause(1000)
}
function windows (action: string) {
    if (action == "O" || action == "o") {
        Dge = 10
        for (let index = 0; index < 80; index++) {
            Dge += 1
            pins.servoWritePin(AnalogPin.P16, Dge)
            control.waitMicros(10000)
        }
    } else if (action == "C" || action == "c") {
        Dge = 90
        for (let index = 0; index < 80; index++) {
            Dge += -1
            pins.servoWritePin(AnalogPin.P16, Dge)
            control.waitMicros(10000)
        }
    }
}
function WidowsClose () {
    Dge = 90
    for (let index = 0; index < 80; index++) {
        Dge += -1
        pins.servoWritePin(AnalogPin.P16, Dge)
        control.waitMicros(10000)
    }
}
let Light = 0
let Dge = 0
Heater("on")
basic.pause(1000)
Heater("off")
basic.forever(function () {
	
})
