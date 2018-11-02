---
title: Object Oriented Programming
localeTitle: Programación orientada a objetos
---
## Programación orientada a objetos

La Programación Orientada a Objetos, como su nombre indica, tiene que ver con los objetos. Básicamente, estás intentando crear una pieza de software perfectamente organizada en objetos. Este enfoque hace que el código sea escalable con componentes reutilizables.

### Clase de hombre

Digamos que quieres crear un programa sobre hombres en general.

Los hombres promedio tienen todo tipo de cosas en común, como dar firmes apretones de manos, ser terco, no poner rollos de papel higiénico, enamorarse de los últimos aparatos, etc. Estos podrían describirse como comportamientos o métodos del objeto Hombre.

Los hombres también tienen sus propias características distintivas como la edad, la altura, los deportes favoritos, las bebidas favoritas, etc. Estos podrían describirse como propiedades o atributos del objeto Hombre.

Con esto en mente, crear una clase de Hombre ya no es tan difícil. Entonces, el programa iría así.

```php
<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
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

### OBJETO HOMBRE

Ahora que tenemos esta clase _Man_ , podemos crear cualquier hombre en particular creando una instancia de clase conocida como instanciación de clase.

```php
<?php 
 
 // Create a Man object called "Jack" (ie instantiation) 
 $jack = new Man(); 
 
 // Set values to Jack's attributes 
 $jack->name = "Jack"; 
 $jack->age = 30; 
 $jack->height = "6 feet"; 
 $jack->fav_sports = ["basketball", "soccer"]; 
 $jack->fav_drinks = ["coffee", "green tea"]; 
 
 // Print out Jack's attributes and values 
 echo "Our man's name is: " . $jack->name . "\n"; 
 echo "He is " . $jack->age . " years old and " . $jack->height . " tall."; 
 
 echo "His favorite sports are: "; 
 foreach ($jack->fav_sports as $sport) { 
    echo $sport . " "; 
 } 
 
 echo "\nHis favorite drinks are: "; 
 foreach ($jack->fav_drinks as $drink) { 
    echo $drink . " "; 
 } 
 
 // Print out Jack's behaviors common to all men (hint: defined in Man class) 
 echo "\nHe said these are some of his behaviors common to other men: "; 
 echo "\n\t" . $jack->giveFirmHandshakes(); 
 echo "\n\t" . $jack->beStubborn(); 
 echo "\n\t" . $jack->notPutToiletPaper(); 
```

Aquí puede ver que un hombre llamado Jack fue creado con el nombre de "Jack", altura de "6 pies", deportes favoritos "baloncesto y fútbol" y bebidas favoritas "café y té verde". Estos atributos se denominan variables de instancia.

Luego tiene los comportamientos de todos los hombres, como dar apretones de manos firmes, ser terco y no volver a poner papel higiénico. Todos estos comportamientos se llaman métodos de instancia.

### Constructores

Hasta ahora, creamos una clase llamada "Hombre" y un objeto llamado "Jack" al crear una instancia de esa clase. También le dimos a Jack los valores de sus atributos (nombre, altura, deportes y bebidas favoritos) y calificamos su comportamiento como común a todos los hombres (dar apretones de manos firmes, permanecer terco y no volver a poner los papeles del inodoro).

Llevemos esta idea un paso más allá y logremos que Jack comience a presentarse cada vez que creamos un objeto Jack sin tener que imprimirlos individualmente de esta manera:

```php
<?php 
 // Print out Jack's attributes and values 
 echo "Our man's name is: " . $jack->name . "\n"; 
 echo "He is " . $jack->age . " years old and " . $jack->height . " tall."; 
```

Aquí es donde los constructores entran en juego. Los constructores son básicamente métodos especiales que se llaman cuando se crea un objeto.

Entonces, la idea es imprimir el nombre, la edad y la altura de Jack cuando creamos el objeto "Jack" al crear una instancia de la clase Man. Para que esto suceda, debemos especificar el nombre, la edad y la altura cuando creamos el objeto de esta manera:

```php
<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
```

Este código le dice a la clase Man que cree un objeto con 3 parámetros: 'Jack' para el nombre, 30 para la edad y '6 pies' para la altura.

Ahora que hemos pasado estos parámetros mientras creamos una instancia de la clase, podemos usarlos fácilmente para hacer el método constructor.

```php
<?php 
 // Create a constructor method with 3 required parameters: name, age and height 
 public function __construct($name, $age, $height) 
 { 
    // Print out to say "object created" 
    echo "object created\n"; 
 
    // Assign the values of parameters to properties 
    // Also known as instance variables 
    // Using "$this->property_name" 
    $this->name = $name; 
    $this->age = $age; 
    $this->height = $height; 
 
    // Print out Jack's attributes and values 
    echo "Our man's name is: " . $this->name . "\n"; 
    echo "He is " . $this->age . " years old and " . $this->height . " tall."; 
 } 
```

Entonces, cada vez que creamos una instancia de la clase Man, debemos poner 3 parámetros y se imprimirán de inmediato.

```php
<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
```

`Object created` `Our man's name is: Jack` `He is 30 years old and 6 feet tall.`

El código completo con el constructor sería algo como esto:

