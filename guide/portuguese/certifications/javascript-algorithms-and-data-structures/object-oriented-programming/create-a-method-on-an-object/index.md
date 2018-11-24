---
title: Create a Method on an Object
localeTitle: Crie um método em um objeto
---
## Crie um método em um objeto

### Método:

Uma função de objetos deve ser inicializada dentro do próprio objeto. Isso é demonstrado no código a seguir.

```javascript
let obj = { 
  property1 = 1, 
 
  function1: function() { 
    //Code to be exectued 
  } 
 }; 
```

### Solução:

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() { 
    return "This dog has " + dog.numLegs + " legs."; 
  } 
 }; 
 
 dog.sayLegs(); 

```