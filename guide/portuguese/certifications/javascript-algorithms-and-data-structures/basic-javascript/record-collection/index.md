---
title: Record Collection
localeTitle: Colecção de registos
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Você recebe um objeto JSON representando (uma pequena parte de) sua coleção de registros. Cada álbum é identificado por um número de identificação exclusivo e possui várias propriedades. Nem todos os álbuns possuem informações completas.

Escreva uma função que tenha um **id** , uma propriedade ( **prop** ) e um **valor** .

Para o **ID** fornecido na **coleção** :

Se o **valor** não estiver em branco ( **valor! == ""** ), atualize ou defina o **valor** para o **prop** .

Se o **prop** é **"faixas"** e o **valor** não é em branco, verifique se o elemento especificado no array tem a propriedade "tracks". Se o elemento tiver a propriedade "tracks", insira o **valor** no final da matriz "tracks". Se o elemento não tiver a **propriedade** , crie o par de propriedade e valor.

Se o **valor** estiver em branco, exclua esse **prop** .

Sempre retorne o objeto de coleção inteiro.

*   Altere o código abaixo `// Only change code below this line` e `// Only change code below this line` `// Alter values below to test your code` .
*   Tome nota que você está editando o interior da função `updateRecords` .
*   Para o parâmetro **id** fornecido, que está associado ao objeto de **coleção** :
    *   Se o parâmetro **value** não for uma string vazia, atualize (ou configure) o parâmetro **value** para o parâmetro **prop** .
    *   Se o parâmetro **prop** for igual a `"tracks"` e o **valor** não for uma string vazia, pressione o **valor** para o final da matriz de **tracks** .
    *   Se o **valor** for uma string vazia, exclua essa **prop** do objeto.
*   Finalmente, retorne o objeto de **coleção** .

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Use uma instrução `else if` para verificar as etapas necessárias.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

A segunda etapa listada nas instruções deve ser a primeira na declaração `else if` .

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Para acessar o valor de uma chave neste objeto, você usará a `collection[id][prop]` .

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function updateRecords(id, prop, value) { 
  if (prop === "tracks" && value !== "") { 
   if(collection[id][prop]) { 
    collection[id][prop].push(value); 
   } 
   else { 
    collection[id][prop]=[value]; 
   } 
  } else if (value !== "") { 
    collection[id][prop] = value; 
  } else { 
    delete collection[id][prop]; 
  } 
 
  return collection; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/C2AZ/0)

### Explicação do código:

*   Primeiro, verifica se **prop** é igual a **tracks** E se o **valor** não é uma string em branco. Se ambos os testes forem aprovados, o **valor** será inserido na matriz de **faixas** .
*   Se essa primeira verificação não for aprovada, a próxima verificação será feita somente se o **valor** não for uma string em branco. Se esse teste for aprovado, uma nova chave ( **prop** ) e um valor ( **valor** ) serão adicionados ao objeto, ou uma chave existente será atualizada se o **prop** já existir.
*   Se ambas as verificações falharem (o **valor de** significado deve ser uma string vazia), a chave ( **prop** ) será removida do objeto.

**Exemplo de Execução**

*   `updateRecords(5439, "artist", "ABBA");` corre.
*   **prop** é igual a "artista", não "faixas", então a primeira parte da declaração `else if` falha.
*   **valor** não é uma string em branco, então a segunda parte da declaração if passa.
*   `artist: "ABBA"` é adicionado ao `id` `5439` .

### Recursos:

*   [Desafio do FCC: Acessando Propriedades de Objetos com Notação de Bracket](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation/)
*   [O desafio do fCC: adicionar novas propriedades a um objeto JavaScript](http://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object)
*   [O desafio do fCC: excluir propriedades de um objeto JavaScript](http://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object)
*   [O desafio do fCC: Acessando Objetos Aninhados](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects/)
*   ["Array.prototype.push ()" - _Referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   ["delete operator" - _Referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)