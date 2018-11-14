---
title: Missing Letters
localeTitle: Cartas desaparecidas
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Você criará um programa que encontrará a letra ausente de uma string e a retornará. Se não houver letra faltando, o programa deve retornar indefinido. Não há atualmente nenhum caso de teste para a cadeia que perdeu mais de uma letra, mas se houvesse uma, a recursão seria usada. Além disso, as letras são sempre fornecidas em ordem para que não haja necessidade de classificá-las.

#### Links Relevantes

*   [Objeto global de string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [Protótipo de Cadeia JS CharCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você precisará converter de caractere em código ASCII usando os dois métodos fornecidos na descrição.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Você terá que verificar a diferença no código ASCII como eles estão em ordem. Usando um gráfico seria muito útil.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Você precisará descobrir onde está a letra faltando, além de lidar com o caso de não haver letras faltando, já que ela precisa de um valor de retorno específico.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function fearNotLetter(str) { 
 
  for(var i = 0; i < str.length; i++) { 
    /* code of current character */ 
    var code = str.charCodeAt(i); 
 
    /* if code of current character is not equal to first character + no of iteration 
    hence character has been escaped */ 
    if (code !== str.charCodeAt(0) + i) { 
 
      /* if current character has escaped one character find previous char and return */ 
      return String.fromCharCode(code - 1); 
    } 
  } 
  return undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnD/0)

### Explicação do código:

*   Esta solução faz uso de um loop `for` .
*   O código do caractere encontrado é armazenado no **código** .
*   É verificado se o código do caractere atual é o esperado (nenhum caractere é ignorado) usando o `code of current character = code of first character + number of iterations` lógico `code of current character = code of first character + number of iterations` .
*   Se um caractere estiver faltando, o caractere ausente será localizado e a string final será retornada.
*   `undefined` é retornado se não houver caracteres ausentes na string.

#### Links Relevantes

*   [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   String.length

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
// Adding this solution for the sake of avoiding using 'for' and 'while' loops. 
 // See the explanation for reference as to why. It's worth the effort. 
 
 function fearNotLetter(str) { 
  var compare = str.charCodeAt(0), missing; 
 
  str.split('').map(function(letter,index) { 
    if (str.charCodeAt(index) == compare) { 
      ++compare; 
    } else { 
      missing = String.fromCharCode(compare); 
    } 
  }); 
 
  return missing; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnE/0)

### Explicação do código:

*   Primeiro, definimos variáveis ​​para armazenar o código do caractere para a primeira letra da string e para armazenar as letras que faltam.
*   Nós transformamos a string em uma matriz para mapear através dela, em vez de usar loops `for` e `while` .
*   À medida que `map` através de códigos de caracteres dos nossos cartas, nós vamos comparar com o que deveria estar nessa posição.
*   Se a letra atual corresponder, movemos a variável de comparação para sua próxima posição, para que possamos comparar no próximo ciclo.
*   Caso contrário, a letra ausente será atribuída à variável `missing` , que será retornada após o término do mapa.
*   Se não houver caracteres ausentes, retorne `undefined` .

#### Links Relevantes

*   [Divisão de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Mapa de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código simplificado:
```
function fearNotLetter(str) { 
  for (let i = 1; i < str.length; ++i) { 
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) { 
      return String.fromCharCode(str.charCodeAt(i - 1) + 1); 
    } 
  } 
 } 
```

### Explicação do código:

*   Loop sobre a string
*   Verifique se a diferença nos códigos de caracteres entre caracteres adjacentes na string é maior que 1 (tabela chack ASCII)
*   Retorna o caractere ausente (+1 de onde a lacuna foi detectada)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function fearNotLetter(str) { 
  var allChars = ''; 
  var notChars = new RegExp('[^'+str+']','g'); 
 
  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++) 
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i); 
 
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnG/0)

### Explicação do código:

*   Uma nova string **allChars** é criada.
*   Crie uma expressão regular **notChars** que selecione tudo, exceto **str** .
*   O `for` loop é usado para adicionar todas as letras na faixa de **allChars.**
*   `match()` é usado para retirar as letras **str** da string recém-criada e ela é retornada.
*   Se não houver caracteres ausentes, retorne `undefined` .

#### Links Relevantes

*   Recursos JS Regex
*   [JS Ternary](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)
*   [Correspondência de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [Junção de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.