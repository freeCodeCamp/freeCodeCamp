---
title: Learn About Ruby Numbers
localeTitle: Aprenda acerca de los números de rubí
---
### Lo esencial:

*   Ruby tiene dos categorías de números: enteros y punto flotante (también llamados flotadores).
*   Los enteros son números enteros que pueden ser positivos o negativos pero no pueden ser fracciones.
*   Dependiendo de su tamaño, los enteros pueden tener la clase `Fixnum` o `Bignum` .
*   Los flotadores son números con un lugar decimal.

## Ejemplos:
```
x = 5.5 
 x.class 
 # returns 
 Float 
 
 x = 5 
 x.class 
 # returns 
 Fixnum 
 
 x = 11122233344455566677 
 x.class 
 # returns 
 Bignum # basically, Bignum is a very large number 
 # <a href='http://ruby-doc.org/core-2.0.0/Bignum.html' target='_blank' rel='nofollow'>read this article for more info</a> 
```

## Referencias:

*   [La documentación oficial de Ruby para enteros](http://ruby-doc.org/core-2.2.0/Integer.html) .
*   [La documentación oficial de Ruby para flotadores](http://ruby-doc.org/core-2.2.0/Float.html) .