---
title: Steamroller
localeTitle: Rolo compressor
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Esse problema parece simples, mas você precisa certificar-se de achatar qualquer array, independentemente do nível, que é o que adiciona um pouco de dificuldade ao problema.

#### Links Relevantes

*   [Array.isArray ()](http://forum.freecodecamp.com/t/javascript-array-isarray/14284)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você precisa verificar se um elemento é uma matriz ou não.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Se você está lidando com uma matriz, então você precisa achatá-lo, obtendo o valor dentro da matriz. Isto significa que se você tem [\[4\]\] então ao invés de retornar \[4\] você precisa retornar 4. Se você pegar \[\[\[4\]\]\] então o mesmo, você quer o 4. Você pode acessá-lo com arr \[index1\] \[index2\] para ir um nível mais profundo.](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:")

> _tente resolver o problema agora_

## ! \[: speech\_balloon: Dica: 3

Você definitivamente precisará de recursão ou outra maneira de ir além de dois arrays de nível para tornar o código flexível e não codificado para as respostas necessárias. Diverta-se!

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function steamrollArray(arr) { 
  var flattenedArray = []; 
 
  // Create function that adds an element if it is not an array. 
  // If it is an array, then loops through it and uses recursion on that array. 
  var flatten = function(arg) { 
    if (!Array.isArray(arg)) { 
      flattenedArray.push(arg); 
    } else { 
      for (var a in arg) { 
        flatten(arg[a]); 
      } 
    } 
  }; 
 
  // Call the function for each element in the array 
  arr.forEach(flatten); 
  return flattenedArray; 
 } 
 
 // test here 
 steamrollArray([1, [2], [3, [[4]]]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnh/0)

### Explicação do código:

*   Crie uma nova variável para manter matrizes achatadas.
*   Crie uma função que adicione elementos não-array à nova variável e, para aqueles que são array, faça um loop através deles para obter o elemento.
*   Ele faz isso usando recursão, se o elemento é uma matriz, em seguida, chame a função novamente com uma camada de matriz mais profunda para verificar se é uma matriz ou não. se não for, pressione esse elemento não-matriz para a variável que é retornada. Caso contrário, continue indo mais fundo.
*   Invoque a função, a primeira vez que você sempre passará uma matriz para que ela sempre caia na ramificação isArray
*   Devolva o array achatado.

#### Links Relevantes

*   [Array.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Array.forEach ()](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function steamrollArray(arr) { 
  let flat = [].concat(...arr); 
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat; 
 } 
 
 flattenArray([1, [2], [3, [[4]]]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLni/0)

### Explicação do código:

*   Use o operador spread para concatenar cada elemento do `arr` com um array vazio
*   Use o método `Array.some()` para descobrir se o novo array contém um array ainda
*   Em caso afirmativo, use recursion call `steamrollArray` novamente, passando o novo array para repetir o processo nos arrays que foram profundamente aninhados
*   Se isso não ocorrer, retorne a matriz nivelada

#### Links Relevantes

*   [Array.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
*   [Array.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [Operador de spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [Operador Ternário ( `condition ? a : b` )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function steamrollArray(arr) { 
  return arr.toString() 
    .replace(',,', ',')       // "1,2,,3" => "1,2,3" 
    .split(',')               // ['1','2','3'] 
    .map(function(v) { 
      if (v == '[object Object]') { // bring back empty objects 
        return {}; 
      } else if (isNaN(v)) {        // if not a number (string) 
        return v; 
      } else { 
        return parseInt(v);         // if a number in a string, convert it 
      } 
    }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CpDy/4)

### Explicação do código:

*   Primeiro, transformamos a matriz em uma string, que nos dará uma string de números separada por uma vírgula, dupla vírgula se houvesse uma matriz vazia e um texto de objeto literal, se houvesse um objeto, que poderíamos corrigi-lo posteriormente em nossa declaração if .
*   Substituímos a vírgula dupla por uma e dividimos de volta em uma matriz.
*   mapear através da matriz e fixar valores de objeto e converter números de string em números regulares.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.