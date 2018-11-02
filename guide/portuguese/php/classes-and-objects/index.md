---
title: Classes and Objects
localeTitle: Classes e Objetos
---
# Classes e Objetos

Classes são a forma como representamos tipos de objetos no mundo. Objetos seriam as _instâncias_ reais dessa classe no mundo. Uma classe define _propriedades_ e _comportamento_ de um objeto dessa classe. A classe define como o objeto pode interagir com o resto do mundo. As aulas também nos permitem abstrair detalhes que não queremos mostrar a outras pessoas!

Digamos, por exemplo, você tem um cachorro chamado Spot. Spot é uma instância de um objeto Dog (classe).

Código PHP para definir uma classe:

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

O código acima iria ecoar: Cão nomeado: Spot é de 8 anos de idade. Local 8 Dog Spot fugiu para o pôr do sol

Eu criei um objeto $ mydog de classe cachorro. Seu construtor foi chamado, usei alguns métodos dentro da classe, então o destruidor foi chamado.