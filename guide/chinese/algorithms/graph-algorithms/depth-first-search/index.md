---
title: Depth First Search (DFS)
localeTitle: 深度优先搜索（DFS）
---
## 深度优先搜索（DFS）

深度优先搜索是最简单的图算法之一。它通过首先检查当前节点然后移动到其中一个成员来重复该过程来遍历图形。如果当前节点没有要检查的进程，我们将返回其前身并继续进程（通过移动到另一个进程）。如果找到解决方案，搜索将停止。

### 可视化

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

### 实现（C ++ 14）

\`\`\`C ++

# 包括

# 包括

# 包括

# 包括

使用命名空间std;

class Graph { int v; //顶点数
```
// pointer to a vector containing adjacency lists 
 vector < int > *adj; 
```

上市： 图（int v）; //构造函数
```
// function to add an edge to graph 
 void add_edge(int v, int w); 
 
 // prints dfs traversal from a given source `s` 
 void dfs(); 
 void dfs_util(int s, vector < bool> &visited); 
```

};

Graph :: Graph（int v）{ 这 - > v = v; adj = new vector <int> \[v\]; }

void Graph :: add _edge（int u，int v）{ adj \[u\] .push_ back（v）; //将v添加到你的列表中 adj \[v\] .push _back（v）; //将你添加到v的列表中（如果图表被定向，则删除此语句！） } void Graph :: dfs（）{ //访问过的向量 - 跟踪DFS期间访问的节点 vector <bool> visit（v，false）; //将所有节点/顶点标记为未访问 for（int i = 0; i <v; i ++） 如果（！参观\[1\]） dfs_ util（i，visited）; } //注意这里使用call-by-reference的用法！ void Graph :: dfs\_util（int s，vector <bool>＆visited）{ //将当前节点/顶点标记为已访问 访问过\[s\] =真; //将其输出到标准输出（屏幕） cout << s <<“”;
```
// traverse its adjacency list and recursively call dfs_util for all of its neighbours! 
 // (only if the neighbour has not been visited yet!) 
 for(vector < int > :: iterator itr = adj[s].begin(); itr != adj[s].end(); itr++) 
    if(!visited[*itr]) 
        dfs_util(*itr, visited); 
```

}

int main（） { //使用我们上面定义的Graph类创建图形 图g（4）; g.add _edge（0,1）; g.add_ edge（0,2）; g.add _edge（1,2）; g.add_ edge（2,0）; g.add _edge（2,3）; g.add_ edge（3,3）;
```
cout << "Following is the Depth First Traversal of the provided graph" 
     << "(starting from vertex 0): "; 
 g.dfs(); 
 // output would be: 0 1 2 3 
 return 0; 
```

}
```
### Evaluation 
 
 Space Complexity: O(n) 
 
 Worse Case Time Complexity: O(n) 
 Depth First Search is complete on a finite set of nodes. I works better on shallow trees. 
 
 ### Implementation of DFS in C++ 
```

C ++

# 包括

# 包括

# 包括

使用命名空间std;

struct Graph { int v; bool \* _adj; 上市： Graph（int vcount）; void addEdge（int u，int v）; void deleteEdge（int u，int v）; 向量_ _DFS（int s）; void DFSUtil（int s，vector_ _＆DFS，矢量_ _＆访问）; }; Graph :: Graph（int vcount）{ this-> v = vcount; this-> adj = new bool_ \[vcount\]; for（int i = 0; i

void Graph :: addEdge（int u，int w）{ 这 - >形容词\[U\] \[W\] = TRUE; 这 - >形容词\[W\] \[U\] = TRUE; }

void Graph :: deleteEdge（int u，int w）{ 这 - >形容词\[U\] \[W\] = FALSE; 这 - >形容词\[W\] \[U\] = FALSE; }

void Graph :: DFSUtil（int s，vector ＆dfs，矢量 ＆访问）{ 访问了\[S\] = TRUE; dfs.push\_back（一个或多个）; for（int i = 0; i V;我++）{ if（this-> adj \[s\] \[i\] == true && visited \[i\] == false） DFSUtil（I，DFS，访问）; } }

向量 Graph :: DFS（int s）{ 向量访问（这 - > v）的; 向量 DFS; DFSUtil（S，DFS，访问）; return dfs; } \`\`\`

#### 更多信息：

[图表](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[广度优先搜索（BFS）](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/breadth-first-search/index.md)

[深度优先搜索（DFS） - 维基百科](https://en.wikipedia.org/wiki/Depth-first_search)