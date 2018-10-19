---
title: Objects in R
localeTitle: Objetos en R
---## Objetos

R permite guardar los datos almacenándolos dentro de un objeto R.

## ¿Qué es un objeto?

Es solo un nombre que puede utilizar para recuperar datos almacenados. Por ejemplo, puede guardar datos en un objeto como a o b.

```r
> a <- 5 
 > a 
 [1] 5 
```

## ¿Cómo crear un objeto en R?

1.  Para crear un objeto R, elija un nombre y luego use el símbolo menor que, `<` , seguido de un signo menos, `-` , para guardar datos en él. Esta combinación parece una flecha, `<-` . R hará un objeto, le dará su nombre y almacenará en él lo que sea sigue la flecha.
    
2.  Cuando le preguntas a R lo que hay en una, te dice en la siguiente línea. Por ejemplo:
    

```r
> die <- 1:6 
 > die 
 [1] 1 2 3 4 5 6 
```

3.  Puedes nombrar un objeto en R casi cualquier cosa que desees, pero hay algunas reglas. Primero, un nombre no puede comenzar con un número. Segundo, un nombre no puede usar algunos símbolos especiales, como `^, !, $, @, +, -, /, or *` :
    
4.  R también comprende el uso de mayúsculas (o distingue entre mayúsculas y minúsculas), por lo que nombre y Nombre se referirán a diferentes objetos.
    
5.  Puede ver qué nombres de objetos ya ha usado con la función `ls()` .
    

## Referencias

[Documentos oficiales](https://cran.r-project.org/manuals.html) [Objetos en R por r-bloggers](https://www.r-bloggers.com/classes-and-objects-in-r/) [CRAN](https://cran.r-project.org/doc/manuals/r-release/R-lang.html)