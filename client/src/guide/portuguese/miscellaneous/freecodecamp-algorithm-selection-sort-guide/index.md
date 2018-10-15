---
title: Freecodecamp Algorithm Selection Sort Guide
localeTitle: Guia de seleção de seleção de algoritmo Freecodecamp
---
O algoritmo de classificação de seleção classifica uma matriz localizando repetidamente o elemento mínimo (considerando a ordem crescente) da parte não classificada e colocando-o no início. O algoritmo mantém dois subarrays em um determinado array.  
1\. O subarray que já está classificado.  
2\. Subarray restante que não está classificado.

Em cada iteração de classificação de seleção, o elemento mínimo (considerando a ordem crescente) do subarray não classificado é selecionado e movido para o subarray classificado.

## Exemplo

[Animação do SelectionSort](http://www.sorting-algorithms.com/selection-sort)
```
arr<a href='https://repl.it/CZa0' target='_blank' rel='nofollow'>] = 64 25 12 22 11 
 
 # Placing the minimum element in arr[0...4] in the beginning 
 11 25 12 22 64 
 
 # Placing the minimum element in arr[1...4] in the beginning 
 11 12 25 22 64 
 
 # Placing the minimum element in arr[2...4] in the beginning 
 11 12 22 25 64 
 
 # Placing the minimum element in arr[3...4] in the beginning 
 11 12 22 25 64 
```

#### Implementação de C ++
```
void selection_sort(int array[], int n) 
 { 
    // Contains index of minimum element in unsorted subarray 
    int min_index; 
 
    // Move boundary of unsorted subarray 
 for(int i = 0; i < n-1; i++) 
 { 
    // Find the minimum element in unsorted subarray 
    min_index = i; 
    for(int j = i+1; j < n; j++) 
    { 
        // If present element is less than element at min_index 
        // Then change min_index to present index 
        if(array[j] < array[min_index]) 
        { 
            min_index = j; 
        } 
    } 
 
    // Swap the element at min_index with the first element 
    int temp; 
    temp = array[min_index]; 
    array[min_index] = array[i]; 
    array[i] = temp; 
 } 
 } 
```

: rocket: \[código de execução #### implementação de Python
```
def selection_sort(arr): 
    for i in range(len(arr)): 
        min_x = i 
        for j in range(i+1,len(arr)): 
            if arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>j] < arr[min_x]: 
                min_x = j 
        arr[min_x], arr[i] = arr[i], arr[min_x] 
 
 arr = [64, 25, 12, 22, 11] 
 selection_sort(arr) 
 print(arr) # Prints [11, 12, 22, 25, 64] 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CXwQ)

#### [Complexidade do Algoritmo](https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care)

**Complexidade do Tempo:** O (n \* n) Devido aos dois loops aninhados.