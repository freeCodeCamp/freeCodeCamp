---
title: Python Import Statements
localeTitle: Операции импорта Python
---
Изучая программирование и чтение некоторых ресурсов, вы столкнулись с этим словом «абстракция», что просто означает как можно больше уменьшить и повторно использовать код.

Функции и модули облегчают абстрагирование. Вы создаете функции, когда хотите что-то повторять в файле.

Модули входят в изображение, если вы хотите повторно использовать группу функций в разных исходных файлах. Модули также полезны для структурирования программы.

*   Использование стандартных библиотек и других сторонних модулей:
*   Структурирование программы

## Использование стандартных библиотек

Пример. Подробно вы можете прочитать о методах и функциях всех стандартных библиотек в официальных документах Python. ( https://docs.python.org/3/)

```python
import time 
 for i in range(100): 
    time.sleep(1)   # Waits for 1 second and then executes the next command 
    print(str(i) + ' seconds have passed')  # prints the number of seconds passed after the program was started 
```
![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CS6C)

```python
# To calculate the execution time of a part of program 
 import time 
 start = time.time() 
 # code here 
 end = time.time() 
 print('Execution time:' , end-start) 
```
![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CS6C/1)

```python
# Using math Module 
 import math 
 print(math.sqrt(100))   # prints 10 
```
![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CS6C/2)

## Использование сторонних модулей

Модули сторонних разработчиков не поставляются в комплекте с python, но мы можем установить его извне с помощью менеджеров пакетов, таких как [`pip`](https://bootstrap.pypa.io/get-pip.py) и [`easy install`](https://bootstrap.pypa.io/ez_setup.py)
```python
# Например - "pip install requests" - установка модуля "requests"
# To make http requests 
 import requests 
 rq = requests.get(target_url) 
 print(rq.status_code) 
```

Узнайте больше о модуле python-запросов [здесь](http://docs.python-requests.org/en/master/)

## Структурировать программы

Мы хотим создать программу, которая имеет различные функции относительно простых чисел. Итак, начнем. Мы определим все функции в `prime_functions.py`:

```python
# prime_functions.py 
 from math import ceil, sqrt 
 def isPrime(a): 
    if a == 2: 
        return True 
    elif a % 2 == 0: 
        return False 
    else: 
        for i in range(3,ceil(sqrt(a)) + 1,2): 
            if a % i == 0: 
                return False 
        return True 
 
 def print_n_primes(a): 
    i = 0 
    m = 2 
    while True: 
        if isPrime(m) ==True: 
            print(m) 
            i += 1 
        m += 1 
        if i == a: 
            break 
```

Теперь мы хотим использовать функции, которые мы только что создали в `prime_functions.py` чтобы мы создали новый файл `playground.py` для использования этих функций.

> _Обратите внимание, что эта программа слишком проста для создания двух отдельных файлов, это просто для демонстрации. Но когда есть большие сложные программы, создание разных файлов действительно полезно._

```python
# playground.py 
 import prime_functions 
 print(prime_functions.isPrime(29)) # returns True 
```

## Сортировка импорта

Хорошей практикой является сортировка модулей `import` в трех группах: импорт стандартных библиотек, импорт сторонних поставщиков и местный импорт. В каждой группе разумно сортировать по алфавиту по имени модуля. Вы можете найти [дополнительную информацию в PEP8](https://www.python.org/dev/peps/pep-0008/?#imports) .

Одним из самых важных для языка Python является разборчивость, а сортировка по алфавиту модулей быстрее читается и выполняется. Также легче проверить, что что-то импортировано, и избежать дублирования импорта.
