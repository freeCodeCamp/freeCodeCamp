---
title: Search and Replace
localeTitle: Pesquisar e substituir
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Você criará um programa que aceita uma sentença, depois procurará uma palavra nela e a substituirá por uma nova, preservando as maiúsculas, se houver uma.

#### Links Relevantes

*   [Objeto global de string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [Substituição de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

*   Encontre o índice onde `before` está na string.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

*   Verifique o primeiro caso de letras.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

*   As strings são imutáveis, você precisará salvar as edições em outra variável, mesmo se precisar reutilizar a mesma para fazer com que pareça que as alterações foram feitas usando apenas essa variável.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function myReplace(str, before, after) { 
  // Find index where before is on string 
  var index = str.indexOf(before); 
  // Check to see if the first letter is uppercase or not 
  if (str[index] === str[index].toUpperCase()) { 
    // Change the after word to be capitalized before we use it. 
    after = after.charAt(0).toUpperCase() + after.slice(1); 
  } 
  // Now replace the original str with the edited one. 
  str = str.replace(before, after); 
 
  return str; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmo/0)

### Explicação do código:

*   Use `indexOf()` para encontrar o local de **antes** em string.
*   Se a primeira letra de **antes** for maiúscula, mude a primeira letra de **depois** para maiúscula.
*   Substitua **antes** na cadeia por **depois** .
*   Retorna a nova string.

#### Links Relevantes

*   [Índice de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [Protótipo de seqüência JS ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [Caráter Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [Fatia de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-slice/15943)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function myReplace(str, before, after) { 
 //Create a regular expression object 
  var re = new RegExp(before,"gi"); 
 //Check whether the first letter is uppercase or not 
  if(/[AZ]/.test(before[0])){ 
  //Change the word to be capitalized 
    after = after.charAt(0).toUpperCase()+after.slice(1); 
     } 
     //Replace the original word with new one 
  var  newStr =  str.replace(re,after); 
 
 return newStr; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmp/0)

### Explicação do código:

*   Nesta solução, a expressão regular `[AZ]` é usada para verificar se o caractere é maiúsculo.
*   Crie um novo objeto de expressão regular, **re** .
*   Se a primeira letra de **antes** for maiúscula, altere a primeira letra **depois** para maiúscula.
*   Substitua **antes** por **depois** na cadeia.
*   Retorna a nova string.

#### Links Relevantes

*   Recursos JS Regex

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function myReplace(str, before, after) { 
 
    // create a function that will change the casing of any number of letter in parameter "target" 
    // matching parameter "source" 
    function applyCasing(source, target) { 
        // split the source and target strings to array of letters 
        var targetArr = target.split(""); 
        var sourceArr = source.split(""); 
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array 
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){ 
            // find out the casing of every letter from sourceArr using regular expression 
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case 
            if (/[AZ]/.test(sourceArr[i])) { 
                targetArr[i] = targetArr[i].toUpperCase(); 
            } 
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case 
            else targetArr[i] = targetArr[i].toLowerCase(); 
        } 
        // join modified targetArr to string and return 
        return (targetArr.join("")); 
    } 
 
    // replace "before" with "after" with "before"-casing 
    return str.replace(before, applyCasing(before, after)); 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmq/0)

### Explicação do código:

*   Tanto o **antes** quanto o **depois** são passados ​​como argumentos para `applyCasing()` .
*   A função `applyCasing()` é usada para alterar o caso dos respectivos caracteres em **targetArr** , isto é, **depois** de acordo com os caracteres de **sourceArr** , ou seja, **antes** .
*   `replace()` é usado para substituir **antes** por **after** , cujo case é o mesmo de **antes** .

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Alternativa de Solução de Código Avançado:
```
// Add new method to the String object, not overriding it if one exists already 
 String.prototype.capitalize =  String.prototype.capitalize || 
    function() { 
        return this[0].toUpperCase() + this.slice(1); 
    }; 
 
 const Util = (function () { 
 // Create utility module to hold helper functions 
    function textCase(str, tCase) { 
        // Depending if the tCase argument is passed we either set the case of the 
        // given string or we get it. 
        // Those functions can be expanded for other text cases. 
 
        if(tCase) { 
            return setCase(str, tCase); 
        } else { 
            return getCase(str); 
        } 
 
        function setCase(str, tCase) { 
            switch(tCase) { 
                case "uppercase": return str.toUpperCase(); 
                case "lowercase": return str.toLowerCase(); 
                case "capitalized": return str.capitalize(); 
                default: return str; 
            } 
        } 
 
        function getCase(str) { 
            if (str === str.toUpperCase()) { return "uppercase"; } 
            if (str === str.toLowerCase()) { return "lowercase"; } 
            if (str === str.capitalize()) { return "capitalized"; } 
            return "normal"; 
        } 
    } 
 
    return { 
        textCase 
    }; 
 })(); 
 
 function myReplace(str, before, after) { 
    const { textCase } = Util; 
    const regex = new RegExp(before, 'gi'); 
    const replacingStr = textCase(after, textCase(before)); 
 
    return str.replace(regex, replacingStr); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/@kr3at0/SearchAndReplace)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Alternativa de Solução de Código Avançado 2:

```javascript
function myReplace(str, before, after) { 
  const myArr = str.split(' '); 
  const [wordToReplace] = myArr.filter(item => item === before); 
  return  wordToReplace[0].toUpperCase() !== wordToReplace[0] 
  ? myArr.map(item => item === before ? after : item).join(' ') 
  : myArr.map(item => item === before? after[0].toUpperCase() + after.slice(1) : item).join(' '); 
 } 
 
 // test: 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

#### Links Relevantes

*   [Divisão de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Math Min](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   String.length
*   [Protótipo de Cadeia JS ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [Junção de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.