---
title: Bucket Sort
localeTitle: Tipo de balde
---
## O que é o Bucket Sort?

A classificação de bucket é um algoritmo de classificação de comparação que opera nos elementos, dividindo-os em diferentes buckets e, em seguida, classificando esses buckets individualmente. Cada bucket é classificado individualmente usando um algoritmo de classificação separado ou aplicando o algoritmo de ordenação de bucket recursivamente. A classificação de bucket é principalmente útil quando a entrada é distribuída uniformemente em um intervalo.

## Suponha que um deles tenha o seguinte problema na frente deles:

Uma recebeu uma grande quantidade de inteiros de ponto flutuante que se encontram uniformemente entre o limite inferior e superior. Este array agora precisa ser classificado. Uma maneira simples de resolver esse problema seria usar outro algoritmo de classificação, como Merge sort, Heap Sort ou Quick Sort. Contudo, Esses algoritmos garantem uma melhor complexidade de tempo de O (NlogN). No entanto, usando a classificação de bucket, a tarefa acima pode ser concluída no tempo O (N).

Vamos dar uma olhada mais de perto.

Considere que é necessário criar uma matriz de listas, ou seja, de buckets. Os elementos agora precisam ser inseridos nesses buckets com base em suas propriedades. Cada um desses buckets pode ser classificado individualmente usando o Insertion Sort.

### Pseudocódigo para o tipo de balde:
```
void bucketSort(float[] a,int n) 
 
 { 
 
    for(each floating integer 'x' in n) 
 
    { 
 
        insert x into bucket[n*x]; 
 
    } 
 
    for(each bucket) 
 
    { 
 
        sort(bucket); 
 
    } 
 
 } 
```

### Mais Informações:

*   [Wikipedia](https://en.wikipedia.org/wiki/Bucket_sort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/bucket-sort-2/)