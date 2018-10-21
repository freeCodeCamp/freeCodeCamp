---
title: Sleep How Can I Make a Time Delay in Python
localeTitle: Sleep Как я могу сделать задержку времени в Python
---
## Sleep Как я могу сделать задержку времени в Python

Модуль `time` в стандартной библиотеке Python содержит функцию `sleep()` которая приостанавливает программу на заданное количество секунд.

Пример:
```
import time 
 
 for letter in 'hello, world!': 
    print(letter) 
    time.sleep(2)  # sleep 2 seconds between each print 
```

Числа с плавающей запятой могут быть указаны как аргумент `sleep()` для более точного времени сна.

#### Дополнительная информация:

[Документация](https://docs.python.org/3/library/time.html#time.sleep) модуля времени на функцию сна.