---
title: Radix Sort
localeTitle: Radix Sort
---
## Radix Sort

Requisito Previo: Contar Ordenar

QuickSort, MergeSort, HeapSort son algoritmos de clasificación basados ​​en comparación. CountSort no es un algoritmo basado en comparación. Tiene la complejidad de O (n + k), donde k es el elemento máximo de la matriz de entrada. Entonces, si k es O (n), CountSort se convierte en ordenación lineal, lo cual es mejor que los algoritmos de ordenación basados ​​en comparación que tienen complejidad de tiempo O (nlogn). La idea es extender el algoritmo CountSort para obtener una mejor complejidad de tiempo cuando k va O (n2). Aquí viene la idea de Radix Sort.

Algoritmo:

Para cada dígito donde i varía entre el dígito menos significativo y el dígito más significativo de un número Ordene la matriz de entrada utilizando un algoritmo de conteo de acuerdo con un dígito. Usamos el orden de conteo porque es un ordenamiento estable.

Ejemplo: Supongamos que la matriz de entrada es:

10,21,17,34,44,11,654,123

Según el algoritmo, ordenaremos la matriz de entrada según el dígito de uno (el dígito menos significativo).

0: 10  
1: 21 11  
2:  
3: 123  
4: 34 44 654  
5:  
6:  
7: 17  
8:  
9:  

Así, la matriz se convierte en 10,21,11,123,24,44,654,17 Ahora, vamos a ordenar de acuerdo con el dígito de diez:

0:  
1: 10 11 17  
2: 21 123  
3: 34  
4: 44  
5: 654  
6:  
7:  
8:  
9:

Ahora, la matriz se convierte en: 10,11,17,21,123,34,44,654 Finalmente, ordenamos según el dígito del centenario (el dígito más significativo):

0: 010 011 017 021 034 044  
1: 123  
2:  
3:  
4:  
5:  
6: 654  
7:  
8:  
9:

La matriz se convierte en: 10,11,17,21,34,44,123,654 que está ordenada. Así es como funciona nuestro algoritmo.

Una implementación en C:
```
void countsort(int arr[],int n,int place){ 
 
        int i,freq[range]={0};         //range for integers is 10 as digits range from 0-9 
 
        int output[n]; 
 
        for(i=0;i<n;i++) 
 
                freq[(arr[i]/place)%range]++; 
 
        for(i=1;i<range;i++) 
 
                freq[i]+=freq[i-1]; 
 
        for(i=n-1;i>=0;i--){ 
 
                output[freq[(arr[i]/place)%range]-1]=arr[i]; 
 
                freq[(arr[i]/place)%range]--; 
 
        } 
 
        for(i=0;i<n;i++) 
 
                arr[i]=output[i]; 
 
 } 
 
 void radixsort(ll arr[],int n,int maxx){            //maxx is the maximum element in the array 
 
        int mul=1; 
 
        while(maxx){ 
 
                countsort(arr,n,mul); 
 
                mul*=10; 
 
                maxx/=10; 
 
        } 
 
 } 
```

### Más información:

*   [Wikipedia](https://en.wikipedia.org/wiki/Radix_sort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/radix-sort/)