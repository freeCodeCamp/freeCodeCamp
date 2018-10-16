---
title: Learn About Ruby Arrays
localeTitle: Aprenda sobre matrizes de Ruby
---
### Noções básicas:

*   Arrays são uma lista de itens indexados armazenados dentro de colchetes `<a href='http://ruby-doc.org/core-2.2.0/Array.html' target='_blank' rel='nofollow'>]` .
*   Ruby usa indexação baseada em zero. Isso significa que o primeiro item da matriz é armazenado no número de índice `0` , depois o segundo no número de índice `1` e assim por diante, aumentando em valores de 1 para cada item adicional armazenado na matriz.
*   Os arrays podem ser criados usando a sintaxe `[]` ou `Array.new` .
*   O Ruby possui muitos métodos de construção para executar operações em matrizes, como reverter ou localizar um elemento armazenado na matriz.

## Exemplos:
```
arr = [1,2,3] 
 # is equivalent to: 
 arr = Array.new(3) 
 arr[0] = 1 
 arr[1] = 2 
 arr[2] = 3 
 # is also equivalent to: 
 arr = Array(1..3) 
 # All three of these examples return: 
 [1,2,3] 
```

## Referências:

*   [A documentação oficial do Ruby para matrizes](https://docs.ruby-lang.org/en/2.0.0/Array.html) .