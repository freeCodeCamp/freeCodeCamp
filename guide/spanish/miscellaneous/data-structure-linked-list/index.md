---
title: Data Structure Linked List
localeTitle: Lista enlazada de estructura de datos
---
Al igual que una guirnalda está hecha con flores, una lista enlazada está formada por nodos. Llamamos a cada flor en esta guirnalda particular para ser un nodo. Y cada uno de los nodos apunta al siguiente nodo en esta lista, así como también tiene datos (aquí es el tipo de flor).

## Los tipos

1.  Lista enlazada individualmente

Las listas enlazadas individualmente contienen nodos que tienen un campo de `data` así como un campo `next` , que apunta al siguiente nodo en la secuencia. Las operaciones que se pueden realizar en listas enlazadas individualmente son inserción, eliminación y recorrido.

\`
```
Singly Link List 
```

* * *
```
   head 
    | 
    | 
  +-----+--+      +-----+--+      +-----+------+ 
  |  1  |o----->  |  2  |o----->  |  3  | NULL | 
  +-----+--+      +-----+--+      +-----+------+ 
```

\`

Solicitud

Implementación interna de CPython, los marcos y las variables evaluadas se mantienen en una pila.

Para esto necesitamos iterar solo hacia adelante aur get the head, por lo tanto se usa una lista enlazada individualmente.

1.  Lista doblemente vinculada

Las listas doblemente enlazadas contienen un nodo que tiene `data` campo de `data` , el `next` campo y otro campo de enlace `prev` apuntando al nodo anterior en la secuencia.

\`

Lista doblemente vinculada

* * *
```
          head 
           | 
           | 
  +------+-----+--+    +--+-----+--+       +-----+------+ 
  |      |     |o------>  |     |o------>  |     |      | 
  | NULL |  1  |          |  2  |          |  3  | NULL | 
  |      |     |  <------o|     |  <------o|     |      | 
  +------+-----+--+    +--+-----+--+       +-----+------+ 
```

\`

Solicitud

El caché del navegador que le permite presionar el botón ATRÁS y ADELANTE. Aquí necesitamos mantener una lista doblemente enlazada, con las `URLs` como campo de datos, para permitir el acceso en ambas direcciones. Para ir a la URL anterior usaremos el campo `prev` y para ir a la página `next` usaremos el `next` campo.

1.  Lista enlazada circular

Las listas enlazadas circulares son una lista enlazada individualmente en la que el último nodo, el `next` campo apunta al primer nodo en la secuencia.

\`

Lista enlazada circular

* * *
```
     head 
      | 
      | 
    +-----+--+      +-----+--+      +-----+--+ 
```

\-> | 1 | o -----> | 2 | o -----> | 3 | o ----  
| + ----- + - + + ----- + - + + ----- + - + |  
| |

* * *

\`

**Solicitud**

Problema de multipropiedad resuelto por el sistema operativo.

En un entorno de tiempo compartido, el sistema operativo debe mantener una lista de los usuarios actuales y, alternativamente, debe permitir que cada usuario use una pequeña parte del tiempo de CPU, un usuario a la vez. El sistema operativo seleccionará un usuario, le permitirá usar una pequeña cantidad de tiempo de CPU y luego pasar al siguiente usuario.

Para esta aplicación, no debería haber punteros NULL a menos que no haya absolutamente nadie solicitando el tiempo de CPU, es decir, la lista está vacía.

## Operaciones básicas

1.  Inserción

Para agregar un nuevo elemento a la lista.

\`

Inserción al principio

* * *

*   Crea un nuevo nodo con los datos dados.
*   Apunta el nuevo nodo al `next` de la `head` vieja.
*   Punto de `head` a este nuevo nodo.

Inserción en el medio / final

* * *

Inserción después del nodo X.

*   Crea un nuevo nodo con los datos dados.
*   Nuevo punto de nodo `next` al antiguo X del `next` .
*   El punto X está `next` a este nuevo nodo.  
    \`

**Complejidad del tiempo: O (1)**

1.  Supresión

Para eliminar elementos existentes de la lista.

\`

Supresión al inicio

* * *

*   Obtener el nodo señalado por la `head` como Temp.
*   Punto de `head` a la `next` la temperatura.
*   Memoria libre utilizada por el nodo Temp.

Eliminación en el medio / final

* * *

Eliminación después del nodo X.

*   Obtener el nodo señalado por `X` como Temp.
*   Del punto X `next` a de temperatura `next` .
*   Memoria libre utilizada por el nodo Temp.  
    \`

**Complejidad del tiempo: O (1)**

1.  Atravesando

Para viajar por la lista.

\`

Travesía

* * *

*   Obtener el nodo señalado por la `head` como actual.
*   Compruebe si la corriente no es nula y visualícela.
*   El punto actual a la corriente es el `next` y pasar al paso anterior.  
    \`

**Complejidad de tiempo: O (n) // Aquí n es el tamaño de la lista de enlaces**

## Implementación

### Implementación en C ++ de una lista unida
```
// Header files 
 #include <iostream> 
 
 struct node 
 { 
    int data; 
    struct node *next; 
 }; 
 
 // Head pointer always points to first element of the linked list 
 struct node *head = NULL; 
```

#### Impresión de datos en cada nodo.
```
// Display the list 
 void printList() 
 { 
    struct node *ptr = head; 
 
    // Start from the beginning 
 while(ptr != NULL) 
 { 
    std::cout << ptr->data << " "; 
    ptr = ptr->next; 
 } 
 
 std::cout << std::endl; 
 } 
