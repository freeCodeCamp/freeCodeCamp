---
title: Data Types in R
localeTitle: Tipos de datos en R
--- ## Escalares

Escalar se refiere a una cantidad atómica que puede contener solo un valor a la vez. Los escalares son los tipos de datos más básicos. Algunos tipos comunes de escalares:

1.  Número
    
    > x <- 5 y <- 5.5 clase (x) \[1\] "numérico" de buen tono) \[1\] "numérico" clase (x + y) \[1\] "numérico"
    
2.  Valor logico
    
    > m <- x> y # Se usa para verificar, ¿Es x más grande que y? n <- x <y # Se usa para verificar, ¿Es x más pequeño que y? metro \[1\] FALSO norte \[1\] VERDADERO clase (m) \[1\] "lógico" class (NA) # NA es otro valor lógico: 'No disponible' / Valores faltantes \[1\] "lógico"
    
3.  Cadena de caracteres)
    
    > a <- "1"; b <- "2.5" a; b \[1\] "1" \[1\] "2.5" a + b Error en a + b: argumento no numérico al operador binario clase A) \[1\] "personaje" clase (as.numeric (a)) \[1\] "numérico" clase (como.caracter (x)) \[1\] "personaje"
    

## Vector

Es una secuencia de elementos de datos del mismo tipo básico. Por ejemplo:
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

Es un conjunto de datos rectangular bidimensional. Los componentes en una matriz también deben ser del mismo tipo básico como vector. Por ejemplo:
```
> m = matrix( c('a','a','b','c','b','a'), nrow = 2, ncol = 3, byrow = TRUE) 
 > m 
 >[,1] [,2] [,3] 
 [1,] "a"  "a"  "b" 
 [2,] "c"  "b"  "a" 
```

## Marco de datos

Es más general que una matriz, ya que diferentes columnas pueden tener diferentes tipos de datos básicos. Por ejemplo:
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

## Liza

Es un objeto R que puede contener muchos tipos diferentes de elementos dentro de él como vectores, funciones e incluso otra lista dentro de él. Por ejemplo:
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

## Referencia:

[Documentos oficiales](https://cran.r-project.org/manuals.html) [Tipos de datos en R por r-bloggers](https://www.r-bloggers.com/classes-and-objects-in-r/)