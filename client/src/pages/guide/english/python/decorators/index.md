---
title: Python Decorators
---
Decorators essentially work as wrappers. They modify the behaviour of the code before and after a target function execution, without the need to modify the function itself, augmenting the original functionality, thus decorating it.

Before going in detail about decorators, there are some concepts that should be clear. In Python, functions are objects and we can do a lot of useful stuff with them.

> ### Assigning funtions to a variables:

    def greet(name):
      return "Hello "+name
    greet_someone = greet
    print greet_someone("John")

> Output: Hello John

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXGk' target='_blank' rel='nofollow'>Run code</a>

> ### Defining functions inside other functions:

    def greet(name):
      def get_message():
        return "Hello "
      result = get_message()+name
      return result
    print(greet("John"))

> Output: Hello John

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXGu' target='_blank' rel='nofollow'>Run code</a>

> ### Functions can also be passed as parameters to other functions:

    def greet(name):
      return "Hello " + name
    def call_func(func):
      other_name = "John"
      return func(other_name)  
    print call_func(greet)

> Output: Hello John

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXHC' target='_blank' rel='nofollow'>Run code</a>

> ### Functions can return other functions:
> 
> In other words, functions generating other functions.

    def compose_greet_func():
      def get_message():
        return "Hello there!"
      return get_message
    greet = compose_greet_func()
    print(greet())

Output: Hello there!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXHG' target='_blank' rel='nofollow'>Run code</a>

> ### Inner functions have access to the enclosing scope
> 
> More commonly known as a <a href='http://www.shutupandship.com/2012/01/python-closures-explained.html' target='_blank' rel='nofollow'>closure</a>. A very powerful pattern that we will come across while building decorators. Another thing to note, Python only allows <a href='http://www.tech-thoughts-blog.com/2013/07/writing-closure-in-python.html' target='_blank' rel='nofollow'>read access to the outer scope</a> and not assignment. Notice how we modified the example above to read a "name" argument from the enclosing scope of the inner function and return the new function.

    def compose_greet_func(name):
      def get_message():
          return "Hello there "+name+"!"
      return get_message
    greet = compose_greet_func("John")
    print(greet())

> Output: Hello there John!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXHI' target='_blank' rel='nofollow'>Run code</a>

## Composition of Decorators

Function decorators are simply wrappers to existing functions. Putting the ideas mentioned above together, we can build a decorator. In this example let's consider a function that wraps the string output of another function by p tags.

    def get_text(name):
       return "lorem ipsum, {0} dolor sit amet".format(name)

    def p_decorate(func):
       def func_wrapper(name):
           return "`<p>`{0}`</p>`".format(func(name))
       return func_wrapper

    my_get_text = p_decorate(get_text)
    print (my_get_text("John"))

> Output: `<p>`lorem ipsum, John dolor sit amet`</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXHL' target='_blank' rel='nofollow'>Run code</a>

That was our first decorator. A function that takes another function as an argument, generates a new function, augmenting the work of the original function, and returning the generated function so we can use it anywhere. To have `get_text` itself be decorated by `p_decorate`, we just have to assign get_text to the result of p_decorate.  

    get_text = p_decorate(get_text)
    print (get_text("John"))

> Output: lorem ipsum, John dolor sit amet

Another thing to notice is that our decorated function takes a name argument. All what we had to do in the decorator is to let the wrapper of get_text pass that argument.

> ### Python's Decorator Syntax

Python makes creating and using decorators a bit cleaner and nicer for the programmer through some <a href='http://en.wikipedia.org/wiki/Syntactic_sugar' target='_blank' rel='nofollow'>syntactic sugar</a> To decorate get_text we don't have to get_text = p_decorator(get_text) There is a neat shortcut for that, which is to mention the name of the decorating function before the function to be decorated. The name of the decorator should be perpended with an @ symbol.

    def p_decorate(func):
       def func_wrapper(name):
           return "`<p>`{0}`</p>`".format(func(name))
       return func_wrapper

    @p_decorate
    def get_text(name):
       return "lorem ipsum, {0} dolor sit amet".format(name)

    print get_text("John")

> Output: `<p>`lorem ipsum, John dolor sit amet`</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXHN' target='_blank' rel='nofollow'>Run code</a>

Now let's consider we wanted to decorate our get_text function by 2 other functions to wrap a div and strong tag around the string output.

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

With the basic approach, decorating get_text would be along the lines of

    get_text = div_decorate(p_decorate(strong_decorate(get_text)))

With Python's decorator syntax, same thing can be achieved with much more expressive power.  

    @div_decorate
    @p_decorate
    @strong_decorate
    def get_text(name):
       return "lorem ipsum, {0} dolor sit amet".format(name)

    print (get_text("John"))

> Output: `<div><p><strong>`lorem ipsum, John dolor sit amet`</strong></p></div>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXHQ' target='_blank' rel='nofollow'>Run code</a>

One important thing to notice here is that the order of setting our decorators matters. If the order was different in the example above, the output would have been different. ## Decorating Methods In Python, methods are functions that expect their first parameter to be a reference to the current object. We can build decorators for methods the same way, while taking self into consideration in the wrapper function.  

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

> Output: `<p>`John Doe`</p>` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXH2' target='_blank' rel='nofollow'>Run code</a>

A much better approach would be to make our decorator useful for functions and methods alike. This can be done by putting <a href='http://docs.python.org/2/tutorial/controlflow.html#arbitrary-argument-lists' target='_blank' rel='nofollow'>*args and **kwargs</a> as parameters for the wrapper, then it can accept any arbitrary number of arguments and keyword arguments.  

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

> Output : `<p>`John Doe`</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXH5' target='_blank' rel='nofollow'>Run code</a>

### Passing arguments to decorators Looking back at the example before the one above, you can notice how redundant the decorators in the example are. 3 decorators(div_decorate, p_decorate, strong_decorate) each with the same functionality but wrapping the string with different tags. We can definitely do much better than that. Why not have a more general implementation for one that takes the tag to wrap with as a string? Yes please!  

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

> Output: `<p>`Hello John`</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXH6' target='_blank' rel='nofollow'>Run code</a>

It took a bit more work in this case. Decorators expect to receive a function as an argument, that is why we will have to build a function that takes those extra arguments and generate our decorator on the fly. In the example above tags, is our decorator generator. Debugging decorated functions At the end of the day decorators are just wrapping our functions, in case of debugging that can be problematic since the wrapper function does not carry the name, module and docstring of the original function. Based on the example above if we do:  

    print (get_text.__name__)

> Output: func_wrapper The output was expected to be get_text yet, the attributes __name__, __doc__, and __module__ of get_text got overridden by those of the wrapper(func_wrapper. Obviously we can re-set them within func_wrapper but Python provides a much nicer way. ### Functools to the rescue  

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CXHb' target='_blank' rel='nofollow'>Run code</a>

You can notice from the output that the attributes of get_text are the correct ones now.
