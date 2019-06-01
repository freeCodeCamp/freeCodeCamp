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
