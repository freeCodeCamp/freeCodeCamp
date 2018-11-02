---
title: Boundary Fill
---

## Boundary Fill
Boundary fill is the algorithm used frequently in computer graphics to fill a desired color inside a closed polygon having the same boundary 
color for all of its sides.

The most approached implementation of the algorithm is a stack-based recursive function.

### Working:
The problem is pretty simple and usually follows these steps:

1. Take the position of the starting point and the boundary color.
2. Decide wether you want to go in 4 directions (N, S, W, E) or 8 directions (N, S, W, E, NW, NE, SW, SE).
3. Choose a fill color.
4. Travel in those directions.
5. If the pixel you land on is not the fill color or the boundary color , replace it with the fill color.
6. Repeat 4 and 5 until you've been everywhere within the boundaries.
### Certain Restrictions:
- The boundary color should be the same for all the edges of the polygon.
- The starting point should be within the polygon.
### Code Snippet:
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
From the given code you can see that for any pixel that you land on, you first check whether it can be changed to the fill_color and then you do so 
for its neighbours till all the pixels within the boundary have been checked.
