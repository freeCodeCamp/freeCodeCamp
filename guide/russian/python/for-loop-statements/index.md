---
title: For Loop Statements
localeTitle: Записи цикла
---
## Записи цикла

Python использует цикл for для перебора списка элементов. В отличие от C или Java, которые используют цикл for для изменения значения в шагах и доступа к чему-то, например массиву, используя это значение.

Для циклов итерации по структурам данных на основе сбора данных, таким как списки, кортежи и словари.

Основной синтаксис:

```python
for value in list_of_values: 
  # use value inside this block 
```

В общем, вы можете использовать что-либо как значение итератора, где могут быть назначены записи итерации. Например, вы можете распаковать кортежи из списка кортежей:

```python
list_of_tuples = [(1,2), (3,4)] 
 
 for a, b in list_of_tuples: 
  print("a:", a, "b:", b) 
```

С другой стороны, вы можете перебрать все, что итерабельно. Вы можете вызвать функцию или использовать литерал списка.

```python
for person in load_persons(): 
  print("The name is:", person.name) 
```

```python
for character in ["P", "y", "t", "h", "o", "n"]: 
  print("Give me a '{}'!".format(character)) 
```

Некоторые способы использования циклов For:

**Итерация по функции range ()**

```python
for i in range(10): 
    print(i) 
```

Вместо того, чтобы быть функцией, диапазон фактически является неизменным типом последовательности. Результат будет содержать результаты от нижней границы, т. Е. 0 до верхней границы, т. Е. 10, но исключая 10.By по умолчанию нижняя граница или начальный индекс устанавливается на ноль. Вывод:
```
> 
 0 
 1 
 2 
 3 
 4 
 5 
 6 
 7 
 8 
 9 
 > 
```

Кроме того, можно указать нижнюю границу последовательности и даже шаг последовательности, добавив второй и третий параметры.

```python
for i in range(4,10,2): #From 4 to 9 using a step of two 
    print(i) 
```

Вывод:
```
> 
 4 
 6 
 8 
 > 
```

**Функция xrange ()**

По большей части, xrange и range являются точными с точки зрения функциональности. Они оба предоставляют способ генерации списка целых чисел для вас, но, как вам угодно. Единственное различие заключается в том, что диапазон возвращает объект списка Python, а xrange возвращает объект xrange. Это означает, что xrange фактически не создает статический список во время выполнения, например, диапазон. Он создает ценности по мере необходимости с помощью специального метода, называемого yielding. Этот метод используется с типом объекта, который известен как генераторы.

Еще одна вещь, которую нужно добавить. В Python 3.x функция xrange больше не существует. Функция диапазона теперь делает то, что делает xrange в Python 2.x

**Итерировать значения в списке или кортеже**

```python
A = ["hello", 1, 65, "thank you", [2, 3]] 
 for value in A: 
    print(value) 
```

Вывод:
```
> 
 hello 
 1 
 65 
 thank you 
 [2, 3] 
 > 
```

**Итерации по клавишам в словаре (aka hashmap)**

```python
fruits_to_colors = {"apple": "#ff0000", 
                    "lemon": "#ffff00", 
                    "orange": "#ffa500"} 
 
 for key in fruits_to_colors: 
    print(key, fruits_to_colors[key]) 
```

Вывод:
```
> 
 apple #ff0000 
 lemon #ffff00 
 orange #ffa500 
 > 
```

**Итерацию над двумя списками одинакового размера в одном цикле с помощью функции zip ()**

\`\` \`\` Питон A = \["a", "b", "c"\] B = \["a", "d", "e"\]

для a, b в zip (A, B): print a, b, a == b
```
Output: 
```

\> aa True bd False Неверно >
```
**Iterate over a list and get the corresponding index with the enumerate() function** 
```

питон A = \["this", "is", "something", "fun"\]

для индекса, слова в перечислении (A): print (индекс, слово)
```
Output: 
```

\> 0 это 1 - 2 что-то 3 весело >
```
A common use case is iterating over a dictionary: 
```

питон для имени, номер телефона в contacts.items (): print (имя, «доступно под», номер телефона)
```
If you absolutely need to access the current index of your iteration, do **NOT** use `range(len(iterable))`! This is an extremely bad practice and will get you plenty of chuckles from senior Python developers. Use the built in function `enumerate()` instead: 
```

питон для индекса, элемент в перечислении (shopping\_basket): print («Item», index, «is», item)
```
**for/else statements** 
 Pyhton permits you to use else with for loops, the else case is executed when none of the conditions with in the loop body was satisfied. To use the else we have to make use of `break` statement so that we can break out of the loop on a satsfied condition.If we do not break out then the else part will be executed. 
```

питон недельные _дни = \['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'\] Сегодня = 'Суббота' за день в неделю_ : если день == сегодня: print ('сегодня - недельный день') перерыв еще: print («сегодня не день недели»)
```
In the above case the output will be `today is not a week day` since the break within the loop will never be executed. 
 
 **Iterate over a list using inline loop function** 
 
 We could also iterate inline using python, for example if we need to uppercase all the words in a list from a list we could simply do the following: 
```

питон A = \["this", "is", "awesome", "shinning", "star"\]

UPPERCASE = \[word.upper () для слова в A\] print (UPPERCASE)
```
Output: 
```

\> \[«ЭТО», «ЕСТЬ», «УДИВИТЕЛЬНОЕ», «СИНХРОНИЗАЦИЯ», «ЗВЕЗДА») > \`\` \`

#### Дополнительная информация:

*   [Документация Python2 для цикла](https://docs.python.org/2.7/tutorial/controlflow.html#for-statements)
    
*   [Python3 для документации по циклам](https://docs.python.org/3/tutorial/controlflow.html#for-statements)