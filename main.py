radio.set_group(121180)
def startMenu():
    while not input.button_is_pressed(Button.A):
        basic.show_string("War Micro:bit Edition")
    while not input.button_is_pressed(Button.A):
        basic.show_string("Press a to search for a game!")
    findGame.find_Game()

class findGame:
    #look for available games
    def find_Game():
        gameFound = "false"
        radio.send_string("game")  
        radio.on_received_string(on_received_string)
        while gameFound:
                

        
    def on_received_string(self, receivedString):
        if receivedString == "open?":
            if status == "inGame":
                radio.send_string("closed")
        if receivedString == "closed":
            
        
#class cardGame:
#    def __init__(self):
#       self.data = []

    
