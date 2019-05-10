---
title: sapply() Function
---
## sapply() Function

The sapply() function is part of a family of apply() functions that aide in manipulating data. It takes 2 or more parameters and it returns a vector. The first parameter could be a vector or a data frame. The second parameter is usually a function you want to apply to the first parameter. 

You can use sapply to get the max of every column in a data frame as a vector.
```r
> df
     a    b   
1   49   22  
2   13   39   
3   32    8   
4   21   54  
5   16   26  
> df <- sapply(df, max)

#vector that has max of every column in df
> df
   a   b
  49  54
  
```
In the above example the data frame itself is transformed by using sapply() on it directly. 
You can also use sapply() within a function.

```r
> df
     a    b   
1   49   22  
2   13   39   
3   32    8   
4   21   54  
5   16   26  

#Function to get the max number of every column for any dataframe
> colMax <- function(data) sapply(data, max)

#maxes is a vector with the max number of every column in data frame df
> maxes <- colMax(df)
> maxes
   a   b
  49  54

```
You can use various different built in R functions such as sqrt, min or mean with sapply() function.

## Reference:
1. [Study Trails](http://www.studytrails.com/r/core/control_structures_r_apply_functions/)
2. [bookdown](https://bookdown.org/rdpeng/rprogdatascience/loop-functions.html)
3. [Data Camp](https://www.datacamp.com/community/tutorials/r-tutorial-apply-family)
4. [Advanced R](http://adv-r.had.co.nz/Functionals.html)


