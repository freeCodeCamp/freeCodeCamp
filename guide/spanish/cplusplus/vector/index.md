---
title: Vectors
localeTitle: Vectores
---
## Vectores

El `vector` C ++ es uno de los contenedores más utilizados en C ++. Un contenedor es una estructura de datos que almacena una colección de objetos que pueden variar desde que se ordenan (¡como `vector` !) A desordenados (como `set` ). Todos los contenedores de C ++ tienen un conjunto diferente de funciones que le permiten acceder a un objeto (s) en esa colección, modificar y recorrer los elementos en esa estructura de datos.

Los vectores son similares a ArrayLists en Java ya que no tiene que especificar la longitud del contenedor. Comparado con una matriz donde tiene que definir qué tan grande es, su tamaño depende de su contenido.

`std::vector` es parte de la biblioteca estándar de C ++ (de ahí el prefijo `std::` y le permite almacenar datos contiguos del mismo tipo de datos. NOTA: **Todos los objetos dentro de un vector deben ser del mismo tipo de datos**

El tipo de datos que almacena dentro de un vector va entre paréntesis angulares junto a la palabra clave del vector. Por ejemplo, si desea almacenar una colección de cadenas, el vector sería `std::vector<std::string> vector_name`

_NOTA_ : ¡Debes incluir la biblioteca de vectores siempre que uses vectores!

`#include <vector>`

### Construcción de vectores

Hay muchas formas convenientes de construir un vector.

Usando una lista de intializer - donde los objetos están listados dentro de un conjunto de llaves: `{ }`

```cpp
std::vector<int> a{1, 2, 3, 4, 5}; // a is a vector of 5 ints: 1, 2, 3, 4 and 5 
 std::vector<std::string> b{"hello", "world"}; // b is a vector of 2 strings: "hello" and "world" 
 std::vector<bool> v; // v is an empty vector 
```

Construyéndolo a partir de otro vector (esto se conoce como una construcción de copia)

```cpp
std::vector<double> a{1.0, 2.0, 3.0}; 
 std::vector<double> b(a); // b is a vector of 3 doubles: 1.0, 2.0 and 3.0 
```

Inicializándolo con el mismo elemento:

```cpp
std::vector<int> a(100, -1); // a is a vector of 100 elements all set to -1 
```

### Iteradores vectoriales

Los iteradores se pueden considerar como punteros utilizados específicamente para navegar por los contenedores. (como los vectores). Los iteradores más importantes son `begin()` y `end()` . `begin()` devuelve un puntero al primer elemento en un vector mientras que los puntos `end()` a una posición después del último elemento en un vector. Como tal en bucle a través de una vector se puede hacer como:

```cpp
std::vector<int> vec{1, 2, 3}; 
 
 for(auto vec_it = vec.begin(); vec_it != vec.end(); it++){ 
    // since vec_it is a pointer and points to the memory address of the item 
    // inside the vector, vec_it must be dereferenced using '*' 
    std::cout << *it << '\n'; 
 } 
 /*  Output 
    1 
    2 
    3 
 */ 
```

### Modificar un vector

Empujando elementos a un vector:

```cpp
std::vector<int> vec; // constructs an empty vector 
 
 for (int i = 0; i < 10; i = i + 2){ 
    vec.push_back(i); 
 } 
 // vec now holds [0, 2, 4, 6, 8] 
```

Insertar un artículo en una posición particular es ligeramente diferente. El vector C ++ insert La función funciona en iteradores. Insertará el elemento dado una posición antes del dado. iterador

```cpp
std::vector<unsigned int> vec{3, 400, 12, 45}; 
 
 auto iter = vec.begin() + 2; // iter now points to '12' 
 vec.insert(iter, 38); // inserts '38' before '12' 
 
 // vec: [3, 400, 38, 12, 45] 
```

### Elemento de acceso

La biblioteca estándar proporciona diferentes funciones para acceder a elementos particulares en su vector.

```cpp
std::vector<std::string> a{"test", "element", "access"}; 
 
 std::string first_item = a.front(); // gets the first item of the vector ("test") 
 std::string last_item = a.back(); // gets the last item in the vector ("access") 
 
 // To get an element at a specific index (remember: vector indices start at 0) 
 std::string second_item = a.at(2); // gets "element" 
 // OR 
 std::string second_item = a[2]; // gets "element" 
```

### Bucle sobre elementos en un `vector`

El bucle sobre elementos en un C ++ `std::vector` es bastante diferente del bucle sobre elementos en un vector en JavaScript o Ruby. Debido a que C ++ es una abstracción delgada de C, solo puede recorrer elementos utilizando estas pequeñas y ingeniosas variables llamadas iteradores para acceder a cada elemento. Los iteradores a menudo vienen en forma de punteros que son variables que almacenan la dirección de memoria de otra variable. Puedes aprender más sobre punteros [aquí](https://www.tutorialspoint.com/cplusplus/cpp_pointers.htm) . Sin embargo, debido a que los iteradores actúan como punteros (o viceversa), para ver a qué apuntan, debe desreferirlo en una variable del tipo apropiado. Cómo hacemos esto? AQUÍ. NOSOTROS. ¡IR!

```cpp
std::vector<std::string> a{"test", "element", "access"}; 
 for(auto it = v.begin(); it != v.end(); it++) { //notice use of auto keyword 
    cout<<*it<<endl; //Will print out string that the iterator is currently ppointing to 
 } 
```

¡Desde aquí, puedes hacer todo tipo de cosas interesantes, como manipular el vector o desordenar el orden que desees!

### Algunas funciones útiles para miembros

La biblioteca de plantillas estándar (STL) también proporciona diferentes _métodos_ para usted:

```cpp
std::vector.size(); // returns the size of the vector (the number of positions in the vector) 
 std::vector.begin(); // returns an iterator which is a pointer to the beginning of the vector 
 std::vector.end(); // returns an iterator which is a pointer to the end of the vector 
 std::vector.empty(); // returns true if the vector is empty, otherwise returns false. 
 std::vector.front(); // returns the first element of the vector. 
 std::vector.back(); // returns the last element of the vector. 
 std::vector.push_back(n); // inserts the element "n" to the end of the vector. 
 std::vector.pop_back(n); // removes the last element of the vector 
```

### Iterador de vectores

Los iteradores proporcionan otro método para acceder a los elementos en tu vector.

Declaración del iterador.

```cpp
std::vector<int> v; 
 //Iterator delcaration for the above vector will correspond to 
 std::vector<int>::iterator it; 
```

Usando el iterador para imprimir elementos del vector usando for loop

```cpp
for(it=v.begin(); it!=v.end(); ++it) 
 //std::vector::begin and std::vector::end return iterator pointing to first and last element of the vector respectively. 
  cout<<*it; 
```

### Iterando a través de un vector

Existen diferentes formas de iterar a través de un vector y acceder a sus contenidos. Las siguientes formas son equivalentes, la primera implica el uso de una expresión basada en rango (desde C ++ 11), la segunda utiliza iteradores y la última es una iteración basada en índices

\`\` \`cpp

# incluir

# incluir

// Primero declara el vector std :: vector myVector {1, 2, 3, 4, 5}; // a es un vector de 5 pulgadas: 1, 2, 3, 4 y 5

// Usando un bucle basado en rango (desde C ++ 11) for (int element: myVector) {// Se lee como "para cada elemento en myVector" std :: cout << "El elemento es" << elemento << std :: endl; }

// Usando un iterador std :: vector :: iterador it; // Declara el iterador para (it = myVector.begin (); it! = myVector.end (); ++ it) { std :: cout << "El elemento es" << \* it << std :: endl; // Dereferencia del iterador para acceder a sus datos. }

// Usando índices para (std :: vector :: size\_type i = 0; i! = myVector.size (); i ++) { std :: cout << "El elemento es" << myVector \[i\] << std :: endl; // Dereferencia del iterador para acceder a sus datos. }
```
### Sorting A Vector In Ascending Order 
 Sorting a vector based on ascending order can be done with the help of Sort() in C++. 
```

cpp

# incluir

# incluir

# incluir

utilizando namespace std;

int main () {

vector v {10, 5, 82, 69, 64, 70, 3, 42, 28, 0}; sort (v.begin (), v.end ());

cout << "Contenido de vectores ordenados en orden ascendente: \\ n"; para (int e: v) { cout << e << ""; }

devuelve 0; }
```
### Sorting Vector In Descending Order 
 Sorting Vector in descending order can be done with the help of third argument namely greater<int>() in Sort() in C++. 
```

cpp

# incluir

# incluir

# incluir

utilizando namespace std;

int main () {

vector v {10, 5, 82, 69, 64, 70, 3, 42, 28, 0}; sort (v.begin (), v.end (), mayor ());

cout << "Contenido de vectores ordenados en orden ascendente: \\ n"; para (int e: v) { cout << e << ""; }

devuelve 0; } \`\` \`