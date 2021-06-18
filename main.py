radio.set_group(121)
ship1=0
ship2=0
ship3=0
def on_received_number(receivedNumber):
    if (receivedNumber == ship1):
        ship1 = -1
    if (receivedNumber == ship2):
        ship1 = -1
    if (receivedNumber == ship3):
        ship1 = -1
radio.on_received_number(on_received_number)

a=0
while True:
    if not input.button_is_pressed(Button.A):
        for b in range(0,5):
            for a in range(0,5)
                led.toggle(b,a)
                basic.pause(750)
            led.toggle(a,a)
            a+=1
ship1= a


a=0
while True:
    if not input.button_is_pressed(Button.A):
        led.toggle(a,a)
        basic.pause(750)
        led.toggle(a,a)
        a+=1
ship2= a

a=0
while True:
    if input.button_is_pressed(Button.A):
        led.toggle(a,a)
        basic.pause(750)
        led.toggle(a,a)
        a+=1
ship3= a

while True:
    if (ship1==1 and ship2 ==-1 and ship3==-1):
        break
    if input.button_is_pressed(Button.A):
        led.toggle(a,a)
        basic.pause(750)
        led.toggle(a,a)
        a+=1
    radio.send_number(a)
basic.clear_screen()
basic.show_string("You lose!")