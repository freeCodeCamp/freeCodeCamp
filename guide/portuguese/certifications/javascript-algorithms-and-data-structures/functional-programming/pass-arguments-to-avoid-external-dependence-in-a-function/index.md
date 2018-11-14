---
title: Pass Arguments to Avoid External Dependence in a Function
localeTitle: Passar Argumentos para Evitar Dependência Externa em uma Função
---
## Passar Argumentos para Evitar Dependência Externa em uma Função

## Sugestão: 1

Tente passar o argumento para funcionar e retornar um valor maior desse argumento.

**Solução à frente!**

## Solução básica de código:

```javascript
// the global variable 
 var fixedValue = 4; 
 
 // Add your code below this line 
 function incrementer (value) { 
  return value + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(fixedValue); // Should equal 5 
 console.log(fixedValue); // Should print 4 
```

### Método

Este código irá fornecer o mesmo resultado que o último desafio, só que desta vez vamos passar o `fixedValue` para a função como um parâmetro.