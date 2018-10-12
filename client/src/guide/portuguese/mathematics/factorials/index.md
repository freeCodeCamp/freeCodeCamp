---
title: Factorials
localeTitle: Factorials
---
## Factorials

### Definição de Fatorial

O fatorial é multiplicá-lo por cada intiger mais baixo, terminando em um. Se o número inicial for negativo, o resultado será infinito.

Um fatorial de n , um inteiro não negativo, é definido como:

n! = 1 \* 2 \*… \* (n - 1) \* n

Um caso especial surge quando n = 0 . Ou seja, 0! = 1

### Conveniência de Factorials

A definição acima fornece conveniência em determinados cálculos. Por exemplo, fatorials dentro de frações podem ser simplificados da seguinte maneira:

Exemplo 1: 7! / 5! = (1 \* 2 \* 3 \* 4 \* 5 \* 6 \* 7) / (1 \* 2 \* 3 \* 4 \* 5) = 6 \* 7 = 42

Exemplo 2: (n + 1)! / n! = (1 \* 2 \*… \* n \* (n + 1)) / (1 \* 2 \*… \* n) = n + 1

### Definição alternativa

Alternativamente, os fatoriais podem ser definidos da seguinte forma:

0! = 1

n! = n \* (n - 1)! se n> 0

Essa definição recursiva significa exatamente o mesmo que a definição tradicional. Aplicando isso no segundo exemplo acima, obtemos:

(n + 1)! / n! = (n + 1) \* n! / n! = n + 1

### Aparte: extensão para não inteiros

Note que fatorial como definido acima se aplica somente a inteiros não negativos. Na verdade, há uma generalização de fatoriais que também se estende a não inteiros, que é a função Gama. Em particular, para qualquer número natural n , você tem n! = Gama (n + 1) = n \* Gama (n) .

Para mais, consulte [Extensão de valores fatorial para valores não inteiros do argumento](https://en.wikipedia.org/wiki/Factorial#Extension_of_factorial_to_non-integer_values_of_argument) .

Um exemplo complicado que muitos podem não saber se 0! = 1. Para mais provas, consulte o link em Mais Informações.

#### Mais Informações:

[Factorials](http://www.purplemath.com/modules/factorial.htm)