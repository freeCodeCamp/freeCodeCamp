---
title: Binary Search Trees
---
## Binary Search Trees
![Binary Search Tree](https://cdn-images-1.medium.com/max/1320/0*x5o1G1UpM1RfLpyx.png)

A tree is a data structure composed of nodes that has the following characteristics:
1. Each tree has a root node (at the top) - containing some value (can be any datatype).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes, and so on. This creates a subtree in the tree. Every node has its own subtree made up of its children and their children, etc. This means that every node on its own can be a tree.

A binary search tree (BST) adds these two characteristics:
1. Each node has a maximum of up to two children.
2. For each node, the values of its left descendent nodes are less than that of the current node, which in turn is less than the right descendent nodes (if any).


The BST is built up on the idea of the <a href='https://guide.freecodecamp.org/algorithms/search-algorithms/binary-search' targer='_blank' rel='nofollow'>binary search</a> algorithm, which allows for fast lookup, insertion and removal of nodes. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree, `O(log n)`. However, some times the worst case can happen, when the tree isn't balanced and the time complexity is `O(n)` for all three of these functions. That is why self-balancing trees (AVL, red-black, etc.) are a lot more effective than the basic BST.


**Worst case scenario example:** This can happen when you keep adding nodes that are *always* larger than the node before (its parent), the same can happen when you always add nodes with values lower than their parents.

### Basic operations on a BST
- Create: creates an empty tree.
- Insert: insert a node in the tree.
- Search: Searches for a node in the tree.
- Delete: deletes a node from the tree.

#### Create
Initially an empty tree without any nodes is created. The variable/identifier which must point to the root node is initialized with a `NULL` value.

#### Search
You always start searching the tree at the root node and go down from there. You compare the data in each node with the one you are looking for. If the compared node doesn't match then you either proceed to the right child or the left child, which depends on the outcome of the following comparison: If the node that you are searching for is lower than the one you were comparing it with, you proceed to to the left child, otherwise (if it's larger) you go to the right child. Why? Because the BST is structured (as per its definition), that the right child is always larger than the parent and the left child is always lesser.

###### Breadth-first search (BFS)
Breadth first search is an algorithm used to traverse a BST. It begins at the root node and travels in a lateral manner (side to side), searching for the desired node. This type of search can be described as O(n) given that each node is visited once and the size of the tree directly correlates to the length of the search.

###### Depth-first search (DFS)
With a Depth-first search approach, we start with the root node and travel down a single branch. If the desired node is found along that branch, great, but if not, continue upwards and search unvisited nodes. This type of search also has a big O notation of O(n). 

#### Insert
It is very similar to the search function. You again start at the root of the tree and go down recursively, searching for the right place to insert our new node, in the same way as explained in the search function. If a node with the same value is already in the tree, you can choose to either insert the duplicate or not. Some trees allow duplicates, some don't. It depends on the certain implementation.

#### Deletion
There are 3 cases that can happen when you are trying to delete a node. If it has,
1. No subtree (no children): This one is the easiest one. You can simply just delete the node, without any additional actions required.
2. One subtree (one child): You have to make sure that after the node is deleted, its child is then connected to the deleted node's parent.
3. Two subtrees (two children): You have to find and replace the node you want to delete with its successor (the leftfmost node in the right subtree).

The time complexity for creating a tree is `O(1)`. The time complexity for searching, inserting or deleting a node depends on the height of the tree `h`, so the worst case is `O(h)`.

#### Predecessor of a node
Predecessors can be described as the node that would come right before the node you are currently at. To find the predecessor of the current node, look at the right-most/largest leaf node in the left subtree.

#### Successor of a node
Successors can be described as the node that would come right after the the current node. To find the successor of the current node, look at the left-most/smallest leaf node in the right subtree.

### Special types of BT
- Heap
- Red-black tree
- B-tree
- Splay tree
- N-ary tree
- Trie (Radix tree)

### Runtime
**Data structure: Array**
- Worst-case performance: `O(log n)`
- Best-case performance: `O(1)`
- Average performance: `O(log n)`
- Worst-case space complexity: `O(1)`

Where `n` is the number of nodes in the BST.

### Implementation of BST

Here's a definiton for a BST node having some data, referencing to its left and right child nodes.

```c
struct node {
   int data;
   struct node *leftChild;
   struct node *rightChild;
};
```

#### Search Operation
Whenever an element is to be searched, start searching from the root node. Then if the data is less than the key value, search for the element in the left subtree. Otherwise, search for the element in the right subtree. Follow the same algorithm for each node.

```c
struct node* search(int data){
   struct node *current = root;
   printf("Visiting elements: ");
	
   while(current->data != data){
	
      if(current != NULL) {
         printf("%d ",current->data);
			
         //go to left tree
         if(current->data > data){
            current = current->leftChild;
         }//else go to right tree
         else {                
            current = current->rightChild;
         }
			
         //not found
         if(current == NULL){
            return NULL;
         }
      }			
   }
   return current;
}
```

#### Insert Operation
Whenever an element is to be inserted, first locate its proper location. Start searching from the root node, then if the data is less than the key value, search for the empty location in the left subtree and insert the data. Otherwise, search for the empty location in the right subtree and insert the data.

