---
title: Classes and Objects
localeTitle: Clases y objetos
---
# Clases y objetos

Las clases son la forma en que representamos los tipos de objetos en el mundo. Los objetos serían las _instancias_ reales de esa clase en el mundo. Una clase define las _propiedades_ y el _comportamiento_ de un objeto de esa clase. La clase define cómo el objeto puede interactuar con el resto del mundo. ¡Las clases también nos permiten abstraer detalles que no queremos mostrar a otras personas!

Digamos por ejemplo que tienes un perro llamado Spot. Spot es una instancia de un objeto Dog (clase).

Código PHP para definir una clase:

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

El código de arriba se haría eco: Perro llamado: Spot tiene 8 años. Lugar 8 Dog Spot se ha escapado hacia el atardecer.

Creé un objeto $ mydog de clase perro. Se llamó a su constructor, usé algunos métodos dentro de la clase, luego se llamó al destructor.