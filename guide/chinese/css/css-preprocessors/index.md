---
title: CSS Preprocessors
localeTitle: CSS预处理器
---
## CSS预处理器

CSS预处理器越来越成为前端Web开发人员工作流程的支柱。 CSS是一种非常复杂和细微的语言，为了使它的使用更容易，开发人员经常转向使用SASS或LESS等预处理器。

CSS预处理器编译使用特殊编译器编写的代码，然后使用它创建一个css文件，然后可以通过主HTML文档进行参考。使用任何CSS预处理器时，您将能够像在预处理器不到位时那样在普通CSS中编程，但您也可以使用更多选项。一些，例如SASS，具有特定的样式标准，这意味着使文档的编写更容易，例如，如果您选择这样做，则可以省略大括号。

当然，CSS预处理器也提供其他功能。提供的许多功能在预处理器中非常相似，语法上只有轻微的差异。因此，您可以选择任何您想要的人，并且能够实现相同的目标。一些更有用的功能是：

### 变量

任何编程语言中最常用的项目之一是变量，这是CSS特别缺乏的。通过使用变量，您可以定义一次值，并在整个程序中重复使用。 SASS的一个例子是：

```SASS
$yourcolor: #000056 
 .yourDiv { 
  color: $yourcolor; 
 } 
```

通过声明`SASS yourcolor`变量一次，现在可以在整个文档中重复使用相同的精确颜色，而无需重新键入定义。

### 循环

语言中的另一个常见项是循环，CSS缺少的东西。循环可用于多次重复相同的指令，而无需多次重新输入。 SASS的一个例子是：

\`\`\`SASS @for $ vfoo 35px to 85px { .margin - ＃{vfoo} { 保证金：$ vfoo 10px; } }
```
This loop saves us from having the to write the same code multiple times to change the margin size. 
 
 ### If/Else Statements 
 Yet another feature which CSS lacks are If/Else statements. These will run a set of instructions only if a given condition is true. An example of this in SASS would be: 
```

上海社会科学院 @if width（body）> 500px { 背景颜色：蓝色; } else { 背景颜色：白色; } \`\`\` 在这里，背景颜色将根据页面主体的宽度改变颜色。

这些只是CSS预处理器的一些主要功能。如您所见，CSS预处理器是非常有用的和多功能的工具。许多Web开发人员使用它们，强烈建议至少学习其中一个。

#### 更多信息：

SASS：http：//sass-lang.com/

更少：http：//lesscss.org/

手写笔：http：//stylus-lang.com/

MDN页面：https：//developer.mozilla.org/en-US/docs/Glossary/CSS\_preprocessor