```c
void insert(int data) {
   struct node *tempNode = (struct node*) malloc(sizeof(struct node));
   struct node *current;
   struct node *parent;

   tempNode->data = data;
   tempNode->leftChild = NULL;
   tempNode->rightChild = NULL;

   //if tree is empty
   if(root == NULL) {
      root = tempNode;
   } else {
      current = root;
      parent = NULL;

      while(1) {                
         parent = current;
			
         //go to left of the tree
         if(data < parent->data) {
            current = current->leftChild;                
            //insert to the left
				
            if(current == NULL) {
               parent->leftChild = tempNode;
               return;
            }
         }//go to right of the tree
         else {
            current = current->rightChild;
            
            //insert to the right
            if(current == NULL) {
               parent->rightChild = tempNode;
               return;
            }
         }
      }            
   }
}        
```
#### Delete Operation
void deleteNode(struct node* root, int data){

    if (root == NULL) root=tempnode; 

    if (data < root->key) 
        root->left = deleteNode(root->left, key); 
  

    else if (key > root->key) 
        root->right = deleteNode(root->right, key); 

    else
    { 
        if (root->left == NULL) 
        { 
            struct node *temp = root->right; 
            free(root); 
            return temp; 
        } 
        else if (root->right == NULL) 
        { 
            struct node *temp = root->left; 
            free(root); 
            return temp; 
        } 
  
        struct node* temp = minValueNode(root->right); 
 
        root->key = temp->key; 

        root->right = deleteNode(root->right, temp->key); 
    } 
    return root; 

}

Binary search trees (BSTs) also give us quick access to predecessors and successors.
  Predecessors can be described as the node that would come right before the node you are currently at.
   - To find the predecessor of the current node, look at the rightmost/largest leaf node in the left subtree.
  Successors can be described as the node that would come right after the node you are currently at.
   - To find the successor of the current node, look at the leftmost/smallest leaf node in the right subtree.

### Let's look at a couple of procedures operating on trees.
Since trees are recursively defined, it's very common to write routines that operate on trees that are themselves recursive. 

So for instance, if we want to calculate the height of a tree, that is the height of a root node, We can go ahead and recursively do that, going through the tree. So we can say:

* For instance, if we have a nil tree, then its height is a 0.
* Otherwise, We're 1 plus the maximum of the left child tree and the right child tree.
* So if we look at a leaf for example, that height would be 1 because the height of the left child is nil, is 0, and the height of the nil right child is also 0. So the max of that is 0, then 1 plus 0.
#### Height(tree) algorithm
```
if tree = nil:
    return 0
return 1 + Max(Height(tree.left),Height(tree.right))
```

#### Here is the code in C++
```
int maxDepth(struct node* node)
{
    if (node==NULL)
        return 0;
   else
   {
       int rDepth = maxDepth(node->right);
       int lDepth = maxDepth(node->left);

       if (lDepth > rDepth)
       {
           return(lDepth+1);
       }
       else
       {
            return(rDepth+1);
       }
   }
}  
```

We could also look at calculating the size of a tree that is the number of nodes.

* Again, if we have a nil tree, we have zero nodes.
* Otherwise, we have the number of nodes in the left child plus 1 for ourselves plus the number of nodes in the right child. So 1 plus the size of the left tree plus the size of the right tree.
#### Size(tree) algorithm
```
if tree = nil
    return 0
return 1 + Size(tree.left) + Size(tree.right)
```

#### Here is the code in C++
```
int treeSize(struct node* node)
{
    if (node==NULL)
        return 0;
    else
        return 1+(treeSize(node->left) + treeSize(node->right));
}
```

### Relevant videos on freeCodeCamp YouTube channel
* [Binary Search Tree](https://youtu.be/5cU1ILGy6dM)
* [Binary Search Tree: Traversal and Height](https://youtu.be/Aagf3RyK3Lw)

### Following are common types of Binary Trees:
Full Binary Tree/Strict Binary Tree: A Binary Tree is full or strict if every node has exactly 0 or 2 children.

               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40

In Full Binary Tree, number of leaf nodes is equal to number of internal nodes plus one.
 
Complete Binary Tree: A Binary Tree is complete Binary Tree if all levels are completely filled except possibly the last level and the last level has all keys as left as possible
 
               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40
     /  \   /
    8   7  9 

### Augumenting a BST

Sometimes we need to store some additional information with the traditional data structures to make our tasks easier.
For example, consider a scenario where you are supposed to find the ith smallest number in a set. You can use brute force here but we can reduce the complexity of the problem to O(lg n) by augumenting a red-black or any self-balancing tree (where n is the number of elements in the set). We can also compute rank of any element in O(lg n) time. Let us consider a case where we are augumenting a red-black tree to store the addional information needed. Besides the usual attributes, we can store number of internal nodes in the subtree rooted at x(size of the subtree rooted at x including the node itself).
Let x be any arbitary node of a tree.

x.size = x.left.size + x.right.size + 1

While augumenting the tree, we should keep in mind, that we should be able to maintain the augumented information as well as do other operations like insertion, deletion, updation in O(lg n) time.

Since, we know that the value of x.left.size will give us the number of nodes which preceed x in the inorder traversal of the tree. Thus, x.left.size + 1 is the rank of x within the subtree rooted at x.

### To read more about Augumented Search Trees
* [Augumented Search Trees](https://www.bowdoin.edu/~ltoma/teaching/cs231/fall10/Lectures/10-augmentedTrees/augtrees.pdf)
