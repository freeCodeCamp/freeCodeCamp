---
title: Set
localeTitle: Conjunto
---
Una estructura de datos de conjunto en c ++ se define de la misma manera que un conjunto se define en el contexto de las matemáticas.

Más formalmente hablando, los Conjuntos son un tipo de contenedores asociativos en los que cada elemento tiene que ser único.

*   El valor del elemento no se puede modificar una vez que se ingresa, aunque se permite eliminar un elemento e insertar un nuevo elemento, de la misma manera que lo hacemos en matemáticas.
*   Establecer la estructura de datos se puede utilizar para modelar, bueno, se configura a sí mismo. Se hace fácil encontrar intersecciones, uniones etc.
*   Similar al vector, pero solo se permiten valores únicos.
*   El conjunto organiza los elementos en orden creciente a medida que se insertan elementos en el conjunto.

El archivo de encabezado requerido para usar la estructura de datos establecida es 'conjunto'. es decir, `#include<set>` debe estar allí en su código para que pueda utilizar la estructura de datos establecida.

`#include<bits/stdc++.h>` **profesional** : use `#include<bits/stdc++.h>` para incluir todas las funciones y estructuras de datos de C ++, en lugar de agregarlas una por una.  
Algunas de las funciones que se pueden realizar con un conjunto:

1.  begin (): devuelve un iterador al primer elemento del conjunto
2.  end (): devuelve un iterador al elemento teórico que sigue al último elemento del conjunto
3.  size () - Devuelve el número de elementos en el conjunto
4.  max\_size (): devuelve el número máximo de elementos que puede contener el conjunto
5.  vacío () - Devuelve si el conjunto está vacío
6.  borrar (const g): elimina el valor 'g' del conjunto
7.  clear () - Elimina todos los elementos del conjunto

Veamos un ejemplo:

```cpp
#include <iostream> 
 #include <set> 
 #include <iterator> 
 
 using namespace std; 
 int main() 
 { 
    set <int> myset;   //an empty set container. Note that size of the set need not be declared, similar to vector. 
 
    // insert elements in random order 
    myset.insert(65); 
    myset.insert(30); 
    myset.insert(80); 
    myset.insert(20); 
    myset.insert(9); 
    myset.insert(9); // only one 9 will be added to the list. 
 
 
    // printing set myset 
    set <int> :: iterator itr; //an iterator is like a pointer. 
    cout << "\nThe contents of myset : "; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
    cout << endl; 
 
 
    // remove all elements up to 65 in myset from the beginning:- 
    cout << "\nContents of myset after removal of elements less than 30 : "; 
    myset.erase(myset.begin(), myset.find(30)); 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    // remove element with value 50 in myset 
 
    int num = myset.erase(80); //returns true (and deletes) if 80 is there in the list else returns 0. 
    cout<<"\n\n After doing myset.erase(80), "<<num<<" element is removed\n\n"; 
    cout<<"Contents of the modified set:\t"; 
    for (itr = myset.begin(); itr != myset.end(); ++itr) 
    { 
        cout << '\t' << *itr; 
    } 
 
    cout << endl; 
 
 
    return 0; 
 
 } 
```

\`\` \`cpp Salida:- Los contenidos de myset: 9 20 30 65 80.

Contenido de myset después de la eliminación de elementos menores de 30: 30 65 80

Después de hacer myset.erase (80), se elimina 1 elemento.

Contenido del conjunto modificado: 30 65. \`\` \`

\### Fuentes

1.  [Geeks para Geeks](https://www.geeksforgeeks.org/set-in-cpp-stl/)