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
