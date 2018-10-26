---
title: PHP tags
localeTitle: PHP标签
---
当PHP解析文件时，它会查找开始和结束标记，它们是`<?php`和`?>` ，它告诉PHP启动和停止解释它们之间的代码。以这种方式解析允许PHP嵌入到各种不同的文档中，因为PHP解析器忽略了一对开始和结束标记之外的所有内容。

PHP还允许短开标签`<?` （不建议这样做，因为只有在使用`short_open_tag php.ini`配置文件指令启用时才可用，或者如果PHP配置了`--enable-short-tags`选项）。

如果文件是纯PHP代码，则最好省略文件末尾的PHP结束标记。这可以防止在PHP结束标记之后添加意外的空格或新行，这可能会导致不必要的影响，因为当程序员无意在脚本中发送任何输出时，PHP将启动输出缓冲。

```php
<?php 
 echo "Hello world"; 
 
 // ... more code 
 
 echo "Last statement"; 
 
 // the script ends here with no PHP closing tag 

```