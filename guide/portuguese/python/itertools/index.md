---
title: Itertools
localeTitle: Itertools
---
Itertools é um módulo python de funções que retorna geradores, objetos que só funcionam quando são iterados. Alguns exemplos de funções itertool incluem, mas não se limitam a: chain (), imap (), product () e compress ().

### cadeia()

A função chain () toma vários iteradores como argumentos e retorna um único iterador que produz o conteúdo de todos eles como se eles viessem de uma sequência.

```py
import itertools 
 list(itertools.chain([1, 2], [3, 4])) 
 
 # Output 
 # [1, 2, 3, 4] 
```

### islice ()

A função islice () retorna um iterador que retorna itens selecionados do iterador de entrada, por índice. Leva os mesmos argumentos que o operador de fatia para listas: iniciar, parar e passo. Iniciar e parar são opcionais.

```py
import itertools 
 list(itertools.islice(count(), 5)) 
 
 # Output 
 # [0,1, 2, 3, 4] 
```

### izip ()

izip () retorna um iterador que combina os elementos de vários iteradores em tuplas. Ele funciona como a função interna zip (), exceto pelo fato de retornar um iterador ao invés de uma lista.

```py
import itertools 
 list(izip([1, 2, 3], ['a', 'b', 'c'])) 
 
 # Output 
 # [(1, 'a'),(2, 'b'),(3, 'c')] 
```

Iteradores combinatórios:

Resultados dos Argumentos do Iterador produto () p, q,… \[repeat = 1\] produto cartesiano, equivalente a um loop for aninhado permutações () p \[, r\] tuplas de comprimento r, todas as ordenações possíveis, sem elementos repetidos combinações () p, r tuplas de comprimento r, em ordem de classificação, sem elementos repetidos combinações _com_ tuplas de substituição () p, r r-length, em ordem de classificação, com elementos repetidos produto ('ABCD', repetir = 2) AA AB AC AD BA BB BC BD CA CD CC CD DA DB DC DD permutações ('ABCD', 2).

combinações ('ABCD', 2) AB AC DC AD BD CD

combinações _com_ substituição ('ABCD', 2) AA AB AC DC BB BC BD CC CD DD

Fonte: https://docs.python.org/3/library/itertools.html