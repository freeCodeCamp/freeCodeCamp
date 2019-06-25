---
title: Dynamic Programming
localeTitle: Programaçao dinamica
---
## Programaçao dinamica

A Programação Dinâmica (DP) é uma técnica de programação para resolver problemas onde os cálculos de seus subproblemas se sobrepõem: você escreve seu programa de uma maneira que evita recomputar problemas já solucionados. Essa técnica, geralmente, é aplicada em conjunto com o memoization, que é uma técnica de otimização em que você armazena em cache resultados previamente calculados e retorna o resultado em cache quando o mesmo cálculo é necessário novamente.

Um exemplo com a série de Fibonacci que é definida como:

`F(N) = F(N-1) + F(N-2)`

Esta é a árvore para encontrar F (5):

![Árvore da série de Fibonacci](https://cdn-media-1.freecodecamp.org/imgr/59Rpw.png)

Para calcular F (5), será necessário calcular muitas vezes o mesmo F (i). Usando recursão:

```python
def fib(n) 
 { 
    if n <= 1: 
        return n 
    return fib(n-1) + fib(n-2); 
 } 
```

E abaixo está a solução otimizada (usando DP)

Para F (5), esta solução irá gerar as chamadas representadas na imagem acima, rodando em O (2 ^ N).

Aqui está uma solução otimizada que usa DP e memoização:

```python
lookup = {1 : 1, 2 : 1} # Create a lookup-table (a map) inizialized with the first 2 Fibonacci's numbers 
 
 def fib(n) 
 { 
    if n in lookup: # If n is already computed 
        return n # Return the previous computed solution 
    else 
        lookup[n] = fib(n-1) + fib(n-2) # Else, do the recursion. 
    return lookup[n] 
 } 
```

Armazenar em cache as soluções computadas em uma tabela de consulta e consultá-la antes da recursão permitirá que o programa tenha um tempo de execução de O (N).

#### Mais Informações:

[O que é programação dinâmica no StackOverflow?](https://stackoverflow.com/questions/1065433/what-is-dynamic-programming) [Diferença entre memoization e DP no StackOverflow](https://stackoverflow.com/questions/6184869/what-is-the-difference-between-memoization-and-dynamic-programming)