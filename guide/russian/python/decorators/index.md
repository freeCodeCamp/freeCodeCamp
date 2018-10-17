---
title: Python Decorators
localeTitle: Декораторы Python
---
Декораторы по существу работают как обертки. Они изменяют поведение кода до и после выполнения целевой функции без необходимости изменения самой функции, дополняя исходную функциональность, тем самым ее украшая.

Прежде чем подробно рассказывать о декораторах, есть некоторые концепции, которые должны быть понятны. В Python функции являются объектами, и мы можем делать с ними много полезного материала.

> ### Присвоение функций переменным:
```
def greet(name): 
  return "Hello "+name 
 greet_someone = greet 
 print greet_someone("John") 
```

> Выход: Привет, Джон

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXGk)

> ### Определение функций внутри других функций:
```
def greet(name): 
  def get_message(): 
    return "Hello " 
  result = get_message()+name 
  return result 
 print(greet("John")) 
```

> Выход: Привет, Джон

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXGu)

> ### Функции также могут передаваться в качестве параметров для других функций:
```
def greet(name): 
  return "Hello " + name 
 def call_func(func): 
  other_name = "John" 
  return func(other_name) 
 print call_func(greet) 
```

> Выход: Привет, Джон

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXHC)

> ### Функции могут возвращать другие функции:
> 
> Другими словами, функции, генерирующие другие функции.
```
def compose_greet_func(): 
  def get_message(): 
    return "Hello there!" 
  return get_message 
 greet = compose_greet_func() 
 print(greet()) 
```

Результат: Привет!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXHG)

> ### Внутренние функции имеют доступ к охватывающей области
> 
> Более известный как [закрытие](http://www.shutupandship.com/2012/01/python-closures-explained.html) . Очень мощный образец, который мы встретим при создании декораторов. Еще одно замечание: Python разрешает [доступ](http://www.tech-thoughts-blog.com/2013/07/writing-closure-in-python.html) только для [чтения к внешней области,](http://www.tech-thoughts-blog.com/2013/07/writing-closure-in-python.html) а не к назначению. Обратите внимание, как мы изменили приведенный выше пример, чтобы прочитать аргумент «name» из охватывающей области внутренней функции и вернуть новую функцию.
```
def compose_greet_func(name): 
  def get_message(): 
      return "Hello there "+name+"!" 
  return get_message 
 greet = compose_greet_func("John") 
 print(greet()) 
```

> Результат: Привет, Джон!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXHI)

## Состав декораторов

Декораторы функций - это просто обертки для существующих функций. Объединяя идеи, упомянутые выше, мы можем построить декоратора. В этом примере рассмотрим функцию, которая переносит вывод строки другой функции с помощью p-тегов.
```
def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 def p_decorate(func): 
   def func_wrapper(name): 
       return "`<p>`{0}`</p>`".format(func(name)) 
   return func_wrapper 
 
 my_get_text = p_decorate(get_text) 
 print (my_get_text("John")) 
```

> Выход: `<p>` lorem ipsum, John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXHL)

Это был наш первый декоратор. Функция, которая принимает другую функцию в качестве аргумента, генерирует новую функцию, увеличивая работу исходной функции и возвращая сгенерированную функцию, чтобы мы могли ее использовать в любом месте. Чтобы `get_text` был оформлен `p_decorate` , нам просто нужно назначить get _text для результата p_ decorate.
```
get_text = p_decorate(get_text) 
 print (get_text("John")) 
```

> Выход: lorem ipsum, John dolor sit amet

Еще одно замечание заключается в том, что наша украшенная функция принимает аргумент имени. Все, что нам нужно было сделать в декораторе, - это позволить оболочке get\_text передать этот аргумент.

> ### Синтаксис стилиста Python

Python делает создание и использование декораторов немного более чистым и приятным для программиста через какой-то [синтаксический сахар.](http://en.wikipedia.org/wiki/Syntactic_sugar) Чтобы украсить _текст, нам не нужно получать_ text = p _decorator (получить_ текст). Для этого есть аккуратный ярлык, который должен упомянуть имя функции украшения перед функцией, которую нужно украсить. Имя декоратора должно быть перпендикулярно символу @.
```
def p_decorate(func): 
   def func_wrapper(name): 
       return "`<p>`{0}`</p>`".format(func(name)) 
   return func_wrapper 
 
 @p_decorate 
 def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 print get_text("John") 
```

> Выход: `<p>` lorem ipsum, John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXHN)

Теперь давайте рассмотрим, что мы хотели украсить нашу функцию get\_text двумя другими функциями, чтобы обернуть div и сильный тег вокруг вывода строки.
```
def p_decorate(func): 
   def func_wrapper(name): 
       return "`<p>`{0}`</p>`".format(func(name)) 
   return func_wrapper 
 
 def strong_decorate(func): 
    def func_wrapper(name): 
        return "`<strong>`{0}`</strong>`".format(func(name)) 
    return func_wrapper 
 
 def div_decorate(func): 
    def func_wrapper(name): 
        return "`<div>`{0}`</div>`".format(func(name)) 
    return func_wrapper 
```

