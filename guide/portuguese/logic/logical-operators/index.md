---
title: Logical Operators
localeTitle: Operadores lógicos
---
## Operadores lógicos

**AND (&&)**  
A && B retorna True se tanto A quanto B forem verdadeiros. Se A ou B (ou ambos) forem False, então A && B será False.

| A | B | AND (A, B) | | --- | --- | --- | | f | t | f | | f | f | f | | t | t | t | | t | f | t |

**OR (||)**  
A || B retorna True se A ou B (ou ambos, A e B) forem verdadeiros. Apenas retorna False se tanto A quanto B forem False.

| A | B | OR (A, B) | | --- | --- | --- | | f | t | t | | f | f | f | | t | t | t | | t | f | t |

**NÃO (!)**  
Retorna o valor oposto. Ex. se A é verdadeiro, então !A é falso, e se A é falso, então !A é verdadeiro. Este é o único operador lógico que trabalha em apenas uma entrada, o que torna um operador unário.

| A | B | NÃO (A) | NÃO SER) | --- | --- | --- | --- | | f | t | t | f | | f | f | t | t | | t | t | f | f | | t | f | f | t |

**XOR ("eXclusive ou")**  
É conhecido como **exclusivo ou** . Semelhante a OR, mas retorna False se A e B forem verdadeiros. Ou seja, XOR retorna true se um e apenas um de A ou B for True.

| A | B | XOR (A, B) | | --- | --- | --- | | f | t | t | | f | f | f | | t | t | f | | t | f | t |

**Implicação (A -> B)**  
Leia como "se A, então B" ou "A implica B". Apenas retorna False quando A é True e B é False. Caso contrário, a implicação é verdadeira.  
![](http://sites.millersville.edu/bikenaga/math-proof/truth-tables/truth-tables13.png)

Nota: Implicações são frequentemente usadas para provas matemáticas diretas. A representa a hipótese, enquanto B é a conclusão.

A única vez que a condicional é falsa é quando um valor verdadeiro leva a um valor falso.

| A | B | IF (A, B) | | --- | --- | --- | | f | t | t | | f | f | t | | t | t | t | | t | f | f |

**Equivalência lógica (iff: if and only if)**  
"P se e somente se Q" é o mesmo que "P implica Q e Q implica P". Em outras palavras, as tabelas verdade para P e Q são idênticas para todos os valores de verdade. Isso é conhecido como o bicondicional. É o equivalente de A -> B **AND** B -> A. Isso significa que ambas as condicionais devem ser satisfeitas para que a bicondicional seja verdadeira.

Você pode ver facilmente que a saída do operador IFF na tabela verdade é a mesma que a AND das colunas 3 e 4.

| A | B | IF (A, B) | SE (B, A) | IFF (A, B) | | --- | --- | --- | --- | --- | | f | t | t | f | f | | f | f | t | t | t | | t | t | t | t | t | | t | f | f | t | f |

#### Mais Informações:

\+ \* [Operadores lógicos em Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) + \* [Operadores lógicos em PHP](http://php.net/manual/en/language.operators.logical.php) + \* [Operadores lógicos em C ++](http://en.cppreference.com/w/cpp/language/operator_logical)
