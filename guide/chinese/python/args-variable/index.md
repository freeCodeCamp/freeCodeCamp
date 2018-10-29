---
title: Relationships between * and args
localeTitle: '*和args之间的关系'
---
## 在函数定义中存在\*

```Python
# How does *args work in a function definition

 def hardFunc(arg1, arg2):
    # create a tuple and pollute it with arguments passed to hardFunc
    args=(arg1, arg2)
    # print out results
    print(args[0])
    print(args[1])

 hardFunc('hard_one', 'hard_two')
 # output — Try it yourself now and in sequential snippets!

 def softFunc(*args):
    # at this point after calling softFunc a tuple with a name of a word
    # followed by * is created automatically (in this case the name is args)
    # print out results
    print(args[0])
    print(args[1])

 softFunc('soft_one', 'soft_two')

 # Now try to do something illegal
 hardFunc('one', 'two', 'three')

 # Now do things legally
 softFunc('one', 'two', 'three')

 # or even
 softFunc('one', 'two', 'three', 'infinity')

 # softFunc handles arbitrary amount of arguments easily by virtue of * syntax
 # So using a single variable name in conjuction with * we gained the ability
 # to invoke a function with arbitrary amount of arguments.

 # Once again when softFunc is called the newly args
 # tuple filled with provided arguments is created

 # Conclusion softFunc is a more flexible/dynamic verson of a hardFunc

```