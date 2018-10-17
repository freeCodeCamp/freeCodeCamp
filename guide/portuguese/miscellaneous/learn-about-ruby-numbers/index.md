---
title: Learn About Ruby Numbers
localeTitle: Aprenda sobre os números de Ruby
---
### Noções básicas:

*   Ruby tem duas categorias de números - inteiros e ponto flutuante (também chamados de floats).
*   Inteiros são números inteiros que podem ser positivos ou negativos, mas não podem ser frações.
*   Dependendo do tamanho, os inteiros podem ter a classe `Fixnum` ou `Bignum` .
*   Flutuadores são números com uma casa decimal.

## Exemplos:
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

## Referências:

*   [A documentação oficial do Ruby para números inteiros](http://ruby-doc.org/core-2.2.0/Integer.html) .
*   [A documentação oficial do Ruby para carros alegóricos](http://ruby-doc.org/core-2.2.0/Float.html) .