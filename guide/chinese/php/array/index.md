---
title: array
localeTitle: 排列
---
## PHP数组的介绍

PHP中的数组实际上是一个有序的映射。映射是将值与键关联的类型。 此类型针对多种不同用途进行了优化;它可以被视为数组，列表（向量），哈希表（地图的实现），字典，集合，堆栈，队列，甚至更多。 由于数组值可以是其他数组，因此树和多维数组也是可能的。

这是一个例子：
```
<?php 
 // array without keys 
 $bikes = array("Suzuki","BMW","Yamaha"); 
 echo "I like " . $bikes[0] . ", " . $bikes[1] . " and " . $bikes[2] . "."; 
 ?> 
```

PHP数组有很多功能可以使用。以下列出了所有列表： [功能](https://www.w3schools.com/php/php_ref_array.asp)

## 关联数组

PHP数组可以用作键和值，如map。它也可以通过键访问。

这是一个简单的例子：
```
<?php 
 $array = array( 
    "foo" => "bar", 
    "bar" => "foo", 
 ); 
 
 echo $array['bar']; 
```

有一个美好的一天，快乐的编码！