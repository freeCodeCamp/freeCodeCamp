---
title: Unit Tests
localeTitle: 单元测试
---
## 单元测试

单元测试是一种测试，位于软件测试金字塔的底部。 它涉及将代码库分解为更小的部分（或单元）并单独测试它们。 根据编程语言（或范例）的类型，这些可以针对您定义为单元的任何内容，尽管最常见的做法是针对功能。

### 为什么这样？

*   **保护** - 单元测试可防止为防御性编程引入新旧漏洞
*   **信心** - 您可以添加更改，或重用或重构代码（两者都很常见），并确保您没有添加错误
*   **文档** - 单元测试记录了代码的行为和流程，因此对于熟悉代码的人来说很容易理解
*   **隔离** - 它将模块与整个功能**隔离**开来。这种方法迫使你自己想一个模块，并问它的工作是什么？
*   **质量** - 由于单元测试迫使您考虑并使用自己的API，因此它强制实施良好/可扩展的接口和模式。它可以指出应该解决的任何紧密耦合或过度复杂。糟糕的代码通常难以测试
*   **行业标准** - 现在，单元测试是一门普遍的学科，并且是大部分软件公司的要求
*   **更少的错误** - 大量研究表明，对应用程序进行测试可以将生产错误密度降低40％-80％。

### 示例（在Javascript中）

假设有一个函数写在**add.js**文件中

```javascript
var add = function(number1, number2){ 
  return number1 + number2; 
 } 
```

现在，为了编写这个特定函数的单元测试，我们可以使用像[mocha](http://mochajs.org/)这样的测试工具

```javascript
const mocha = require('mocha') 
 const chai = require('chai')  // It is an assertion library 
 describe('Test to check add function', function(){ 
  it('should add two numbers', function(){ 
    (add(2,3)).should.equal(5)  //Checking that 2+3 should equal 5 using the given add function 
  }); 
 }); 
```

### 测试驱动开发

单元测试是测试驱动开发（TDD）软件开发方法的关键特性。在这种方法中，通过重复使用非常短的周期来编写特定特征或功能的代码。首先，开发人员编写一组自动化单元测试并确保它们最初失败。接下来，开发人员实现传递测试用例所需的最少量代码。一旦验证代码的行为符合预期，开发人员就会返回并重构代码以遵守任何相关的编码标准。

### 更多信息

Martin Fowler关于单元测试： [martinfowler.com](https://www.martinfowler.com/bliki/UnitTest.html)

罗伯特·马丁又名“鲍勃博士”，关于TDD： [butunclebob.com](http://www.butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)

Eric Elliot关于单元测试和TDD： [中等](https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9)