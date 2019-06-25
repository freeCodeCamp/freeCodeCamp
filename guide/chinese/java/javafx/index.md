---
title: JavaFX
localeTitle: JavaFX的
---
## 介绍

JavaFX是由Sun Microsystems创建的用于开发富桌面和Internet应用程序的图形框架。 JavaFX的创建是为了取代旧的Swing和抽象窗口工具包（AWT）库，并作为Java语言的Java标准版标准图形API。

## 开发工具

### Gulon SceneBuilder

Gulon Scene Builder是一个用于JavaFX中用户界面（UI）设计的应用程序。该应用程序使用拖放功能进行快速UI设计，允许您在设计时可视化您正在创建的界面。

#### Screeenshots：

![场景生成器UI](https://cdn-media-1.freecodecamp.org/imgr/3d9SqBR.png)

### FXML

FXML是一种基于XML的标记语言，用于在JavaFX中定义结构。 FXML文档在树中布置类中的各种对象，类似于XML文档中的标记嵌套。

#### 例：

```XML
<HBox spacing="10" alignment="bottom_right" > // Creates an HBox Object 
        <Button text="Sign In"/> // Nested inside the HBox is a Button object with the text 'Sign In' 
 </HBox> 
```

### 参考文献：

[FXML文档](https://docs.oracle.com/javase/8/javafx/api/javafx/fxml/doc-files/introduction_to_fxml.html)

[场景生成器教程](https://docs.oracle.com/javase/8/scene-builder-2/get-started-tutorial/overview.htm#JSBGS164)

[官方JavaFX文档](https://docs.oracle.com/javase/8/javase-clienttechnologies.htm)