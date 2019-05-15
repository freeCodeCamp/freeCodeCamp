---
title: C++ Arrays
localeTitle: Matrizes C ++
---
## O que são matrizes?

Uma matriz é uma série de elementos do mesmo tipo de dados que são armazenados em locais de memória contígua e podem ser referenciados individualmente.

Por exemplo, uma matriz contendo 5 valores inteiros chamados números é declarada da seguinte forma:

```cpp
int numbers [5]; 
```

Inicialização:

```cpp
//Initialization with entries: 
 int numbers [5] = {1, 2, 3, 4, 5}; 
 
 //Initialization with no values: 
 int numbers [5] = {}; 
 
 //Initialization with declaration: 
 int numbers [] = {1, 2, 3, 4, 5}; 
 //Note that here the number of values defines the size of the array. 
 //In the examples above, the size was fixed beforehand 
```

**Observe** que as matrizes em C ++ não são permutáveis ​​em tamanho, o que significa que, uma vez que você tenha declarado uma matriz com tamanho 5, ela não poderá ser ampliada ou diminuída. Caso você realmente precise de uma matriz maior com as mesmas entradas, você teria que copiar todas as entradas para uma nova matriz de tamanho maior.

### Acesso:

Elementos de uma matriz podem ser acessados ​​por referência de sua posição na matriz. (Comece a contar de 0).  
Exemplo:

```cpp
x = numbers[0]; // = 1. [0] == first position 
 numbers[2] = 55; // Sets the third position (3) to the new number 55 
 //numbers[] is now: {1, 2, 55, 4, 5} 

```