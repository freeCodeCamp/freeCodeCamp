---
title: All Factors of a Number
localeTitle: Todos os fatores de um número
---
## Todos os fatores de um número

Você pode pensar em fatores como os números que você multiplica para obter outro número.

![](https://upload.wikimedia.org/wikipedia/commons/e/e8/Factor_Tree_of_42.png)

Neste caso 2, 3, 6 e 7 são todos os números que você pode multiplicar para obter 42. Então, eles são todos fatores de 42. No entanto, eles não são todos os fatores de 42. Para encontrar todos os fatores que podemos usar o algoritmo ou passo a passo pelo processo abaixo.

Comece com 1.

1 \* 42 = 42

1 | … | 42 --- | --- | ---

Tente 2.

2 \* 21 = 42

1 | 2 | … | 21 | 42 --- | --- | --- | --- | ---

Tente 3.

3 \* 14 = 42

1 | 2 | 3 | … | 14 | 21 | 42 --- | --- | --- | --- | --- | --- | ---

Tente 4.

Nenhum número inteiro pode ser multiplicado por 4 para obter 42, então pulamos.

Tente 5.

Nenhum número inteiro pode ser multiplicado por 5 para obter 42, então pulamos.

Tente 6.

6 \* 7 = 42

1 | 2 | 3 | 6 | … | 7 | 14 | 21 | 42 --- | --- | --- | --- | --- | --- | --- | --- | ---

Como não há números inteiros entre 6 e 7, todos os fatores positivos foram encontrados. Todos os números acima podem ter seu sinal invertido e continuarão sendo fatores de 42. Em conclusão, todos os fatores de 42 estão abaixo.

1 | 2 | 3 | 6 | 7 | 14 | 21 | 42 | -1 | -2 | -3 | -6 | -7 | -14 | -21 | -42 --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---

## Confirme o número de fatores está correto

Podemos confirmar rapidamente que identificamos todos os fatores positivos com as seguintes etapas:

1.  Pegue a fatoração primária (fornecida pela árvore acima)

2 1 \* 3 1 \* 7 \* 1

2.  Adicione um a cada um dos expoentes:

Expoente de 2: 1 + 1 = 2 Expoente de 3: 1 + 1 = 2 Expoente de 7: 1 + 1 = 2

3.  Múltiplo cada um dos números acima:

2 \* 2 \* 2 = 8

4.  Confirme que 42 tem 8 fatores:

1 | 2 | 3 | 6 | … | 7 | 14 | 21 | 42 --- | --- | --- | --- | --- | --- | --- | --- | ---