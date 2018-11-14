---
title: Python Calling Functions
localeTitle: Python调用函数
---
函数定义语句不执行该函数。执行（调用）函数是通过使用函数的名称，后跟括起所需参数（如果有）的括号来完成的。
```
>>> def say_hello(): 
 ...     print('Hello') 
 ... 
 >>> say_hello() 
 Hello 
```

函数的执行引入了用于函数局部变量的新符号表。更准确地说，函数中的所有变量赋值都将值存储在本地符号表中;而变量引用首先在本地符号表中查找，然后在封闭函数的本地符号表中查找，然后在全局符号表中查找，最后在内置名称表中查找。因此，全局变量不能直接在函数内赋值（除非在全局语句中命名），尽管可以引用它们。
```
>>> a = 1 
 >>> b = 10 
 >>> def fn(): 
 ...     print(a)    # local a is not assigned, no enclosing function, global a referenced. 
 ...     b = 20      # local b is assigned in the local symbol table for the function. 
 ...     print(b)    # local b is referenced. 
 ... 
 >>> fn() 
 1 
 20 
 >>> b               # global b is not changed by the function call. 
 10 
```

调用函数调用的实际参数（参数）在被调用函数的本地符号表中引入;因此，使用call by value传递参数（其中值始终是对象引用，而不是对象的值）。当函数调用另一个函数时，将为该调用创建一个新的本地符号表。
```
>>> def greet(s): 
 ...     s = "Hello " + s    # s in local symbol table is reassigned. 
 ...     print(s) 
 ... 
 >>> person = "Bob" 
 >>> greet(person) 
 Hello Bob 
 >>> person                  # person used to call remains bound to original object, 'Bob'. 
 'Bob' 
```

用于调用函数的参数不能由函数重新分配，但引用可变对象的参数可以更改其值：
```
>>> def fn(arg): 
 ...     arg.append(1) 
 ... 
 >>> a = [1, 2, 3] 
 >>> fn(a) 
 >>> a 
 [1, 2, 3, 1] 

```