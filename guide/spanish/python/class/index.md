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
 
 #### Objetos clase: 
 
 Las clases soportan dos tipos de operaciones: referencia a atributos y instanciacion
 
 Para hacer referencias a atributos de una clase se usa la sintaxis estandar usada por Python para todas las referencias de atributos `objeto.nombre_atributo`
 Los nombres de atributos válidos son todos aquellos nombres que esten el espacio de nombre de la clase cuando la clase es creada.
 Entonces, si la definición de clases es como sigue: 
```

pitón clase MyClass: "" "Una clase de ejemplo simple" "" i = 12345
```
def f(self): 
    return 'hello world' 
```

```
Entonces `MyClass.i` y `MyClass.f` son referencias a atributos válidos, que retornan un entero y una función del objeto, respectivamente. 
 Los atributos de una clase también se le pueden asignar datos, entonces uno puede cambiar los valores, por ejemplo, de `MyClass.i` a tráves de una asignación. `__doc__` es un atributo válido también, retornando un string que explica cual es la utilidad de la clase: `"A simple example class"`. 
 
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
