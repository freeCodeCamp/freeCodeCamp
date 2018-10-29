---
title: Logical Operators
localeTitle: Operadores logicos
---
## Operadores logicos

**Y (&&)**  
A && B devuelve True si A y B son True. Si A o B (o ambos) son falsos, entonces A y B son falsos.

| Un | B | Y (A, B) | | --- | --- | --- | | f | t | f | | f | f | f | | t | t | t | | t | f | t |

**O (||)**  
A || B devuelve True si A o B (o A y B) es True. Solo devuelve False si tanto A como B son False.

| Un | B | O (A, B) | | --- | --- | --- | | f | t | t | | f | f | f | | t | t | t | | t | f | t |

**NO (!)**  
Devuelve el valor opuesto. Ex. si A es verdadero, entonces! A es falso, y si A es falso, entonces! A es verdadero. Este es el único operador lógico que trabaja en una sola entrada, lo que lo convierte en un operador único.

| Un | B | NO (A) | NO ES B) | --- | --- | --- | --- | | f | t | t | f | | f | f | t | t | | t | t | f | f | | t | f | f | t |

**XOR ("eXclusivo o")**  
Se conoce como **exclusivo o** . Similar a OR, pero devuelve False si tanto A como B son verdaderas. Es decir, XOR devuelve verdadero si uno y solo uno de A o B es Verdadero.

| Un | B | XOR (A, B) | | --- | --- | --- | | f | t | t | | f | f | f | | t | t | f | | t | f | t |

**Implicación (A -> B)**  
Lea como "si A, entonces B" o "A implica B". Solo devuelve False cuando A es Verdadero y B es Falso. De lo contrario, la implicación es verdadera.  
![](http://sites.millersville.edu/bikenaga/math-proof/truth-tables/truth-tables13.png)

Nota: las implicaciones se utilizan a menudo para las pruebas matemáticas directas. A representa la hipótesis, mientras que B es la conclusión.

La única vez que el condicional es falso es cuando un valor verdadero lleva a un valor falso.

| Un | B | IF (A, B) | | --- | --- | --- | | f | t | t | | f | f | t | | t | t | t | | t | f | f |

**Equivalencia lógica (iff: if y only if)**  
"P si y solo si Q" es lo mismo que "P implica Q y Q implica P". En otras palabras, las tablas de verdad para P y Q son idénticas para todos los valores de verdad. Esto se conoce como el bicondicional. Es el equivalente de A -> B **AND** B-> A. Significa que deben cumplirse ambos condicionales para que la bicondicional sea verdadera.

Puede ver fácilmente que la salida de salida del operador IFF en la tabla de verdad es la misma que la AND de las columnas 3 y 4.

| Un | B | IF (A, B) | IF (B, A) | IFF (A, B) | | --- | --- | --- | --- | --- | | f | t | t | f | f | | f | f | t | t | t | | t | t | t | t | t | | t | f | f | t | f |

#### Más información:

\+ \* [Operadores lógicos en Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) + \* [Operadores lógicos en PHP](http://php.net/manual/en/language.operators.logical.php) + \* [Operadores lógicos en C ++](http://en.cppreference.com/w/cpp/language/operator_logical)