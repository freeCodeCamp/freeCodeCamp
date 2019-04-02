---
title: Make a Person
localeTitle: Faça uma pessoa
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Quando iniciei o programa, imaginei que tinha que criar as seis funções mencionadas nos detalhes. No entanto, não foi assim tão simples. Criando-os como uma função não era o caminho certo, eu tive que criá-los de uma maneira diferente para torná-los uma chave.

Há também uma parte complicada, já que você precisa de seis chaves, não mais ou menos, então no começo eu tinha a variável que armazenava o nome original como uma chave também, o que estava errado.

Quanto ao uso da matriz, que é opcional, você também pode criar uma nova variável para manter a string separada, se desejar, mas é mais fácil lidar com uma matriz, pois as strings são imutáveis.

Leia atentamente as instruções, é sempre uma boa dica para executar o código e verificar quais foram os resultados do teste para que você saiba o que esperar, mas não se fixe nisso. Depois de entender o que você precisa fazer, esse problema é muito fácil e direto.

#### Links Relevantes

*   [Fechamentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
*   [Detalhes do modelo de objeto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Use **esta** notação para criar as chaves em vez de funções regulares: Isto significa que em vez de `var varName = function() {/*...*/}` você deve usar `this.varName = function() {/*...*/}`

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

O programa tem um teste que verifica quantas chaves você usou, elas precisam ser exatamente seis, as seis mencionadas na seção de detalhes. Isso significa que, se você precisar trabalhar com variáveis, torne-as locais e não uma chave: `this.fullName = firstAndLast;`

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Muitas vezes, o código não funciona da maneira esperada devido a nomes incorretos de variáveis, certifique-se de verificar se os soletram corretamente. Isso acontece com todos nós em algum momento.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 4

Se você está tendo problemas em escrever os métodos `setter` , abaixo está um template para um método `set` :

```js
this.setFullName = function(input) { 
  // Insert your code here 
 } 
```

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```js
var Person = function(firstAndLast) { 
  var fullName = firstAndLast; 
 
  this.getFirstName = function() { 
    return fullName.split(" ")[0]; 
  }; 
 
  this.getLastName = function() { 
    return fullName.split(" ")[1]; 
  }; 
 
  this.getFullName = function() { 
    return fullName; 
  }; 
 
  this.setFirstName = function(name) { 
    fullName = name + " " + fullName.split(" ")[1]; 
  }; 
 
  this.setLastName = function(name) { 
    fullName = fullName.split(" ")[0] + " " + name; 
  }; 
 
  this.setFullName = function(name) { 
    fullName = name; 
  }; 
 }; 
 
 var bob = new Person('Bob Ross'); 
 bob.getFullName(); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLov/0)

### Explicação do código:

*   Crie uma variável que faça uma cópia do nome completo que foi passado como um parâmetro.
*   Então podemos prosseguir para criar os seis métodos necessários e retornar o que é solicitado.
*   Para os setters individuais, podemos usar a divisão para transformar o nome completo em uma matriz de nomes e sobrenomes e concatenar a parte inalterada do nome com o que foi passado como um parâmetro.

#### Links Relevantes

*   [Como construir objetos](https://www.freecodecamp.org/challenges/build-javascript-objects)
*   [Construa objetos com funções](https://www.freecodecamp.org/challenges/construct-javascript-objects-with-functions)
*   [Declarar objetos como variáveis](https://www.freecodecamp.org/challenges/declare-javascript-variables)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.