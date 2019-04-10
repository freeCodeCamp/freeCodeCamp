---
title: Php Arrays
localeTitle: Php阵列
---
数组是一种数据结构，它将一个或多个相似类型的值存储在单个值中。例如，如果要存储100个数字，而不是定义100个变量，则很容易定义100个长度的数组。

有三种不同类型的数组，每个数组值使用ID c访问，ID c称为数组索引。

数值数组 - 具有数字索引的数组。以线性方式存储和访问值。

关联数组 - 以字符串作为索引的数组。这将元素值与键值相关联而不是以严格的线性索引顺序存储。

多维数组 - 使用多个索引访问包含一个或多个数组和值的数组

注 - 内置数组函数在函数参考PHP数组函数中给出

### 数字数组

这些数组可以存储数字，字符串和任何对象，但它们的索引将由数字表示。默认情况下，数组索引从零开始。

#### 例

以下是显示如何创建和访问数字数组的示例。

这里我们使用array（）函数来创建数组。该功能在功能参考中说明。
```
<html> 
   <body> 
 
      <?php 
         /* First method to create array. */ 
         $numbers = array( 1, 2, 3, 4, 5); 
 
         foreach( $numbers as $value ) { 
            echo "Value is $value <br />"; 
         } 
 
         /* Second method to create array. */ 
         $numbers[0] = "one"; 
         $numbers[1] = "two"; 
         $numbers[2] = "three"; 
         $numbers[3] = "four"; 
         $numbers[4] = "five"; 
 
         foreach( $numbers as $value ) { 
            echo "Value is $value <br />"; 
         } 
      ?> 
 
   </body> 
 </html> 
```

这将产生以下结果 -
```
Value is 1 
 Value is 2 
 Value is 3 
 Value is 4 
 Value is 5 
 Value is one 
 Value is two 
 Value is three 
 Value is four 
 Value is five 
```

### 关联数组

关联数组在功能方面与数字数组非常相似，但它们的索引不同。关联数组将其索引作为字符串，以便您可以在键和值之间建立强关联。

要将员工的工资存储在数组中，数字索引的数组将不是最佳选择。相反，我们可以使用员工姓名作为关联数组中的键，值将是他们各自的薪水。

注意 - 打印时不要将关联数组保留在双引号内，否则不会返回任何值。
```
Example 
 <html> 
   <body> 
 
      <?php 
         /* First method to associate create array. */ 
         $salaries = array("mohammad" => 2000, "qadir" => 1000, "zara" => 500); 
 
         echo "Salary of mohammad is ". $salaries['mohammad'] . "<br />"; 
         echo "Salary of qadir is ".  $salaries['qadir']. "<br />"; 
         echo "Salary of zara is ".  $salaries['zara']. "<br />"; 
 
         /* Second method to create array. */ 
         $salaries['mohammad'] = "high"; 
         $salaries['qadir'] = "medium"; 
         $salaries['zara'] = "low"; 
 
         echo "Salary of mohammad is ". $salaries['mohammad'] . "<br />"; 
         echo "Salary of qadir is ".  $salaries['qadir']. "<br />"; 
         echo "Salary of zara is ".  $salaries['zara']. "<br />"; 
      ?> 
 
   </body> 
 </html> 
```

这将产生以下结果 -
```
Salary of mohammad is 2000 
 Salary of qadir is 1000 
 Salary of zara is 500 
 Salary of mohammad is high 
 Salary of qadir is medium 
 Salary of zara is low 
```

### 多维数组

多维数组主阵列中的每个元素也可以是一个数组。子数组中的每个元素都可以是数组，依此类推。使用多个索引访问多维数组中的值。

例 在这个例子中，我们创建了一个二维数组，用于存储三个学科中三个学生的标记 -

此示例是关联数组，您可以以相同的方式创建数字数组。
```
<html> 
   <body> 
 
      <?php 
         $marks = array( 
            "mohammad" => array ( 
               "physics" => 35, 
               "maths" => 30, 
               "chemistry" => 39 
            ), 
 
            "qadir" => array ( 
               "physics" => 30, 
               "maths" => 32, 
               "chemistry" => 29 
            ), 
 
            "zara" => array ( 
               "physics" => 31, 
               "maths" => 22, 
               "chemistry" => 39 
            ) 
         ); 
 
         /* Accessing multi-dimensional array values */ 
         echo "Marks for mohammad in physics : " ; 
         echo $marks['mohammad']['physics'] . "<br />"; 
 
         echo "Marks for qadir in maths : "; 
         echo $marks['qadir']['maths'] . "<br />"; 
 
         echo "Marks for zara in chemistry : " ; 
         echo $marks['zara']['chemistry'] . "<br />"; 
      ?> 
 
   </body> 
 </html> 
```

这将产生以下结果 -
```
Marks for mohammad in physics : 35 
 Marks for qadir in maths : 32 
 Marks for zara in chemistry : 39 

```