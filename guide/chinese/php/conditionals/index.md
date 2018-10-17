---
title: Conditionals
localeTitle: 条件语句
---
## 条件语句

PHP中的条件语句使用`if` ， `elseif` ， `else`语法编写。使用条件允许您根据在运行时提供给页面的不同输入和值执行不同的操作。在PHP中，条件通常被称为控制结构。

### 如果

```PHP
<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } 
```

### ELSEIF

```PHP
<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] = "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } 
```

### 其他

```PHP
<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] = "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } else { 
  echo "You viewed a page that does not exist yet!"; 
 } 
```

### 注意

如果您有很多可能的条件，您可能想要使用[Switch语句](/php/switch) 。

#### 更多信息：

*   [php.net控制结构手册](https://secure.php.net/manual/en/control-structures.elseif.php)