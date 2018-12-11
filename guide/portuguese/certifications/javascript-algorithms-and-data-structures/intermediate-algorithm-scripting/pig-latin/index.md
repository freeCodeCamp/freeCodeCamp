---
title: Pig Latin
localeTitle: Porco Latino
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Você precisa criar um programa que irá traduzir do inglês para o Pig Latin. Pig Latin pega a primeira consoante (ou consoante cluster) de uma palavra inglesa, move-a para o final da palavra e sufixa um "ay". Se uma palavra começa com uma vogal, você apenas adiciona "caminho" ao final. Pode não ser óbvio, mas você precisa remover todas as consoantes até a primeira vogal, caso a palavra não comece com uma vogal.

#### Links Relevantes

*   [Porco Latino](http://en.wikipedia.org/wiki/Pig_Latin)
*   [Correspondência de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você provavelmente desejará usar expressões regulares. Isso permitirá que você converta as palavras facilmente.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Se o primeiro caractere é uma vogal, então pegue a palavra inteira e adicione 'way' no final. Caso contrário, vem a parte complicada, pegue a (s) consoante (s) antes da primeira vogal e mova-a para o final e adicione 'ay'. Isso pode ser confuso, mas não é apenas a primeira consoante, mas todas antes da primeira vogal.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Você precisará usar tudo o que sabe sobre a manipulação de strings para obter a última parte correta. No entanto, isso pode ser feito apenas com `substr` .

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function translatePigLatin(str) { 
  // Create variables to be used 
  var pigLatin = ''; 
  var regex = /[aeiou]/gi; 
 
  // Check if the first character is a vowel 
  if (str[0].match(regex)) { 
    pigLatin = str + 'way'; 
 
  } else if(str.match(regex) === null) { 
    // Check if the string contains only consonants 
    pigLatin = str + 'ay'; 
  } else { 
 
    // Find how many consonants before the first vowel. 
    var vowelIndice = str.indexOf(str.match(regex)[0]); 
 
    // Take the string from the first vowel to the last char 
    // then add the consonants that were previously omitted and add the ending. 
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay'; 
  } 
 
  return pigLatin; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmt/0)

### Explicação do código:

*   Faça uma corda vazia para segurar sua palavra latina.
*   Atribua sua expressão regular apropriada a uma variável.
*   Se o primeiro caractere for uma vogal, apenas adicione o **caminho** ao final da string e retorne-o.
*   Se o primeiro caractere não for uma vogal:
    *   Encontre o número de consoantes antes da primeira vogal com a ajuda de `indexOf()` , `match()` e regex.
    *   Comece a corda Latin do porco com primeira vogal até o fim.
    *   Adicione letras antes da primeira vogal ao final da string.
    *   `substr()` é usado para manipulação de string aqui.
    *   Adicione **ai** ao final da string e retorne-a.

#### Links Relevantes

*   Recursos JS Regex
*   [Índice de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function translatePigLatin(str) { 
  function check(obj) { 
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj; 
  } 
 
  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay'); 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmw/0)

### Explicação do código:

*   Esta é uma abordagem declarativa e recursiva para este problema.
*   `check()` é uma função que verifica se a primeira letra da string está na matriz de vogais, `['a','i','u','e','o']` .
*   No caso de consoantes, `check()` chama-se nos próximos caracteres até encontrar a primeira vogal.
*   Ele retornará o índice de tudo o que encontrar para ser a última consoante inicial, isto é, a de Schmidtsville seria 3.
*   Em seguida, as cartas, até que o índice são removidos a partir da cadeia e concatenado com qualquer um que mesmo pedaço de corda removido ou **w** em conformidade, e, em seguida, **ay** independentemente.

#### Links Relevantes

*   [Caráter Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [Concat de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-concat/15935)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function translatePigLatin(str) { 
    var strArr = []; 
    var tmpChar; 
 
    // check if the char is consonant using RegEx 
    function isConsonant(char) { 
        return !/[aeiou]/.test(char); 
    } 
 
    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array 
    if (!isConsonant(str.charAt(0))) 
        return str + "way"; 
    else 
        strArr = str.split(""); 
 
    // push all consonats to the end of the array 
    while (isConsonant(strArr[0])) { 
        tmpChar = strArr.shift(); 
        strArr.push(tmpChar); 
    } 
 // convert array to string and concatenate "ay" at the end 
 return strArr.join("")+"ay"; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmv/0)

### Explicação do código:

*   `isConsonant()` é usado para verificar se um caractere é uma consoante.
*   Se o primeiro caractere for vogal, adicione o **caminho** ao final da string e retorne-o.
*   Se o primeiro caractere não for uma vogal:
    *   Dividir string em array usando `split()` .
    *   Empurre todas as consoantes para o final do array com ajuda de `shift()` e `push()` .
    *   Converta array para string usando `join()` e adicione **ay** ao final da string. Devolver.

#### Links Relevantes

*   [Divisão de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Mudança de Protótipo de Matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [Push de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Junção de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

### ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 ":troféu:") Créditos:

Se achou útil esta página, pode agradecer aos colaboradores copiando e colando a seguinte linha no chat principal:

**`Thanks @Rafase282 @sabahang @aganita @Hallaathrad for your help with Algorithm: Pig Latin`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.