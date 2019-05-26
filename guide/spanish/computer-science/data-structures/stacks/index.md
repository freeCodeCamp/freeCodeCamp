---
title: Stacks
localeTitle: Pilas
---
## Pilas

Stacks es una estructura de datos First In Last Out (FILO). Es una estructura de datos lineal.

Se puede imaginar una pila como la forma en que se organizaron los platos en el restaurante buffet. Solo puedes recoger la placa en la parte superior, de lo contrario la pila se colapsará. Generalmente, el último elemento que se inserta se eliminará primero.

Algunas operaciones básicas de la pila son:

1.  Empujar: inserta un elemento en la parte superior de la pila.
2.  Pop: elimina un elemento en la parte superior de la pila.
3.  isEmpty - Comprueba si la pila está vacía o no
4.  Tamaño: devuelve el número de elementos en la pila (Todas las operaciones se pueden hacer en O (1) tiempo)

La implementación de una pila es posible utilizando matrices o listas vinculadas. La siguiente es una implementación de matriz simple de la estructura de datos de pila con sus operaciones más comunes.

```cpp
//Stack implementation using array in C++ 
 //You can also include<stack> and then use the C++ STL Library stack class. 
 
 #include <bits/stdc++.h> 
 
 using namespace std; 
 
 class Stack { 
    int t; 
    int arr[MaxN]; 
 public: 
    Stack() { 
        t = 0; 
    } 
    int size() { 
        return t; 
    } 
    bool isEmpty() { 
        return t < 1; 
    } 
    int top() { 
        return arr[t]; 
    } 
    void push(int x) { 
        if (++t >= MaxN) { 
            cout << "Stack is full" << '\n'; 
            return; 
        } 
        arr[t] = x; 
    } 
    void pop() { 
        arr[t--] = 0; 
    } 
 }; 
 
 int main() { 
    Stack st; 
 
    st.push(4); 
    st.push(3); 
    st.push(5); 
    while (!st.isEmpty()) { 
        cout << st.size() << ' ' << st.top() << '\n'; 
        st.pop(); 
    } 
    return 0; 
 } 
```

#### Usando matrices como pilas

En algunos lenguajes de programación, una matriz tiene la funcionalidad de pila, lo que permite al desarrollador realizar operaciones de **inserción** y **apertura** sin la necesidad de una estructura de datos de pila personalizada.

Por ejemplo, una matriz en JavaScript tiene métodos **push** y **pop** que permiten implementar fácilmente la funcionalidad de pila en una aplicación.

```js
stack = []; 
 
 let i = 0; 
 while(i < 5) 
  stack.push(i++); 
 
 while(stack.length) { 
  stack.pop(); 
 } 
```

Una Lista en Python también puede realizar la funcionalidad de pila en una aplicación. En lugar de **empujar** , se puede usar el método de **añadir** .

```python
stack = [] 
 
 for i in range(5): 
    stack.append(i) 
 
 while len(stack): 
    stack.pop() 
```

#### Aplicaciones

*   Gire la recursión en bucle.
*   Rehacer-deshacer características.
*   Solucionador de sudoku
*   Primera búsqueda de profundidad.
*   Travesías de arboles
*   Expresión de Infijo -> Expresión de Prefijo / Postfijo
*   Paréntesis válidos

#### Más información:

*   [Más información sobre las pilas - GeeksForGeeks](http://www.geeksforgeeks.org/stack-data-structure/)
*   [Stack - Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
*   [El problema de la Torre de Hanoi y cómo la solución usa pilas y recursiones](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
*   [HackerRank Stacks and Queues Video](https://www.youtube.com/watch?v=wjI1WNcIntg)