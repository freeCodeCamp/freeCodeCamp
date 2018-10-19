---
title: Object isFrozen
localeTitle: Objeto isFrozen
---
## Objeto isFrozen

Você pode usar **`Object.isFrozen()`** para descobrir se um objeto está congelado ou não. Retorna um valor booleano **`true`** ou **`false`** .

#### **SINTAXE**

```javascript
Object.isFrozen(obj) 
```

**Por exemplo:**

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

Lembre-se, um objeto congelado **não pode** ter suas propriedades alteradas.  
  
Se você tentar usar **`Object.isFrozen()`** em um argumento não objeto, ele retornará `true` .

#### Mais Informações:

[MDN Object.isFrozen ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)  
[MDN Object.freeze ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)