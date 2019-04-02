---
title: Operators
localeTitle: 运营商
---
# C中的操作员

## 1.算术运算符

*   `+`添加到操作数（值） `C int a = 6; int c = a + 1; // c = 7`
*   `-`从第一个操作数中减去第二个操作数 `C int a = 8; int b = 9; int c = a - b; // c = -1`
*   `*`两个操作数相乘 `C int a = 8; int b = 9; int c = a * b; // c = 72`
*   `/`将第一个操作数除以第二个操作数 `C int a = 8; int b = 4; int c = a / b; // c = 2`
*   `%`在整数除法后给出余数 `C int a = 8; int b = 9; int c = b % a; // c = 1 because b = 1*a + 1 = 8 + 1`
*   `++`将int值增加1 `C int a = 8; a++; // a = 9 int b = a++; // postfix operator; a = 10, b = 9 int c = ++a; // prefix operator; a = 11, c = 11`
*   `--` int值减1 `C int a = 8; a--; // a = 7 int b = a--; // postfix operator; a = 6, b = 7 int c = --a; // prefix operator; a = 5, c = 5` // C程序演示算术运算符的工作原理

# 包括

int main（） { int a = 9，b = 4，c;
```
c = a+b; 
 printf("a+b = %d \n",c); 
 
 c = ab; 
 printf("ab = %d \n",c); 
 
 c = a*b; 
 printf("a*b = %d \n",c); 
 
 c=a/b; 
 printf("a/b = %d \n",c); 
 
 c=a%b; 
 printf("Remainder when a divided by b = %d \n",c); 
 
 return 0; 
```

}

## 2.关系运算符

*   `==` Equal - 当两个操作数相等时为true `C int a = 5, b = 5; bool c = (a == b); // c = true`
*   `!=`不相等 - 当两个操作数不相等时为真 `C int a = 5, b = 6; bool c = (a != b); // c = true`
*   `>`大于 - 当第一个操作数大于第二个操作数时为真。 `C int a = 8, b = 5; bool c = (a > b); // c = true`
*   `<`小于 - 第一个操作数小于第二个操作数时为真。 `C int a = 5, b = 8; bool c = (a < b); // c = true`
*   `>=`大于或等于 - 当第一个操作数较大或等于第二个操作数时为真。 `C int a = 8, b = 5; bool c = (a >= b); // c = true bool d = (a >= 8); // d = true`
*   `<=`小于或等于 - 当第一个操作数小于或等于第二个操作数时为真。 `C int a = 5, b = 8; bool c = (a <= b); // c = true`

## 3.逻辑运算符

*   `&&` AND运算符 - 当**两个**操作数**都**为真时为真。 `C bool c = (5 < 6) && (8!=7); // both operands true, therefore c = true`
*   `||` OR运算符 - 当第一个或第二个操作数为真（或两者）时为真 `C bool c = (5 < 6) || (8 == 7) // first operand is true, therefore c = true`
*   `!` NOT运算符 - 当操作数为false时为True。 `C bool c = !(8 == 7) // translate: NOT (false), therefore c = true`

## 4.按位运算符

*   `&` AND运算符 - 如果在某个位置两个操作数中都有一个位，则将其复制到结果中 `C A = 11001 B = 01000 RESULT = 01000`
*   `|` OR运算符 - 如果在某个位置任一操作数中有一位，则将其复制到结果中 `C A = 11001 B = 01000 RESULT = 11001`
*   `^` XOR（异或）运算符 - 如果在某个位置其中一个操作数（不是两个）中都有一个位，则将其复制到结果中 `C A = 11001 B = 01000 RESULT = 10001`
*   `~`否定运算符 - 反转位。 1 - > 0,0 - > 1 `C C = 01000 RESULT = 10111`
*   `<<`左移位运算符 - 左操作数向左移动与右操作数一样多的位 `C A = 11001 A << 2 RESULT = 00100`
*   `>>`右移操作符 - 左操作数向右移动与右操作数一样多的位 `C A = 11001 A >> 2 RESULT = 00110`

## 5.指派运营商

*   `=` `C int a = 7; // 'a' is going to be equal to 7`
*   `+=` `C int a = 7; a += 5; // equivalent to a = a + 5 = 7 + 5 = 12`
*   `-=` `C int a = 7; a -= 2; // equivalent to a = a - 2 = 7 - 2 = 5`
*   `*=` `C int a = 7; a *= 3; // equivalent to a = a * 3 = 7 * 3 = 21`
*   `/=` `C int a = 21; a /= 3; // equivalent to a = a / 3 = 21 / 3 = 7`
*   `%=`  
    `C int a = 21; a %= 5; // equivalent to a = a % 5 = 21 % 5 = 1`

其他运营商↦sizeof＆trinary 除了上面讨论的运算符，还有一些其他重要的运算符，包括sizeof和？ ：C语言支持。

运算符说明示例 sizeof（）返回变量的大小。 sizeof（a），其中a是整数，将返回4。 ＆返回变量的地址。 ＆一个;返回变量的实际地址。

*   指向变量的指针。 \*一个; ？ ：条件表达式。如果条件为真？然后值X：否则值Y.

## 6\. C中的运算符优先级

具有最高优先级的运算符显示在列表的顶部。在表达式中，运算符 优先级越高，将首先进行评估。

*   Postfix `() [] -> . ++ --`
*   一元`+ - ! ~ ++ -- (type)* & sizeof`
*   乘法`* / %`
*   添加剂`+ -`
*   Shift `<< >>`
*   关系`< <= > >=`
*   平等`== !=`
*   按位AND `&`
*   按位XOR `^`
*   按位OR `|`
*   逻辑AND `&&`
*   逻辑OR `||`
*   有条件的`?:`
*   Assignment `= += -= *= /= %= >>= <<= &= ^= |=`
*   逗号`,`