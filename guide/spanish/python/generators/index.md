---
title: Generators
localeTitle: Generadores
---
## Generadores

Los generadores son un tipo especial de función que le permite devolver valores sin finalizar una función. Lo hace utilizando la palabra clave de `yield` . Similar a la `return` , la expresión de `yield` devolverá un valor a la persona que llama. La diferencia clave entre los dos es que el `yield` suspenderá la función, permitiendo que se devuelvan más valores en el futuro.

Los generadores son iterables por lo que se pueden usar limpiamente con bucles o cualquier otra cosa que se repita.

```python
def my_generator(): 
    yield 'hello' 
    yield 'world' 
    yield '!' 
 
 for item in my_generator(): 
    print(item) 
 
 # output: 
 # hello 
 # world 
 # ! 
```

Al igual que otros iteradores, los generadores pueden pasar a la `next` función para recuperar el siguiente elemento. Cuando un generador no tiene más valores para producir, se `StopIteration` un error de `StopIteration` .

```python
g = my_generator() 
 print(next(g)) 
 # 'hello' 
 print(next(g)) 
 # 'world' 
 print(next(g)) 
 # '!' 
 print(next(g)) 
 # Traceback (most recent call last): 
 #   File "<stdin>", line 1, in <module> 
 # StopIteration 
```

Los generadores son particularmente útiles cuando necesita crear un gran conjunto de valores pero no necesita mantenerlos todos en la memoria al mismo tiempo. Por ejemplo, si necesita imprimir el primer millón de números de fibonacci, normalmente devolverá una lista de un millón de valores e iterar sobre la lista para imprimir cada valor. Sin embargo, con un generador, puede devolver cada valor uno a la vez:

```python
def fib(n): 
    a = 1 
    b = 1 
    for i in range(n): 
        yield a 
        a, b = b, a + b 
 
 for x in fib(1000000): 
    print(x) 
```

### Más información

*   [PEP 255](https://www.python.org/dev/peps/pep-0255/)
*   [Python Wiki](https://wiki.python.org/moin/Generators)
*   [Documentación de declaración de rendimiento](https://docs.python.org/2/reference/simple_stmts.html#yield)