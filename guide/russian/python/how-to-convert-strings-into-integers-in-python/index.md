---
title: How to Convert Strings into Integers in Python
localeTitle: Как преобразовать строки в целые числа в Python
---
## Как преобразовать строки в целые числа в Python

Подобно встроенной функции `str()` , Python также предлагает удобный встроенный элемент, который принимает строковый объект в качестве аргумента и возвращает соответствующий целочисленный объект.

#### Пример использования:

```py
# Here age is a string object 
 age = "18" 
 print(age) 
 # Converting string to integer 
 int_age = int(age) 
 print(int_age) 
```

Вывод

```py
18 
 18 
```

Здесь, хотя вывод визуально похож, но вы должны иметь в виду, что первая строка печатает строковый объект, а строка рядом с ним печатает целочисленный объект, который далее проиллюстрирован в следующем примере:

```py
age = "18" 
 print(age+2) 
```

Вывод:

```py
Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 TypeError: cannot concatenate 'str' and 'int' objects 
```

`The error should make it clear to you that you need to convert the` объект age в целое число, прежде чем добавлять что-то к нему.

```py
age = "18" 
 age_int = int(age) 
 print(age_int+2) 
```

Вывод:

```py
20 
```

Но вы должны иметь в виду некоторые особые случаи:

1.  Плавающая точка (целое число с дробной частью) в качестве аргумента вернет float, округленное до ближайшего целого целого. Например: `print(int(7.9))` напечатает `7` . Также `print(int("7.9"))` приведет к ошибке, поскольку строка является недопустимым аргументом для преобразования в целое число.
    
    ```py
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: '7.9' 
    
    ```
    
2.  Также любое целое число в словах, если задано в качестве аргумента, вернет ту же ошибку, что и выше: `print(int("one"))` выдаст ошибку следующим образом:
    
    ```py
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: 'one' 
    
    ```
    

#### Дополнительная информация:

Официальная документацию для `int()` встроенные можно найти [здесь](https://docs.python.org/3.6/library/functions.html#int)