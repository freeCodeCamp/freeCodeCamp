---
title: Python Input Function
localeTitle: Входная функция Python
---
Много раз в программе нам нужен какой-то ввод от пользователя. Ввод данных от пользователя заставляет программу чувствовать себя интерактивной. В Python 3 для ввода ввода у пользователя есть функция `input()` . Если вызывается функция ввода, поток программы будет остановлен до тех пор, пока пользователь не даст вход и не завершит вход с помощью клавиши возврата. Давайте посмотрим несколько примеров:

1.  Когда мы просто хотим принять вход:
    
    # Это просто даст подсказку без какого-либо сообщения
    
    inp = input ()
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CUqX/0)

1.  Чтобы дать подсказку с сообщением:
    
    prompt _с_ сообщением = input (' «)
    
    # \_
    
    # «\_» На выходе - это приглашение
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CUqX/1)

3\. Когда мы хотим взять целочисленный ввод:
```
number = int(input('Please enter a number: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CUqX/2)

Если вы введете не целое значение, тогда Python вызовет ошибку `ValueError` . **Поэтому всякий раз, когда вы используете это, убедитесь, что вы его тоже поймали.** В противном случае ваша программа неожиданно остановится после запроса.
```
number = int(input('Please enter a number: ')) 
 # Please enter a number: as 
 # Enter a string and it will throw this error 
 # ValueError: invalid literal for int() with base 10 'as' 
```

4\. Когда нам нужен ввод строки:
```
string = str(input('Please enter a string: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CUqX/3)

Хотя, входы хранятся по умолчанию в виде строки. Использование функции `str()` позволяет считывателю кода понять, что вход будет «строкой». Хорошая практика - указать, какой тип ввода будет сделан заранее.

[Официальные документы](https://docs.python.org/3/library/functions.html#input)