---
title: Freecodecamp Algorithm Merge Sort Guide
localeTitle: Guia de classificação de mesclagem do algoritmo Freecodecamp
---
A maioria das linguagens modernas possui uma função sort () que classifica automaticamente uma matriz ou lista de entrada. Você já se perguntou como funciona a função do tipo no interior? Conhecer algoritmos comuns de ordenação e suas implementações é a parte mais importante de uma entrevista de codificação. Nesta série de artigos, veremos vários algoritmos de classificação importantes. Como eles são implementados, a complexidade do tempo e do espaço, etc. Nosso primeiro post está no Merge Sort.

Para aprender sobre o Merge Sort, um conhecimento básico sobre o [Recursion](http://programmers.stackexchange.com/questions/25052/in-plain-english-what-is-recursion) é um pré-requisito. Merge Sort é baseado no princípio de dividir e conquistar. Todo o processo de ordenar uma matriz de N inteiros pode ser resumido em três etapas:

*   Divida o array em duas metades.
*   Classifique a metade esquerda e a metade direita usando o mesmo algoritmo recorrente.
*   Mesclar as metades classificadas.

A maior vantagem do uso do Merge Sort é que a [complexidade](https://www.youtube.com/watch?v=V42FBiohc6c&list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn) do [tempo](https://www.youtube.com/watch?v=V42FBiohc6c&list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn) é apenas n \* log (n) para ordenar um Array inteiro. É muito melhor que n ^ 2 o tempo de execução da ordenação de bolhas ou ordenação de inserção.

Antes de escrevermos código, vamos entender como o merge sort funciona com a ajuda de um diagrama.

![Merge Sort](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4712ef1a5d856dbb4af393fcc08a820a38787395.png)

*   Inicialmente, temos uma matriz de 6 inteiros não classificados Arr (5, 8, 3, 9, 1, 2)
*   Nós dividimos o array em duas metades Arr1 = (5, 8, 3) e Arr2 = (9, 1, 2).
*   Novamente, nós os dividimos em duas metades: Arr3 = (5, 8) e Arr4 = (3) e Arr5 = (9, 1) e Arr6 = (2)
*   Mais uma vez, os dividimos em duas metades: Arr7 = (5), Arr8 = (8), Arr9 = (9), Arr10 = (1) e Arr6 = (2)
*   Vamos agora comparar os elementos desses sub-arrays para mesclá-los.

## Implementação

### Implementação de C ++
```
void merge(int array[], int left, int mid, int right) 
 { 
    int i, j, k; 
 
    // Size of left sublist 
 int size_left = mid - left + 1; 
 
 // Size of right sublist 
 int size_right =  right - mid; 
 
 /* create temp arrays */ 
 int Left[size_left], Right[size_right]; 
 
 /* Copy data to temp arrays L[] and R[] */ 
 for(i = 0; i < size_left; i++) 
 { 
    Left[i] = array[left+i]; 
 } 
 
 for(j = 0; j < size_right; j++) 
 { 
    Right[j] = array[mid+1+j]; 
 } 
 
 // Merge the temp arrays back into arr[left..right] 
 i = 0; // Initial index of left subarray 
 j = 0; // Initial index of right subarray 
 k = left; // Initial index of merged subarray 
 
 while (i < size_left && j < size_right) 
 { 
    if (Left[i] <= Right[j]) 
    { 
        array[k] = Left[i]; 
        i++; 
    } 
    else 
    { 
        array[k] = Right[j]; 
        j++; 
    } 
    k++; 
 } 
 
 // Copy the remaining elements of Left[] 
 while (i < size_left) 
 { 
    array[k] = Left[i]; 
    i++; 
    k++; 
 } 
 
 // Copy the rest elements of R[] 
 while (j < size_right) 
 { 
    array[k] = Right[j]; 
    j++; 
    k++; 
 } 
 } 
 
 void mergeSort(int array[], int left, int right) 
 { 
    if(left < right) 
    { 
        int mid = (left+right)/2; 
 
        // Sort first and second halves 
    mergeSort(array, left, mid); 
    mergeSort(array, mid+1, right); 
 
    // Finally merge them 
    merge(array, left, mid, right); 
 } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CYVc/1)

### Implementação Javascript

Vamos escrever MergeSort em JavaScript:
```
function mergeSort (arr) { 
  if (arr.length < 2) return arr; 
  var mid = Math.floor(arr.length /2); 
  var subLeft = mergeSort(arr.slice(0,mid)); 
  var subRight = mergeSort(arr.slice(mid)); 
  return merge(subLeft, subRight); 
 } 
```

Primeiro, verificamos o tamanho do array. Se é 1, então simplesmente retornamos o array. Este seria o nosso caso básico. Senão, vamos descobrir o valor médio e dividir o array em duas metades. Vamos agora ordenar ambas as metades com chamadas recursivas para a função MergeSort.
```
function merge (a,b) { 
    var result = []; 
    while (a.length >0 && b.length >0) 
        result.push(a[0] < b[0]? a.shift() : b.shift()); 
    return result.concat(a.length? a : b); 
 } 
```

Quando mesclamos as duas metades, armazenamos o resultado em uma matriz auxiliar. Vamos comparar o elemento inicial da matriz esquerda com o elemento inicial da matriz correta. Qualquer que seja o menor, será empurrado para o array de resultados e vamos removê-lo de lá respectivos arrays usando o operador \[shift (). Se ainda assim ficarmos com valores em uma matriz esquerda ou direita, simplesmente a concatenaremos no final do resultado. Aqui está o resultado classificado:
```
var test = [5,6,7,3,1,3,15]; 
 console.log(mergeSort(test)); 
 
 >> [1, 3, 3, 5, 6, 7, 15] 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CYVd)

Se você ainda tiver problemas para entender o MergeSort, uma [explicação em vídeo](https://www.youtube.com/watch?v=TzeBrDU-JaY) tornará isso ainda mais claro.