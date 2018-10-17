---
title: queue
localeTitle: cola
---
## Colas

`queue` es uno de los contenedores más utilizados en C ++. Un contenedor es una estructura de datos que almacena una colección de objetos, algunos en orden, otros no. Todos los contenedores tienen un conjunto diferente de funciones que le permiten acceder a un objeto (s) en esa colección.

`std::queue` es parte de la biblioteca estándar de C ++ (de ahí el prefijo `std::` y le permite almacenar datos en el orden First In First Out (FIFO). NOTA: **Todos los objetos dentro de una cola deben ser del mismo tipo de datos**

El tipo de datos que almacena dentro de una cola va entre paréntesis angulares junto a la palabra clave de la cola. Por ejemplo, si desea almacenar una colección de enteros, la cola sería `std::queue<int> queue_name`

### Explicación de cola LIFO

`queue` nos permite empujar / poner en cola y hacer pop / sacar de la cola en un orden específico. **Empujar** significa insertar un objeto en la parte delantera de la cola. **Pop** significa sacar el objeto "más antiguo" del final de la cola. Así que cuando lo presionas está en la parte delantera y cuando haces pop extraes el elemento más antiguo.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Fifo_queue.png "Ejemplo de cola y salida de cola FIFO")

### Operaciones de cola

El contenedor de cola soporta las siguientes operaciones:

*   empujar (poner en cola)
*   pop (dequeue)
*   vacío
*   tamaño
*   frente
*   espalda

#### empujar

Le permite insertar un nuevo elemento al final de la cola, después de su último elemento actual.

```cpp
//Push operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  return 0; 
 } 
```

#### Frente

Le permite acceder al siguiente elemento en la cola sin eliminarlo. El siguiente elemento es el elemento "más antiguo" en la cola.

```cpp
//Front operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
 
  return 0; 
 } 
```

```
Output: 
 1 
 1 
```

#### Popular

Le permite eliminar el siguiente elemento en la cola, reduciendo efectivamente su tamaño en uno. El elemento eliminado es el elemento "más antiguo".

```cpp
//Pop operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
 
  return 0; 
 } 
```

```
Output: 
 1 
 2 
```

#### tamaño

Devuelve el número de elementos en la `queue` .

```cpp
//Size operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
 
  return 0; 
 } 
```

```
Output: 
 2 
 1 
 0 
```

#### Vacío

Devuelve si la `queue` está vacía, es decir, si el tamaño de la cola es cero. Devuelve `true` si el tamaño de la cola 0, si no, devuelve `false`

\`\` \`cpp // operación vacía en la cola

# incluir // std :: cout

# incluir // std :: stack

int main () { std :: queue q;

q.push (1); q.push (2);

while (q.empty ()! = true) { std :: cout << q.front () << '\\ n'; q.pop (); }

std :: cout << "Out of loop" << '\\ n'; devuelve 0; }
```
    Output: 
    1 
    2 
    Out of loop 
 
 #### Back 
 
 Allows you to access the last element in the queue without removing it. 
 The next element is the "newest" element in the queue. 
```

cpp // Operación trasera en cola

# incluir // std :: cout

# incluir // std :: queue

int main () { std :: queue q;

q.push (1); // Empujando 1 al frente de la cola q.push (2); // Empujando 2 al frente de la cola

std :: cout << q.back () << '\\ n'; // Accediendo al dorso de la cola std :: cout << q.back () << '\\ n'; // Accediendo al dorso de la cola

devuelve 0; } \`\` \`
```
Output: 
 2 
 2 
```

### Para más recursos:

http://www.cplusplus.com/reference/queue/queue/

### Citaciones:

Cortesía de imagen: https://en.wikipedia.org/wiki/FIFO _(computación y_ electrónica)