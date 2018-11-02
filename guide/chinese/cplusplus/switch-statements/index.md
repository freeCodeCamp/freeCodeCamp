---
title: Switch Statement
localeTitle: undefined
---
switch语句允许测试变量与值列表的相等性。每个值都称为一个案例，并且针对每种情况检查要打开的变量。

句法： switch（表达式）{ case constant-expression： 声明（S）; 打破; //可选的 case constant-expression： 声明（S）; 打破; //可选的

//您可以拥有任意数量的案例陈述。 default：//可选 声明（S）; }

以下规则适用于switch语句 -

switch语句中使用的表达式必须具有整数或枚举类型，或者是类类型，其中类具有单个转换函数为整数或枚举类型。

您可以在交换机中包含任意数量的case语句。每个案例后跟要与之比较的值和冒号。

case的constant-expression必须与switch中的变量具有相同的数据类型，并且必须是常量或文字。

当接通的变量等于大小写时，该大小写之后的语句将一直执行，直到达到break语句。

当达到break语句时，交换机终止，控制流跳转到switch语句后面的下一行。

并非每个案例都需要包含休息时间。如果没有出现中断，则控制流将进入后续情况，直到达到中断。

switch语句可以有一个可选的默认大小写，它必须出现在交换机的末尾。当没有任何情况为真时，默认情况可用于执行任务。默认情况下不需要中断。

例： \`\`\`C ++

# 包括

使用命名空间std;

int main（）{ //局部变量声明： char grade ='D';

开关（等级）{ 案例'A'： cout <<“太棒了！” << endl; 打破; 案例'B'： 案例'C'： cout <<“做得好”<< endl; 打破; 案例'D'： cout <<“你通过了”<< endl; 打破; 案例'F'： cout <<“最好再试一次”<< endl; 打破; 默认值： cout <<“无效等级”<< endl; } cout <<“你的成绩是”<< grade << endl;

返回0; }\`\`\`

输出： 你通过了 你的成绩是D

### 来源

https://www.tutorialspoint.com