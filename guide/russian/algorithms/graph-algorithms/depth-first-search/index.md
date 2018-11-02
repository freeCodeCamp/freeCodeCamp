---
title: Depth First Search (DFS)
localeTitle: Глубина первого поиска (DFS)
---
## Глубина первого поиска (DFS)

Depth First Search - один из самых простых алгоритмов графа. Он пересекает график, сначала проверяя текущий узел, а затем переходя к одному из его помощников, чтобы повторить процесс. Если в текущем узле нет помощника для проверки, мы возвращаемся к его предшественнику, и процесс продолжается (перейдя к другому помощнику). Если решение найдено, поиск останавливается.

### Визуализация

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

### Реализация (C ++ 14)

\`\` \`C ++

# включают

# включают

# включают

# включают

использование пространства имен std;

класс Graph { на телевидении; // количество вершин
```
// pointer to a vector containing adjacency lists 
 vector < int > *adj; 
```

общественности: График (int v); // Конструктор
```
// function to add an edge to graph 
 void add_edge(int v, int w); 
 
 // prints dfs traversal from a given source `s` 
 void dfs(); 
 void dfs_util(int s, vector < bool> &visited); 
```

};

Graph :: Graph (int v) { это -> v = v; adj = новый вектор <int> \[v\]; }

void Graph :: add _edge (int u, int v) { adj \[u\] .push_ назад (v); // добавьте v в список u adj \[v\] .push _назад (v); // добавим u в список v (удалите этот оператор, если график направлен!) } void Graph :: dfs () { // посещаемый вектор - отслеживать посещаемые узлы во время DFS вектор <bool> посещен (v, false); // маркировка всех узлов / вершин как не посещенных for (int i = 0; i <v; i ++) если (! посещаемые \[я\]) dfs_ util (i, посещенный); } // обратите внимание на использование вызова по ссылке здесь! void Graph :: dfs\_util (int s, vector <bool> & visited) { // пометить текущий узел / вершину как посещенный \[s\] = true; // выводим его на стандартный вывод (экран) cout << s << "";
```
// traverse its adjacency list and recursively call dfs_util for all of its neighbours! 
 // (only if the neighbour has not been visited yet!) 
 for(vector < int > :: iterator itr = adj[s].begin(); itr != adj[s].end(); itr++) 
    if(!visited[*itr]) 
        dfs_util(*itr, visited); 
```

}

int main () { // создаем граф, используя класс Graph, который мы определили выше График g (4); g.add _edge (0, 1); g.add_ edge (0, 2); g.add _edge (1, 2); g.add_ edge (2, 0); g.add _edge (2, 3); g.add_ edge (3, 3);
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

# включают

# включают

# включают

использование пространства имен std;

struct Graph { на телевидении; bool \* _adj; общественности: График (int vcount); void addEdge (int u, int v); void deleteEdge (int u, int v); вектор_ _DFS (int s); void DFSUtil (int s, vector_ _& ДФС, вектор_ _и посетил); }; Graph :: Graph (int vcount) { this-> v = vcount; this-> adj = new bool_ \[vcount\]; для (int i = 0; i

void Graph :: addEdge (int u, int w) { this-> прил \[и\] \[ш\] = TRUE; this-> прил \[ш\] \[и\] = TRUE; }

void Graph :: deleteEdge (int u, int w) { this-> прил \[и\] \[ш\] = ложь; this-> прил \[ж\] \[и\] = ложь; }

void Graph :: DFSUtil (int s, vector & dfs, вектор И посетил) { посетил \[с\] = TRUE; dfs.push\_back (ы); для (int i = 0; i v; я ++) { if (this-> adj \[s\] \[i\] == true && visited \[i\] == false) Dfsutil (я, ДФС, посетил); } }

вектор Graph :: DFS (int s) { вектор посетил (this-> v); вектор ДФС; Dfsutil (s, ДФС, посетили); return dfs; } \`\` \`

#### Дополнительная информация:

[диаграммы](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[Первый поиск Breadth (BFS)](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/breadth-first-search/index.md)

[Глубина первого поиска (DFS) - Википедия](https://en.wikipedia.org/wiki/Depth-first_search)