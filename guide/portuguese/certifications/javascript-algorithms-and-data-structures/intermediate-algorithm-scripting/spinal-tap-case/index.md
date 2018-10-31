---
title: Spinal Tap Case
localeTitle: Estojo Spinal Tap
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Converta a string dada em uma sentença minúscula com palavras unidas por traços.

#### Links Relevantes

*   [Objeto global de string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   Recursos JS Regex
*   [Substituição de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [Protótipo de Cadeia JS ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Crie uma expressão regular para todos os espaços em branco e sublinhados.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Você também terá que fazer tudo em minúsculas.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

A parte complicada é fazer com que a parte da expressão regular funcione, depois de fazer isso, basta transformar a caixa alta em minúscula e substituir espaços com sublinhados usando `replace()` .

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function spinalCase(str) { 
  // Create a variable for the white space and underscores. 
  var regex = /\s+|_+/g; 
 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
 
  // Replace space and underscore with - 
  return str.replace(regex, '-').toLowerCase(); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnS/0)

### Explicação do código:

*   **regex** contém a expressão regular `/\s+|_+/g` , que selecionará todos os espaços em branco e sublinhados.
*   O primeiro `replace()` coloca um espaço antes de qualquer caractere maiúsculo encontrado na string **str, de** modo que os espaços possam ser substituídos por traços posteriores.
*   Ao retornar a string, outro `replace()` substitui espaços e sublinhados por traços usando **regex** .

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function spinalCase(str) { 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
  // Split on whitespace and underscores and join with dash 
  return str.toLowerCase().split(/(?:_| )+/) .join('-'); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnT/0)

### Explicação do código:

*   Semelhante à primeira solução, o primeiro `replace()` coloca um espaço antes de qualquer caractere maiúsculo encontrado na string **str, de** modo que os espaços possam ser substituídos por traços posteriores.
*   Em vez de usar `replace()` aqui para substituir espaços em branco e sublinhados por traços, a string é `split()` na expressão regular `/(?:_| )+/` E `join()` -ed on `-` .

#### Links Relevantes

*   [Divisão de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Junção de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function spinalCase(str) { 
  // "It's such a fine line between stupid, and clever." 
  // --David St. Hubbins 
 
  return str.split(/\s|_|(?=[AZ])/).join('-').toLowerCase() 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/EUZV)

### Explicação do código:

*   Divida a string em uma das seguintes condições ( _convertida em uma matriz_ )
    *   um caractere de espaço em branco \[ `\s` \] é encontrado
    *   caractere de sublinhado \[ `_` \] é encontrado
    *   ou é seguido por uma letra maiúscula \[ `(?=[AZ])` \]
*   Junte-se à matriz usando um hífen ( `-` )
*   Minúscula toda a string resultante

#### Links Relevantes

*   [String # split](http://devdocs.io/javascript/global_objects/string/split)
*   [RegExp](http://devdocs.io/javascript/global_objects/regexp)
*   [Arringe # join](http://devdocs.io/javascript/global_objects/array/join)
*   [Cadeia # toLowerCase](http://devdocs.io/javascript/global_objects/string/tolowercase)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.