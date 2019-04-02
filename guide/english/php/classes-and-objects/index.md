---
title: Classes and Objects
---
# Classes and Objects

Classes are the way that we represent types of objects in the world. Objects would be the actual _instances_ of that class in the world. A class defines _properties_ and _behavior_ of an object of that class. The class defines how the object can interact with the rest of the world. Classes also allow us to abstract away details that we don't want to show other people! 

Say for example you have a dog named Spot. Spot is one instance of a Dog (class) object. 

PHP code to define a class: 

```php
// Dog class
class dog {
    // Keep name and age private - we don't want to be able to change these!
    private $name;
    
    private $age;
    
    // Constructor allows us to make an object of this class with given parameters.
    function __construct($name, $age){
    	$this->name = $name;
    	$this->age = $age;
    	echo 'Dog named: '.$this->name.' is '.$this->age.' years old.';
    }

    // Destructor gets called when the item is deleted.
    function __destruct(){
    	echo 'Dog '.$this->name.' has ran off into the sunset';
    }

    function getname() {
        echo $this->name;
    }

    function getage() {
        echo $this->age;
    }

}

$mydog = new dog("Spot", "8");
echo $mydog->getname();
echo $mydog->getage();

```

The code above would echo: 
Dog named: Spot is 8 years old. 
Spot
8
Dog Spot has ran off into the sunset

I created an object $mydog of class dog. Its constructor was called, I used some methods inside of the class, then the destructor was called. 
