---
title: Breadth-First Search
---
## Breadth-First Search

Let's first define the `Tree` class to be used for the implementation of the Breadth First Search algorithm. 

```python
class Tree:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None
```

The breadth first search algorithm moves from one level to another starting from the root of the tree. We will make use of a `queue` for this. 

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

We can easily modify the above code to print the level of each node as well.

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


| Complexity   | Time | Space |
| ----- | ------ | ------ | 
| BFS |   n    |    n   |  

