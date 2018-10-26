---
title: Dijkstra's Algorithm
localeTitle: El algoritmo de Dijkstra
---
# El algoritmo de Dijkstra

El algoritmo de Dijkstra es un algoritmo gráfico presentado por EW Dijkstra. Encuentra la ruta más corta de una sola fuente en un gráfico con bordes no negativos (¿por qué?)

Creamos 2 matrices: visitada y distancia, que registran si un vértice es visitado y cuál es la distancia mínima desde el vértice de origen respectivamente. La matriz inicialmente visitada se asigna como falsa y la distancia como infinita.

Partimos del vértice fuente. Deje que el vértice actual sea u y sus vértices adyacentes sean v. Ahora, para cada v adyacente a u, la distancia se actualiza si no se ha visitado antes y la distancia desde u es menor que su distancia actual. Luego seleccionamos el siguiente vértice con la menor distancia y que no ha sido visitado.

La cola de prioridad se usa a menudo para cumplir con este último requisito en el menor tiempo posible. A continuación se muestra una implementación de la misma idea utilizando la cola de prioridad en Java.

```java
import java.util.*; 
 public class Dijkstra { 
    class Graph { 
    LinkedList<Pair<Integer>> adj[]; 
    int n; // Number of vertices. 
    Graph(int n) { 
        this.n = n; 
        adj = new LinkedList[n]; 
        for(int i = 0;i<n;i++) adj[i] = new LinkedList<>(); 
    } 
    // add a directed edge between vertices a and b with cost as weight 
    public void addEdgeDirected(int a, int b, int cost) { 
        adj[a].add(new Pair(b, cost)); 
    } 
    public void addEdgeUndirected(int a, int b, int cost) { 
        addEdgeDirected(a, b, cost); 
        addEdgeDirected(b, a, cost); 
    } 
    } 
    class Pair<E> { 
    E first; 
    E second; 
    Pair(E f, E s) { 
        first = f; 
        second = s; 
    } 
    } 
 
    // Comparator to sort Pairs in Priority Queue 
    class PairComparator implements Comparator<Pair<Integer>> { 
    public int compare(Pair<Integer> a, Pair<Integer> b) { 
        return a.second - b.second; 
    } 
    } 
 
    // Calculates shortest path to each vertex from source and returns the distance 
    public int[] dijkstra(Graph g, int src) { 
    int distance[] = new int[gn]; // shortest distance of each vertex from src 
    boolean visited[] = new boolean[gn]; // vertex is visited or not 
    Arrays.fill(distance, Integer.MAX_VALUE); 
    Arrays.fill(visited, false); 
    PriorityQueue<Pair<Integer>> pq = new PriorityQueue<>(100, new PairComparator()); 
        pq.add(new Pair<Integer>(src, 0)); 
    distance[src] = 0; 
    while(!pq.isEmpty()) { 
        Pair<Integer> x = pq.remove(); // Extract vertex with shortest distance from src 
        int u = x.first; 
        visited[u] = true; 
        Iterator<Pair<Integer>> iter = g.adj[u].listIterator(); 
        // Iterate over neighbours of u and update their distances 
        while(iter.hasNext()) { 
        Pair<Integer> y = iter.next(); 
        int v = y.first; 
        int weight = y.second; 
        // Check if vertex v is not visited 
        // If new path through u offers less cost then update distance array and add to pq 
        if(!visited[v] && distance[u]+weight<distance[v]) { 
            distance[v] = distance[u]+weight; 
            pq.add(new Pair(v, distance[v])); 
        } 
        } 
    } 
    return distance; 
    } 
 
    public static void main(String args[]) { 
    Dijkstra d = new Dijkstra(); 
    Dijkstra.Graph g = d.new Graph(4); 
    g.addEdgeUndirected(0, 1, 2); 
    g.addEdgeUndirected(1, 2, 1); 
    g.addEdgeUndirected(0, 3, 6); 
    g.addEdgeUndirected(2, 3, 1); 
    g.addEdgeUndirected(1, 3, 3); 
 
    int dist[] = d.dijkstra(g, 0); 
    System.out.println(Arrays.toString(dist)); 
    } 
 } 

```