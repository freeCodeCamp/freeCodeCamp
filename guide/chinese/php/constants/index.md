---
title: Constants
localeTitle: 常量
---
## 常量

常量是PHP中的一种变量。设置常量的`define()`函数有三个参数 - 键名，键的值和布尔值（true或false），它确定键的名称是否不区分大小写（默认为false）。设置后，常量值不能更改。它用于很少更改的值（例如数据库密码或api密钥）。

### 范围

重要的是要知道，与变量不同，常量总是具有全局范围，并且可以从脚本中的任何函数访问。

### 例

```PHP
<?php 
 define("freeCodeCamp", "Learn to code and help nonprofits", false); 
 echo freeCodeCamp; 
```

**输出：**

```text
Learn to code and help nonprofits 
```

#### 更多信息：

*   [php.net常量手册](https://secure.php.net/manual/en/language.constants.php)
*   [php.net define（）手册](https://secure.php.net/manual/en/function.define.php)