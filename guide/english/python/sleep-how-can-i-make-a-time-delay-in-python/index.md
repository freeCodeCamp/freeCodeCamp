---
title: Sleep How Can I Make a Time Delay in Python
---
## Sleep How Can I Make a Time Delay in Python

The `time` module in the Python standard library contains the function `sleep()` which suspends a program for a given number of seconds.

Example:

```
import time

for letter in 'hello, world!':
    print(letter)
    time.sleep(2)  # sleep 2 seconds between each print
```

When using sleep, you can define the amount of time that the program is suspended using either an integer (a whole number) or a float (a number with decimal places), depending on the level of control you want over the time that the program sleeps. For example, `time.sleep(10)` would suspend a program for 10 seconds, while `time.sleep(5.5)` would suspend a program for five and a half seconds.

#### More Information
Time module <a href='https://docs.python.org/3/library/time.html#time.sleep' target='_blank' rel='nofollow'>documentation</a> on the sleep function.

Another method to achieve a time delay will be by using selenium related waits, which can be either implicit wait or waiting until an expected condition.
Implicit Wait
```
from selenium import webdriver

#below code initializes a chrome webdriver, and we can apply waits using it  
    driver = webdriver.Chrome('driver_path')
    driver.implicitly_wait(5)
```
Wait until Excpected Condition
```
self.wait.until(EC.presence_of_element_located((By.ID, '<Id of the element you are waiting for>'))
```
