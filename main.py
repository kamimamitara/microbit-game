radio.set_group(121181)


while not input.button_is_pressed(Button.A):
    basic.show_string("Battleship Micro:bit Edition")

a = 0
while not input.button_is_pressed(Button.A):
    led.toggle(a, a)
    led.toggle(a, a)
    a+

    
