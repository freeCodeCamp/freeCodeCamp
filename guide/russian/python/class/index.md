---
title: Class
localeTitle: Класс
---
## Класс

Классы обеспечивают возможность объединения данных и функциональных возможностей вместе. Создание нового класса создает новый тип объекта, позволяя создавать новые экземпляры этого типа. Каждый экземпляр класса может иметь прикрепленные к нему атрибуты для поддержания его состояния. У экземпляров класса также могут быть методы (определенные его классом) для изменения его состояния.

По сравнению с другими языками программирования, механизм класса Python добавляет классы с минимумом новый синтаксис и семантика. Это смесь классовых механизмов, найденных в C ++. Классы Python предоставляют все стандартные функции объектно-ориентированного программирования: механизм наследования класса допускает множество базовых классов, производный класс может переопределять любые методы своего базового класса или классов, и метод может вызвать метод базового класса с тем же именем. Объекты могут содержать произвольные суммы и виды данных. Как и для модулей, классы участвуют в динамическом характере Python: они создаются во время выполнения и могут быть изменены после создания.

#### Синтаксис определения класса:

Простейшая форма определения класса выглядит следующим образом:

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

питон класс MyClass: «" Простой примерный класс "" " i = 12345
```
def f(self): 
    return 'hello world' 
```

```
Then `MyClass.i` and `MyClass.f` are valid attribute references, returning an integer and a function object, respectively. 
 Class attributes can also be assigned to, so you can change the value of `MyClass.i` by assignment. `__doc__` is also a valid attribute, returning the docstring belonging to the class: `"A simple example class"`. 
 
 Class instantiation uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example (assuming the above class): 
```

питон x = MyClass ()
```
Creates a new instance of the class and assigns this object to the local variable x. 
 
 The instantiation operation (“calling” a class object) creates an empty object. 
 Many classes like to create objects with instances customized to a specific initial state. 
 Therefore a class may define a special method named __init__(), like this: 
```

питон def **init** (self): self.data = \[\]
```
When a class defines an `__init__()` method, class instantiation automatically invokes `__init__()` for the newly-created class instance. 
 So in this example, a new, initialized instance can be obtained by: 
```

питон x = MyClass ()
```
Of course, the `__init__()` method may have arguments for greater flexibility. 
 In that case, arguments given to the class instantiation operator are passed on to `__init__()`. For example, 
```

питон класс: def **init** (self, realpart, imagpart): self.r = фактическая часть self.i = imagpart ...

x = комплекс (3,0, -4,5)

> > > xr, xi (3,0, -4,5) \`\` \`