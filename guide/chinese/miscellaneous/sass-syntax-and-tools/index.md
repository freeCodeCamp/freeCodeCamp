---
title: Sass Syntax and Tools
localeTitle: Sass语法和工具
---
_“艺术家和他的工具一样好。”_

这不一定是真的，但我们使用的工具可以确保我们的生活更轻松，我们的任务更容易管理。想象一下，编写没有键盘快捷键或片段的代码！不是世界末日，而是你得到了主旨。

我们将讨论的“工具”，或者更常被称为指令，实际上是与Sass捆绑在一起的内置功能，可以帮助我们作为开发人员编写DRY-er（不要重复自己）和更清晰的代码。

_如果您想在自己的文本编辑器中进行操作，我建议您安装**Sass语法高亮显示器** 。 Atom和Sublime Text以及其他一些编辑都支持这些。_

## 变量

如果您使用其他编程语言（JavaScript，Python，Java，C等）编写代码，那么您就熟悉变量的概念。如果没有，则变量基本上是声明的语句，可以存储某种值，如数字或字符串。

在Sass中，变量的工作方式基本相同，并且可以在变量名称旁边用“$”字符声明：
```
$main-color: #CCCCCC; 
```

上面的变量是存储灰色调的十六进制颜色代码。我们可以在任何内声明该变量`.scss`或`.sass`我们在正在处理的文件，我们还可以将所需的变量标签（HTML5标签，ID，类，伪选择）造型时：
```
$main-color: #CCCCCC; 
 
 header { 
  background-color: $main-color; 
 } 
```

在此代码段中，我们已将标题的`background-color`的值分配给存储在`$main-color`的值，该值（当Sass编译为CSS时）输出为：
```
header { 
  background-color: #CCCCCC; 
 } 
```

整齐！但是我们难道不能将`background-color`设置为`#CCCCCC`吗？答案是肯定的，但还有更多。

假设我们为客户设计了一个多页面网站，我们刚刚选择了一个简单的三色“配色方案”。我们的导航栏，页脚是一种颜色，也许我们的文章元素，段落和标题是剩下的两种颜色之一。然后有一天，客户改变了我们选择的配色方案，并希望它改变了。大。

因此，我们的任务是完成我们的多个样式表（如果您愿意，可以使用一个大型样式表）并更改所有这些颜色值。也许我们混在一起。或者我们可能会错过一个并且必须继续修复它们。

使用变量（以及我们稍后将讨论的Sass partials的使用），我们可以调整变量声明的值，并且在我们使用样式表中的变量的任何其他地方，值将改变以反映我们更改的变量赋值。这只是Sass中相应使用时方便变量的一个例子。随着我们添加到Sass工具带中，变量变得越来越重要。

在那个问题上，让我们来解决mixins问题。

## 混入

mixin是一个可重用的代码块，可以接受参数，就像JavaScript中的函数一样。但是，不要将其与Sass中的实际`@function`功能混淆。

通过在“mixin”一词前加上“@”字符，然后是mixin的名称来声明Mixins。下面是一个名为btn的mixin示例，它接受两个参数并将它们应用于CSS属性：
```
@mixin btn($color, $text-color) { 
  background-color: $color; 
  color: $text-color; 
  padding: 1em; 
 } 
```

在写出mixin之后，默认情况下不会发生任何事情，因为我们没有使用mixin（类似于编写函数而不是调用函数）。让我们整合我们的mixin。我们将使用`@include`语句将其包含在HTML5 `button`选择器中：

_`@include`语句允许我们将mixin样式引入我们选择的CSS选择器。在这种情况下，带有蓝色和白色值的`button`选择器作为参数传入。_
```
button { 
  @include btn(blue, white); 
 } 
```

如果我们选择，我们可以在任何其他HTML选择器中使用。这将编译为：
```
button { 
  background-color: blue; 
  color: white; 
  padding: 1em; 
 } 
```

只需使用单行`@include btn(blue, white);`在我们的按钮选择器中，我们可以引入我们的mixin中写出的所有代码，蓝色和白色作为参数传入。另外，我们可以为传递给mixin的参数设置默认值。例如，假设我们希望我们的按钮mixin默认为特定的颜色和字体颜色，如果调用时没有传递任何值：
```
@mixin button($color: green, $text-color: red) { 
  background-color: $color; 
  color: $text-color; 
  padding: 1em; 
 } 
```

通过输入“：”后跟我们想要设置的默认值，我们将green指定为`$color`参数的默认值，将red指定为`$text-color`参数的默认值。

现在，如果我们调用我们的mixin而不传递任何值...
```
button { 
  @include btn; 
 } 
```

