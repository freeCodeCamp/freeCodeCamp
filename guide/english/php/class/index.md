---
title: PHP - Class
---

### Simple Class for Beginner!

```php
class Lab {
  private $name = '';

  public function setName($name) {
    $this->name = $name;
  }

  private function getName() {
    return $this->name;
  }

  public function say_my_name() {
    $name = $this->getName();
    return $name;
  }

}
$breaking_bad = 'Heisenberg';
$lab = new Lab();
$lab->setName($breaking_bad);
echo "My Name is " . $lab->say_my_name(). "!";
```


**Note**: 
The keyword *Private* and *public* define the visibility of the property or the method. 

> Class members declared public can be accessed everywhere.
Members declared as private may only be accessed by the class that defines the member.
> <br />[Link to the documentation](http://php.net/manual/en/language.oop5.visibility.php)
