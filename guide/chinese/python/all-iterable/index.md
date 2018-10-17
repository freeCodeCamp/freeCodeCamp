---
title: Python All Iterable
localeTitle: Python所有Iterable
---
`all()`是Python 3中的内置函数（以及2.5版以来的Python 2），用于检查[_iterable的_](https://docs.python.org/3/glossary.html#term-iterable)所有项是否为`True` 。它需要一个参数， `iterable` 。

## 论据

### 迭代

`iterable`参数是要检查其条目的集合。它可以是`list` ， `str` ， `dict` ， `tuple`等。

## 回报价值

返回值是一个布尔值。当且仅当`iterable` **所有**条目都是[真实的时](https://guide.freecodecamp.org/python/truth-value-testing) ，它返回`True` 。该函数基本上对所有元素执行布尔`AND`运算。

如果它们中的一个不是真的，则返回`False` 。

`all()`操作等效于（不是内部实现完全像这样）
```
def all(iterable): 
    for element in iterable: 
        if not element: 
            return False 
    return True 
```

## 代码示例
```
print(all([])) #=> True  # Because an empty iterable has no non-truthy elements 
 print(all([6, 7])) #=> True 
 print(all([6, 7, None])) #=> False  # Because it has None 
 print(all([0, 6, 7])) #=> False  # Because it has zero 
 print(all([9, 8, [1, 2]])) #=> True 
 print(all([9, 8, []])) #=> False  # Because it has [] 
 print(all([9, 8, [1, 2, []]])) #=> True 
 print(all([9, 8, {}])) #=> False  # Because it has {} 
 print(all([9, 8, {'engine': 'Gcloud'}])) #=> True 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CL9U/0)

[官方文件](https://docs.python.org/3/library/functions.html#all)