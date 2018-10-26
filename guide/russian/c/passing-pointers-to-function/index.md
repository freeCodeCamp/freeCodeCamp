---
title: Passing pointers to funtions
localeTitle: Передача указателей на функции
---
# Передача указателей на функции

C позволяет передавать указатель на функцию. Для этого просто объявите параметры как тип указателя. Этот способ передачи ссылок на функции полезен, когда вы хотите изменить переменные, выходящие за рамки этой функции.

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

В этом примере кода функция подкачки не работает так, как предполагалось, поскольку она заменяет две переменные, которые существуют только внутри области действия этой функции. Чтобы исправить это, сделаем модификацию, как показано ниже.

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

Во втором примере кода вы смогли изменить значения переменных только потому, что вы постоянно удаляли указатель внутри этой функции, а не пытались напрямую изменить значения