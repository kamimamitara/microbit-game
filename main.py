radio.set_group(121181)
def startMenu():
    while not input.button_is_pressed(Button.A):
        basic.show_string("War Micro:bit Edition")
    findGame.find_Game()

class findGame:
    #look for available games
    def find_Game():
        gameFound = false  
        radio.on_received_string(on_received_string)
        while gameFound:
            for a in 1,2,3:
                radio.send_string("open?")

        
    def on_received_string(self, receivedString):
        if receivedString == "open?":
            if status == "inGame":
                radio.send_string("closed")
        if receivedString == "closed":
            status = false

class cardGame:
    def __init__(self):
        self.data = []

    
