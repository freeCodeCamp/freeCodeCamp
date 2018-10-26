---
title: Deque
localeTitle: e
---
## Usando lista como filas

Também é possível usar uma lista como uma fila, onde é necessária uma operação FIFO ("first-in, first-out"). As listas não são eficientes como fila enquanto usa o appends e pops, já que ele pode ficar lento, já que todos os elementos terão que ser alterados por um para cada appends / pops.

Para implementar uma fila, use collections.deque que foi projetado para ter anexos rápidos e pops de ambas as extremidades.

#### Exemplo de uso

```py
from collections import deque 
 queue = deque(["January", "February", "March", "April"] ) 
 
 queue.append("May") 
 
 queue.popleft() 
 queue.popleft() 
 
 print "Spring months in the list: ", queue 
```

#### Saída
```
Spring months in the list:  deque(['March', 'April', 'May']) 
```

#### Mais Informações:

A documentação oficial para `collections.deque` pode ser encontrada [aqui](https://docs.python.org/3/library/collections.html#collections.deque)