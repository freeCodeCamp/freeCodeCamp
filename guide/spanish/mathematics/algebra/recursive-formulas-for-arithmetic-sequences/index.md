---
title: Recursive Formulas for Arithmetic Sequences
localeTitle: Fórmulas recursivas para secuencias aritméticas
---
## Fórmulas recursivas para secuencias aritméticas

### ¿Qué es una secuencia aritmética?

Una **secuencia** es una lista de números donde se realizan las mismas operaciones a un número para obtener la siguiente. **Secuencias aritméticas** refiérase específicamente a las secuencias construidas sumando o restando un valor llamado **diferencia común** , para obtener el siguiente término. En Para hablar de manera eficiente sobre una secuencia, usamos una fórmula que construye la secuencia cuando se incluye una lista de índices. Por lo general, estas fórmulas reciben nombres de una letra, seguidos de un parámetro entre paréntesis y la expresión que construye la secuencia. al lado derecho.

`a(n) = n + 1`

Lo anterior es un ejemplo de una fórmula para una secuencia aritmética.

### Ejemplos

Secuencia | Fórmula --------- | --------- 1, 2, 3, 4,… | a (n) = n + 1 3, 8, 13, 18,… | b (n) = 5n - 2

### Una formula recursiva

Nota: los matemáticos comienzan a contar en 1, por lo que, por convención, `n=1` es el primer término. Entonces debemos definir cual es el primer término. Entonces nosotros tenemos Descifrar e incluir la diferencia común. Echando un vistazo a los ejemplos de nuevo,

Secuencia | Fórmula | Formula recursiva --------- | --------- | ------------------- 1, 2, 3, 4,… | a (n) = n + 1 | a (n) = a (n-1) + 1, a (1) = 1 3, 8, 13, 18,… | b (n) = 5n - 2 | b (n) = b (n-1) + 5, b (1) = 3

### Encontrar la fórmula (dada una secuencia con el primer término)
```
1. Figure out the common difference 
    Pick a term in the sequence and subtract the term that comes before it. 
 2. Construct the formula 
    The formula has the form: `a(n) = a(n-1) + [common difference], a(1) = [first term]` 
```

### Encontrar la fórmula (dada una secuencia sin el primer término)
```
1. Figure out the common difference 
    Pick a term in the sequence and subtract the term that comes before it. 
 2. Find the first term 
    i. Pick a term in the sequence, call it `k` and call its index `h` 
    ii. first term = k - (h-1)*(common difference) 
 3. Construct the formula 
    The formula has the form: `a(n) = a(n-1) + [common difference], a(1) = [first term]` 
```

#### Más información:

Para obtener más información sobre este tema, visite

*   [Wikipedia](https://en.wikipedia.org/wiki/Arithmetic_progression)
*   [academia Khan](https://www.khanacademy.org/math/algebra/sequences/constructing-arithmetic-sequences/a/writing-recursive-formulas-for-arithmetic-sequences)