```

#### Inserción al principio
```
// Insert link at the beginning 
 void insertFirst(int data) 
 { 
    // Create a new node 
    struct node *new_node = new struct node; 
 
    new_node->data = data; 
 
 // Point it to old head 
 new_node->next = head; 
 
 // Point head to new node 
 head = new_node; 
 
 std::cout << "Inserted successfully" << std::endl; 
 } 
```

#### Supresión al inicio
```
// Delete first item 
 void deleteFirst() 
 { 
    // Save reference to head 
    struct node *temp = head; 
 
    // Point head to head's next 
 head = head->next; 
 
 // Free memory used by temp 
 temp = NULL: 
 delete temp; 
 
 std::cout << "Deleted successfully" << std::endl; 
 } 
```

#### tamaño
```
// Find no. of nodes in link list 
 void size() 
 { 
    int length = 0; 
    struct node *current; 
 
    for(current = head; current != NULL; current = current->next) 
 { 
    length++; 
 } 
 
 std::cout << "Size of Linked List is " << length << std::endl; 
 } 
```

#### buscando
```
// Find node with given data 
 void find(int data){ 
 
    // Start from the head 
 struct node* current = head; 
 
 // If list is empty 
 if(head == NULL) 
 { 
    std::cout << "List is empty" << std::endl; 
    return; 
 } 
 
 // Traverse through list 
 while(current->data != data){ 
 
    // If it is last node 
    if(current->next == NULL){ 
        std::cout << "Not Found" << std::endl; 
        return; 
    } 
    else{ 
        // Go to next node 
        current = current->next; 
    } 
 } 
 
 // If data found 
 std::cout << "Found" << std::endl; 
 } 
```

#### Eliminación después de un nodo
```
// Delete a node with given data 
 void del(int data){ 
 
    // Start from the first node 
 struct node* current = head; 
 struct node* previous = NULL; 
 
 // If list is empty 
 if(head == NULL){ 
    std::cout << "List is empty" << std::endl; 
    return ; 
 } 
 
 // Navigate through list 
 while(current->data != data){ 
 
    // If it is last node 
    if(current->next == NULL){ 
        std::cout << "Element not found" << std::endl; 
        return ; 
    } 
    else { 
        // Store reference to current node 
        previous = current; 
        // Move to next node 
        current = current->next; 
    } 
 
 } 
 
 // Found a match, update the node 
 if(current == head) { 
    // Change head to point to next node 
    head = head->next; 
 } 
 else { 
    // Skip the current node 
    previous->next = current->next; 
 } 
 
 // Free space used by deleted node 
 current = NULL; 
 delete current; 
 std::cout << "Deleted succesfully" << std::endl; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CXVt/1)

### Implementación de Python de la lista enlazada individualmente
```
class Node(object): 
    # Constructor 
    def __init__(self, data=None, next=None): 
        self.data = data 
        self.next = next 
 
    # Function to get data 
 def get_data(self): 
    return self.data 
 
 # Function to get next node 
 def get_next(self): 
    return self.next 
 
 # Function to set next field 
 def set_next(self, new_next): 
    self.next = new_next 
 class LinkedList(object): 
    def __init__(self, head=None): 
        self.head = head 
```

#### Inserción
```
    # Function to insert data 
 def insert(self, data): 
    # new_node is a object of class Node 
    new_node = Node(data) 
    new_node.set_next(self.head) 
    self.head = new_node 
    print("Node with data " + str(data) + " is created succesfully") 
```

#### tamaño
```
    # Function to get size 
 def size(self): 
    current = self.head 
    count = 0 
    while current: 
        count += 1 
        current = current.get_next() 
    print("Size of link list is " + str(count)) 
```

#### buscando
```
    # Function to search a data 
 def search(self, data): 
    current = self.head 
    found = False 
    while current and found is False: 
        if current.get_data() == data: 
            found = True 
        else: 
            current = current.get_next() 
    if current is None: 
        print("Node with data " + str(data) + " is not present") 
    else: 
        print("Node with data " + str(data) + " is found") 
```

#### Eliminación después de un nodo
```
    # Function to delete a node with data 
 def delete(self, data): 
    current = self.head 
    previous = None 
    found = False 
    while current and found is False: 
        if current.get_data() == data: 
            found = True 
        else: 
            previous = current 
            current = current.get_next() 
    if current is None: 
        print("Node with data " + str(data) + " is not in list") 
    elif previous is None: 
        self.head = current.get_next() 
        print("Node with data " + str(data) + " is deleted successfully") 
    else: 
        previous.set_next(current.get_next()) 
        print("Node with data " + str(data) + " is deleted successfully") 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CVq3/2)

**Ventajas**

1.  Las listas enlazadas son una estructura de datos dinámica, que puede aumentar y disminuir, asignando y desasignando memoria mientras el programa se está ejecutando.
2.  La inserción y eliminación de nodos se implementan fácilmente en una lista vinculada en cualquier posición.

**Desventajas**

1.  Utilizan más memoria que las matrices debido a la memoria utilizada por sus punteros ( `next` y `prev` ).
2.  El acceso aleatorio no es posible en la lista enlazada. Tenemos que acceder a los nodos de forma secuencial.
3.  Es más complejo que la matriz. Si un idioma admite la comprobación de la matriz de forma automática, Arrays le será de mayor utilidad.

#### Nota

Tenemos que usar free () en C y eliminar en C ++ para liberar el espacio utilizado por el nodo eliminado, mientras que, en Python y Java, el espacio libre es recolectado automáticamente por el recolector de basura.