---
title: Searching Linked Lists Versus Arrays
---
## Searching Linked Lists Versus Arrays
Suppose you have to search for an element in an *unsorted* linked list and array. In that case, you need to do a linear search (remember, unsorted). Doing a linear search for an element in either data structure will be an O(n) operation.

Now if you have a *sorted* linked list and array, you can still search in both the data structures in O(log n) time using Binary Search. Although, it will be a bit tedious to code while using linked lists.

Linked lists are usually preferred over arrays where insertion is a frequent operation. It's easier to insert in linked lists as only a pointer changes. But to insert in an array (the middle or beginning), you need to move all the elements after the one that you insert. Another place where you should use linked lists is where size is uncertain (you don't know the size when you are starting out), because arrays have fixed size.

Arrays do provide a few advantages over linked lists:
1. Random access
2. Less memory as compared to linked lists
3. Arrays have better cache locality thus providing better performance

It completely depends on the use case for whether arrays or linked lists are better.

### More Information:
- A Programmer's Approach of Looking at Linked List vs Array: <a href='http://www.geeksforgeeks.org/programmers-approach-looking-array-vs-linked-list/' target='_blank' rel='nofollow'>Geeks for Geeks</a>
