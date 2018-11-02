---
title: Object Oriented Programming
---
## Object Oriented Programming

Object Oriented Programming, as the name suggests, is all about objects. You are basically trying to create a piece of software neatly organized in objects. This approach makes the code scalable with reusable components.


### MAN CLASS

Let’s say you want to create a program about men in general.


Average men have all kinds of stuff in common like giving firm handshakes, being stubborn, not putting toilet paper rolls back, falling in love with the latest gadgets, etc. These could be described as behaviors or methods of Man object.

Men also have their own distinct features like age, height, favorite sports, favorite drinks, etc. These could be described as properties or attributes of Man object.

With these in mind, creating a Man class is not so difficult anymore. So, the program would go like this.


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


### MAN OBJECT

Now that we have this *Man* class, we can create any particular man by creating an instance of class known as class instantiation.

```php
<?php

// Create a Man object called "Jack" (i.e. instantiation)
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

Here you can see that a man named Jack was created with name of “Jack”, height of “6 feet”, favorite sports “basketball and soccer” and favorite drinks “coffee and green tea”. These attributes are called instance variables.

Then he has the behaviors of all the men like giving firm hand shakes, being stubborn and not putting back toilet paper. All these behaviors are called instance methods.


### CONSTRUCTORS

So far, we created a class called “Man” and an object called “Jack” by instantiating that class. We also gave Jack values for his attributes (name, height, favorite sports and drinks) and call his behaviors common to all men (giving firm handshakes, staying stubborn and not putting toilet papers back).

Let’s take this idea one step further and get Jack to start introducing himself whenever we create Jack object without actually having to print them out individually like this:


```php
<?php
// Print out Jack's attributes and values
echo "Our man's name is: " . $jack->name . "\n";
echo "He is " . $jack->age . " years old and " . $jack->height . " tall.";
```

This is where constructors come into play. Constructors are basically special methods that get called when an object is created.

So, the idea is to print out Jack’s name, age and height when we create “Jack” object by instantiating Man class. In order to make this happen, we need to however specify the name, age and height when we create the object like this:


```php
<?php
// Create a Man object called "Jack"
$jack = new Man('Jack', 30, '6 feet');
```
 
This code tells the Man class to create an object with 3 parameters: ‘Jack’ for name, 30 for age and ‘6 feet’ for height.

Now that we have passed these parameters while instantiating the class, we can easily use them to make the constructor method.


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
 
So, now whenever we instantiate Man class, we need to put 3 parameters and they will be printed out right away.

```php
<?php
// Create a Man object called "Jack"
$jack = new Man('Jack', 30, '6 feet');
```
 
 
`Object created`
`Our man’s name is: Jack`
`He is 30 years old and 6 feet tall.`

The complete code with constructor would be something like this:


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
 
Now, we don’t have to set Jack’s name, age and height separately and print them anymore. Whenever we create Jack object, we just specify his properties as the parameters and they will get printed automatically by the help of the constructor. We can also put his favorite sports and drinks in the parameter if we want by

specifying them as parameters while creating the object and
putting the echo lines inside the constructor.
You can visit here for more information on PHP implementation of constructors. Our OOP journey has been slow but steady.


### KEEPING A MAN’S SECRETS



If you noticed all the class variables (name, age, height, fav_sports and fav_drinks) are declared as public inside Man class. Right now, after creating a Man object, we have access to all of his properties by simply calling them:

```php
<?php
echo $jack->name;
echo $jack->height;
```
 
But what if we want to keep certain things secret about the man? Maybe he doesn’t want everyone to know his age … or … maybe he only wants certain people to know his favorite drinks. We can make this happen by changing the visibility of those properties from public to protected and even private.

Public properties are accessible anywhere, both inside and outside the class.

Protected properties are accessible inside the class and inside the children class(es).

Private properties have the same visibility as protected except they cannot be accessed by the children class(es).

We will talk about inheriting a class in a bit. For now, let’s try to set age protected and favorite_drinks private in Man class.

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
 
Now if you try to instantiate the class and call age and fav_drinks, you will get an error.


```php
<?php
$jack = new Man('Jack', 30, '6 feet');

echo $jack->age;
// Fatal error:  Cannot access protected property Man::$age

print_r($jack->fav_drinks);
// Fatal error:  Cannot access private property Man::$fav_drinks
```
 

### SETTERS AND GETTERS

Now that we have protected Jack’s age and favorite drinks, how do we exactly access them and update them?

To get the protected or private properties, we need to create a getter method like this inside Man class (note that this is a class method with visibility of public).


```php
<?php
public function getAge()
{
    return $this->age;
}
```
 
Now we can easily get Jack’s age by calling this method:

```php
<?php
echo $jack->getAge();
 
Jack just realized he turned 31 last week, how do we update his age? Can’t we just do this?

```php
<?php
$jack->age = 31;
```
 
Since age property is protected, we cannot access it directly outside the class whether to read it or update it. You will get a fatal error.

`Fatal error:  Cannot access protected property Man::$age`
 
In order to update a protected/private property, we need to create a setter method inside the class with public visibility.

```php
<?php
public function setAge($age)
{
    $this->age = $age;
}
```
 
Now we can easily update Jack’s age by just calling this setter method:

```php
<?php
$jack->setAge(31);

echo $jack->getAge();
// 31
```
 
We can also create setter and getter class methods for fav_drinks. Note that we have made the parameter for setFavDrinks optional. So, if you don’t pass an array to setFavDrinks, it will default to an empty array.

```php
<?php
public function setFavDrinks($drinks = array())
{
    if ($drinks) {
        $this->fav_drinks = $drinks;
    }
}

public function getFavDrinks()
{
    return $this->fav_drinks;
}
```
 
To set Jack’s fav_drinks:

```php
<?php
$jack->setFavDrinks(["coffee", "green tea"]);
``` 

To get Jack’s fav_drinks:

```php
<?php
echo json_encode($jack->getFavDrinks());
// ["coffee","green tea"]
```
 
This way of implementing and using class methods to retrieve and update class properties is called encapsulation in Object Oriented Programming. We can also set visibility for class methods just like how we did it for class properties.
