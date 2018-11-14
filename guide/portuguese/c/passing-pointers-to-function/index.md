---
title: Passing pointers to funtions
localeTitle: Passando ponteiros para funtions
---
# Passando ponteiros para funtions

C permite passar um ponteiro para uma função. Para conseguir isso, simplesmente declare os parâmetros como tipo de ponteiro. Essa maneira de passar referências para funções é útil quando você deseja modificar variáveis ​​que estão fora do escopo dessa função.

```C
// incorrect implementation of swap 
 #include <stdio.h> 
 void swap(int a, int b){ 
    int c; 
    c = a; 
    a = b; 
    b = c; 
 } 
 int main(){ 
    int var1 = 10; 
    int var2 = 20; 
    swap(var1, var2); 
    printf("Value of var1: %d \n", var1); // prints 10 
    printf("Value of var2: %d \n", var2); // prints 20 
 } 
```

Neste exemplo de código, a função de troca não funciona como planejado, pois troca duas variáveis ​​que existem somente dentro do escopo dessa função. Para corrigir isso, fazemos uma modificação conforme mostrado abaixo.

```C
// correct implementation of swap 
 #include <stdio.h> 
 void swap(int* a, int* b){ 
    int c = *a; 
    *a = *b; 
    *b = c; 
 } 
 int main(){ 
    int var1 = 10; 
    int var2 = 20; 
    swap(&var1, &var2); 
    printf("Value of var1: %d \n", var1); // prints 20 
    printf("Value of var2: %d \n", var2); // prints 10 
 } 
```

No segundo exemplo de código, você era capaz de alterar os valores das variáveis ​​apenas porque estava constantemente des-referenciando um ponteiro dentro da função em vez de tentar alterar os valores diretamente