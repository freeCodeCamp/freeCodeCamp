---
title: Python Any Iterable
localeTitle: Python任何可迭代的
---
`any()`是Python 3（以及2.5版以来的Python 2 `any()`中的内置函数，用于检查[_iterable的_](https://docs.python.org/3/glossary.html#term-iterable)任何项是否为`True` 。它需要一个参数， `iterable` 。

## 论据

### 迭代

`iterable`参数是要检查其条目的集合。它通常可以是`list` ， `str` ， `dict` ， `tuple`等，甚至是`file object` 。

## 回报价值

返回值是一个布尔值。当且仅当iterable的**所有**条目都为`False` ，或者`iterable`为空时;它返回`False` 。该函数基本上对所有元素执行布尔`OR`运算。

如果其中一个为`True` ，则返回`True` 。

`any()`操作等效于（内部，可能不完全像这样实现）
```
def any(iterable): 
    for element in iterable: 
        if element: 
            return True 
    return False 
```

## 代码示例
```
print(any([])) #=> False 
 print(any({})) #=> False 
 print(any([None])) #=> False 
 print(any(['', {}, 0])) #=> False 
 print(any([6, 7])) #=> True 
 print(any([6, 7, None])) #=> True 
 print(any([0, 6, 7])) #=> True 
 print(any([9, 8, [1, 2]])) #=> True 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CL9c/0)

[官方文件](https://docs.python.org/3/library/functions.html#any)