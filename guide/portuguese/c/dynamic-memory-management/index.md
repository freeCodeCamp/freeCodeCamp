---
title: Dinamic Memory Management
localeTitle: Gerenciamento Dinâmico de Memória
---
# Gerenciamento Dinâmico de Memória

Às vezes, você precisará alocar espaços de memória no heap, também conhecidos como memória dinâmica. Isso é especialmente útil quando você não sabe durante o tempo de compilação o tamanho da estrutura de dados (como uma matriz).

## Um exemplo

Aqui está um exemplo simples onde alocamos um array pedindo ao usuário para escolher a dimensão

```C
#include <stdio.h> 
 #include <stdlib.h> 
 
 int main(void) { 
    int arrayDimension,i; 
    int* arrayPointer; 
 
    scanf("Please insert the array dimension:%d",arrayDimension); 
    arrayPointer = (int*)malloc(sizeof(int)*arrayDimension); 
 
    if(arrayPointer == NULL){ 
      printf("Error allocating memory!"); 
      return -1; 
     } 
 
     for(i=0;i<arrayDimension;i++){ 
        printf("Insert the %d value of the array:",i+1); 
        scanf("%d\n",arrayPointer[i]); 
     } 
 
    free(arrayPointer); 
    return 0; 
 } 
```

Como você pode ver para alocar um espaço na memória dinâmica, você precisa saber como os ponteiros funcionam em C. A função mágica aqui é o `malloc` que retornará como saída um ponteiro vazio (é um ponteiro para uma região de tipo de dados desconhecido) para o novo espaço de memória que acabamos de alocar. Vamos ver como usar essa função passo a passo:

## Alocando uma matriz durante o tempo de execução

```C
sizeof(int) 
```

Vamos começar do `sizeof` . O `malloc` precisa saber quanto espaço aloca para seus dados. Na verdade, uma variável `int` usará menos espaço de armazenamento do que um `double` . Geralmente não é seguro assumir o tamanho de qualquer tipo de dados. Por exemplo, embora a maioria das implementações de C e C ++ em sistemas de 32 bits definam o tipo int como quatro octetos, esse tamanho pode mudar quando o código é portado para um sistema diferente, quebrando o código. `sizeof` como o nome sugere gera o tamanho de uma variável ou tipo de dados.

```C
arrayPointer = (int*) malloc(sizeof(int) * arrayDimension); 
```

Neste exemplo, malloc aloca memória e retorna um ponteiro para o bloco de memória. O tamanho do bloco alocado é igual ao número de bytes para um único objeto do tipo int multiplicado por `arrayDimension` , desde que o sistema tenha espaço suficiente disponível. Mas e se você não tem espaço suficiente ou `malloc` não pode alocá-lo por outras razões?

## Verificando a saída do malloc

Isso não acontece normalmente, mas é uma boa prática verificar o valor da sua variável de ponteiro depois de alocar um novo espaço de memória.

```C
    if(arrayPointer == NULL) 
      printf("Error allocating memory!"); 
```

Isso também será muito útil durante a fase de depuração e evitará alguns erros possíveis usando a última função usada no exemplo.

## Uma palavra em livre ()

Normalmente, as variáveis ​​são automaticamente desalocadas quando seu escopo é destruído, liberando a memória que elas estavam usando. Isso não acontece quando você aloca manualmente a memória usando o `malloc` . Para evitar vazamentos de memória em programas mais complexos e para não criar lixo no sistema, você tem que liberar a área de memória usada recentemente antes de finalizar sua execução de código.

```C
  free(arrayPointer); 
```

No final, você entenderá com certeza que a verificação do valor de `arrayPointer` foi necessária para evitar um erro usando a função `free` . Se o valor de `arrayPointer` fosse igual a `NULL` você poderia ter expirado algum tipo de bug.

## Outras funções semelhantes às malloc

Às vezes você precisa não apenas reservar uma nova área de memória para suas operações, você também pode precisar inicializar todos os bytes para zero. É para isso que o `calloc` é usado. Em outros casos, você deseja redimensionar a quantidade de memória apontada por um ponteiro. Por exemplo, se você tiver um ponteiro atuando como uma matriz de tamanho `n` e desejar alterá-lo para uma matriz de tamanho `m` , poderá usar `realloc` .

```C
  int *arr = malloc(2 * sizeof(int)); 
  arr[0] = 1; 
  arr[1] = 2; 
  arr = realloc(arr, 3 * sizeof(int)); 
  arr[2] = 3; 
```

## Erros comuns

O uso indevido da alocação dinâmica de memória pode freqüentemente ser uma fonte de bugs, como você já viu antes. Os erros mais comuns são:

*   Não está verificando falhas de alocação Não é garantido que a alocação de memória seja bem-sucedida e, em vez disso, pode retornar um ponteiro nulo. Usando o valor retornado, sem verificar se a alocação é bem-sucedida, invoca o comportamento indefinido. Isso geralmente leva ao travamento (devido à falha de segmentação resultante no cancelamento de referência do ponteiro nulo), mas não há garantia de que uma falha ocorrerá, portanto, depender disso também pode causar problemas.
*   Perdas de memória A falha em desalocar a memória usando o `free` leva ao acúmulo de memória não reutilizável, que não é mais usada pelo programa.
*   Erros lógicos Todas as alocações devem seguir o mesmo padrão: alocação usando `malloc` , uso para armazenar dados e desalocação usando `free` . Se você não seguir este padrão, geralmente a errore de falha de segmentação será dada e o programa falhará. Esses erros podem ser temporários e difíceis de depurar - por exemplo, a memória liberada geralmente não é recuperada imediatamente pelo sistema, e os ponteiros pendentes podem persistir por algum tempo e parecer funcionar.