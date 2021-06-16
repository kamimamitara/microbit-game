radio.setGroup(121181)
while (!input.buttonIsPressed(Button.A)) {
    basic.showString("Battleship Micro:bit Edition")
}
let a = 0
while (!input.buttonIsPressed(Button.A)) {
    led.toggle(a, a)
    led.toggle(a, a)
    a += 1
}
