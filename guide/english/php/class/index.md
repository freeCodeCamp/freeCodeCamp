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

**Note:** To respect encapsulation (good practice) for class, is recommended to declare your properties as `private`. However, they can be declared as `public` and you can use them like this: `$lab->name`. 

**Definition**: Encapsulation is the process of hidding the data of the object from outside world and accessed to it is restricted to members of the class. Encapsulation: - wrapping of data in single unit. also we can say hiding the information of essential details.
