---
title: Sum All Primes
localeTitle: Soma todos os horários
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

A explicação para esse problema é muito simples. Você irá gerar uma lista de números primos até o número que você recebe como parâmetro. Então você precisa adicioná-los e retornar esse valor. A parte complicada está em gerar a lista de números primos. Eu sugiro que você encontre um código ou um bom algoritmo matemático que você possa transformar em código.

#### Links Relevantes

*   [Números primos](https://en.wikipedia.org/wiki/Prime_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Gere uma lista de todos os números até e incluindo o que você obteve como parâmetro. Isso será necessário para determinar quais números são primos ou não.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Verifique este [link](https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100) se você preferir encontrar uma solução para encontrar primos, ou tente aprender e implementar sua própria [Criva de Eratóstenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Este problema é difícil se você tiver que criar seu próprio código para checar primos, então não se sinta mal se você tiver que usar o código de alguém para esse bit. De qualquer maneira, é mais provável que você esteja usando array, portanto, depois de gerar uma matriz de primos, basta adicioná-los e retornar o número obtido.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function sumPrimes(num) { 
  var res = 0; 
 
  // Function to get the primes up to max in an array 
  function getPrimes(max) { 
    var sieve = []; 
    var i; 
    var j; 
    var primes = []; 
    for (i = 2; i <= max; ++i) { 
      if (!sieve[i]) { 
        // i has not been marked -- it is prime 
        primes.push(i); 
        for (j = i << 1; j <= max; j += i) { 
          sieve[j] = true; 
        } 
      } 
    } 
 
    return primes; 
  } 
 
  // Add the primes 
  var primes = getPrimes(num); 
  for (var p = 0; p < primes.length; p++) { 
    res += primes[p]; 
  } 
 
  return res; 
 } 
 
 // test here 
 sumPrimes(10); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnZ/0)

### Explicação do código:

*   Crie uma função que gere os números de 1 a **num** e verifique se eles são primos ao longo do caminho.
*   Declare as variáveis ​​que serão necessárias.
*   Comece com 2, se ele não tiver sido marcado e adicionado à matriz de peneira, ele é um primo e o adicionamos ao array principal.
*   Adicione os outros ao array de peneiras.
*   Devolve os primos
*   Faça um loop pela matriz retornada e adicione todos os elementos para retornar o valor final.

#### Links Relevantes

*   [JS For Loops Explained](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function sumPrimes(num) { 
  // function to check if the number presented is prime 
  function isPrime(number){ 
      for (i = 2; i <= number; i++){ 
          if(number % i === 0 && number!= i){ 
          // return true if it is divisible by any number that is not itself. 
             return false; 
          } 
       } 
       // if it passes the for loops conditions it is a prime 
      return true; 
  } 
  // 1 is not a prime, so return nothing, also stops the recursive calls. 
  if (num === 1){ 
    return 0; 
  } 
  // Check if your number is not prime 
  if(isPrime(num) === false){ 
  // for non primes check the next number down from your maximum number, do not add anything to your answer 
    return sumPrimes(num - 1); 
  } 
 
  // Check if your number is prime 
  if(isPrime(num) === true){ 
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function. 
    return num + sumPrimes(num - 1); 
  } 
 } 
 // test here 
 sumPrimes(10); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLn0/0)

### Explicação do código:

*   A função `isPrime` verifica se um determinado número é primo ou não.
*   Se `num` for 1, retorne 0, já que 1 não é um número primo.
*   Se **num** não for primo, verifique o próximo número abaixo do número máximo.
*   Se **num** for primo, adicione-o ao próximo número na sequência através da recursão à função `sumPrimes` .

#### Links Relevantes

*   [Funções - Recursão](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function sumPrimes(num) { 
  // step 1 
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2 
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1; 
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false; 
        m--; 
    } 
      return true; 
  }); 
  // step 3 
  return onlyPrimes.reduce((a,b) => a+b); 
 } 
 // test here 
 sumPrimes(977); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/DoOo/3)

### Explicação do código:

*   **Etapa 1:** use `Array.from()` para gerar uma sequência de números até e incluindo `num` . Combine com `.slice()` para cortar primeiro dois índices `[0, 1]` pois todos os números primos devem ser maiores que 1.
*   **Passo 2:** Filtre todos os números de `arr` que não são primos, submetendo cada elemento ao _"trial division test",_ que _"consiste em dividir n por cada inteiro m que é maior que 1 e menor ou igual à raiz quadrada de n "_ . Este teste retorna `false` se qualquer número menor que o elemento sendo operado em (m) não produz nenhum resto quando o elemento (n) é dividido por ele. Veja o link abaixo para saber mais sobre isso.
*   **Passo 3:** Retorna a soma de todos os elementos restantes de arr usando `.reduce()` .

### Links Relevantes

*   [Teste de divisão experimental](https://en.wikipedia.org/wiki/Prime_number#Trial_division)
*   [Array.from ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Examples)
*   [Array.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.