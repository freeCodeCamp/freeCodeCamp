---
title: Selection Sort
localeTitle: Seleção de seleção
---
## Seleção de seleção

A seleção de classificação é um dos algoritmos de classificação mais simples. Funciona da seguinte maneira,

1.  Encontre o menor elemento. Troque com o primeiro elemento.
2.  Encontre o segundo menor elemento. Troque com o segundo elemento.
3.  Encontre o terceiro menor elemento. Troque com o terceiro elemento.
4.  Repita encontrando o próximo elemento menor e trocando-o para a posição correta correspondente até que o array esteja classificado.

Como você pode imaginar, esse algoritmo é chamado de Seleção de Seleção porque seleciona repetidamente o próximo elemento menor e o troca para o seu lugar.

Mas, como você escreveria o código para encontrar o índice do segundo menor valor em uma matriz?

*   Uma maneira fácil é notar que o menor valor já foi trocado para o índice 0, então o problema se reduz a encontrar o menor elemento na matriz, começando no índice 1.

### Implementação em C / C ++

```C
for(int i = 0; i < n; i++) 
 { 
    int min_index = i; 
    int min_element = a[i]; 
 
    for(int j = i +1; j < n; j++) 
    { 
        if(a[j] < min_element) 
        { 
            min_element = a[j]; 
            min_index = j; 
        } 
    } 
 
    swap(&a[i], &a[min_index]); 
 } 
```

### Implementação em Javascript

\`\` \`Javascript seleção de função _sort (A) { var len =_ comprimento do _array_ (A); para (var i = 0; i <len - 1; i = i + 1) { var j _min = i; para (var j = i + 1; j <len; j = j + 1) { if (A \[j\] <A \[j_ min\]) { j _min = j; } outro {} } if (j_ min! == i) { trocar (A, i, j\_min); } outro {} } }

troca de funções (A, x, y) { var temp = A \[x\]; A \[x\] = A \[y\]; A \[y\] = temp; }
```
### Implementation in Python 
```

python _sort de_ seleção de def _(arr): se não for: return arr para eu na faixa (len (arr)): min_ i = i para j no intervalo (i + 1, len (arr)): se arr \[j\] <arr \[min _i\]: min_ i = j arr \[i\], arr \[min _i\] = arr \[min_ i\], arr \[i\] \`\` \`

### Propriedades

*   Complexidade do espaço: **O (n)**
*   Complexidade do Tempo: **O (n 2 )**
*   Ordenando no Lugar: **Sim**
*   Estável: **não**

### Visualização

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

### Referências

*   [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
*   [KhanAcademy](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)