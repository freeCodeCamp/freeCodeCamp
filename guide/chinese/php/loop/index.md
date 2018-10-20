---
title: Loop
localeTitle: 环
---
# PHP循环

当您需要多次重复相同的任务时，您可以使用循环而不是一遍又一遍地添加相同的代码。 在PHP中有以下循环语句：

*   for - 循环遍历具有特定次数的代码块。
*   while - 如果条件为真，则循环遍历代码块。
*   do ... while - 循环遍历代码块1并在条件为真时继续循环。
*   foreach - 循环遍历数组中每个值的代码块。

在循环中使用`break`可以停止循环执行。

# 对于循环

循环遍历具有特定次数的代码块。

## 句法
```
for (init counter; condition; counter increment or decrement) 
 { 
    // Code to be executed 
 } 
```

## 例

```php
<?php 
 for($index = 0; $index < 5; $index ++) 
 { 
    echo "Current loop counter ".$index.".\n"; 
 } 
 ?> 
```

## 产量
```
> Current loop counter 0. 
 > Current loop counter 1. 
 > Current loop counter 2. 
 > Current loop counter 3. 
 > Current loop counter 4. 
```

# 循环

如果条件为真，则循环遍历代码块。

## 句法
```
while (condition) 
 { 
    // Code to be executed 
 } 
```

## 例

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

## 产量
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

# 做......循环

循环遍历代码块1并在条件为真时继续循环。

## 句法
```
do 
 { 
    // Code to be executed 
 } 
 while (condition); 
```

## 例

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

## 产量
```
> Index: 3. 
 > Index: 2. 
 > Index: 1. 
```

# Foreach循环

循环遍历数组中每个值的代码块。

## 句法
```
foreach ($array as $value) 
 { 
    // Code to be executed 
 } 
```

## 例

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

## 产量
```
> Hi, my name is Ali. 
 > Hi, my name is Ah Kao. 
 > Hi, my name is Muthu. 
 > Hi, my name is Gwen. 
 > Hi, my name is Lucida. 
 > Hi, my name is Cecily. 
 > "Hello, Cecily!" 

```