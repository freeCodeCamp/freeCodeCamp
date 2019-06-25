---
title: Map
localeTitle: Mapa
---
## Introducción del mapa

`map` es un contenedor asociativo que almacena elementos en un par clave-valor. Al igual que en `Java` tenemos colección, array asociativo en PHP y así sucesivamente.

## Beneficios de usar el mapa

*   Almacena solo claves únicas y eso también en orden clasificado basado en sus criterios de clasificación asignados.
*   Como las claves están ordenadas, la búsqueda de elementos en el mapa a través de la clave es muy rápida, es decir, toma tiempo logarítmico.
*   En el `map` solo habrá un valor adjunto con cada tecla.
*   `map` puede ser utilizado como matrices asociativas.
*   Podría implementarse utilizando árboles binarios equilibrados.

Aquí hay un ejemplo:

```cpp
#include <iostream> 
 #include <map> 
 
 using namespace std; 
 
 int main (){ 
  map<char,int> first; 
 
  //initializing 
  first['a']=10; 
  first['b']=20; 
  first['c']=30; 
  first['d']=40; 
 
   map<char, int>::iterator it; 
   for(it=first.begin(); it!=first.end(); ++it){ 
      cout << it->first << " => " << it->second << '\n'; 
   } 
 
  return 0; 
 } 
```

Salida:
```
a => 10 
 b => 20 
 c => 30 
 d => 40 
```

## Creando objeto de mapa

`map<string, int> myMap;`

## Inserción

Insertando datos con la función miembro insertada.

```cpp
myMap.insert(make_pair("earth", 1)); 
 myMap.insert(make_pair("moon", 2)); 
```

También podemos insertar datos en std :: map utilizando el operador \[\], es decir

`myMap["sun"] = 3;`

## Accediendo a los elementos del mapa.

Para acceder a los elementos del mapa, debe crear un iterador para él. Aquí hay un ejemplo como se dijo antes.

```cpp
map<char, int>::iterator it; 
 for(it=first.begin(); it!=first.end(); ++it){ 
  cout << it->first << " => " << it->second << '\n'; 
 } 
```

Aquí puedes aprender más sobre el mapa: [cpluspluc\_map](http://www.cplusplus.com/reference/map/map/map/)

NB: Todos los códigos en el ejemplo están en versión C ++ 11. Puedes aprender más sobre la versión de C ++ [aquí](http://en.cppreference.com/w/cpp/compiler_support)