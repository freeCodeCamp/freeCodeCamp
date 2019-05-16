---
title: Binary Search
localeTitle: Pesquisa binária
---
## Pesquisa binária

Uma pesquisa binária localiza um item em uma matriz ordenada dividindo repetidamente o intervalo de pesquisa pela metade.

Como você pesquisa um nome em uma lista telefônica?

Uma maneira seria começar a partir da primeira página e ver cada nome na lista telefônica até encontrarmos o que estamos procurando. Mas isso seria uma maneira extremamente laboriosa e ineficiente de pesquisar.

Como sabemos que os nomes da lista telefônica são classificados em ordem alfabética, provavelmente poderíamos trabalhar nos seguintes passos:

1.  Abra a página do meio da agenda
2.  Se tiver o nome que estamos procurando, estamos prontos!
3.  Caso contrário, jogue fora a metade da agenda que não contém o nome
4.  Repita até encontrar o nome ou não há mais páginas na lista telefônica

Complexidade de tempo: Como descartamos uma parte do caso de pesquisa durante cada etapa da pesquisa binária e executamos a operação de pesquisa na outra metade, isso resulta em uma complexidade de tempo de pior caso de _O_ ( _log 2 N_ ).

Complexidade de espaço: A pesquisa binária leva constante ou _O_ ( _1_ ) espaço, o que significa que não definimos qualquer variável relacionada ao tamanho de entrada.

para pequenos conjuntos, a pesquisa linear é melhor, mas em grandes, é muito mais eficiente usar a pesquisa binária.

Em detalhes, quantas vezes você pode dividir N por 2 até ter 1? Essencialmente, isso significa fazer uma pesquisa binária (metade dos elementos) até encontrá-la. Em uma fórmula, isso seria:
```
1 = N / 2x 
```

Multiplique por 2x:
```
2x = N 
```

Agora faça o log2:
```
log2(2x)    = log2 N 
 x * log2(2) = log2 N 
 x * 1       = log2 N 
```

Isso significa que você pode dividir o log N vezes até que você tenha tudo dividido. O que significa que você tem que dividir o log N ("faça a etapa de busca binária") até encontrar seu elemento.

_O_ ( _log 2 N_ ) é assim porque em cada etapa a metade dos elementos no conjunto de dados desapareceu, o que é justificado pela base da função logarítmica.

Este é o algoritmo de busca binária. É elegante e eficiente, mas para funcionar corretamente, a matriz deve ser **classificada** .

* * *

Encontre 5 na matriz de números fornecida usando a pesquisa binária.

