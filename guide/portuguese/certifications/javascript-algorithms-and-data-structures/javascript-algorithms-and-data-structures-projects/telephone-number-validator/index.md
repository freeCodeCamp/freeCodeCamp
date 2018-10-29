---
title: Telephone Number Validator
localeTitle: Validador de números de telefone
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

A tarefa não é tão difícil de entender, implementá-la é a parte mais difícil. Você tem um para validar um número de telefone dos EUA. Isso significa que há uma certa quantidade de números necessária, enquanto você não precisa colocar o código do país, você ainda precisará do código de área e usar um dos poucos formatos permitidos.

#### Links Relevantes

*   [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
*   [regexpal.com](http://regexpal.com/)
*   [regex101.com/](https://regex101.com/#javascript)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Não há maneira de contornar isso, você precisará aperfeiçoar suas habilidades de expressões regulares.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Tente usar um site da lista anterior para testar o regex ao vivo enquanto você o cria.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Comece tentando obtê-lo para validar cada formato do exemplo, cada um deve ter uma nova linha, uma vez que você seleciona todos, então adicione exemplos que não devem ser selecionados e tenha certeza de que eles não estão selecionados.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function telephoneCheck(str) { 
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; 
   return regex.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLo9/0)

### Explicação do código:

*   `^` indica o começo da corda.
*   `(1\s?)?` permite "1" ou "1" se houver um.
*   `\d{n}` verifica exatamente o número n de dígitos, então `\d{3}` verifica três dígitos.
*   `x|y` verifica x ou y assim `(\(\d{3}\)|\d{3})` verifica se há três dígitos entre parênteses ou três dígitos sem parênteses.
*   `[\s\-]?` verifica espaços ou traços entre os grupos de dígitos.
*   `$` denota o final da string. Nesse caso, o início `^` e o final da string `$` são usados ​​na regex para evitar que ela corresponda a qualquer string mais longa que possa conter um número de telefone válido (por exemplo, "s 555 555 5555 3").
*   Por fim, usamos `regex.test(str)` para testar se a string adere à expressão regular, ela retorna `true` ou `false` .

#### Links Relevantes

*   [Regex.test ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
    
*   [Guia de Expressão Regular](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function telephoneCheck(str) { 
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/; 
  return re.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLoa/0)

### Explicação do código:

Este é um exemplo de uma solução muito abrangente e robusta para validar o lado cliente dos números de telefone dos EUA. Nesses casos, pode ser muito melhor e mais fácil implementar esse número de [libras da](https://github.com/googlei18n/libphonenumber) biblioteca.

#### Links Relevantes

*   [Regex.test ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
*   [libphonenumber](https://github.com/googlei18n/libphonenumber)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.