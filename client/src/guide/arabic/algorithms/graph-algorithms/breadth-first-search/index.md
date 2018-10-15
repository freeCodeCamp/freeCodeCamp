---
title: Breadth First Search (BFS)
localeTitle: نطاق البحث الأول (BFS)
---
## نطاق البحث الأول (BFS)

Breadth First Search هي واحدة من أكثر خوارزميات الرسم البياني بسيطة. يقوم بتجاوز الرسم البياني عن طريق التحقق أولاً من العقدة الحالية ثم توسيعها بإضافة خلفائها إلى المستوى التالي. يتم تكرار العملية لجميع العقد في المستوى الحالي قبل الانتقال إلى المستوى التالي. إذا تم العثور على الحل يتوقف البحث.

### تصور

![](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif)

### تقييم

تعقيد الفضاء: O (n)

تعقيد حالة الوقت أسوأ: O (n)

اكتمال بحث First على مجموعة محدودة من العقد وأفضل إذا كانت تكلفة الانتقال من عقدة إلى أخرى ثابتة.

### رمز C ++ لتنفيذ BFS

 `// Program to print BFS traversal from a given 
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
` 

#### معلومات اكثر:

[الرسوم البيانية](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[عمق البحث الأول (DFS)](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/depth-first-search/index.md)