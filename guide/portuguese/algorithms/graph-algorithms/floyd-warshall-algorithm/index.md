---
title: Floyd Warshall Algorithm
localeTitle: Algoritmo de Floyd Warshall
---
## Algoritmo de Floyd Warshall

O algoritmo de Floyd Warshall é um ótimo algoritmo para encontrar a menor distância entre todos os vértices no gráfico. Ele tem um algoritmo muito conciso e complexidade de tempo O (V ^ 3) (onde V é o número de vértices). Pode ser usado com pesos negativos, embora ciclos de peso negativos não devam estar presentes no gráfico.

### Avaliação

Complexidade do espaço: O (V ^ 2)

Pior complexidade do tempo de caso: O (V ^ 3)

### Implementação em Python

```python
# A large value as infinity 
 inf = 1e10 
 
 def floyd_warshall(weights): 
    V = len(weights) 
    distance_matrix = weights 
    for k in range(V): 
        next_distance_matrix = [list(row) for row in distance_matrix] # make a copy of distance matrix 
        for i in range(V): 
            for j in range(V): 
                # Choose if the k vertex can work as a path with shorter distance 
                next_distance_matrix[i][j] = min(distance_matrix[i][j], distance_matrix[i][k] + distance_matrix[k][j]) 
        distance_matrix = next_distance_matrix # update 
    return distance_matrix 
 
 # A graph represented as Adjacency matrix 
 graph = [ 
    [0, inf, inf, -3], 
    [inf, 0, inf, 8], 
    [inf, 4, 0, -2], 
    [5, inf, 3, 0] 
 ] 
 
 print(floyd_warshall(graph)) 
```

#### Mais Informações:

[Gráficos](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[Floyd Warshall - Wikipédia, a enciclopédia livre](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)