---
title: Exponential Search
localeTitle: Búsqueda exponencial
---
## Búsqueda exponencial

La búsqueda exponencial también conocida como búsqueda por dedo, busca un elemento en una matriz ordenada saltando `2^i` elementos en cada iteración donde i representa el valor de la variable de control de bucle, y luego verificar si el elemento de búsqueda está presente entre el último salto y el salto actual

# Peor caso de complejidad

O (log (N)) A menudo confundido por el nombre, el algoritmo se llama así que no por la complejidad del tiempo. El nombre surge como resultado de que el algoritmo salta elementos con pasos iguales a exponentes de 2

# Trabajos

1.  Salte los elementos `2^i` la matriz a la vez buscando la condición `Array[2^(i-1)] < valueWanted < Array[2^i]` . Si `2^i` es mayor que la longitud de la matriz, establezca el límite superior a la longitud de la matriz.
2.  Haga una búsqueda binaria entre `Array[2^(i-1)]` y `Array[2^i]`

# Código
```
// C++ program to find an element x in a 
 // sorted array using Exponential search. 
 #include <bits/stdc++.h> 
 using namespace std; 
 
 int binarySearch(int arr[], int, int, int); 
 
 // Returns position of first ocurrence of 
 // x in array 
 int exponentialSearch(int arr[], int n, int x) 
 { 
    // If x is present at firt location itself 
    if (arr[0] == x) 
        return 0; 
 
    // Find range for binary search by 
    // repeated doubling 
    int i = 1; 
    while (i < n && arr[i] <= x) 
        i = i*2; 
 
    //  Call binary search for the found range. 
    return binarySearch(arr, i/2, min(i, n), x); 
 } 
 
 // A recursive binary search function. It returns 
 // location of x in  given array arr[l..r] is 
 // present, otherwise -1 
 int binarySearch(int arr[], int l, int r, int x) 
 { 
    if (r >= l) 
    { 
        int mid = l + (r - l)/2; 
 
        // If the element is present at the middle 
        // itself 
        if (arr[mid] == x) 
            return mid; 
 
        // If element is smaller than mid, then it 
        // can only be present n left subarray 
        if (arr[mid] > x) 
            return binarySearch(arr, l, mid-1, x); 
 
        // Else the element can only be present 
        // in right subarray 
        return binarySearch(arr, mid+1, r, x); 
    } 
 
    // We reach here when element is not present 
    // in array 
    return -1; 
 } 
 
 int main(void) 
 { 
   int arr[] = {2, 3, 4, 10, 40}; 
   int n = sizeof(arr)/ sizeof(arr[0]); 
   int x = 10; 
   int result = exponentialSearch(arr, n, x); 
   (result == -1)? printf("Element is not present in array") 
                 : printf("Element is present at index %d", result); 
   return 0; 
 } 
```

# Más información

*   [Wikipedia](https://en.wikipedia.org/wiki/Exponential_search)
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/exponential-search/)
    

# Creditos

[Implementación de C ++](https://www.wikitechy.com/technology/exponential-search/)