---
title: Shortest Path on a Graph
localeTitle: Ruta más corta en un gráfico
---
## Ruta más corta en un gráfico

Encontrar el camino más corto entre dos puntos en un gráfico es un problema común en las estructuras de datos, especialmente cuando se trata de optimización. Una gráfica es una serie de nodos conectados por bordes. Las gráficas pueden ser ponderadas (los bordes llevan valores) y direccionales (los bordes tienen dirección).

Algunas aplicaciones de esto son la optimización de la trayectoria de vuelo o [6 grados de Kevin Bacon](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon)

## El algoritmo de Dijkstra

La solución más común para este problema es el algoritmo de Dijkstra, que actualiza la ruta más corta entre el nodo actual y todos sus vecinos. Después de actualizar la distancia de todos los vecinos, se desplaza al nodo con la distancia más baja y repite el proceso con todos los vecinos sin validar. Este proceso continúa hasta que se haya visitado el gráfico completo.

![Imagen de niveles de código](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

**Paso 0:**

Nuestra gráfica necesita ser configurada para que podamos registrar los valores requeridos. En cualquier borde tenemos la distancia entre los dos nodos que conecta. En cualquier nodo tenemos la distancia más corta desde el nodo inicial. Permite establecer el valor en cada nodo en infinito positivo y establecer el valor en el nodo inicial en cero.

**Paso 1:**

Mire todos los nodos directamente adjascent al nodo inicial. Los valores transportados por los bordes que conectan el inicio y estos nodos adjascentes son las distancias más cortas a cada nodo respectivo. Registre estas distancias en el nodo (sobreescribiendo el infinito) y también cruce los nodos, lo que significa que se ha encontrado su ruta más corta.

**Paso 2:**

Seleccione uno de los nodos que ha calculado su ruta más corta, lo llamaremos nuestro pivote. Mire los nodos adjascentes (los llamaremos nodos de destino) y las distancias que los separan. Para cada nodo de destino: si el valor en el pivote más el valor de borde que lo conecta totaliza menos que el valor del nodo de destino, entonces actualice su valor, ya que se ha encontrado una nueva ruta más corta. Si se han explorado todas las rutas a este nodo de destino, se puede tachar.

**Paso 3:**

Repita el paso 2 hasta que todos los nodos hayan sido tachados. Ahora tenemos un gráfico donde los valores que se mantienen en cualquier nodo serán la distancia más corta desde el nodo de inicio.

#### Más información:

[Más sobre el algoritmo de Dijkstra](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

[Otros algoritmos de ruta más corta](https://en.wikipedia.org/wiki/Shortest_path_problem#Algorithms)