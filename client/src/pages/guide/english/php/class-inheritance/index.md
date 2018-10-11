---
title: Class Inheritance
---
## Class Inheritance

_REUSE CODE WITH INHERITANCE IN OBJECT ORIENTED PROGRAMMING_

Here, we will talk about how we can re-use code that we wrote without having any code duplication by using inheritance.

### Man Class

This is our `Man` class:

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

 
### Healthy Man



Let’s say we want to create another class called `HealthyMan` which has all the properties and methods of `Man` class.

Without having to re-write all the code for `Man` class, we can re-use that code by using the keyword extends.


```php
<?php
class HealthyMan extends Man
{

}
```
 
Now we have all the class properties and methods from Man inside `HealthyMan`. We can instantiate `HealthyMan` class to check this real quick.

```php
<?php
$jackie = new HealthyMan('Jackie', 25, '5\' 5"');
// => Our man's name is: Jackie
// => He is 25 years old and 5' 5" tall.
```
 
We can go ahead and set HealthyMan aka Jackie’s favorite sports and drinks.

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
 
Now let’s see if we can call Man’s class methods like `giveFirmHandshakes()`, `beStubborn()` and `notPutToiletPaper()`.

```php
<?php
echo "\n" . $jackie->giveFirmHandshakes();
// => I give firm handshakes.

echo "\n" . $jackie->beStubborn();
// => I am stubborn.

echo "\n" . $jackie->notPutToiletPaper();
// => It's not humanly possible to remember to put toilet paper rolls when they are finished
```
 
We get all of these by just inheriting Man class using the keyword extends.


### A Real Healthy Man


If we just inherit `HealthyMan` from `Man` class and do nothing with it, then it beats the whole purpose.

HealthyMan class has additional properties like `body_fat_percentage` and `workout_per_week`, and methods like `eatHealthy()`, `meditateDaily()` and `laughOften()`.

Since these are personal properties, we can either set them visibility of protected or private and create setter/getter methods for the full encapsulation.

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
 
We can call these methods to see if they are working as expected:

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
 
We have successfully re-used the existing code and implemented a child class.


### Is He That Stubborn?


Even though he inherited `beStubborn()` from Man class, since Jackie is a healthy man, he is only stubborn only once in a while. We can have Healthy Man’s `beStubborn()` method to say “I am stubborn once in a while” instead of just plain old “I am stubborn” by overriding the parent class’ method.

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
 
Now when we can Jackie’s `beStubborn()` method, we will see a different output than before:

```php
<?php
echo "\n" . $jackie->beStubborn();
// => I am stubborn once in a while.
```
 
This demonstrates how method overriding works in OOP. 

By using method overriding, we are basically re-declaring the parent class’ method inside the child class. 

This way, any instance of the parent’s class maintains its original method whereas any instance of the child class has the modified or overridden method.
