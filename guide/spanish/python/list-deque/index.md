---
title: Deque
localeTitle: y
---
## Usando la lista como colas

También es posible utilizar una lista como una cola, donde se necesita una operación FIFO ("primero en entrar, primero en salir"). Las listas no son eficientes como cola mientras se usan los apéndices y las ventanas emergentes, ya que puede ir más lento, ya que todos los elementos tendrán que desplazarse en uno para cada una de las partes adicionales.

Para implementar una cola, use collections.deque, que fue diseñado para tener apéndices y pops rápidos desde ambos extremos.

#### Ejemplo de uso

```py
from collections import deque 
 queue = deque(["January", "February", "March", "April"] ) 
 
 queue.append("May") 
 
 queue.popleft() 
 queue.popleft() 
 
 print "Spring months in the list: ", queue 
```

#### Salida
```
Spring months in the list:  deque(['March', 'April', 'May']) 
```

#### Más información:

La documentación oficial de `collections.deque` se puede encontrar [aquí.](https://docs.python.org/3/library/collections.html#collections.deque)