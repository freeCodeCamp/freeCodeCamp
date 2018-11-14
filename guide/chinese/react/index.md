---
title: React
localeTitle: 应对
---
# 应对

React是一个用于构建用户界面的JavaScript库。它被Stack Overflow 2017年开发者调查中的“框架，图书馆和其他技术”类别评为最受欢迎。 1

React是一个JavaScript库，构建在它上面的React应用程序在浏览器中运行，而不是在服务器上运行。这种应用程序仅在必要时与服务器通信，这使得它们与传统网站相比非常快，这些网站迫使用户等待服务器重新呈现整个页面并将其发送到浏览器。

React用于构建用户界面 - 用户在屏幕上看到并与之交互以使用您的Web应用程序。这个界面被分成几个部分，而不是将一个巨大的页面拆分成称为组件的较小部分。更一般地说，这种方法称为模块化。

*   它是声明性的：React使用声明性范例，使您更容易推理您的应用程序。
*   效率很高：React计算保持DOM最新所需的最小变更集。
*   而且它很灵活：React可以与您已经知道的库和框架一起使用。

## 为什么要学习React？

1.  React涉及组合，其中包含许多组件，将功能包装到封装容器中。 许多流行的网站使用React实现MVC架构模式。 Facebook（部分），Instagram（完全），可汗学院（部分），Codecademy（部分），纽约时报（部分），雅虎邮箱（完全），Dropbox的新照片和视频库应用程序Carousel（完全）是已知的热门网站使用React。 如何使用React构建这些大型应用程序？简单的答案是构建小型应用程序或组件。 例：

```jsx
const Component2 = () => { 
  return ( 
    <div></div> 
  ); 
 }; 
 const Component3 = () => { 
  return ( 
    <div></div> 
  ); 
 }; 
 const Component1 = () => { 
  return ( 
    <div> 
      <Component2 /> 
      <Component3 /> 
    </div> 
  ); 
 }; 
 
 ReactDOM.render( 
  <Component1 />, 
  document.getElementById("app") 
 ); 
```

2.  在大多数情况下，React是声明性的，我们更关心的是做什么而不是如何做特定的任务。声明性编程是一种编程范例，表示计算的逻辑而不描述其控制流。 声明性编程具有某些优点，例如减少副作用（当我们修改任何状态或改变某些东西或发出API请求时发生），最小化可变性（大量抽象），增强的可读性，较小的错误。
    
3.  单向数据流。 React中的UI实际上是状态的功能，这意味着当状态更新时它也会更新UI。所以我们的UI随着状态的变化而进步。
    

## React的优点

使用React的一些原因是：

