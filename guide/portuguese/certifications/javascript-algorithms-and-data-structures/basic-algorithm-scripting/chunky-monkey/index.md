---
title: Chunky Monkey
localeTitle: Macaco Robusto
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/aadd6bead83ab7d79a795c326f005a89e6ad81f5.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Nosso objetivo para este Algoritmo é dividir o `arr` (primeiro argumento) em partes menores de matrizes com o tamanho fornecido pelo `size` (segundo argumento). Existem 4 verificações verdes (objetivos) que nosso código precisa passar para concluir este Algoritmo:

1.  `(['a', 'b', 'c', 'd'], 2)` espera-se que seja `[['a', 'b'], ['c', 'd']]`
2.  `([0, 1, 2, 3, 4, 5], 3)` deverá ser `[[0, 1, 2], [3, 4, 5]]`
3.  `([0, 1, 2, 3, 4, 5], 2)` espera-se que seja `[[0, 1], [2, 3], [4, 5]]`
4.  `([0, 1, 2, 3, 4, 5], 4)` deverá ser `[[0, 1, 2, 3], [4, 5]]`

#### Links Relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Os links acima sugerem o uso de `Array.push()` , então vamos começar primeiro criando um novo array para armazenar os arrays menores que logo teremos assim:

```javascript
    var newArray = []; 
```

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Em seguida, vamos precisar de um `for loop` para percorrer `arr` .

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Finalmente, precisamos de um método para fazer a divisão real e podemos usar `Array.slice()` para fazer isso. A chave para este Algoritmo é entender como um `for loop` , `size` , `Array.slice()` e `Array.push()` trabalham juntos.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function chunkArrayInGroups(arr, size) { 
 
      var temp = []; 
      var result = []; 
 
      for (var a = 0; a < arr.length; a++) { 
        if (a % size !== size - 1) 
          temp.push(arr[a]); 
        else { 
          temp.push(arr[a]); 
          result.push(temp); 
          temp = []; 
        } 
      } 
 
      if (temp.length !== 0) 
        result.push(temp); 
      return result; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/24)

### Explicação do código:

*   Em primeiro lugar, criamos dois arrays vazios chamados `temp` e `result` , que eventualmente retornaremos.
*   Nosso **loop for** loops até que `a` seja igual ou maior que o comprimento do array em nosso teste.
*   Dentro do nosso loop, pressionamos `temp` usando `temp.push(arr[a]);` se o restante de `a / size` não for igual a `size - 1` .
*   Caso contrário, passamos para `temp` , pressionamos `temp` para a variável de `result` e redefinimos `temp` para um array vazio.
*   Em seguida, se `temp` não for um array vazio, nós o empurraremos para o `result` .
*   Finalmente, retornamos o valor do `result` .

#### Links Relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

```javascript
    function chunkArrayInGroups(arr, size) { 
      // Break it up. 
      var arr2 = []; 
      for (var i = 0; i < arr.length; i+=size) { 
        arr2.push(arr.slice(i , i+size)); 
      } 
      return arr2; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/Cj9x/3)

### Explicação do código:

*   Primeiro, criamos um array vazio `arr2` onde armazenaremos nossos 'pedaços'.
*   O loop for inicia em zero, incrementa por `size` cada vez no loop e pára quando atinge `arr.length` .
*   Observe que esse loop for não passa por `arr` . Em vez disso, estamos usando o loop para gerar números que podemos usar como índices para dividir a matriz nos locais corretos.
*   Dentro do nosso loop, criamos cada `arr.slice(i, i+size)` usando `arr.slice(i, i+size)` e adicionamos esse valor a `arr2` com `arr2.push()` .
*   Finalmente, retornamos o valor de `arr2` .

#### Links Relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:

```javascript
    function chunkArrayInGroups(arr, size) { 
      // Break it up. 
      var newArr = []; 
      var i = 0; 
 
      while (i < arr.length) { 
        newArr.push(arr.slice(i, i+size)); 
        i += size; 
      } 
      return newArr; 
    } 
    chunkArrayInGroups(["a", "b", "c", "d"], 2); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/26)

### Explicação do código:

*   Em primeiro lugar, criamos duas variáveis. `newArr` é um array vazio ao qual iremos empurrar. Nós também temos a variável `i` definida como zero, para uso em nosso loop while.
    
*   Nosso laço while faz um loop até que `i` seja igual ou maior que o comprimento do array em nosso teste.
    
*   Dentro do nosso laço, que empurra para a `newArr` matriz usando `arr.slice(i, i+size)` . Pela primeira vez loops, será algo parecido com:
    
    newArr.push (arr.slice (1, 1 + 2))
    
*   Depois de empurrarmos para `newArr` , adicionamos a variável de `size` em `i` .
    
*   Finalmente, retornamos o valor de `newArr` .
    

#### Links Relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [While Loops](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código 2:

```javascript
    function chunkArrayInGroups(arr, size) { 
      var newArr = []; 
      while (arr.length) { 
        newArr.push(arr.splice(0,size)); 
      } 
      return newArr; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/579)

### Explicação do código:

*   Em primeiro lugar, criamos uma variável. `newArr` é um array vazio ao qual iremos empurrar.
*   Nosso laço `while` loop até que o comprimento do array em nosso teste não seja 0.
*   Dentro do nosso laço, que empurra para a `newArr` matriz usando `arr.splice(0, size)` .
*   Para cada iteração de `while` loop, ele suprime `size` número de elementos da frente de `arr` e empurrá-los como uma matriz para `newArr` .
*   Finalmente, retornamos o valor de `newArr` .

#### Links Relevantes

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
*   [While Loops](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código 3:

```javascript
    function chunkArrayInGroups(arr, size) { 
      if (arr.length <= size){ 
        return [arr]; 
      } 
      else { 
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size)); 
      } 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/579)

### Explicação do código:

*   Matriz menor que o tamanho é retornada aninhada.
*   Para qualquer array maior que o tamanho, ele é dividido em dois. O primeiro segmento é aninhado e concatenado com o segundo segundo segmento, que faz uma chamada recursiva.

#### Links Relevantes

*   [Recursão](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)
*   [Array.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.