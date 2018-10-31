---
title: Data Types in R
--- 
## Vectors
Vectors are atomic data structures that can hold one or more elments. While scalars are typically discussed in programming, a vector of length one takes the place of a scalar in R. For this reason, many mathematical operations are vectorized. The examples below illustrate vectors of length one: 

1. Numeric (double)
```r
	> x <- 5
	> y <- 5.5
        > z <- c(1, 2)
	> class(x)
	[1] "numeric"
	> class(y)
	[1] "numeric"
        > class(y)
        [1] "numeric"
	> class(x+y)
	[1] "numeric"
```

2. Integer
```r
        > x <- c(5L, 5L)
        > class(x)
	[1] "integer"
```

If an integer and numeric are added together, the result is coerced to a numeric:
```r
        > class(5L + 5.1)
        [1] "numeric"
```



3. Logical
```r
	> m <- x > y      # Used to check, Is x larger than y?
	> n <- x < y      # Used to check, Is x smaller than y?
	> m
	[1] FALSE
	> n
	[1] TRUE
	> class(m)
	[1] "logical"
	> class(NA)       # NA is another logical value: 'Not Available'/Missing Values
	[1] "logical"
```

 4. Character
```r
	> a <- "1"; b <- "2.5" 
	> a;b
	[1] "1"
	[1] "2.5"
	> a+b
	Error in a + b : non-numeric argument to binary operator
	> class(a)
	[1] "character"
	> class(as.numeric(a))
	[1] "numeric"
	> class(as.character(x))
	[1] "character"
```

 Since vectors are atomic, they can only hold one data type:

	> o <- c(1,2,5.3,6,-2,4)                             	 # Numeric vector
	> p <- c("one","two","three","four","five","six")    	 # Character vector
	> q <- c(TRUE,TRUE,FALSE,TRUE,FALSE,TRUE)                # Logical vector
	> o;p;q
	[1]  1.0  2.0  5.3  6.0 -2.0  4.0
	[1] "one"   "two"   "three" "four"  "five"  "six"
	[1]  TRUE  TRUE FALSE  TRUE FALSE

## Augmented Vectors
Factors and date-time vectors are augmented vectors, which are built on top of integer and numeric, respectively. Factors are used for handling categorical data have an attribute referred to as levels.

```r
        > x <- as.factor("a")
        > typeof(x)
        [1] "integer"
        > class(x)
        [1] "factor"
        > attributes(x)
        $levels
        [1] "a"

        > y <- Sys.time()
        > typeof(y)
        [1] "double"
        > class(y)
        [1] "POSIXct" "POSIXt" 
```

	
## Matrix
 It is a two-dimensional rectangular data set. The components in a matrix also must be of the same basic type like vector. For example:

	> m = matrix( c('a','a','b','c','b','a'), nrow = 2, ncol = 3, byrow = TRUE)
	> m
	>[,1] [,2] [,3]
	[1,] "a"  "a"  "b" 
	[2,] "c"  "b"  "a"


## Data Frame
 It is more general than a matrix, in that different columns can have different basic data types. For example:

	> d <- c(1,2,3,4)
	> e <- c("red", "white", "red", NA)
	> f <- c(TRUE,TRUE,TRUE,FALSE)
	> mydata <- data.frame(d,e,f)
	> names(mydata) <- c("ID","Color","Passed")
	> mydata

 	  ID Color Passed
	1  1   red   TRUE
	2  2 white   TRUE
	3  3   red   TRUE
	4  4  <NA>  FALSE


## Lists
 It is an R-object which can contain many different types of elements inside it like vectors, functions and even another list inside it. For example:

	> list1 <- list(c(2,5,3),21.3,sin)
	> list1
	[[1]]
	[1] 2 5 3
	[[2]]
	[1] 21.3
	[[3]]
	function (x)  .Primitive("sin")


## Reference:
 * [Official Docs](https://cran.r-project.org/manuals.html)
 * [Data Types in R by r-bloggers](https://www.r-bloggers.com/classes-and-objects-in-r/)
