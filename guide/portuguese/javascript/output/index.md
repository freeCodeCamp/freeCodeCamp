---
title: Output 
localeTitle: Saída
---
## Saída

Existem 4 maneiras mais comuns de enviar seus dados por meio do console. Estes serão utilizados a maior parte do seu processo de desenvolvimento.

#### `console.log`

É a maneira mais comum e usada de produzir os dados. É uma prática comum inserir alguns desses entre as instruções para entender como os dados estão fluindo e processados. Além disso, você pode usar `debugger` ou pontos de interrupção em devtools para fazer o mesmo sem poluir seu código.

```javascript
var numbers  = [ 1, 2, 3, 4, 5, 6, 7]; 
 numbers.forEach(function(number){ 
  console.log(number + ' is divisible by 2', number%2 == 0); 
 }); 
```

#### `console.warn`

Como você adivinhou pelo nome, isso é usado para mostrar avisos, e sua cor amarela típica o diferencia do erro red & `console.log` .

```javascript
function isAdult(age){ 
  if(Number(age) < 18){ 
    console.warn('You are not an adult'); 
    return false; 
   } 
   return true; 
 } 
```

#### `console.error`

Como você pode imaginar, isso é usado ao lançar uma exceção ou com erro no código. Dá-lhe a mensagem de erro vermelha para agarrar a atenção rapidamente.

#### `console.table`

Suponha que você tenha uma lista de itens ou filmes em um objeto json e queira verificar isso em formato de tabela, então `console.table` é sua melhor aposta. Ele detecta automaticamente os cabeçalhos de linhas e colunas dos dados.

_Tente executar o código abaixo no seu console_

```javascript
var data = { 
  "colors": [ 
    { 
      "color": "black", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,255,1], 
      "hex": "#000" 
    }, 
    { 
      "color": "white", 
      "category": "value", 
      "rgba": [0,0,0,1], 
      "hex": "#FFF" 
    }, 
    { 
      "color": "red", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,0,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "blue", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [0,0,255,1], 
      "hex": "#00F" 
    }, 
    { 
      "color": "yellow", 
      "category": "hue", 
      "type": "primary", 
      "rgba": [255,255,0,1], 
      "hex": "#FF0" 
    }, 
    { 
      "color": "green", 
      "category": "hue", 
      "type": "secondary", 
      "rgba": [0,255,0,1], 
      "hex": "#0F0" 
 
    }, 
  ] 
 } 
 
 console.table(data.colors); 
```

Além disso, você pode controlar e filtrar o tipo de saída que deseja ver no console.

1.  Todos
2.  Verboso
3.  Aviso
4.  Erros

#### Mais Informações:

*   [Referência completa do objeto console pelo Google](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)
*   [Console MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console)