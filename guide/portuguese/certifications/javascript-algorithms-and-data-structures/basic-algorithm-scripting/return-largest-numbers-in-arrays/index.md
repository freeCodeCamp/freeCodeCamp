---
title: Return Largest Numbers in Arrays
localeTitle: Retornar os maiores números em matrizes
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Você obterá uma matriz que contém sub-matrizes de números e precisará retornar uma matriz com o maior número de cada uma das sub-matrizes.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você precisará acompanhar o array com a resposta e o maior número de cada sub-array.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Você pode trabalhar com matrizes multidimensionais por `Array[Index][SubIndex]`

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Preste muita atenção ao tempo de armazenamento de variáveis ​​ao trabalhar com loops

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Soluções à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

**(Abordagem processual)**
```
function largestOfFour(arr) { 
  var results = []; 
  for (var n = 0; n < arr.length; n++) { 
    var largestNumber = arr[n][0]; 
    for (var sb = 1; sb < arr[n].length; sb++) { 
      if (arr[n][sb] > largestNumber) { 
        largestNumber = arr[n][sb]; 
      } 
    } 
 
    results[n] = largestNumber; 
  } 
 
  return results; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/734)

### Explicação do código:

*   Crie uma variável para armazenar os _resultados_ como uma matriz.
*   Crie um loop externo para percorrer a matriz externa.
*   Crie uma segunda variável para conter o maior número e inicialize-o com o primeiro número. Isso deve estar fora de um loop interno, para que não seja reatribuído até encontrarmos um número maior.
*   Crie o loop interno para trabalhar com os sub-arrays.
*   Verifique se o elemento da sub-matriz é maior que o maior número armazenado atualmente. Em caso afirmativo, atualize o número na variável.
*   Após o loop interno, salve o maior número na posição correspondente dentro da matriz de `results` .
*   E finalmente retorne a matriz.

#### Links Relevantes

*   [Para loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

**(Abordagem declarativa)**
```
function largestOfFour(arr) { 
  return arr.map(function(group){ 
    return group.reduce(function(prev, current) { 
      return (current > prev) ? current : prev; 
    }); 
  }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/733)

### Explicação do código:

*   `Array.prototype.map()` todos os itens dentro da matriz principal para uma nova matriz usando `Array.prototype.map()` e retornamos essa matriz como o resultado final
*   dentro de cada matriz interna, reduzimos seu conteúdo a um único valor usando `Array.prototype.reduce()`
*   a função de retorno de chamada passada para o método reduce obtém o valor anterior e o valor atual e compara os dois valores
*   se o valor atual for maior que o valor anterior, nós o definimos como o novo valor anterior para comparação com o próximo item dentro da matriz ou o retorna para o retorno de chamada do método de mapa se for o último item

#### Links Relevantes

*   [Array.prototype.map ()](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [Array.prototype.reduce ()](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Operadores Ternários](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:

**(Abordagem declarativa)**
```
function largestOfFour(arr) { 
  return arr.map(Function.apply.bind(Math.max, null)); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/17)

### Explicação do código:

TL; DR: Nós construímos uma função de retorno de chamada especial (usando o `Function.bind` método), que funciona como `Math.max` mas também tem `Function.prototype.apply` capacidade de tomar matrizes como seus argumentos ![:smiley:](https://forum.freecodecamp.com/images/emoji/emoji_one/smiley.png?v=3 ":risonho:")

*   Começamos mapeando os elementos dentro da matriz principal. Significado cada um dos arrays internos.
*   Agora, a necessidade de uma função de retorno de chamada para encontrar o máximo de cada matriz interna fornecida pelo mapa.

Então, queremos criar uma função que faça o trabalho de `Math.max` e aceite a entrada como uma matriz (que por padrão não é por padrão).

Em outras palavras, seria muito legal e simples se isso funcionasse por si só:

`Math.max([9, 43, 20, 6]); // Resulting in 43`

Infelizmente, isso não acontece.

*   Para fazer o trabalho de aceitar argumentos na forma de uma matriz, existe esse método `Function.prototype.apply` , mas complica um pouco as coisas _invocando_ a função de _contexto_ .

ie `Math.max.apply(null, [9, 43, 20, 6]);` invocaria algo como um método `Max.max` . O que estamos procurando… quase.

Aqui estamos passando `null` como o _contexto_ do método `Function.prototype.apply` como `Math.max` não precisa de nenhum contexto.

*   Como o `arr.map` espera uma função de retorno de chamada, não apenas uma expressão, criamos uma função a partir da expressão anterior usando o método `Function.bind` .
    
*   Como `Function.prototype.apply` é um _método_ estático do mesmo _objeto_ `Function` , podemos chamar `Function.prototype.bind` em `Function.prototype.apply` ou seja, `Function.prototype.apply.bind` .
    
*   Agora passamos o _contexto_ para a chamada `Function.prototype.apply.bind` (nesse caso, queremos `Math.max` para que possamos obter sua funcionalidade).
    
*   Como o método incorporado `Function.prototype.apply` também exigirá um contexto como primeiro argumento, precisamos passar a ele um _contexto_ falso.
    
    *   Assim, passamos `null` como o segundo parâmetro para `Function.prototype.apply.bind` que fornece um _contexto_ para o método `Math.max` .
        
    *   Como o `Math.max` é independente de qualquer _contexto_ , ele ignora o _contexto_ falso dado pela chamada do método `Function.prototype.apply` .
        
    *   Assim, nosso `Function.prototype.apply.bind(Math.max, null)` faz uma nova função aceitando os valores de `arr.map` , isto é, os arrays internos.
        

#### Links Relevantes

*   [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
*   [Function.prototype.apply no DevDocs](http://devdocs.io/#q=js+Function+apply)
*   [Function.bind no DevDocs](http://devdocs.io/#q=js+Function+bind)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.