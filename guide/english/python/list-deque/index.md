---
title: Deque
---
## Using List as Queues

It is also possible to use a list as a queue, where a FIFO ("first-in, first-out") operation is needed. Lists are not efficient
as queue while using appends and pops, as it can get slow as all elements will have to be shifted by one for each appends / pops.

To implement a queue, use collections.deque which was designed to have fast appends and pops from both ends.


#### Example Usage
```py

from collections import deque
queue = deque(["January", "February", "March", "April"] )

queue.append("May")

queue.popleft()
queue.popleft()

print "Spring months in the list: ", queue
```

#### Output
```
Spring months in the list:  deque(['March', 'April', 'May'])
```

#### More Information:
The official documentation for `collections.deque` can be found <a href='https://docs.python.org/3/library/collections.html#collections.deque' target='_blank' rel='nofollow'>here</a>

