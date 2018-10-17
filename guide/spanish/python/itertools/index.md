---
title: Itertools
localeTitle: Itertools
---
Itertools es un módulo de Python con funciones que devuelven generadores, objetos que solo funcionan cuando se iteran. Algunos ejemplos de funciones de itertool incluyen pero no se limitan a: chain (), imap (), product (), y compress ().

### cadena()

La función chain () toma varios iteradores como argumentos y devuelve un único iterador que produce el contenido de todos ellos como si procedieran de una secuencia.

```py
import itertools 
 list(itertools.chain([1, 2], [3, 4])) 
 
 # Output 
 # [1, 2, 3, 4] 
```

### islice ()

La función islice () devuelve un iterador que devuelve los elementos seleccionados del iterador de entrada, por índice. Toma los mismos argumentos que el operador de división para listas: iniciar, detener y paso. El inicio y la parada son opcionales.

```py
import itertools 
 list(itertools.islice(count(), 5)) 
 
 # Output 
 # [0,1, 2, 3, 4] 
```

### izip ()

izip () devuelve un iterador que combina los elementos de varios iteradores en tuplas. Funciona como la función incorporada zip (), excepto que devuelve un iterador en lugar de una lista.

```py
import itertools 
 list(izip([1, 2, 3], ['a', 'b', 'c'])) 
 
 # Output 
 # [(1, 'a'),(2, 'b'),(3, 'c')] 
```

Los iteradores combinatorios:

Resultados de los argumentos de iterador producto () p, q, ... \[repetir = 1\] producto cartesiano, equivalente a un ciclo anidado para permutaciones () p \[, r\] tuplas de longitud r, todos los ordenamientos posibles, sin elementos repetidos combinaciones () p, r tuplas de longitud r, ordenadas, sin elementos repetidos combinaciones _con_ reemplazo () p, r tuplas de longitud r, en orden ordenado, con elementos repetidos producto ('ABCD', repetición = 2) AA AB AC AD BA BB BC BD CA CB CC CD DA DB DC DD permutaciones ('ABCD', 2) AB AC AD BA BC BD CA CB CD DA DB DC

combinaciones ('ABCD', 2) AB AC AD BC BD CD

combinaciones _con_ reemplazo ('ABCD', 2) AA AB AC AD BB BC BD CC CD DD

Fuente: https: //docs.python.org/3/library/itertools.html