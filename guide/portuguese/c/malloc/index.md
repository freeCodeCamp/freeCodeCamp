---
title: malloc
localeTitle: malloc
---
# malloc em C

malloc () é uma função de biblioteca que permite que C aloque dinamicamente a memória do heap. O heap é uma área da memória em que algo é armazenado.

malloc () faz parte do stdlib.h e para poder usá-lo você precisa usar `#include <stdlib.h>` .

## Usando Malloc

malloc () aloca memória de um tamanho solicitado e retorna um ponteiro para o início do bloco alocado. Para manter este ponteiro retornado, devemos criar uma variável. O ponteiro deve ser do mesmo tipo usado na instrução malloc.  
Aqui vamos fazer um ponteiro para um conjunto de ints

```C
int* arrayPtr; 
```

Ao contrário de outras linguagens, C não sabe o tipo de dados para o qual está alocando memória; precisa ser contada. Felizmente, C tem uma função chamada `sizeof()` que podemos usar.

```C
arrayPtr = (int *)malloc(10 * sizeof(int)); 
```

Esta declaração usou malloc para separar memória para um array de 10 inteiros. Como os tamanhos podem mudar entre os computadores, é importante usar a função sizeof () para calcular o tamanho no computador atual.

Qualquer memória alocada durante a execução do programa precisará ser liberada antes do fechamento do programa. Para `free` memória, podemos usar a função free ()

```C
free( arrayPtr ); 
```

Esta declaração desalocará a memória anteriormente alocada. C não vem com um `garbage collector` como outras linguagens, como Java. Como resultado, a memória não liberada corretamente continuará a ser alocada após o programa ser fechado.

# Antes de você ir ...

## Uma revisão

*   O Malloc é usado para alocação de memória dinâmica e é útil quando você não sabe a quantidade de memória necessária durante o tempo de compilação.
*   A alocação de memória permite que objetos existam além do escopo do bloco atual.
*   C passa por valor em vez de referência. Usando malloc para atribuir memória e, em seguida, passar o ponteiro para outra função, é mais eficiente do que ter a função recriar a estrutura.