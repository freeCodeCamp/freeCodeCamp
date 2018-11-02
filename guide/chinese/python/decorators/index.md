---
title: Python Decorators
localeTitle: Python装饰器
---
装饰器基本上用作包装器。它们在目标函数执行之前和之后修改代码的行为，而无需修改函数本身，增加原始功能，从而对其进行修饰。

在详细介绍装饰器之前，有一些概念应该是清楚的。在Python中，函数是对象，我们可以用它们做很多有用的东西。

> ### 为变量分配功能：
```
def greet(name): 
  return "Hello "+name 
 greet_someone = greet 
 print greet_someone("John") 
```

> 输出：你好约翰

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXGk)

> ### 在其他函数中定义函数：
```
def greet(name): 
  def get_message(): 
    return "Hello " 
  result = get_message()+name 
  return result 
 print(greet("John")) 
```

> 输出：你好约翰

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXGu)

> ### 函数也可以作为参数传递给其他函数：
```
def greet(name): 
  return "Hello " + name 
 def call_func(func): 
  other_name = "John" 
  return func(other_name) 
 print call_func(greet) 
```

> 输出：你好约翰

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXHC)

> ### 函数可以返回其他函数：
> 
> 换句话说，函数生成其他函数。
```
def compose_greet_func(): 
  def get_message(): 
    return "Hello there!" 
  return get_message 
 greet = compose_greet_func() 
 print(greet()) 
```

输出：你好！

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXHG)

> ### 内部函数可以访问封闭范围
> 
> 通常称为[闭合](http://www.shutupandship.com/2012/01/python-closures-explained.html) 。我们在构建装饰器时会遇到的一个非常强大的模式。另外需要注意的是，Python只允许[对外部作用域](http://www.tech-thoughts-blog.com/2013/07/writing-closure-in-python.html)进行[读访问](http://www.tech-thoughts-blog.com/2013/07/writing-closure-in-python.html)而不进行赋值。注意我们如何修改上面的例子来从内部函数的封闭范围中读取“name”参数并返回新函数。
```
def compose_greet_func(name): 
  def get_message(): 
      return "Hello there "+name+"!" 
  return get_message 
 greet = compose_greet_func("John") 
 print(greet()) 
```

> 输出：你好约翰！

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXHI)

## 装饰的组成

函数装饰器只是现有函数的包装器。将上面提到的想法放在一起，我们可以建立一个装饰器。在这个例子中，让我们考虑一个用p标签包装另一个函数的字符串输出的函数。
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

> 输出： `<p>` lorem ipsum，John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXHL)

那是我们的第一个装饰师。将另一个函数作为参数的函数，生成一个新函数，扩充原始函数的工作，并返回生成的函数，以便我们可以在任何地方使用它。要让`get_text`本身由`p_decorate` ，我们只需要将get _text_分配给_p_ decorate _的结果_ 。
```
get_text = p_decorate(get_text) 
 print (get_text("John")) 
```

> 输出：lorem ipsum，John dolor坐下来

另一件需要注意的事情是我们的装饰函数采用了名称参数。我们在装饰器中所做的就是让get\_text的包装器传递该参数。

> ### Python的装饰器语法

Python通过一些[语法糖](http://en.wikipedia.org/wiki/Syntactic_sugar)使程序员创建和使用装饰器更清洁和更好。要装饰获取_文本，我们不必得到_ text = p _装饰器（获取_文本）有一个简洁的快捷方式，这就是提到要装饰的函数之前的装饰函数的名称。装饰器的名称应该用@符号进行附加。
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

> 输出： `<p>` lorem ipsum，John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXHN)

现在让我们考虑我们想用2个其他函数来装饰我们的get\_text函数，以在字符串输出周围包装div和strong标签。
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

使用基本方法，装饰get\_text将符合
```
get_text = div_decorate(p_decorate(strong_decorate(get_text))) 
```

使用Python的装饰器语法，可以通过更具表现力的功能实现同样的功能。
```
@div_decorate 
 @p_decorate 
 @strong_decorate 
 def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 print (get_text("John")) 
```

> 输出： `<div><p><strong>` lorem ipsum，John dolor sit amet `</strong></p></div>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXHQ)

这里需要注意的一件重要事情是设置装饰器的顺序很重要。如果上面的示例中的顺序不同，则输出会有所不同。 ##装饰方法在Python中，方法是期望它们的第一个参数是对当前对象的引用的函数。我们可以以相同的方式为方法构建装饰器，同时在包装器函数中考虑自我。
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

> 输出： `<p>` John Doe `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXH2)

一个更好的方法是使我们的装饰器对函数和方法都很有用。这可以通过将[\* args和\*\* kwargs](http://docs.python.org/2/tutorial/controlflow.html#arbitrary-argument-lists)作为包装器的参数来完成，然后它可以接受任意数量的参数和关键字参数。
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

> 输出： `<p>` John Doe `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXH5)

### 将参数传递给装饰器回顾上面的示例之前的示例，您可以注意到示例中装饰器的冗余程度。 3个装饰器（div _decorate，p_ decorate，strong\_decorate），每个装饰具有相同的功能，但用不同的标签包装字符串。我们绝对可以做得更好。为什么没有一个更通用的实现，以使标记作为字符串包装？是的，请！
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

> 输出： `<p>` Hello John `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXH6)

在这种情况下需要做更多的工作。装饰器期望接收函数作为参数，这就是为什么我们必须构建一个函数来获取那些额外的参数并动态生成装饰器。在上面的示例标签中，是我们的装饰器生成器。调试修饰函数在一天结束时，装饰器只是包装我们的函数，如果调试可能会有问题，因为包装函数不包含原始函数的名称，模块和文档字符串。基于上面的例子，如果我们这样做：
```
print (get_text.__name__) 
```

> 输出：func _包装器输出应该是获取_文本， _get_文件的属性**名称** ， **doc**和**模块** _被包装器（func_包装器） _覆盖_ 。显然我们可以在func\_wrapper中重新设置它们但是Python提供了很多更好的方式。### Functools救援
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CXHb)

您可以从输出中注意到get\_text的属性现在是正确的。