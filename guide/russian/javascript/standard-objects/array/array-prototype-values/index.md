---
title: Array.prototype.values
localeTitle: Array.prototype.values
---
## Array.prototype.values

Метод `values` возвращает новый объект `Array Iterator` который содержит значения для каждого индекса в массиве.

### Синтаксис

```javascript
arr.values() 
```

### Возвращает

Новый объект ittertator `array` .

### пример

```javascript
let friends = ["Rachel", "Monica", "Chandler", "Phoebe", "Joey", "Ross"] 
 
 for (let friend of friends) { 
  console.log(friend) 
 } 
 
 // Rachel 
 // Monica 
 // Chandler 
 // Phoebe 
 // Joey 
 // Ross 
```

#### Дополнительная информация:

[Документация MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)