---
title: Title Case a Sentence
localeTitle: Title Case a Sentence
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Temos que devolver uma frase com o título do caso. Isso significa que a primeira letra estará sempre em maiúscula e o restante em minúsculas.

#### Links Relevantes

*   [Objeto String Global](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [Protótipo de Cadeia JS ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [Protótipo de seqüência JS ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [Substituição de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

*   Você deve começar dividindo a string em uma matriz de palavras.
*   Divida a frase.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

*   Você deve tornar a palavra minúscula antes de fazer a primeira letra maiúscula.
*   Use o método replace em cada palavra para capitalizar a primeira letra de cada palavra.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

*   Você precisará criar uma nova string com partes da anterior e, no final, mesclar tudo em uma única string novamente.
*   No método replace, dê o primeiro argumento como a posição da primeira letra usando charAt. Para o segundo argumento, escreva uma função para retornar a letra maiúscula como substituta.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
String.prototype.replaceAt = function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); 
 }; 
 
 function titleCase(str) { 
    var newTitle = str.split(' '); 
    var updatedTitle = []; 
    for (var st in newTitle) { 
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase()); 
    } 
    return updatedTitle.join(' '); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/8)

### Explicação do código:

Estamos modificando a função `replaceAt` usando o protótipo para facilitar o uso do programa.

Divida a string por espaços em branco e crie uma variável para rastrear o título atualizado. Em seguida, usamos um loop para transformar o primeiro caractere da palavra em maiúsculas e o restante em minúsculas. criando uma string concatenada composta de toda a palavra em minúsculas com o primeiro caractere substituído por maiúsculas.

#### Links Relevantes

*   [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [Divisão de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)
*   [Junção de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function titleCase(str) { 
  var convertToArray = str.toLowerCase().split(" "); 
  var result = convertToArray.map(function(val){ 
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase()); 
  }); 
  return result.join(" "); 
 } 
 
 titleCase("I'm a little tea pot"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/9)

### Explicação do código:

Estamos fazendo a string inteira em minúscula e depois convertendo-a em array. Então estamos usando a função map para substituir o caractere minúsculo por maiúsculo. Finalmente, estamos retornando a string usando o método `join` .

#### Links Relevantes

*   [Mapa de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function titleCase(str) { 
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase()); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/14)

### Explicação do código:

A solução funciona primeiro diminuindo todos os caracteres da string e, em seguida, apenas o primeiro caractere de cada palavra.

*   Minúscula a cadeia inteira usando `str.toLowerCase()` .
    
*   Substitua o primeiro caractere de cada palavra para maiúscula usando `.replace` .
    
*   Procure por caractere no início de cada palavra, ou seja, corresponde a qualquer caractere após um `space` ou corresponde ao primeiro caractere de toda a cadeia, usando o seguinte padrão.
    
*   Explicação de Regex:
    
*   Encontre todos os caracteres que não são espaços em branco `(\S` )
    
*   No começo da string `(^)`
    
*   Ou depois de qualquer caractere de espaço em branco `(\s)`
    
    *   O modificador `g` procura outro padrão de palavras em toda a cadeia e as substitui.
        
    *   Esta solução funciona com símbolos nacionais e letras acentuadas, conforme ilustrado pelos seguintes exemplos  
        `international characters:` 'бабушка курит трубку' // -> 'Бабушка Курит Трубку'  
        `accented characters:` 'località àtilacol' // -> 'Località Àtilacol'
        

#### Links Relevantes

*   [Recursos JS Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.