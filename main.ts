radio.setGroup(121)
radio.sendNumber(0)
let ship1 = [0, 0]
let ship2 = [0, 0]
let ship3 = [0, 0]
let a = 0
let b = 0
function on_button_pressed_a() {
    
    
    a += 1
}

function on_button_pressed_b() {
    
    
    b += 1
}

while (!input.logoIsPressed()) {
    input.onButtonPressed(Button.A, on_button_pressed_a)
    input.onButtonPressed(Button.B, on_button_pressed_b)
    led.toggle(a, b)
    led.toggle(a, b)
    basic.pause(750)
    led.toggle(a, b)
}
ship1 = [a, b]
a = 0
b = 0
basic.clearScreen()
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
while (!input.logoIsPressed()) {
    input.onButtonPressed(Button.A, on_button_pressed_a)
    input.onButtonPressed(Button.B, on_button_pressed_b)
    led.toggle(a, b)
    led.toggle(a, b)
    basic.pause(750)
    led.toggle(a, b)
}
ship2 = [a, b]
a = 0
b = 0
basic.clearScreen()
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
while (!input.logoIsPressed()) {
    input.onButtonPressed(Button.A, on_button_pressed_a)
    input.onButtonPressed(Button.B, on_button_pressed_b)
    led.toggle(a, b)
    led.toggle(a, b)
    basic.pause(750)
    led.toggle(a, b)
}
ship3 = [a, b]
basic.clearScreen()
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    let ship1: number[];
    let ship = [parseInt(name), value]
    if (ship == ship1) {
        ship1 = [-1, -1]
    }
    
    if (ship == ship2) {
        ship1 = [-1, -1]
    }
    
    if (ship == ship3) {
        ship1 = [-1, -1]
    }
    
})
while (true) {
    if (ship1 == [-1, -1] && ship2 == [-1, -1] && ship3 == [-1, -1]) {
        break
    }
    
    input.onButtonPressed(Button.A, on_button_pressed_a)
    input.onButtonPressed(Button.B, on_button_pressed_b)
    led.toggle(a, b)
    basic.pause(750)
    led.toggle(a, b)
    radio.sendValue("" + a, b)
}
basic.clearScreen()
basic.showString("You lose!")
