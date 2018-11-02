---
title: Dijkstra's Algorithm
localeTitle: Algoritmo de Dijkstra
---
# Algoritmo de Dijkstra

Algoritmo de Dijkstra é um algoritmo gráfico apresentado por EW Dijkstra. Ele encontra o caminho mais curto de fonte única em um gráfico com bordas não negativas (por quê?)

Criamos 2 arrays: visited e distance, que registram se um vértice é visitado e qual é a distância mínima do vértice fonte, respectivamente. A matriz inicialmente visitada é designada como falsa e a distância como infinita.

Nós começamos a partir do vértice fonte. Deixe o vértice atual ser u e seus vértices adjacentes sejam v. Agora, para cada v que é adjacente a u, a distância é atualizada se não tiver sido visitada antes e a distância de u for menor que sua distância atual. Em seguida, selecionamos o próximo vértice com a menor distância e que não foi visitado.

Fila de prioridade é frequentemente usada para atender a esse último requisito no menor período de tempo. Abaixo está uma implementação da mesma ideia usando a fila de prioridades em Java.

```java
import java.util.*; 
 public class Dijkstra { 
    class Graph { 
    LinkedList<Pair<Integer>> adj[]; 
    int n; // Numero de vértices 
    Graph(int n) { 
        this.n = n; 
        adj = new LinkedList[n]; 
        for(int i = 0;i<n;i++) adj[i] = new LinkedList<>(); 
    } 
    // Adiciona um vértices dirigido entre a e b com custo igual ao peso
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
 
    // Calcula o caminho mais curto para cada vértice apartir da fonte e retorna a distância
    public int[] dijkstra(Graph g, int src) { 
    int distance[] = new int[gn]; // Menor distância de cada vértice da fonte
    boolean visited[] = new boolean[gn]; // vertex is visited or not 
    Arrays.fill(distance, Integer.MAX_VALUE); 
    Arrays.fill(visited, false); 
    PriorityQueue<Pair<Integer>> pq = new PriorityQueue<>(100, new PairComparator()); 
        pq.add(new Pair<Integer>(src, 0)); 
    distance[src] = 0; 
    while(!pq.isEmpty()) { 
        Pair<Integer> x = pq.remove(); // Retira o vértice com menor distância à fonte
        int u = x.first; 
        visited[u] = true; 
        Iterator<Pair<Integer>> iter = g.adj[u].listIterator(); 
        // Itera sobre os visinhos de u e atualiza as suas distâncias
        while(iter.hasNext()) { 
        Pair<Integer> y = iter.next(); 
        int v = y.first; 
        int weight = y.second; 
        // Verifica se vértice v não foi visitado
        // Se o novo caminho u oferece menor custo, actualiza o vetor de distâncias e adiciona a pq
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
