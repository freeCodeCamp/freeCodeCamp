---
title: Truth Tables
localeTitle: Tablas de la verdad
---
## Tablas de la verdad

Una tabla de verdad es una herramienta matemática utilizada en el álgebra booleana. Consta de una columna cada una para las variables de función. Una columna final contiene el valor funcional evaluado para los valores correspondientes de las variables. Para una función booleana de n variables, su expansión de tabla de verdad tendrá 2 ^ n filas. Esto se debe a que cada variable tiene dos estados posibles: verdadero y falso.

### Y

Exploremos la tabla de verdad para el operador AND:

| x | y | xY y | | --- | --- | --- | | F | F | F | | F | T | F | | T | F | F | | T | T | T |

Y es el operador binario. Opera en dos variables, digamos `x` , `y` .

¡Así tenemos 2 ^ 2 = 4 columnas en nuestra tabla de verdad!

La última columna es el valor funcional - x AND y. La lógica para la operación AND es que si los valores de x e y son verdaderos solo entonces la salida tendría el valor Verdadero, de lo contrario sería Falso.

Similarmente tablas de verdad para otros operadores lógicos -

### NO

| x | NO X | | --- | --- | | F | T | | T | F |

### O

| x | y | x O y | | --- | --- | --- | | F | F | F | | F | T | T | | T | F | T | | T | T | T |

### XOR

| x | y | x XOR y | | --- | --- | --- | | F | F | F | | F | T | T | | T | F | T | | T | T | F |

O operador:

| x | y | x O y | | --- | --- | --- | | F | F | F | | F | T | T | | T | F | T | | T | T | T |

NO operador:

| x | NO x | | --- | --- | | F | T | | T | F |

Operador de implicación:

| x | y | x IMPLICA y | | --- | --- | --- | | F | F | T | | F | T | T | | T | F | F | | T | T | T |

El operador implicado a menudo puede ser confuso para algunos. Es útil relacionar ejemplos del mundo real para ayudar a la comprensión de este operador. Por ejemplo, considere: Si está lloviendo entonces uso un paraguas. Aquí, asumiendo que está lloviendo, entonces uso un paraguas (la declaración sostiene) Pero si está lloviendo, y no uso un paraguas, entonces la afirmación no se cumple. A pesar de eso, si no está lloviendo y sigo usando un paraguas, entonces la afirmación también es válida (no importa si se usa o no, ya que no está lloviendo. Aunque parezca bastante extraño).

Sin embargo, el operador implicado puede ser desconcertante para las proposiciones involucradas que son falsas en el mundo real. Considerar: Si el sol está hecho de agua, entonces 1 + 1 = 3. De acuerdo con la tabla de verdad de implicación, esta fórmula proposicional es verdadera.

P implica que Q también se puede pensar como una abreviatura de NO (P) O Q.

Operador de doble implicación:

| x | y | x <-> y | | --- | --- | --- | | F | F | T | | F | T | F | | T | F | F | | T | T | T |

Las tablas de la verdad son una herramienta poderosa. Se pueden usar para expresar y evaluar funciones y operaciones booleanas simples, circuitos combinacionales complejos y circuitos lógicos secuenciales.

Aquí está la tabla de verdad para el operador OR

| x | y | x O y | | --- | --- | --- | | F | F | F | | F | T | T | | T | F | T | | T | T | F |

Al igual que arriba, el operador OR opera con dos variables, observe que la única vez que el operador OR se evalúa como Verdadero es cuando `x` & `y` anulan entre sí.

Hagamos una más, hagamos la tabla para la Negación, esto funciona con un valor en lugar de dos

| x | NO x | | --- | --- | | T | F | | F | T |

Esta regla es más simple y simplemente niega el valor original de `x`

#### Más información:

*   [Hiperfísica - Universidad Estatal de Georgia](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/truth.html)
*   [Wikipedia](https://en.wikipedia.org/wiki/Truth_table)