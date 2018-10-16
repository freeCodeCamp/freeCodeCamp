---
title: If Elif Else Statements
localeTitle: Если Elif Else Statementments
---
## Если Elif Else Statementments

Структура `if` / `elif` / `else` - это общий способ управления потоком программы, позволяющий выполнять определенные блоки кода в зависимости от значения некоторых данных. Если условие, следующее за ключевым словом `if` оценивается как `true` , блок кода будет выполняться: Обратите внимание, что скобки не используются до и после проверки условий, как на других языках.

```python
if True: 
  print('If block will execute!') 
```

```python
x = 5 
 
 if x > 4: 
  print("The condition was true!") #this statement executes 
```

Вы можете дополнительно добавить ответ `else` который будет выполняться, если условие `false` :

```python
if not True: 
  print('If statement will execute!') 
 else: 
  print('Else statement will execute!') 
```

Или вы также можете увидеть этот пример

```python
y = 3 
 
 if y > 4: 
  print("I won't print!") #this statement does not execute 
 else: 
  print("The condition wasn't true!") #this statement executes 
```

_Обратите внимание, что нет никакого условия, следуя ключевому слову `else` - он ловит все ситуации, когда условие было `false`_

Несколько условий можно проверить, включив одну или несколько проверок `elif` после вашего первоначального оператора `if` но будет выполнено только одно условие:

```python
z = 7 
 
 if z > 8: 
  print("I won't print!") #this statement does not execute 
 elif z > 5: 
  print("I will!") #this statement will execute 
 elif z > 6: 
  print("I also won't print!") #this statement does not execute 
 else: 
  print("Neither will I!") #this statement does not execute 
```

_Обратите внимание, что будет выполняться только первое условие, которое оценивается как `true` . Несмотря на то, что `z > 6` `true` , блок `if/elif/else` завершается после первого истинного условия. Это означает, что `else` будет выполняться только в том случае, если ни одно из условий не было `true` ._

Мы также можем создавать вложенные if для принятия решений. Перед тем, как раньше, обратитесь к разделу href = 'https: //guide.freecodecamp.org/python/code-blocks-and-indentation' target = '\_ blank' rel = 'nofollow'> отступов до предыдущего.

Давайте возьмем пример нахождения числа, которое равно и больше, чем '10 \`
```
python 
 x = 34 
 if x %  2 == 0:  # this is how you create a comment and now, checking for even. 
  if x > 10: 
    print("This number is even and is greater than 10") 
  else: 
    print("This number is even, but not greater 10") 
 else: 
  print ("The number is not even. So point checking further.") 
```

Это был простой пример для вложенных if. Пожалуйста, не стесняйтесь изучать больше онлайн.

Хотя приведенные выше примеры просты, вы можете создавать сложные условия, используя [логические сравнения](https://guide.freecodecamp.org/python/comparisons) и [логические операторы](https://guide.freecodecamp.org/python/boolean-operations) .

**_Встроенный оператор python if-else_**

Мы также можем использовать операторы if-else встроенные функции python Следующий пример должен проверить, больше ли число или равно 50, если да, верните True:
```
python 
 x = 89 
 is_greater = True if x >= 50 else False 
 
 print(is_greater) 
```

Вывод
```
> 
 True 
 > 

```