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
 
 Para la instanciación de clase se usa la notación de función. Solo pretende que el objeto clase es una función que no recibe parámetros y retorna una nueva instancia de la clase. Por ejemplo (asumiendo la clase de arriba): 
```

pitón x = MyClass ()
```
Crea una nueva instancia de la clase y asigna este objeto a la variable local x. 
 
 La operación instanciación ("llamada" a un objeto clase) crea un objeto vacío. 
 Muchas clases les gusta crear objetos con instancias customizable en un estado inicial especificado. 
 Para eso una clase puede definir un método especial llamado __init__(), de esta manera: 
```

pitón def **init** (self): self.data = \[\]
```
Cuando una clase define un `__init__()` método, la instanciación de clase automaticamente invoca `__init__()` para la nueva instancia de la clase que ha sido creada. 
 Entonces en este ejemplo, una nueva, inicializada instancia puede ser obtenida a tráves: 
```

pitón x = MyClass ()
```
Por suspuesto, el `__init__()` método puede tener argumentos para una mayor flexibilidad. 
 En este caso, argumentos que se pasan a la instanciación de una clase son pasados al método `__init__()`. Por ejemplo, 
```

pitón Complejo de clase: def **init** (self, realpart, imagpart): self.r = realpart self.i = imagpart ...

x = Complejo (3.0, -4.5)

> > > xr, xi (3.0, -4.5) \`\` \`
