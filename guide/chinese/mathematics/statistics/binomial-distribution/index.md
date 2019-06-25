---
title: Binomial Distribution
localeTitle: 二项分布
---
## 二项分布

二项分布描述了在具有成功概率`p` `n`独立伯努利试验中具有恰好`k`成功的概率。

在我们使用binomail发布之前，必须满足四个条件。

1.  审判是独立的。
2.  试验次数`n`是固定的。
3.  每个试验结果可分为成功或失败。
4.  成功的概率`p`对于每个试验是相同的。

### 例

考虑一次抛硬币10次的实验。让“负责人”的结果成功，“尾巴”的结果就是失败。

1.  扔硬币是实验的一个试验，每次我们掷硬币时，获得的结果与任何其他试验的结果无关。
2.  我们把硬币扔了10次（固定值为`n` ）。
3.  我们决定将“Heads”视为成功，将“Tails”视为失败。
4.  用公平硬币获得头部的概率是0.5，并且在每次试验中都是相同的。

满足所有四个条件，因此，我们可以使用二项分布对该实验进行建模。

让我们找到一次获得Heads exacty的概率，即1次成功。

有10个投掷，任何一个都可能导致Heads的结果，并且这10个场景中的每一个具有相同的概率。因此，最终概率可写为： `[# Number of Scenarios] x P(single scenario)`

上述等式的第一个分量是在`n = 10`试验中排列`k = 1`成功的方式的数量。第二个组成部分是四个（同样可能的）情景中任何一个的概率。

考虑`P(Single Scenario)`在`k`成功的一般情况下和`n`试验中的`n - k`失败。要查找值，请对独立事件使用乘法规则：

![](https://cdn-media-1.freecodecamp.org/imgr/YXzUPiB.png)

从`n`试验中获得`k`成功的方法可以写成**n选择k** ：

![](https://cdn-media-1.freecodecamp.org/imgr/AQ3P4vi.png)

因此，在`n`独立试验中获得准确观察`k`成功概率的通式如下：

![](https://cdn-media-1.freecodecamp.org/imgr/ZErXKtQ.png)

因此，在试验中获得正好一个头的概率是：

![](https://cdn-media-1.freecodecamp.org/imgr/fN5wOH2.png)

### 均值和方差

具有`n`试验的二项分布的均值，其中`p`是成功的概率，由下式给出：

![](https://cdn-media-1.freecodecamp.org/imgr/4ji7JXx.png)

和方差：

![](https://cdn-media-1.freecodecamp.org/imgr/1tPHKHj.png)

#### 更多信息：

*   [OpenIntro Statistics第3版（第3章 - 第145页）](https://www.openintro.org/stat/textbook.php?stat_book=os)
*   [推导二项分布的均值和方差](https://www.youtube.com/watch?v=8fqkQRjcR1M)