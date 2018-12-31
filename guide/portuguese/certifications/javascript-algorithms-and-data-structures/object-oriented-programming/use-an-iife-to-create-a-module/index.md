---
title: Use an IIFE to Create a Module
localeTitle: Use um IIFE para criar um módulo
---
## Use um IIFE para criar um módulo

### Método

Ambos `Mixin` 's devem ser embrulhados em um novo `funModule` então um ponto inicial é comentar todo o código até o momento.

```javascript
/*let isCuteMixin = function(obj) { 
  obj.isCute = function() { 
    return true; 
  }; 
 }; 
 let singMixin = function(obj) { 
  obj.sing = function() { 
    console.log("Singing to an awesome tune"); 
  }; 
 }; 
 */ 
```

Em seguida, abaixo, comece a escrever seu novo código do `funModule` . Dentro do novo módulo, você precisa escrever uma declaração de retorno para retornar ambos os blocos de código do `Mixin` . Simplesmente copie ambos os blocos de código originais do `Mixin` para o novo código do módulo, mas lembre-se de separar ambos os mixins com um `,`

### Solução

```javascript
let funModule = (function() { 
  return { 
    isCuteMixin: function(obj) { 
      obj.isCute = function() { 
        return true; 
      }; 
    }, 
    singMixin: function(obj) { 
      obj.sing = function() { 
         console.log("Singing to an awesome tune"); 
      }; 
    } 
  } 
 })(); 

```