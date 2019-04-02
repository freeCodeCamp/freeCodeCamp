---
title: Convert HTML Entities
localeTitle: Converter entidades HTML
---
![Entidades HTML e '<> "](//discourse-user-assets.s3.amazonaws.com/original/2X/f/fc44d1dfbd3910e574cdedb0f05162f65b4cb7c4.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

*   Você tem que criar um programa que irá converter entidades HTML de string para suas entidades HTML correspondentes. Há apenas alguns, então você pode usar métodos diferentes.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

*   Você pode usar Expressões regulares, mas não o fiz neste caso.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

*   Você se beneficiará de um gráfico com todas as entidades html para saber quais são as certas para colocar.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

*   Você deve separar a string e trabalhar com cada caractere para converter os caracteres corretos e depois juntar tudo de volta.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function convertHTML(str) { 
      // Split by character to avoid problems. 
 
      var temp = str.split(''); 
 
      // Since we are only checking for a few HTML elements I used a switch 
 
      for (var i = 0; i < temp.length; i++) { 
        switch (temp[i]) { 
          case '<': 
            temp[i] = '&lt;'; 
            break; 
          case '&': 
            temp[i] = '&amp;'; 
            break; 
          case '>': 
            temp[i] = '&gt;'; 
            break; 
          case '"': 
            temp[i] = '&quot;'; 
            break; 
          case "'": 
            temp[i] = "&apos;"; 
            break; 
        } 
      } 
 
      temp = temp.join(''); 
      return temp; 
    } 
 
    //test here 
    convertHTML("Dolce & Gabbana"); 
```

### Explicação do código:

Explique a solução aqui e adicione links relevantes

#### Links Relevantes

*   [str.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.join ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [mudar a indicação](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnP/0)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function convertHTML(str) { 
 //Chaining of replace method with different arguments 
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;"); 
 return str; 
 } 
 
 // test here 
 convertHTML("Dolce & Gabbana"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnQ/0)

### Explicação do código:

Explique a solução aqui e adicione links relevantes

#### Links Relevantes

*   [str.replace ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [Expressões regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:

```javascript
    function convertHTML(str) { 
      // Use Object Lookup to declare as many HTML entities as needed. 
      const htmlEntities={ 
        '&':'&amp;', 
        '<':'&lt;', 
        '>':'&gt;', 
        '"':'&quot;', 
        '\'':"&apos;" 
      }; 
      //Use map function to return a filtered str with all entities changed automatically. 
      return str.split('').map(entity => htmlEntities[entity] || entity).join(''); 
    } 
 
    // test here 
    convertHTML("Dolce & Gabbana"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnR/0)

### Explicação do código:

*   Crie um objeto para usar a funcionalidade de pesquisa para encontrar facilmente os caracteres.
*   Divida a string original por caracteres e use o mapa para verificar a entidade html alterada ou use a mesma. Alternativamente, você pode usar o `str.replace(/&|<|>|"|'/gi` .
*   A função a é adicionada, que é o que retorna a entidade convertida ou a original, se não houver conversão. Se você for a rota regex, terá que retornar os hits correspondentes. `return html[entity];`
*   Por fim, juntamos todos os personagens novamente.

**Note** que se você foi a rota regex, então você não precisa se juntar a nada, apenas certifique-se de retornar toda a operação ou salvá-lo em uma variável e depois devolvê-lo.

#### Links Relevantes

*   [str.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [arr.join ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.