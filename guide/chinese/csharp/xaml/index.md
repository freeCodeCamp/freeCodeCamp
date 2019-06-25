---
title: Xaml
localeTitle: XAML
---
## XAML：可扩展的应用程序标记语言

XAML发音为“Zammel”是由Microsoft开发的标记语言。该标记语言主要用于设计GUI。它在工作流程中的可用性也很受欢迎。

Silverlight，移动开发，WPF（Windows Presentation Foindation），Windows Store等领域大量使用XAML，跨越任何CLR和.NET框架

它是一种语言并且回答什么和如何。它旨在将行为与设计器代码分开。

## 例

创建具有多个属性的TextBlock。 TextBlocks通常用于输出文本，非常类似于.NET框架的旧版本中的Labels。

```xml
<TextBlock Text="I am a TextBlock!" 
    HorizontalAlignment="Left" 
    FontSize="25" 
    FontWeight="Bold" 
    Margin="50,10,0,0" /> 
```

### 例2

以下示例显示了带有“Hello World！”的标签。作为其顶级容器中的内容，称为UserControl。

```xml
<UserControl xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"> 
    <Label Content="Hello World!" /> 
 </UserControl> 
```

### 更多信息：

*   [关于XAML和WPF引擎的初学者文章](http://www.c-sharpcorner.com/UploadFile/logisimo/a-beginners-article-about-xaml-and-the-wpf-engine/)
    
*   [XAML Magic：附加属性](http://www.codemag.com/article/1405061)
    
*   [XAML概述（WPF）](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-overview-wpf)