---
title: Use the align-self Property
localeTitle: 使用align-self属性
---
## 使用align-self属性

这种挑战的主要原因应该是`float` ， `clear`和`vertical-align`不适用于柔性物品。这就是为什么我们有flex属性`align-self` ，它接受与`align-items`相同的值，并且优先于后者设置的任何值。

这意味着`align-self: center;`在`align-items: center;`不会。