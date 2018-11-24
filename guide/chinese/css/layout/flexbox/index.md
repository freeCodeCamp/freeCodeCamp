---
title: Flexbox
localeTitle: Flexbox的
---
## Flexbox的

Flexbox是一种在CSS3中构建内容的新方法。它提供了一种创建响应式网站的绝佳方式，这些网站可以在不同的屏幕尺寸和订单内容中良

使用flexbox有3个简单的步骤。

1.  使用_display：flex;_将父容器转换为Flex容器_;_在css部分
2.  使用_弯曲方向_调整不同容器的布置
3.  使用诸如justify-content，align-items等属性调整单个项目。

Flexbox Layout旨在提供一种更有效的方式来布置，对齐和分配容器中项目之间的空间，即使它们的大小未知和/或动态（因此单词“flex”）.flex布局背后的主要思想是让容器能够改变其物品的宽度/高度（和顺序），以最好地填充可用空间。 ![flexUsage](https://cdn.css-tricks.com/wp-content/uploads/2011/08/flexbox.png)

*   **主轴** ：柔性容器的主轴是主轴，柔性项目沿着主轴布置。要注意，它不一定是水平的;它取决于flex-direction属性（见下文）。
*   **主要开始| main-end** flex项目放在容器中，从main-start开始到main-end。
：*   **主要大小** ：弹性项目的宽度或高度（主要维度中的任何一个）是项目的主要大小。弹性项目的主要大小属性是“宽度”或“高度”属性，以主要维度中的任何一个为准。
*   **横轴** ：垂直于主轴的轴称为横轴。其方向取决于主轴方向。
*   **交叉开始|交叉端** ：柔性线用物品填充，并从柔性容器的交叉开始侧开始放入容器中，并朝向交叉端侧。
*   **十字大小** ：弹性项目的宽度或高度（以交叉维度中的任何一个为单位）是项目的交叉大小。十字尺寸属性是横向尺寸中的“宽度”或“高度”中的任何一个。

#### 更多信息：

[这是一篇很好的文章，](https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35)可以阅读以了解有关flexbox的更多信息 这是一个强烈推荐的实用指南，说明了应用于Flex容器和flex项目的不同flex属性： [https](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) ： [//css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)