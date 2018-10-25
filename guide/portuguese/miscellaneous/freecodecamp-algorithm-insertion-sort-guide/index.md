---
title: Freecodecamp Algorithm Insertion Sort Guide
localeTitle: Guia de Ordenação de Inserção do Algoritmo Freecodecamp
---
A ordenação de inserção é uma [classificação baseada em _comparação_](https://en.wikipedia.org/wiki/Comparison_sort) . Um algoritmo de classificação é baseado em comparação, se usar operadores de comparação (como `less than` e maior `greated than` ) para localizar a ordem entre dois números.

Nesta técnica de ordenação, sempre mantemos uma sub-lista classificada na posição inferior da lista e, em seguida, pegamos um elemento do resto da lista e o inserimos no local correto. Fazemos isso até que todos os elementos sejam inseridos na sub-lista. Por exemplo, enquanto jogamos cartas, ordenamos cartas em nossas mãos. Começando da esquerda e movendo para a direita, continuamos a inserir o cartão no lugar certo até o final.

## Exemplo

![Tipo de Inserção](//discourse-user-assets.s3.amazonaws.com/original/2X/2/289cddf207e54981a05b56d9c267d078ed827c8b.png)

No exemplo acima, a `grey shaded` lista `grey shaded` é sempre classificada. Por favor, note que no início, a sub-lista contém apenas um elemento e é classificada de forma _trivial_ . Então, a cada passo, estamos inserindo o elemento mais à esquerda da `white shaded` lista `white shaded` na sua posição correta.

Portanto, classificamos a lista completa dessa maneira.

## Algoritmo
```
Loop for i=0 to N-1: 
 * Pick element array<a href='https://repl.it/CWZq' target='_blank' rel='nofollow'>i] and insert it into sorted sublist array[0...i-1] 
```

## Complexidade
```
Space complexity: O(1)      // Auxillary/temporary space is used. 
 
 Time complexity: O(n*n)     // Two nested for loops are used. 
```

## Implementação de C ++
```
// Function to sort an array using insertion sort 
 void insertionSort(int arr[], int n) 
 { 
   int i, key, j; 
   for (i = 1; i < n; i++) 
   { 
       key = arr[i]; 
       j = i-1; 
 
       /* Move elements of arr[0..i-1], that are greater than key, 
      to one position ahead of their current position */ 
   while (j >= 0 && arr[j] > key) 
   { 
       arr[j+1] = arr[j]; 
       j = j-1; 
   } 
   arr[j+1] = key; // place element key at it's correct place 
   } 
 } 
 
 int main() 
 { 
    // array to be sorted 
    int arr[5] = {12, 11, 13, 5, 6}; 
 
    // call the insertion sort 
 insertionSort(arr, 5); 
 
 // prints sorted array ie 5 6 11 12 13 
 for(int i=0; i<5; i++) 
    std::cout << arr[i] << " "; 
 return 0; 
 } 
```

: rocket: \[código de execução ## implementação de Python
```
# Function to perform insertion sort 
 def insertionSort(arr): 
    # Traverse through array 
    for i in range(1, len(arr)): 
        key = arr<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>i] 
        # Move elements of arr[0..i-1], that are greater than key, 
        # to one position ahead of their current position 
        j = i-1 
        while j>=0 and key < arr[j] : 
                arr[j+1] = arr[j] 
                j -= 1 
        arr[j+1] = key # place element key at it's correct place 
 
 # array to be sorted 
 arr = [12, 11, 13, 5, 6] 
 # call the insertion sort 
 insertionSort(arr) 
 # prints sorted array ie 5 6 11 12 13 
 for i in range(len(arr)): 
    print(arr[i],end = ' ') 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CWZi)

## Vantagens

1.  Eficiente para um pequeno conjunto de dados e conjuntos de dados quase classificados.
2.  Simplesmente implementado.
3.  Melhor que bubble sort e selection sort e geralmente usado com merge sort.

## Desvantagens

1.  É menos eficiente em um grande conjunto de dados do que em merge sort, heap sort e quick sort.