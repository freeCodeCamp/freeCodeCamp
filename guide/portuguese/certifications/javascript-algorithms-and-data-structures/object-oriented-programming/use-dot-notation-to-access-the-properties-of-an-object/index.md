---
title: Use Dot Notation to Access the Properties of an Object
localeTitle: Use Dot Notation para acessar as propriedades de um objeto
---
## Use Dot Notation para acessar as propriedades de um objeto

### Método:

O código a seguir simplesmente imprimirá a `property1` do objeto `obj` .

```javascript
let obj = { 
  property1 = 1, 
  property2 = 2 
 }; 
 
 console.log(obj.property1); 
```

Seguindo essa lógica, use a operação `console.log` para imprimir a `property1` e a `property2` na tela.

### Solução:

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4 
 }; 
 // Add your code below this line 
 console.log(dog.name); 
 console.log(dog.numLegs); 

```