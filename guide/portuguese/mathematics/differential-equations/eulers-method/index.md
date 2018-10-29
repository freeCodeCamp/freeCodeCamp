---
title: Euler's Method
localeTitle: Método de Euler
---
# Método de Euler

O método de Euler é um procedimento numérico de primeira ordem para resolver equações diferenciais ordinárias (ODE) com um determinado valor inicial.

## O problema geral do valor inicial

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn006.png)

## Metodologia

O método de Euler usa a fórmula simples,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn3.png)

para construir a tangente no ponto `x` obter o valor de `y(x+h)` , cuja inclinação é,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn008.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/Euler.png)

No método de Euler, você pode aproximar a curva da solução pela tangente em cada intervalo (isto é, por uma seqüência de segmentos curtos), nas etapas de `h` .

_Em geral_ , se você usar um pequeno tamanho de passo, a precisão da aproximação aumentará.

## Fórmula geral

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn7.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_2.png)

## Valor funcional em qualquer ponto `b` , dado por `y(b)`

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn6.png)

Onde,

*   **n** = número de etapas
*   **h** = largura do intervalo (tamanho de cada etapa)

### Pseudo-código

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_1.png)

## Exemplo

Encontre `y(1)` , dado

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn007.png)

Resolvendo analiticamente, a solução é _**y = e x**_ e `y(1)` = `2.71828` . (Nota: Esta solução analítica é apenas para comparar a precisão.)

Usando o método de Euler, considerando `h` = `0.2` , `0.1` , `0.01` , você pode ver os resultados no diagrama abaixo.

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/comparison.png)

Quando `h` = `0.2` , `y(1)` = `2.48832` (erro = 8,46%)

Quando `h` = `0.1` , `y(1)` = `2.59374` (erro = 4,58%)

Quando `h` = `0.01` , `y(1)` = `2.70481` (erro = 0,50%)

Você pode notar como a precisão melhora quando as etapas são pequenas.

## Mais Informações:

1.  [Métodos numéricos para resolver equações diferenciais](http://calculuslab.deltacollege.edu/ODE/7-C-1/7-C-1-h-c.html)
2.  [Método de Euler](https://en.wikipedia.org/wiki/Euler_method)