---
title: Functions
localeTitle: функции
---
## функции

Функция позволяет вам определить многоразовый блок кода, который может выполняться многократно в вашей программе.

Функции позволяют создавать более сложные и [сухие](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) решения сложных проблем.

Хотя Python уже предоставляет множество встроенных функций, таких как `print()` и `len()` , вы также можете определить свои собственные функции для использования в ваших проектах.

Одним из больших преимуществ использования функций в вашем коде является то, что он уменьшает общее количество строк кода в вашем проекте.

### Синтаксис

В Python определение функции имеет следующие функции:

1.  Ключевое слово `def`
2.  имя функции
3.  paranthesis '()' и внутри входных параметров paranthesis, хотя входные параметры являются необязательными.
4.  двоеточие ':'
5.  некоторый блок кода для выполнения
6.  оператор возврата (необязательно)

```python
# a function with no parameters or returned values 
 def sayHello(): 
  print("Hello!") 
 
 sayHello()  # calls the function, 'Hello!' is printed to the console 
 
 # a function with a parameter 
 def helloWithName(name): 
  print("Hello " + name + "!") 
 
 helloWithName("Ada")  # calls the function, 'Hello Ada!' is printed to the console 
 
 # a function with multiple parameters with a return statement 
 def multiply(val1, val2): 
  return val1 * val2 
 
 multiply(3, 5)  # prints 15 to the console 
```

Функции - это блоки кода, которые можно повторно использовать, вызывая функцию. Это позволяет простое и элегантное повторное использование кода без явного переписывания разделов кода. Это делает код более читаемым, упрощает отладку и ограничивает ошибки ввода.

Функции в Python создаются с использованием ключевого слова `def` , за которым следуют имя функции и параметры функции в круглых скобках.

Функция всегда возвращает значение. Ключевое слово `return` используется функцией для возврата значения, если вы не хотите возвращать какое-либо значение, значение по умолчанию `None` будет возвращено.

Имя функции используется для вызова функции, передающей необходимые параметры в круглых скобках.

```python
# this is a basic sum function 
 def sum(a, b): 
  return a + b 
 
 result = sum(1, 2) 
 # result = 3 
```

Вы можете определить значения по умолчанию для параметров, таким образом Python будет интерпретировать, что значение этого параметра является значением по умолчанию, если ни один не указан.

```python
def sum(a, b=3): 
  return a + b 
 
 result = sum(1) 
 # result = 4 
```

Вы можете передать параметры в том порядке, который вы хотите, используя имя параметра.

```python
result = sum(b=2, a=2) 
 # result = 4 
```

Тем не менее, невозможно передать аргумент ключевого слова перед не ключевым словом

```Python
result = sum(3, b=2) 
 #result = 5 
 result2 = sum(b=2, 3) 
 #Will raise SyntaxError 
```

Функции также являются объектами, поэтому вы можете назначить их переменной и использовать эту переменную как функцию.

```python
s = sum 
 result = s(1, 2) 
 # result = 3 
```

### Заметки

*   Если определение функции включает параметры, вы должны указать одинаковое количество параметров при вызове функции.
    
    ```python
    print(multiply(3))  # TypeError: multiply() takes exactly 2 arguments (0 given) 
     
     print(multiply('a', 5))  # 'aaaaa' printed to the console 
     
     print(multiply('a', 'b'))  # TypeError: Python can't multiply two strings 
    
    ```
    
*   Блок кода, который будет выполнять эта функция, включает все инструкции, отступы внутри функции.
    
    ```python
    def myFunc(): 
     print('this will print') 
     print('so will this') 
     
     x = 7 
     # the assignment of x is not a part of the function since it is not indented 
    
    ```
    
*   Переменные, определенные внутри функции, существуют только в пределах этой функции.
    
    ```python
    def double(num): 
     x = num * 2 
     return x 
     
     print(x)  # error - x is not defined 
     print(double(4))  # prints 8 
    
    ```
    
    \-Python интерпретирует функциональный блок только при вызове функции, а не когда функция определена. Даже если блок определения функции содержит какую-то ошибку, интерпретатор python укажет на это только тогда, когда вызывается функция.
    

### Дополнительная информация:

*   [Python 3 Docs: определение функций](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)