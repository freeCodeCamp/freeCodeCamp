---
title: Python Abs Function
localeTitle: Função Abs em Python
---

`abs()` é uma função que já vem incorporada em Python 3. Ela é utilizada para calcular o [valor absoluto](https://pt.wikipedia.org/wiki/Valor_absoluto) de um número, ou seja, se temos o número 938, o valor absoluto do primeiro digito é 9, do segundo 3 e do terceiro 8. Em poucas palavras, o valor absoluto é o valor do número sozinho, desconsiderando a sua posição (centesimal, decimal ou unitária). A função leva um argumento `x`. O argumento pode até ser um [número complexo](https://docs.python.org/3.0/library/cmath.html) e, nesse caso, seu [módulo](http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf) é retornado.

## Argumento

A função abs () leva apenas um argumento `x`, um número cujo valor absoluto deve ser retornado. Esse argumento pode ser um inteiro, um número de ponto flutuante ou um [número complexo](https://docs.python.org/3.0/library/cmath.html) e o seu [módulo](http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf).

## Valor de retorno

Se o argumento passado for um inteiro ou um número de ponto flutuante, abs () retorna o valor absoluto em inteiro ou ponto flutuante.

Caso seja um número complexo, abs () retorna a sua magnitude, calculada de acordo com a álgebra numérica complexa.

## Amostra de código

```python
# Código Python para ilustrar
# o uso da função abs ()

#ponto flutuante
print(abs(3.4))    # prints 3.4

#inteiro
print(abs(-6))     # prints 6 

#numero complexo
print(abs(3 + 4j)) # prints 5, because |3 + 4j| = 5 
```

[🚀 Run Code](https://repl.it/CL8k/0)

[Documentos oficiais](https://docs.python.org/3/library/functions.html#abs)

### Fontes

1.  [A matemática é divertida. Acesso em: 25 de outubro de 2017](https://www.mathsisfun.com/numbers/absolute-value.html)
