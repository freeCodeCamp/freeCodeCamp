---
title: Recursive Formulas for Arithmetic Sequences
localeTitle: Fórmulas Recursivas para Seqüências Aritméticas
---
## Fórmulas Recursivas para Seqüências Aritméticas

### O que é uma sequência aritmética?

Uma **sequência** é uma lista de números em que as mesmas operações são feitas para um número para obter o próximo. **Seqüências aritméticas** referem-se especificamente a sequências construídas adicionando ou subtraindo um valor chamado a **diferença comum** - para obter o próximo termo. Dentro Para falar eficientemente sobre uma sequência, usamos uma fórmula que cria a sequência quando uma lista de índices é inserida. Geralmente, essas fórmulas recebem nomes de uma letra, seguidas por um parêntese entre parênteses e a expressão que cria a sequência. no lado direito.

`a(n) = n + 1`

Acima está um exemplo de uma fórmula para uma sequência aritmética.

### Exemplos

Sequência | Fórmula --------- | --------- 1, 2, 3, 4,… | a (n) = n + 1 3, 8, 13, 18,… | b (n) = 5n - 2

### Uma fórmula recursiva

Nota: Os matemáticos começam contando a 1, portanto, por convenção, `n=1` é o primeiro termo. Portanto, devemos definir o que é o primeiro termo. Então nós temos para descobrir e incluir a diferença comum. Olhando novamente os exemplos,

Sequência | Formula | Fórmula Recursiva --------- | --------- | ------------------- 1, 2, 3, 4,… | a (n) = n + 1 | a (n) = a (n-1) + 1, a (1) = 1 3, 8, 13, 18,… | b (n) = 5n - 2 | b (n) = b (n-1) + 5, b (1) = 3

### Encontrar a Fórmula (dada uma sequência com o primeiro termo)
```
1. Figure out the common difference 
    Pick a term in the sequence and subtract the term that comes before it. 
 2. Construct the formula 
    The formula has the form: `a(n) = a(n-1) + [common difference], a(1) = [first term]` 
```

### Encontrando a Fórmula (dada uma sequência sem o primeiro termo)
```
1. Figure out the common difference 
    Pick a term in the sequence and subtract the term that comes before it. 
 2. Find the first term 
    i. Pick a term in the sequence, call it `k` and call its index `h` 
    ii. first term = k - (h-1)*(common difference) 
 3. Construct the formula 
    The formula has the form: `a(n) = a(n-1) + [common difference], a(1) = [first term]` 
```

#### Mais Informações:

Para mais informações sobre este tópico, visite

*   [Wikipedia](https://en.wikipedia.org/wiki/Arithmetic_progression)
*   [Khan Academy](https://www.khanacademy.org/math/algebra/sequences/constructing-arithmetic-sequences/a/writing-recursive-formulas-for-arithmetic-sequences)