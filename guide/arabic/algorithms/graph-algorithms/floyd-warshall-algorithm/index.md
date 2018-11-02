---
title: Floyd Warshall Algorithm
localeTitle: Floyd Warshall Algorithm
---
## Floyd Warshall Algorithm

خوارزمية Floyd Warshall هي خوارزمية رائعة للعثور على أقصر مسافة بين جميع الرؤوس في الرسم البياني. يحتوي على خوارزمية موجزة جداً و O (V ^ 3) تعقيد وقت (حيث V عدد الرؤوس). يمكن استخدامه مع الأوزان السلبية ، على الرغم من أن دورات الوزن السلبية يجب ألا تكون موجودة في الرسم البياني.

### تقييم

تعقيد الفضاء: O (V ^ 2)

تعقيد وقت حالة أسوأ: O (V ^ 3)

### تنفيذ بايثون

 `# A large value as infinity 
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
` 

#### معلومات اكثر:

[الرسوم البيانية](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[فلويد وارهال - ويكيبيديا](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)