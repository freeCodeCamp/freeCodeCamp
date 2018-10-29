---
title: String Join Method
localeTitle: Метод объединения строк
---
## Метод объединения строк

Метод `str.join(iterable)` используется для объединения всех элементов в `iterable` с указанной строкой `str` . Если итерабельность содержит любые значения, отличные от строки, это вызывает исключение TypeError.

`iterable` : Все повторяющиеся строки. Может быть список строк, кортеж строки или даже простая строка.

#### Примеры

1) Присоединитесь к строке строк `":"`

```python
print ":".join(["freeCodeCamp", "is", "fun"]) 
```

Вывод

```shell
freeCodeCamp:is:fun 
```

2) Присоедините кортеж строк с `" and "`

```python
print " and ".join(["A", "B", "C"]) 
```

Вывод

```shell
A and B and C 
```

3) Вставьте `" "` после каждого символа в строке

```python
print " ".join("freeCodeCamp") 
```

Вывод:

```shell
free C ode C amp 
```

4) Соединение с пустой строкой.

```python
list1 = ['p','r','o','g','r','a','m'] 
 print("".join(list1)) 
```

Вывод:

```shell
program 
```

5) Соединение с множествами.

```python
test =  {'2', '1', '3'} 
 s = ', ' 
 print(s.join(test)) 
```

Вывод:

```shell
2, 3, 1 
```

#### Дополнительная информация:

[Документация Python на String Join](https://docs.python.org/2/library/stdtypes.html#str.join)