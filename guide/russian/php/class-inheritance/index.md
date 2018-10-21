---
title: Class Inheritance
localeTitle: Наследование класса
---
## Наследование класса

_СОДЕРЖАНИЕ КОДА С НАСЛЕДОВАНИЕМ В ОРИЕНТИРОВАННОМ ПРОГРАММИРОВАНИИ ОБЪЕКТА_

Здесь мы поговорим о том, как мы можем повторно использовать код, который мы написали, без дублирования кода, используя наследование.

### Человек-класс

Это наш класс `Man` :

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

### Здоровый человек

Предположим, мы хотим создать еще один класс под названием `HealthyMan` который обладает всеми свойствами и методами класса `Man` .

Не переписывая весь код для класса `Man` , мы можем повторно использовать этот код с помощью ключевого слова extends.

```php
<?php 
 class HealthyMan extends Man 
 { 
 
 } 
```

Теперь у нас есть все свойства класса и методы из Man `HealthyMan` . Мы можем создать класс `HealthyMan` чтобы проверить это быстро.

```php
<?php 
 $jackie = new HealthyMan('Jackie', 25, '5\' 5"'); 
 // => Our man's name is: Jackie 
 // => He is 25 years old and 5' 5" tall. 
```

Мы можем пойти дальше и установить HealthyMan, а также любимые виды спорта и напитки Джеки.

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

Теперь давайте посмотрим, можем ли мы назвать методы класса Man, такие как `giveFirmHandshakes()` , `beStubborn()` и `notPutToiletPaper()` .

```php
<?php 
 echo "\n" . $jackie->giveFirmHandshakes(); 
 // => I give firm handshakes. 
 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn. 
 
 echo "\n" . $jackie->notPutToiletPaper(); 
 // => It's not humanly possible to remember to put toilet paper rolls when they are finished 
```

Мы получаем все это, просто наследуя класс Man, используя ключевое слово extends.

### Настоящий здоровый человек

Если мы просто наследуем `HealthyMan` из класса `Man` и ничего не делаем с этим, то это бьет всю цель.

Класс HealthyMan имеет дополнительные свойства, такие как `body_fat_percentage` и `workout_per_week` , а также методы, такие как `eatHealthy()` , `meditateDaily()` и `laughOften()` .

Поскольку это личные свойства, мы можем либо установить их видимость защищенных, либо частных и создать методы setter / getter для полной инкапсуляции.

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

Мы можем назвать эти методы, чтобы убедиться, что они работают как ожидалось:

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

Мы успешно повторно использовали существующий код и реализовали дочерний класс.

### Неужели Он упрям?

Несмотря на то, что он унаследовал `beStubborn()` от класса Man, поскольку Джеки - здоровый человек, он только упрям ​​только раз в то время. У нас может быть метод `beStubborn()` Healthy Man, чтобы сказать «Я упрямый раз в то время» вместо простого старого «Я упрямый», переопределив метод родительского класса.

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

Теперь, когда мы можем `beStubborn()` метод `beStubborn()` Джеки, мы увидим другой результат, чем раньше:

```php
<?php 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn once in a while. 
```

Это демонстрирует, как метод переопределения работает в ООП.

Используя переопределение метода, мы в основном повторно объявляем метод родительского класса внутри дочернего класса.

Таким образом, любой экземпляр класса родителя сохраняет свой оригинальный метод, тогда как любой экземпляр дочернего класса имеет модифицированный или переопределенный метод.