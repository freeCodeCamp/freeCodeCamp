---
title: Multiple Identical Options in Switch Statements
localeTitle: Múltiplas Opções Idênticas em Instruções de Comutação
---
## Múltiplas Opções Idênticas em Instruções de Comutação

### Explicação do Problema

_Se a instrução break for omitida do caso de uma instrução switch, as instruções a seguir serão executadas até que uma quebra seja encontrada. Se você tiver várias entradas com a mesma saída, você pode representá-las em uma instrução switch como esta:_

```javascript
switch(val) { 
  case 1: 
  case 2: 
  case 3: 
    result = "1, 2, or 3"; 
    break; 
  case 4: 
    result = "4 alone"; 
 } 
```

_Casos para 1, 2 e 3 produzirão o mesmo resultado._

_Escreva uma instrução switch para definir a resposta para os seguintes intervalos:_ `1-3` - "baixo"  
`4-6` - "Mid"  
`7-9` - "Alto"

_Nota: Você precisará ter uma declaração de caso para cada número no intervalo._

## Alerta de spoiler!

**Solução à frente!**

## Solução de Código:

```javascript
function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val) { 
    case 1: 
    case 2: 
    case 3: 
      return "Low"; 
      break; 
    case 4: 
    case 5: 
    case 6: 
      return "Mid"; 
      break; 
    case 7: 
    case 8: 
    case 9: 
      return "High"; 
      break; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
```

## Solução alternativa de código:

```javascript
function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val){ 
    case 1: case 2: case 3: 
      answer = "Low"; 
      break; 
    case 4: case 5: case 6: 
      answer = "Mid"; 
      break; 
    case 7: case 8: case 9: 
      answer = "High"; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
```

· Executar código no [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Multiple-opts-in-switch)

### Explicação de código

Como você já tem uma variável chamada `answer` defined e a função a retorna, você pode modificar seu valor em cada grupo de instruções case para atender aos requisitos de exercício.

### Recursos

*   ["Switch: métodos para o caso de vários critérios" - _Referência do MDN para JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)