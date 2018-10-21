---
title: Generators
localeTitle: Генераторы
---
## Генераторы

Генераторы - это особый тип функции, который позволяет возвращать значения без завершения функции. Он делает это, используя ключевое слово `yield` . Подобно `return` , выражение `yield` возвращает значение вызывающему. Ключевое различие между ними состоит в том, что `yield` приостанавливает функцию, позволяя в будущем возвращать больше значений.

Генераторы являются итерабельными, поэтому их можно использовать чисто для циклов или чего-либо еще, что итерации.

```python
def my_generator(): 
    yield 'hello' 
    yield 'world' 
    yield '!' 
 
 for item in my_generator(): 
    print(item) 
 
 # output: 
 # hello 
 # world 
 # ! 
```

Как и другие итераторы, генераторы могут быть переданы `next` функции для извлечения следующего элемента. Когда генератор не имеет больше значений, `StopIteration` ошибка `StopIteration` .

```python
g = my_generator() 
 print(next(g)) 
 # 'hello' 
 print(next(g)) 
 # 'world' 
 print(next(g)) 
 # '!' 
 print(next(g)) 
 # Traceback (most recent call last): 
 #   File "<stdin>", line 1, in <module> 
 # StopIteration 
```

Генераторы особенно полезны, когда вам нужно создать большой набор значений, но им не нужно сохранять их все в памяти одновременно. Например, если вам нужно напечатать первые миллионы чисел фибоначчи, вы обычно возвращаете список из миллиона значений и перебираете список для печати каждого значения. Однако с генератором вы можете возвращать каждое значение по одному за раз:

```python
def fib(n): 
    a = 1 
    b = 1 
    for i in range(n): 
        yield a 
        a, b = b, a + b 
 
 for x in fib(1000000): 
    print(x) 
```

### Больше информации

*   [PEP 255](https://www.python.org/dev/peps/pep-0255/)
*   [Python Wiki](https://wiki.python.org/moin/Generators)
*   [Документация о выходе](https://docs.python.org/2/reference/simple_stmts.html#yield)