---
title: Profile Lookup
localeTitle: Pesquisa de perfil
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Temos uma variedade de objetos representando pessoas diferentes em nossas listas de contatos.

Uma função `lookUpProfile()` que usa **firstName** e uma propriedade ( **prop** ) como argumentos foi pré-escrita para você.

A função deve verificar se **firstName** é **firstName** de um contato real e a propriedade dada **(PROP)** é uma propriedade desse contato.

Se ambos forem verdadeiros, retorne o _valor_ dessa propriedade.

Se **firstName** não corresponder a nenhum contato, retorne `No such contact` .

Se **prop** não corresponder a nenhuma propriedade válida, não retorne `No such property` .

*   Altere o código abaixo `// Only change code below this line` e até `// Only change code above this line` .
*   Verifique se você está editando o interior da função `lookUpProfile()` .
    *   Esta função inclui dois parâmetros, **firstName** e **prop** .
*   A função deve procurar na lista de **contatos** o parâmetro **firstName** fornecido.
    *   Se houver uma correspondência encontrada, a função deve procurar o parâmetro **prop** dado.
    *   Se o **firstName** e o **prop** associado forem encontrados, você deve retornar o valor do **prop** .
    *   Se **firstName** for encontrado e nenhum **prop** associado for encontrado, você deverá retornar `No such property` .
*   Se **firstName** não for encontrado em qualquer lugar, você deve retornar `No such contact` .

#### Links Relevantes

*   [Desafio: Acessando Propriedades de Objetos com Notação de Bracket](http://www.freecodecamp.com/challenges/accessing-objects-properties-with-bracket-notation)
*   [Desafio: Iterar com JavaScript para loops](http://www.freecodecamp.com/challenges/iterate-with-javascript-for-loops)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Use um loop `for` para percorrer a lista de **contatos** .

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Use uma instrução `if` aninhada para primeiro verificar se o **firstName** corresponde e, em seguida, verifica `if` o **prop** corresponde.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Deixe o seu `return "No such contact"` fora do loop `for` como um final pega-tudo.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
for (var x = 0; x < contacts.length; x++){ 
    if (contacts[x].firstName === name) { 
        if (contacts[x].hasOwnProperty(prop)) { 
            return contacts[x][prop]; 
        } else { 
            return "No such property"; 
        } 
    } 
 } 
 return "No such contact"; 
```

### Explicação do código:

*   O loop `for` é executado, iniciando no primeiro objeto na lista de **contatos** .
*   Se o parâmetro **firstName** passado para a função corresponder ao valor da chave `"firstName"` no primeiro objeto, a instrução `if` transmitida.
*   Em seguida, usamos o método `.hasOwnProperty()` (verifica se há uma determinada propriedade e retorna um booleano) com **prop** como argumento. Se for verdade, o valor de **prop** é retornado.
    *   Se a segunda instrução `if` falhar, `No such property` será retornada.
*   Se a primeira instrução `if` falhar, o loop `for` continuará no próximo objeto da lista de **contatos** .
*   Se o parâmetro **firstName** não corresponder ao objeto de **contatos** final, o loop `for` encerrado e `No such contact` será retornado.

**Exemplo de Execução**

*   `lookUpProfile("Akira","likes");` corre.
*   `"Akira"` é correspondido à chave `"firstName"` no primeiro objeto, portanto, a instrução `if` retorna true.
*   `"likes"` é encontrado dentro do primeiro objeto, então o segundo `if` retorna true.
*   O valor de `"likes"` é retornado - `"Pizza", "Coding", "Brownie Points"` .

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") **`Wiki Challenge Solution Template`** para referência.