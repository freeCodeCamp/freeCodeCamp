---
title: queue
---

## Queues

`queue` is one of the most used containers in C++. A container is a data structure that stores a collection of objects, some in order, some not. All containers have a different set of functions that allow you to access an object(s) in that collection.

`std::queue` is part of the C++ standard library (hence the prefix `std::`) and allows you to store data in First In First Out (FIFO) order. NOTE: **All objects within a queue must be of the same data type**

The data type you store within a queue goes within angle brackets next to the queue keyword. For example, if you would like to store a collection of integers the queue would be `std::queue<int> queue_name`

### Queue LIFO Explanation

`queue` allows us to push/enqueue and pop/dequeue in specific order. **Push** means inserting an object at the front of the queue. **Pop** means pulling out the "oldest" object from end of the queue. So when you push it is at the front and when you pop you extract the oldest element.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Fifo_queue.png "FIFO Queue Enqueue and Dequeue Example")

### Uses of Queue
- When data is transferred asynchronously between two processes. eg. IO Buffers, pipes,file IO etc.
- When a resource is shared among multiple consumers. Examples include CPU scheduling, Disk scheduling.
- In print spooling, documents are loaded into a buffer and afterward the printer puls them off the buffer at its own rate.

### Queue Operations

The queue container supports the following operations:   
  - push (enqueue)
  - pop (dequeue)
  - empty
  - size
  - front
  - back
  
#### Push

Allows you to inserts a new element at the end of the queue, after its current last element.

```cpp
//Push operation in Queue
#include <iostream>       // std::cout
#include <queue>          // std::queue

int main ()
{
  std::queue<int> q;

  q.push(1);    //Pushing 1 at front of the queue
  q.push(2);    //Pushing 2 at front of the queue
  
  return 0;
}
```

#### Front

Allows you to access the next element in the queue without removing it.
The next element is the "oldest" element in the queue.

```cpp
//Front operation in Queue
#include <iostream>       // std::cout
#include <queue>          // std::queue

int main ()
{
  std::queue<int> q;

  q.push(1);    //Pushing 1 at front of the queue
  q.push(2);    //Pushing 2 at front of the queue
    
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue
  
  return 0;
}
```
    
    Output:
    1
    1

#### Pop

Allows you to remove the next element in the queue, effectively reducing its size by one.
The element removed is the "oldest" element.

```cpp
//Pop operation in Queue
#include <iostream>       // std::cout
#include <queue>          // std::queue

int main ()
{
  std::queue<int> q;

  q.push(1);    //Pushing 1 at front of the queue
  q.push(2);    //Pushing 2 at front of the queue
    
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue
  q.pop();                        //Removing the oldest element 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue
  q.pop();                        //Removing the oldest element
  
  return 0;
}
```
    
    Output:
    1
    2

#### Size

Returns the number of elements in the `queue`.

```cpp
//Size operation in Queue
#include <iostream>       // std::cout
#include <queue>          // std::queue

int main ()
{
  std::queue<int> q;

  q.push(1);    //Pushing 1 at front of the queue
  q.push(2);    //Pushing 2 at front of the queue
    
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue
  
  return 0;
}

```
    
    Output:
    2
    1
    0

#### Empty

Returns whether the `queue` is empty ,i.e. whether your queue size is zero.
It returns `true` if queue's size 0 else returns `false` 

```cpp//Empty operation in Queue
#include <iostream>       // std::cout
#include <queue>          // std::stack

int main ()
{
  std::queue<int> q;

  q.push(1);
  q.push(2);
  
  while(q.empty() != true){
      std::cout<<q.front()<<'\n';
      q.pop();
  }
  
  std::cout<<"Out of loop"<<'\n';
  return 0;
}
```
    
    Output:
    1
    2
    Out of loop

#### Back

Allows you to access the last element in the queue without removing it.
The next element is the "newest" element in the queue.

```cpp
//Back operation in Queue
#include <iostream>       // std::cout
#include <queue>          // std::queue

int main ()
{
  std::queue<int> q;

  q.push(1);    //Pushing 1 at front of the queue
  q.push(2);    //Pushing 2 at front of the queue
    
  std::cout<<q.back()<<'\n';     //Accessing the back of the queue
  std::cout<<q.back()<<'\n';     //Accessing the back of the queue
  
  return 0;
}
```
    
    Output:
    2
    2
    

### For More Resources:
http://www.cplusplus.com/reference/queue/queue/

### Citations:
Image Courtesy: https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics) 






