---
title: Breadth First Search (BFS)
localeTitle: 广度优先搜索（BFS）
---
## 广度优先搜索（BFS）

广度优先搜索是最简单的图算法之一。它首先检查当前节点，然后通过将其后继添加到下一级别来扩展它，从而遍历图形。在移动到下一级别之前，对当前级别中的所有节点重复该过程。如果找到解决方案，搜索将停止。

### 可视化

![](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif)

### 评估

空间复杂度：O（n）

更糟糕的案例时间复杂性：O（n）

广度优先搜索在有限的节点集上完成，并且如果从一个节点移动到另一个节点的成本是恒定的则是最优的。

### BFS实现的C ++代码

```cpp
// Program to print BFS traversal from a given 
 // source vertex. BFS(int s) traverses vertices 
 // reachable from s. 
 #include<iostream> 
 #include <list> 
 
 using namespace std; 
 
 // This class represents a directed graph using 
 // adjacency list representation 
 class Graph 
 { 
    int V;    // No. of vertices 
 
    // Pointer to an array containing adjacency 
    // lists 
    list<int> *adj; 
 public: 
    Graph(int V);  // Constructor 
 
    // function to add an edge to graph 
    void addEdge(int v, int w); 
 
    // prints BFS traversal from a given source s 
    void BFS(int s); 
 }; 
 
 Graph::Graph(int V) 
 { 
    this->V = V; 
    adj = new list<int>[V]; 
 } 
 
 void Graph::addEdge(int v, int w) 
 { 
    adj[v].push_back(w); // Add w to v's list. 
 } 
 
 void Graph::BFS(int s) 
 { 
    // Mark all the vertices as not visited 
    bool *visited = new bool[V]; 
    for(int i = 0; i < V; i++) 
        visited[i] = false; 
 
    // Create a queue for BFS 
    list<int> queue; 
 
    // Mark the current node as visited and enqueue it 
    visited[s] = true; 
    queue.push_back(s); 
 
    // 'i' will be used to get all adjacent 
    // vertices of a vertex 
    list<int>::iterator i; 
 
    while(!queue.empty()) 
    { 
        // Dequeue a vertex from queue and print it 
        s = queue.front(); 
        cout << s << " "; 
        queue.pop_front(); 
 
        // Get all adjacent vertices of the dequeued 
        // vertex s. If a adjacent has not been visited, 
        // then mark it visited and enqueue it 
        for (i = adj[s].begin(); i != adj[s].end(); ++i) 
        { 
            if (!visited[*i]) 
            { 
                visited[*i] = true; 
                queue.push_back(*i); 
            } 
        } 
    } 
 } 
 
 // Driver program to test methods of graph class 
 int main() 
 { 
    // Create a graph given in the above diagram 
    Graph g(4); 
    g.addEdge(0, 1); 
    g.addEdge(0, 2); 
    g.addEdge(1, 2); 
    g.addEdge(2, 0); 
    g.addEdge(2, 3); 
    g.addEdge(3, 3); 
 
    cout << "Following is Breadth First Traversal " 
         << "(starting from vertex 2) \n"; 
    g.BFS(2); 
 
    return 0; 
 } 
```

#### 更多信息：

[图表](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[深度优先搜索（DFS）](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/depth-first-search/index.md)