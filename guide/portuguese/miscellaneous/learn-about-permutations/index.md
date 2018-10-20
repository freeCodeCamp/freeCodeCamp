---
title: Learn About Permutations
localeTitle: Aprenda sobre permutações
---
_Permutação_ é um termo matemático para o número de maneiras que um grupo de objetos pode ser montado em um conjunto. É semelhante a outro termo matemático, _combinação_ , exceto por uma diferença fundamental: com permutações, a ordem dos itmes no conjunto faz diferença.

Por exemplo, digamos que você estivesse puxando números de um chapéu e contando as diferentes combinações de três números. Nesse caso, tanto `[1,2,3]` quanto `[3,2,1]` seriam uma combinação de `1` , `2` e `3` e seriam contadas como uma combinação.

No entanto, se você estivesse contando as permutações de números, elas seriam contadas como duas instâncias diferentes, porque os números de cada conjunto estão em uma ordem diferente.

As permutações podem ser calculadas de duas maneiras, dependendo se os valores repetidos são permitidos ou não. Para calcular o número de permutações de `n` objetos sem repetições, você simplesmente calcula `n!` ou `n * (n-1) * (n-2) ... * 1` . Isso faz sentido, porque se você escolher um número do chapéu e não colocá-lo de volta antes de escolher o próximo número, haverá um número a menos para escolher.

Para calcular apenas parte do número total de permutações (por exemplo, para encontrar o número de permutações de três dígitos de 1 a 10 sem repetições), basta multiplicar por quantas escolhas você estiver fazendo. No caso dos três dígitos, você só precisa multiplicar `10 * 9 * 8` . Da mesma forma, se repetições **são** permitidas (ou seja, você coloca o número de volta no chapéu após a escolha), você multiplicaria `10 * 10 * 10` .