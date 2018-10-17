---
title: Understand Functional Programming Terminology
localeTitle: 理解功能编程术语
---
## 理解功能编程术语

### 方法

就像在上一次挑战中一样，您必须调用`getTea`方法并将其存储在变量中。只有这一次，你有2个变量来存储2个单独的数据集。你会看到`getTea()`函数和以前一样，只是现在它需要2个单独的参数。第一个参数是一个函数，因此我们需要传入`prepareGreenTea()`函数或`prepareBlackTea()`函数，然后`numOfCups`第二个参数`numOfCups` ，它可以作为整数输入。

### 解

在本练习中，我们将更高阶函数的结果分配给变量。为此，我们使用回调函数作为参数调用函数。

## 暗示：

`javascript const basketOne = makeBasket(addFruit, 10)`

##解决方案：

\`\`\`的JavaScript

/ \*\*

*   一个很长的准备绿茶的过程。
*   @return {string}一杯绿茶。 \*\* / const prepareGreenTea =（）=>'greenTea';

/ \*\*

*   获得一定数量的茶。
    
*   @param {function（）：string} prepareTea茶的准备功能。
    
*   @param {number} numOfCups所需的茶杯数量。
    
*   @return {Array 给定量的茶杯。 \*\* / const getTea =（prepareTea，numOfCups）=> { const teaCups = \[\];
    
    for（let cups = 1; cups <= numOfCups; cups + = 1）{ const teaCup = prepareTea（）; teaCups.push（茶杯）; }
    
    回归茶杯; };
    
    //在此行下方添加代码 const tea4GreenTeamFCC = getTea（prepareGreenTea，27）; // :) const tea4BlackTeamFCC = getTea（prepareBlackTea，13）; // :) //在此行上方添加代码
    
    的console.log（ tea4GreenTeamFCC， tea4BlackTeamFCC ）;
    
    \`\`\`
    

## 代码说明：

在上面的解决方案中，我们将函数`prepareGreenTea()`和`prepareBlackTea()`作为参数或回调函数传递给`getTea()`函数，这些函数被分配给我们的两个常量变量`tea4BlackTeamFCC` 和`tea4GreenTeamFCC` 。 这样就不会改变全局变量，并且我们可以选择添加无限数量的`prepareTea()`方法的不同选项，因为它是一个传递给`getTea()`高阶函数的回调函数。