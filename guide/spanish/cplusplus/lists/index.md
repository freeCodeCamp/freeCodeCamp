---
title: C++ Lists
localeTitle: Listas de C ++
---
# ¿Qué es una lista de STL?

Las listas en C ++ son una herramienta poderosa similar a su primo más conocido, C ++ Vectors. Mientras que los vectores son un contenedor secuencial. donde los elementos se indexan en una cadena continua, las listas también son un contenedor secuencial, pero se organizan de manera diferente. Los elementos de la lista apuntan a su siguiente elemento, por lo que todos los elementos están ordenados en secuencia, pero no utilizan la indexación. ¿Cómo? Tu puedes preguntar. Lo hacen no mediante la indexación sino mediante una herramienta especial llamada iteradores. Los iteradores son como punteros especiales. cuyo trabajo es mantener el orden de los elementos de la lista como el enlace entre dos vagones de tren. Aquí hay una buena visual de cómo se organizan las listas en comparación con los vectores y matrices. ![img](https://imgur.com/SiU8uTe.png)

## Cómo declarar una lista

Si desea declarar una lista de números, escriba:

'' 'std :: list Números;'''