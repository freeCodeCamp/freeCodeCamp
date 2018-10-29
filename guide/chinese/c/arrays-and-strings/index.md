---
title: Arrays and Strings
localeTitle: 数组和字符串
---
# C中的数组

数组允许将一组变量组合在一起作为一个变量。这本身很有用，但也因为字符串属于这一类。字符串是我们在计算机语言中表示单词和句子的方式，它们只是字符变量的集合。因此，我们使用C中的数组表示字符串。

## 制作一个数组

正常的整数变量将被声明为：

```C
int my_variable; 
```

要将此声明为数组，并使其成为5个整数的数组，可以将其声明为：

```C
int my_array[5]; 
```

这将生成一个名为`my_array`的数组，它可以容纳5个整数。但是，尚未设置阵列中的任何位置。您可以声明数组，并在开头设置值：

```C
int my_array[] = {1, 5, 3, 6, 2}; 
```

请注意，在此示例中，我们没有在方括号中指定数字。这是因为花括号中包含的值将分配给数组中的每个位置。你可以在括号中放一个数字，只要你确保创建足够的内存位置来存储你传入的值。

初始化数组时，可以提供比数组元素更少的值。例如， 以下语句仅初始化my\_array的前两个元素：

float my\_array \[5\] = {5.0,2.5};

如果部分初始化数组，编译器会将其余元素设置为零。

现在已经使用5个值声明了数组，它有5个内存位置。考虑一下这个表的可视化示例：

|职位| 0 | 1 | 2 | 3 | 4 | | ---------- | --- | --- | --- | --- | --- | |价值| 1 | 5 | 3 | 6 | 2 |

请注意，即使有5个内存位置，数组位置也只能达到4.这是因为C（和大多数其他语言）中的数组从0开始，因为数组是使用指针实现的。当您调用数组中的某个位置时，您实际上是在调用该内存位置加上一定数字。要获取数组的开头，请在内存中移动0个位置，然后在该位置移动位置，在内存中移动一个位置，依此类推。

这是在位置1将数组设置为9的示例：

```C
my_array[1] = 9; 
```

所以它就像任何其他变量一样，除了它有多个值可以使用方括号内的数字进行访问。也可以通过这种方式返回值：

```C
int variable = my_array[4]; 
```

这将声明`variable`为一个等于`my_array`位置4的值的整数。但是，因为`variable`是单个`int`而不是数组，所以这**不是**具有正确结果的代码：

```C
// This code will NOT work properly! 
 int variable = my_array; 
```

可以将任何整数放在方括号中以获得数组中的位置。那些整数也可以是变量。看一下这个打印数组内容的例子：

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_array[] = {1, 1, 2, 3, 5, 7, 12}; 
 
    for(int count = 0; count < 7; count++) { 
        printf("%i, \n", my_array[count]); 
    } 
 
    return 0; 
 } 
```

## 字符串

数组是变量集，字符串是字符集。因此，我们可以用数组表示字符串。您_可以_像以前一样声明某些内容，但是您需要将'\\ 0'作为您的一个值（稍后会详细介绍！）：

```C
char hello_world[] = {'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!', '\0'}; 
```

让人惊讶。这不是一个很好的解决方案。值得庆幸的是，C提供了一种更好的方式来记住字符串：

```C
char hello_world[] = "Hello world!"; 
```

那更好。它甚至不需要你将'\\ 0'放在最后。那是什么？

### 空终止

C中的字符串以空值终止，这意味着它们以空字符结尾。这样，编译器（以及您和其他人的代码）将知道字符串结束的位置：一旦字符为空，字符串就结束了。

当然，键盘上没有“空”按钮，但您仍然需要以某种方式输入它。这就是\\ 0的作用。只要C编译器看到\\ 0，它就会插入一个空字符。就像\\ n打印换行符一样。

### 印刷字符串

C对我们来说更容易的另一件事是打印字符串。您可以只使用％s格式说明符，而不是强制您打印出数组中的每个字符，而是像处理任何`int`或`double`值一样处理字符串。这是一个从最开始的hello，world程序的例子，用字符串稍微复杂一点：

```C
#include <stdio.h> 
 
 int main(void) { 
    char hello_world[] = "Hello, World!\n"; 
    printf("%s", hello_world); 
 
    return 0; 
 } 
```

### 玩字符串

打印字符串很简单，但其他操作稍微复杂一些。值得庆幸的是， `string.h`库有一些有用的功能可用于许多情况。

#### 复制： `strcpy`

`strcpy` （来自'string copy'）复制一个字符串。例如，该代码段将复制字符串的内容`second`到字符串`first` ：

```C
strpy(first, second); 
```

以下是strcpy函数的手动实现的示例：

void copy _string（char \[\] first_ string，char \[\] second\_string） { int i;
```
for(i = 0; first_string[i] != '\0'; i++) 
 { 
    first_string[i] = second_string[i]; 
 } 
```

}

#### 连接： `strcat`

`strcat` （来自'string concatenate'）将连接一个字符串，这意味着它将获取一个字符串的内容并将其放在另一个字符串的末尾。在此示例中， `second`内容将连接到`first` ：

```C
strcat(first, second); 
```

以下是fuction strcat的手动实现示例：

void string\_concatenate（char \[\] s1，char \[\] s2） { int i = strlen（s1），j; for（int j = 0; s2 \[j\]; j ++，i + = 1） { s1 \[i\] = s2 \[j\]; } }

#### 得到长度： `strlen`

`strlen` （来自'string length'）将返回一个对应于字符串长度的整数值。在这个例子中，一个名为`string_length`的整数将被赋予`my_string`的长度：

```C
string_length = strlen(my_string); 
```

这是一个功能strlen的手动实现：

int string\_length（char \[\] string） { int i;
```
for(int i = 0; string[i]; i++); 
 
 return i; 
```

}

#### 比较： `strcmp`

`strcmp` （来自'string compare'）比较两个字符串。如果它们相同则返回的整数值为0，但如果第一个值（通过累加字符）小于第二个值，它也将返回负值，如果第一个值大于第二个值，则返回正值。看一下如何使用它的示例：

```C
if(!strcmp(first, second)){ 
    printf("These strings are the same!\n"); 
 } else { 
    printf("These strings are not the same!\n"); 
 } 
```

注意`!` ，这是必需的，因为如果它们相同，则此函数返回0。在此处放置感叹号将使该比较返回true。

#### 拆分字符串： `strtok`

`strtok` （来自'string token'）使用分隔符将字符串分解为一系列标记。在此示例中，strtok使用分隔符delim将string str分解为一系列标记：

```C
char *strtok(char *str, const char *delim); 
```

# 在你继续之前......

## 回顾

*   数组是变量的集合。
*   数组具有可以用括号声明的单独位置，并使用方括号进行访问。
*   字符串也是数组，但我们可以稍微区别对待它们：它们可以使用双引号声明，并使用％s打印。
*   字符串有自己的库`string.h` ，它有一些方便的函数可供使用。