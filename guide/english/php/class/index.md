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
