---
title: Data Types in R
--- 
## Scalars
 Scalar refers to an atomic quantity that can hold only one value at a time. Scalars are the most basic data types. Some common types of scalars :

1. Number

	> x <- 5
	> y <- 5.5
	> class(x)
	[1] "numeric"
	> class(y)
	[1] "numeric"
	> class(x+y)
	[1] "numeric"

2. Logical value

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

 3. Character(string)

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


## Vector
 It is a sequence of data elements of the same basic type. For example:

	> o <- c(1,2,5.3,6,-2,4)                             	 # Numeric vector
	> p <- c("one","two","three","four","five","six")    	 # Character vector
	> q <- c(TRUE,TRUE,FALSE,TRUE,FALSE,TRUE)                # Logical vector
	> o;p;q
	[1]  1.0  2.0  5.3  6.0 -2.0  4.0
	[1] "one"   "two"   "three" "four"  "five"  "six"
	[1]  TRUE  TRUE FALSE  TRUE FALSE

	
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
<a href='https://cran.r-project.org/manuals.html' target='_blank' rel='nofollow'>Official Docs</a>
<a href='https://www.r-bloggers.com/classes-and-objects-in-r/' target='_blank' rel='nofollow'>Data Types in R by r-bloggers</a>