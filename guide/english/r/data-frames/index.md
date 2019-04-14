---
title: Data Frames
---

## Data Frames

A data frame is an object in R.

### Creating a Data Frame

You can create a data frame by combining vectors of the same length and using the function `data.frame`.
```r
a <- c(1 ,2, 3, 4, 5)   #vector a
b <- c("H", "E", "L", "L", "O") #vector b
c <- c(TRUE, FALSE, FALSE, TRUE, FALSE) #vector c

df <- data.frame(a, b, c)
```
**NOTE**: You can also import data from a various data file such as a csv file to a data frame. See `Additional Resources` below for help with that.

### Adding Columns

To add a new column you can do `df$new_column_name`

#### Example
```r
df$product <- 2 * df[,1]
```

You can alternatively have a vector with them same amount of elements as a column in `df` as use the function `cbind` to combine it to `df`.
```r
product <- c(2, 4, 6, 8, 10)
df <- cbind(df, product)
```
Both ways will output the following table:
```
    a   b   c      product
1   1   H   TRUE   2
2   2   E   FALSE  4
3   3   L   FALSE  6
4   4   L   TRUE   8
5   5   O   FALSE  10
```

### Removing Columns or Rows

You can remove a column or row by using `$` to specify a specific column name and making it `NULL`.
```r
df$b <- NULL #column b in df is deleted
```
Alternatively you can delete a specific row by using `df[row,]` or delete a specific row by using `df[,column]`.

#### Example
```r
df[1,] <- NULL #Deletes first row in df

df[,2] <- NULL #Deletes second column in df
```
### Sources
1. [DataMentor](https://www.datamentor.io/r-programming/data-frame/)
2. [ListenData](https://www.listendata.com/2015/06/r-keep-drop-columns-from-data-frame.html)
3. [PROGRAMMINGR](http://www.programmingr.com/examples/r-dataframe/add-delete-rows/)

### Additional Resources
1. [Data Frame Manipulation](http://www.cookbook-r.com/Manipulating_data/)
2. [Working with data in RStudio](http://paldhous.github.io/ucb/2016/dataviz/week7.html)
3. [Importing Data](https://www.datacamp.com/community/tutorials/r-data-import-tutorial)