При базовом подходе декорирование get\_text будет осуществляться в соответствии с
```
get_text = div_decorate(p_decorate(strong_decorate(get_text))) 
```

С синтаксисом декоратора Python то же самое можно добиться с гораздо большей выразительностью.
```
@div_decorate 
 @p_decorate 
 @strong_decorate 
 def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 print (get_text("John")) 
```

> Выход: `<div><p><strong>` lorem ipsum, John dolor sit amet `</strong></p></div>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXHQ)

Здесь важно отметить, что порядок установки наших декораторов имеет значение. Если в приведенном выше примере порядок был другим, результат был бы иным. ## Decorating Methods В Python методы - это функции, которые ожидают, что их первый параметр будет ссылкой на текущий объект. Мы можем создавать декораторы для методов одинаково, принимая во внимание функцию обертки.
```
def p_decorate(func): 
  def func_wrapper(self): 
    return "`<p>`{0}`</p>`".format(func(self)) 
  return func_wrapper 
 
 class Person(object): 
  def __init__(self): 
    self.name = "John" 
    self.family = "Doe" 
  @p_decorate 
  def get_fullname(self): 
    return self.name+" "+self.family 
 
 my_person = Person() 
 print (my_person.get_fullname()) 
```

> Выход: `<p>` Джон Доу `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXH2)

Намного лучше было бы сделать наш декоратор полезным для функций и методов. Это можно сделать, поместив [\* args и \*\* kwargs в](http://docs.python.org/2/tutorial/controlflow.html#arbitrary-argument-lists) качестве параметров для обертки, тогда он может принимать любое произвольное количество аргументов и аргументов ключевых слов.
```
def p_decorate(func): 
   def func_wrapper(*args, **kwargs): 
       return "`<p>`{0}`</p>`".format(func(*args, **kwargs)) 
   return func_wrapper 
 
 class Person(object): 
    def __init__(self): 
        self.name = "John" 
        self.family = "Doe" 
    @p_decorate 
    def get_fullname(self): 
        return self.name+" "+self.family 
 
 my_person = Person() 
 print (my_person.get_fullname()) 
```

> Выход: `<p>` Джон Доу `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXH5)

### Передача аргументов декораторам. Оглядываясь на пример до вышеприведенного, вы можете заметить, как избыточные декораторы в этом примере. 3 декоратора ( _украшают_ div _, p_ decorate, strong\_decorate), каждый с одинаковой функциональностью, но обертывает строку разными тегами. Мы можем определенно сделать намного лучше, чем это. Почему бы не иметь более общую реализацию для той, которая берет тег для обертывания в виде строки? Да, пожалуйста!
```
def tags(tag_name): 
    def tags_decorator(func): 
        def func_wrapper(name): 
            return "<{0}>{1}</{0}>".format(tag_name, func(name)) 
        return func_wrapper 
    return tags_decorator 
 
 @tags("p") 
 def get_text(name): 
    return "Hello "+name 
 
 print (get_text("John")) 
```

> Вывод: `<p>` Привет, Джон `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXH6)

В этом случае потребовалось немного больше работы. Декораторы ожидают получить функцию в качестве аргумента, поэтому нам придется строить функцию, которая принимает эти дополнительные аргументы и генерировать наш декоратор «на лету». В приведенном выше примере теги, наш генератор декоратора. Отладка украшенных функций. В конце дня декораторы просто обертывают наши функции, в случае отладки это может быть проблематично, поскольку функция-обертка не несет имени, модуля и docstring исходной функции. Исходя из приведенного выше примера, если мы это сделаем:
```
print (get_text.__name__) 
```

> Вывод: func _wrapper. Ожидается, что выход будет получать_ текст, **имя** атрибута, **doc** и **модуль** get _text будут переопределены теми из оболочки (func_ wrapper). Очевидно, что мы можем повторно установить их в func\_wrapper, но Python обеспечивает много более удобный способ. ### Functools для спасения
```
from functools import wraps 
 def tags(tag_name): 
    def tags_decorator(func): 
        @wraps(func) 
        def func_wrapper(name): 
            return "`<{0}>`{1}`</{0}>`".format(tag_name, func(name)) 
        return func_wrapper 
    return tags_decorator 
 
 @tags("p") 
 def get_text(name): 
    """returns some text""" 
    return "Hello "+name 
 
 print (get_text.__name__) # get_text 
 print (get_text.__doc__) # returns some text 
 print (get_text.__module__) # __main__ 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/CXHb)

Вы можете заметить на выходе, что атрибуты get\_text являются правильными.