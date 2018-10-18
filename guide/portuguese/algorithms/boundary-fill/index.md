---
title: Boundary Fill
localeTitle: Preenchimento de limite
---
## Preenchimento de limite

Preenchimento de limite é o algoritmo usado freqüentemente em computação gráfica para preencher uma cor desejada dentro de um polígono fechado com o mesmo limite cor para todos os seus lados.

A implementação mais aproximada do algoritmo é uma função recursiva baseada em pilha.

### Trabalhando:

O problema é bastante simples e geralmente segue estas etapas:

1.  Tome a posição do ponto de partida e da cor limítrofe.
2.  Decida se deseja ir em 4 direções (N, S, W, E) ou 8 direções (N, S, W, E, NW, NE, SW, SE).
3.  Escolha uma cor de preenchimento.
4.  Viaje nessas direções.
5.  Se o pixel que você colocar não for a cor de preenchimento ou a cor limite, substitua-o pela cor de preenchimento.
6.  Repita 4 e 5 até que você esteja em todos os lugares dentro dos limites.

### Certas Restrições:

*   A cor limite deve ser a mesma para todas as arestas do polígono.
*   O ponto de partida deve estar dentro do polígono.

### Fragmento de código:
```
void boundary_fill(int pos_x, int pos_y, int boundary_color, int fill_color) 
 { 
   current_color= getpixel(pos_x,pos_y);  //get the color of the current pixel position 
   if( current_color!= boundary_color || currrent_color != fill_color) // if pixel not already filled or part of the boundary then 
   { 
     putpixel(pos_x,pos_y,fill_color);  //change the color for this pixel to the desired fill_color 
     boundary_fill(pos_x + 1, pos_y,boundary_color,fill_color);  // perform same function for the east pixel 
     boundary_fill(pos_x - 1, pos_y,boundary_color,fill_color);  // perform same function for the west pixel 
     boundary_fill(pos_x, pos_y + 1,boundary_color,fill_color);  // perform same function for the north pixel 
     boundary_fill(pos_x, pos_y - 1,boundary_color,fill_color);  // perform same function for the south pixel 
    } 
 } 
```

A partir do código dado, você pode ver que para qualquer pixel que você pousar, você primeiro verifica se ele pode ser alterado para fill\_color e então você faz isso para seus vizinhos até que todos os pixels dentro do limite tenham sido verificados.