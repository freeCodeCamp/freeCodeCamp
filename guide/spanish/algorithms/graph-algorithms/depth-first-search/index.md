---
title: Depth First Search (DFS)
localeTitle: Primera búsqueda de profundidad (DFS)
---
## Primera búsqueda de profundidad (DFS)

Depth First Search es uno de los algoritmos gráficos más simples. Atraviesa el gráfico, primero verifica el nodo actual y luego se mueve a uno de sus sucesores para repetir el proceso. Si el nodo actual no tiene un sucesor para verificar, volvemos a su predecesor y el proceso continúa (al pasar a otro sucesor). Si se encuentra la solución, la búsqueda se detiene.

### Visualización

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

### Implementación (C ++ 14)

\`\` \`c ++

# incluir

# incluir

# incluir

# incluir

utilizando namespace std;

clase grafica { En televisión; // número de vértices
```
// pointer to a vector containing adjacency lists 
 vector < int > *adj; 
```

público: Gráfico (int v); // Constructor
```
// function to add an edge to graph 
 void add_edge(int v, int w); 
 
 // prints dfs traversal from a given source `s` 
 void dfs(); 
 void dfs_util(int s, vector < bool> &visited); 
```

};

Graph :: Graph (int v) { esto -> v = v; adj = nuevo vector <int> \[v\]; }

void Graph :: add _edge (int u, int v) { adj \[u\]. empujar_ hacia atrás (v); // agregar v a la lista de u adj \[v\] .push _atrás (v); // agregar u a la lista de v (elimine esta declaración si se dirige el gráfico) } Gráfica de vacío: dfs () { // vector visitado - para realizar un seguimiento de los nodos visitados durante DFS vector <bool> visitado (v, falso); // marcando todos los nodos / vértices como no visitados para (int i = 0; i <v; i ++) si (! visitó \[i\]) dfs_ util (i, visitó); } // ¡note el uso de llamada por referencia aquí! void Graph :: dfs\_util (int s, vector <bool> & visited) { // marca el nodo / vértice actual como visitado visitó \[s\] = verdadero; // salida a la salida estándar (pantalla) cout << s << "";
```
// traverse its adjacency list and recursively call dfs_util for all of its neighbours! 
 // (only if the neighbour has not been visited yet!) 
 for(vector < int > :: iterator itr = adj[s].begin(); itr != adj[s].end(); itr++) 
    if(!visited[*itr]) 
        dfs_util(*itr, visited); 
```

}

int main () { // crear un gráfico utilizando la clase de gráfico que definimos anteriormente Gráfica g (4); _borde_ g.add _(0, 1);_ borde _g.add_ (0, 2); g.add _borde (1, 2);_ borde _g.add_ (2, 0); g.add _borde (2, 3); g.add_ borde (3, 3);
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

c ++

# incluir

# incluir

# incluir

utilizando namespace std;

struct Graph { En televisión; bool \* _adj; público: Gráfico (int vcount); void addEdge (int u, int v); void deleteEdge (int u, int v); vector_ _DFS (int s); void DFSUtil (int s, vector_ _& dfs, vector_ _&visitó); }; Graph :: Graph (int vcount) { esto-> v = vcount; this-> adj = new bool_ \[vcount\]; para (int i = 0; i

void Graph :: addEdge (int u, int w) { this-> adj \[u\] \[w\] = true; this-> adj \[w\] \[u\] = true; }

void Graph :: deleteEdge (int u, int w) { esto-> adj \[u\] \[w\] = falso; esto-> adj \[w\] \[u\] = falso; }

Void Graph :: DFSUtil (int s, vector & dfs, vector &visitó){ visitó \[s\] = verdadero; dfs.push\_back (s); para (int i = 0; i v; i ++) { if (this-> adj \[s\] \[i\] == true && visitó \[i\] == false) DFSUtil (i, dfs, visitó); } }

vector Graph :: DFS (int s) { vector visitado (this-> v); vector dfs; DFSUtil (s, dfs, visitó); devuelve dfs; } \`\` \`

#### Más información:

[Graficas](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[Primera búsqueda de amplitud (BFS)](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/breadth-first-search/index.md)

[Primera búsqueda en profundidad (DFS) - Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)