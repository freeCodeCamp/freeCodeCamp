---
title: Object isFrozen
localeTitle: Объект заморожен
---
## Объект заморожен

Вы можете использовать **`Object.isFrozen()`** чтобы выяснить, был ли объект заморожен или нет. Он возвращает **`true`** или **`false`** логическое значение.

#### **СИНТАКСИС**

```javascript
Object.isFrozen(obj) 
```

**Например:**

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

Помните, что замороженный объект **не может изменить** свои свойства.  
  
Если вы попытаетесь использовать **`Object.isFrozen()`** для аргумента, отличного от объекта, он вернет `true` .

#### Дополнительная информация:

[MDN Object.isFrozen ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)  
[MDN Object.freeze ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)