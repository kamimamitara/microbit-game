radio.set_group(121)
radio.send_number(0)
ship1=[0,0]
ship2=[0,0]
ship3=[0,0]

a = 0
b = 0

def on_button_pressed_a():
    global a
    global b
    a+=1
    

def on_button_pressed_b():
    global a
    global b
    b+=1

while not input.logo_is_pressed():
    input.on_button_pressed(Button.A, on_button_pressed_a)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    led.toggle(a,b)
    led.toggle(a,b)
    basic.pause(750)
    led.toggle(a,b)

ship1= [a,b]
a=0
b=0
basic.clear_screen()
basic.show_icon(IconNames.YES)
basic.pause(1000)
basic.clear_screen()

while not input.logo_is_pressed():
    input.on_button_pressed(Button.A, on_button_pressed_a)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    led.toggle(a,b)
    led.toggle(a,b)
    basic.pause(750)
    led.toggle(a,b)
ship2= [a,b]

a=0
b=0
basic.clear_screen()
basic.show_icon(IconNames.YES)
basic.pause(1000)
basic.clear_screen()

while not input.logo_is_pressed():
    input.on_button_pressed(Button.A, on_button_pressed_a)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    led.toggle(a,b)
    led.toggle(a,b)
    basic.pause(750)
    led.toggle(a,b)
ship3= [a,b]

basic.clear_screen()
basic.show_icon(IconNames.YES)
basic.pause(1000)
basic.clear_screen()

def on_received_value(name, value):
    global ship1
    global ship2
    global ship3
    if name == "hit":
        basic.show_string("Hit!")
    else:
        ship = [int(name),value]
        if (ship[0] == ship1[0] and ship[1] == ship1[1]):
            radio.send_value("hit", 1)
            ship1 = [-1,-1]
        if (ship[0] == ship2[0] and ship[1] == ship2[1]):
            radio.send_value("hit", 2)
            ship2 = [-1,-1]
        if (ship[0] == ship3[0] and ship[1] == ship3[1]):
            radio.send_value("hit", 3)
            ship3 = [-1,-1]
radio.on_received_value(on_received_value)



while True:
    if (ship1== [-1,-1] and ship2 == [-1,-1] and ship3== [-1,-1]):
        basic.clear_screen()
        basic.show_string("You lose!")
    input.on_button_pressed(Button.A, on_button_pressed_a)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    led.toggle(a,b)
    led.toggle(a,b)
    basic.pause(750)
    led.toggle(a,b)
    if input.logo_is_pressed():
        basic.clear_screen()
        basic.show_string("c")
        basic.pause(1000)
        basic.clear_screen()
        radio.send_value(str(a), b)
        a = 0
        b = 0