1.  快速。在React中制作的应用程序可以处理复杂的更新，并且仍然能够快速响应。
2.  模块化。您可以编写许多较小的可重用文件，而不是编写大而密集的代码文件。 React的模块化可以解决JavaScript的[可维护性问题](https://en.wikipedia.org/wiki/Spaghetti_code) 。
3.  可扩展性。显示大量不断变化的数据的大型程序是React表现最佳的地方。
4.  灵活。您可以将React用于与制作Web应用程序无关的有趣项目。人们仍然在研究React的潜力。 [有探索的空间](https://medium.mybridge.co/22-amazing-open-source-react-projects-cb8230ec719f) 。

### 虚拟DOM

React的神奇之处在于它对DOM的解释以及它创建UI的策略。

React首先使用Virtual DOM虚拟渲染HTML树，然后，每次状态发生变化时，我们都会得到一个需要被带到浏览器DOM的新HTML树，而不是编写整个新树，React只会编写新树和前一棵树之间的差异（因为React在内存中都有树）。此过程称为树对帐。

### 和解

React有一个智能的差异算法，它只用于在DOM节点中重新生成实际需要重新生成的内容，同时保留其他所有内容。由于React的虚拟DOM，这种差异化过程是可能的。

使用虚拟DOM，React将最后的DOM版本保留在内存中，当它有一个新的DOM版本带到浏览器时，新的DOM版本也将在内存中，因此React可以计算新版本和旧版本之间的差异。

然后，React将指示浏览器仅更新计算的diff而不是整个DOM节点。无论我们重新生成界面多少次，React都会向浏览器添加新的“部分”更新。

## 从Scratch反应

您是否想开始学习反应的基础知识而不会陷入困境创建开发环境？ 如果您不熟悉Web开发，那么设置开发环境可能会让您在尝试学习React或第一次学习React时感到有点恐惧。

在本文中，我们将介绍如何仅使用文本编辑器和浏览器开始使用React，而不是其他任何内容。

[![“在这里观看视频”width](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)

[### 1 - 用Emmet设置锅炉板代码

让我们开始第1步。我们将从浏览器中的一个名为“index.html”的文件开始。我们将从锅炉板代码HTML代码开始。为了快速入门，我建议使用Emmet和你拥有的任何文本编辑器，并在第一行输入`html:5`然后按shift键获取下面的代码。或者您可以继续复制并粘贴下面的代码。

```javascript
html:5 
```

这将产生以下代码：

```javascript
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
  <title>Document</title> 
 </head> 
 <body> 
 
 </body> 
 </html> 
```

我们可以填写“反应时间！”的标题。

此内容不会显示在您的网页中。 HTML文件的head部分中的任何内容都将是我们的浏览器将用户在body部分中解释我们的代码的元数据。此标题将显示在我们页面的选项卡上，而不是实际显示在页面上。

### 2 - 获取脚本标签以利用React和Babel库的强大功能

好的，第一项是从我们的清单中检查出来的。我们来看第二项。我们将使用脚本标记来引入React和Babel来设置我们的开发人员环境。这不是一个真实的开发者环境。那将是一个非常复杂的设置。它还会给我们留下大量的锅炉板代码和库，这些代码和库将使我们不再学习React基础知识。本系列的目标是回顾React的基本语法并直接进入编码。 我们将使用`<script>`标签引入React Library，React DOM库（为什么）和Babel库。

```javascript
<head> 
  ... 
  <!-- REACT LIBRARY --> 
  <script src="https://unpkg.com/react@15.5.4/dist/react.js"></script> 
  <!-- REACT DOM LIBRARY --> 
  <script src="https://unpkg.com/react-dom@15.5.4/dist/react-dom.js"></script> 
  <!-- BABEL LIBRARY --> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script> 
  ... 
  <title>Time to React!</title> 
 </head> 
```

您可以随意使用这些库的更新版本。他们不应该为我们覆盖的内容创建任何重大更改。

我们在这里做什么？ ：HTML `<script>`元素用于嵌入或引用可执行脚本。 “src”属性指向React库，ReactDOM库和Babel库的外部脚本文件。 这就像你有一个电动剃须刀。无论电动剃须刀多么花哨，除非你能将它插入墙壁并获得电力，否则对你来说实在没什么好处。如果我们的浏览器无法插入这些库来理解和解释我们的目标，那么我们编写的React代码将对我们不利。 这就是我们的应用程序如何获得React的功能，它将是我们如何将React插入Dom。我们将React和ReactDOM作为两个不同的库的原因是因为有一些用例，例如React Native，移动开发不需要渲染到DOM，因此库被拆分以供人们根据需要做出决定在他们正在进行的项目上。因为我们需要我们的React来实现它，所以我们将使用这两个脚本。 Babel是我们如何利用ES5之外的ECMA脚本并处理我们将在React中使用的称为JSX（JavaScript as XML）的东西。我们将在即将到来的课程中深入了解巴别塔的魔力:) 好的，我们已经完成了步骤1和2.我们已经设置了锅炉板代码并设置了我们的开发环境。

### 3 - 渲染React到DOM

接下来的两个步骤是在DOM中选择我们想要呈现React内容的位置。并在正文中使用另一个脚本标记来表示我们的React内容。一般来说，作为关注实践的良好分离，这将在其自己的文件中然后链接到该html文档。我们将在稍后的课程中做到这一点。 现在，我们将它留在我们目前所处的html文档的正文中。 现在我们来看看在DOM上选择一个位置来呈现我们的React内容是多么简单。 我们会进入体内。最佳实践不仅仅是将React放入要显示的body标签中，而是创建一个单独的元素，通常是div，您可以将其视为插入React内容的根元素。

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
 </body> 
```

我们将创建一个简单的`<div>`元素，并为其指定“app”。我们将能够定位此位置以插入我们的React内容，就像使用CSS来定位您选择的样式的ID一样。 任何反应内容都将在id为app的div标签内呈现。与此同时，我们将留下一些文字说“React尚未渲染”如果我们在预览页面时看到这一点，则意味着我们错过渲染React的某个地方。 现在，让我们继续在我们的身体内创建一个脚本标签，我们将在第一时间做出反应。我们脚本标记需要的语法是添加“type”属性。这指定了脚本的媒体类型。在我们的脑海中，我们使用了一个src属性，该属性指向React库，ReactDOM库和Babel库的外部脚本文件。

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
  </script> 
 </body> 
```

我们正在使用的脚本的“类型”我们将用引号括起来并将其设置为`"text/babel"` 。 当我们使用JSX时，我们需要这种能力立即使用babel。首先，我们将把React呈现给DOM。我们将使用`ReactDOM.render()`方法来执行此操作。这将是一种方法，并且记住方法只是附加到对象的函数。此方法将采用两个参数。

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
  ReactDOM.render(React What, React Where); 
 </script> 
 </body> 
```

第一个论点是反应的“什么”。第二个参数是您希望将其放置在DOM中的位置“where”。 让我们从调用ReactDOM.render（）方法开始。 我们的第一个论点是我们的JSX。

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
  ReactDOM.render( 
    <h1>Hello World</h1>, 
    React Where 
  ); 
 </script> 
 </body> 

```](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI) 

[](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)[官方反应文档声明](https://reactjs.org/docs/introducing-jsx.html) ：“这个有趣的标签语法既不是字符串也不是HTML。它被称为JSX，它是JavaScript的语法扩展。我们建议将它与React一起使用来描述UI应该是什么样子。 JSX可能会提醒您一种模板语言，但它具有JavaScript的全部功能。 JSX生成React“元素”。“

很多时候，JSX让那些已经成为开发人员的人感到不安，因为它看起来像HTML。在很小的时候，开发人员被教导分离关注点。 HTML有它的位置，CSS有它的位置，JavaScript有它的位置。 JSX似乎模糊了界限。你正在使用看起来像HTML的东西，但正如Facebook所说，它具有JavaScript的全部功能。

这可能让退伍军人感到不安，所以很多反应教程都是在没有JSX的情况下开始的，这可能非常复杂。我们不会这样做。因为这门课程是针对那些在职业生涯中非常年轻的人，所以当你看到这种语法时，你可能不会带来那些危险信号。

JSX非常直观。您可以非常轻松地阅读此代码，并看到这将是显示文本“Hello World”的最大标头标记。没有神秘感和相当简单。 现在，让我们来看看我们的第二个论点是什么。

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
    ReactDOM.render( 
      <h1>Hello World</h1>, 
      document.getElementById("app") 
    ); 
  </script> 
 </body> 
```

这就是我们希望我们的反应内容呈现给dom的地方。你过去可能已经做了很多次了。我们只需输入`document.getElementById()` 。我们将进入app的id论证。就是这样。我们现在将使用app的id来定位div，以插入我们的反应内容。

我们希望确保保存我们的内容。继续在浏览器中打开它，你应该看到“Hello World”。正如您可能猜到的，使用React并不是创建Hello World应用程序的最快或最好的方法。我们还没有看到它的好处。但现在，我们知道一切正常。

继续打开控制台，看看“元素”。您可以使用命令+ shift + j或在Windows和Linux上的Mac上执行此操作：Ctrl + Shift + J.

如果单击head标签，我们可以看到我们包含的脚本库。然后我们可以深入到我们的文档正文。让我们点击ID为“app”的div。当我们这样做时，我们会看到带有“Hello World”内容的`<h1>`标签。

[在此查看整个代码](https://github.com/robgmerrill/hello-react/blob/master/section-one/index.html)

要么

[![“在这里观看视频”width](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)

[

### 概括

那么让我们快速回顾一下。在我们的head标签中，我们抓住了React，ReactDOM和Babel的脚本标签。这些是我们的浏览器在其元数据中需要的工具，以便特定地阅读我们的React代码和JSX。 然后我们通过创建id为“app”的元素div来定位我们想要插入React的DOM中的位置。 接下来，我们创建了一个脚本标记来输入我们的React代码。我们使用了带有两个参数的ReactDOM.render（）方法。 React内容的“内容”，在本例中是我们的JSX，第二个参数是您希望将React内容插入DOM的“where”。在这种情况下，它是id为“app”的位置。

](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)

[作为JSX的替代品，您可以使用像Babel这样的ES6和Javascript编译器。](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI) [https://babeljs.io/](https://babeljs.io/)

### 更多信息：

*   [反应主页](https://reactjs.org/)
*   [丹阿布拉莫夫的推特](https://twitter.com/dan_abramov)
*   [Egghead.io的React教程](https://egghead.io/browse/frameworks/react)

### 来源

1.  [“2017年开发者调查结果。”](https://insights.stackoverflow.com/survey/2017#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-other-technologies) _堆栈溢出。_访问时间：2017年10月28日。