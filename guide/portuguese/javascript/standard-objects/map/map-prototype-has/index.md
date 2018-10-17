---
title: Map.prototype.has
localeTitle: Map.prototype.has
---
## Map.prototype.has

Dado um `Map` com elementos dentro, a função `has()` permite determinar se existe ou não um elemento dentro do Mapa, baseado em uma chave que você passa.

A função `has()` retorna uma _primitiva `Boolean`_ ( `true` ou `false` ), que indica que o Map contém o elemento ou não.

Você passa um parâmetro- `key` para a função `has()` , que será usada para procurar um elemento com essa chave dentro do mapa.

Exemplo:

```js
// A simple Map 
 const campers = new Map(); 
 
 // add some elements to the map 
 // each element's key is 'camp' and a number 
 campers.set('camp1', 'Bernardo'); 
 campers.set('camp2', 'Andrea'); 
 campers.set('camp3', 'Miguel'); 
 
 // Now I want to know if there's an element 
 // with 'camp4' key: 
 campers.has('camp4'); 
 // output is `false` 
```

O mapa dos `campers` não possui atualmente um elemento com uma chave `'camp4'` . Portanto, a chamada de função `has('camp4')` retornará `false` .

```js
// If we add an element with the 'camp4' key to the map 
 campers.set('camp4', 'Ana'); 
 
 // and try looking for that key again 
 campers.has('camp4'); 
 // output is `true` 
```

Como o mapa agora tem um elemento com uma chave `'camp4'` , a chamada de função `has('camp4')` retornará `true` desta vez!

Em um cenário mais real, você pode não adicionar manualmente os elementos ao Mapa, assim a função `has()` se tornaria realmente útil nesses casos.

#### Mais Informações:

*   [Map.prototype.has () no MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)