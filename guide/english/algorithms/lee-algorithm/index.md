---
title: Lee's Algorithm
---

## Lee's Algorithm

The Lee algorithm is one possible solution for maze routing problems. It always gives an optimal solution, if one exists, but is
slow and requires large memory for dense layout.

### Understanding how it works

The algorithm is a `breadth-first` based algorithm that uses `queues` to store the steps. It usually uses the following steps:
  
  1. Choose a starting point and add it to the queue.
  2. Add the valid neighboring cells to the queue.
  3. Remove the position you are on from the queue and continue to the next element.
  4. Repeat steps 2 and 3 until the queue is empty.
  
### Implementation

C++ has the queue already implemented in the `<queue>` library, but if you are using something else you are welcome to implement
your own version of queue.

C++ code:

```cpp

int dl[] = {-1, 0, 1, 0}; // these arrays will help you travel in the 4 directions more easily
int dc[] = {0, 1, 0, -1};

queue<int> X, Y; // the queues used to get the positions in the matrix

X.push(start_x); // initialize the queues with the start position
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
