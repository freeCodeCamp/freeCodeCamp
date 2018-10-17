---
title: Class Inheritance
localeTitle: Herencia de clase
---
## Herencia de clase

_REUTILIZA EL CÓDIGO CON HERENCIA EN LA PROGRAMACIÓN ORIENTADA A OBJETOS_

Aquí, hablaremos sobre cómo podemos reutilizar el código que escribimos sin tener ninguna duplicación de código mediante el uso de la herencia.

### Clase de hombre

Esta es nuestra clase de `Man` :

```php
<?php 
 class Man 
 { 
    // 1. Declare the class variables 
    public $name; 
    protected $age; 
    public $height; 
    public $fav_sports; 
    private $fav_drinks; 
 
    // 2. Create a constructor method with 3 required parameters: name, age and height 
    public function __construct($name, $age, $height) 
    { 
        // 2A. Assign the values of parameters to class properties 
        // Also known as instance variables 
        // Using "$this->property_name" 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
 
        // 2B. Print out the man's attributes and values upon instantiation 
        echo "Our man's name is: " . $this->name . "\n"; 
        echo "He is " . $this->age . " years old and " . $this->height . " tall."; 
    } 
 
    // 3. Create class methods 
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
 
    // 4. Age getter method 
    public function getAge() 
    { 
        return $this->age; 
    } 
 
    // Age setter method 
    public function setAge($age) 
    { 
        $this->age = $age; 
    } 
 
    // 5. Favorite Drinks setter method 
    public function setFavDrinks($drinks = array()) 
    { 
        if ($drinks) { 
            $this->fav_drinks = $drinks; 
        } 
    } 
 
    // Favorite Drinks getter method 
    public function getFavDrinks() 
    { 
        return $this->fav_drinks; 
    } 
 } 
```

### Hombre saludable

Digamos que queremos crear otra clase llamada `HealthyMan` que tenga todas las propiedades y métodos de la clase `Man` .

Sin tener que volver a escribir todo el código para la clase `Man` , podemos reutilizar ese código usando la palabra clave extendido.

```php
<?php 
 class HealthyMan extends Man 
 { 
 
 } 
```

Ahora tenemos todas las propiedades y métodos de clase de Man inside `HealthyMan` . Podemos crear `HealthyMan` instancia de la clase `HealthyMan` para verificar esto realmente rápido.

```php
<?php 
 $jackie = new HealthyMan('Jackie', 25, '5\' 5"'); 
 // => Our man's name is: Jackie 
 // => He is 25 years old and 5' 5" tall. 
```

Podemos seguir adelante y establecer los deportes y bebidas favoritos de HealthyMan aka Jackie.

```php
<?php 
 $jackie->fav_sports = ['swimming', 'weight training']; 
 print_r($jackie->fav_sports); 
 // => 
 // Array 
 // ( 
 //     [0] => swimming 
 //     [1] => weight training 
 // ) 
 
 $jackie->setFavDrinks(['Matcha tea', 'Oolong Tea']); 
 print_r($jackie->getFavDrinks()); 
 // => 
 // Array 
 // ( 
 //     [0] => Matcha tea 
 //     [1] => Oolong Tea 
 // ) 
```

Ahora veamos si podemos llamar a los métodos de clase de Man como `giveFirmHandshakes()` , `beStubborn()` y `notPutToiletPaper()` .

```php
<?php 
 echo "\n" . $jackie->giveFirmHandshakes(); 
 // => I give firm handshakes. 
 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn. 
 
 echo "\n" . $jackie->notPutToiletPaper(); 
 // => It's not humanly possible to remember to put toilet paper rolls when they are finished 
```

Obtenemos todo esto simplemente heredando la clase Man usando la palabra clave extended.

### Un verdadero hombre sano

Si simplemente heredamos la clase `HealthyMan` de `Man` y no hacemos nada con ella, entonces supera todo el propósito.

La clase HealthyMan tiene propiedades adicionales como `body_fat_percentage` y `workout_per_week` , y métodos como `eatHealthy()` , `meditateDaily()` y `laughOften()` .

Ya que estas son propiedades personales, podemos establecer la visibilidad de las protegidas o privadas y crear métodos de establecimiento / obtención para la encapsulación completa.

```php
<?php 
 class HealthyMan extends Man 
 { 
    /** 
     * HealthyMan properties 
     */ 
    private $body_fat_percentage; 
    private $workout_per_week; 
 
    /** 
     * HealthyMan methods 
     */ 
    public function eatHealthy() 
    { 
        return "I only eat healthy meals."; 
    } 
 
    public function meditateDaily() 
    { 
        return "I set aside 20 minutes daily to meditate."; 
    } 
 
    public function laughOften() 
    { 
        return "I watch funny TV shows to unwind myself."; 
    } 
 
    /** 
     * HealthyMan Setters and Getters 
     */ 
    public function setBodyFatPercentage($fat_percentage) 
    { 
        $this->body_fat_percentage  = $fat_percentage; 
    } 
 
    public function getBodyFatPercentage() 
    { 
        return $this->body_fat_percentage; 
    } 
 
    public function setWorkoutPerWeek($workout_times) 
    { 
        $this->workout_per_week = $workout_times; 
    } 
 
    public function getWorkoutPerWeek() 
    { 
        return $this->workout_per_week; 
    } 
 } 
```

Podemos llamar a estos métodos para ver si funcionan como se espera:

```php
<?php 
 
 echo "\n" . $jackie->eatHealthy(); 
 // => I only eat healthy meals. 
 
 echo "\n" . $jackie->meditateDaily(); 
 // => I set aside 20 minutes daily to meditate. 
 
 echo "\n" . $jackie->laughOften(); 
 // => I watch funny TV shows to unwind myself. 
 
 $jackie->setBodyFatPercentage(12); 
 echo "\nBody Fat %: " . $jackie->getBodyFatPercentage(); 
 // => Body Fat %: 12 
 
 $jackie->setWorkoutPerWeek(5); 
 echo "\nWorkout Times Per Week: " . $jackie->getWorkoutPerWeek(); 
 // => Workout Times Per Week: 5 
```

Hemos reutilizado con éxito el código existente e implementado una clase secundaria.

### ¿Es él ese obstinado?

A pesar de que heredó `beStubborn()` de la clase Man, ya que Jackie es un hombre sano, solo es terco solo de vez en cuando. Podemos tener el método `beStubborn()` Healthy Man para decir "Soy terco de vez en cuando" en lugar de simplemente "Soy obstinado" al anular el método de la clase padre.

```php
<?php 
 class HealthyMan extends Man 
 { 
    ..... 
    ..... 
 
    public function beStubborn() 
    { 
        return "I am stubborn once in a while."; 
    } 
 
    ..... 
    ..... 
 } 
```

Ahora, cuando podamos el método `beStubborn()` Jackie, veremos una salida diferente a la anterior:

```php
<?php 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn once in a while. 
```

Esto demuestra cómo funciona la sustitución de métodos en OOP.

Al utilizar la sustitución de métodos, básicamente estamos volviendo a declarar el método de la clase primaria dentro de la clase secundaria.

De esta manera, cualquier instancia de la clase principal mantiene su método original, mientras que cualquier instancia de la clase secundaria tiene el método modificado o anulado.