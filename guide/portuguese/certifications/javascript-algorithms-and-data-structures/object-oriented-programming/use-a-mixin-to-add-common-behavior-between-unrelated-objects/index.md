---
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
localeTitle: Use um Mixin para adicionar um comportamento comum entre objetos não relacionados
---
## Use um Mixin para adicionar um comportamento comum entre objetos não relacionados

### Método

Assim como a função `flyMixin` , uma nova função `glideMixin` deve ser feita para aceitar os objetos `bird` e `boat` como parâmetro. Crie esta nova função usando a mesma sintaxe da função `flyMixin` e, em seguida, chame a função nos dois objetos.

### Solução

```javascript
let bird = { 
  name: "Donald", 
  numLegs: 2 
 }; 
 
 let boat = { 
  name: "Warrior", 
  type: "race-boat" 
 }; 
 
 // Add your code below this line 
 let glideMixin = function(obj) { 
    obj.glide = function() { 
        console.log("Gliding!"); 
    } 
 }; 
 glideMixin(bird); 
 glideMixin(boat); 

```