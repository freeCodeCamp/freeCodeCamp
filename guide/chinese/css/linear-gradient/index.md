---
title: Linear Gradient
localeTitle: 线性梯度
---
## 线性梯度

这是一个存根。 [帮助我们的社区扩展它](https://github.com/freecodecamp/guides/tree/master/src/pages/css/linear-gradient/index.md) 。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。

#### 更多信息：

在“线性渐变”中，颜色沿单个方向流动，即 - 从左到右，从上到下，或您选择的任何角度。

![具有两种颜色停止的渐变](https://cdn.discordapp.com/attachments/261391445074771978/371707961422118912/image.png)

**具有两个色标的线性渐变**

### 句法-

要创建线性渐变，您必须定义至少两个色标（它们是在其中创建过渡的颜色）。它在**背景**或**背景图像**属性上声明。
```
background: linear-gradient(direction, colour-stop1, colour-stop2, ...); 
```

**注意：如果未指定方向，则默认情况下转换为“从上到下”**

### 不同的梯度过渡 -

**从上到下 ：**
```
background: linear-gradient(red, yellow); 
```

![从上到下](https://cdn.discordapp.com/attachments/261391445074771978/371702268803809301/image.png)

**左到右 ：**

为了使左到右，你在直线梯度（开始时添加一个额外的参数）开始用这个词**来**指示方向：
```
background: linear-gradient(to right, red , yellow); 
```

![左到右](https://cdn.discordapp.com/attachments/261391445074771978/371702990161051648/image.png)

**对角线位置：**

您还可以通过指定水平和垂直起始位置（例如，左上角或右下角）来对角移动渐变。

这是从左上角开始的渐变样本 -
```
 background: linear-gradient(to bottom right, red, yellow); 
```

![左上方](https://cdn.discordapp.com/attachments/261391445074771978/371705382105776128/image.png)

### 使用角度指定渐变的方向 -

您还可以使用角度，以更准确地指定渐变的方向：
```
background: linear-gradient(angle, colour-stop1, colour-stop2); 
```

角度被指定为水平线和梯度线之间的角度。
```
background: linear-gradient(90deg, red, yellow); 
```

![90度](https://cdn.discordapp.com/attachments/261391445074771978/371710718698848256/image.png)

### 使用两种以上的颜色 -

您不仅限于两种颜色，您可以根据需要使用尽可能多的逗号分隔颜色。
```
background: linear-gradient(red, yellow, green); 
```

![具有3色停止的渐变](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)

您还可以使用其他颜色语法（如RGB或十六进制代码）来指定颜色。

### 硬色停止 -

您不仅可以使用渐变来渐变颜色，还可以使用渐变颜色立即从一种纯色转换为另一种纯色
```
background: linear-gradient(to right,red 15%, yellow 15%); 
```

![硬色停止](https://cdn.discordapp.com/attachments/261391445074771978/371716730046775318/image.png)

**更多信息** [\- Mozilla Docs上的线性渐变](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)