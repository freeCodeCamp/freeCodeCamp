---
title: Queues
---
## Queues
 
Queue is a First In First Out (FIFO) Data Structure. Many algorithms use Queues at their core for improving performance.

Queue is one of the fundamental Abstract Data Types (ADT). It is similar to queues we have in movies or supermarkets. The first person to arrive will be served first right? Similarly, the first element to be inserted will be removed first. There are several types of queues such as,

1. Simple Queue (or Queue)  
2. Circular Queue  
3. Priority Queue  
4. Dequeue (Double Ended Queue)  

If you can understand the simple queue (which from here on will be referred as 'Queue') then all the others are just as easy, with little modifications.  

Most common operations available on queue are,  
1. Add / Offer - Inserts an element into the end of the queue.  
2. Remove / Poll - Remove an element from the beginning of the queue.  
3. Peek - Returns element at the beginning of the queue but will not remove it.  
4. Size / Count - Returns the number of elements currently present in the queue.  
5. IsEmpty - Check whether the queue is empty or not.  

Implementation of a queue is possible using either arrays or linked lists. The following is a simple array implementation of the queue data structure with its most common operations.

```JavaScript  
var Queue = function() {
    var queue = [];
    var front = 0;
    var back = 0;
    return {
        isEmpty: function() {
            return front >= back || queue.length === 0;
        },
        add: function(elem) {
            /* You can also do queue.push(elem) in JavaScript. 
            This is how they do it in other languages */
            queue[back++] = elem;
        },
        remove: function() {
            if (!this.isEmpty()) {
                return queue[front++]; // or queue.shift()
            }
            else {
                throw new Error("Queue is Empty.");
            }
        },
        peek: function() {
            if (!this.isEmpty()) {
                return queue[front];
            }
        }
    }
};

var queue = new Queue();
console.log(queue.isEmpty()); // true
queue.add(1);
queue.add(2);
console.log(queue.remove()); // 1
console.log(queue.peek()); // 2
console.log(queue.remove()); // 2
console.log(queue.remove()); // exception
```  

#### Applications  

* Simulation  
* Scheduling (Job Scheduling, Disk Scheduling)  
* Shared Resource Management  
* Keyboard Buffer  
* Breadth First Search  
* To handle congestion in network  


#### More Information:

* <a href='http://www.geeksforgeeks.org/queue-data-structure/' target='_blank' rel='nofollow'>More Info on Queues - GeeksForGeeks</a>  
* <a href='https://www.hackerrank.com/domains/data-structures/queues' target='_blank' rel='nofollow'>Solve Challenges using Queues - Hackerrank</a>
* <a href="https://www.youtube.com/watch?v=wjI1WNcIntg" target ="_blank" rel="nofollow">HackerRank Stacks and Queues Video</a>

