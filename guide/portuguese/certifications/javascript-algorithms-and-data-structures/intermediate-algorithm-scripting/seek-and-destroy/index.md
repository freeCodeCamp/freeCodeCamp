---
title: Seek and Destroy
localeTitle: Procurar e destruir
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Esse problema é um pouco complicado porque você tem que se familiarizar com Arguments, já que você terá que trabalhar com dois **ou mais,** mas no script você vê apenas dois. Muitas pessoas codificam esse programa por três argumentos. Você removerá qualquer número do primeiro argumento que seja igual a qualquer outro argumento.

#### Links Relevantes

*   [Argumentos objeto](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você precisa trabalhar com `arguments` como se fosse uma matriz regular. A melhor maneira é convertê-lo em um.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Você precisa filtrar, isso também significa que você precisa criar uma função de retorno de chamada. Você pode usar vários métodos como: `indexOf()` , `includes()` . Se você precisar de outra abordagem, `reduce()` também pode ser útil; continue lendo esses documentos!

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Para converter `arguments` em uma matriz, use este código `var args = Array.prototype.slice.call(arguments);`

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function destroyer(arr) { 
  var args = Array.prototype.slice.call(arguments); 
 
  for (var i = 0; i < arr.length; i++) { 
    for (var j = 0; j < args.length; j++) { 
      if (arr[i] === args[j]) { 
        delete arr[i]; 
      } 
    } 
  } 
  return arr.filter(Boolean); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/95)

### Explicação do código:

1.  Crie uma matriz de `arguments` usando `Array.prototype.slice.call()` e armazene-a na variável `args` . Nós vamos usar isso para verificar contra `arr` .
    
2.  Iniciar um loop básico `for` iterar através de `arr` . Nest outro `for` laço no interior do primeiro, mudando o número inteiro variável `j` e arr para args. Este segundo loop irá iterar através de `args` .
    
    *   Dentro do segundo loop crie uma instrução `if` , verificando estritamente `===` que a val corrente de `arr[i]` é igual a `args[j]` .
        
    *   Se o valor no índice atual _for_ igual nos dois arrays, use `delete` para removê-lo de `arr` .
        
3.  Fora dos loops aninhados: retorne o array modificado usando o objeto `Boolean` como um filtro para qualquer `null` criado pelo operador `delete` .
    

#### Links Relevantes

*   \[argumentos
*   [Array.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)
*   [excluir](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
*   [boleano](http://forum.freecodecamp.com/t/javascript-boolean/14311)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function destroyer(arr) { 
  var args = Array.from(arguments).slice(1); 
  return arr.filter(function(val) { 
    return !args.includes(val); 
  }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/Ck2m/0)

### Explicação do código:

1.  Declare uma variável denominada `args` e defina-a como um novo objeto `Array` `from()` os `arguments` passados ​​para a função. Na mesma linha ou na linha seguinte, use o método `slice()` em `args` a partir do segundo índice, 1. Isso separa os argumentos usados ​​para filtragem em sua própria matriz de `args` .
    
2.  Retorna a matriz filtrada, usando `includes()` na função callback para verificar se `val` _não_ está em `args` ; retornando `true` para manter o valor na matriz original ou `false` para removê-lo.
    

#### Links Relevantes

*   [argumentos](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.slice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [Array.includes ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## Solução avançada de código:

```javascript
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i)); 
```

### Explicação do código:

*   Codifique usando a sintaxe ES6 para declarar a função usando as funções de seta.
*   Usando o operador de spread para recuperar os argumentos.
*   Retorne a matriz filtrada, usando `includes()` .

#### Links Relevantes

*   [Operador de spread](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.