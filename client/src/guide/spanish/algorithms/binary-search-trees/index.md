---
title: Binary Search Trees
localeTitle: Árboles binarios de búsqueda
---
## Árboles binarios de búsqueda

![Árbol de búsqueda binaria](https://cdn-images-1.medium.com/max/1320/0*x5o1G1UpM1RfLpyx.png)

Un árbol es una estructura de datos compuesta de nodos que tiene las siguientes características:

1.  Cada árbol tiene un nodo raíz (en la parte superior) que tiene algún valor.
2.  El nodo raíz tiene cero o más nodos secundarios.
3.  Cada nodo secundario tiene cero o más nodos secundarios, y así sucesivamente. Esto crea un subárbol en el árbol. Cada nodo tiene su propio subárbol compuesto por sus hijos y sus hijos, etc. Esto significa que cada nodo por sí solo puede ser un árbol.

Un árbol de búsqueda binario (BST) agrega estas dos características:

1.  Cada nodo tiene un máximo de hasta dos hijos.
2.  Para cada nodo, los valores de sus nodos descendientes izquierdos son menores que los del nodo actual, que a su vez es menor que los nodos descendientes derechos (si los hay).

El BST se basa en la idea del algoritmo de [búsqueda binario](https://guide.freecodecamp.org/algorithms/search-algorithms/binary-search) , que permite una rápida búsqueda, inserción y eliminación de nodos. La forma en que se configuran significa que, en promedio, cada comparación permite que las operaciones omitan aproximadamente la mitad del árbol, de modo que cada búsqueda, inserción o eliminación requiera un tiempo proporcional al logaritmo del número de elementos almacenados en el árbol. `O(log n)` . Sin embargo, algunas veces puede ocurrir el peor de los casos, cuando el árbol no está equilibrado y la complejidad del tiempo es `O(n)` para las tres funciones. Es por eso que los árboles de auto-equilibrio (AVL, rojo-negro, etc.) son mucho más efectivos que el BST básico.

**Ejemplo de peor escenario:** esto puede suceder cuando continúa agregando nodos que _siempre_ son más grandes que el nodo anterior (es el principal), lo mismo puede suceder cuando siempre agrega nodos con valores más bajos que sus padres.

### Operaciones básicas en un BST

*   Crear: crea un árbol vacío.
*   Insertar: insertar un nodo en el árbol.
*   Buscar: busca un nodo en el árbol.
*   Eliminar: elimina un nodo del árbol.

#### Crear

Inicialmente se crea un árbol vacío sin ningún nodo. La variable / identificador que debe apuntar al nodo raíz se inicializa con un valor `NULL` .

#### Buscar

Siempre empiezas a buscar el árbol en el nodo raíz y bajas desde allí. Usted compara los datos en cada nodo con el que está buscando. Si el nodo comparado no coincide, entonces puede ir al hijo derecho o al hijo izquierdo, lo que depende del resultado de la siguiente comparación: Si el nodo que está buscando es más bajo que el que lo comparó, se pasa al niño izquierdo, de lo contrario (si es más grande) se va al niño derecho. ¿Por qué? Debido a que la BST está estructurada (según su definición), el niño derecho siempre es más grande que el padre y el niño izquierdo siempre es menor.

#### Insertar

Es muy similar a la función de búsqueda. Nuevamente comienza en la raíz del árbol y baja recursivamente, buscando el lugar correcto para insertar nuestro nuevo nodo, de la misma manera que se explica en la función de búsqueda. Si un nodo con el mismo valor ya está en el árbol, puede elegir insertar el duplicado o no. Algunos árboles permiten duplicados, otros no. Depende de la implementación determinada.

#### Supresión

Hay 3 casos que pueden ocurrir cuando intenta eliminar un nodo. Si tiene

1.  Sin subárbol (sin hijos): Este es el más fácil. Simplemente puede eliminar el nodo, sin que se requiera ninguna acción adicional.
2.  Un subárbol (un hijo): debe asegurarse de que, después de que se elimine el nodo, su hijo se conecte al padre del nodo eliminado.
3.  Dos subárboles (dos hijos): debe buscar y reemplazar el nodo que desea eliminar con su sucesor (el nodo más pequeño en el subárbol derecho).

La complejidad del tiempo para crear un árbol es `O(1)` . La complejidad del tiempo para buscar, insertar o eliminar un nodo depende de la altura del árbol `h` , por lo que el peor de los casos es `O(h)` .

#### Predecesor de un nodo

Los predecesores pueden describirse como el nodo que vendría justo antes del nodo en el que se encuentra actualmente. Para encontrar el predecesor del nodo actual, mire el nodo de hoja más grande a la derecha en el subárbol de la izquierda.

#### Sucesor de un nodo

Los sucesores pueden describirse como el nodo que vendría justo después del nodo en el que se encuentra actualmente. Para encontrar el sucesor del nodo actual, mire el nodo hoja más pequeño / más a la izquierda en el subárbol derecho.

### Tipos especiales de BT

*   Montón
*   Árbol rojo-negro
*   Árbol B
*   Árbol extendido
*   Arbol n-ario
*   Trie (árbol de la raíz)

### Tiempo de ejecución

**Estructura de datos: Array**

*   El peor desempeño de caso: `O(log n)`
*   El mejor rendimiento del caso: `O(1)`
*   Rendimiento promedio: `O(log n)`
*   La peor complejidad del espacio: `O(1)`

Donde `n` es el número de nodos en la BST.

### Implementación de BST

Aquí hay una definición para un nodo BST que tiene algunos datos, haciendo referencia a sus nodos secundarios izquierdo y derecho.

```c
struct node { 
   int data; 
   struct node *leftChild; 
   struct node *rightChild; 
 }; 
```

#### Operación de búsqueda

Siempre que se busque un elemento, comience a buscar desde el nodo raíz. Luego, si los datos son menores que el valor clave, busque el elemento en el subárbol izquierdo. De lo contrario, busque el elemento en el subárbol derecho. Siga el mismo algoritmo para cada nodo.

```c
struct node* search(int data){ 
   struct node *current = root; 
   printf("Visiting elements: "); 
 
   while(current->data != data){ 
 
      if(current != NULL) { 
         printf("%d ",current->data); 
 
         //go to left tree 
         if(current->data > data){ 
            current = current->leftChild; 
         }//else go to right tree 
         else { 
            current = current->rightChild; 
         } 
 
         //not found 
         if(current == NULL){ 
            return NULL; 
         } 
      } 
   } 
   return current; 
 } 
```

#### Insertar Operación

Siempre que se inserte un elemento, primero ubique su ubicación correcta. Comience a buscar desde el nodo raíz, luego, si los datos son menores que el valor clave, busque la ubicación vacía en el subárbol izquierdo e inserte los datos. De lo contrario, busque la ubicación vacía en el subárbol derecho e inserte los datos.

```c
void insert(int data) { 
   struct node *tempNode = (struct node*) malloc(sizeof(struct node)); 
   struct node *current; 
   struct node *parent; 
 
   tempNode->data = data; 
   tempNode->leftChild = NULL; 
   tempNode->rightChild = NULL; 
 
   //if tree is empty 
   if(root == NULL) { 
      root = tempNode; 
   } else { 
      current = root; 
      parent = NULL; 
 
      while(1) { 
         parent = current; 
 
         //go to left of the tree 
         if(data < parent->data) { 
            current = current->leftChild; 
            //insert to the left 
 
            if(current == NULL) { 
               parent->leftChild = tempNode; 
               return; 
            } 
         }//go to right of the tree 
         else { 
            current = current->rightChild; 
 
            //insert to the right 
            if(current == NULL) { 
               parent->rightChild = tempNode; 
               return; 
            } 
         } 
      } 
   } 
 } 
```

Los árboles de búsqueda binarios (BST) también nos dan acceso rápido a predecesores y sucesores. Los predecesores pueden describirse como el nodo que vendría justo antes del nodo en el que se encuentra actualmente.

*   Para encontrar el predecesor del nodo actual, observe el nodo de hoja más a la derecha / más grande en el subárbol de la izquierda. Los sucesores pueden describirse como el nodo que vendría justo después del nodo en el que se encuentra actualmente.
*   Para encontrar el sucesor del nodo actual, mire el nodo de hoja más a la izquierda / más pequeño en el subárbol derecho.

### Echemos un vistazo a un par de procedimientos que operan en los árboles.

Dado que los árboles se definen recursivamente, es muy común escribir rutinas que operan en árboles que son recursivos.

Entonces, por ejemplo, si queremos calcular la altura de un árbol, que es la altura de un nodo raíz, podemos seguir adelante y recursivamente hacerlo, atravesando el árbol. Así que podemos decir:

*   Por ejemplo, si tenemos un árbol nulo, entonces su altura es un 0.
*   De lo contrario, Somos 1 más el máximo del árbol secundario izquierdo y el árbol secundario derecho.
*   Entonces, si miramos una hoja, por ejemplo, esa altura sería 1 porque la altura del niño izquierdo es nula, es 0, y la altura del niño nulo derecho también es 0. Entonces, el máximo de eso es 0, entonces 1 más 0.

#### Algoritmo de altura (árbol)
```
if tree = nil: 
    return 0 
 return 1 + Max(Height(tree.left),Height(tree.right)) 
```

#### Aquí está el código en C ++
```
int maxDepth(struct node* node) 
 { 
    if (node==NULL) 
        return 0; 
   else 
   { 
       int rDepth = maxDepth(node->right); 
       int lDepth = maxDepth(node->left); 
 
       if (lDepth > rDepth) 
       { 
           return(lDepth+1); 
       } 
       else 
       { 
            return(rDepth+1); 
       } 
   } 
 } 
```

También podríamos considerar el cálculo del tamaño de un árbol que es el número de nodos.

*   Nuevamente, si tenemos un árbol nulo, tenemos cero nodos.
*   De lo contrario, tenemos el número de nodos en el hijo izquierdo más 1 para nosotros, más el número de nodos en el niño derecho. Entonces 1 más el tamaño del árbol izquierdo más el tamaño del árbol derecho.

#### Algoritmo de tamaño (árbol)
```
if tree = nil 
    return 0 
 return 1 + Size(tree.left) + Size(tree.right) 
```

#### Aquí está el código en C ++
```
int treeSize(struct node* node) 
 { 
    if (node==NULL) 
        return 0; 
    else 
        return 1+(treeSize(node->left) + treeSize(node->right)); 
 } 
```

### Videos relevantes en el canal de YouTube freeCodeCamp

*   [Árbol de búsqueda binaria](https://youtu.be/5cU1ILGy6dM)
*   [Árbol binario de búsqueda: Traversal y Altura](https://youtu.be/Aagf3RyK3Lw)

### Los siguientes son tipos comunes de árboles binarios:

Árbol binario completo / Árbol binario estricto: un árbol binario es completo o estricto si cada nodo tiene exactamente 0 o 2 hijos.
```
           18 
       /       \ 
     15         30 
    /  \        /  \ 
  40    50    100   40 
```

En el árbol binario completo, el número de nodos hoja es igual al número de nodos internos más uno.

Árbol binario completo: Un árbol binario es un árbol binario completo si todos los niveles están completamente llenos excepto posiblemente el último nivel y el último nivel tiene todas las claves lo más a la izquierda posible.
```
           18 
       /       \ 
     15         30 
    /  \        /  \ 
  40    50    100   40 
 /  \   / 
 8   7  9 

```