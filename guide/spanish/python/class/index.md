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
class NombreClase: 
    <estatuto-1> 
        ... 
        ... 
        ... 
    <estatuto-N> 
 ``` 
 
 #### Objetos de la clase: 
 
 Los objetos de una clase manejan dos clases de operaciones: referencia de atributos e intansiacion

 La referencia de atributos usa sintaxis estandard: `obj.nombre`.
 Los nombres de atributos validos son todos los nombres que se encuentran en es nombre espacial (Namespace) de un objeto de la clase cuando este objeto fue creado.

 Entonces, si la definicion de la clase se ve asi:
```python

class MiClase: 
    """Una clase de ejemplo simple""" 
    i = 12345

    def f(self): 
        return 'hola mundo' 

```
Entonces `MiClase.i` y `MiClase.f` son nombres de atributos validos, uno regresa un numero y otro una funcion, respectivamente. 
 Los atributos de la clase tambien pueden ser asignados, asi que es posible cambiar el atributo `MiClase.i` por asignacion. `__doc__` tambien es un nombre de atributo valido, y regresa la documentacion referente a la clase: `"""Una clase de ejemplo simple""" `. 
 
 La instansiacionde una clase usa sintaxis estandard para llamar a una funcion. Solo prentende que el objeto de la una calse es una funcion sin parametros que regresa una nueva instancia de la clase. Por ejemplo (asumiendo la siguiente clase):

```python
x = MiClase()
```
Crea una nueva instancia de la clase y asigna este nuevo objeto a la variable local x.
 
La operacion de instancia ("llamar" a un objeto de una clase) crea un objeto vacio.
Muchas clases prefieren crear objetos con instancias personalizadas a un estado inicial especifico.
Por lo tanto una clase puede definir un metodo especial llamado __init__(), de la siguiente forma
```python
def **__init__** (self): 
    self.data = []
```
Cuando una clase define el metodo `__init__()`, la instanciacion de la clase automaticamente invoca este metodo para la nueva instancia de la clase.
En este ejemplo, una nueva instancia puede crearse asi:
When a class defines an  method, class instantiation automatically invokes `__init__()` for the newly-created class instance. 
 So in this example, a new, initialized instance can be obtained by: 

```python
x = MiClase()
```
Claro que el metodo `__init__()` puede llevar varios parametros para mas flexibilidad.
En ese caso, los parametros dados para la instanciacion se llevan en la llamada a `__init__()`, por ejemplo:

```python

class Complejo: 
    def **__init__** (self, realpart, imagpart): 
        self.r = realpart 
        self.i = imagpart

x = Complejo (3.0, -4.5)

> > > x.r, x.i 
> > > (3.0, -4.5)
```
