---
title: PHP - Class
---

### Simple Class for Beginner!

```php
<?php

class Lab {
  private $name = '';

  public function setName($name) {
    $this->name = $name;
  }

  private function getName() {
    return $this->name;
  }

  public function sayMyName() {
    $name = $this->getName();
    return $name;
  }

}
$breaking_bad = 'Heisenberg';
$lab = new Lab();
$lab->setName($breaking_bad);
echo "My Name is " . $lab->sayMyName(). "!";
```
