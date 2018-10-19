---
title: Test Driven Development
localeTitle: 测试驱动开发
---
## 测试驱动开发

测试驱动开发（TDD）是敏捷软件开发方法之一。它基于这一概念

> 您必须在编写代码之前为代码编写测试用例

在这里，我们首先编写单元测试，然后编写代码以成功完成测试。这节省了执行单元测试和其他类似测试所花费的时间，因为我们正在进行成功的测试迭代以及在代码中实现模块化。 它基本上由4个步骤组成

*   写一个测试用例
    
*   看测试失败（红色）
    
*   让测试通过，同时处理任何犯罪行为（绿色）
    
*   重构代码以达到标准（Refactor）
    
    这些步骤遵循Red-Green-Refactor的原则。 Red-Green确保您编写最简单的代码来解决问题，而最后一步确保您编写的代码符合标准。
    

系统的每个新功能都应遵循上述步骤。

![tdd flow](http://www.agiledata.org/images/tddSteps.jpg)

#### 更多信息：

敏捷数据的[TDD简介](http://agiledata.org/essays/tdd.html)

维基在[TDD上](https://en.wikipedia.org/wiki/Test-driven_development)

Martin Fowler [是TDD死了？](https://martinfowler.com/articles/is-tdd-dead/) （关于这个主题的一系列录制对话）

Kent Beck的书“ [测试驱动开发实例”](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)

鲍勃叔叔[的TDD周期](http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)