def on_received_number(receivedNumber):
    global id2
    id2 = id2
radio.on_received_number(on_received_number)

id2 = 0
radio.set_group(0)
id2 = 0

def on_forever():
    pass
basic.forever(on_forever)
