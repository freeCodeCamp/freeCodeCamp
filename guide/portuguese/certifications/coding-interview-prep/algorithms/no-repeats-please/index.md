---
title: No Repeats Please
localeTitle: Não repete por favor
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Essa tarefa exige que retornemos o número total de permutações da string fornecida que não tem letras consecutivas repetidas. Deve ser assumido que todos os caracteres na string fornecida são únicos. Por exemplo, `aab` deve retornar 2 porque tem 6 permutações totais ( `aab` , `aab` , `aba` , `aba` , `baa` , `baa` ), mas apenas 2 delas ( `aba` e `aba` ) não têm a mesma letra (neste caso `a` ) recorrente.

Para conseguir isso, vamos ter que olhar para cada possível permutação de uma string. Existem várias maneiras de fazer isso. Uma questão de entrevista comum é a construção de uma função que coleta todas as permutações de uma string. Existem vários tutoriais disponíveis na internet sobre como fazer isso.

#### Métodos Potenciais Utilizados Como Solução

##### Método Recursivo

Essa tarefa pode ser assustadora mesmo depois de assistir a um tutorial. Para escrever uma solução recursiva, você desejará enviar a cada novo uso da função três entradas:

1.  Uma nova string (ou matriz de caracteres) que está sendo construída.
2.  Uma posição na sua nova string que será preenchida em seguida.
3.  Uma ideia de quais caracteres (mais especificamente posições) da string original ainda não foram usados.

O pseudo código será parecido com isto:
```
var str = ???; 
 permAlone(current position in original string, characters used already in original string, created string) { 
  if (current string is finished) { 
    print current string; 
  } else { 
    for (var i = 0; i < str.length; i++) { 
      if (str[i] has not been used) { 
        put str[i] into the current position of new string; 
        mark str[i] as used; 
        permAlone(current position in original string, characters used already in original string, created string); 
        remove str[i] as used because another branch in the tree for i + 1 will likely use it; 
      } 
    } 
  } 
 } 
 permAlone(0, nothing used yet, empty new string (or array the same size as str)); 
```

Outra maneira de pensar sobre esse problema é começar de um espaço vazio. Introduza a primeira letra do espaço. Este espaço irá agora conter a primeira sub-permutação. Aqui está um diagrama ilustrando a ideia:

![diagrama](//discourse-user-assets.s3.amazonaws.com/original/2X/6/69896bacc8bd3b2e347beb4b304a7f97caa6d9ab.png)

##### Método não recursivo
```
// An approach to introduce a new character to a permutation 
 var ch = '?'; 
 var source = ['?', '?', '?'];     // Current sub-permutation 
 var temp, dest = []; 
 
 for (var i = 0; i <= source.length; ++i) { 
  temp = source.slice(0);         // Copy the array 
  temp.splice(i, 0, ch);          // Insert the new character 
  dest.push(temp);                // Store the new sub-permutation 
 } 
```

Encontrar cada permutação poderia ser feito de forma não recursiva, incluindo o acima em uma função, tomando uma matriz de origem e retornando uma matriz de destino. Para cada letra da string de entrada, passe esse caractere, assim como a matriz retornada da chamada anterior da função.

Uma maneira de visualizar isso é considerando uma árvore que começa com o primeiro caractere da sua string:

![Árvore de permutação](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8187f2b06cdc02cf62286c18ce15bfcdc99bc68c.png)

#### Links Relevantes

*   [Permutações](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
*   [Algoritmo da pilha](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
*   Recursos JS Regex
*   [Objeto String JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

*   A maneira mais fácil é usar o algoritmo de Heap para obter recursivamente uma lista de todas as permutações.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

*   Depois de ter a lista, basta criar uma expressão regular para capturar os caracteres repetidos.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

*   Você desejará ter as permutações como uma matriz de strings associadas, em vez de caracteres separados.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function permAlone(str) { 
 
  // Create a regex to match repeated consecutive characters. 
  var regex = /(.)\1+/g; 
 
  // Split the string into an array of characters. 
  var arr = str.split(''); 
  var permutations = <a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>]; 
  var tmp; 
 
  // Return 0 if str contains same character. 
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0; 
 
  // Function to swap variables' content. 
  function swap(index1, index2) { 
    tmp = arr[index1]; 
    arr[index1] = arr[index2]; 
    arr[index2] = tmp; 
  } 
 
  // Generate arrays of permutations using the algorithm. 
  function generate(int) { 
    if (int === 1) { 
      // Make sure to join the characters as we create  the permutation arrays 
      permutations.push(arr.join('')); 
    } else { 
      for (var i = 0; i != int; ++i) { 
        generate(int - 1); 
        swap(int % 2 ? 0 : i, int - 1); 
      } 
    } 
  } 
 
  generate(arr.length); 
 
  // Filter the array of repeated permutations. 
  var filtered = permutations.filter(function(string) { 
    return !string.match(regex); 
  }); 
 
  // Return how many have no repetitions. 
  return filtered.length; 
 } 
 
 // Test here. 
 permAlone('aab'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLop/0)

### Explicação do código:

*   **regex** contém a expressão regular para coincidir com caracteres consecutivos repetidos.
*   A string **str** é dividida em uma matriz de caracteres, **arr** .
*   0 é retornado se **str** contiver os mesmos caracteres.
*   A função `swap()` é usada para trocar o conteúdo do conteúdo de duas variáveis.
*   O próximo bloco de código usa o algoritmo de Heap para gerar matrizes de permutações em **permutações** .
*   A variável **filtrada** filtra as **permutações** para incluir apenas permutações não repetidas.
*   `filtered.length` retorna o número total de permutações da string fornecida que não tem letras consecutivas repetidas.

#### Links Relevantes

*   [Divisão de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Correspondência de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [Push de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Junção de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)
*   [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [Filtro Protótipo JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.