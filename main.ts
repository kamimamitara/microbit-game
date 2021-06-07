radio.setGroup(121181)

class findGame {
    // look for available games
    
    public on_received_string(receivedString: any) {
        let status: ?20925[];
        if (receivedString == "open?") {
            if (status == "inGame") {
                radio.sendString("closed")
            }
            
        }
        
        if (receivedString == "closed") {
            status = []
        }
        
    }
    
}

