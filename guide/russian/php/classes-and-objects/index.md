---
title: Classes and Objects
localeTitle: Классы и объекты
---
# Классы и объекты

Классы - это то, как мы представляем типы объектов в мире. Объектами будут фактические _экземпляры_ этого класса в мире. Класс определяет _свойства_ и _поведение_ объекта этого класса. Класс определяет, как объект может взаимодействовать с остальным миром. Классы также позволяют нам абстрагировать детали, которые мы не хотим показывать другим людям!

Скажем, например, у вас есть собака по имени Spot. Spot - это один экземпляр объекта Dog (class).

PHP-код для определения класса:

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

Вышеупомянутый код будет эхом: Собака по имени: Пятно 8 лет. Место 8 Собака пятна убежала на закат

Я создал объект $ mydog класса dog. Его конструктор был вызван, я использовал некоторые методы внутри класса, затем был вызван деструктор.