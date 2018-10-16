---
title: Bucket Sort
localeTitle: Tipo de cubo
---
## ¿Qué es Bucket Sort?

La ordenación de cubos es un algoritmo de ordenación comparativa que opera sobre elementos al dividirlos en diferentes compartimientos y luego clasificarlos individualmente. Cada grupo se clasifica individualmente mediante un algoritmo de clasificación independiente o aplicando el algoritmo de clasificación de grupo de forma recursiva. La clasificación de la cuchara es principalmente útil cuando la entrada se distribuye uniformemente en un rango.

## Supongamos que uno tiene el siguiente problema delante de ellos:

A uno se le ha dado una gran variedad de enteros de punto flotante que se encuentran uniformemente entre el límite inferior y superior. Esta matriz ahora necesita ser ordenado Una forma sencilla de resolver este problema sería utilizar otro algoritmo de clasificación, como la ordenación de mezcla, la ordenación de pila o la ordenación rápida. Sin embargo, estos algoritmos garantizan una complejidad en el mejor de los casos de O (NlogN). Sin embargo, utilizando la ordenación de cubetas, la tarea anterior se puede completar en tiempo O (N).

Vamos a echarle un vistazo más de cerca.

Considere la necesidad de crear una serie de listas, es decir, de grupos. Ahora es necesario insertar elementos en estos cubos en función de sus propiedades. Cada uno de estos cubos se puede clasificar individualmente utilizando el orden de inserción.

### Pseudo código para la clasificación del cubo:
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

### Más información:

*   [Wikipedia](https://en.wikipedia.org/wiki/Bucket_sort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/bucket-sort-2/)