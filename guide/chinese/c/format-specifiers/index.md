---
title: Format Specifiers
localeTitle: 格式说明符
---
# 格式说明符

格式说明符定义要在标准输出上打印的数据类型。无论是打印格式化输出还是格式化输入，我们都需要格式说明符。格式说明符也称为格式字符串。在输入和输出期间使用格式说明符。这是一种在使用scanf（）或使用printf（）进行打印的过程中告诉编译器输入变量中的数据类型的方法。一些例子是％c，％d，％f等。

字符格式说明符：％c

# 包括

int main（） { char ch ='A'; printf（“％c \\ n”，ch）; 返回0; }

输出： 一个

整数格式说明符：％d，％i

# 包括

int main（） { int x = 45，y = 90; printf（“％d \\ n”，x）; printf（“％i \\ n”，x）; 返回0; }

输出： 45 45

双格式说明符：％f，％e或％E

# 包括

int main（） { 浮动a = 12.67; printf（“％f \\ n”，a）; printf（“％e \\ n”，a）; 返回0; }

输出： 12.670000 1.267000e + 01

整数的无符号八进制数：％o

# 包括

int main（） { int a = 67; printf（“％o \\ n”，a）; 返回0; }

输出： 103

整数的无符号十六进制：％x，％X

# 包括

int main（） { int a = 15; printf（“％x \\ n”，a）; 返回0; }

输出： F

字符串打印：％s

# 包括

int main（） { char a \[\] =“nitesh”; printf（“％s \\ n”，a）; 返回0; }

输出： nitesh

* * *

scanf（char \* format，arg1，arg2，...）

十进制整数：％d

# 包括

int main（） { int a = 0; scanf（“％d”，＆a）; //输入是45 printf（“％d \\ n”，a）; 返回0; }

输出： 45

整数可以是八进制或十六进制：％i

# 包括

int main（） { int a = 0; scanf（“％i”，＆a）; //输入为017（十进制为15） printf（“％d \\ n”，a）; scanf（“％i”，＆a）; //输入为0xf（15的十六进制） printf（“％d \\ n”，a）; 返回0; }

输出： 15 15

浮动数据类型：％f，％e（双精度），％lf（长双精度）

# 包括

int main（） { float a = 0.0; scanf（“％f”，＆a）; //输入是45.65 printf（“％f \\ n”，a）; 返回0; }

输出： 0.000000

字符串输入：％s

可以设定要放多少个小数点: 
%.2f 代表只会显示两个小数点。
但只可以放在 printf（）里，不能在scanf()里。

# 包括

int main（） { char str \[20\]; scanf（“％s”，str）; //输入是nitesh printf（“％s \\ n”，str）; 返回0; }

输出： nitesh

字符输入：％c

# 包括

int main（） { char ch; scanf（“％c”，＆ch）; //输入是A. printf（“％c \\ n”，ch）; 返回0; }

输出： 一个

您可以在ANSI C中使用的％说明符是：

|说明符|用于| |：-------------：|：-------------：| | ％c |单个字符| | ％s |一个字符串| |成喜|短（签字）| |胡锦涛％|短（无符号）| | ％的Lf |长双| | ％n |什么都不打印| | ％d |十进制整数| | ％o |八进制（基数为8）整数| | ％x |十六进制（基数为16）的整数| | ％p |地址（或指针）| | ％f |浮点数的浮点数 | ％u | int无符号小数| | ％e |科学记数法中的浮点数| | ％E |科学记数法中的浮点数| | %% | ％符号！ |
