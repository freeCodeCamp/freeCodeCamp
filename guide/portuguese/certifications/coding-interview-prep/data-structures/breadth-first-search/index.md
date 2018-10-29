---
title: Breadth-First Search
localeTitle: Primeira pesquisa
---
## Primeira pesquisa

Primeiro, vamos definir a classe `Tree` a ser usada para a implementação do algoritmo Breadth First Search.

```python
class Tree: 
  def __init__(self, x): 
    self.val = x 
    self.left = None 
    self.right = None 
```

O algoritmo de pesquisa de amplitude primeiro se move de um nível para outro a partir da raiz da árvore. Nós vamos fazer uso de uma `queue` para isso.

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

Podemos facilmente modificar o código acima para imprimir o nível de cada nó também.

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

| Complexidade | Tempo | Espaço | | ----- | ------ | ------ | | BFS | n | n |