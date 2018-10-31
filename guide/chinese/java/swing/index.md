---
title: Java Swing
localeTitle: Java Swing
---
## Java Swing

让我们来探索Java swing教程。在使用Swing弄脏之前，建议您浏览[Abstract Window Toolkit（AWT）。](https://www.studytonight.com/java/java-awt.php)之前，Swing是作为[Java Foundation Classes（JFC）](https://en.wikipedia.org/wiki/Java_Foundation_Classes)的一部分添加的。但是它完全从Java合并到Java中1.2起。

### 极具特色的功能

1.  轻量级组件 - 由于Swing组件完全用JAVA编写，因此它们不像AWT组件那样使用特定于平台的资源。
    
2.  可插拔外观（PLAF） - 组件的外观完全由Swing本身决定。这使得更容易区分外观和组件的逻辑。
    

Swing GUI由两个主要支柱组成： - 组件和容器。以下部分详细讨论了它们。

### 组件

Component只是一个独立的可视化控件.Swing组件派生自JComponent类。进一步的JComponent继承了AWT容器和组件的所有特性。有关更多信息，请查看[JComponent](https://docs.oracle.com/javase/tutorial/uiswing/components/jcomponent.html)类的层次结构。

### 集装箱

所有容器也是组件。容器可包括一个或多个部件。 Swing定义了两种类型的容器

*   继承自JComponent-例如JFrame，JWindow，JApplet，JDialog
*   不继承自JComponent-例如JPanel

### 包

Swing包含大量软件包。请查看[官方文档](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html)以获取更多信息。

#### 更多信息：

*   [Oracle文档](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html)
*   [维基百科](https://en.wikipedia.org/wiki/Swing_(Java)