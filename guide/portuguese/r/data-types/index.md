---
title: Data Types in R
localeTitle: Tipos de dados em R
--- ## Escalas

Escalar refere-se a uma quantidade atômica que pode conter apenas um valor por vez. Escalares são os tipos de dados mais básicos. Alguns tipos comuns de escalares:

1.  Número
    
    > x <- 5 y <- 5,5 classe (x) \[1\] "numérico" classe (y) \[1\] "numérico" classe (x + y) \[1\] "numérico"
    
2.  Valor lógico
    
    > m <- x> y # Usado para verificar, é x maior que y? n <- x <y # Usado para verificar, Is x é menor que y? m \[1\] FALSE n \[1\] VERDADEIRO classe (m) \[1\] "lógico" classe (NA) # NA é outro valor lógico: 'Not Available' / Missing Values \[1\] "lógico"
    
3.  Cadeia de caracteres)
    
    > um <- "1"; b <- "2,5" a; b \[1\] "1" \[1\] "2,5" a + b Erro em um argumento + b: não numérico para operador binário classe A) \[1\] "personagem" class (como.numeric (a)) \[1\] "numérico" classe (como.character (x)) \[1\] "personagem"
    

## Vetor

É uma sequência de elementos de dados do mesmo tipo básico. Por exemplo:
```
> o <- c(1,2,5.3,6,-2,4)                                 # Numeric vector 
 > p <- c("one","two","three","four","five","six")        # Character vector 
 > q <- c(TRUE,TRUE,FALSE,TRUE,FALSE,TRUE)                # Logical vector 
 > o;p;q 
 [1]  1.0  2.0  5.3  6.0 -2.0  4.0 
 [1] "one"   "two"   "three" "four"  "five"  "six" 
 [1]  TRUE  TRUE FALSE  TRUE FALSE 
```

## Matriz

É um conjunto de dados retangular bidimensional. Os componentes em uma matriz também devem ser do mesmo tipo básico, como vetor. Por exemplo:
```
> m = matrix( c('a','a','b','c','b','a'), nrow = 2, ncol = 3, byrow = TRUE) 
 > m 
 >[,1] [,2] [,3] 
 [1,] "a"  "a"  "b" 
 [2,] "c"  "b"  "a" 
```

## Quadro de dados

É mais geral que uma matriz, pois colunas diferentes podem ter diferentes tipos de dados básicos. Por exemplo:
```
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
```

## Listas

É um objeto-R que pode conter muitos tipos diferentes de elementos dentro dele, como vetores, funções e até mesmo outra lista dentro dele. Por exemplo:
```
> list1 <- list(c(2,5,3),21.3,sin) 
 > list1 
 [[1]] 
 [1] 2 5 3 
 [[2]] 
 [1] 21.3 
 [[3]] 
 function (x)  .Primitive("sin") 
```

## Referência:

[Documentos oficiais](https://cran.r-project.org/manuals.html) [Tipos de dados em R por r-bloggers](https://www.r-bloggers.com/classes-and-objects-in-r/)