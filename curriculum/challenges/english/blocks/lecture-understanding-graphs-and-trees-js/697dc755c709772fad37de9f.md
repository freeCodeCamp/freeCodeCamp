---
id: 697dc755c709772fad37de9f
title: What Are Trees and Tries and How Do They Work?
challengeType: 19
dashedName: what-are-trees-and-tries-and-how-do-they-work
---

# --description--

Trees are very important in the world of computer science.

A **tree** is a specific type of graph.

For a graph to be classified as a tree, it must:

* Have no loops or cycles (paths where the start and end nodes are the same).
    
* Be connected (every node can be reached from every other node).
    

Trees are non-linear data structures that organize nodes in a hierarchy, where nodes may have children, siblings, and parent nodes.

The root node is the very top of a tree. It's the only node in the tree without a parent node. This is the node where you will start traversing the entire data structure, usually with algorithms like breadth-first search (BFS) or depth-first search (DFS).

This is a graphical example of a tree:

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-trees-and-tries-and-how-do-they-work-1.png" alt="A tree diagram showing a hierarchical structure with node A at the root, nodes B and C as children of A, and nodes D and E as children of C. Node B is a leaf node.">

Since nodes are organized in a hierarchy, they have relationships between them.

A **parent node** is a node that is immediately connected to other nodes below it. In the diagram, node A is the parent node of nodes B and C.

A **child node** is a node that is immediately connected to a node above it. In the diagram, node D and E are the child nodes of node C.

Nodes D and E are also classified as **leaves**. A leaf is a node that has no child nodes. You can think of them as the end of the "branches" of the tree.

Tree nodes also have important properties:

* **Depth**: the length of the path from the root to that node. For example, in the diagram, node D has depth 2 because if you start at the root, you have to go through two edges to reach it.
    
* **Height**: the length of the path from that node down to a leaf. For example, node C has a height of 1 because it's one level above the leaf nodes.
    
* **Degree:** the number of child nodes each node has. In the diagram, node B has degree 0 because it's a leaf node, so it has no child nodes. Node C has degree 2 because it has two child nodes.
    

Trees also have a **height**. The height of a tree is the height of its root node.

There are many different types of trees, including Binary Trees, Binary Search Trees, AVL trees, Red-Black Trees, and B-Trees.

## Binary Trees and Binary Search Trees

These are two of the most commonly used types of trees.

A **binary tree** is a type of tree in which each node can have at most two child nodes, a left child node and a right child node. Yes, this means that the example that you have seen so far is a binary tree!

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-trees-and-tries-and-how-do-they-work-1.png" alt="The same binary tree example highlighting that it's a binary tree, with each node having at most two children.">

A **binary search tree** is a more specific version of a binary tree, with a very particular ordering property.

To understand it, first you need to understand subtrees. A **subtree** is a section of a tree that is a tree itself.

In our tree example, nodes C, D, and E form a tree by themselves, so they are considered a subtree.

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-trees-and-tries-and-how-do-they-work-3.png" alt="A diagram highlighting a subtree within the main tree, showing nodes C, D, and E forming their own tree structure.">

The ordering property of binary search trees (BST) establishes that for every node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater than the node's value.

The left and right subtrees must also be binary search trees themselves.

This ordering makes search, insertion, and deletion operations very efficient if the tree is balanced.

A balanced tree is a tree in which the heights of the left and right subtrees of any node are very similar to make sure that operations remain efficient.

## Tries

Now that you know more about trees and binary search trees, let's dive into tries.

**Tries** are tree data structures used to store a set of strings.

Tries are also known as **prefix trees** because they are very efficient for operations that require finding strings based on their prefixes.

Each node in the trie represents a single character of a string.

The root node does not represent any particular character, so you can think of it as representing an empty string.

As you traverse the trie down from the root, the path to a node defines a specific prefix. To find a word, you follow that prefix until you reach the node with the word you are looking for.

Nodes that represent complete words are assigned end-of-word markers.

This is an example of a trie with the words "top", "tea" and "ten".

Notice how the words "tea" and "ten" share the same prefix "te", so the data structure follows the same path until the last character, which is marked as an end-of-word character. In this diagram, this is represented with a red border around the node:

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-trees-and-tries-and-how-do-they-work-4.png" alt="A trie data structure showing the words 'top', 'tea', and 'ten'. The root node branches to 't', which then branches to 'o' (leading to 'top') and 'e' (leading to 'tea' and 'ten'). End-of-word nodes are marked with red borders.">

The worst-case time complexity for the search operation is O(L), where L is the length of the string that you are looking for.

Insertion is also efficient. This operation only requires creating new nodes for the characters that don't exist in the trie yet.

The great advantage of this data structure is that when multiple strings share the same prefix, their paths overlap, so the prefix itself is only stored once.

This efficiency makes tries perfect for implementing features like autocomplete and spell checkers.

However, tries are not efficient for all sets of strings. They can be inefficient if the set of strings has many unique characters. This would require storing many unique characters as individual nodes. These nodes would have to be traversed to find the words, which would not be optimal.

Now that you are familiar with the different types of trees and what they are used for, you can start using them in real-world scenarios. Knowing how to choose the right one is a valuable skill to have when you need to tackle challenges in your daily work.

# --questions--

## --text--

Which of the following statements about a Binary Search Tree (BST) is always true?

## --answers--

All values in the left subtree of a node are less than the node's value.

---

Every node can have up to three children.

### --feedback--

Think about the specific rule that governs how numbers are organized in a Binary Search Tree (BST) to allow for efficient searching.

---

The tree is guaranteed to be perfectly balanced after every insertion.

### --feedback--

Think about the specific rule that governs how numbers are organized in a Binary Search Tree (BST) to allow for efficient searching.

---

It is a specialized tree-like structure optimized for storing strings.

### --feedback--

Think about the specific rule that governs how numbers are organized in a Binary Search Tree (BST) to allow for efficient searching.

## --video-solution--

1

## --text--

For which of the following tasks is a trie, or prefix tree most effective?

## --answers--

Finding the smallest value in a large dataset.

### --feedback--

Think about the main advantage of a trie's structure and how it's built based on characters.

---

Managing a hierarchical file system on a computer.

### --feedback--

Think about the main advantage of a trie's structure and how it's built based on characters.

---

Implementing an autocomplete feature.

---

Storing an unordered list of unique numbers.

### --feedback--

Think about the main advantage of a trie's structure and how it's built based on characters.

## --video-solution--

3

## --text--

What is the fundamental difference between a general tree and a Binary Tree?

## --answers--

A Binary Tree can only store numbers, while a general tree can store any data type.

### --feedback--

Think about the number of connections each node in a Binary Tree can have, compared to general trees.

---

A Binary Tree has a root node, but a general tree does not.

### --feedback--

Think about the number of connections each node in a Binary Tree can have, compared to general trees.

---

A Binary Tree has no parent-child relationships, unlike a general tree.

### --feedback--

Think about the number of connections each node in a Binary Tree can have, compared to general trees.

---

A Binary Tree restricts each node to a maximum of two children, while a general tree does not.

## --video-solution--

4
