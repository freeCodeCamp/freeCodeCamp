---
title: Learn About Php Variables
localeTitle: Узнайте о переменных Php
---
Переменные - это контейнеры для хранения данных, таких как `strings` , `integers` , `boolean` значения, `array` и объекты.

PHP следует определенным правилам для объявлений переменных, таких как:

*   Переменная должна начинаться со знака доллара ($)

Пример:

`php <?php $var = 5; ?>`

*   Имя переменной может содержать символы, такие как AZ, az, 0-9, \_ и [символы ASCII](http://www.asciitable.com/ "ASCII Table") от 127 до 255.

Пример:

`php <?php $var = 5; //Valid $var_1 = "Foo"; //Valid $_var2 = 'Bar'; //Valid $var.3 = 'Baz'; //Invalid ?>`

*   Имя переменной может начинаться с подчеркивания (\_).

Пример:

`php <?php $_var2 = 'Bar'; //Valid ?>`

*   Имя переменной не должно начинаться с номера 0-9.

Пример:

`php <?php $9var3 = 'Baz'; //Invalid ?>`

*   Имя переменной чувствительно к регистру.

Пример:
```
<?php 
    $var = 5; //Valid 
    $VAR = "Foo"; //Valid 
    echo $var; //Output 5 
    echo "<br>"; 
    echo $VAR; //Output Foo 
 ?> 
```

PHP - это свободно типизированный язык, поэтому нам не нужно объявлять тип данных переменной при объявлении переменной. В отличие от Java или C.
```
<?php 
    $var = 5; 
    $var2 = 4; 
    $sum = $var+$var2; 
    echo $sum; //Output 9 
    echo "<br>"; 
    echo $var+$var2; //Output 9 
 ?> 
```

Переменные также могут быть назначены путем ссылки. Это позволяет двум переменным ссылаться на один и тот же контент. Оператор `&` помещается перед переменной, на которую нужно ссылаться.

Пример :
```
<?php 
    $var1 = "foo"; 
    $var2 = "bar"; 
 
 myTest($var1, $var2); 
 
 echo $var1; //Output foo 
 echo $var2; //Output BAR 
 
 function myTest($var1, &$var2){ 
    $var1 = "FOO"; 
    $var2 = "BAR"; 
 } 
 ?> 
```

Чтобы имена переменных были заданы динамически, мы используем переменные переменные. Это может быть особенно полезно, когда необходимо создать несколько переменных.

Пример :
```
<?php 
 
    $var = 'Tom'; 
    echo $var;      //Output Tom 
    $$var = 'Cat'; //The value of $$var is the value of $var. So $$var and $Tom give the same output. 
    echo $$var;   //Output Cat 
    echo $Tom;   //Output Cat 
 ?> 
```

# Область переменных

Область переменной относится к местам, откуда доступна переменная.

*   Глобальная область предназначена для переменных, объявленных вне функции. Доступ к этим переменным можно получить где угодно, но не внутри функции.
*   Локальная область предназначена для переменных, объявленных внутри функции, к которой невозможно получить доступ из любой точки вне функции.

Пример:
```
<?php 
   $global = "Hello"; 
 
  function Test(){ 
   $local = "World"; 
   echo $global; //Error 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
```

Чтобы получить доступ к глобальным переменным внутри функции:
```
<?php 
   $global = "Hello"; 
 
 function Test(){ 
   global $global; 
   $local = "World"; 
   echo $global; //Output Hello 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
```

# Статические переменные

Каждый раз, когда создается функция, все локальные переменные удаляются. Чтобы сохранить последнее значение переменной, мы объявляем его `static` .

Пример :
```
<?php 
 
 function WithStatic(){ 
   static $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithStatic(); //Output 0 
   WithStatic(); //Output 1 
   WithStatic(); //Output 2 
 
 function WithoutStatic(){ 
   $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
 ?> 

```