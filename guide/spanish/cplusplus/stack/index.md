---
title: stack
localeTitle: apilar
---
## Pilas

`stack` es uno de los contenedores más utilizados en C ++. Un contenedor es una estructura de datos que almacena una colección de objetos, algunos en orden, otros no. Todos los contenedores tienen un conjunto diferente de funciones que le permiten acceder a un objeto (s) en esa colección.

`std::stack` forma parte de la biblioteca estándar de C ++ (de ahí el prefijo `std::` y le permite almacenar datos en el orden Last In First Out (LIFO). NOTA: **Todos los objetos dentro de una pila deben ser del mismo tipo de datos**

El tipo de datos que almacena dentro de una pila va entre paréntesis angulares junto a la palabra clave de pila. Por ejemplo, si desea almacenar una colección de enteros, la pila sería `std::stack<int> stack_name`

### Explicación de pila LIFO

`stack` nos permite empujar y hacer estallar en orden específico. **Empujar** significa insertar un objeto en la parte superior de la pila. **Pop** significa sacar el último objeto insertado de la parte superior de la pila. Por lo tanto, cuando lo empuja, se encuentra en la parte superior y cuando abre, extrae el último elemento insertado.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Lifo_stack.png "Ejemplo de push y pop de pila LIFO")

### Operaciones de pila

El contenedor de pila admite las siguientes operaciones:

*   empujar
*   popular
*   vacío
*   tamaño
*   espalda

#### empujar

Le permite insertar un nuevo elemento en la parte superior de la pila, sobre el elemento superior actual.

```cpp
//Push operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  return 0; 
 } 
```

#### Parte superior

Le permite acceder al elemento superior sin quitarlo de su pila.

```cpp
//Top operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack 
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack 
 
  return 0; 
 } 
```

```
Output: 
 2 
 2 
```

#### Popular

Elimina el elemento en la parte superior de la pila, reduciendo efectivamente el tamaño de tu pila en uno.

```cpp
//Pop operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack 
 
 
  return 0; 
 } 
```

```
Output: 
 2 
 1 
```

#### tamaño

Devuelve el número de elementos en la `stack` .

```cpp
//Size operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
 
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

Devuelve si la `stack` está vacía, es decir, si el tamaño de tu pila es cero. Devuelve `true` si el tamaño de la pila 0 si no devuelve `false`

```cpp
//Empty operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1); 
  s.push(2); 
 
  while(s.empty() != false){ 
      std::cout<<s.top()<<'\n'; 
      s.pop(); 
  } 
 
  std::cout<<"Out of loop"<<'\n'; 
  return 0; 
 } 
```

```
Output: 
 2 
 1 
 Out of loop 

```