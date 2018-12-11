---
title: Python Decorators
localeTitle: Decoradores de pitón
---
Los decoradores trabajan esencialmente como envoltorios. Modifican el comportamiento del código antes y después de la ejecución de una función de destino, sin la necesidad de modificar la función en sí, lo que aumenta la funcionalidad original y, por lo tanto, la decora.

Antes de entrar en detalle sobre los decoradores, hay algunos conceptos que deben ser claros. En Python, las funciones son objetos y podemos hacer muchas cosas útiles con ellos.

> ### Asignando funciones a una variable:
```
def greet(name): 
  return "Hello "+name 
 greet_someone = greet 
 print greet_someone("John") 
```

> Salida: Hola John

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXGk)

> ### Definiendo funciones dentro de otras funciones:
```
def greet(name): 
  def get_message(): 
    return "Hello " 
  result = get_message()+name 
  return result 
 print(greet("John")) 
```

> Salida: Hola John

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXGu)

> ### Las funciones también se pueden pasar como parámetros a otras funciones:
```
def greet(name): 
  return "Hello " + name 
 def call_func(func): 
  other_name = "John" 
  return func(other_name) 
 print call_func(greet) 
```

> Salida: Hola John

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXHC)

> ### Las funciones pueden devolver otras funciones:
> 
> En otras palabras, funciones que generan otras funciones.
```
def compose_greet_func(): 
  def get_message(): 
    return "Hello there!" 
  return get_message 
 greet = compose_greet_func() 
 print(greet()) 
```

Salida: ¡Hola!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXHG)

> ### Las funciones internas tienen acceso al ámbito adjunto.
> 
> Más comúnmente conocido como un [cierre](http://www.shutupandship.com/2012/01/python-closures-explained.html) . Un patrón muy poderoso que encontraremos mientras construimos decoradores. Otra cosa a tener en cuenta, Python solo permite el [acceso de lectura al ámbito externo](http://www.tech-thoughts-blog.com/2013/07/writing-closure-in-python.html) y no la asignación. Observe cómo modificamos el ejemplo anterior para leer un argumento de "nombre" en el ámbito de la función interna y devolver la nueva función.
```
def compose_greet_func(name): 
  def get_message(): 
      return "Hello there "+name+"!" 
  return get_message 
 greet = compose_greet_func("John") 
 print(greet()) 
```

> Salida: ¡Hola Juan!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXHI)

## Composición de los decoradores

Los decoradores de funciones son simplemente envoltorios de funciones existentes. Juntando las ideas mencionadas arriba, podemos construir un decorador. En este ejemplo, consideremos una función que envuelve la salida de cadena de otra función mediante p etiquetas.
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

> Salida: `<p>` lorem ipsum, John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXHL)

Ese fue nuestro primer decorador. Una función que toma otra función como argumento, genera una nueva función, aumenta el trabajo de la función original y devuelve la función generada para que podamos usarla en cualquier lugar. Para que `get_text` sea ​​decorado por `p_decorate` , solo tenemos que asignar get _text al resultado de p_ decorate.
```
get_text = p_decorate(get_text) 
 print (get_text("John")) 
```

> Salida: lorem ipsum, John dolor sit amet

Otra cosa a tener en cuenta es que nuestra función decorada toma un argumento de nombre. Todo lo que tuvimos que hacer en el decorador es dejar que la envoltura de get\_text pase ese argumento.

> ### Sintaxis del decorador de Python

Python hace que la creación y el uso de decoradores sean un poco más limpios y agradables para el programador a través de un poco de [azúcar sintáctica.](http://en.wikipedia.org/wiki/Syntactic_sugar) Para decorar obtener _texto no tenemos que obtener_ text = p _decorator (obtener_ texto). Hay un atajo limpio para eso, que es mencionar Nombre de la función de decoración antes de la función a decorar. El nombre del decorador debe aparecer con un símbolo @.
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

> Salida: `<p>` lorem ipsum, John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXHN)

Ahora consideremos que queríamos decorar nuestra función get\_text con otras 2 funciones para envolver una etiqueta div y strong alrededor de la salida de la cadena.
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

Con el enfoque básico, decorar get\_text estaría en la línea de
```
get_text = div_decorate(p_decorate(strong_decorate(get_text))) 
```

Con la sintaxis decorativa de Python, se puede lograr lo mismo con un poder mucho más expresivo.
```
@div_decorate 
 @p_decorate 
 @strong_decorate 
 def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 print (get_text("John")) 
```

> Salida: `<div><p><strong>` lorem ipsum, John dolor sit amet `</strong></p></div>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXHQ)

Una cosa importante a tener en cuenta aquí es que el orden de configuración de nuestros decoradores es importante. Si el orden fuera diferente en el ejemplo anterior, la salida hubiera sido diferente. ## Métodos de decoración En Python, los métodos son funciones que esperan que su primer parámetro sea una referencia al objeto actual. Podemos construir decoradores para métodos de la misma manera, mientras nos tomamos en cuenta la función de envoltura.
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

> Salida: `<p>` John Doe `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXH2)

Un enfoque mucho mejor sería hacer que nuestro decorador sea útil para funciones y métodos por igual. Esto se puede hacer poniendo [\* args y \*\* kwargs](http://docs.python.org/2/tutorial/controlflow.html#arbitrary-argument-lists) como parámetros para el contenedor, entonces puede aceptar cualquier número arbitrario de argumentos y argumentos de palabras clave.
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

> Salida: `<p>` John Doe `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXH5)

### Pasando argumentos a los decoradores Mirando hacia atrás en el ejemplo anterior al anterior, puedes notar cuán redundantes son los decoradores en el ejemplo. 3 decoradores (div _decorate, p_ decorate, strong\_decorate) cada uno con la misma funcionalidad pero envolviendo la cadena con diferentes etiquetas. Definitivamente podemos hacerlo mucho mejor que eso. ¿Por qué no tener una implementación más general para una que lleve la etiqueta a una cadena? ¡Sí por favor!
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

> Salida: `<p>` Hola Juan `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXH6)

Tomó un poco más de trabajo en este caso. Los decoradores esperan recibir una función como argumento, es por eso que tendremos que construir una función que tome esos argumentos adicionales y genere nuestro decorador sobre la marcha. En el ejemplo anterior, las etiquetas, es nuestro generador decorador. Depuración de funciones decoradas Al final del día, los decoradores están envolviendo nuestras funciones, en caso de que la depuración sea problemática, ya que la función de envoltura no lleva el nombre, el módulo y la cadena de documentos de la función original. Basado en el ejemplo anterior si hacemos:
```
print (get_text.__name__) 
```

> Salida: _envoltorio_ funcional _Se esperaba que el resultado fuera obtener_ texto, los atributos **nombre** , **documento** y **módulo** de obtener _texto fueron reemplazados por los del envoltorio (_ envoltorio _func_ . Obviamente, podemos restablecerlos dentro de func\_wrapper pero Python proporciona una gran cantidad de recursos). Manera más agradable. ### Functools al rescate.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CXHb)

Puede observar en la salida que los atributos de get\_text son los correctos ahora.