---
title: Docstring
localeTitle: строка документации
---
## строка документации

Docstring - это способ для разработчиков передать цели, параметры, требования и использование функции в Python другим разработчикам. Это позволяет упростить обслуживание и понимание кода.

В отличие от обычных комментариев исходного кода, docstring должен описывать, что функция., нет как.

Аналогичным примером для Docstring является @Javadoc в Java.

Docstring записывается как многострочный комментарий сразу после заголовка объявления в Python. В docstring имеется 4 различных части:

1.  Тип ввода и тип вывода
    *   Ввод / вывод может быть `obj, list, bool, int, str, float`
2.  Описание функции
    *   Краткое, но подробное описание того, что делает ваша функция
3.  Требования
    *   Это читает человек, поэтому он не должен быть кодом
4.  Испытательные случаи (обычно 2-3)

Ниже приведен общий формат.

## Формат Docstring

```python
def my_examplefunc(input_type1, input_type2): 
  '''(input_type1, input_type2) -> output_type        # Your first line will be the input/output. Remember the space around the arrow! 
  Here is a description of my example function        # Your second line will be the description 
  REQ: type(input_type1) == list                      # Your next line (or lines) will be the requirements for the input of your function 
  REQ: type(input_type2) == str 
  >>> my_example_func([2, 3], "Hello World!")         # After the requirements come test cases 
  [2, 3] "Hello World" 
  >>> my_example_func([7, 2], "Another test case")    # Your first line of the test case is an example of the usage, prefaced by >>> 
  [7, 2] "Another test case"                          # Your second line of the test case is the output 
  >>> my_example_func([5, 6], "Last test case") 
  [5, 6] "Last test case" 
  ''' 
  # Your code goes here, underneath the Docstring 
```

Docstring лучше всего разбирается в примерах, поэтому взгляните на приведенную ниже примерную программу, где программа выводит True, если число меньше 5, а False - если число больше 5.

## Пример 1

```python
def is_less_than_five(some_number): 
  '''(int) -> bool 
  Returns True if the given number is less than 5, and False is the given number is greater than 5. 
  REQ: some_number != 5 
  >>> is_less_than_five(4) 
  True 
  >>> is_less_than_five(6) 
  False 
  >>> is_less_than_five(100000) 
  False 
  ''' 
  # Your code goes here 
```

### Некоторые полезные ссылки:

Numpy и Google Docstrings - два широко используемых подхода:

*   Google: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_google.html
*   Numpy: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_numpy.html Кроме того, обратитесь к некоторым старым старым комментариям PEP: https://www.python.org/dev/peps/pep-0257/