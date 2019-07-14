---
title: Lee's Algorithm
localeTitle: Algoritmo de Lee
---
## Algoritmo de Lee

O algoritmo de Lee é uma solução possível para problemas de roteamento de labirinto. Sempre dá uma solução ótima, se existir, mas é lento e requer grande memória para layout denso.

### Entendendo como funciona

O algoritmo é um algoritmo baseado em `breadth-first` que usa `queues` para armazenar as etapas. Geralmente, ele usa as seguintes etapas:

1.  Escolha um ponto de partida e adicione-o à fila.
2.  Adicione as células vizinhas válidas à fila.
3.  Remova a posição da fila e continue até o próximo elemento.
4.  Repita as etapas 2 e 3 até que a fila esteja vazia.

### Implementação

O C ++ já tem a fila implementada na biblioteca `<queue>` , mas se você estiver usando algo mais, será bem-vindo para implementar sua própria versão da fila.

Código C ++:

```cpp
int dl[] = {-1, 0, 1, 0}; // these arrays will help you travel in the 4 directions more easily 
 int dc[] = {0, 1, 0, -1}; 
 
 queue<int> X, Y; // the queues used to get the positions in the matrix 
 
 X.push(start_x); //initialize the queues with the start position 
 Y.push(start_y); 
 
 void lee() 
 { 
  int x, y, xx, yy; 
  while(!X.empty()) // while there are still positions in the queue 
  { 
    x = X.front(); // set the current position 
    y = Y.front(); 
    for(int i = 0; i < 4; i++) 
    { 
      xx = x + dl[i]; // travel in an adiacent cell from the current position 
      yy = y + dc[i]; 
      if('position is valid') //here you should insert whatever conditions should apply for your position (xx, yy) 
      { 
          X.push(xx); // add the position to the queue 
          Y.push(yy); 
          mat[xx][yy] = -1; // you usually mark that you have been to this position in the matrix 
      } 
 
    } 
 
    X.pop(); // eliminate the first position, as you have no more use for it 
    Y.pop(); 
 
  } 
 
 
 } 

```