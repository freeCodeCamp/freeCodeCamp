---
title: Lambda Expressions
localeTitle: Лямбда-выражения
---
## Лямбда-выражения

Лямбда-выражения идеально используются, когда у нас есть что-то простое, чтобы быть сделанным, мы больше заинтересованы в быстром выполнении работы, а не в формальном названии функции. Лямбда-выражения также известны как анонимные функции. [Помогите нашему сообществу расширить его](https://github.com/freecodecamp/guides/tree/master/src/pages/python/lambda-expressions/index.md) .

Лямбда-выражения в Python - это короткий способ объявить небольшие и анонимные функции (нет необходимости указывать имя для лямбда-функций). Лямбда-функции ведут себя так же, как обычные функции, объявленные с ключевым словом `def` . Они пригождаются, когда вы хотите кратко определить небольшую функцию. Они могут содержать только одно выражение, поэтому они не подходят для функций с операторами потока управления. мастер

#### Синтаксис лямбда-функции

`lambda arguments: expression`

Лямбда-функции могут иметь любое количество аргументов, но только одно выражение

#### Пример кода

```py
# Lambda function to calculate square of a number 
 square = lambda x: x ** 2 
 print(square(3)) # Output: 9 
 
 # Traditional function to calculate square of a number 
 def square1(num): 
  return num ** 2 
 print(square(5)) # Output: 25 
```

В приведенном выше примере `lambda x: x ** 2` дает анонимный функциональный объект, который может быть связан с любым именем. Таким образом, мы связали объект функции с `square` и, следовательно, с этого момента мы можем назвать `square` объект, как любая традиционная функция. например, `square(10)`

## Примеры

### начинающий

```py
lambda_func = lambda x: x**2 # Function that takes an integer and returns its square 
 lambda_func(3) # Returns 9 
```

### промежуточный

```py
lambda_func = lambda x: True if x**2 >= 10 else False 
 lambda_func(3) # Returns False 
 lambda_func(4) # Returns True 
```

### Сложный

```py
my_dict = {"A": 1, "B": 2, "C": 3} 
 sorted(my_dict, key=lambda x: my_dict[x]%3) # Returns ['C', 'A', 'B'] 
```

### Использование регистра

Предположим, вы хотите отфильтровать нечетные числа из `list` . Вы можете использовать цикл `for` :

```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 filtered = [] 
 
 for num in my_list: 
     if num % 2 != 0: 
         filtered.append(num) 
 
 print(filtered)      # Python 2: print filtered 
 # [1, 3, 5, 7, 9] 
 ``` 
 
 You could write this as a one liner with list-comprehensions 
```

питон filter = \[x для x в \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\], если x% 2! = 0\] \`\` \`

Но у вас может возникнуть соблазн использовать встроенную функцию `filter` . Зачем? Первый пример - немного подробный, однострочный может быть сложнее понять, где в качестве `filter` предлагает лучшее из обоих слов. Более того, встроенные функции обычно быстрее.

\`\` \`\` Питон my\_list = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\]

filter = filter (lambda x: x% 2! = 0, my\_list)

Список (фильтруется)

# \[1, 3, 5, 7, 9\]

` `` NOTE: in Python 3 built in function return generator objects, so you have to call` список `, while in Python 2 they return a` список `,` кортеж `or` строку\`.

Что случилось? Вы сказали, что `filter` принимает каждый элемент в `my_list` и применяет лямбда-выражения. Значения, возвращающие `False` , отфильтровываются.

#### Дополнительная информация:

*   [Официальный документ](https://docs.python.org/3/reference/expressions.html#lambda)
*   [Дальнейшее чтение](https://dbader.org/blog/python-lambda-functions)