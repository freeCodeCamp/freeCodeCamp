---
title: Python Powxy
localeTitle: Python Powxy
---
`pow(x, y, z)` é uma função embutida no Python 3 para calcular `x` para o poder `y` , e se `z` estiver presente, retorna `x` para o poder `y` [módulo](https://processing.org/reference/modulo.html) `z` .

## Argumentos

Os argumentos devem ter tipos numéricos. Essa função recebe dois argumentos, `x` e `y` , bem como três, `x` , `y` e `z` . Se `z` estiver presente, `x` e `y` devem ser de tipos inteiros e y deve ser não negativo.

## Retorna

Se `z` estiver presente, ele retornará `x` para o poder `y` módulo `z` . Se apenas `x` e `y` estiverem presentes, ele retornará `x` para o poder `y` (o mesmo que `x**y` ).

## Exemplo

```python
print(pow(2,4))    # prints 16 
 print(pow(10,-2))  # prints 0.01 
 print(pow(4,3,5))  # prints 4 
```

[🚀 Código de execução](https://repl.it/CTGi)

[Documentação Oficial](https://docs.python.org/3/library/functions.html#pow)