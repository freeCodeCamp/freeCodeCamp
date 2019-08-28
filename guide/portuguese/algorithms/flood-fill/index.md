---
title: Flood Fill Algorithm
localeTitle: Algoritmo de preenchimento de inundações
---
## Algoritmo de preenchimento de inundações

O preenchimento de inundação é um algoritmo usado principalmente para determinar uma área limitada conectada a um determinado nó em uma matriz multidimensional. Isto é uma grande semelhança com a ferramenta balde em programas de pintura.

A implementação mais aproximada do algoritmo é uma função recursiva baseada em pilha, e é sobre isso que vamos falar a seguir.

### Como funciona?

O problema é bastante simples e geralmente segue estas etapas:

1.  Tome a posição do ponto de partida.
2.  Decida se deseja ir em 4 direções ( **N, S, W, E** ) ou 8 direções ( **N, S, W, E, NW, NE, SW, SE** ).
3.  Escolha uma cor de substituição e uma cor de destino.
4.  Viaje nessas direções.
5.  Se o piso em que você pousar for um alvo, reaplique-o com a cor escolhida.
6.  Repita 4 e 5 até que você esteja em todos os lugares dentro dos limites.

Vamos pegar o seguinte array como exemplo:

![texto alternativo](https://github.com/firealex2/Codingame/blob/master/small%208%20grid%20paintefffd.png)

O quadrado vermelho é o ponto de partida e os quadrados cinzentos são as chamadas paredes.

Para mais detalhes, aqui está um trecho de código descrevendo a função:

```cpp
int wall = -1; 
 
 void flood_fill(int pos_x, int pos_y, int target_color, int color) 
 { 
 
   if(a[pos_x][pos_y] == wall || a[pos_x][pos_y] == color) // se não houver parede ou se eu não estiver lá 
      return;                                              // já volto
 
   if(a[pos_x][pos_y] != target_color) // se não é cor, voltar
      return; 
 
   a[pos_x][pos_y] = color; // marque o ponto para que eu saiba se passei por ele.
 
   flood_fill(pos_x + 1, pos_y, color);  // então eu posso ir para o sul
   flood_fill(pos_x - 1, pos_y, color);  // ou norte
   flood_fill(pos_x, pos_y + 1, color);  // ou leste
   flood_fill(pos_x, pos_y - 1, color);  // ou oeste
 
   return; 
 
 } 
```

Como visto acima, meu ponto de partida é (4,4). Depois de chamar a função para as coordenadas iniciais **x = 4** e **y = 4** , Eu posso começar a verificar se não há parede ou cor no local. Se isso for válido, marquei o ponto com uma **"cor"** e comece a verificar os outros quadrados adjacentes.

Indo para o sul, chegaremos ao ponto (5,4) e a função será executada novamente.

### Problema de exercício

Eu sempre considerei que resolver um (ou mais) problema(s) usando um novo algoritmo aprendido é a melhor maneira de entender completamente o conceito.

Então aqui está um:

**Declaração:**

Em uma matriz bidimensional, você recebe um número de **"ilhas"** . Tente encontrar a maior área de uma ilha e o número da ilha correspondente. 0 marca a água e qualquer outro x entre 1 e n marca um quadrado da superfície correspondente para ilha x.

**Entrada**

*   **n** - o número de ilhas.
*   **l, c** - as dimensões da matriz.
*   as próximas linhas **l** , números **c** que dão a linha **l** da matriz.

**Saída**

*   **i** - o número da ilha com a maior área.
*   **A** - a área do **i** 'th ilha.

**Ex:**

Você tem a seguinte entrada:

```cpp
2 4 4 
 0 0 0 1 
 0 0 1 1 
 0 0 0 2 
 2 2 2 2 
```

Para o qual você terá: ilha 2 como a maior ilha e área de 5 quadrados.

### Dicas

O problema é bem fácil, mas aqui estão algumas dicas:
```
1. Use o algoritmo de preenchimento sempre que encontrar uma nova ilha. 
2. Ao contrário do código de exemplo, você deve percorrer a área da ilha e não o oceano (0 peças).

```
