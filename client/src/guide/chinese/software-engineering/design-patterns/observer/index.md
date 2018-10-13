---
title: Observer pattern
localeTitle: 观察者模式
---
Observer模式提供订阅模型，其中对象订阅事件并在事件发生时得到通知。

## 观察者模式

这种模式是事件驱动编程的基础。在前端开发中，这是一个坚定地扩展应用程序逻辑的基本模式。在这种模式中，您可以在**主题**和**观察者**之间做出改变。主题是事件本身，例如_点击_ ， _按键_或来自服务器的信号。当主题改变状态时（事件触发时），所有订阅的**观察者都会**得到通知。有关事件的更多信息，请阅读[Evenet Driven Programming](https://www.technologyuk.net/software-development/designing-software/event-driven-programming.shtml)

### 订阅

这种模式的优点是拥有一组订阅对象，这些对象将响应事件，而不是在应该通知的每个对象上调用一个函数。另一个优点是观察者通过接口订阅，这允许事件功能的更改仅在函数内。

## 其他资源

[Observer Design Pattern中的](http://www.dofactory.com/javascript/observer-design-pattern)代码示例及更多内容