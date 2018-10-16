---
title: Word Blanks
localeTitle: Blanks da palavra
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Agora usaremos nosso conhecimento de strings para criar um jogo de palavras estilo **Mad Libs** que estamos chamando de "Word Blanks". Você criará uma frase "Preencha os espaços em branco" (opcionalmente engraçada).

Você precisará usar operadores de string para construir uma nova string, **resultado** , usando as variáveis ​​fornecidas: **myNoun** , **myAdjective** , **myVerb** e **myAdverb** .

Você também precisará usar strings adicionais, que não serão alteradas e devem estar entre todas as palavras fornecidas. A saída deve ser uma frase completa.

Nós fornecemos uma estrutura para testar seus resultados com palavras diferentes. Os testes executarão sua função com várias entradas diferentes para garantir que todas as palavras fornecidas apareçam na saída, bem como suas cadeias extras.

*   Altere o código abaixo `//Your Code here` e até `//Change this line` .
*   Tome nota que você está editando o interior da função `wordBlanks()` .
*   Você terá basicamente criado uma frase com as variáveis ​​de string fornecidas.

#### Links Relevantes

*   [Bibliotecas desorganizadas](https://en.wikipedia.org/wiki/Mad_Libs)
*   [Desafio: Construindo Strings com Variáveis](http://www.freecodecamp.com/challenges/constructing-strings-with-variables)
*   [Desafio: Concatenando Strings com o Operador Plus](http://www.freecodecamp.com/challenges/concatenating-strings-with-plus-operator)
*   [Desafio: Concatenando Strings com o Operador Plus Equals](http://www.freecodecamp.com/challenges/concatenating-strings-with-the-plus-equals-operator)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

`+` pode ser usado para _concatenar_ strings.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Assim como você pode encadear cadeias de caracteres concatenando, você pode atribuí-las a uma variável existente em vez de uma nova.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

`+=` permitirá que você use uma variável existente, um tipo de string neste caso. Lembre-se de adicionar suas próprias **letras não** entre cada variável.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) { 
    var result = ""; 
    // Your code below this line 
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+"."; 
 
    // Your code above this line 
  return result; 
 } 
 
 // Change the words here to test your function 
 wordBlanks("dog", "big", "ran", "quickly"); 
```

**Exemplo de Execução**

*   Teste `wordBlanks("dog", "big", "ran", "quickly");` corre.
*   O **resultado da** variável é declarado com uma string vazia `""` .
*   **O resultado** será alterado com uma nova string composta pelas strings "dog", "big", "ran", " **quick** ", através das variáveis **myNoun** , **myAdjective** , **myVerb** , **myAdverb** respectivamente; a ordem é alterada e o espaço em branco adicionado.
*   **resultado** é retornado.

### Explicação do código:

*   Use o **resultado** para concatenar as variáveis ​​dadas.
*   Separe palavras com espaços em branco e palavras apropriadas para formar a frase completa.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.