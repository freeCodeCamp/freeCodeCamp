---
title: Lee's Algorithm
localeTitle: Алгоритм Ли
---
## Алгоритм Ли

Алгоритм Ли является одним из возможных решений для задач маршрутизации лабиринта. Он всегда дает оптимальное решение, если оно существует, но оно медленный и требует большой памяти для плотной компоновки.

### Понимание того, как это работает

Алгоритм представляет собой алгоритм на основе `breadth-first` который использует `queues` для хранения шагов. Он обычно использует следующие шаги:

1.  Выберите начальную точку и добавьте ее в очередь.
2.  Добавьте действительные соседние ячейки в очередь.
3.  Удалите позицию, в которой вы находитесь, и переходите к следующему элементу.
4.  Повторяйте шаги 2 и 3, пока очередь не будет пустой.

### Реализация

C ++ имеет очередь, уже реализованную в библиотеке `<queue>` , но если вы используете что-то еще, вы можете реализовать ваша собственная версия очереди.

Код C ++:

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