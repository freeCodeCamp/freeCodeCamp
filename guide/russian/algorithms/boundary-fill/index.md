---
title: Boundary Fill
localeTitle: Граничная заливка
---
## Граничная заливка

Граничная заливка - это алгоритм, часто используемый в компьютерной графике для заполнения нужного цвета внутри замкнутого многоугольника с той же границей цвет для всех его сторон.

Наиболее подходящей реализацией алгоритма является рекурсивная функция на основе стека.

### За работой:

Проблема довольно проста и обычно следует следующим шагам:

1.  Возьмите позицию начальной и граничной окраски.
2.  Решите, хотите ли вы идти в 4 направлениях (N, S, W, E) или 8 направлений (N, S, W, E, NW, NE, SW, SE).
3.  Выберите цвет заливки.
4.  Путешествуйте в этих направлениях.
5.  Если пиксель, на который вы попали, не является цветом заливки или граничным цветом, замените его цветом заливки.
6.  Повторяйте 4 и 5, пока не повсюду в пределах границ.

### Определенные ограничения:

*   Граничный цвет должен быть одинаковым для всех краев многоугольника.
*   Отправная точка должна быть в пределах многоугольника.

### Фрагмент кода:
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

Из данного кода вы можете видеть, что для любого пикселя, на который вы приземляетесь, вы сначала проверяете, можно ли его изменить на fill\_color, а затем вы это сделаете для его соседей, пока не будут проверены все пиксели в пределах границы.