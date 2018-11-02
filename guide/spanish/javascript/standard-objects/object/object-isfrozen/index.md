---
title: Object isFrozen
localeTitle: Objeto está congelado
---
## Objeto está congelado

Puede usar **`Object.isFrozen()`** para averiguar si un objeto está congelado o no. Devuelve un valor booleano **`true`** o **`false`** .

#### **SINTAXIS**

```javascript
Object.isFrozen(obj) 
```

**Por ejemplo:**

```javascript
var foods = { 
    grain : "wheat", 
    dairy  : "milk", 
    vegetable : "carrot", 
    fruit  : "grape" 
 }; 
 
 var frozenFoods = Object.freeze(foods); 
 
 var areMyFoodsFrozen = Object.isFrozen(frozenFoods); 
 
 \\ returns true 
```

Recuerde, un objeto congelado **no puede** tener sus propiedades cambiadas.  
  
Si intenta utilizar **`Object.isFrozen()`** en un argumento que no es un objeto, devolverá `true` .

#### Más información:

[MDN Object.isFrozen ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)  
[MDN Object.freeze ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)