---
title: Deque
localeTitle: и
---
## Использование списка в качестве очередей

Также возможно использовать список в качестве очереди, где требуется операция FIFO («первый вход, первый выход»). Списки не эффективны как очередь при использовании добавок и всплывающих окон, поскольку она может замедляться, поскольку все элементы должны быть сдвинуты на один для каждого добавления / всплытия.

Чтобы реализовать очередь, используйте collection.deque, который был разработан для быстрого добавления и всплывания с обоих концов.

#### Пример использования

```py
from collections import deque 
 queue = deque(["January", "February", "March", "April"] ) 
 
 queue.append("May") 
 
 queue.popleft() 
 queue.popleft() 
 
 print "Spring months in the list: ", queue 
```

#### Вывод
```
Spring months in the list:  deque(['March', 'April', 'May']) 
```

#### Дополнительная информация:

Официальную документацию для `collections.deque` можно найти [здесь](https://docs.python.org/3/library/collections.html#collections.deque)