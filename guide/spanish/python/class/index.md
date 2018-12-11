---
title: Class
localeTitle: Clase
---
## Clase

Las clases proporcionan un medio de agrupar datos y funcionalidad. La creación de una nueva clase crea un nuevo tipo de objeto, lo que permite crear nuevas instancias de ese tipo. Cada instancia de clase puede tener atributos adjuntos para mantener su estado. Las instancias de clase también pueden tener métodos (definidos por su clase) para modificar su estado.

En comparación con otros lenguajes de programación, el mecanismo de clase de Python agrega clases con un mínimo de Nueva sintaxis y semántica. Es una mezcla de los mecanismos de clase encontrados en C ++. Las clases de Python proporcionan todas las características estándar de la programación orientada a objetos: el mecanismo de herencia de clases permite múltiples clases base, una clase derivada puede anular cualquier método de su clase o clases base, y un método puede llamar al método de una clase base con el mismo nombre. Los objetos pueden contener cantidades arbitrarias y tipos de datos. Como es cierto para los módulos, las clases participan de la naturaleza dinámica de Python: Se crean en tiempo de ejecución y pueden modificarse aún más después de la creación.

#### Sintaxis de definición de clase:

La forma más simple de definición de clase se ve así:

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

pitón clase MyClass: "" "Una clase de ejemplo simple" "" i = 12345
```
def f(self): 
    return 'hello world' 
```

```
Then `MyClass.i` and `MyClass.f` are valid attribute references, returning an integer and a function object, respectively. 
 Class attributes can also be assigned to, so you can change the value of `MyClass.i` by assignment. `__doc__` is also a valid attribute, returning the docstring belonging to the class: `"A simple example class"`. 
 
 Class instantiation uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example (assuming the above class): 
```

pitón x = MyClass ()
```
Creates a new instance of the class and assigns this object to the local variable x. 
 
 The instantiation operation (“calling” a class object) creates an empty object. 
 Many classes like to create objects with instances customized to a specific initial state. 
 Therefore a class may define a special method named __init__(), like this: 
```

pitón def **init** (self): self.data = \[\]
```
When a class defines an `__init__()` method, class instantiation automatically invokes `__init__()` for the newly-created class instance. 
 So in this example, a new, initialized instance can be obtained by: 
```

pitón x = MyClass ()
```
Of course, the `__init__()` method may have arguments for greater flexibility. 
 In that case, arguments given to the class instantiation operator are passed on to `__init__()`. For example, 
```

pitón Complejo de clase: def **init** (self, realpart, imagpart): self.r = realpart self.i = imagpart ...

x = Complejo (3.0, -4.5)

> > > xr, xi (3.0, -4.5) \`\` \`