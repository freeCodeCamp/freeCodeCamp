---
title: Depth First Search (DFS)
localeTitle: Primeira pesquisa de profundidade (DFS)
---
## Primeira pesquisa de profundidade (DFS)

Profundidade A primeira pesquisa é um dos algoritmos gráficos mais simples. Ele percorre o gráfico verificando primeiro o nó atual e, em seguida, movendo-se para um de seus sucessores para repetir o processo. Se o nó atual não tiver um sucessor para verificar, retornamos ao predecessor e o processo continua (mudando para outro sucessor). Se a solução for encontrada, a pesquisa será interrompida.

### Visualização

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

### Implementação (C ++ 14)

\`\` \`c ++

# incluir

# incluir

# incluir

# incluir

usando namespace std;

class Graph { na TV; // número de vértices
```
// pointer to a vector containing adjacency lists 
 vector < int > *adj; 
```

público: Gráfico (int v); // Construtor
```
// function to add an edge to graph 
 void add_edge(int v, int w); 
 
 // prints dfs traversal from a given source `s` 
 void dfs(); 
 void dfs_util(int s, vector < bool> &visited); 
```

};

Gráfico :: Gráfico (int v) { isso -> v = v; adj = novo vetor <int> \[v\]; }

void Graph :: add _edge (int u, int v) { adj \[u\] .push de_ volta (v); // adiciona v à lista de u adj \[v\] .push de _volta (v); // adicione u à lista de v (remova essa declaração se o gráfico for direcionado!) } void Graph :: dfs () { // visited vector - para acompanhar os nós visitados durante o DFS vetor <bool> visitado (v, falso); // marcando todos os nós / vértices como não visitados para (int i = 0; i <v; i ++) if (! visitou \[i\]) dfs_ util (i, visitado); } // observe o uso de chamada por referência aqui! void Graph :: dfs\_util (int s, vetor <bool> e visitado) { // marcar o nó / vértice atual como visitado visitou \[s\] = verdadeiro; // saída para a saída padrão (tela) cout << s << "";
```
// traverse its adjacency list and recursively call dfs_util for all of its neighbours! 
 // (only if the neighbour has not been visited yet!) 
 for(vector < int > :: iterator itr = adj[s].begin(); itr != adj[s].end(); itr++) 
    if(!visited[*itr]) 
        dfs_util(*itr, visited); 
```

}

int main () { // cria um gráfico usando a classe Graph que definimos acima Gráfico g (4); g.add _edge (0, 1); g.add_ edge (0, 2); g.add _edge (1, 2); g.add_ edge (2, 0); g.add _edge (2, 3); g.add_ edge (3, 3);
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

usando namespace std;

struct graph { na TV; bool \* _adj; público: Gráfico (int vcount); void addEdge (int u, int v); void deleteEdge (int u, int v); vetor_ _DFS (int s); void DFSUtil (int s, vetor_ _& dfs, vetor_ _&visitou); }; Gráfico :: Graph (int vcount) { isto-> v = vcount; this-> adj = novo bool_ \[vcount\]; para (int i = 0; i

void Graph :: addEdge (int u, int w) { this-> adj \[u\] \[w\] = verdadeiro; isto-> adj \[w\] \[u\] = verdadeiro; }

void Graph :: deleteEdge (int u, int w) { isto-> adj \[u\] \[w\] = falso; isto-> adj \[w\] \[u\] = falso; }

void Graph :: DFSUtil (int s, vetor & dfs, vetor &visitou){ visitou \[s\] = verdadeiro; dfs.push\_back (s); para (int i = 0; i v; i ++) { if (this-> adj \[s\] \[i\] == verdadeiro && visitado \[i\] == falso) DFSUtil (i, dfs, visitado); } }

vetor Gráfico :: DFS (int s) { vetor visitado (this-> v); vetor dfs; DFSUtil (s, dfs, visitado); return dfs; } \`\` \`

#### Mais Informações:

[Gráficos](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[Largura da Primeira Pesquisa (BFS)](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/breadth-first-search/index.md)

[Primeira pesquisa de profundidade (DFS) - Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)