---
title: Objects in R
localeTitle: Objetos em R
---## Objetos

R permite salvar os dados armazenando-os dentro de um objeto R.

## O que é um objeto?

É apenas um nome que você pode usar para acessar os dados armazenados. Por exemplo, você pode salvar dados em um objeto como a ou b.

```r
> a <- 5 
 > a 
 [1] 5 
```

## Como criar um objeto em R?

1.  Para criar um objeto R, escolha um nome e use o símbolo de menor que, `<` , seguido por um sinal de menos, `-` , para salvar dados nele. Essa combinação parece um seta, `<-` . R fará um objeto, dará seu nome e armazenará nele tudo segue a seta.
    
2.  Quando você pergunta a R o que está em um, ele diz na próxima linha. Por exemplo:
    

```r
> die <- 1:6 
 > die 
 [1] 1 2 3 4 5 6 
```

3.  Você pode nomear um objeto em R quase o que quiser, mas existem algumas regras. Primeiro, um nome não pode começar com um número. Segundo, um nome não pode usar alguns símbolos especiais, como `^, !, $, @, +, -, /, or *` :
    
4.  R também entende de capitalização (ou diferencia maiúsculas de minúsculas), então nome e nome se referirão a objetos diferentes.
    
5.  Você pode ver quais nomes de objetos você já usou com a função `ls()` .
    

## Referências

[Documentos oficiais](https://cran.r-project.org/manuals.html) [Objetos em R por r-blogueiros](https://www.r-bloggers.com/classes-and-objects-in-r/) [CRAN](https://cran.r-project.org/doc/manuals/r-release/R-lang.html)