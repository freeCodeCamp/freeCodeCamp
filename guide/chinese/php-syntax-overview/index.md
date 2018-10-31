---
title: PHP Syntax Overview
localeTitle: PHP语法概述
---
本章将向您介绍PHP的基本语法，并使您的PHP基础变得非常重要。

### 逃到PHP

PHP解析引擎需要一种方法来区分PHP代码与页面中的其他元素。这样做的机制被称为“逃避PHP”。有四种方法可以做到这一点 -

#### Canonical PHP标签

最普遍有效的PHP标签样式是 -
```
<?php...?> 
```

如果您使用此样式，您可以肯定您的标签将始终被正确解释。

#### 短开（SGML风格）标签

短或短开标签看起来像这样 -
```
<?...?> 
```

正如人们所料，短标签是最短的选项你必须做两件事之一才能让PHP识别标签 -

在构建PHP时，请选择--enable-short-tags配置选项。

将php.ini文件中的短_开_标签设置设置为on。必须禁用此选项才能使用PHP解析XML，因为XML标记使用相同的语法。

#### ASP风格的标签

ASP样式标记模仿Active Server Pages使用的标记来描述代码块。 ASP风格的标签看起来像这样 -
```
<%...%> 
```

要使用ASP样式标记，您需要在php.ini文件中设置配置选项。

#### HTML脚本标记

HTML脚本标签看起来像这样 -
```
<script language="PHP">...</script> 
```

### 评论PHP代码

注释是程序中仅存在于人类读者并在显示程序结果之前被删除的部分。 PHP中有两种评论格式 -

#### 单行评论 -

它们通常用于与本地代码相关的简短说明或注释。以下是单行注释的示例。

\`\`\` <？ ＃这是评论，而且 ＃这是评论的第二行

//这也是评论。每种风格仅供评论 print“单行注释的例子”; ？>
```
#### Multi-lines printing − 
 Here are the examples to print multiple lines in a single print statement − 
 
 ``` 
 <? 
   # First Example 
   print <<<END 
   This uses the "here document" syntax to output 
   multiple lines with $variable interpolation. Note 
   that the here document terminator must appear on a 
   line with just a semicolon no extra whitespace! 
   END; 
 
   # Second Example 
   print "This spans 
   multiple lines. The newlines will be 
   output as well"; 
 ?> 
```

#### 多行评论 -

它们通常用于提供伪代码算法，并在必要时提供更详细的解释。注释的多行样式与C中的相同。以下是多行注释的示例。
```
<? 
   /* This is a comment with multiline 
      Author : Mohammad Mohtashim 
      Purpose: Multiline Comments Demo 
      Subject: PHP 
   */ 
 
   print "An example with multi line comments"; 
 ?> 
```

### PHP对空格不敏感

空格是您键入的内容，通常在屏幕上不可见，包括空格，制表符和回车符（行尾字符）。

PHP空格不敏感意味着它几乎不会影响你连续多少个空白字符。一个空格字符与许多这样的字符相同。

例如，以下每个将2 + 2的总和分配给变量$ 4的PHP语句都是等效的 -
```
$four = 2 + 2; // single spaces 
 $four <tab>=<tab2<tab>+<tab>2 ; // spaces and tabs 
 $four = 
 2+ 
 2; // multiple lines 
```

### PHP区分大小写

是的，PHP是一种区分大小写的语言。试试下面的例子 -
```
<html> 
   <body> 
 
      <?php 
         $capital = 67; 
         print("Variable capital is $capital<br>"); 
         print("Variable CaPiTaL is $CaPiTaL<br>"); 
      ?> 
 
   </body> 
 </html> 
```

这将产生以下结果 -
```
Variable capital is 67 
 Variable CaPiTaL is 
```

### 语句是以分号结束的表达式

PHP中的语句是任何后跟分号（;）的表达式。由PHP标记包含的任何有效PHP语句序列都是有效的PHP程序。这是PHP中的典型语句，在这种情况下，将一个字符串分配给一个名为$ greeting的变量 -
```
$greeting = "Welcome to PHP!"; 
```

### 表达式是令牌的组合

PHP的最小构建块是不可分割的标记，例如数字（3.14159），字符串（.two。），变量（$ 2），常量（TRUE），以及构成PHP本身语法的特殊单词，如if ，等等，等等

### 大括号制作积木

尽管语句不能像表达式一样组合，但是您始终可以通过将语句包含在一组花括号中来将语句序列放在语句的任何位置。

这两个陈述都是等价的 -
```
if (3 == 2 + 1) 
   print("Good - I haven't totally lost my mind.<br>"); 
 
 if (3 == 2 + 1) { 
   print("Good - I haven't totally"); 
   print("lost my mind.<br>"); 
 } 
```

### 从命令提示符运行PHP脚本

是的，您可以在命令提示符下运行PHP脚本。假设您在test.php文件中有以下内容
```
<?php 
   echo "Hello PHP!!!!!"; 
 ?> 
```

现在运行此脚本作为命令提示符如下 -
```
$ php test.php 
```

它会产生以下结果 -
```
Hello PHP!!!!! 
```

希望您现在掌握PHP语法的基本知识。