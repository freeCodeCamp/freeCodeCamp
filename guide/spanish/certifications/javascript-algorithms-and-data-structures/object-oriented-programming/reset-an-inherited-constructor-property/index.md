---
title: Reset an Inherited Constructor Property
localeTitle: Restablecer una propiedad de constructor heredada
---
## Restablecer una propiedad de constructor heredada

### Método

Los objetos `duck` y `beagle` han sido programados para heredar las propiedades del constructor de `supertypes` . Para sobrescribir estas dos líneas de código, tendrá que escribirse para establecer los constructores en los constructores deseados `Bird` y `Dog` . El siguiente código demuestra cómo se puede lograr esto.

```javascript
Bird.prototype.constructor = Bird; 
```

### Solución

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