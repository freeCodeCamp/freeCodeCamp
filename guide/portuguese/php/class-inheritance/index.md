---
title: Class Inheritance
localeTitle: Herança de Classe
---
## Herança de Classe

_REUTILIZAR CÓDIGO COM HERANÇA NA PROGRAMAÇÃO ORIENTADA A OBJETOS_

Aqui, falaremos sobre como podemos reutilizar o código que escrevemos sem ter nenhuma duplicação de código usando herança.

### Homem classe

Esta é a nossa classe `Man` :

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

### Homem saudável

Digamos que queremos criar outra classe chamada `HealthyMan` que tenha todas as propriedades e métodos da classe `Man` .

Sem ter que reescrever todo o código para a classe `Man` , podemos reutilizar esse código usando a palavra-chave extends.

```php
<?php 
 class HealthyMan extends Man 
 { 
 
 } 
```

Agora temos todas as propriedades e métodos de classe do Man dentro do `HealthyMan` . Podemos instanciar a classe `HealthyMan` para verificar isso rapidamente.

```php
<?php 
 $jackie = new HealthyMan('Jackie', 25, '5\' 5"'); 
 // => Our man's name is: Jackie 
 // => He is 25 years old and 5' 5" tall. 
```

Podemos ir em frente e definir os esportes e bebidas favoritos de HealthyMan aka Jackie.

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

Agora vamos ver se podemos chamar métodos de classe do Man como `giveFirmHandshakes()` , `beStubborn()` e `notPutToiletPaper()` .

```php
<?php 
 echo "\n" . $jackie->giveFirmHandshakes(); 
 // => I give firm handshakes. 
 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn. 
 
 echo "\n" . $jackie->notPutToiletPaper(); 
 // => It's not humanly possible to remember to put toilet paper rolls when they are finished 
```

Nós obtemos tudo isso apenas herdando a classe Man usando a palavra-chave extends.

### Um homem realmente saudável

Se apenas herdarmos a classe `HealthyMan` from `Man` e não fizermos nada com ela, ela `HealthyMan` todo o propósito.

A classe HealthyMan possui propriedades adicionais, como `body_fat_percentage` e `workout_per_week` , e métodos como `eatHealthy()` , `meditateDaily()` e `laughOften()` .

Como essas são propriedades pessoais, podemos definir a visibilidade de métodos protegidos ou privados e criar setter / getter para o encapsulamento completo.

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

Podemos chamar esses métodos para ver se estão funcionando conforme o esperado:

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

Reutilizamos com sucesso o código existente e implementamos uma classe filha.

### Ele é teimoso?

Mesmo que ele tenha herdado `beStubborn()` da classe Man, já que Jackie é um homem saudável, ele é apenas teimoso apenas de vez em quando. Podemos `beStubborn()` método `beStubborn()` Healthy Man para dizer “sou teimoso de vez em quando” em vez de simplesmente “eu sou teimoso” substituindo o método da classe pai.

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

Agora, quando pudermos `beStubborn()` método `beStubborn()` Jackie, veremos uma saída diferente da anterior:

```php
<?php 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn once in a while. 
```

Isso demonstra como o método de sobreposição funciona na POO.

Ao usar a substituição de métodos, basicamente, estamos declarando novamente o método da classe pai dentro da classe filha.

Dessa forma, qualquer instância da classe pai mantém seu método original, enquanto qualquer instância da classe filha possui o método modificado ou substituído.