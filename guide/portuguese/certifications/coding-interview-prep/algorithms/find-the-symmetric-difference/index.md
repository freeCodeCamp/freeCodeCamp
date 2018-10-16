---
title: Find the Symmetric Difference
localeTitle: Encontre a diferença simétrica
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar [**`Read-Search-Ask`**](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/) se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

A diferença simétrica (comumente denotada por Δ) de dois conjuntos é o conjunto de elementos que estão em um dos dois conjuntos, mas não em ambos.

Por exemplo, `sym([1, 2, 3], [5, 2, 1, 4])` deve render `[3, 4, 5]` .

Seguindo a definição acima, a diferença simétrica de três conjuntos _A_ , _B_ e _C_ pode ser expressa como `(A &Delta; B) &Delta; C`

#### Links Relevantes

*   [Diferença simétrica - Wikipedia](https://en.wikipedia.org/wiki/Symmetric_difference)
*   [Diferença simétrica - YouTube](https://www.youtube.com/watch?v=PxffSUQRkG4)

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

 [## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

O objeto _arguments_ é um objeto do tipo _Array_ que herda apenas a propriedade `Array.length` . Por isso, considere convertê-lo em um _Array_ real.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Considere gravar uma função auxiliar que retorna a diferença simétrica de duas matrizes em cada chamada, em vez de tentar diferenciar todos os conjuntos simultaneamente.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Aplique a função auxiliar na matriz de argumentos criada, reduzindo seus elementos de forma pareada recursivamente para formar a saída esperada.

**Nota** No caso de _um número ímpar de conjuntos,_ a diferença simétrica incluirá elementos idênticos presentes em todos os conjuntos dados. Por exemplo;
```
A = {1, 2, 3} 
 B = {2, 3, 4} 
 C = {3, 4, 5} 
 
 (A &Intersection; B) &Intersection; C = {1, 4} &Intersection {3, 4, 5} 
 A &Intersection; B = {1, 3, 5} 
```

> _tente resolver o problema agora_

## Alerta de Spoiler!

![:warning:](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif ":Aviso:")

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function sym() { 
      var args = []; 
      for (var i = 0; i < arguments.length; i++) { 
        args.push(arguments[i]); 
      } 
 
      function symDiff(arrayOne, arrayTwo) { 
        var result = []; 
 
        arrayOne.forEach(function(item) { 
          if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        arrayTwo.forEach(function(item) { 
          if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        return result; 
      } 
 
      // Apply reduce method to args array, using the symDiff function 
      return args.reduce(symDiff); 
    } 

```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 

 [![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) [Executar código](https://repl.it/C4II/0)

### Explicação do código:

*   `push()` é usado para dividir o objeto _arguments_ em um array, _args_ .
*   A função `symDiff` encontra a diferença simétrica entre dois conjuntos. É usado como uma função de retorno de chamada para o método `reduce()` chamado _args_ .
*   `arrayOne.forEach()` envia os elementos para o _resultado_ que estão presentes apenas no _arrayOne_ , bem como não fazem parte do _resultado_ .
*   `arrayTwo.forEach()` empurra os elementos para o _resultado_ que estão presentes apenas no _arrayTwo_ , assim como não fazem parte do _resultado_ .
*   O _resultado_ , que é a diferença simétrica, é retornado. Esta solução funciona para qualquer número de conjuntos.

#### Links Relevantes

*   [JavaScript para](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for)
*   [JavaScript Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JavaScript Array.prototype.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [JavaScript Array.prototype.forEach ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
*   [JavaScript Array.prototype.indexOf ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

```javascript
    function sym() { 
 
      // Convert the argument object into a proper array 
      var args = Array.prototype.slice.call(arguments); 
 
      // Return the symmetric difference of 2 arrays 
      var getDiff = function(arr1, arr2) { 
 
        // Returns items in arr1 that don't exist in arr2 
        function filterFunction(arr1, arr2) { 
          return arr1.filter(function(item) { 
            return arr2.indexOf(item) === -1; 
          }); 
        } 
 
        // Run filter function on each array against the other 
        return filterFunction(arr1, arr2) 
          .concat(filterFunction(arr2, arr1)); 
      }; 
 
      // Reduce all arguments getting the difference of them 
      var summary = args.reduce(getDiff, []); 
 
      // Run filter function to get the unique values 
      var unique = summary.filter(function(elem, index, self) { 
        return index === self.indexOf(elem); 
        }); 
      return unique; 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLoc/0)

### Explicação do código:

*   O método `slice()` é usado para dividir o objeto _arguments_ em um array, _args_ .
*   A função `getDiff` encontra a diferença simétrica entre dois conjuntos, _arr1_ e _arr2_ . É usado como uma função de retorno de chamada para o método `reduce()` chamado _args_ .
*   O primeiro `filterFunction()` retorna elementos em _arr1_ que não existem em _arr2_ .
*   O próximo `filterFunction()` é executado em cada array contra o outro para verificar o inverso da primeira verificação de exclusividade e concatená-lo.
*   _O resumo_ consiste nos argumentos reduzidos.
*   `filter()` é usado no _resumo_ para manter apenas os valores _exclusivos_ e _exclusivo_ é retornado.

#### Links Relevantes

*   [JavaScript Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [JavaScript Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [JavaScript Array.prototype.concat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:

```javascript
    function sym() { 
      let argv = Array.from(arguments).reduce(diffArray); 
      return argv.filter((element, index, array) => index === array.indexOf(element));//remove duplicates 
    } 
 
    function diffArray(arr1, arr2) { 
      return arr1 
        .filter(element => !arr2.includes(element)) 
        .concat(arr2.filter(element => !arr1.includes(element))); 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/@ashenm/Symmetric-Difference)

### Explicação do código:

*   A função principal _sym ()_ cria um array a partir de _argumentos_ e reduz seus elementos utilizando a função auxiliar _diffArray ()_ para um único array.
    
*   A função _diffArray ()_ retorna a diferença simétrica de dois arrays escolhendo elementos únicos em arrays parametrizados; _arr1_ e _arr2_ .
    

#### Links Relevantes

*   [JavaScript Array.from ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
*   [JavaScript Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.