---
title: Roman Numeral Converter
localeTitle: Conversor Numeral Romano
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Você criará um programa que converte um número inteiro em um numeral romano.

#### Links Relevantes

*   [Números romanos](http://www.mathsisfun.com/roman-numerals.html)
*   [Array.splice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-splice/14307)
*   [Array.indexOf ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
*   [Array.join ()](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Criar dois arrays, um com os numerais romanos e outro com o equivalente decimal para os novos formulários será muito útil.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Se você adicionar os números às matrizes antes da introdução da nova letra, como os valores de 4, 9 e 40, economizará muito código.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Você não pode ter mais de três numerais romanos consecutivos juntos.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
var convertToRoman = function(num) { 
 
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]; 
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]; 
 
  var romanized = ''; 
 
  for (var index = 0; index < decimalValue.length; index++) { 
    while (decimalValue[index] <= num) { 
      romanized += romanNumeral[index]; 
      num -= decimalValue[index]; 
    } 
  } 
 
  return romanized; 
 } 
 
 // test here 
 convertToRoman(36); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmf/0)

### Explicação do código:

*   Começamos criando dois arrays com conversão padrão com índices correspondentes. Estes são chamados `decimalValue` e `romanNumeral` . Também criamos uma variável de string vazia, `romanized` , que abrigará o número romano final.
*   Usando um loop for, percorremos os índices da matriz `decimalValue` . Continuamos a fazer um loop até que o valor no `index` atual se encaixe em `num` .
*   Em seguida, adicionamos o numeral romano e diminuímos `num` pelo equivalente decimal.
*   Finalmente, retornamos o valor de `romanized` .

#### Links Relevantes

*   [For Loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   While Loops

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function convertToRoman(num) { 
 var romans = ["I", "V", "X", "L", "C", "D", "M"], 
     ints = [], 
     romanNumber = [], 
     numeral = ""; 
  while (num) { 
    ints.push(num % 10); 
    num = Math.floor(num/10); 
  } 
  for (i=0; i<ints.length; i++){ 
      units(ints[i]); 
  } 
  function units(){ 
    numeral = romans[i*2]; 
    switch(ints[i]) { 
      case 1: 
        romanNumber.push(numeral); 
        break; 
      case 2: 
        romanNumber.push(numeral.concat(numeral)); 
        break; 
      case 3: 
        romanNumber.push(numeral.concat(numeral).concat(numeral)); 
        break; 
      case 4: 
        romanNumber.push(numeral.concat(romans[(i*2)+1])); 
        break; 
      case 5: 
        romanNumber.push(romans[(i*2)+1]); 
        break; 
      case 6: 
        romanNumber.push(romans[(i*2)+1].concat(numeral)); 
        break; 
      case 7: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral)); 
        break; 
      case 8: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral)); 
        break; 
      case 9: 
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2])); 
      } 
    } 
  return romanNumber.reverse().join("").toString(); 
 } 
 
 // test here 
 convertToRoman(97); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/C1YV)

### Explicação do código:

*   Crie uma matriz de numerais `romans` ( `romans` ).
*   Use um loop for para criar uma matriz dos dígitos ( `ints` ) no número.
*   Faça o loop através da matriz de dígitos (base 10) e, ao fazer isso, aumente o índice numeral romano (base 5) por 2 ( `numeral = romans[i*2]` ).
*   Dentro do loop, use Switch Case para empurrar os numerais romanos apropriados (para trás) para aquele array.
*   Inverta o array de números romanos e transforme-o em uma string.

#### Links Relevantes

*   [For Loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   While Loops
*   [Matemática](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function convertToRoman(num) { 
  var romans = 
  // 10^i 10^i*5 
    ["I", "V"], // 10^0 
    ["X", "L"], // 10^1 
    ["C", "D"], // 10^2 
    ["M"]       // 10^3 
  ], 
      digits = num.toString() 
        .split('') 
        .reverse() 
        .map(function(item, index) { 
          return parseInt(item); 
        }), 
      numeral = ""; 
 
  // Loop through each digit, starting with the ones place 
  for (var i=0; i<digits.length; i++) { 
    // Make a Roman numeral that ignores 5-multiples and shortening rules 
    numeral = romans[i][0].repeat(digits[i]) + numeral; 
    // Check for a Roman numeral 5-multiple version 
    if (romans[i][1]) { 
      numeral = numeral 
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral 
        .replace(romans[i][0].repeat(5), romans[i][1]) 
        // Shorten occurrences of 9 * 10^i 
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0]) 
        // Shorten occurrences of 4 * 10^i 
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]); 
    } 
  } 
 
  return numeral; 
 } 
 
 // test here 
 convertToRoman(36); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/C1YV)

### Explicação do código:

*   Use uma matriz ( `romans` ) para criar uma matriz contendo o numeral romano para uma determinada potência de 10 e, se disponível, o numeral romano para essa potência de 10 vezes 5.
*   Converta o número de entrada ( `num` ) em uma matriz invertida de dígitos ( `digits` ) para que possamos percorrer esses dígitos começando com a posição e subindo.
*   Faça um loop em cada dígito, começando com o local, e crie uma cadeia numeral romana adicionando cada numeral romano de maior potência ao início da cadeia `numeral` um número de vezes igual a um `digit` . Esta string inicial ignora os numerais romanos que são uma potência de 10 vezes 5 e também ignora as regras de encurtamento.
*   Se a potência relevante de 10 tiver um algarismo romano 5 múltiplo, em `numeral` , substitua as ocorrências de 5 em linha pelo número romano múltiplo relevante 5 (ou seja, V, L ou D) e encurte as ocorrências de 9 \* 10 ^ i (por exemplo, VIIII a VIX) e 4 \* 10 ^ i (por exemplo, XXXX a XL). Ordem é importante aqui!
*   Finalmente, retorne `numeral` .

#### Links Relevantes

*   [For Loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [.Dividido()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [.marcha ré()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
*   [.mapa()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [.para sequenciar()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
*   [parseInt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
*   [.substituir()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [.repetir()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.