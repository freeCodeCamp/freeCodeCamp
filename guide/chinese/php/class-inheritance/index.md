---
title: Class Inheritance
localeTitle: 类继承
---
## 类继承

_在面向对象的程序设计中重新使用继承代码_

在这里，我们将讨论如何通过使用继承来重用我们编写的代码而不需要任何代码重复。

### 人类

这是我们的`Man`类：

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

### 健康的人

假设我们要创建另一个名为`HealthyMan`类，它具有`Man`类的所有属性和方法。

无需重新编写`Man`类的所有代码，我们可以使用关键字extends来重用该代码。

```php
<?php 
 class HealthyMan extends Man 
 { 
 
 } 
```

现在我们拥有来自`HealthyMan`里面的Man的所有类属性和方法。我们可以实例化`HealthyMan`类来快速检查这个。

```php
<?php 
 $jackie = new HealthyMan('Jackie', 25, '5\' 5"'); 
 // => Our man's name is: Jackie 
 // => He is 25 years old and 5' 5" tall. 
```

我们可以继续设置HealthyMan又名Jackie最喜欢的运动和饮料。

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

现在让我们看看我们是否可以调用Man的类方法，如`giveFirmHandshakes()` ， `beStubborn()`和`notPutToiletPaper()` 。

```php
<?php 
 echo "\n" . $jackie->giveFirmHandshakes(); 
 // => I give firm handshakes. 
 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn. 
 
 echo "\n" . $jackie->notPutToiletPaper(); 
 // => It's not humanly possible to remember to put toilet paper rolls when they are finished 
```

我们通过使用关键字extends继承Man类来获得所有这些。

### 一个真正健康的人

如果我们从`Man`类继承`HealthyMan`并且不做任何事情，那么它就胜过了整个目的。

HealthyMan类有类似的附加属性`body_fat_percentage`和`workout_per_week` ，以及类似的方法`eatHealthy()` `meditateDaily()`和`laughOften()`

由于这些是个人属性，我们可以设置它们对protected或private的可见性，并为完全封装创建setter / getter方法。

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

我们可以调用这些方法来查看它们是否按预期工作：

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

我们已成功重用现有代码并实现了子类。

### 他是顽固的吗？

虽然他继承了Man类的`beStubborn()` ，因为Jackie是一个健康的男人，他只是偶尔顽固一次。我们可以通过改变父类的方法，让健康人的`beStubborn()`方法说“我偶尔会顽固”，而不仅仅是简单的“我很固执”。

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

现在，当我们可以使用Jackie的`beStubborn()`方法时，我们将看到与以前不同的输出：

```php
<?php 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn once in a while. 
```

这演示了方法覆盖如何在OOP中工作。

通过使用方法重写，我们基本上在子类中重新声明父类的方法。

这样，父类的任何实例都维护其原始方法，而子类的任何实例都具有修改或重写的方法。