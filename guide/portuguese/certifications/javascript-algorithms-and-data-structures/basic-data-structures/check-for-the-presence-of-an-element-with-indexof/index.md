---
title: Check For The Presence of an Element With indexOf()
localeTitle: Verificar a presença de um elemento com indexOf ()
---
## Verificar a presença de um elemento com indexOf ()

*   Uma `if-statement` simples pode ser usada para verificar se o valor retornado pela função `indexOf()` é menor que 0.
*   Quando o valor for descoberto, você poderá retornar `true` ou `false` .
*   `Solution-1` demonstra como uma `if-statement` simples pode retornar o resultado correto.

## Solução 1:

```javascript
function quickCheck(arr, elem) { 
  if(arr.indexOf(elem)>=0) { 
    return true; 
  } 
  return false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
```

*   `Solution-2` demonstra como o problema pode ser resolvido usando o `? : (conditional)` operador.

## Solução 2:

```javascript
function quickCheck(arr, elem) { 
 return arr.indexOf(elem) >= 0 ? true : false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 

```