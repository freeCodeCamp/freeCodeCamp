---
title: Generators
localeTitle: 发电机
---
## 发电机

生成器是一种特殊类型的函数，它允许您在不结束函数的情况下返回值。它通过使用`yield`关键字来实现。与`return`类似， `yield`表达式将向调用者返回一个值。两者之间的关键区别在于`yield`将暂停该函数，允许将来返回更多值。

生成器是可迭代的，因此它们可以与for循环或任何其他迭代一起使用。

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

与其他迭代器一样，生成器可以传递给`next`函数以检索下一个项目。当生成器没有更多值可以生成时，会引发`StopIteration`错误。

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

当您需要创建大量值但不需要将它们全部保存在内存中时，生成器特别有用。例如，如果您需要打印第一百万个斐波那契数字，通常会返回一百万个值的列表并迭代列表以打印每个值。但是使用生成器，您可以一次返回一个值：

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

### 更多信息

*   [PEP 255](https://www.python.org/dev/peps/pep-0255/)
*   [Python Wiki](https://wiki.python.org/moin/Generators)
*   [收益表文件](https://docs.python.org/2/reference/simple_stmts.html#yield)