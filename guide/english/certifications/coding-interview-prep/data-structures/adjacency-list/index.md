---
title: Adjacency List
---
# Adjacency List

---
## Problem Explanation

To solve this problem, you have to create a Javascript Object to emulate an undirected graph in the form of an adjacency list.


---
## Hints

### Hint 1

Create keys with the names James, Jill, Jenny and Jeff.


### Hint 2

Read the presentation and try to understand what it means to be an undirected graph.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
var undirectedAdjList = {
  James: ["Jeff"],
  Jill: ["Jenny"],
  Jenny: ["Jill", "Jeff"],
  Jeff: ["Jenny", "James"]
};
```


#### Code Explanation

*   The undirected graph is created using a Javascript Object.  Each unique name is a key and the each person who has a relationship with the name is in the unique name's array value.  e.g. if James and Jeff have a relationship, Jeff will be in James's array value and James will be in Jeff's array value.  

</details>