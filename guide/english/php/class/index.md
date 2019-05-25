---
title: PHP - Class
---

### Simple Class for Beginner!

```php
class Lab { // class keyword is mandatory identifier for class creation, after class keyword goes the name of the class(e.g. Lab)
  private $name = ''; // $name is instance variable, which means that every instantiated object has it's own copy of variable $name

  public function setName($name) { // function setName is setter function that sets the value of instance variable $name 
    $this->name = $name; // because $name is the name of both instance variable and function parameter, we use $this keyword 
  } 

  private function getName() { // getName is getter function that returns the value of instance variable $name 
    return $this->name;
  }

  public function sayMyName() {
    $name = $this->getName();
    return $name;
  }

}
$breakingBad = 'Heisenberg';
$lab = new Lab();
$lab->setName($breakingBad);
echo "My Name is " . $lab->sayMyName(). "!";
```


**Note**: 
The keywords *private* and *public* define the visibility of the property or the method. 

- Class members declared public can be accessed everywhere.
- Members declared as private may only be accessed by the class that defines the member.

### More Information
[visibility documentation](http://php.net/manual/en/language.oop5.visibility.php)
