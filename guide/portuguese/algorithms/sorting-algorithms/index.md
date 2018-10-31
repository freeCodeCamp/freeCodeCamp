---
title: Sorting Algorithms
localeTitle: Algoritmos de Ordenação
---
## Algoritmos de Ordenação

Os algoritmos de ordenação são um conjunto de instruções que tomam uma matriz ou lista como uma entrada e organizam os itens em uma ordem específica.

Ordens são mais comumente numéricas ou em uma forma de ordem alfabética (chamada lexicográfica), e podem estar em ordem ascendente (AZ, 0-9) ou decrescente (ZA, 9-0).

### Por que os algoritmos de classificação são importantes

Como a classificação geralmente pode reduzir a complexidade de um problema, é um algoritmo importante em Ciência da Computação. Esses algoritmos têm aplicações diretas em algoritmos de pesquisa, algoritmos de banco de dados, métodos de divisão e conquista, algoritmos de estrutura de dados e muito mais.

### Alguns Algoritmos de Ordenação Comuns

Alguns dos algoritmos de classificação mais comuns são:

*   Seleção de seleção
*   Tipo de bolha
*   Tipo de Inserção
*   Merge Sort
*   Ordenação rápida
*   Classificação de pilha
*   Contagem de classificação
*   Radix Sort
*   Tipo de balde

### Classificação do Algoritmo de Ordenação

Os algoritmos de classificação podem ser categorizados com base nos seguintes parâmetros:

1.  Baseado no Número de Trocas ou Inversão Esse é o número de vezes que o algoritmo troca elementos para classificar a entrada. `Selection Sort` requer o número mínimo de trocas.
    
2.  Baseado no número de comparações Esse é o número de vezes que o algoritmo compara elementos para classificar a entrada. Usando [a notação Big-O](https://guide.freecodecamp.org/computer-science/notation/big-o-notation/) , os exemplos de algoritmos de ordenação listados acima requerem pelo menos comparações `O(nlogn)` no melhor caso e comparações `O(n^2)` no pior caso para a maioria das saídas.
    
3.  Baseado em recursão ou não-recursão Alguns algoritmos de classificação, como o `Quick Sort` , usam técnicas recursivas para classificar a entrada. Outros algoritmos de classificação, como `Selection Sort` ou `Insertion Sort` , usam técnicas não recursivas. Finalmente, algum algoritmo de ordenação, como o `Merge Sort` , utiliza tanto técnicas recursivas quanto não-recursivas para classificar a entrada.
    
4.  Baseado na estabilidade Os algoritmos de ordenação são considerados `stable` se o algoritmo mantiver a ordem relativa de elementos com chaves iguais. Em outras palavras, dois elementos equivalentes permanecem na mesma ordem na saída classificada como estavam na entrada.
    

*   `Insertion sort` , a `Insertion sort` `Merge Sort` e a `Bubble Sort` são estáveis
*   `Heap Sort` e a `Heap Sort` `Quick Sort` não são estáveis

1.  Baseado no requisito de espaço extra Algoritmos de ordenação são ditos estarem `in place` se eles precisarem de um espaço extra `O(1)` constante para ordenar.

*   `Insertion sort` e `Insertion sort` `Quick-sort` estão `in place` ordenar como nós movemos os elementos sobre o pivô e não realmente usar uma matriz separada que não é o caso na merge sort onde o tamanho da entrada deve ser alocado antecipadamente para armazenar a saída durante o ordenar.
    
*   `Merge Sort` é um exemplo de ordenação `out place` , pois requer espaço extra de memória para suas operações.
    

### Melhor complexidade de tempo possível para qualquer classificação baseada em comparação

Qualquer algoritmo de ordenação baseado em comparação deve fazer pelo menos comparações nLog2n para ordenar o array de entrada, e heapsort e merge sort são tipos de comparação assintoticamente ideais. Isto pode ser facilmente provado desenhando o diagrama de árvore de desígnio.