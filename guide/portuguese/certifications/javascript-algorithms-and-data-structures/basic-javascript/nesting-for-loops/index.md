---
title: Nesting For Loops
localeTitle: Aninhando For Loops
---
## Aninhando For Loops

**Lembre-se de usar Read-Search-Ask se você ficar preso. Tente parear programa: bustos _em_ silhueta: e escreva seu próprio código: lápis:**

: checkered\_flag: **Explicação do problema:**

Se você tiver um array multidimensional, você pode usar a mesma lógica do waypoint anterior para percorrer tanto o array quanto qualquer sub-array.

Aqui está um exemplo:
```
var arr = [ 
  [1,2], [3,4], [5,6] 
 ]; 
 for (var i=0; i < arr.length; i++) { 
  for (var j=0; j < arr[i].length; j++) { 
    console.log(arr[i][j]); 
  } 
 } 
```

Isto produz cada sub-elemento em `arr` um de cada vez. Note que para o laço interno, estamos verificando o comprimento de arr \[i\], já que arr \[i\] é ele próprio um array.

*   Modifique a função `multiplyAll` para que ela multiplique a variável do `product` por cada número nos sub-arrays de `arr` .
*   Certifique-se de que o segundo loop for está aninhado dentro do primeiro.

**Links Relevantes**

*   [Ninho Um Array Dentro De Outro Array](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array)
*   [Iterar Através De Uma Matriz Com Um For Loop](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)
*   [Acessando matrizes aninhadas](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays)

: speech\_balloon: Dica: 1

Certifique-se de verificar com `length` e não a matriz geral.

_tente resolver o problema agora_

: speech\_balloon: Dica 2

Use `i` `j` ao multiplicar o produto.

_tente resolver o problema agora_

: speech\_balloon: Dica 3

Lembre-se de usar `arr[i]` quando você multiplica as sub-matrizes pela variável do `product` .

_tente resolver o problema agora_

_Alerta de Spoiler!_ ![](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

: beginner: **Basic Code Solution:**
```
function multiplyAll(arr) { 
  var product = 1; 
  // Only change code below this line 
  for(var i=0; i < arr.length; i++){ 
    for (var j=0; j < arr[i].length; j++){ 
      product = product * arr[i][j]; 
    } 
  } 
  // Only change code above this line 
  return product; 
 } 
 
 // Modify values below to test your code 
 multiplyAll([[1,2],[3,4],[5,6,7]]); 
```

: rocket: **[Run Code](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops/)**

**Explicação do código:**

*   Verificamos o comprimento de `arr` no loop `i` e o comprimento `arr[i]` no loop `j` .
*   Nós multiplicamos a variável de `product` por si só porque é igual a 1 e depois multiplicamos pelos sub-arrays.
*   Os dois sub-arrays para multiplicar são `arr[i]` e `j` .

: clipboard: **NOTAS PARA CONTRIBUIÇÕES:**

*   : aviso: **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é semelhante, mas melhor, tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - Básica, Intermediária e Avançada. :semáforo:
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer conteúdo principal relevante. (: aviso: _**NÃO**_ remova nenhum nome de usuário existente)

Veja: point\_right: [Modelo de Solução de Desafio do Wiki](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.