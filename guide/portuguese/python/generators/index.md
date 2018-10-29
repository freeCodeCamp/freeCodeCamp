---
title: Generators
localeTitle: Geradores
---
## Geradores

Geradores são um tipo especial de função que permite retornar valores sem finalizar uma função. Isso é feito usando a palavra-chave `yield` . Semelhante ao `return` , a expressão de `yield` retornará um valor para o chamador. A principal diferença entre os dois é que o `yield` suspenderá a função, permitindo que mais valores sejam retornados no futuro.

Os geradores são iteráveis ​​para que possam ser usados ​​de forma limpa com loops forícios ou qualquer outra coisa que seja iterada.

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

Como outros iteradores, os geradores podem ser passados ​​para a `next` função para recuperar o próximo item. Quando um gerador não tem mais valores para gerar, um erro `StopIteration` é gerado.

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

Os geradores são particularmente úteis quando você precisa criar um grande conjunto de valores, mas não precisa mantê-los todos na memória ao mesmo tempo. Por exemplo, se você precisar imprimir o primeiro milhão de números de fibonacci, você normalmente retornaria uma lista de um milhão de valores e iteraria na lista para imprimir cada valor. No entanto, com um gerador, você pode retornar um valor de cada vez:

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

### Mais Informações

*   [PEP 255](https://www.python.org/dev/peps/pep-0255/)
*   [Wiki Python](https://wiki.python.org/moin/Generators)
*   [Documentação da declaração de rendimento](https://docs.python.org/2/reference/simple_stmts.html#yield)