---
title: Bellman-Ford Algorithm
---
# Bellman-Ford Algorithm

Time complexity: O(VE)

The Bellman-Ford algorithm solves the single-source-shortest path problem, in which edge weights can be negetive.
Given a weigted directed graph **G**, with source **_s_** and weight function **_w_** , the Bellman-Ford algorithm tells
whether or not there exists a negetive-weight cycle reachable from source **s**.

If there is a negative-weight cycle, the algorithm shows that no solution exists. If there is no such cycle, the algorithm
produces shortest paths and their weights.

The following pseudo-code may help in understanding the concept much better:

> p[v] -> keeps track of parent/predecessor of a vertex **v**

> d[v] -> keeps track of estimate weight from source **s** to vertex **v**

```
initialize-source(G,s)
{
	for each vertex v
		d[v] = infinite
		p[v] = NULL
	
	d[s] = 0
}

Relax(u,v,w)  //relaxation on edge (u,v)
{
	if d[v] > d[u] + w(u,v)
		d[v] = d[u] + w(u,v)
		p[v] = u
}

Bellman-Ford(G,w,s)
{
	initialize-source(G,s);

	for i = 1 to (|V[G]| -1)    //loop-1
		for each edge (u,v)
			Relax(u,v,w);

	for each edge (u,v)         //loop-2
		if d[v] > d[u] + w(u,v)
			return FALSE;

	return TRUE;
}
```

Firstly we start with some prerequisites.

We initialize all shortest-path estimates and predecessors of each vertex in graph to values that symbolize the vertex has 
not yet been processed. We also mark the source vertex distance/shortest-path estimate equal to zero, as we will be starting from it.

The process of **relaxing** and edge (u,v) means checking whether there's a shortest path to _v_ by going through _u_. And 
if there is, we update **d[v]** and **p[v]**. The _relaxation_ step may decrease the value of distance/shortest-path estimate 
_d[v]_ and update the predecessor _p[v]_.

>Note: in Dijkstra's Algorithm, each edge is relaxed once. In Bellman-Ford algorithm, each edge may be relaxed many times.

The Bellman-Ford algorithm runs in time O(VE), since the **initialize-source()** procedure takes O(V) time, 
each of the |V| - 1 passes over the edges in _loop-1_ takes O(E) time, and the _loop-2_ in the last, takes O(E) time.

## More Information:
- [Bellman-Ford Algorithm](https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/)
