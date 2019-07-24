---
title: Red Black Trees
---
## Red Black Trees

Red-Black Tree is a self-balancing Binary Search Tree (BST) where every node follows following rules.

1. Every node has two children, colored either red or black.
2. Every tree leaf node is always black.
3. Every red node has both of its children colored black.
4. There are no two adjacent red nodes (A red node cannot have a red parent or red child).
5. Every path from root to a tree leaf node has the same number of black nodes (called "black height").

Reference-style: 
![alt text][fibonacci]

[fibonacci]: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Fibonacci_Tree_as_Red-Black_Tree.svg/2000px-Fibonacci_Tree_as_Red-Black_Tree.svg.png "Fibonacci example of red black trees"

### Why Red-Black Trees?
Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. The cost of these operations may become O(n) for a skewed Binary tree. If we make sure that height of the tree remains O(Logn) after every insertion and deletion, then we can guarantee an upper bound of O(Logn) for all these operations. The height of a Red Black tree is always O(Logn) where n is the number of nodes in the tree.

### Inserting into Red-Black Trees
A node is initially inserted into a Red-Black Tree just like any Binary Search Tree. The new node is then given a color of red. After that node has been inserted, the tree must be validated to ensure none of the five properties have been violated. If a property has been violated, there are three potential cases requiring either a left-rotation, right-rotation, and/or a recoloring of the nodes. The cases are dependent on the "uncle" of the current node. Specifically, whether the "uncle" node is black or red. For more info on inserting, the three cases can be found [here](https://www.geeksforgeeks.org/red-black-tree-set-2-insert/).

### Comparison with AVL Tree
The AVL trees are more balanced compared to Red Black Trees, but they may cause more rotations during insertion and deletion. So if your application involves many frequent insertions and deletions, then Red Black trees should be preferred. And if the insertions and deletions are less frequent and search is more frequent operation, then AVL tree should be preferred over Red Black Tree.

### Left-Leaning Red–Black Tree
A left-leaning red–black (LLRB) tree is a type of self-balancing binary search tree. It is a variant of the red–black tree and guarantees the same asymptotic complexity for operations, but is designed to be easier to implement.

### Properties of Left Leaning Red-Black Trees
All of the red-black tree algorithms that have been proposed are characterized by a worst-case search time bounded by a small constant multiple of log N in a tree of N keys, and the behavior observed in practice is typically that same multiple faster than the worst-case bound, close to the optimal log N nodes examined that would be observed in a perfectly balanced tree.

Specifically, in a left-leaning red-black 2-3 tree built from N random keys:
->A random successful search examines log2 N − 0.5 nodes.
->The average tree height is about 2 log2 N

### Java Implementation

##### Class Node.java:

```java
public class Node {

    private int data, color; //0 - red, 1 - black
    private Node left, right, parent;

    public Node(int data) {
        this.data = data;
        left = right = parent = null;
        color = 0;
    }

    public int getData() {
        return data;
    }

    public void setData(int data) {
        this.data = data;
    }

    public Node getLeft() {
        return left;
    }

    public void setLeft(Node left) {
        this.left = left;
    }

    public Node getRight() {
        return right;
    }

    public void setRight(Node right) {
        this.right = right;
    }

    public Node getParent() {
        return parent;
    }

    public void setParent(Node parent) {
        this.parent = parent;
    }

    public int getColor() {
        return color;
    }

    public void setColor(int color) {
        this.color = color;
    }
}
```

##### Class RedBlackTree.java:

```java
package akopensource.rbtrees;

public class RedBlackTree {
    private Node root;
    private Node nil = new Node(-404);

    public RedBlackTree(Node root) {
        this.root = root;
    }

    public RedBlackTree(int data) {
        nil.setColor(1);
        root = new Node(data);
        root.setParent(nil);
        root.setRight(nil);
        root.setLeft(nil);
        root.setColor(1);
    }

    public RedBlackTree(){
        nil.setColor(1);
        this.root = nil;
    }

    public Node search(int data){
        return search(data, this.root);
    }

    private Node search(int data, Node node){
        if (node == nil || node.getData() == data)
            return node;
        if (data < node.getData())
            return search(data, node.getLeft());
        return search(data, node.getRight());
    }

    public void insert(int data){
        Node z = new Node(data);
        z.setLeft(nil);
        z.setRight(nil);
        z.setParent(nil);

        Node node = this.root, n = nil;
        while (node != nil){
            n = node; // get leaf node
            if(z.getData() < node.getData())
                node = node.getLeft();
            else
                node = node.getRight();
        }
        z.setParent(n);
        if(n==nil)
            this.root = z;
        else if(z.getData() < n.getData())
            n.setLeft(z);
        else
            n.setRight(z);

        insertFixup(z);
    }

    private void insertFixup(Node z) {
        while (z.getParent().getColor() == 0){
            if(z.getParent() == z.getParent().getParent().getLeft()){
                Node uncle = z.getParent().getParent().getRight();
                if (uncle.getColor() == 0){ // case 1
                    uncle.setColor(1);
                    z.getParent().setColor(1);
                    z.getParent().getParent().setColor(0);
                    z = z.getParent().getParent();
                } else {
                    if (z == z.getParent().getRight()) {
                        z = z.getParent();
                        rotateLeft(z);
                    }
                    z.getParent().setColor(1);
                    z.getParent().getParent().setColor(0);
                    rotateRight(z.getParent().getParent());
                }
            }
            else{
                Node uncle = z.getParent().getParent().getLeft();
                if(uncle.getColor() == 0){
                    uncle.setColor(1);
                    z.getParent().setColor(1);
                    z.getParent().getParent().setColor(0);
                    z = z.getParent().getParent();
                } else {
                    if (z == z.getParent().getLeft()) {
                        z = z.getParent();
                        rotateRight(z);
                    }
                    z.getParent().setColor(1);
                    z.getParent().getParent().setColor(0);
                    rotateLeft(z.getParent().getParent());
                }
            }
        }
        root.setColor(1);
    }

    private void rotateLeft(Node x){
        Node y = x.getRight();

        x.setRight(y.getLeft());
        y.getLeft().setParent(x);

        y.setParent(x.getParent());
        if(x == root)
            root = y;
        else if (x == x.getParent().getLeft())
            x.getParent().setLeft(y);
        else x.getParent().setRight(y);

        y.setLeft(x);
        x.setParent(y);
    }

    private void rotateRight(Node x){
        Node y = x.getLeft();

        x.setLeft(y.getRight());
        y.getRight().setParent(x);

        y.setParent(x.getParent());
        if(x == root)
            root = y;
        else if(x == x.getParent().getLeft())
            x.getParent().setLeft(y);
        else x.getParent().setRight(y);

        y.setRight(x);
        x.setParent(y);
    }


    private void transplant(Node u, Node v){
        if (u.getParent() == nil)
            this.root = v;
        else if (u == u.getParent().getLeft())
            u.getParent().setLeft(v);
        else u.getParent().setRight(v);
        v.setParent(u.getParent());
    }

    public void delete(int data){
        Node target = search(data);
        Node y = target, x;
        int yOriginalColor = y.getColor();
        if (target.getLeft() == nil){
            x = target.getRight();
            transplant(target, target.getRight());
        } else if (target.getRight() == nil){
            x = target.getLeft();
            transplant(target, target.getLeft());
        } else {
            y = findMinimum(target.getRight());
            yOriginalColor = y.getColor();
            x = y.getRight();

            if (y.getParent() == target) {
                x.setParent(y);
            }
            else {
                transplant(y, y.getRight());
                y.setRight(target.getRight());
                y.getRight().setParent(y);
            }
            transplant(target,y);
            y.setLeft(target.getLeft());
            y.getLeft().setParent(y);
            y.setColor(target.getColor());
        }
        if (yOriginalColor == 1) {
            deleteFixup(x);
        }
    }

    private void deleteFixup(Node x) {
        Node sibling;
        while (x != this.root && x.getColor() == 1){
            if (x == x.getParent().getLeft()){
                sibling = x.getParent().getRight();
                if (sibling.getColor() == 0){
                    sibling.setColor(1);
                    x.getParent().setColor(0);
                    rotateLeft(x.getParent());
                    sibling = x.getParent().getRight();
                }
                if (sibling.getLeft().getColor() == 1  && sibling.getRight().getColor() == 1) {
                    sibling.setColor(0);
                    x = x.getParent();
                } else {
                    if (sibling.getRight().getColor() == 1) {
                        sibling.getLeft().setColor(1);
                        sibling.setColor(0);
                        rotateRight(sibling);
                        sibling = x.getParent().getRight();
                    }
                    sibling.setColor(x.getParent().getColor());
                    x.getParent().setColor(1);
                    sibling.getRight().setColor(1);
                    rotateLeft(x.getParent());
                    x = this.root;
                }
            } else {
                sibling = x.getParent().getLeft();
                if (sibling.getColor() == 0){
                    sibling.setColor(1);
                    x.getParent().setColor(0);
                    rotateRight(x.getParent());
                    sibling = x.getParent().getLeft();
                }
                if (sibling.getLeft().getColor() == 1 && sibling.getRight().getColor() == 1){
                    sibling.setColor(0);
                    x = x.getParent();
                } else {
                    if (sibling.getLeft().getColor() == 1) {
                        sibling.getRight().setColor(1);
                        sibling.setColor(0);
                        rotateLeft(sibling);
                        sibling = x.getParent().getLeft();
                    }
                    sibling.setColor(x.getParent().getColor());
                    x.getParent().setColor(1);
                    sibling.getLeft().setColor(1);
                    rotateRight(x.getParent());
                    x = this.root;
                }
            }
        }
        x.setColor(1);
    }

    public Node findMinimum(){
        return findMinimum(this.root);
    }

    private Node findMinimum(Node rootNode){
        while (rootNode.getLeft() != nil)
            rootNode = rootNode.getLeft();
        return rootNode;
    }

    private Node getSuccessor(Node x){
        if (x.getRight() != nil)
            return findMinimum(x.getRight());
        Node parent = x.getParent();
        while (parent != nil && x == parent.getRight()){
            x = parent;
            parent = parent.getParent();
        }
        return parent;
    }

    public Node getRoot() {
        return root;
    }

    public void setRoot(Node root) {
        this.root = root;
    }
    public void traverseInorder (Node rootNode){
        if(rootNode != nil){
            traverseInorder(rootNode.getLeft());
            System.out.println(rootNode.getData() + " color " + rootNode.getColor());
            traverseInorder(rootNode.getRight());
        }
    }
}
```

- Note: most of this code is brought from "Introduction to Algorithms" book written by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein.

#### More Information:
* [Video from Algorithms and Data Structures](https://www.youtube.com/watch?v=2Ae0D6EXBV4)
