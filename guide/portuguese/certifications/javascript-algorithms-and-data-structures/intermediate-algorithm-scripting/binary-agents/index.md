---
title: Binary Agents
localeTitle: Agentes Binários
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

## Explicação do Problema:

Este problema é muito direto, você receberá uma string que representará uma sentença no código binário, e você precisará traduzir isso em palavras. Não há maneira direta de fazer isso, então você terá que traduzir duas vezes.

### Links Relevantes

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você deve primeiro converter de **binário** para **decimal** antes de traduzir esses valores em caracteres.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

As coisas são mais fáceis quando se concentra em partes menores, divida a entrada para se concentrar em uma letra no momento.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Certifique-se de que, cada vez que transcodificar um caractere de binário para decimal, você redefina qualquer variável usada para controlar os caracteres. Também não se esqueça de transformar tudo de volta em uma string.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function binaryAgent(str) { 
      biString = str.split(' '); 
      uniString = []; 
 
    /*using the radix (or base) parameter in parseInt, we can convert the binary 
      number to a decimal number while simultaneously converting to a char*/ 
 
      for(i=0;i < biString.length;i++){ 
        uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
      } 
 
      // we then simply join the string 
      return uniString.join(''); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnm/0)

# Explicação do código:

*   Separe a string em uma matriz de strings separadas por espaço em branco.
*   Crie algumas variáveis ​​que serão necessárias ao longo do caminho, os nomes são auto-explicativos para a maior parte.
*   Iterar através de cada seqüência binária no novo array.
*   Converta em decimal usando parseInt ( _binário_ , 2) (com o segundo parâmetro informamos em que base nossos números estão atualmente)
*   No final, retornamos a mensagem convertida.

## Links Relevantes

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [parseInt](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

```javascript
    function binaryAgent(str) { 
      // Separate the binary code by space. 
      str = str.split(' '); 
      var power; 
      var decValue = 0; 
      var sentence = ''; 
 
      // Check each binary number from the array. 
      for (var s = 0; s < str.length; s++) { 
        // Check each bit from binary number 
        for (var t = 0; t < str[s].length; t++) { 
          // This only takes into consideration the active ones. 
          if (str[s][t] == 1) { 
            // This is quivalent to 2 ** position 
            power = Math.pow(2, +str[s].length - t - 1); 
            decValue += power; 
 
            // Record the decimal value by adding the number to the previous one. 
          } 
        } 
 
        // After the binary number is converted to decimal, convert it to string and store 
        sentence += (String.fromCharCode(decValue)); 
 
        // Reset decimal value for next binary number. 
        decValue = 0; 
      } 
 
      return sentence; 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLno/0)

# Explicação do código

*   Para cada uma dessas cadeias binárias, verifique as que estão e ignore os zeros.
*   Para aqueles que são um ou ativos, então convertê-los em decimal, isso leva em conta a posição e a potência correta para a qual ele precisa ser elevado.
*   Armazene a energia na variável de **energia** , adicionando-a a qualquer variável anterior na variável **decValue** . Essa variável adicionará e adicionará os poderes dos ativos até o final do loop e retornará o número decimal.
*   Converta o decimal final fora do loop interno e, em seguida, converta-o em ASCII e salve-o em **sentença** junto com qualquer outra sequência de texto já convertida e armazenada.
*   Redefina a variável **decValor** para evitar decimais incorretos antes de continuar para o loop externo.

## Links Relevantes

*   [Math.pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   String.length
*   [Título do link 3](http://example.com)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:

```javascript
    function binaryAgent(str) { 
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); })); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnp/0)

# Explicação do código

*   Primeiro usamos o `split()` para poder trabalhar em cada caractere como um elemento Array
*   Em seguida, use `map()` para processar cada elemento de binário para decimal usando `pareseInt()`
*   Por último, podemos usar `String.fromCharCode()` para converter cada número ASCII no caractere correspondente
*   No entanto `fromCharCode()` espera uma série de números em vez de uma matriz! Podemos usar o ES6 Spread Operator para passar uma matriz de números como números individuais. Veja aqui para mais informações; [Operador de spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Links Relevantes

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.