---
title: Classes and Objects
localeTitle: Clases y objetos
---
## Clases y objetos

### Objetos en ruby

Repasemos rápidamente los objetos de rubí. En el mundo real, los objetos pueden ser cualquier cosa, incluyendo un automóvil, una computadora o incluso un humano. Cada uno de estos objetos tiene un estado y comportamientos.

Teniendo en cuenta un automóvil, su estado podría describirse como su modelo, marca y color. El comportamiento del automóvil podría ser girar, sonar o frenar.

Un objeto en Ruby tiene características muy similares. Los objetos de rubí también tienen un estado y comportamiento. En Ruby Objects, el estado se almacena en variables de instancia y el comportamiento se almacena en funciones.

### Clases en Ruby

Una clase es básicamente una plantilla de programa. Esta plantilla define las `properties` iniciales utilizando `instance variables` . De nuevo, también hay `behaviors` definidos de nuevo en forma de funciones.

Se crea una nueva instancia de una clase utilizando el método de `initialize` de una clase.

Tomemos, por ejemplo, el siguiente código de ejemplo de una clase:

```Ruby
class Car 
    def initialize(make, model, color) 
        @make = make 
        @model = model 
        @color = color 
    end 
 
    def turn(direction) 
    end 
 
    def honk 
        puts "beep beep" 
    end 
 
    def brake 
    end 
 end 
```

Como se vio, las clases se definen utilizando la palabra clave de `class` y el bloque de código de clase termina con un trabajo de teclas de `end` . La función `.initialize` es el constructor. Cuando creamos este objeto, definimos los atributos `@make` , `@model` y `@color` con los valores que pasamos al constructor.

### Creando una instancia de una clase

Ahora, para crear una instancia de esta clase solo necesita llamar a la función `.new` .

```Ruby
mazda3 = Car.new('Mazda', 'Mazda3', 'White') 
```

Esto es genial, pero a veces es posible que necesite cambiar algunos de estos atributos. La mayoría de estos atributos en este ejemplo serían estáticos. Aun así, imagina que decidiste conseguir un nuevo trabajo de pintura. ¿Cómo haría para actualizar el estado de esta instancia del objeto `Car` ?

### Modificación del estado de instancia

Afortunadamente, es bastante simple actualizar el estado de un objeto. Primero, necesitaríamos un método `setter` ! Ruby define las configuraciones de **getter** y **setter** como `attr_reader` y `attr_accessor` respectivamente. Para las configuraciones de captador y definidor en un atributo dado, también puede usar `attr_accessor` .

Para demostrar esto, he modificado el objeto Car anterior con estas configuraciones recién definidas.

```Ruby
class Car 
    attr_accessor :color 
    attr_reader :make, :model 
 
    def initialize(make, model, color) 
        @make = make 
        @model = model 
        @color = color 
    end 
 
    def turn(direction) 
    end 
 
    def honk 
        puts "beep beep" 
    end 
 
    def brake 
    end 
 end 
```

Así que ahora podemos cambiar de estado y leer el estado del objeto.

```Ruby
irb(main):023:0> c = Car.new('Mazda', 'Mazda3', 'White') 
 => #<Car:0x00007fd3ca13fdd0 @make="Mazda", @model="Mazda3", @color="White", @speed=nil> 
 irb(main):024:0> c.color 
 => "White" 
 irb(main):025:0> c.make 
 => "Mazda" 
 irb(main):026:0> c.model 
 => "Mazda3" 
 irb(main):027:0> c.color = 'Brutal Blue' 
 => "Brutal Blue" 
 irb(main):028:0> c.make = 'Prius' 
 Traceback (most recent call last): 
        2: from /usr/local/bin/irb:11:in `<main>' 
        1: from (irb):28 
 NoMethodError (undefined method `make=' for #<Car:0x00007fd3ca13fdd0>) 
 Did you mean?  make 
```

Viendo la salida anterior de `irb` , puede ver que cada una de las variables de instancia es legible. Podemos escribir en `@color` , pero terminamos causando una excepción `NoMethodError` cuando intentamos escribir en `@make` . Esto se debe a que `@make` solo se definió utilizando `attr_reader` , por lo que `make=` no está definido.

### Recursos

*   [Programación Ruby / Sintaxis / Clases](https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes)