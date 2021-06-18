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
    let ship: number[];
    
    
    
    if (name == "hit") {
        basic.showString("Hit!")
    } else {
        ship = [parseInt(name), value]
        if (ship[0] == ship1[0] && ship[1] == ship1[1]) {
            radio.sendValue("hit", 1)
            ship1 = [-1, -1]
        }
        
        if (ship[0] == ship2[0] && ship[1] == ship2[1]) {
            radio.sendValue("hit", 2)
            ship2 = [-1, -1]
        }
        
        if (ship[0] == ship3[0] && ship[1] == ship3[1]) {
            radio.sendValue("hit", 3)
            ship3 = [-1, -1]
        }
        
    }
    
})
while (true) {
    if (ship1 == [-1, -1] && ship2 == [-1, -1] && ship3 == [-1, -1]) {
        basic.clearScreen()
        basic.showString("You lose!")
    }
    
    input.onButtonPressed(Button.A, on_button_pressed_a)
    input.onButtonPressed(Button.B, on_button_pressed_b)
    led.toggle(a, b)
    led.toggle(a, b)
    basic.pause(750)
    led.toggle(a, b)
    if (input.logoIsPressed()) {
        basic.clearScreen()
        basic.showString("c")
        basic.pause(1000)
        basic.clearScreen()
        radio.sendValue("" + a, b)
        a = 0
        b = 0
    }
    
}
