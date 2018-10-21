---
title: Limits Intro
localeTitle: 限制简介
---
## 范围

要说函数f（x）的极限意味着通过使x足够接近但不等于p，可以使f（x）尽可能接近L。

#### 例

设f（x）= x。然后f（x）的极限x倾向于1等于1.也就是说，当你走x，0，然后是0.01，然后是0.1，然后是0.5，并通过所有的值时，函数的值x轴上的值越来越接近1，该函数f（x）= x的值将倾向于1.波纹，函数的图形。

![图f（x）= x](https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter01/images/identity.gif)

当一个人说f（x）非常接近L，但没有“触摸”它时，意味着它们的距离非常小，同样，x倾向于a，但不等于a，意味着x距离很小从一个。为此，使用绝对值的定义。

| f（x） - L | <ε，| x - a | <δ

符号，epsilon和delta分别代表任意小的数字。

![限制](http://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit_files/image001.gif)

上图说明如下：对于您可能选择的任何小ε> 0（ε），可以在L +ε和L-ε之间绘制条带，即黄色区域或水平条带。然后，在选择了epsilon之后，有一个δ> 0（delta），可以确定，它允许你绘制一个垂直条带，就像上图中的粉红色区域，粉红色区域，在+δ之间和a - δ。现在，如果你在粉红色区域中取任何x，即a，那么这个x将比a +δ和a-δ更接近a。要么，

| x - a | <δ

如果您现在确定图表上您选择的x给出的点，那么图表上的这一点将位于粉红色和黄色区域的交点。这意味着该函数值f（x）将比L +ε和L +ε更接近于L.要么，

| f（x） - L | <ε

因此，如果在粉红色区域中取x的任何值，则x的那些值的图形将位于黄色区域中。

好吧，想象以下情况：您和您的朋友将使用地图进行令人兴奋的旅行。你会开车，你的朋友会为你处理地图。现在，对于你朋友给你读的地图中的每英寸，如果你愿意的话，车会移动，假设，2公里或1.24英里。请注意，尽管我们使用的是单位，但只是为了理解它，我们可以将“你的函数”写成：

f（英寸）= 2km

所以，如果你的朋友在地图上看了2英寸，你就会移动4公里。你们两个现在累了，决定休息，但你和你的朋友一样聪明，你们两个都在想：

*   嘿，如果我倾向于为你读书，从地图上看，接下来的10英寸，我们累了，不得不时不时地休息，所以我不会读到整整十英寸，但我相信我会尽可能接近，你认为我们会旅行多少？

你可以这样思考：

*   我知道你读的每英寸，我开车2公里！所以，如果你倾向于阅读10英寸......嗯...我们可能会尽可能接近20公里！不完全是20，但我们会非常接近。

这是一种说明这个概念的方法，假设你走在图上，函数是你的“规则”，x是“你要走多远”，f（x）是你实际行走的值，给出你得到的规则。

#### 属性

考虑到函数的限制存在，然后：

*   **和**

![限额总和](http://tutorial.math.lamar.edu/Classes/CalcI/LimitsProperties_files/eq0004MP.gif)

总和的限制是限制的总和。

令f（x）等于x，f（x）= x并且g（x）= 2x。设x倾向于1.限制：

lim（f（x）+ g（x））= lim f（x）+ lim g（x）= lim x + lim 2x = 1 + 2 = 3

或者lim（x + 2x）= lim（3x）= 3

*   **产品**

![限制的产物](http://tutorial.math.lamar.edu/Classes/CalcI/LimitsProperties_files/eq0005MP.gif)

产品的限制是限制的产物。

考虑前一个例子中的相同函数，f（x）= x和g（x）= 2x。现在，使x趋于2。

lim（f（x）\* g（x））= lim f（x）\* lim g（x）= 2 \* 4 = 8

或lim（x \* 2x）= lim（2x ^ 2）= 2 \* 4 = 8

*   **产品不变**

![产品不变](http://tutorial.math.lamar.edu/Classes/CalcI/LimitsProperties_files/eq0003MP.gif)

您可以将倍增常数“限制”出限制。

再次假设f（x）= x。限制，现在x趋于5：

lim（10 \* x）= 10 lim（x）= 50

lim（10x）= 50

*   **师**

![限制划分](http://tutorial.math.lamar.edu/Classes/CalcI/LimitsProperties_files/eq0006MP.gif)

划分的限制是限制的划分。

设f（x）= 2x且g（x）= x + 1.确保您所遵循的函数不为零。使x趋于2，你有：

lim（2x / x）= lim 2x / lim x = 4/2 = 2

或lim（2x / 2）= lim 2 = 2.这是一个常数函数，因此无论你在x轴上行走多少，该值总是趋向于一个特定值。

*   **功率**

![限制的力量](http://tutorial.math.lamar.edu/Classes/CalcI/LimitsProperties_files/eq0007MP.gif)

如果n是整数。

设f（x）等于x + 1，让x趋于2.假设以下限制：

lim \[（x + 1）\] ^ 2 =（3）^ 2 = 9

lim \[（x + 1）\] ^ 2 = lim（x ^ 2 + 2x + 1）= 9（注意你也可以使用sum属性！）

#### 更多信息：

[注释和进一步的例子](http://tutorial.math.lamar.edu/Classes/CalcI/LimitsProperties.aspx)

[简介限制讲座](https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-continuity/ab-limits-graphically/v/introduction-to-limits-hd)