---
title: C++ Lists
localeTitle: Listas de C ++
---
# ¿Qué es una lista de STL?

Las listas o listas encadenadas en C ++ son una herramienta poderosa similar a su primo más conocido, C ++ Vectors. Mientras que los vectores son un contenedor secuencial donde los elementos se indexan en una cadena continua, las listas también son un contenedor secuencial, pero se organizan de manera diferente. 

Los elementos de la lista apuntan a su siguiente elemento, por lo que todos los elementos están ordenados en secuencia, pero no utilizan la indexación. ¿Cómo? Tu puedes preguntar. Lo hacen no mediante la indexación sino mediante una herramienta especial llamada iteradores. Los iteradores son como punteros especiales cuyo trabajo es mantener el orden de los elementos de la lista como el enlace entre dos vagones de tren. Aquí hay una buena visual de cómo se organizan las listas en comparación con los vectores y matrices.

![img](https://imgur.com/SiU8uTe.png)

## Tipos de lista

La librería STL tiene 2 tipos de listas

### std::forward_list *(A partir de C++11)*

  Es una lista encadenada en una sola dirección, como la que se ve en el ejemplo
### std::list

  Es una lista doblemente encadenada, guarda los punteros al elemento anterior y al siguiente, por lo que se puede recorrer hacia delante y hacia atrás. 
  


## Cómo usar una lista

Si desea declarar una lista de números, escriba:

```
std::list<std::string> palabras {"hola", "mundo"};
```

Las listas contienen iteradores al primer _begin()_ y último elemento _end()_ que sirven para recorrer el contenedor en un bucle for basado en rangos de manera sencilla.
```
for (std::string palabra : palabras) {
    std::cout << palabra << '\n';
}
```

Se pueden añadir elementos a la lista con los métodos push_back, push_front, insert...
```
palabras.push_back("de"); //Añade al final
palabras.push_front("Dije"); //Añade al comienzo
palabras.insert(palabras.end(), "C++"); //Añade al final, al obtener el iterador del final
```
También existen métodos emplace que permiten construir el objeto en el propio contenedor, mientras que usando los métodos anteriormente mostrados, se creará el objeto y luego se copiará al contenedor _(es probable que el compilador optimice esto último)_

La clase *forward_list* no contiene _push_back_ y ni _insert_. En cambio tiene _insert_after_ que permite insertar un elemento después del elemento apuntado por el iterador.

Otros métodos útiles son
#### erase

    Borra un elemento del array a traves de un iterador
    
#### clear

    Borra todo el contenedor
    
#### size

    Retorna el tamaño de la lista
    
#### sort

    Ordena la lista.
    
#### empty

    Retorna verdadero si la lista está vacia
    
  Todos los métodos están listados aquí
  [List](https://en.cppreference.com/w/cpp/container/list)
  [Forward list](https://en.cppreference.com/w/cpp/container/forward_list)
  
