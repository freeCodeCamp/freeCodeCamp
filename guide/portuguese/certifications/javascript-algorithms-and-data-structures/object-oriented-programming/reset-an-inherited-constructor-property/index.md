---
title: Reset an Inherited Constructor Property
localeTitle: Redefinir uma propriedade de construtor herdado
---
## Redefinir uma propriedade de construtor herdado

### Método

Os objetos `duck` e `beagle` foram programados para herdar as propriedades do construtor `supertypes` . Para sobrescrever estas duas linhas de código, terá que ser escrito para definir os construtores para os construtores desejados `Bird` e `Dog` . O código a seguir demonstra como isso pode ser alcançado.

```javascript
Bird.prototype.constructor = Bird; 
```

### Solução

```javascript
function Animal() { } 
 function Bird() { } 
 function Dog() { } 
 
 Bird.prototype = Object.create(Animal.prototype); 
 Dog.prototype = Object.create(Animal.prototype); 
 
 // Add your code below this line 
 Bird.prototype.constructor = Bird; 
 Dog.prototype.constructor = Dog; 
 
 let duck = new Bird(); 
 let beagle = new Dog(); 

```