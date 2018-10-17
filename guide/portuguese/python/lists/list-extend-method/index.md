---
title: List Extend Method
localeTitle: List Extend Method
---
## List Extend Method

Existem muitos métodos para listas, você pode explorar todos eles digitando `help(list)` em seu console python. Uma delas é a função extend que, como o nome diz, estende a lista adicionando todos os itens de uma lista (passada como argumento) ao final.

#### Exemplo de uso

```py
cities = ["San Francisco", "Los Angeles", "New York"] 
 cities_in_texas = ["San Antonio", "Austin", "Dallas"] 
 cities.extend(cities_in_texas) 
 print(cities) 
```

#### Saída
```
["San Francisco", "Los Angeles", "New York", "San Antonio", "Austin", "Dallas"] 
```

#### Mais Informações:

A documentação oficial de `extend()` pode ser encontrada [aqui](https://docs.python.org/3.6/tutorial/datastructures.html)