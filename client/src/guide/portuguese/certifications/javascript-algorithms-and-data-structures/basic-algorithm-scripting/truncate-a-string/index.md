---
title: Truncate a String
localeTitle: Truncar uma string
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Precisamos reduzir o comprimento da string ou **truncá-** la se ela for maior que os comprimentos máximos especificados e adicionar `...` ao final. Se não for esse tempo, então o mantemos como está.

#### Links Relevantes

*   [String.prototype.slice ()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

As strings são imutáveis ​​em JavaScript, então precisaremos de uma nova variável para armazenar a string truncada.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Você precisará usar o método slice () e especificar onde iniciar e onde parar.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Não se esqueça que quando truncamos a palavra, também devemos contar o comprimento adicionado por `...`

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function truncateString(str, num) { 
  // Clear out that junk in your trunk 
  if (str.length > num && num > 3) { 
    return str.slice(0, (num - 3)) + '...'; 
  } else if (str.length > num && num <= 3) { 
    return str.slice(0, num) + '...'; 
  } else { 
    return str; 
  } 
 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/55)

### Explicação do código:

*   Primeiro, começamos com uma simples declaração `if` para determinar um dos três resultados…
*   Se o tamanho da nossa string for maior que o `num` que queremos truncar, e o nosso ponto truncado tiver pelo menos três caracteres ou mais na string, retornamos uma fatia da nossa string começando no caractere 0 e terminando na `num - 3` . Em seguida, acrescentamos nosso `'...'` ao final da string.
*   No entanto, se o tamanho da nossa string for maior que o `num` mas `num` estiver entre os três primeiros caracteres, não precisamos contar nossos pontos como caracteres. Portanto, retornamos a mesma string acima, com uma diferença: o ponto final de nossa fatia agora é apenas `num` .
*   Finalmente, se nenhuma das situações acima forem verdadeiras, isso significa que o tamanho da nossa string é menor que o `num` do nosso truncamento. Portanto, podemos apenas retornar a string.

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function truncateString(str, num) { 
  if (str.length <= num) { 
    return str; 
  } else { 
    return str.slice(0, num > 3 ? num - 3 : num) + '...'; 
  } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/54)

### Explicação do código:

*   Primeiro, precisamos de uma instrução if para testar se o comprimento da string completa passou como o primeiro argumento já se encaixa dentro do limite de tamanho passado como o segundo argumento. Se assim for, podemos apenas retornar a string que foi passada.
    
    if (str.length <= num) return str;
    
*   Se a nossa declaração `if` falhar, passamos para o `else` , onde vamos retornar uma "fatia" da string. O método slice extrai uma seção de uma string e retorna uma nova string. Aqui nós passamos 0 como o ponto de partida para a nossa fatia. Para determinar o ponto final, usamos um operador ternário: `num > 3 ? num - 3 : num` . Em nosso ternário, se `num` for maior que 3, devemos fatorar os três pontos em nosso comprimento total e, assim, terminar nossa fatia em `num-3` . Se num for menor ou igual a 3, nossa fatia obtém uma variável final de apenas `num` . Finalmente, o `'...'` é anexado ao final da nova string e é retornado.
    
    } outro { return str.slice (0, num> 3? num - 3: num) + '…'; }
    
*   **OBSERVAÇÃO** Para entender o código acima, você precisa entender como funciona um Operador Ternário. O Operador Ternário é freqüentemente usado como um atalho para a declaração `if` e segue este formato: `condition ? expr1 : expr2` . Se a `condition` avaliada como verdadeira, o operador retornará o valor de `expr1` . Caso contrário, retorna o valor de `expr2` .
    

#### Links Relevantes

*   [Operador condicional (ternário)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
*   [String.prototype.slice ()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.