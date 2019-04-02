---
title: For Each Loop
localeTitle: Para cada loop
---
# Para cada loop

Também chamado `for` loop `for` aprimorado, é uma maneira extremamente útil e simples de iterar sobre cada item em uma coleção, matriz ou qualquer objeto que implemente a interface `Iterable` .

```java
for (object : iterable) 
 { 
    // Statements 
 } 
```

O loop é lido como "para cada elemento no `iterable` (pode ser um array, colecionável etc.)". O tipo de `object` deve corresponder ao tipo de elemento do `iterable` .

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 
 for (int numbers : number_list) 
 { 
    System.out.print(numbers + " "); 
    // Iterated 10 times, numbers 0,1,2...9 
 } 
```

Saída:
```
    0 1 2 3 4 5 6 7 8 9 
```

: rocket: [Run Code](https://repl.it/CJYs/0)

Comparando isso com o tradicional `for` laços:

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 
 for(int i=0;i < number_list.length;i++) 
 { 
  System.out.print(number_list[i]+" "); 
      // Iterated 10 times, numbers 0,1,2...9 
 
 } 
```

Saída:
```
    0 1 2 3 4 5 6 7 8 9 
```

: rocket: [Run Code](https://repl.it/NJfG/0)

Ambas as partes de trechos de código acima fazem o mesmo trabalho, no entanto, claramente, para cada loop oferece vantagens em facilitar a iteração e o acesso a elementos de uma coleção (array, no nosso caso).

Com os loops forçados aprimorados, não precisamos mais mencionar os pontos inicial e final para o loop, reduzindo assim os erros de OutofBounds. A necessidade de contadores de loop e a indexação manual são removidas e a legibilidade do código é aprimorada.

É importante observar que fazer alterações na variável de iteração para loops forçados aprimorados dentro do loop não causa alterações nos elementos da coleção original.

Os loops forçados aprimorados também podem ser usados ​​com matrizes multidimensionais ou outras coleções Java. Um exemplo de seu uso com matrizes multidimensionais é mostrado abaixo:

```java
int number_list_new[][]={  {  0,  1, 2}, 
                  {  3, 4, 5}, 
                  { 6, 7, 8} }; 
 
 // Because 2d arrays are implemented as "arrays of arrays",the first iteration variable iterates 
 // through 3 such arrays(that is, the 3 rows of testarr[][]) 
 for(int i[] : number_list_new) 
 { 
  for(int j : i){ 
    System.out.print(j+" "); 
  } 
 } 
```

Saída:
```
0 1 2 3 4 5 6 7 8 
```

: rocket: [Run Code](https://repl.it/NJhP/0)

Nos trechos de código acima, `number_list` é uma matriz. Se você não sabe o que é isso, não se preocupe com isso. Uma matriz é um objeto contêiner que contém um número fixo de valores de um único tipo, mas mais sobre isso depois.