---
title: Convert Celsius to Fahrenheit
localeTitle: Converter Celsius para Fahrenheit
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

O algoritmo para converter de Celsius para Fahrenheit é a temperatura em Celsius vezes `9/5` , mais `32` .

Você recebe uma variável **celsius** representando uma temperatura em Celsius. Use a variável **fahrenheit** já definida e aplique o algoritmo para atribuir a temperatura correspondente em Fahrenheit.

#### Links Relevantes

*   [A Ordem de Operações: PEMDAS](http://www.purplemath.com/modules/orderops.htm)
*   [Ordem de Operação: Vídeo](https://www.khanacademy.org/math/pre-algebra/order-of-operations/order_of_operations/v/order-of-operations)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Dê uma olhada no código. Existe uma área que você não deveria editar. A partir daí, pergunte a si mesmo - o que é usado lá que eu não vi antes?

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Tenha em mente a **ordem de operação,** verifique o link na seção de _links_ para mais informações.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function convertToF(celsius) { 
      // Only change code below this line 
      var fahrenheit = (celsius * (9/5)) + 32; 
 
      // Only change code above this line 
      if ( typeof fahrenheit !== 'undefined' ) { 
      return fahrenheit; 
      } else { 
        return 'fahrenheit not defined'; 
      } 
    } 
 
    // Change the inputs below to test your code 
    convertToF(30); 
```

### Explicação do código:

*   Declarar a variável **fahrenheit** .
*   Certifique-se de que a ordem correta das operações aritméticas seja seguida usando parênteses ( `()` ) quando necessário.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.