---
title: Red Black Trees
---
## Red Black Trees

Red-Black Tree is a self-balancing Binary Search Tree (BST) where every node follows following rules.

1. Every node has two children, colored either red or black.
2. Every tree leaf node is always black.
3. Every red node has both of its children colored black.
3. There are no two adjacent red nodes (A red node cannot have a red parent or red child).
4. Every path from root to a tree leaf node has the same number of black nodes (called "black height").

Reference-style: 
![alt text][fibonacci]

[fibonacci]: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Fibonacci_Tree_as_Red-Black_Tree.svg/2000px-Fibonacci_Tree_as_Red-Black_Tree.svg.png "Fibonacci example of red black trees"

### Why Red-Black Trees?
Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. The cost of these operations may become O(n) for a skewed Binary tree. If we make sure that height of the tree remains O(Logn) after every insertion and deletion, then we can guarantee an upper bound of O(Logn) for all these operations. The height of a Red Black tree is always O(Logn) where n is the number of nodes in the tree.

### Comparison with AVL Tree
The AVL trees are more balanced compared to Red Black Trees, but they may cause more rotations during insertion and deletion. So if your application involves many frequent insertions and deletions, then Red Black trees should be preferred. And if the insertions and deletions are less frequent and search is more frequent operation, then AVL tree should be preferred over Red Black Tree.

### Left-Leaning Red–Black Tree
A left-leaning red–black (LLRB) tree is a type of self-balancing binary search tree. It is a variant of the red–black tree and guarantees the same asymptotic complexity for operations, but is designed to be easier to implement.

### Properties of Left Leaning Red-Black Trees
All of the red-black tree algorithms that have been proposed are characterized by a worst-case search time bounded by a small constant multiple of log N in a tree of N keys, and the behavior observed in practice is typically that same multiple faster than the worst-case bound, close to the optimal log N nodes examined that would be observed in a perfectly balanced tree.

Specifically, in a left-leaning red-black 2-3 tree built from N random keys:
->A random successful search examines log2 N − 0.5 nodes.
->The average tree height is about 2 log2 N

#### More Information:
* [Video from Algorithms and Data Structures](https://www.youtube.com/watch?v=2Ae0D6EXBV4)
