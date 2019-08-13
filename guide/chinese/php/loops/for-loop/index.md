---
title: For Loop
localeTitle: 对于循环
---
## 对于循环

PHP `for`语句由三个表达式和一个语句组成：

`for ((initialization); (condition); (final-expression)) statement`

### 描述

*   初始化
    *   在循环上第一次执行之前运行。
    *   此表达式通常用于创建计数器。
    *   这里创建的变量的范围是循环。循环完成后，执行它们就会被销毁。
*   条件
    *   在每次迭代执行之前检查的表达式。
    *   如果省略，则此表达式的计算结果为`true` 。
*   最终表达
    *   每次迭代后运行的表达式。
    *   通常用于增加计数器。
    *   但它可以用来运行任何表达式。
*   声明
    *   在每次循环迭代中重复的代码。

可以省略这三个表达式或语句中的任何一个。

表达式可以包含用逗号分隔的多个表达式。

在（condition）表达式中，将评估所有逗号分隔的表达式。

结果从最后一个获得。

For循环通常用于计算一定数量的迭代以重复语句。

### 常见的陷阱

#### 超过数组的边界

当多次索引数组时，很容易超出数组的边界（例如，尝试引用3元素数组的第4个元素）。

```php
// This will cause an error. 
 // The bounds of the array will be exceeded. 
 $arr = array(1,2,3); 
 
 for ($i = 0; $i <= count($arr); $i++) { 
    var_dump($arr[$i]); 
 } 
```

这将输出：

```shell
int(1) int(2) int(3) NULL 
```

有办法修复此代码。

将条件设置为`$i < count($arr)`或`$i <= count($arr) - 1` 。

#### 性能问题

上面的代码可能会变慢，因为在每次迭代中都会获取数组大小。

为了解决这个问题，可以将数组大小放入变量中。

```php
//create the $size variable with a second expression comma separated 
 for ($i = 0, $size = count($arr); $i < $size; ++$i) { 
```

### 更多信息

*   [PHP.net - 控制结构](https://secure.php.net/manual/en/control-structures.for.php)