---
title: Breadth-First Search
localeTitle: Поиск по ширине
---
## Поиск по ширине

Давайте сначала определим класс `Tree` который будет использоваться для реализации алгоритма первого поиска Breadth.

```python
class Tree: 
  def __init__(self, x): 
    self.val = x 
    self.left = None 
    self.right = None 
```

Алгоритм поиска ширины ширины перемещается с одного уровня на другой, начиная с корня дерева. Мы будем использовать для этого `queue` .

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

Мы можем легко изменить приведенный выше код, чтобы напечатать уровень каждого узла.

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

| Сложность | Время | Космос | | ----- | ------ | ------ | | BFS | n | n |