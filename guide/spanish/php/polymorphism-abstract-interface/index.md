---
title: Polymorphism with Abstract and Interface
localeTitle: Polimorfismo con Resumen e Interfaz
---
## Polimorfismo con Resumen e Interfaz

_Comparta y haga cumplir el código con Polymorphism usando la clase abstracta y la interfaz_

Profundizaremos en la Programación Orientada a Objetos e intentaremos pensar en términos de Patrones de Diseño para compartir y aplicar nuestro código utilizando Polimorfismo.

### Clase abstracta

Digamos que tenemos una clase llamada Man con algunas propiedades ( `name` , `age` , `height` , `fav_drinks` y `fav_sports` ) y métodos ( `giveFirmHandshakes` , `beStubborn` y `notPutToiletPaper` ).

```php
<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 } 
```

Necesitamos especificar nombre, edad y altura para crear una instancia de esta clase como lo requiere el constructor.

```php
<?php 
 $jack = new Man('Jack', '26', '5 Feet 6 Inches'); 
 
 echo sprintf('%s - %s - %s', $jack->name, $jack->age, $jack->height); 
 // => Jack - 26 - 5 Feet 6 Inches 
```

Ahora, digamos que queremos agregar un nuevo método a esta clase llamada isActive.

Este método verifica la propiedad activa y devuelve el mensaje apropiado según el valor de activo con el valor predeterminado de falso. Podemos establecerlo en verdadero para aquellos hombres que están activos.

```php
<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
    public $active = false; 
 
    ..... 
    ..... 
 
    public function isActive() 
    { 
        if ($this->active == true) { 
            return "I am an active man."; 
        } else { 
            return "I am an idle man."; 
        } 
    } 
 } 
 
 $jack = new Man('Jack', '26', '5 Feet 6 Inches'); 
 $jack->active = true; 
 echo $jack->isActive(); 
 // => I am an active man. 
 
 $jake = new Man('Jake', '30', '6 Feet'); 
 echo "\n" . $jake->isActive(); 
 // => I am an idle man. 
```

¿Qué pasa si un hombre no está SOLO activo o inactivo?

¿Qué pasa si hay una escala de 1 a 4 que mide qué tan activo es un hombre? (1 - inactivo, 2 - ligeramente activo, 3- moderadamente activo, 4- muy activo)?

Podemos tener un if..elseif..else declaraciones como esta:

```php
<?php 
 
 public function isActive() 
 { 
    if ($this->active == 1) { 
        return "I am an idle man."; 
    } elseif ($this->active == 2) { 
        return "I am a lightly active man."; 
    } elseif ($this->active == 3) { 
        return "I am a moderately active man."; 
    } else { 
        return "I am a very active man."; 
    } 
 } 
```

Ahora, vamos a llevar esto un paso más allá.

¿Qué sucede si la propiedad activa de Man no es solo un número entero (1, 2, 3, 4, etc.)?

¿Qué pasa si el valor de activo es “atlético” o “perezoso”?

¿No tenemos que agregar más sentencias elseif buscando una coincidencia con esas cadenas?

Se pueden usar clases abstractas para tal escenario.

Con las clases abstractas, básicamente define la clase como abstracta y los métodos que desea aplicar como abstractos sin poner ningún código dentro de esos métodos.

Luego crea una clase secundaria que extiende la clase abstracta principal e implementa los métodos abstractos en esa clase secundaria.

De esta manera, aplicará todas las clases secundarias para definir su propia versión de métodos abstractos. Veamos cómo podemos configurar nuestro método `isActive()` como abstracto.

# 1: Define la clase como abstracta.

```php
<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 } 
```

# 2: Cree un método abstracto para el método que desea aplicar dentro de la clase abstracta.

```php
<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 abstract public function isActive(); 
 } 
```

# 3: Crea una clase secundaria extendiendo la clase abstracta.

```php
<?php 
 
 class AthleticMan extends Man 
 { 
 ..... 
 ..... 
 } 
```

# 4: Implementar el método abstracto dentro de la clase infantil.

```php
<?php 
 class AthleticMan extends Man 
 { 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
```

