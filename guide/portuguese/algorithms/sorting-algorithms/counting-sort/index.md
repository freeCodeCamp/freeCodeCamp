---
title: Counting Sort
localeTitle: Contagem de classificação
---
## Contagem de classificação

Classificação de contagem é uma técnica de classificação baseada em chaves entre um intervalo específico. Ele funciona contando o número de objetos com valores-chave distintos (tipo de hashing). Em seguida, fazendo alguma aritmética para calcular a posição de cada objeto na seqüência de saída.

### Exemplo:
```
Para simplificar, considere os dados no intervalo de 0 a 9.
  Dados de entrada: 1, 4, 1, 2, 7, 5, 2
   1) Pegue uma matriz de contagem para armazenar a contagem de cada objeto único.
   Índice: 0 1 2 3 4 5 6 7 8 9
   Contagem: 0 2 2 0 1 1 0 1 0 0
 
   2) Modifique a matriz de contagem de forma que cada elemento em cada índice
   armazene a soma das contagens anteriores.
   Índice: 0 1 2 3 4 5 6 7 8 9
   Contagem: 0 2 4 4 5 6 6 7 7 7
 
  A matriz de contagem modificada indica a posição de cada objeto
  na seqüência de saída.
 
   3) Saída de cada objeto da seqüência de entrada seguido por
   diminuir sua contagem em 1.
   Processe os dados de entrada: 1, 4, 1, 2, 7, 5, 2. A posição de 1 é 2.
   Coloque os dados 1 no índice 2 na saída. Diminua a contagem em 1 para colocar 
   os próximos dados 1 em um índice 1 menor que esse índice.
```

### Propriedades 
- Complexidade do espaço: O(K) 
- Caso de melhor desempenho: O(n+K) 
- Caso de desempenho médio: O(n+K) 
- Caso do pior desempenho: O(n+K) 
- Estável: Sim 
(K é o número de elementos distintos na matriz)

### Implementação em JavaScript
```js
let numbers = [1, 4, 1, 2, 7, 5, 2]; 
 let count = []; 
 let i, z = 0; 
 let max = Math.max(...numbers); 
 // initialize counter 
 for (i = 0; i <= max; i++) { 
    count[i] = 0; 
 } 
 for (i=0; i < numbers.length; i++) { 
    count[numbers[i]]++; 
 } 
 for (i = 0; i <= max; i++) { 
    while (count[i]-- > 0) { 
        numbers[z++] = i; 
    } 
 } 
 // output sorted array 
 for (i=0; i < numbers.length; i++) { 
    console.log(numbers[i]); 
 } 

```

### Implementação em C++
```cpp
#include <iostream>

void countSort(int upperBound, int lowerBound, std::vector<int> numbersToSort) //lower and upper bounds of numbers in vector
{
  int range = upperBound - lowerBound;                  //create a range large enough to get every number between the min and max
  std::vector<int> counts (range);                      //initialize of counts of the size of the range
  std::fill(counts.begin(), counts.end(), 0);           //fill vector of zeros
  
  for (int i = 0; i < numbersToSort.size(); i++)
  {
      int index = numbersToSort[i] - lowerBound; //For example, if 5 is the lower bound and numbersToSort[i] is 5. index will be 0 and the       counts[index]+= 1;                         //count of 5 will be stored in counts[0]
  }
  
  std::cout << counts << std::endl;
} 
```

### Implementação em Swift
```swift
func countingSort(_ array: [Int]) {
  // Create an array to store the count of each element
  let maxElement = array.max() ?? 0
  var countArray = [Int](repeating: 0, count: Int(maxElement + 1))
  
  for element in array {
    countArray[element] += 1
  }
  var z = 0
  var sortedArray = [Int](repeating: 0, count: array.count)

  for index in 1 ..< countArray.count {
    //print index element required number of times
    while countArray[index] > 0 {
      sortedArray[z] = index
      z += 1
      countArray[index] -= 1
    }
  }
  
  print(sortedArray)
}

  ```
