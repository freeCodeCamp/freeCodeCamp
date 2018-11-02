---
title: Derivatives
localeTitle: 衍生品
---
## 衍生品

导数是函数的瞬时变化率，或任何特定时刻的函数变化率。导数是微积分的工具，您可以通过限制来确定它。

通过将它与代数中的斜率（平均变化率）的概念进行比较，可以理解导数的概念。

我们来看一个例子：

你决定从旧金山开车到加利福尼亚州的圣罗莎 - 距离大约60英里。你在一小时内完成驱动器;因此，您的平均变化率（速度）是每小时60英里。

但是，对于旅行的每个瞬间，您没有以每小时60英里的速度旅行。你起步较慢，然后提高你的速度并沿途改变它，然后当你到达目的地时减速到完全停止。

让我们来看看你旅行的图表，x轴代表时间（以分钟为单位），y轴代表距离（以英里为单位）。铂。 A代表旧金山，坐标（0,0）和pt。 B代表Santa Rosa，坐标为（60,60）。当您从旧金山前往圣罗莎时，曲线代表您在空间和时间上的位置。

![图片](https://github.com/MarkMikow/MyFiles/blob/master/img1.png?raw=true)

您可以通过取代数斜率（“上升超过运行”）来确定行程的平均速度（每次距离变化的速率）：

![图片](https://github.com/MarkMikow/MyFiles/blob/master/img2.png?raw=true)

使用相同的图形，您可以选择任意两个点，C（x1，y1）和D（x2，y2），并找到它们之间的斜率。此外，您可以使用函数表示法标记每个点，使得（x1，y1）变为（x，f（x））并且（x2，y2）变为（（x + h），f（x + h））， h是pt的水平距离。 D来自pt。 C：

![图片](https://github.com/MarkMikow/MyFiles/blob/master/img3.png?raw=true)

从pt的斜率。 C到pt。 D是：

![图片](https://github.com/MarkMikow/MyFiles/blob/master/img4.png?raw=true)

表达方式![图片](https://github.com/MarkMikow/MyFiles/blob/master/img5.png?raw=true)被称为差商，您可以使用它来查找从图上任何点到任何其他点的平均变化率，水平距离为h个单位。

要将平均变化率（斜率）转换为瞬时变化率（导数，标记为f（x）），您可以采用差值极限：

![图片](https://github.com/MarkMikow/MyFiles/blob/master/img6.png?raw=true)

这是导数的正式定义，意味着你正在采用距离h并将其缩小到极小的数量。你仍然有一个斜坡，但它的终点是无限小的。事实上，如此接近，它们似乎是一个点，或者作为一个瞬间，及时出现。

由于与图上的点相切的线仅在一个点处与图相交，因此导数也被定义为图上任意点的切线的斜率。在上图的示例中，每个点的导数是您行驶的瞬时速度。

衍生物具有广泛的应用，并且用于物理学，工程学，经济学和其他学科。