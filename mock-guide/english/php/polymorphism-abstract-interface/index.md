---
title: Polymorphism with Abstract and Interface
---
## Polymorphism with Abstract and Interface

_Share and enforce code with Polymorphism using Abstract class and interface_

We will dive deeper into Object Oriented Programming and try to think in terms of Design Patterns to share and enforce our code using Polymorphism.

### Abstract Class


Let’s say we have a class called Man with some properties (`name`, `age`, `height`, `fav_drinks` and `fav_sports`) and methods (`giveFirmHandshakes`, `beStubborn` and `notPutToiletPaper`).

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
 
We need to specify name, age and height to instantiate this class as required by the constructor.

```php
<?php
$jack = new Man('Jack', '26', '5 Feet 6 Inches');

echo sprintf('%s - %s - %s', $jack->name, $jack->age, $jack->height);
// => Jack - 26 - 5 Feet 6 Inches
```
 
Now, let’s say we want to add a new method to this class called isActive. 

This method checks the property active and returns appropriate message depending on the value of active with default value of false. We can set it to true for those men that are active.

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
 
What if a man is not JUST active or idle? 

What if there is a scale of 1 to 4 that measures how active a man is 
(1 – idle, 2 – lightly active, 3- moderately active, 4- very active)? 

We can have an if..elseif..else statements like this:

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
 
Now, let’s take this a step further. 

What if Man’s active property is not just an integer (1, 2, 3, 4, etc)? 

What if the value of active is “athletic” or “lazy”? 

Don’t we have to add more elseif statements looking for a match with those strings?

Abstract classes can be used for such scenario. 

With abstract classes, you basically define the class as abstract and the methods you want to enforce as abstract without actually putting any code inside those methods. 

Then you create a child class extending the parent abstract class and implement the abstract methods in that child class. 

This way, you will be enforcing all the child classes to define their own version of abstract methods. Let’s see how we can set our `isActive()` method as abstract.

#1: Define the class as abstract.

```php
<?php
abstract class Man
{
.....
.....
}
```
 
#2: Create an abstract method for the method you want to enforce inside the abstract class.


```php
<?php
abstract class Man
{
.....
.....
abstract public function isActive();
}
```
 
#3: Create a child class extending the abstract class.

```php
<?php

class AthleticMan extends Man
{
.....
.....
}
```
 
#4: Implement the abstract method inside the child class.

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
 
#5: Instantiate the child class (NOT the abstract class).

```php
<?php
$jack = new AthleticMan('Jack', '26', '5 feet 6 inches');
echo $jack->isActive();
// => I am a very active athlete.
```

Complete abstract class definition and implementation code:

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
 
In this code, you will notice that `isActive()` abstract method is defined inside `Man` abstract class and it is implemented inside child class `AthleticMan`.

Now `Man` class cannot be instantiated directly to create an object.

```php
<?php
$ted = new Man('Ted', '30', '6 feet');
echo $ted->isActive();
// => Fatal error:  Uncaught Error: Cannot instantiate abstract class Man
```
 
Also, every child class of the abstract class (`Man` class) needs to implement all the abstract methods. Lack of such implementation will result in a fatal error.

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
 
By using abstract classes, you can enforce certain methods to be implemented individually by the child classes.

### Interface

There is another Object Oriented Programming concept that is closely related to Abstract Classes called Interface. 

The only difference between Abstract Classes and Interfaces is that in Abstract Classes, you can have a mix of defined methods (`giveFirmHandshakes()`, `isStubborn()`, etc.) and abstract methods (`isActive()`) inside the parent class whereas in Interfaces, you can only define (not implement) methods inside the parent class.

Let’s see how we can convert Man abstract class above to an interface.

#1: Define the interface with all the methods (use interface instead of class).

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
 
#2: Create a class that implements the interface (use implements instead of extends). This class must implement ALL the methods defined inside the interface including the constructor method.

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

 
#3: Instantiate the implementing class (AthleticMan)

```php
<?php
$jack = new AthleticMan('Jack', '26', '5 feet 6 inches');
echo $jack->isActive();
// => I am a very active athlete.
```
 
With interfaces, you need to keep in mind that:

- The methods cannot be implemented inside the interface.

- Variables (properties) cannot be defined inside the interface.

- All the methods defined inside the interface need to be implemented in the child (implementing) class.

- All the necessary variables need to be defined inside the child class.

- Man interface enforces its implementing classes to implement all the methods in the interface.

So, what is the use of interfaces? 

Can’t we just create a new class AthleticMan and create all the methods instead of implementing the interface? 

This is where *Design Patterns* come into play.

Interfaces are used when there is a base class (`Man`) that wants to enforce you to do things (construct an object, giveFirmHandshakes, beStubborn, notPutToiletPaper and check if you are active) but doesn’t want to tell you exactly how to do it. 

You can just go ahead and create implementing classes with implementations as you deem fit. 

As long as all the methods are implemented, `Man` interface doesn’t care how.

We have gone over how and when to use abstract classes and interfaces in PHP. Using these OOP concepts to have classes with different functionality sharing the same base “blueprint” (abstract class or interface) is called Polymorphism.
