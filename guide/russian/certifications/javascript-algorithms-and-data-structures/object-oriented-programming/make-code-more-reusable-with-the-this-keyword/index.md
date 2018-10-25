---
title: Make Code More Reusable with the this Keyword
localeTitle: Сделать код более многоразовым с помощью этого ключевого слова
---
## Сделать код более многоразовым с помощью этого ключевого слова

### Метод:

Эта задача просто демонстрирует силу `this` ключевого слова. Замена `dog.numLegs` на `this.numLegs` усиливает наш код, напрямую ссылаясь на этот объект. [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) имеет множество примеров для определения эффектов `this` ключевого слова.

### Решение:

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";} 
 }; 
 
 dog.sayLegs(); 

```