# 5: crear una instancia de la clase secundaria (NO la clase abstracta).

```php
<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

Completa la definición de la clase abstracta y el código de implementación

```php
<?php 
 
 abstract class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 
    abstract public function isActive(); 
 } 
 
 class AthleticMan extends Man 
 { 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

En este código, notará que el método abstracto `isActive()` se define dentro de la clase abstracta del `Man` y se implementa dentro de la clase infantil `AthleticMan` .

Ahora la clase `Man` no puede ser instanciada directamente para crear un objeto.

```php
<?php 
 $ted = new Man('Ted', '30', '6 feet'); 
 echo $ted->isActive(); 
 // => Fatal error:  Uncaught Error: Cannot instantiate abstract class Man 
```

Además, cada clase secundaria de la clase abstracta (clase `Man` ) necesita implementar todos los métodos abstractos. La falta de tal implementación resultará en un error fatal.

```php
<?php 
 class LazyMan extends Man 
 { 
 
 } 
 
 $robert = new LazyMan('Robert', '40', '5 feet 10 inches'); 
 echo $robert->isActive(); 
 // => Fatal error:  Class LazyMan contains 1 abstract method 
 // => and must therefore be declared abstract or implement 
 // => the remaining methods (Man::isActive) 
```

Al usar clases abstractas, puede imponer ciertos métodos para que sean implementados individualmente por las clases secundarias.

### Interfaz

Hay otro concepto de Programación Orientada a Objetos que está estrechamente relacionado con las Clases Abstractas llamadas Interfaz.

La única diferencia entre las clases abstractas y las interfaces es que en las clases abstractas, puede tener una combinación de métodos definidos ( `giveFirmHandshakes()` , `isStubborn()` , etc.) y métodos abstractos ( `isActive()` ) dentro de la clase principal mientras que en Interfaces, solo puede definir (no implementar) métodos dentro de la clase padre.

Veamos cómo podemos convertir la clase abstracta de Man arriba en una interfaz.

# 1: Defina la interfaz con todos los métodos (use la interfaz en lugar de la clase).

```php
<?php 
 interface Man 
 { 
    public function __construct($name, $age, $height); 
 
    public function giveFirmHandshakes(); 
 
    public function beStubborn(); 
 
    public function notPutToiletPaper(); 
 
    public function isActive(); 
 } 
```

# 2: Cree una clase que implemente la interfaz (use implementos en lugar de extensiones). Esta clase debe implementar TODOS los métodos definidos dentro de la interfaz, incluido el método constructor.

```php
<?php 
 class AthleticMan implements Man 
 { 
    public $name; 
    public $age; 
    public $height; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
```

# 3: instanciar la clase de implementación (AthleticMan)

```php
<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
```

Con las interfaces, debes tener en cuenta que:

*   Los métodos no se pueden implementar dentro de la interfaz.
    
*   Las variables (propiedades) no se pueden definir dentro de la interfaz.
    
*   Todos los métodos definidos dentro de la interfaz deben implementarse en la clase secundaria (de implementación).
    
*   Todas las variables necesarias deben definirse dentro de la clase secundaria.
    
*   La interfaz Man aplica sus clases de implementación para implementar todos los métodos en la interfaz.
    

Entonces, ¿cuál es el uso de interfaces?

¿No podemos simplemente crear una nueva clase AthleticMan y crear todos los métodos en lugar de implementar la interfaz?

Aquí es donde entran en juego los _patrones de diseño_ .

Las interfaces se usan cuando hay una clase base ( `Man` ) que quiere obligarte a hacer cosas (construir un objeto, giveFirmHandHakes, beStubborn, notPutToiletPaper y verificar si estás activo) pero no quiere decirte exactamente cómo hacerlo. .

Puede seguir adelante y crear clases de implementación con implementaciones según lo considere conveniente.

Mientras se implementen todos los métodos, a la interfaz `Man` no le importa cómo.

Hemos repasado cómo y cuándo usar clases abstractas e interfaces en PHP. El uso de estos conceptos de OOP para tener clases con una funcionalidad diferente que comparten el mismo "plan" básico (clase abstracta o interfaz) se llama Polimorfismo.