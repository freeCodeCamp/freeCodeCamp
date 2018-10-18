---
title: Use the map Method to Extract Data from an Array
localeTitle: Use o método map para extrair dados de uma matriz
---
## Use o método map para extrair dados de uma matriz

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

array.prototype.map assume uma função como na entrada e retorna uma matriz. A matriz retornada inclui elementos que são processados ​​pela função. Essa função usa elementos individuais como entrada.

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução de Código Intermediário:

```javascript
  rating = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) ); 
```

\### Explicação do código: Usando a notação ES6, cada item da matriz é processado para extrair o título e a classificação. Parantheses são necessários para retornar um objeto.

#### Links Relevantes

*   [Funções de seta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)