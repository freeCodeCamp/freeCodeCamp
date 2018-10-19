---
title: Control Flow
localeTitle: 控制流
---
# 控制流

控制流语句正是该术语的含义。它们是基于决策，循环和分支改变执行流程的语句，以便程序可以有条件地执行代码块。

首先，Java具有以下用于流控制的构造：

*   `if`
    
    ```java
    if( <expression that results in a boolean> ){ 
        //code enters this block if the above expression is 'true' 
     } 
    
    ```
    
*   `if...else`
    
    ```java
    if( <expression that results in a boolean> ){ 
        //execute this block if the expression is 'true' 
     } else{ 
        //execute this block if the expression is 'false' 
     } 
    
    ```
    
*   `switch`
    

当有多个值和要检查的案例时，Switch是`if...else`构造的替代方案。

```java
switch( <integer / String / Enum > ){ 
    case <int/String/Enum>: 
        <statements> 
        break; 
    case <int/String/Enum>: 
        <statements> 
        break; 
    default: 
        <statements> 
 } 
```

注：程序流程`falls through`下一`case` ，如果`break`语句丢失。例如，假设你对办公室里的每个人都说标准的“你好”，但对于坐在你旁边的女孩来说，你对你的老板说得好脾气。表示方式如下：

```java
switch(person){ 
    case 'boss': 
        soundGrumpy(); 
        break; 
    case 'neighbour': 
        soundExtraNice(); 
        break; 
    case 'colleague': 
        soundNormal(); 
        break; 
    default: 
        soundNormal(); 
 } 
```

```
Note: The `default` case runs when none of the `case` matches. Remember that when a case has no `break` statement, it `falls through` to the next case and will continue to the subsequent `cases` till a `break` is encountered. Because of this, make sure that each case has a `break` statement. The `default` case does not require a `break` statement. 
```

*   `nested statements`

可以嵌套任何先前的控制流。这意味着您可以嵌套`if` ， `if..else`和`switch..case`语句。也就是说，您可以将这些语句的任意组合放在另一个语句中，并且`nesting`的深度没有限制。

例如，让我们考虑以下场景：

*   如果你的钱少于25美元，你可以给自己一杯咖啡。
*   如果你有超过25美元但不到60美元，你会得到一个体面的饭菜。
*   如果你有超过60美元但不到100美元，你会得到一顿不错的美食和一杯葡萄酒。
*   然而，当你有超过100美元，取决于你与谁在一起，你要么去一个烛光晚餐（与你的妻子）或你去体育酒吧（与你的朋友）。

表示这一点的方法之一是：

```java
int cash = 150; 
 String company = "friends"; 
 
 if( cash < 25 ){ 
    getCoffee(); 
 } else if( cash < 60 ){ 
    getDecentMeal(); 
 } else if( cash < 100 ){ 
    getDecentMeal(); 
    getGlassOfWine(); 
 } else { 
    switch(company){ 
        case "wife": 
            candleLitDinner(); 
            break; 
        case "friends": 
            meetFriendsAtSportsBar(); 
            break; 
        default: 
            getDecentMeal(); 
    } 
 } 
```

在此示例中，将执行`meetFriendsAtSportsBar()` 。

![:rocket:](https://forum.freecodecamp.org/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJZi/1)