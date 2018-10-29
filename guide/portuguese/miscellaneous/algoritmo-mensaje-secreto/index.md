---
title: Algoritmo Mensaje Secreto
localeTitle: Algoritmo de Mensagem Secreta
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

### Explicação:

Esse problema é muito simples, você irá obter uma string que representa uma frase em código binário, e você terá que traduzi-la em palavras. Não há nenhuma maneira direta de fazer isso, então você terá que traduzir duas vezes.

## Dica: 1

Primeiro você deve converter de **binário** para **decimal** e depois traduzi-lo em caracteres.

## Dica: 2

As coisas são mais fáceis se você se concentrar em pequenas partes, dividir a mensagem que você recebe e se concentrar em uma letra de cada vez.

## Dica: 3

Certifique-se de transcodificar um caractere binário para decimal para redefinir qualquer uma das variantes usadas para realizar a conversão. Além disso, não esqueça de colocar tudo de volta em uma única corrente.

## Alerta de spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução abaixo!**

## Solução de código:
```
function binaryAgent(str) { 
  biString = str.split(' '); 
  uniString = []; 
 
  // Utilizando el parámetro base en parseInt podemos convertir el número 
  // binario a número decimal mientras simultáneamente lo convertimos a carácter. 
 
  for(i=0;i < biString.length;i++){ 
    uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
  } 
  // Simplemente unimos la cadena. 
  return uniString.join(''); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "foguete:") [Na REPL!](https://repl.it/CLnm/0)

# Explicação do código:

*   Nós separamos a string em uma matriz de strings separadas por espaços em branco.
*   Criamos uma variável que será necessária ao longo do caminho, o nome é auto-explicativo.
*   Nós iteramos através da nova matriz binária.
*   Nós convertemos para decimal usando parseInt ( _binário_ , 2) (com o segundo parâmetro informamos em que base nossos números estão atualmente)
*   No final, retornamos nossa mensagem convertida.

## Segunda solução:
```
function binaryAgent(str) { 
  // Separamos el código binario por sus espacios. 
  str = str.split(' '); 
  var power; 
  var decValue = 0; 
  var sentence = ''; 
 
  // Comprobamos cada número binario de la matriz. 
  for (var s = 0; s < str.length; s++) { 
    // Comprobamos cada bit del número binario. 
    for (var t = 0; t < str[s].length; t++) { 
      // Esto solo toma en consideración los activos. 
      if (str[s][t] == 1) { 
        // Esto es equivalente a 2 ** posición. 
        power = Math.pow(2, +str[s].length - t - 1); 
        decValue += power; 
 
        // Guardamos el valor decimal sumándolo al anterior. 
      } 
    } 
 
    // Luego de que el número binario es convertido a decimal, lo convertimos en una cadena y lo guardamos. 
    sentence += (String.fromCharCode(decValue)); 
 
    // Reseteamos el valor decimal para el próximo número binario. 
    decValue = 0; 
  } 
 
  return sentence; 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "foguete:") [Na REPL!](https://repl.it/CLno/0)

# Explicação do código:

*   Para cada cadeia binária, verificamos os e ignoramos os zeros.
*   Para aqueles que são um ou ativo, nós os convertemos em decimal. Isso leva em consideração a posição e o poder apropriado ao qual ela deve ser elevada.
*   Nós manter o poder na **potência** variável adicionando -o aos anteriores na variável **decValue.** Essa variável continuará adicionando os poderes dos ativos ao final do loop e retornará um número decimal.
*   Nós convertemos o número decimal final em ASCII e o adicionamos à variável **frase** junto com qualquer outra string de texto já convertida e armazenada.
*   Nós redefinimos o valor da variável **decValue** para evitar decimais errados antes de continuar com o loop externo.

## Terceira solução:
```
function binaryAgent(str) { 
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); })); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "foguete:") [Na REPL!](https://repl.it/CLnp/0)

# Explicação do código:

*   Primeiro usamos o `split()` para poder trabalhar cada caractere como um elemento de matriz.
*   Então usamos `map()` para processar cada elemento binário para decimal usando `pareseInt()`
*   Finalmente, podemos usar `String.fromCharCode()` para converter cada número ASCII em seu caractere correspondente.
*   No entanto, `fromCharCode()` espera uma série de números em vez de uma matriz. Podemos usar o ES6 Spread Operator para passar uma matriz de números como números individuais. Mais informações: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread\_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Quarta solução:
```
function binaryAgent(str) { 
  var re = /(\d+)(\s?)/g; 
  function convertToChar(match,p1,p2){ 
    return String.fromCharCode(parseInt(p1, 2)); 
  } 
  return str.replace(re, convertToChar); 
 } 
 
 // realizamos el test 
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "foguete:") [Na REPL!](https://repl.it/CLnr/0)

# Explicação do código:

*   Nesta solução usamos `String.replace()` para encontrar todos os números binários e convertê-los em caracteres.
*   Primeiro, usamos uma expressão regular para encontrar todos os números binários e os espaços finais opcionais.
*   Em seguida, definimos uma função que converte cada primeira subcoincidência em um número com `parseInt()` e, em seguida, um caractere com `String.fromCharCode()` . Ao não usar a segunda subcoincidência, deixamos de lado todos os espaços que estão entre cada número binário.
*   Finalmente usamos nossa expressão regular e a função definida como um parâmetro de `String.replace()` .

> **NOTA:** Por favor, adicione seu nome de usuário somente se você adicionou **conteúdo relevante** ao artigo. (Por favor, não remova nenhum nome existente.)