---
title: Array.prototype.values
localeTitle: Array.prototype.values
---
## Array.prototype.values

O método `values` retorna um novo objeto `Array Iterator` que contém os valores para cada índice na matriz.

### Sintaxe

```javascript
arr.values() 
```

### Retorna

Um novo objeto ittertator de `array` .

### Exemplo

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

#### Mais Informações:

[Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)