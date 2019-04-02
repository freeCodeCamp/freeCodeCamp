---
title: Wherefore Art Thou
localeTitle: Portanto és
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Escreva um algoritmo que receberá uma `array` para o primeiro argumento e retornará uma `array` com todos os `object` s que correspondam a todas as propriedades e valores no segundo `Object` .

#### Links Relevantes

*   [For Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
*   [Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) [Object.keys ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você pode usar `for` loop ou o `Array.prototype.filter` método.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Tente usar o método `Object.prototype.hasOwnProperty` para saber se o nome da propriedade existe em um objeto (como sua própria propriedade).

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Verifique a equivalência de `Object` na `collection` com `Object` passado como segundo parâmetro para a função `whatIsInAName` .

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    for(var i = 0; i < srcKeys.length; i++) { 
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) { 
        return false; 
      } 
    } 
    return true; 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmh/0)

### Explicação do código:

*   Nós filtramos através do array usando `.filter()` .
*   Usando um `for loop` , percorremos cada item no objeto.
*   Usamos uma `if statement` para verificar se o objeto na coleção não tem a chave e o valor da propriedade não corresponde ao valor na origem.
*   Nós retornamos `false` se a `if statement` acima estiver correta. Caso contrário, retornamos `true` ;

#### Links Relevantes

*   For Loops
*   Array.prototype.filter ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  return collection.filter(function (obj) { 
    return srcKeys.every(function (key) { 
      return obj.hasOwnProperty(key) && obj[key] === source[key]; 
    }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmi/0)

### Explicação do código:

*   Nós filtramos a coleção usando `.filter()` .
*   Em seguida, retornamos um valor `Boolean` para o método `.filter()` .
*   Finalmente, reduzimos para o valor `Boolean` a ser retornado para o método `.every()` .

#### Links Relevantes

*   Array.prototype.filter ()
*   Array.prototype.every ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    return srcKeys 
      .map(function(key) { 
        return obj.hasOwnProperty(key) && obj[key] === source[key]; 
      }) 
      .reduce(function(a, b) { 
        return a && b; 
      }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLmj/0)

### Explicação do código:

*   Começamos filtrando a `collection` usando `Array.filter()` .
*   Em seguida, mapeamos todas as chaves e retornamos valores booleanos com base nas condições de verificação: a chave e seu valor correspondente devem existir dentro do objeto que estamos filtrando.
*   Em seguida, reduzimos os valores booleanos mapeados para um único Booleano que indica se todas as srcKeys passam as condições marcadas acima.
*   Este Booleano único será usado para filtrar a coleção.

#### Links Relevantes

*   Array.prototype.filter ()
*   Array.prototype.reduce ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.