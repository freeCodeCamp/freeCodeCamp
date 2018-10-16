---
title: Bitwise Operators
localeTitle: Operadores bit a bit
---
`<<` , `>>` , `&` , `|` , `~` e `^` são os operadores bit a bit que operam em um ou mais padrões de bit ou numerais binários no nível de seus bits individuais.

## Operador AND

`x & y`

Faz um "bit a bit e". Cada bit da saída é 1 se o bit correspondente de x AND de y for 1, caso contrário, será 0.

## Operador OR

`x | y`

Faz um "bit a bit ou". Cada bit da saída é 0 se o bit correspondente de x AND de y for 0, caso contrário, é 1.

## Operador de complemento

`~ x`

Retorna o complemento de x - o número que você recebe trocando cada 1 por 0 e cada 0 por 1. Isto é o mesmo que -x - 1.

## Operador XOR

`x ^ y`

Faz um "bitwise exclusivo ou". Cada bit da saída é o mesmo que o bit correspondente em x se esse bit em y é 0, e é o complemento do bit em x se esse bit em y for 1.

## Operador de mudança aritmética esquerda

`x << y`

Retorna x com os bits deslocados para a esquerda por y lugares (e os novos bits do lado direito são zeros). Isso é o mesmo que multiplicar x por 2 \*\* y, preservando o sinal do número. A maioria dos compiladores lança um aviso quando você muda com uma contagem> = sizeof (type). Você geralmente acaba com um 0 quando você faz isso.

## Operador direito de mudança aritmética

`x >> y`

Retorna x com os bits deslocados para a direita por y posições. Isso é o mesmo que dividir x por 2 \*\* y para um inteiro não assinado. O deslocamento à direita de um número assinado negativo possui um comportamento definido pela implementação. A maioria dos compiladores lança um aviso quando você muda com uma contagem> = sizeof (type). Mudar para a direita pode preencher bits "vazios" com o Bit Mais Significativo original (isto é, executar extensão de sinal) ou pode mudar em zeros, dependendo da plataforma e / ou compilador.

## Operador direito de deslocamento lógico

`x >>> y`

Retorna x com os bits deslocados para a direita por y posições. Ao contrário da mudança aritmética, as mudanças lógicas não representam sinal. Por exemplo: -2 representado em 8 bits seria 11111110 (porque o bit mais significativo tem peso negativo). Deslocando-o um bit usando a mudança aritmética, você terá 11111111, ou -1. O deslocamento lógico à direita, no entanto, não importa que o valor possa representar um número; simplesmente move tudo para a direita e preenche a partir da esquerda com 0s. Mudar o nosso bit direito de um-bit usando o deslocamento lógico daria 01111111. Este operador não está necessariamente presente em todos os idiomas.