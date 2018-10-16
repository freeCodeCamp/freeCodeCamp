---
title: Behavior Driven Development
localeTitle: 行为驱动的发展
---
## 行为驱动的发展

行为驱动开发（BDD）是一个从中诞生的软件开发过程![测试驱动开发（TDD）](../test-driven-development/index.md) 。 行为驱动开发将TDD的一般技术和原则与域驱动设计和面向对象分析与设计的思想相结合，为软件开发和管理团队提供共享工具和共享流程，以协作进行软件开发。 它是一种软件开发方法，其中通过描述其行为应如何出现在外部观察者中来指定和设计应用程序。

虽然BDD主要是关于如何通过商业利益和技术洞察来管理软件开发的想法，但BDD的做法确实假设使用专门的软件工具来支持开发过程。

虽然这些工具通常专门用于BDD项目，但它们可以被视为支持测试驱动开发的工具的专用形式。这些工具用于为无处不在的语言添加自动化，这是BDD的核心主题。

BDD专注于：

*   从哪里开始
*   测试什么和不测试什么
*   一次性测试多少钱
*   怎么称呼测试
*   如何理解测试失败的原因

BDD的核心是重新思考这些问题自然产生的单元测试和验收测试方法。 例如，BDD建议单元测试名称是以条件动词开头的整个句子（例如英语中的“should”），并且应按业务价值的顺序编写。 验收测试应该使用用户故事的标准敏捷框架编写：“作为一个_角色，_我想要_功能，_以便_获益_ ”。 接受标准应根据方案编写并作为类实现：给定_初始上下文_ ，何时_发生事件_ ，然后_确保一些结果_ 。

例
```
Story: Returns go to stock 
 
 As a store owner 
 In order to keep track of stock 
 I want to add items back to stock when they're returned. 
 
 Scenario 1: Refunded items should be returned to stock 
 Given that a customer previously bought a black sweater from me 
 And I have three black sweaters in stock. 
 When he returns the black sweater for a refund 
 Then I should have four black sweaters in stock. 
 
 Scenario 2: Replaced items should be returned to stock 
 Given that a customer previously bought a blue garment from me 
 And I have two blue garments in stock 
 And three black garments in stock. 
 When he returns the blue garment for a replacement in black 
 Then I should have three blue garments in stock 
 And two black garments in stock. 
```

除此之外还有一些好处：

1.  所有开发工作都可以直接追溯到业务目标。
2.  软件开发满足用户需求。满意的用户=良好的业务。
3.  高效的优先级 - 首先提供关键业务功能。
4.  各方对项目有共同的理解，可以参与沟通。
5.  共享语言可确保每个人（技术与否）都能全面了解项目的进展。
6.  产生的软件设计与现有产品相匹配，并支持即将到来的业
7.  改进质量代码，降低维护成本，降低项目风险。

## 更多信息

*   Wiki上的[BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
*   众所周知的行为驱动开发（BDD）框架是[Cucumber](https://cucumber.io/) 。 Cucumber支持许多编程语言，可以与许多框架集成;例如， [Ruby on Rails](http://rubyonrails.org/) ， [Spring Framework](http://spring.io/)和[Selenium](http://www.seleniumhq.org/)
*   https://inviqa.com/blog/bdd-guide