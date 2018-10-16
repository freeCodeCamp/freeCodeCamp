---
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
localeTitle: Use Destignucturing Assignment para passar um objeto como um parâmetro de função
---
## Use Destignucturing Assignment para passar um objeto como um parâmetro de função

Você pode passar o objeto inteiro e escolher os atributos específicos que deseja usando o `.` operador. Mas o ES6 oferece uma opção mais elegante!

## Sugestão 1:

Livre-se das `stats` e veja se você pode destruí-lo. Precisamos do `max` e `min` de `stats` .

## Aviso de spoiler - soluções à frente!

## Solução 1:

```javascript
const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return function half({max, min}) { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }; 
  // change code above this line 
 
 })(); 
```

Observe que estamos destruindo as `stats` para passar dois de seus atributos - `max` e `min` - para a função. Não esqueça de modificar a segunda instrução de retorno. Mude `stats.max` para `max` e mude `stats.min` para apenas `min` .

## Solução 2:

Aqui está outra solução que funciona. Não é muita diferença, além do fato de que a função não tem nome.

```javascript
const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return (({max, min}) => { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }); 
  // change code above this line 
 
 })(); 

```