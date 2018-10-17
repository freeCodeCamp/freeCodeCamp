---
title: List Extend Method
localeTitle: Método de ampliación de lista
---
## Método de ampliación de lista

Existen muchos métodos para listas, puede explorarlas todas escribiendo `help(list)` en su consola de Python. Una de ellas es la función de extensión que, como su nombre lo dice, extiende la lista al agregar todos los elementos de una lista (que se pasa como argumento) al final.

#### Ejemplo de uso

```py
cities = ["San Francisco", "Los Angeles", "New York"] 
 cities_in_texas = ["San Antonio", "Austin", "Dallas"] 
 cities.extend(cities_in_texas) 
 print(cities) 
```

#### Salida
```
["San Francisco", "Los Angeles", "New York", "San Antonio", "Austin", "Dallas"] 
```

#### Más información:

La documentación oficial de `extend()` se puede encontrar [aquí.](https://docs.python.org/3.6/tutorial/datastructures.html)