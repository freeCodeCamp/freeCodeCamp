---
title: Objects in R
---
## Objects

R allows to save the data by storing it inside an R object. 

## What’s an object?

It is just a name that you can use to call up stored data. For example, you can save data into an object like a or b.
```r
> a <- 5
> a
[1] 5
```

## How to create an Object in R?

1. To create an R object, choose a name and then use the less-than symbol, `<`,
followed by a minus sign,  `-`, to save data into it. This combination looks like an
arrow, `<-`. R will make an object, give it your name, and store in it whatever
follows the arrow.

2. When you ask R what’s in a, it tells you on the next line. For example:

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

<a href='https://cran.r-project.org/manuals.html' target='_blank' rel='nofollow'>Official Docs</a>
<a href='https://www.r-bloggers.com/classes-and-objects-in-r/' target='_blank' rel='nofollow'>Objects in R by r-bloggers</a>
<a href='https://cran.r-project.org/doc/manuals/r-release/R-lang.html' target='_blank' rel='nofollow'>CRAN</a>