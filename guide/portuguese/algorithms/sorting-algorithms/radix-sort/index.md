---
title: Radix Sort
localeTitle: Radix Sort
---
## Radix Sort

Pré-requisito: contagem de classificação

QuickSort, MergeSort, HeapSort são algoritmos de ordenação baseados em comparação. O CountSort não é um algoritmo baseado em comparação. Tem a complexidade de O (n + k), onde k é o elemento máximo do array de entrada. Então, se k é O (n), CountSort se torna ordenação linear, o que é melhor que algoritmos de ordenação baseados em comparação que possuem complexidade de tempo O (nlogn). A idéia é estender o algoritmo CountSort para obter uma melhor complexidade de tempo quando k for O (n2). Aí vem a ideia do Radix Sort.

Algoritmo:

Para cada dígito i onde i varia do dígito menos significativo para o dígito mais significativo de um número Ordene o array de entrada usando o algoritmo countsort de acordo com o dígito i. Usamos o tipo de contagem porque é um tipo estável.

Exemplo: Suponha que o array de entrada seja:

10,21,17,34,44,11,654,123

Com base no algoritmo, classificaremos a matriz de entrada de acordo com o dígito de um (dígito menos significativo).

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

Então, o array se torna 10,21,11,123,24,44,654,17 Agora, vamos classificar de acordo com o dígito dos dez:

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

Agora, o array se torna: 10,11,17,21,123,34,44,654 Finalmente, classificamos de acordo com o dígito da centena (dígito mais significativo):

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

A matriz torna-se: 10,11,17,21,34,44,123,654 que é classificada. É assim que nosso algoritmo funciona.

Uma implementação em C:
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

### Mais Informações:

*   [Wikipedia](https://en.wikipedia.org/wiki/Radix_sort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/radix-sort/)