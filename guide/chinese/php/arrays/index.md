---
title: Arrays
localeTitle: 数组
---
## 数组

### 数组类型

在PHP中有三种类型的数组：索引数组，关联数组和多维数组。

### 索引数组示例

索引数组按索引号访问对象。

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
```

`$freecodecamp[0]`将返回`"free"` ， `$freecodecamp[1]`将返回`"code"` ， `$freecodecamp[2]`将返回`"camp"` 。

### 关联数组示例

关联数组按键名访问对象。

```PHP
<?php 
 $freecodecamp = array("free"=>"0","code"=>"1","camp"=>"2"); 
```

`$freecodecamp['free']`将返回“0”， `$freecodecamp['code']`将返回“1”， `$freecodecamp['camp']`将返回“2”，

### 多维数组示例

多维数组是包含其他数组的数组。

```PHP
<?php 
 $freecodecamp = array(array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2")); 
```

#### 更多信息：

*   [php.net数组手册](https://secure.php.net/manual/en/language.types.array.php)