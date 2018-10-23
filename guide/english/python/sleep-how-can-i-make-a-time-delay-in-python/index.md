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

Floating point numbers can be given as the argument to `sleep()` for more precise sleep times.

#### More Information:
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
