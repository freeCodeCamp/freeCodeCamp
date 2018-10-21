---
title: Exponential Search
localeTitle: Pesquisa Exponencial
---
## Pesquisa Exponencial

Pesquisa Exponencial também conhecida como busca por dedo, busca por um elemento em um array ordenado, saltando `2^i` elementos a cada iteração onde eu represente o valor da variável de controle de loop e, em seguida, verificar se o elemento de pesquisa está presente entre o último salto e o salto atual

# Caso Pior da Complexidade

O (log (N)) Muitas vezes confuso por causa do nome, o algoritmo é chamado assim não por causa da complexidade do tempo. O nome surge como resultado do algoritmo saltando elementos com passos iguais a expoentes de 2

# Trabalho

1.  Pule a matriz `2^i` elementos de uma vez pesquisando a condição `Array[2^(i-1)] < valueWanted < Array[2^i]` . Se `2^i` for maior que o comprimento da matriz, defina o limite superior para o comprimento da matriz.
2.  Faça uma busca binária entre `Array[2^(i-1)]` e `Array[2^i]`

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

# Mais Informações

*   [Wikipedia](https://en.wikipedia.org/wiki/Exponential_search)
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/exponential-search/)
    

# Créditos

[Implementação de C ++](https://www.wikitechy.com/technology/exponential-search/)