---
title: Class
localeTitle: 类
---
## 类

类提供了将数据和功能捆绑在一起的方法。 创建新类会创建一种新类型的对象，从而允许创建该类型的新实例。 每个类实例都可以附加属性以维护其状态。 类实例还可以具有用于修改其状态的方法（由其类定义）。

与其他编程语言相比，Python的类机制添加的类最少 新的语法和语义。它是C ++中的类机制的混合体。 Python类提供面向对象编程的所有标准功能： 类继承机制允许多个基类， 派生类可以覆盖其基类或类的任何方法， 并且方法可以调用具有相同名称的基类的方法。 对象可以包含任意数量和种类的数据。 与模块一样，类也参与Python的动态特性： 它们是在运行时创建的，可以在创建后进一步修改。

#### 类定义语法：

最简单的类定义形式如下所示：

```python
class ClassName: 
    <statement-1> 
        ... 
        ... 
        ... 
    <statement-N> 
 ``` 
 
 #### Class Objects: 
 
 Class objects support two kinds of operations: attribute references and instantiation. 
 
 Attribute references use the standard syntax used for all attribute references in Python: `obj.name`. 
 Valid attribute names are all the names that were in the class's namespace when the class object was created. 
 So, if the class definition looked like this: 
```

蟒蛇 class MyClass： “”一个简单的示例类“”“ 我= 12345
```
def f(self): 
    return 'hello world' 
```

```
Then `MyClass.i` and `MyClass.f` are valid attribute references, returning an integer and a function object, respectively. 
 Class attributes can also be assigned to, so you can change the value of `MyClass.i` by assignment. `__doc__` is also a valid attribute, returning the docstring belonging to the class: `"A simple example class"`. 
 
 Class instantiation uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example (assuming the above class): 
```

蟒蛇 x = MyClass（）
```
Creates a new instance of the class and assigns this object to the local variable x. 
 
 The instantiation operation (“calling” a class object) creates an empty object. 
 Many classes like to create objects with instances customized to a specific initial state. 
 Therefore a class may define a special method named __init__(), like this: 
```

蟒蛇 def **init** （self）： self.data = \[\]
```
When a class defines an `__init__()` method, class instantiation automatically invokes `__init__()` for the newly-created class instance. 
 So in this example, a new, initialized instance can be obtained by: 
```

蟒蛇 x = MyClass（）
```
Of course, the `__init__()` method may have arguments for greater flexibility. 
 In that case, arguments given to the class instantiation operator are passed on to `__init__()`. For example, 
```

蟒蛇 类复杂： def **init** （self，realpart，imagpart）： self.r = realpart self.i = imagpart ...

x =复数（3.0，-4.5）

> > > xr，xi （3.0，-4.5） \`\`\`