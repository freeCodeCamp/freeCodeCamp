---
title: Classes and Objects
localeTitle: Classes e Objetos
---
# Classes e Objetos

Classes são a forma como representamos tipos de objetos no mundo. Objetos seriam as _instâncias_ reais dessa classe no mundo. Uma classe define _propriedades_ e _comportamento_ de um objeto dessa classe. A classe define como o objeto pode interagir com o resto do mundo. As classes também nos permitem abstrair detalhes que não queremos mostrar a outras pessoas!

Digamos, por exemplo, você tem um cachorro chamado Spot. Spot é uma instância de um objeto Dog (classe).

Código PHP para definir uma classe:

```php
// Classe Dog 
 class dog { 
    // Manter o nome ($name) e a idade ($age) como private - pois não queremos modificar isto
    private $name; 
 
    private $age; 
 
    // A Função Constructor nos permite estabelecer como será construído o Objeto desta Classe.
    // Ele sempre será invado automaticamente quando um Objeto for instanciado.
    // Neste caso, os objetos da classe Dog deveram ter os parâmetros $name e $age.
    function __construct($name, $age){ 
        $this->name = $name; 
        $this->age = $age; 
        echo 'Dog named: '.$this->name.' is '.$this->age.' years old.'; 
    } 
 
    // A função Destructor é chamada quando o Objeto é deletado.
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

O código acima iria resultar: "Dog named: Spot is 8 years old.Spot8Dog Spot has ran off into the sunset"

Criamos um Objeto $mydog de classe Dog. Seu construtor foi chamado, resultando no "Dog named: Spot is 8 years old.", os métodos getname() e getage() resultaram em "Spot" e "8" respectivamente, quando script foi encerrado e o Objeto $mydog foi destruído resultou o "Dog Spot has ran off into the sunset".
