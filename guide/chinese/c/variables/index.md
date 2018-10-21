---
title: Variables in C
localeTitle: C中的变量
---
# 在C中使用变量

现在您知道数据类型的选项是什么。让我们在这里用一个简单的例子来应用它：

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_first_variable = 12; 
    double my_second_variable = 983.9; 
 
    printf("My int is %i\n", my_first_variable); 
    printf("My double is %f\n", my_second_variable); 
 
    return 0; 
 } 
```

这里有很多新东西要看！你已经看过`#include`和`int main(void)` ，所以不值得一试。新的是`int my_first_variable = 12;` 。

从前面开始，您应该记得`int`允许我们存储整数值。在`int`出现`my_first_variable` 。这是一个变量 - 它可以存储值，您可以更改其中存储的值。我们从一个声明开始，我们告诉计算机这个变量的初始值是12.在我们尝试使用它之前告诉计算机我们想要一个变量是很重要的。否则，该变量将不存在，并且当您尝试告诉它使用不存在的变量时，编译器将不知道该怎么做。

下一行是`double my_second_variable = 983.9` 。与之前类似的结构应该清楚地表明，您正在告诉计算机创建一个名为“我的_第二个_变量”的变量，该变量可以保存`double`精度值，并且您希望将其设置为983.9。

变量的实际名称并不重要。它可以是你想要的任何东西，只要它不是C为实际语言保留的任何单词，它只能包含数字和字母，从不包含任何空格。变量名称不能以数字开头。按照惯例，C使用明确的变量名称替换下划线表示空格。变量也可以是camelCase，如下所示：

```C
double myFirstVariable = 983.9 
```

事实上，在其他语言中也是如此。但是，在C中通常不会这样做。

创建变量后，我们开始实际使用它们：

```C
    printf("My int is %i\n", my_first_variable); 
    printf("My double is %f\n", my_second_variable); 
```

这与您之前使用的printf（）相同，但现在它有一些不同的功能。首先，请注意括号内现在有两件事：要打印到屏幕上的文本和变量。另请注意`%i`和`%f` 。这被称为_格式说明符_ ，用于指定应该打印的格式。每当printf（）遇到其中一个时，它将尝试将给定的变量插入到该点。

因为我们的变量的数据类型以几种不同的方式在计算机中表示，所以C有几种不同的方式来显示它们：

数据类型|格式说明符 ---------------- | ------------------ char | ％c，或％hhi在签名时作为数字打印，％hhu在未签名时打印为数字 简短| ％hi，或未签名的％hu int | ％i，％d也可以使用 长| ％li，或未签名时的％lu 长久的％lli，或未签名时的％llu 漂浮| ％F 双| ％F 长双| ％如果 unsigned int | ％鲁

要打印变量，您必须具有格式说明符，然后是要格式化的变量。几个格式说明符可以在同一个printf（）中一起使用：

```C
    printf("%i and %f", my_first_variable, my_second_variable); 
```

为了扫描变量，您必须具有格式说明符，然后是变量的地址（通过在变量名称前加上'＆'符号表示）作为输入。几个格式说明符可以在同一个scanf（）中一起使用：

```C
    scanf("%i and %f", &my_first_variable, &my_second_variable); 
```

现在让我们开始更改变量中的值。以下是与之前相同的示例，但还有更多行：

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_first_variable = 12; 
    double my_second_variable = 983.9; 
 
    printf("My int is %i\n", my_first_variable); 
    printf("My double is %f\n", my_second_variable); 
 
    my_second_variable = -18.2 + my_first_variable; 
 
    printf("Now my double is %f\n", my_second_variable); 
 
    return 0; 
 } 
```

现在有一行读取`my_second_variable = -18.2 + my_first_variable;` 。此等式为左侧的变量分配新值。每当分配一个新值时，它所分配的变量必须始终位于左侧，并且必须始终在那里。您的程序将找到右侧的结果，并将其分配给左侧的变量。在这种情况下，我们将_第一个_变量添加到-18.2。我的_第一个_变量是12，-18.2 + 12是-6.2，所以我的_第二个_变量在这一步之后变为-6.2。我们将在稍微进一步学习数学！

## 关于花车和双打的更多信息

当打印出浮点数和双精度数时，很多时候我们需要小数点后的精度。如果我们有

```C
float var1 = 15.3; 
 printf("%f"); 
```

我们得到`15.300000` 。所以，假设我们只想要小数点后的两个位置给我们`15.30` 。我们会使用％.2f。请注意，我们在我们想要的小数位数前面使用小数点后跟f，表示我们要打印float或double。

# 变量的名称

*   您可以在名称中使用的唯一字符是字母字符，数字和 下划线（\_）字符。
*   名称中的第一个字符不能是数字。
*   大写字符被视为与小写字符不同。
*   您不能将C关键字用于名称。

# 在你继续之前......

## 回顾

*   变量需要在使用之前创建。
*   变量按以下格式创建： `datatype variable_name = number` 。
*   格式说明符允许打印变量。
*   等号`=`允许将值分配给变量。