---
title: Python Input Function
localeTitle: Входная функция Python
---
Много раз в программе нам нужен какой-то ввод от пользователя. Ввод данных от пользователя заставляет программу чувствовать себя интерактивной. В Python 3 для ввода ввода у пользователя есть функция `input()` . Если вызывается функция ввода, поток программы будет остановлен до тех пор, пока пользователь не даст вход и не завершит вход с помощью клавиши возврата. Давайте посмотрим несколько примеров:

1.  Когда нам нужно просто получить данные:
    
    # Это будет просто пустая строка без какого-либо сообщения
    ```Python 
    inp = input ()
    ```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CUqX/0)

2.  Чтобы получить ввод с поясняющим сообщением:

    ```Python 
    prompt_with_message = input ('\_')
    ```
    
    # \_
    
    # «\_» Это сообщение которое увидит пользователь при вводе
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":Ракета:") [Код запуска](https://repl.it/CUqX/1)

3\. Когда нам нужен только целочисленный ввод:

```Python 
number = int(input('Please enter a number: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CUqX/2)

Если вы введете не целое значение, то Python вызовет ошибку `ValueError`. **Поэтому всякий раз, убедитесь, что вы используете его через обработчик ошибок.** В противном случае ваша программа неожиданно завершится после ввода.

```Python
number = int(input('Please enter a number: ')) 
 # Please enter a number: as 
 # Enter a string and it will throw this error 
 # ValueError: invalid literal for int() with base 10 'as' 
```

4\. Когда нам нужена именно строка:

```Python 
string = str(input('Please enter a string: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CUqX/3)

Хотя, все вводные данные хранятся в виде строки по умолчанию. Использование функции `str()` позволяет программисту понять, что данные будут именно «строкой». Хорошей практикой будет указать заранее, какой тип данных требуется.

[Официальные документы](https://docs.python.org/3/library/functions.html#input)
