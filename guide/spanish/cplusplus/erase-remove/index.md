---
title: Erase–remove idiom
localeTitle: Borrar - eliminar idioma
---
## Desciframiento

Cómo eliminar elementos del contenedor es una pregunta común de la entrevista de C ++, por lo que puede ganar algunos puntos de brownie, si lee esta página detenidamente. El lenguaje de borrar / eliminar es una técnica de C ++ para eliminar elementos que cumplen un cierto criterio de un contenedor. Sin embargo, es posible eliminar elementos con el bucle tradicional escrito a mano, pero el lenguaje de borrado-eliminar tiene varias ventajas.

### Comparación

```cpp
// Using a hand-written loop 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 for (auto iter = v.cbegin(); iter < v.cend(); /*iter++*/) 
 { 
    if (is_odd(*iter)) 
    { 
        iter = v.erase(iter); 
    } 
    else 
    { 
        ++iter; 
    } 
 } 
 
 // Using the erase–remove idiom 
 std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
 v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
```

Como puede ver, el código con bucle escrito a mano requiere un poco más de escritura, pero también tiene un problema de rendimiento. Cada llamada de `erase` debe avanzar todos los elementos después del borrado, para evitar "huecos" en la colección. Al llamar a `erase` varias veces en el mismo contenedor se generan muchos gastos generales al mover los elementos.

Por otro lado, el código con el lenguaje borrado-eliminar no solo es más expresivo, sino que también es más eficiente. Primero, use `remove_if/remove` para mover todos los elementos que no se ajustan al criterio de eliminación al frente del rango, manteniendo el orden relativo de los elementos. Entonces, después de llamar a `remove_if/remove` , una sola llamada de `erase` elimina todos los elementos restantes al final del rango.

### Ejemplo

```cpp
#include <vector> // the general-purpose vector container 
 #include <iostream> // cout 
 #include <algorithm> // remove and remove_if 
 
 bool is_odd(int i) 
 { 
    return (i % 2) != 0; 
 } 
 
 void print(const std::vector<int> &vec) 
 { 
    for (const auto& i : vec) 
        std::cout << i << ' '; 
    std::cout << std::endl; 
 } 
 
 int main() 
 { 
    // initializes a vector that holds the numbers from 1-10. 
    std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; 
    print(v); 
 
    // removes all elements with the value 5 
    v.erase(std::remove(v.begin(), v.end(), 5), v.end()); 
    print(v); 
 
    // removes all odd numbers 
    v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end()); 
    print(v); 
 
    // removes multiples of 4 using lambda 
    v.erase(std::remove_if(v.begin(), v.end(), [](int n) { return (n % 4) == 0; }), v.end()); 
    print(v); 
 
    return 0; 
 } 
 
 /* 
 Output: 
 1 2 3 4 5 6 7 8 9 10 
 1 2 3 4 6 7 8 9 10 
 2 4 6 8 10 
 2 6 10 
 */ 
```

### Fuentes

"Borrar: eliminar idioma" Wikipedia: The Free Encyclopedia. Wikimedia Foundation, Inc. [en.wikipedia.org/wiki/Erase-remove\_idiom](https://en.wikipedia.org/wiki/Erase%E2%80%93remove_idiom)

Meyers, Scott (2001). STL efectivo: 50 maneras específicas de mejorar su uso de la biblioteca de plantillas estándar. Addison-Wesley.