---
title: Freecodecamp Algorithm Binary Search Guide
localeTitle: Guia de Pesquisa Binária do Algoritmo Freecodecamp
---
Pesquisa binária é um algoritmo de busca que encontra a posição de um valor alvo dentro de uma matriz ordenada.

## Exemplo

![Pesquisa binária](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3cb9e4cc59081e1b0a19b716dbcfb6df97ac2b52.png)

A ilustração acima mostra o funcionamento do algoritmo de pesquisa binária em uma matriz classificada quando o valor alvo é **4** .

## Algoritmo

Pesquisa binária funciona em matrizes ordenadas. Uma pesquisa binária começa comparando o elemento do meio da matriz com o valor de destino. Se o valor de destino corresponder ao elemento do meio, sua posição na matriz será retornada. Se o valor de destino for menor ou maior que o elemento do meio, a pesquisa continuará a metade inferior ou superior da matriz, respectivamente, com um novo elemento do meio, eliminando a outra metade da consideração.

O pseudocódigo do algoritmo de busca binária é o seguinte:
```
BinarySearch(A<a href='https://repl.it/CWZq/158' target='_blank' rel='nofollow'>0..N-1], value) { 
  low = 0 
  high = N - 1 
  while (low <= high) { 
    // invariants: value > A[i] for all i < low 
                   value < A[i] for all i > high 
    mid = (low + high) / 2 
    if (A[mid] > value) 
      high = mid - 1 
    else if (A[mid] < value) 
      low = mid + 1 
    else 
      return mid 
  } 
  return not_found // value would be inserted at index "low" 
 } 
```

## Complexidade

*   Desempenho pior caso: **O (log n)**
*   Melhor desempenho do case: **O (1)**
*   Desempenho médio do caso: **O (log n)**
*   Pobre complexidade de espaço de caso: **O (1)** para iterativo; **O (log n)** para recursivo.

## Implementação de C ++
```
int binarySearch(int arr[], int value, int left, int right) { 
  int middle; 
  while (left <= right) { 
    middle = (left + right) / 2; 
    if (arr[middle] == value) 
      return middle; 
    else if (arr[middle] > value) 
      right = middle - 1; 
    else 
      left = middle + 1; 
  } 
  return -1; 
 } 
```

: rocket: \[código de execução ## implementação de Python
```
def binary_search(l, value): 
    low = 0 
    high = len(l)-1 
    while low <= high: 
        mid = (low+high)//2 
        if l<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>mid] > value: high = mid-1 
        elif l[mid] < value: low = mid+1 
        else: return mid 
    return -1 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CWZi/2)