```php
<?php 
 
 class Man 
 { 
    // 1. Declare the properties 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    // 2. Create a constructor method with 3 required parameters: name, age and height 
    public function __construct($name, $age, $height) 
    { 
        // 2A. Assign the values of parameters to class properties 
        // Also known as instance variables 
        // Using "$this->property_name" 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
 
        // 2B. Print out Jack's attributes and values 
        echo "Our man's name is: " . $this->name . "\n"; 
        echo "He is " . $this->age . " years old and " . $this->height . " tall."; 
    } 
 
    // 3. Create methods 
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
 
 // 4. Create a Man object called "Jack" 
 // This will print out the echo statements inside "__construct" method inside the class 
 $jack = new Man('Jack', 30, '6 feet'); 
 
 // 5. Set values to Jack's favorite sports and drinks 
 $jack->fav_sports = ["basketball", "soccer"]; 
 $jack->fav_drinks = ["coffee", "green tea"]; 
 
 // Print out Jack's favorite sports and drinks 
 echo "His favorite sports are: "; 
 foreach ($jack->fav_sports as $sport) { 
    echo $sport . " "; 
 } 
 
 echo "\nHis favorite drinks are: "; 
 foreach ($jack->fav_drinks as $drink) { 
    echo $drink . " "; 
 } 
 
 // Print out Jack's behaviors common to all men 
 // (hint: defined in Man class) 
 echo "\nHe said these are some of his behaviors common to other men: "; 
 echo "\n\t" . $jack->giveFirmHandshakes(); 
 echo "\n\t" . $jack->beStubborn(); 
 echo "\n\t" . $jack->notPutToiletPaper(); 
```

Ahora, no tenemos que establecer el nombre, la edad y la altura de Jack por separado e imprimirlos más. Cada vez que creamos un objeto Jack, simplemente especificamos sus propiedades como parámetros y se imprimirán automáticamente con la ayuda del constructor. También podemos poner sus deportes y bebidas favoritas en el parámetro si queremos.

especificándolos como parámetros al crear el objeto y Poniendo las líneas de eco dentro del constructor. Puede visitar aquí para obtener más información sobre la implementación de constructores en PHP. Nuestro viaje OOP ha sido lento pero constante.

### GUARDAR LOS SECRETOS DE UN HOMBRE

Si notó que todas las variables de clase (nombre, edad, altura, _deportes favoritos y_ bebidas _favoritas_ ) se declaran como públicas dentro de la clase Hombre. En este momento, después de crear un objeto Man, tenemos acceso a todas sus propiedades simplemente llamándolos:

```php
<?php 
 echo $jack->name; 
 echo $jack->height; 
```

Pero ¿y si queremos mantener ciertas cosas en secreto sobre el hombre? Tal vez no quiere que todos sepan su edad ... o ... tal vez solo quiere que ciertas personas conozcan sus bebidas favoritas. Podemos hacer que esto suceda cambiando la visibilidad de esas propiedades de públicas a protegidas e incluso privadas.

Las propiedades públicas son accesibles desde cualquier lugar, tanto dentro como fuera de la clase.

Las propiedades protegidas son accesibles dentro de la clase y dentro de las clases de niños.

Las propiedades privadas tienen la misma visibilidad que las protegidas, excepto que las clases de niños no pueden acceder a ellas.

Hablaremos de heredar una clase en un momento. Por ahora, vamos a tratar de configurar la protección de la edad y las bebidas favoritas en la clase Man.

```php
<?php 
 
 class Man 
 { 
    // 1. Declare the variables 
    public $name; 
    protected $age; 
    public $height; 
    public $fav_sports; 
    private $fav_drinks; 
    ..... 
    ..... 
```

Ahora, si intenta crear una instancia de la clase y la edad de llamada y fav\_drinks, obtendrá un error.

```php
<?php 
 $jack = new Man('Jack', 30, '6 feet'); 
 
 echo $jack->age; 
 // Fatal error:  Cannot access protected property Man::$age 
 
 print_r($jack->fav_drinks); 
 // Fatal error:  Cannot access private property Man::$fav_drinks 
```

### SETTERS Y GETTERS

Ahora que hemos protegido la edad de Jack y sus bebidas favoritas, ¿cómo podemos acceder a ellas y actualizarlas con exactitud?

Para obtener las propiedades protegidas o privadas, debemos crear un método getter como este dentro de la clase Man (tenga en cuenta que este es un método de clase con visibilidad de público).

```php
<?php 
 public function getAge() 
 { 
    return $this->age; 
 } 
```

Ahora podemos obtener fácilmente la edad de Jack llamando a este método:

```php
<?php 
 echo $jack->getAge(); 
 
 Jack just realized he turned 31 last week, how do we update his age? Can't we just do this? 
```

php
```
Since age property is protected, we cannot access it directly outside the class whether to read it or update it. You will get a fatal error. 
 
 `Fatal error:  Cannot access protected property Man::$age` 
 
 In order to update a protected/private property, we need to create a setter method inside the class with public visibility. 
```

php
```
Now we can easily update Jack's age by just calling this setter method: 
```

php

echo $ jack-> getAge (); // 31
```
We can also create setter and getter class methods for fav_drinks. Note that we have made the parameter for setFavDrinks optional. So, if you don't pass an array to setFavDrinks, it will default to an empty array. 
```

php

Función pública getFavDrinks () { devuelve $ this-> fav\_drinks; }
```
To set Jack's fav_drinks: 
```

php

Para obtener los fav\_drinks de Jack:

```php
<?php 
 echo json_encode($jack->getFavDrinks()); 
 // ["coffee","green tea"] 
```

Esta forma de implementar y usar métodos de clase para recuperar y actualizar las propiedades de la clase se llama encapsulación en Programación Orientada a Objetos. También podemos establecer la visibilidad de los métodos de clase como lo hicimos para las propiedades de clase.