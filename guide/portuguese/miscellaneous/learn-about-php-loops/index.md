---
title: Learn About Php Loops
localeTitle: Aprenda sobre loops Php
---
Loops são blocos de código que executam um número especificado de vezes. Usar loops reduz o número de linhas de código.

O PHP funciona com 4 tipos diferentes de loops:

*   Enquanto loop
*   Do… while loop
*   Para loop
*   Loop foreach

## Enquanto loop

O `while` circuito continua a excecute contanto que a condição referida é verdadeiro.

\`php  
```
Example: 
 ```php 
 <?php 
  $x = 1; 
   while($x <= 3) 
   { 
     echo "x=$x "; 
     $x++; 
   } 
 ?> 
 ``` 
 ``` 
 Output: 
 x=1 x=2 x=3 
 ``` 
 
 ## Do...while loop 
 
 In the `do...while` loop the block of code is executed before the condition is checked. 
 
  ```php 
 <?php 
     do { 
       execute code; 
     } while (condition); 
 ?> 
 ``` 
 Example: 
 
  ```php 
 <?php 
 $x= 1; 
     do { 
       echo "x=$x "; 
       $x++; 
     } while ($x < 5); 
 ?> 
 ``` 
 ``` 
 Output: 
 x=1 x=2 x=3 x=4 
 ``` 
 
 ## For loop 
 
 The `for` loop is used when the number of times the block is to be executed is known in advance. 
 
  ```php 
 <?php 
     for (variable initialisation; test condition; increment) 
     { 
       execute code; 
     } 
 ?> 
 ``` 
 Example: 
 
  ```php 
 <?php 
    for ($x=1 ; $x <= 4 ; $x++) 
    { 
      echo "x= $x "; 
    } 
 ?> 
 ``` 
 ``` 
 Output: 
 x=1 x=2 x=3 x=4 
 ``` 
 
 ## Foreach loop 
 
 The `foreach` loop helps in traversing through arrays. 
 
  ```php 
 <?php 
    foreach ($array as $value) 
    { 
      executable code; 
    } 
 ?> 
 ``` 
 Example: 
 
  ```php 
 <?php 
 $numbers= array("One", "Two", "Three"); 
   foreach ($numbers as $value) 
   { 
     echo "$value "; 
   } 
 ?> 
 ``` 
 ``` 
 Output: 
 One Two Three 

```