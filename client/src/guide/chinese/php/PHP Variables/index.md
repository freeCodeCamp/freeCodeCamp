---
title: PHP Variables
localeTitle: PHP变量
---### PHP- Vaiables类型

Varibles是以PHP程序的中间方式存储信息的主要方式。 PHP中的所有变量都使用`$variable_name`等前导美元符号进行捐赠。 变量分配有`= operator` ，左侧是变量，右侧是要计算的表达式。

### 变量命名

命名变量的规则如下： -

1.  变量名称必须以字母或下划线字符开头。 2.变量名可以由数字，字母，下划线组成，但不能使用`+ , - , % , ( , ) . &`类的字符`+ , - , % , ( , ) . &`以它的名字。 3. `($age and $AGE are two different variables)`名称区分大小写，即`($age and $AGE are two different variables)` 。

### 创建（声明）PHP变量

在PHP中，变量以$符号开头，后跟变量名称。下面给出的代码片段显示了它。

`shell <?php $txt = "Hello world!"; $x = 6; $y = 10.5; ?>`