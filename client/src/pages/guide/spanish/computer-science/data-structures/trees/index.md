---
title: Trees
localeTitle: Arboles
---
# Arboles

Una estructura de datos de árbol se puede definir recursivamente (localmente) como una colección de nodos (comenzando en un nodo raíz), donde cada nodo es una estructura de datos que consiste en un valor, junto con una lista de referencias a nodos (los "hijos") , con las restricciones de que ninguna referencia está duplicada, y ninguna apunta a la raíz. Un árbol sin nodos se denomina árbol nulo o vacío.

Un árbol binario es una estructura de datos no lineal que consta de nodos, donde cada nodo tiene los siguientes 3 componentes:

**Elemento de datos** : almacena cualquier tipo de datos en el nodo. **Puntero izquierdo** : apunta al subárbol en el lado izquierdo del nodo **Puntero derecho** : apunta al subárbol en el lado derecho del nodo Como su nombre indica, el elemento de datos almacena cualquier tipo de datos en el nodo. Los punteros izquierdo y derecho apuntan a árboles binarios en el lado izquierdo y derecho del nodo, respectivamente.

Si un árbol está vacío, está representado por un puntero nulo.

## Terminología utilizada en los árboles:

**Raíz** El nodo superior en un árbol.

**Niño** Un nodo conectado directamente a otro nodo cuando se aleja de la raíz.

**Padre** : La noción inversa de un niño.

**Hermanos** Un grupo de nodos con el mismo padre.

**Descendiente** Un nodo al que se puede acceder mediante el procedimiento repetido de padre a hijo.

**Antepasado** Un nodo al que se puede acceder mediante el procedimiento repetido de hijo a padre.

**Rama** (nodo interno): Un nodo de un árbol que tiene nodos hijos.

**Hoja** (menos comúnmente llamada nodo externo): Un nodo sin hijos.

**Grado** : El número de subárboles de un nodo.

**Borde** : La conexión entre un nodo y otro.

**Camino** Una secuencia de nodos y bordes que conectan un nodo con un descendiente.

**Nivel** : El nivel de un nodo se define por 1 + (el número de conexiones entre el nodo y la raíz).

**Altura del árbol** : La altura de un árbol es la altura de su nodo raíz.

**Profundidad** La profundidad de un nodo es el número de bordes desde el nodo raíz del árbol hasta el nodo.

**Bosque** Un bosque es un conjunto de n ≥ 0 árboles disjuntos.

### Algunos tipos populares de árboles:

*   Árbol binario
*   Árbol de búsqueda binaria
*   Árbol AVL
*   Árbol negro rojo
*   Splay tree
*   Árbol de huffmann

### Usos comunes

*   Representando datos jerárquicos
*   Almacenar los datos de una manera que hace que sea fácil de buscar
*   Representando listas ordenadas de datos
*   Algoritmos de enrutamiento

### Código de un nodo de árbol

\`\` \`c\_cpp nodo de estructura { datos int // elemento de datos estructura nodo \* izquierda; // Puntero al nodo izquierdo struct node \* right; // Puntero al nodo derecho };

\`\` \`

#### Más información:

*   [Notas de la lección de CMU](http://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm)
*   [Wikipedia](https://en.wikipedia.org/wiki/Tree_(data_structure))