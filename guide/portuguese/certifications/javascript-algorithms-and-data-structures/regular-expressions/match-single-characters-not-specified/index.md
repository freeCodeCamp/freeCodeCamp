---
title: Match Single Characters Not Specified
localeTitle: Combinar Caracteres Únicos Não Especificados
---
## Combinar Caracteres Únicos Não Especificados

Neste desafio, somos solicitados a retornar uma coleção de correspondências que não são exatamente especificadas. Enquanto os desafios anteriores de regexp teriam que combinar com o caractere de caractere \[az\], este desafio nos pede para negar essas correspondências usando o caractere de circunflexo \[^ az\]. Nosso objetivo então é retornar uma coleção negada (não-correspondência) de letras que não são vogais nem números.

## Sugestão 1:

Você se lembrou de cercar seu regexp em ambos os suportes e barras?

```javascript
let exampleRegExp = /[^az]/; 
```

Em caso afirmativo, verifique se você está adicionando os sinalizadores apropriados:

*   i: Ignora letras maiúsculas e minúsculas da pesquisa / correspondência
*   g: recupera vários valores; o padrão é definido para retornar a primeira correspondência encontrada
*   ^: Nega os jogos seguindo este sinalizador

### Dica 2:

Certifique-se de verificar se o seu intervalo de numeração está correto - o desafio nos pede para negar todos os números de 0 a 99. Isso pode ser feito usando o cursor negado colocado imediatamente após o primeiro parêntese de abertura do seu regexp.

```js
let numbersRegExp = /[^0-99]/ig; 
```

### Alerta de spoiler - Solução à frente

## Solução

```javascript
let quoteSample = "3 blind mice."; 
 let myRegex = /[^aeiou^0-99]/ig; // Change this line 
 let result = quoteSample.match(myRegex); // Change this line 

```