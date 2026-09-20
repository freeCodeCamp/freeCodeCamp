---
id: 6895d06b5968736797c408e5
title: How Do Stacks and Queues Work?
challengeType: 19
dashedName: how-do-stacks-and-queues-work
---

# --description--

Stacks and queues are data structures commonly used in computer science.

They're linear data structures that follow specific rules for adding and removing elements.

## Stacks

Let's start with **Stacks**.

A **stack** is a Last-in, First-out (LIFO) data structure.

This means that the last element that was added to the stack is the first one to be removed.

Stacks have two ends, which we know as top and bottom.

Elements are added and removed from the top of the stack.

You can think of a stack as a pile of dishes, where you can only place dishes at the top of the pile and take dishes from the top of the pile.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-stacks-and-queues-work-1.png" alt="stack data structure visualization">

These operations of adding and removing elements have special names in this context.

Adding an element to a stack is known as a "push" operation. We say that we "push" an element onto the stack when we add it to the top of the stack.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-stacks-and-queues-work-2.png" alt="stack push operation visualization">

Removing an element from a stack is known as a "pop" operation. We say that we "pop" an element from the stack when we remove it from the top of the stack.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-stacks-and-queues-work-3.png" alt="stack pop operation visualization">

You can see that we don't really perform any operations at the bottom of the stack but we keep it there as a reference.

The time complexity of the push and pop operations is typically `O(1)`, a constant time complexity.

When you push an element onto the stack, the element is simply added to the top.

When you pop an element from the stack, the element at the top is removed.

Therefore, the time it takes to perform these operations remains constant regardless of the size of the stack.

The space complexity of the push and pop operations is usually constant `O(1)`. This means that the amount of memory required to perform these operations remains constant regardless of the size of the stack.

## Queues

Now that you know more about stacks, let's learn about **Queues**.

A queue is a First-in First-out (FIFO) linear data structure. This means that the first element added to the queue is the first one to be removed.

Queues have two ends: front and back.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-stacks-and-queues-work-4.webp" alt="queue data structure visualization">

Elements are added to the back of the queue and they are removed from the front of the queue.

You can think of a queue as a line of people waiting to pay for their groceries at the supermarket. The first person in line is the first one to go to the cash register while new people join the line at the end.

The operations of adding and removing elements have special names in the context of a queue.

Adding an element to the back of a queue is known as an "enqueue" operation.

In an enqueue operation, the new element is added to the end of the queue, becoming the end of the line.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-stacks-and-queues-work-5.png" alt="queue enqueue operation visualization">

Removing an element from the front of the queue is known as a "dequeue" operation.  
  
In the dequeue operation, the element at the front of the queue is removed, and the next element in line becomes the new front.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-stacks-and-queues-work-6.png" alt="queue dequeue operation visualization">

The time complexity of the enqueue and dequeue operations is `O(1)`, constant time. The time it takes to perform these operations remains constant, regardless of the size of the queue.

The space complexity of the enqueue and dequeue operations is usually constant `O(1)`. This means that the amount of memory required to perform these operations remains constant regardless of the size of the queue.

Stacks and queues are data structures used in computer science for organizing and managing elements. Understanding them is essential for building efficient algorithms in various programming applications.

# --questions--

## --text--

What is the primary difference between a stack and a queue?

## --answers--

Stacks are LIFO, while queues are FIFO.

---

Stacks are FIFO, while queues are LIFO.

### --feedback--

Think about the order in which elements are added and removed from each data structure.

---

Stacks are used for storing data, while queues are used for processing data.

### --feedback--

Think about the order in which elements are added and removed from each data structure.

---

There is no difference between stacks and queues.

### --feedback--

Think about the order in which elements are added and removed from each data structure.

## --video-solution--

1

## --text--

Which operation is used to add an element to a stack?

## --answers--

`push`

---

`pop`

### --feedback--

Think about the analogy of a stack of plates.

---

`enqueue`

### --feedback--

Think about the analogy of a stack of plates.

---

`dequeue`

### --feedback--

Think about the analogy of a stack of plates.

## --video-solution--

1

## --text--

Which operation is used to remove an element from a queue?

## --answers--

`push`

### --feedback--

Think about the analogy of a line of people waiting.

---

`pop`

### --feedback--

Think about the analogy of a line of people waiting.

---

`enqueue`

### --feedback--

Think about the analogy of a line of people waiting.

---

`dequeue`

## --video-solution--

4

