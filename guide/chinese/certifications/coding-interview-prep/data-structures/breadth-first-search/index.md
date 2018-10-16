---
title: Breadth-First Search
localeTitle: 广度优先搜索
---
## 广度优先搜索

让我们首先定义用于实现广度优先搜索算法的`Tree`类。

```python
class Tree: 
  def __init__(self, x): 
    self.val = x 
    self.left = None 
    self.right = None 
```

广度优先搜索算法从树的根开始从一个级别移动到另一个级别。我们将为此使用`queue` 。

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

我们可以轻松修改上面的代码来打印每个节点的级别。

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

|复杂性|时间|空间| | ----- | ------ | ------ | | BFS | n | n |