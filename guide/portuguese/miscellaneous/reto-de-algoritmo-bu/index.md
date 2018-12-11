---
title: Reto De Algoritmo Bu
localeTitle: Algoritmo Desafio Bu
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3c8584a085a0deaea66b3400e6321eeadab552a2.jpg)

### Explicação do problema:

*   Este programa é muito simples, o truque é entender que é um booleano primitivo. O programa recebe um parâmetro verdadeiro ou falso.

## Dica: 1

*   Você deve verificar se o tipo de parâmetro recebido é boolaneo.

## Dica: 2

*   Para verificar o tipo de um parâmetro, você pode usar `typeof`

## Dica: 3

*   Como você deve retornar true ou false, é possível usar uma instrução if ou simplesmente retornar a instrução que você usaria na instrução if.

## Alerta de spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução abaixo!**

## Solução de código:
```
function booWho(bool) { 
  return typeof bool === 'boolean'; 
 } 
 
 // realizamos el test 
 booWho(null); 
```

![:rocket:](/images/emoji/emoji_one/rocket.png?v=2 "foguete:") [Na REPL!](https://repl.it/CLnK/0)

# Explicação do código:

Usamos o operador `typeof` para verificar se uma variável é boolanea. Se for, ele retornará `true` . Caso contrário, ser outro tipo retornará `falso` .

> **NOTA:** Por favor, adicione seu nome de usuário somente se você adicionou **conteúdo relevante** ao artigo. (Por favor, não remova nenhum nome existente.)