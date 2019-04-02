---
title: Breadth-First Search
localeTitle: Búsqueda de amplitud
---
## Búsqueda de amplitud

Primero definamos la clase de `Tree` que se usará para la implementación del algoritmo de búsqueda de amplitud.

```python
class Tree: 
  def __init__(self, x): 
    self.val = x 
    self.left = None 
    self.right = None 
```

El amplio primer algoritmo de búsqueda se mueve de un nivel a otro a partir de la raíz del árbol. Haremos uso de una `queue` para esto.

```python
def bfs(root_node): 
  queue = [root_node] 
 
  while queue: 
    top_element = queue.pop() 
    print("Node processed: ",top_element) 
 
    if top_element.left: 
      queue.append(top_element.left) 
 
    if top_element.right: 
      queue.append(top_element.right) 
```

Podemos modificar fácilmente el código anterior para imprimir también el nivel de cada nodo.

```python
def bfs(root_node): 
  queue = [(root_node, 0)] 
 
  while queue: 
    top_element, level = queue.pop() 
    print("Node processed: {} at level {}".format(top_element, level)) 
 
    if top_element.left: 
      queue.append((top_element.left, level + 1)) 
 
    if top_element.right: 
      queue.append((top_element.right, level + 1)) 
```

| Complejidad | Tiempo | Espacio | | ----- | ------ | ------ | | BFS | n | n |