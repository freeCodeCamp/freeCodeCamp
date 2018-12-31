---
title: Infinite Loops
localeTitle: 无限循环
---
# 无限循环

infinte循环是一个循环语句（ `for` ， `while` ， `do-while` ），它不会自行结束。

循环语句的测试条件决定循环体是否执行。因此，始终为真的测试条件将永远继续执行循环体。在infinte循环中就是这种情况。

例子：

```java
// Infinite For Loop 
 for ( ; ; ) 
 { 
    // some code here 
 } 
 
 // Infinite While Loop 
 while (true) 
 { 
    // some code here 
 } 
 
 // Infinite Do While Loop 
 do 
 { 
    // some code here 
 } while (true); 
```

通常情况下，如果您的循环无限运行，则该错误不应发生，因为无限循环不会停止并阻止程序的其余部分运行。

```java
for(int i=0;i<100;i++){ 
 
    if(i==49){ 
    i=0; 
    } 
 
 } 
```

上面的循环无限运行，因为每次我接近49，它都被设置为0.这就是说我永远不会达到100来终止循环，所以循环是一个无限循环。

但是在这样的循环中停留的程序将无限期地继续使用计算机资源。这是不合需要的，并且是一种“运行时错误”。

为了防止错误，程序员使用break语句来摆脱循环。中断仅在特定条件下执行。使用像if-else这样的选择语句可以保证相同。

```java
while (true) 
 { 
    // do something 
 
    if(conditionToEndLoop == true) 
        break; 
 
    // do more 
 } 
```

在常规循环上使用无限循环的主要优点是可读性。

有时，如果循环在中间结束，而不是在结束/开始，则循环体更容易理解。在这种情况下，无限循环将是更好的选择。