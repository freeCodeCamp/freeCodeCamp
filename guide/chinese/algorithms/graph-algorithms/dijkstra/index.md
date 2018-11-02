---
title: Dijkstra's Algorithm
localeTitle: Dijkstra的算法
---
# Dijkstra的算法

Dijkstra算法是由EW Dijkstra提出的图算法。它在具有非负边的图中找到单源最短路径。（为什么？）

我们创建了2个数组：visit和distance，它们分别记录是否访问了顶点以及距离源顶点的最小距离。最初访问的数组被指定为false，距离指定为无限。

我们从源顶点开始。设当前顶点为u，其相邻顶点为v。现在对于与u相邻的每个v，如果之前未访问过该距离并且距离u的距离小于其当前距离，则更新距离。然后我们选择距离最小且未访问过的下一个顶点。

优先级队列通常用于在最短的时间内满足最后的要求。下面是使用Java中的优先级队列实现相同的想法。

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