---
title: Avoid Mutations and Side Effects Using Functional Programming
localeTitle: Evite Mutações e Efeitos Colaterais Usando Programação Funcional
---
## Evite Mutações e Efeitos Colaterais Usando Programação Funcional

### Explicação do Problema

Preencha o código para o `incrementer` função para que ele retorne o valor da variável global `fixedValue` aumentado em um. `fixedValue` não deve mudar, não importa quantas vezes a função `incrememter` seja chamada.

### Sugestão 1

Usar o operador de incremento ( `++` ) em `fixedValue` `fixedValue` , o que significa que ele não fará mais referência ao mesmo valor com o qual foi designado.

### Solução:

```javascript
// the global variable 
 var fixedValue = 4; 
 
 function incrementer () { 
  // Add your code below this line 
  return fixedValue + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(); // Should equal 5 
 console.log(fixedValue); // Should print 4 

```