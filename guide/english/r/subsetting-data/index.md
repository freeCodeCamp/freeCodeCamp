---
title: Subsetting of Data in R
---

## What is subsetting?
It is a of selection or extraction of data and also exclude variables and observations from a list, matrix, dataframe etc.

## Subsetting operators

There are three subsetting operators: [, [[ and $. [[ is similar to [, except it can only return a single value and it allows you to pull pieces out of a list. $ is a useful shorthand for [[ combined with character subsetting.

You need [[ when working with lists. This is because when [ is applied to a list it always returns a list: it never gives you the contents of the list.
The following are the examples of subsetting of various `R` objects:

1. Vectors
```r
x <- c(2.1, 4.2, 3.3, 5.4)
x[c(3, 1)]      # Subsetting using positive integers: return elements at the specified positions.
## [1] 3.3 2.1

x[-c(3, 1)]     # Subsetting using positive integers: return elements at the specified positions.
## [1] 4.2 5.4

x[c(TRUE, TRUE, FALSE, FALSE)]  # # Subsetting using logical vectors.
## [1] 2.1 4.2
```
2. Lists

```r
a <- matrix(1:9, nrow = 3)
colnames(a) <- c("A", "B", "C")
a[1:2, ]

##      A B C
## [1,] 1 4 7
## [2,] 2 5 8
```
3. Dataframes
```r
df <- data.frame(x = 1:3, y = 3:1, z = letters[1:3])

df[df$x == 2, ]
##   x y z
## 2 2 2 b

df[c(1, 3), ]
##   x y z
## 1 1 3 a
## 3 3 1 c
```

To get content of a list use [[ operator like:

```r
a <- list(a = 1, b = 2)
a[[1]]
## [1] 1

a[["a"]]
## [1] 1
```
## Resources to master subsetting

 * [Quick-R](https://www.statmethods.net/management/subset.html)
 * [R Documentation](https://www.rdocumentation.org/packages/base/versions/3.5.1/topics/subset)
 * [R Bloggers](https://www.r-bloggers.com/5-ways-to-subset-a-data-frame-in-r/)
 * [Advanced R](http://adv-r.had.co.nz/Subsetting.html)


