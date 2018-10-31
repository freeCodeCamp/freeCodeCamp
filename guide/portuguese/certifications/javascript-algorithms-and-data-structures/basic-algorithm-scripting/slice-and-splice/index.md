---
title: Slice and Splice
localeTitle: Fatia e Splice
---
## Fatia e Splice

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Precisamos copiar cada elemento da primeira matriz para a segunda matriz, começando no índice n. Também precisamos garantir que as matrizes originais não sejam transformadas. Ou seja, não podemos fazer alterações nos arrays originais.

#### Links Relevantes

*   [str.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
*   [str.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Crie uma cópia da segunda matriz dentro da função. Isso garantirá que o array original não seja alterado. Isso pode ser feito usando a operação de fatia no segundo array e atribuí-lo a uma variável.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Faça um loop em todos os itens da primeira matriz. Para cada item na primeira matriz, junte-o na matriz copiada no índice fornecido como argumento.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Incremente o índice depois de executar a emenda.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function frankenSplice(arr1, arr2, n) { 
  // It's alive. It's alive! 
  let localArray = arr2.slice(); 
  for (let i = 0; i < arr1.length; i++) { 
    localArray.splice(n, 0, arr1[i]); 
    n++; 
  } 
  return localArray; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU)

### Explicação do código:

*   Nosso objetivo é pegar todos os elementos de `arr1` e inseri-los em `arr2` começando com a posição de índice `n` . Ao mesmo tempo, devemos assegurar que nem `arr` ou `arr2` foram transformados.
    
*   Usando a função `slice()` , podemos criar uma réplica exata de `arr2` e atribuir o resultado da operação a uma variável, `localArray` .
    
*   Agora que temos uma matriz que podemos sofrer mutação, podemos percorrer todos os itens da primeira matriz. Para cada item na primeira matriz, podemos usar a função `splice()` para inserir o item no índice `n` de `localArray` .
    
*   Nós incrementamos o índice `n` por um. Isso garantirá que todos os itens da `arr1` sejam inseridos no `localArray` na posição correta do índice.
    
*   Finalmente, retornamos o `localArray` e terminamos a função.
    

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.