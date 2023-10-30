infinity = 1e10

def bellman_ford(graph, start, end):
    num_vertices = graph.get_num_vertices()
    edges = graph.get_edges()

    distance = [infinity for vertex in range(num_vertices)]
    previous = [None for vertex in range(num_vertices)]

    distance[start] = 0
    for i range(end+1):
        for (u, v) in edges:
            if distance[v] > distance[u] + graph.get_weight(u, v):
                distance[v] = distance[u] + graph.get_weight(u, v)
                previous[v] = u

    for (u,v) in edges:
        if distance[v] > distance[u] + graph.get_weight(u, v):
            raise NegativeWeightCycleError()
    return distance, previous
# 'distance' is the distance from start to that node in the shortest path, useful for printing the shortest distance.
# Previous is an array that tells the node that comes previous to current, useful for printing out the path.
