---
title: Find More Than the First Match
localeTitle: Encontre mais do que o primeiro jogo
---
## Encontre mais do que o primeiro jogo

Se você tiver várias ocorrências de sua regex dentro de uma string, você pode obter a função `match()` para detectar todas elas. Simplesmente marque a bandeira `g` no final do seu regex! Isso é o que você está fazendo neste desafio.

## Sugestão 1:

Altere o regex para que ele detecte a palavra "twinkle".

## Dica 2:

Você pode adicionar várias tags a uma regex! Por exemplo, um regex que detecta várias ocorrências e detecta, independentemente do caso, pode ser estruturado como `gi` ou `ig` .

## Alerta de Spoiler - Solução à frente!

## Solução

```javascript
let twinkleStar = "Twinkle, twinkle, little star"; 
 let starRegex = /twinkle/gi; 
 let result = twinkleStar.match(starRegex); 

```