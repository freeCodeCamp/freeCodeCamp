---
title: Plotting in R
---
## Plotting
 The base version of R allows us to make many types of plots!
 The syntax for a simple scatterplot goes something like this: 
 ```r
plot(x, y) 
```
We create a graph using the plot() function and supply the two parameters, x and y, which are the two columns you want to plot in your dataset.
 So in the mpg dataset that is available in the tidyverse library, if we wanted to make a scatterplot of the two variables 'cyl' and 'hwy':
 ```r
library(tidyverse)
attach(mpg)
plot(cyl, hwy) 
```
