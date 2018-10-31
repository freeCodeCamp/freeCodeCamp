---
title: CSS3 Flexible Box
localeTitle: CSS3灵活盒子
---
## CSS3灵活盒子

Flexbox模型提供了一种在文档中元素之间布局，对齐和分配空间的有效方法 - 即使视口和元素的大小是动态的还是未知的。

Flexbox模型背后最重要的思想是父容器可以改变其项目的宽度/高度/顺序，以最好地填充可用空间。 Flex容器扩展项目以填充可用空间，或缩小它们以防止溢出。 1

#### 基本用法

Flexbox可用于将任意数量的给定元素置于一个元素内。一个基本的例子是以下代码：

`css .center-elements-inside { display: flex; flex-direction: row; justify-content: center; }`

让我们分解这个例子。首先我们将display属性设置为“flex”，以便我们可以应用我们的flexbox属性。接下来我们宣布flexbox将处理我们的元素的方式。这可以是一行，也可以是一列。将其设置为行将使元素在元素内水平对齐。该列将垂直对齐它们。

现在让我们简单介绍一下“对齐内容”。此属性声明元素在父元素内的分布方式。我们选择了“中心”值。这意味着此元素中的所有元素都将居中。

#### 更多信息：

要全面了解Flexbox，请阅读在FreeCodeCamp Medium页面上[了解您需要了解的所有内容](https://medium.freecodecamp.org/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af) 。

有关交互式指南，请[参阅Flexbox终极指南 - 通过示例学习](https://medium.freecodecamp.org/the-ultimate-guide-to-flexbox-learning-through-examples-8c90248d4676)

这两个都是Ohans Emmanuel的巨大资源。

另一个深入但易于理解的优秀视觉指南可以在[CSS-Tricks的](https://css-tricks.com) [“指南”中](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)找到

### 来源

1.  [Coyier，克里斯。 “Flexbox完整指南”CSS-Tricks。最后更新时间为2017年9月28日。](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)