![Pesquisa Binária 1](https://i.imgur.com/QAuugOL.jpg)

Marque as posições baixa, alta e média na matriz.

![Pesquisa Binária 2](https://i.imgur.com/1710fEx.jpg)

Compare o item que você está procurando com o elemento do meio.

![Pesquisa Binária 3](https://i.imgur.com/jr4icze.jpg)

Jogue fora a metade esquerda e olhe na metade direita.

![Pesquisa Binária 4](https://i.imgur.com/W57lGsk.jpg)

Mais uma vez compare com o elemento do meio.

![Pesquisa Binária 5](https://i.imgur.com/5Twm8NE.jpg)

Agora, vá para a metade esquerda.

![Pesquisa Binária 6](https://i.imgur.com/01xetay.jpg)

O elemento do meio é o item que estávamos procurando!

O algoritmo de busca binária adota uma abordagem de divisão e conquista em que a matriz é continuamente dividida até que o item seja encontrado ou até que não haja mais elementos para a verificação. Portanto, esse algoritmo pode ser definido recursivamente para gerar uma solução elegante.

Os dois casos básicos para recursão seriam:

*   Não há mais elementos restantes na matriz
*   Item é encontrado

O poder da pesquisa binária em sistemas de dados (árvores B +): As árvores de pesquisa binária são muito poderosas por causa de seus tempos de pesquisa O (log n), depois da estrutura de dados hashmap que usa uma chave de hashing para pesquisar dados em O (1). É importante entender como o tempo de execução do log n vem da altura de uma árvore de pesquisa binária. Se cada nó se dividir em dois nós (binário), a profundidade da árvore será log n (base 2). Para melhorar essa velocidade no Data System, usamos árvores B + porque elas têm um fator de ramificação maior e portanto, mais altura. Espero que este pequeno artigo ajude a expandir sua mente sobre como a pesquisa binária é usada em sistemas práticos.

O código para pesquisa binária recursiva é mostrado abaixo:

### Implementação Javascript

```javascript
function binarySearch(arr, item, low, high) { 
    if (low > high) { // No more elements in the array. 
        return null; 
    } 
 
    // Find the middle of the array. 
    var mid = Math.ceil((low + high) / 2); 
 
    if (arr[mid] === item) { // Found the item! 
        return mid; 
    } 
 
    if (item < arr[mid]) { // Item is in the half from low to mid-1. 
        return binarySearch(arr, item, low, mid-1); 
    } 
 
    else { // Item is in the half from mid+1 to high. 
        return binarySearch(arr, item, mid+1, high); 
    } 
 } 
 
 var numbers = [1,2,3,4,5,6,7]; 
 print(binarySearch(numbers, 5, 0, numbers.length-1)); 
```

Aqui está outra implementação em Javascript:

```Javascript
function binary_search(a, v) { 
    function search(low, high) { 
        if (low === high) { 
            return a[low] === v; 
        } else { 
            var mid = math_floor((low + high) / 2); 
            return (v === a[mid]) 
                   || 
                   (v < a[mid]) 
                   ? search(low, mid - 1) 
                   : search(mid + 1, high); 
        } 
    } 
    return search(0, array_length(a) - 1); 
 } 
```

### Implementação Ruby

```ruby
def binary_search(target, array) 
  sorted_array = array.sort 
  low = 0 
  high = (sorted_array.length) - 1 
 
  while high >= low 
    middle = (low + high) / 2 
 
    if target > sorted_array[middle] 
      low = middle + 1 
    elsif target < sorted_array[middle] 
      high = middle - 1 
    else 
      return middle 
    end 
  end 
  return nil 
 end 
```

### Exemplo em C

```C
int binarySearch(int a[], int l, int r, int x) { 
   if (r >= l){ 
        int mid = l + (r - l)/2; 
        if (a[mid] == x) 
            return mid; 
        if (arr[mid] > x) 
            return binarySearch(arr, l, mid-1, x); 
        return binarySearch(arr, mid+1, r, x); 
   } 
   return -1; 
 } 
```

### Implementação C / C ++

```cpp
int binary_search(int arr[], int l, int r, int target) 
 { 
   if (r >= l) 
   { 
        int mid = l + (r - l)/2; 
        if (arr[mid] == target) 
            return mid; 
        if (arr[mid] > target) 
            return binary_search(arr, l, mid-1, target); 
        return binary_search(arr, mid+1, r, target); 
   } 
   return -1; 
 } 
```

### Implementação em Python

```Python
def binary_search(arr, l, r, target): 
    if r >= l: 
        mid = l + (r - l)/2 
        if arr[mid] == target: 
            return mid 
        elif arr[mid] > target: 
            return binary_search(arr, l, mid-1, target) 
        else: 
            return binary_search(arr, mid+1, r, target) 
    else: 
        return -1 
```

### Exemplo em C ++

```cpp
// Binary Search using iteration 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    while(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            beg = mid + 1; 
        else 
            end = mid - 1; 
    } 
    return -1; 
 } 
```

```cpp
// Binary Search using recursion 
 int binary_search(int arr[], int beg, int end, int num) 
 { 
    if(beg <= end){ 
        int mid = (beg + end) / 2; 
        if(arr[mid] == num) 
            return mid; 
        else if(arr[mid] < num) 
            return binary_search(arr, mid + 1, end, num); 
        else 
            return binary_search(arr, beg, mid - 1, num); 
    } 
    return -1; 
 } 
```

### Exemplo em C ++

Abordagem recursiva!

\`\` \`C ++ - abordagem recursiva int binarySearch (int arr \[\], int início, int fim, int x) { if (end> = start) { int mid = start + (end - start) / 2; if (arr \[meio\] == x)  
retorno no meio;
```
    if (arr[mid] > x) 
        return binarySearch(arr, start, mid-1, x); 
 
    return binarySearch(arr, mid+1, end, x); 
```

} return -1; }
```
Iterative approach! 
```

C ++ - abordagem iterativa int binarySearch (int arr \[\], int início, int fim, int x) { while (início <= fim) { int mid = start + (end - start) / 2; if (arr \[meio\] == x) retorno no meio; if (arr \[mid\] <x) start = mid + 1; outro end = mid - 1; } return -1; } \`\` \`

### Mais Informações

*   [Pesquisa binária (vídeo do YouTube)](https://youtu.be/P3YID7liBug)
*   [Pesquisa binária - CS50](https://www.youtube.com/watch?v=5xlIPT1FRcA)