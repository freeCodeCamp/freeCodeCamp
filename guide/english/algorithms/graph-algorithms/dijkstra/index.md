---
title: Dijkstra's Algorithm
---
# Dijkstra's Algorithm

Dijkstra's Algorithm is a graph algorithm presented by E.W. Dijkstra. It finds the single source shortest path in a graph with non-negative edges.(why?)

We create 2 arrays : visited and distance, which record whether a vertex is visited and what is the minimum distance from the source vertex respectively. Initially visited array is assigned as false and distance as infinite.

We start from the source vertex. Let the current vertex be u and its adjacent vertices be v. Now for every v which is adjacent to u, the distance is updated if it has not been visited before and the distance from u is less than its current distance. Then we select the next vertex with the least distance and which has not been visited.

Priority Queue is often used to meet this last requirement in the least amount of time. Below is an implementation of the same idea using priority queue in Java.

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
	int distance[] = new int[g.n]; // shortest distance of each vertex from src
	boolean visited[] = new boolean[g.n]; // vertex is visited or not
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

Implementation of Dijkstra in C++ using STL :-

#include <iostream>
using namespace std;
        
        typedef pair<int, int> iPair;
        
        class Graph
        {
         int V;
         list<pair<int, int>> *adj;
         
         public:
            Graph(int V);
            
            void addEdge(int u, int v, int w);
            
            void shortestPath(int s);
            };
            
            Graph::Graph(int V)
            {
             this->V = V;
             
             adj = new list<iPair> [V];
             
             void Graph::addEdge(int u, int v, int w){
             
             adj[u].push_back(make_pair(v,w));
             adj[v].push_back(make_pair(u,w));
             
             void Graph::shortestPath(int src)
             {
             Priority_queue<ipair, vector <ipair>, greater<ipair> >pq;
             
             vector<int> dist(V, INF);
             
             pq.push(make_pair(0,src));
             dist[src]=0;
             
             while(!pq.empty()){
             
             int u= pq.top().second;
             pq.pop();
             
             list<pair<int, int> >:: iterator i;
             
             for(i=adj[u].begin(); i!= adj[u].end(); ++i){
             
             int v = (*i).first;
             
             int weight = (*i).second;
             
             if(dist[v] >dist[u] + weight)
             {
             
             dist[v] = dist[u] + weight;
             
             pq.push(make_pair(dist[v], v);
             }
             }
             }
             
             for(int i=0; i<V; i++){
             
             cout<<i, dist[i];
             }
             int main(){
             
             int V=9;
             Graph g(V);
             
             g.addEdge(0,1,4);
             g.addEdge(0,7,8);
             g.addEdge(1,2,8);
             g.addEdge(1,7,11);
             g.addEdge(2,3,7);
             g.addEdge(2,8,2);
             g.addEdge(2,5,4);
             
             g.shortestPath(0);
             
             return 0;
             }
             
             
             
             
             

## More Information: 
- [Priority Queue Documentation](https://docs.oracle.com/javase/7/docs/api/java/util/PriorityQueue.html)
