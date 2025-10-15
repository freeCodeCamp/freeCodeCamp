---
id: 6895d06b5968736797c408e6
title: How Do Singly Linked Lists Work and How Do They Differ From Doubly Linked List?
challengeType: 19
dashedName: how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list
---

# --description--

A **linked list** is a linear data structure in which each node is connected to the next node in the sequence.

These connections create a data structure that looks like a chain of nodes, where each node stores data and a reference to the next node in the linked list.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list-1.png" alt="linked list basic structure visualization">

We use these references to go from the first node to the next node and so on.

Linked lists are commonly used for implementing other data structures, such as stacks, queues, and deques. They can also be used to implement essential graph algorithms, such as depth-first search and breadth-first search.

## Singly Linked Lists

A **singly linked list** is a type of linked list in which each node is connected to the next node in the sequence.

Each node is connected to the next one by storing a reference to it.

This single reference per node allows you to traverse the linked list in one direction, from start to end.

The search can only move forward, not backwards.

In this example, you would start at the head node, node A.

The **head** node is the first node in the linked list.

In a singly linked list, the head node is usually the only node that is directly accessible. This is where the search process will start when you're trying to find a specific node.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list-2.webp" alt="singly linked list traversal visualization">

The process will start at node A, then it will continue to node B, then node C, and finally node D, the **tail** node. It may also stop before that if you implement specific logic in your code.

The **tail** node is the last node. It's used to determine when the process has reached the end of the linked list.

### **Inserting Nodes**

One of the great things about linked lists is that they do not have a fixed size. They can be expanded or shrunk as needed by simply updating the connections between the nodes.

You can **insert** a node at the start, middle, and end of a linked list.

Linked lists don't necessarily need to store the nodes in a specific order. The order will be determined by the connections between the nodes.

However, if you do need to keep the nodes in a specific order for your particular use case, you can do so by implementing that logic in your code and the criteria you implement will determine if the node is inserted at the start, middle, or end.

To insert a node at the start of the linked list, you just need to create a connection between the new node and the node that used to be the head node and make the new node the head node instead.

This is an example, where we insert node E at the start and make this new node the head node of the linked list.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list-3.png" alt="singly linked list insert at beginning visualization">

Inserting a node at the beginning of the linked list has a constant time complexity `O(1)` because it only requires updating the reference to the head node and the connection between the new head node and the next node in the sequence.

In this example, we are inserting node E at the start of the linked list. This will work correctly. But if we wanted to keep the linked list sorted in alphabetical order, node E would have to be inserted at the end of the linked list instead.

To insert a node at the end of the linked list, first you need to reach the end and then add a connection to the new node to make it the new tail node.

This operation has linear time complexity, `O(n)`, where n is the number of nodes stored in the linked list, because first you need to reach the end of the linked list to make the insertion and this would require going from one node to the next and so on until the end is reached.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list-4.png" alt="singly linked list insert at end visualization">

If the node has to be inserted somewhere in the middle of the linked list, the connections between the nodes will have to be updated too. The previous node in the sequence should be connected to the new node and the new node should be connected to the next node, like in the following diagram.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list-5.webp" alt="singly linked list insert in middle visualization">

The insertion operation has a constant space complexity `O(1)`, since inserting a new node only requires creating it and updating the connections between the nodes. This operation doesn't depend on the size of the linked list itself.

### **Removing Nodes**

Just as you can insert nodes, you can also remove them from the start, middle, and end of the linked list.

To remove a node from the start, you need to update the reference to the head node, which should be the next node in the sequence.

This operation has a constant time complexity `O(1)`, because it only requires updating the linked list's reference to the head node.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list-6.png" alt="singly linked list remove from beginning visualization">

To remove a node from the middle of the linked list, you need to update the reference of the previous node to connect it to the next node in the sequence, forming a sort of "bridge" between them, as you can see in this diagram.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list-7.png" alt="singly linked list remove from middle visualization">

That will remove the node that you want to remove, in this case node B, from the sequence of connections, so it won't be reached the next time you traverse it.

To remove a node from the end of the linked list, you need to remove the connection of the previous node and make this node the new tail node. Now the linked list will end at the new tail node.

This operation has a linear time complexity `O(n)`, because first you have to reach the end of the linked list.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list-8.png" alt="singly linked list remove from end visualization">

The deletion operation has a constant space complexity `O(1)`, because no additional memory is required to delete a node.

## Doubly Linked Lists

Now that you know more about singly linked lists, let's talk about doubly linked lists.

In a **doubly linked list**, each node stores two references: a reference to the next node and a reference to the previous node in the sequence.

This means that doubly linked lists can be traversed in both directions.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-singly-linked-lists-work-and-how-do-they-differ-from-doubly-linked-list-9.webp" alt="doubly linked list structure visualization">

In this type of linked list, it's also common to keep a reference to the tail node in the linked list itself to start the traversal from the end if necessary.

That sounds great, right? They're more flexible than singly linked lists.

However, doubly linked lists do require more memory than singly linked lists because each node stores **two** references instead of one.

This is something that you should keep in mind when you're choosing the right data structure for your project.

There **is** a tradeoff.

The insertion and deletion operations work exactly the same. The only difference is that now you will need to update two references per node and keep track of the reference to the tail node to insert elements at the end of the doubly linked list very efficiently and start the traversal process from the back, if necessary.

Singly and doubly linked lists are essential data structures in computer science used for storing and manipulating elements in a sequential order. Understanding their differences is essential for choosing the right one for your specific application.

# --questions--

## --text--

What is a linked list?

## --answers--

A data structure that stores elements in a contiguous block of memory.

### --feedback--

Think about how nodes are connected in a linked list.

---

A data structure where nodes are connected using references.

---

A data structure that is always sorted.

### --feedback--

Think about how nodes are connected in a linked list.

---

A data structure that has a fixed size.

### --feedback--

Think about how nodes are connected in a linked list.

## --video-solution--

2

## --text--

What is the difference between a singly linked list and a doubly linked list?

## --answers--

Singly linked lists have a head and tail node, while doubly linked lists do not.

### --feedback--

Think about the references contained in each type of linked list.

---

Singly linked lists can only be traversed in one direction, while doubly linked lists can be traversed in both directions.

---

Singly linked lists are more efficient to insert elements at the end, while doubly linked lists are more efficient to insert elements at the beginning.

### --feedback--

Think about the references contained in each type of linked list.

---

Singly linked lists require more memory than doubly linked lists.

### --feedback--

Think about the references contained in each type of linked list.

## --video-solution--

2

## --text--

What is the time complexity of inserting a node at the beginning of a singly linked list?

## --answers--

`O(1)`

---

`O(n)`

### --feedback--

Think about the number of operations required to insert a node at the beginning of the linked list.

---

`O(n^2)`

### --feedback--

Think about the number of operations required to insert a node at the beginning of the linked list.

---

`O(log n)`

### --feedback--

Think about the number of operations required to insert a node at the beginning of the linked list.

## --video-solution--

1

