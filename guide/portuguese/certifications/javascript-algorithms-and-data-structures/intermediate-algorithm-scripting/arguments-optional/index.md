---
title: Arguments Optional
localeTitle: Argumentos Opcional
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Pode ser bastante complicado entender o que precisa ser feito. Há sempre muitas maneiras de fazer algo ao codificar, mas independentemente do algoritmo usado, temos que criar um programa que faça o seguinte:

*   Tem que adicionar dois números passados ​​como parâmetros e retornar a soma.
*   Tem que verificar se algum dos números são números reais, caso contrário retorne **indefinido** e pare o programa ali mesmo.
*   Tem que verificar se tem um ou dois argumentos passados. Mais são ignorados.
*   Se ele tem apenas um argumento, ele deve retornar uma função que usa esse número e espera outro, para então incluí-lo.

### Links Relevantes

*   [Matrizes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
*   [tipo de](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [objeto de argumentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Toda vez que você lida com um argumento, você tem que verificar se é um número ou não. Para isso, uma função que lida com essa tarefa salvará seu código repetido.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Ao trabalhar no caso que precisa retornar a função, é aconselhável verificar se o primeiro e único argumento é um número novamente e basear o código nele.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

No caso em que apenas um argumento foi passado, não se preocupe sobre como solicitar entrada para o segundo, apenas faça a definição da função corretamente e as coisas vão funcionar da maneira que deveriam.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function addTogether() { 
      // Function to check if a number is actually a number 
      // and return undefined otherwise. 
      var checkNum = function(num) { 
        if (typeof num !== 'number') { 
          return undefined; 
        } else 
          return num; 
      }; 
 
      // Check if we have two parameters, check if they are numbers 
      // handle the case where one is not 
      // returns the addition. 
      if (arguments.length > 1) { 
        var a = checkNum(arguments[0]); 
        var b = checkNum(arguments[1]); 
        if (a === undefined || b === undefined) { 
          return undefined; 
        } else { 
          return a + b; 
        } 
      } else { 
        // If only one parameter was found, returns a new function that expects two 
        // Store first argument before entering the new function scope 
        var c = arguments[0]; 
 
        // Check the number again, must be outside the function to about returning an object 
        // instead of undefined. 
        if (checkNum(c)) { 
          // Return function that expect a second argument. 
          return function(arg2) { 
            // Check for non-numbers 
            if (c === undefined || checkNum(arg2) === undefined) { 
              return undefined; 
            } else { 
              // if numbers then add them. 
              return c + arg2; 
            } 
          }; 
        } 
      } 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnz/0)

### Explicação do código:

*   Primeiro, crio uma função com o único propósito de verificar se um número é realmente um número e retorna indefinido, se não for. Ele usa **typeof** para verificar.
*   Verifique se temos dois parâmetros. Em caso positivo, verifique se eles são números ou não, usando a função **checkNum** que criei.
*   Se eles não estiverem **indefinidos** , adicione-os e retorne a adição. Se algum deles estiver indefinido, retorne indefinido.
*   No caso de termos apenas um argumento, retornamos uma nova função que espera dois parâmetros. Para isso, armazenamos o primeiro argumento antes de entrar em um novo escopo para evitar que nossos argumentos sejam sobrescritos.
*   Ainda dentro da grande outra coisa, precisamos verificar o argumento que salvamos, se for um número, então retornamos a função esperando um segundo argumento.
*   Agora dentro da função que estamos retornando, nós temos que checar os não números novamente como no começo usando **checkNum** se undefined então retornamos, caso contrário os números os adicionam e retornam a adição.

#### Links Relevantes

*   [tipo de](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [objeto de argumentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

```javascript
    function addTogether() { 
      var args = new Array(arguments.length); 
      //Storing the arguments in an array 
      for(var i = 0; i < args.length; ++i) { 
          args[i] = arguments[i]; 
        } 
     //Check for the arguments length 
     if(args.length == 2){ 
        //If there are two arguments,check for the type of both arguments 
        //Use typeof to check the type of the argument(both should be numbers) 
        if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){ 
          return undefined; 
          } 
        return args[0]+args[1]; 
       } 
     //When only one argument is provided 
     if(args.length == 1){ 
         a= args[0]; 
         //Check the  argument using typeof 
        if(typeof a!=='number'){ 
            return undefined; 
          } 
        else{ 
           //Making use of closures 
           return function(b){ 
           //Checking the second argument 
             if(typeof b !=='number'){ 
               return undefined; 
               } 
             else 
               return a+b; 
              }; 
          } 
        } 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLoA/0)

### Explicação do código:

*   Primeiro armazene os argumentos em uma matriz, criando uma matriz usando o método construtor.
*   Adiciona cada argumento ao novo array.
*   Em seguida, verifique o comprimento do novo array, pois precisamos saber se temos o suficiente ou não.
*   Verifique o tipo dos argumentos usando `typeof` , pois ambos devem ser números.
*   Retorna indefinido se algum deles não é um número, ou retorna a soma deles se forem.
*   Se houvesse apenas um argumento, ainda verificamos o tipo depois de armazená-lo em uma nova variável e retornando uma nova função ou indefinida.

#### Links Relevantes

*   [tipo de](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [objeto de argumentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:

```javascript
    //jshint esversion: 6 
    function addTogether() { 
      var args = Array.from(arguments); 
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ? 
          args.reduce((acc, n) => acc += n, 0): 
          (n) => typeof n === "number" ? 
            n + args[0]: 
            undefined; 
    } 
 
    // test here 
    addTogether(2,3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLoB/0)

### Explicação do código:

*   Primeiro eu percorrer os argumentos e verificar argumentos que não são um número e retornar indefinido
*   Se não for eu, então, verifique se o comprimento dos argumentos está acima de 1, se é somar os argumentos usando Array.prototype.reduce
*   Retornar uma função que verifica se o argumento passado é um número e soma, se não retornar indefinido

#### Links Relevantes

*   [Array.prototype.reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Array.prototype.some](http://forum.freecodecamp.com/t/javascript-array-prototype-some/14304)
*   [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

> **NOTA:** Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** à página wiki. (Por favor, não remova quaisquer nomes de usuário existentes.)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.