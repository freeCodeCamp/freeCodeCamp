---
title: Algoritmo Confirma La Terminacin
localeTitle: Algoritmo confirma a conclusão
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a081f3fa5316b7d400a5e518bb0620eef64caa08.jpg)

### Explicação:

A função é simplesmente uma operação booleana. É necessário retornar true se o primeiro argumento terminar com o segundo argumento. Isso significa que, por exemplo, problema `confirmEnding('Bastian', 'n');` , deve retornar true.

## Dica: 1

Veja como o `substr()` funciona. Você deve tentar obter os últimos caracteres X.

## Dica: 2

Para obter os últimos caracteres X, você deve usar length () e convertê-lo em um número negativo.

## Dica: 3

Verifique se você tem a sintaxe correta e se está usando `===` para comparar.

## Alerta de spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução abaixo!**

## Solução de código:
```
function confirmEnding(str, target) { 
  return str.substr(-target.length) === target; 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "foguete:") [Código de execução](https://repl.it/CLjU/18)

## Explicação do código:

Usamos subtring () com o valor negativo que retorna o tamanho do alvo. Poderíamos usar -1 para obter o último caractere, mas se o comprimento do alvo for realmente maior que um, a função retornaria as informações incorretas. Então retornamos o valor de sua expressão boolanea.

> **NOTA:** Por favor, adicione seu nome de usuário somente se você adicionou **conteúdo relevante** ao artigo. (Por favor, não remova nenhum nome existente.)