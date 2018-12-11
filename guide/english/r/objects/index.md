---
title: Objects in R
---
## Objects

R allows the user to save the data by storing it inside an object. 

## What’s an object?

An object is a name that you can use to call up stored data. For example, you can save data into an object like a or b.
```r
> a <- 5
> a
[1] 5
```

There are many types of objects in R. Two of the most common are as lists and functions.
Example of a list:
```
> a <- list(1, "Hello, world!", FALSE)
```
Lists can contain mixed types of data (number, string and boolean in this example).

There are many built in functions in R. The user can also make a 'user defined' function, as you see below.
The following creates the function circleArea that calculates the area of a circle (A = π r2).

```
>circleArea <- function(r){
  A <- pi * r^2
  return(A)
 }
 ```

## How to create an Object in R?

1. To create an R object, choose a name and then use the less-than symbol, `<`,
followed by a minus sign,  `-`, to save data into it. This combination looks like an
arrow, `<-`. R will make an object, give it your name, and store in it whatever
follows the arrow. You can also use the '=' sign, but this is a less common method to assign a value to an object and generally frowned upon.

2. When the user calls the object in the console it provides the output on the next line. For example:

```r
> die <- 1:6
> die
[1] 1 2 3 4 5 6
```

3. You can name an object in R almost anything you want, but there are a few rules. First,
a name cannot start with a number. 
Second, a name cannot use some special symbols, like  `^,  !,  $,  @,  +,  -,  /, or  *`:

4. R also understands capitalization (or is case-sensitive), so name and Name will refer to different objects.

5. You can see which object names you have already used with the function `ls()`.

## References
 - [Official Docs](https://cran.r-project.org/manuals.html)
 - [Objects in R by r-bloggers](https://www.r-bloggers.com/classes-and-objects-in-r/)
 - [CRAN](https://cran.r-project.org/doc/manuals/r-release/R-lang.html)