这归结为：
```
button { 
  background-color: green; 
  color: red; 
  padding: 1em; 
 } 
```

如果我们想将变量用于mixin，我们也可以这样做：
```
$main-color: #CCCCCC; 
 $second-color: #FFFFFF; 
 
 @mixin button($color: $main-color, $text-color: $second-color) { 
  background-color: $color; 
  color: $text-color; 
  padding: 1em; 
 } 
```

在上面的示例中，我们使用不同的十六进制颜色值声明两个变量，然后将参数`$color`和`$text-color`为默认为我们的变量（如果没有传递参数）。

为mixin设置默认值通常被认为是一种很好的做法，但绝对没有必要。您会发现许多开发人员都有自己的方式来编写代码并对被认为是“最佳”的内容发表意见。

这里的乐趣不会停止。在写出mixins时，我们可以执行一些其他有用的技巧，以及如何编写它们的无限可能性。从mixin中拿走的重要一点是它们可以作为模块或“对象”，我们可以在需要的代码中声明某些样式，传递值和重用，而不是在设计不同元素时不断重复自己。他们可以帮助我们更加真实地遵守DRY原则。

## 扩展

我们将讨论的最后一个工具是extend指令。 Extends可用于将先前应用的样式复制到另一个元素。然而，在实现扩展时幕后会发生更多的事情，如果我们不小心，这会对我们的样式产生一些意想不到的副作用。

下面是一个使用的扩展指令的示例：
```
.primary-module { 
  color: red; 
 } 
 
 .another-module { 
  @extend .primary-module; 
 } 
 
 // This ouputs the following CSS 
 
 .primary-module, .another-module { 
  color: red; 
 } 
```

这里没什么太阴暗了。我们有一个选择器定位`.another-module` ，它使用扩展来克隆应用于选择器`.primary-module`样式。这会输出`color: red;`样式`color: red;`被施加到类`.primary-module`和`.another-module` 。到目前为止的逻辑和一个具有类似效果的工具，将mixin包含在需要共享相同样式的几个元素上。

现在让我们仔细看看另一个例子，然后选择一个extend指令复杂化的地方：
```
.primary-module p { 
  color: red; 
 } 
 
 .another-module { 
  @extend .primary-module; 
 } 
 
 // This outputs the following CSS 
 
 .primary-module p, .another-module p { 
  color: red; 
 } 
```

你懂了吗？的选择器`.another-module`是使用在一个延伸`.primary-module p`选择器。请注意，因为`.primary-module`有一个`p` （段落标记）的下降选择器，当调用extend并编译我们的Sass代码时， `color: red;`的样式为`color: red;`正在应用于`.primary-module p`和`.primary-module p` `.another-module p` 。

发生的事情是，extend指令不仅克隆了`.primary-module p`的样式，而且还克隆了`p`的下降选择器标记并将其添加到`.another-module` 。我们正在复制借来的样式和后代选择器。因此，我们扩展的样式将应用于作为`.another-module`后代的段落元素，而不仅仅是具有`.another-module`类的元素。

如果我们不知道正在做什么，你可以看到这样的东西会变得毛茸茸。

所以我们已经看过延伸的窗帘，现在你可能会想到_使用延伸的重点是什么？是值得的还是我可以使用mixins？_

简短的回答（关于这个主题还有很多内容）是，通常扩展将用于有目的地利用应用于其他元素的样式的继承，或者特别使用Sass中所谓的**静默类** 。扩展通常可以在小心使用时实现mixins的功能，但不应轻率地使用它来代替另一个。实践扩展并将其用于特定目的。

至于静默类，这有望在本文即将发布的部分中介绍。现在只知道静默类是Sass中的选择器，它们以“％”字符为前缀，除非通过扩展调用，否则根本不会编译。

## 结论

如果你已经完成了本文的结尾，你应该获得一些认可。我写这篇文章是希望以一种方式解释Sass，我希望当我第一次开始搞乱它时，它会被教给我。如果CSS是你挣扎的东西，或者总是因为它变得一团糟而感到忧虑，那么希望Sass将开始缓解一些挫折。

这篇文章意味着在Sass世界中让你的脚湿透的“速成课程”。仍然有大量的工具和功能使Sass大放异彩，以及在**构建样式表并将其分解为部分**时的最佳实践。

我的建议是在你自己的文本编辑器和[Sassmeister中](http://www.sassmeister.com/)开始沙盒，以便更好地[理解](http://www.sassmeister.com/)本文所涵盖的概念。也请关注免费代码营Sass课程即将推出。

走出去，升级你的Sass游戏。