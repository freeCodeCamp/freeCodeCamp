---
title: Bellman-Ford Algorithm
---

**Bellman-Ford** algorithm is used to find out single source shortest paths  i.e. there is a source node, from that node we have to find
shortest distance to every other node similar to Dijkstra algorithm with extra advantage as explained below.
This is easily unserstandable than other algorithms.

**When is the Bellman-ford algorithm better than Dijkstra algorithm?**

*Dijkstra algorithm fails when graph has negative weight cycle. But Bellman-Ford Algorithm won’t fail even, the graph has negative weight 
cycle. If there is any negative weight cycle, it will detect and say there is negative edge cycle. If not it will give answer to given 
problem.*

- Bellman-Ford Algorithm will work on logic that, if graph has n nodes, then shortest path never contain more than n-1 edges.
- It is enough to loop through each edge (v-1) times(where v is number of nodes) to find shortest path. But to find whether there is 
negative cycle or not we again do one more loop.
- If we get less distance in nth relaxation we can say that there is negative weight cycle. Reason for this is negative value added and
distance get reduced.

**This algorithm is not understandable at the first sight. To be able to understand in a easy way, refer the following video.**

[Bellmanford-algorithm - TusharRoy](https://www.youtube.com/watch?v=-mOEd_3gTK0)

Following is the overview of Bellman-ford algorithm

```code
Bellman-Ford (G,w,S){   // G is graph given, W is weight matrix, S is source vertex (starting vertex)
    Initialize single source (G,S)  // means initially distance to every node is infinity except to source. 
    Source is 0 (zero). This will take O(v) time
 
    For i=1 to |G.V| -1     //Runs (v-1) times
        For each edge (G,V)€ G.E    // E times
            updateDistance(u,v,w)    //O(1) time
            
   updateDistance(G,u,v,w)
    For each edge (G,V) € G.E
        If (v.d > u.d + w(u,v))     // The idea behind this is we are updating edges nth time if we found more shortest path than (n-1)th level, we can say that graph is having negative edge cycle and detected.
            v.d=u.d+w(u,v)
 
}
```

Following is the C++ implementation of Bellman-Ford algorithm

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>
 
// a structure to represent a weighted edge in graph
struct Edge
{
        int src, dest, weight;
};
 
// a structure to represent a connected, directed and weighted graph
struct Graph
{
        // V-> Number of vertices, E-> Number of edges
        int V, E;
 
        // graph is represented as an array of edges.
        struct Edge* edge;
};
 
// Creates a graph with V vertices and E edges
struct Graph* createGraph(int V, int E)
{
    struct Graph* graph = (struct Graph*) malloc(sizeof(struct Graph));
    graph->V = V;
    graph->E = E;
 
    graph->edge = (struct Edge*) malloc(graph->E * sizeof(struct Edge));
 
    return graph;
}
 
// A utility function used to print the solution
void printArr(int dist[], int n)
{
    printf("Vertex   Distance from Source\n");
    for (int i = 0; i < n; ++i)
        printf("%d \t\t %d\n", i, dist[i]);
}
 
// The main function that finds shortest distances from src to all other
// vertices using Bellman-Ford algorithm.  The function also detects negative
// weight cycle
void BellmanFord(struct Graph* graph, int src)
{
    int V = graph->V;
    int E = graph->E;
    int dist[V];
 
    // Step 1: Initialize distances from src to all other vertices as INFINITE
    for (int i = 0; i < V; i++)
        dist[i] = INT_MAX;
    dist[src] = 0;
 
    // Step 2: Relax all edges |V| - 1 times. A simple shortest path from src
    // to any other vertex can have at-most |V| - 1 edges
    for (int i = 1; i <= V - 1; i++)
    {
        for (int j = 0; j < E; j++)
        {
            int u = graph->edge[j].src;
            int v = graph->edge[j].dest;
            int weight = graph->edge[j].weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
                dist[v] = dist[u] + weight;
        }
    }
 
    // Step 3: check for negative-weight cycles.  The above step guarantees
    // shortest distances if graph doesn't contain negative weight cycle.
    // If we get a shorter path, then there is a cycle.
    for (int i = 0; i < E; i++)
    {
        int u = graph->edge[i].src;
        int v = graph->edge[i].dest;
        int weight = graph->edge[i].weight;
        if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
            printf("Graph contains negative weight cycle");
    }
 
    printArr(dist, V);
 
    return;
}
 
// Driver program to test above functions
int main()
{
    /* Let us create the graph given in above example */
    int V = 5; // Number of vertices in graph
    int E = 8; // Number of edges in graph
    struct Graph* graph = createGraph(V, E);
 
    // add edge 0-1 (or A-B in above figure)
    graph->edge[0].src = 0;
    graph->edge[0].dest = 1;
    graph->edge[0].weight = -1;
 
    // add edge 0-2 (or A-C in above figure)
    graph->edge[1].src = 0;
    graph->edge[1].dest = 2;
    graph->edge[1].weight = 4;
 
    // add edge 1-2 (or B-C in above figure)
    graph->edge[2].src = 1;
    graph->edge[2].dest = 2;
    graph->edge[2].weight = 3;
 
    // add edge 1-3 (or B-D in above figure)
    graph->edge[3].src = 1;
    graph->edge[3].dest = 3;
    graph->edge[3].weight = 2;
 
    // add edge 1-4 (or A-E in above figure)
    graph->edge[4].src = 1;
    graph->edge[4].dest = 4;
    graph->edge[4].weight = 2;
 
    // add edge 3-2 (or D-C in above figure)
    graph->edge[5].src = 3;
    graph->edge[5].dest = 2;
    graph->edge[5].weight = 5;
 
    // add edge 3-1 (or D-B in above figure)
    graph->edge[6].src = 3;
    graph->edge[6].dest = 1;
    graph->edge[6].weight = 1;
 
    // add edge 4-3 (or E-D in above figure)
    graph->edge[7].src = 4;
    graph->edge[7].dest = 3;
    graph->edge[7].weight = -3;
 
    BellmanFord(graph, 0);
 
    return 0;
}
```
Output :
```text
Vertex   Distance from Source
0 		 0
1 		 -1
2 		 2
3 		 -2
4 		 1
```

Following is the **Java implementation** of the algorithm

```java
public class BellmanFordShortestPath {

    //some random big number is treated as infinity. I m not taking INTEGER_MAX as infinity because
    //doing any addition on that causes integer overflow
    private static int INFINITY = 10000000;

    class NegativeWeightCycleException extends RuntimeException {
    }
    
    public Map<Vertex<Integer>, Integer> getShortestPath(Graph<Integer> graph,
            Vertex<Integer> sourceVertex) {

        Map<Vertex<Integer>, Integer> distance = new HashMap<>();
        Map<Vertex<Integer>, Vertex<Integer>> parent = new HashMap<>();

        //set distance of every vertex to be infinity initially
        for(Vertex<Integer> v : graph.getAllVertex()) {
            distance.put(v, INFINITY);
            parent.put(v, null);
        }

        //set distance of source vertex to be 0
        distance.put(sourceVertex, 0);

        int V = graph.getAllVertex().size();

        //relax edges repeatedly V - 1 times
        for (int i = 0; i < V - 1 ; i++) {
            for (Edge<Integer> edge : graph.getAllEdges()) {
                Vertex<Integer> u = edge.getVertex1();
                Vertex<Integer> v = edge.getVertex2();
                //relax the edge
                //if we get better distance to v via u then use this distance
                //and set u as parent of v.
                if (distance.get(u) + edge.getWeight() < distance.get(v)) {
                    distance.put(v, distance.get(u) + edge.getWeight());
                    parent.put(v, u);
                }
            }
        }

        //relax all edges again. If we still get lesser distance it means
        //there is negative weight cycle in the graph. Throw exception in that
        //case
        for (Edge<Integer> edge : graph.getAllEdges()) {
            Vertex<Integer> u = edge.getVertex1();
            Vertex<Integer> v = edge.getVertex2();
            if (distance.get(u) + edge.getWeight() < distance.get(v)) {
                throw new NegativeWeightCycleException();
            }
        }
        return distance;
    }

    public static void main(String args[]){
        
        Graph<Integer> graph = new Graph<>(false);
        graph.addEdge(0, 3, 8);
        graph.addEdge(0, 1, 4);
        graph.addEdge(0, 2, 5);
        graph.addEdge(1, 2, -3);
        graph.addEdge(2, 4, 4);
        graph.addEdge(3, 4, 2);
        graph.addEdge(4, 3, 1);

        BellmanFordShortestPath shortestPath = new BellmanFordShortestPath();
        Vertex<Integer> startVertex = graph.getAllVertex().iterator().next();
        Map<Vertex<Integer>,Integer> distance = shortestPath.getShortestPath(graph, startVertex);
        System.out.println(distance);
    }

}
```
**References**

[Sanfoundry](https://www.sanfoundry.com/cpp-program-use-bellman-ford-algorithm-find-shortest-path-between-two-vertices-assuming-that-negative-size-edges-exist-graph/)

[TusharRoy Github](https://github.com/mission-peace/interview/blob/master/src/com/interview/graph/BellmanFordShortestPath.java)

[The Crazy Programmer](https://www.thecrazyprogrammer.com/2017/06/bellman-ford-algorithm-in-c-and-c.html)



