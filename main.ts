radio.setGroup(121)
let ship1 = 0
let ship2 = 0
let ship3 = 0
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let ship1: number;
    if (receivedNumber == ship1) {
        ship1 = -1
    }
    
    if (receivedNumber == ship2) {
        ship1 = -1
    }
    
    if (receivedNumber == ship3) {
        ship1 = -1
    }
    
})
let a = 0
while (true) {
    if (!input.buttonIsPressed(Button.A)) {
        for (let b = 0; b < 5; b++) {
            led.toggle(b, a)
            basic.pause(750)
            led.toggle(a, a)
            a += 1
        }
    }
    
}
ship1 = a
a = 0
while (true) {
    if (!input.buttonIsPressed(Button.A)) {
        led.toggle(a, a)
        basic.pause(750)
        led.toggle(a, a)
        a += 1
    }
    
}
ship2 = a
a = 0
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        led.toggle(a, a)
        basic.pause(750)
        led.toggle(a, a)
        a += 1
    }
    
}
ship3 = a
while (true) {
    if (ship1 == 1 && ship2 == -1 && ship3 == -1) {
        break
    }
    
    if (input.buttonIsPressed(Button.A)) {
        led.toggle(a, a)
        basic.pause(750)
        led.toggle(a, a)
        a += 1
    }
    
    radio.sendNumber(a)
}
basic.clearScreen()
basic.showString("You lose!")
