---
title: Loop
localeTitle: Цикл
---
# PHP Цикл

Если вам нужно многократно повторять одну и ту же задачу, вы можете использовать цикл, а не добавлять один и тот же код снова и снова. В PHP есть следующие инструкции цикла:

*   for - цикл через блок кода с определенным количеством раз.
*   while - цикл через блок кода, если условие истинно.
*   do ... while - цикл через блок кода один и продолжить цикл, если условие истинно.
*   foreach - цикл через блок кода для каждого значения внутри массива.

Использование `break` внутри цикла может остановить выполнение цикла.

# Цикл For

Выполняет блок кода с определенным количеством раз.

## Синтаксис
```
for (init counter; condition; counter increment or decrement) 
 { 
    // Code to be executed 
 } 
```

## Пример

```php
<?php 
 for($index = 0; $index < 5; $index ++) 
 { 
    echo "Current loop counter ".$index.".\n"; 
 } 
 ?> 
```

## Вывод
```
> Current loop counter 0. 
 > Current loop counter 1. 
 > Current loop counter 2. 
 > Current loop counter 3. 
 > Current loop counter 4. 
```

# Цикл While

Выполняет блок кода, если условие истинно.

## Синтаксис
```
while (condition) 
 { 
    // Code to be executed 
 } 
```

## Пример

```php
<?php 
 $index = 10; 
 while ($index >= 0) 
 { 
    echo "The index is ".$index.".\n"; 
    $index--; 
 } 
 ?> 
```

## Вывод
```
> The index is 10. 
 > The index is 9. 
 > The index is 8. 
 > The index is 7. 
 > The index is 6. 
 > The index is 5. 
 > The index is 4. 
 > The index is 3. 
 > The index is 2. 
 > The index is 1. 
 > The index is 0. 
```

# Цикл Do ... While

Гарантированно выполняет первую итерацию цикла и продолжает выполняться, если условие истинно.

## Синтаксис
```
do 
 { 
    // Code to be executed 
 } 
 while (condition); 
```

## Пример

```php
<?php 
 $index = 3; 
 do 
 { 
    // execute this at least 1 time 
    echo "Index: ".$index.".\n"; 
    $index --; 
 } 
 while ($index > 0); 
 ?> 
```

## Вывод
```
> Index: 3. 
 > Index: 2. 
 > Index: 1. 
```

# Цикл Foreach

Выполняет блок кода для каждого значения в массиве.

## Синтаксис
```
foreach ($array as $value) 
 { 
    // Code to be executed 
 } 
```

## Пример

```php
<?php 
 $array = ["Ali", "Ah Kao", "Muthu", "Gwen", "Lucida", "Cecily", "Arthur", "Flora"]; 
 foreach ($array as $name) 
 { 
    echo "Hi, my name is ".$name.".\n"; 
 
    if ($name == "Cecily") 
    { 
        echo "\"Hello, ".$name."!\""; 
 
        // stop the loop if name is Cecily 
        break; 
    } 
 } 
 ?> 
```

## Вывод
```
> Hi, my name is Ali. 
 > Hi, my name is Ah Kao. 
 > Hi, my name is Muthu. 
 > Hi, my name is Gwen. 
 > Hi, my name is Lucida. 
 > Hi, my name is Cecily. 
 > "Hello, Cecily!" 

```
