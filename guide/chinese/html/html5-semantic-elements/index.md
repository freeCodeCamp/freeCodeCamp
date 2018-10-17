---
title: HTML5 Semantic Elements
localeTitle: HTML5语义元素
---
## HTML5语义元素

语义HTML元素以人类和机器可读的方式清楚地描述了它的含义。诸如`<header>` ， `<footer>`和`<article>`元素都被认为是语义的，因为它们准确地描述了元素的用途和它们内部的内容类型。

### 快速历史

HTML最初是作为标记语言创建的，用于描述早期互联网上的文档。随着互联网的发展和被更多人采用，它的需求也发生了变化。互联网最初用于共享科学文档的地方，现在人们也想分享其他东西。很快，人们开始希望让网络看起来更好。因为Web最初并不是为了设计而构建的，所以程序员使用不同的hack来以不同的方式布局。程序员不是使用`<table></table>`来使用`<table></table>`来描述信息，而是使用它们来定位页面上的其他元素。随着视觉设计布局的使用的进展，程序员开始使用像`<div>`这样的通用“非语义”标签。他们经常会给这些元素一个`class`或`id`属性来描述它们的目的。例如，代替`<header>`它通常被写为`<div class="header">` 。由于HTML5仍然相对较新，因此今天在网站上使用非语义元素仍然很常见。

#### 新语义元素列表

HTML5中添加的语义元素是：

*   `<article>`
*   `<aside>`
*   `<details>`
*   `<figcaption>`
*   `<figure>`
*   `<footer>`
*   `<header>`
*   `<main>`
*   `<mark>`
*   `<nav>`
*   `<section>`
*   `<summary>`
*   `<time>`

诸如`<header>` ， `<nav>` ， `<section>` ， `<article>` ， `<aside>`和`<footer>`类的元素或多或少地像`<div>`元素一样。他们将其他元素组合成页面部分。但是，如果`<div>`标记可以包含任何类型的信息，则很容易识别语义`<header>`区域中的信息类型。

**w3schools的语义元素布局示例**

![由w3schools布置页面的语义元素](https://www.w3schools.com/html/img_sem_elements.gif)

### 语义元素的好处

要了解语义元素的好处，这里有两段HTML代码。第一个代码块使用语义元素：
```
<header></header> 
 <section> 
    <article> 
        <figure> 
            <img> 
            <figcaption></figcaption> 
        </figure> 
    </article> 
 </section> 
 <footer></footer> 
```

虽然第二个代码块使用非语义元素：
```
<div id="header"></div> 
 <div class="section"> 
    <div class="article"> 
        <div class="figure"> 
            <img> 
            <div class="figcaption"></div> 
        </div> 
    </div> 
 </div> 
 <div id="footer"></div> 
```

首先，它更**容易阅读** 。这可能是您在使用语义元素查看第一个代码块时首先注意到的事情。这是一个小例子，但作为程序员，您可以阅读数百或数千行代码。阅读和理解代码越容易，就越容易实现。

它具有**更大的可访问性** 。您不是唯一一个发现语义元素更容易理解的人。搜索引擎和辅助技术（如视力障碍用户的屏幕阅读器）也能够更好地了解您网站的背景和内容，这意味着您的用户可以获得更好的体验。

总的来说，语义元素也会导致更**一致的代码** 。使用非语义元素创建标题时，不同的程序员可能会将其写为`<div class="header">` ， `<div id="header">` ， `<div class="head">`或简单地`<div>` 。您可以通过多种方式创建标题元素，它们都取决于程序员的个人偏好。通过创建标准语义元素，它使每个人都更容易。

自2014年10月起，HTML4升级为HTML5，以及一些新的“语义”元素。直到今天，我们中的一些人可能仍然对为什么这么多不同的元素似乎没有任何重大变化感到困惑。

#### `&#60;section&#62;`和`&#60;article&#62;`

“有什么区别？”，你可能会问。这两个元素都用于分割内容，是的，它们绝对可以互换使用。这是在哪种情况下的问题。 HTML4只提供了一种类型的容器元素，即`&#60;div&#62;` 。虽然这仍然在HTML5中使用，但HTML5为我们提供了`&#60;section&#62;`和`&#60;article&#62;`以某种方式取代`&#60;div&#62;` 。

`&#60;section&#62;`和`&#60;article&#62;`元素在概念上是相似的和可互换的。要确定您应选择哪一项，请注意以下事项：

1.  文章旨在可独立分发或重复使用。
2.  一节是内容的主题分组。

```html

<section> 
  <p>Top Stories</p> 
  <section> 
    <p>News</p> 
    <article>Story 1</article> 
    <article>Story 2</article> 
    <article>Story 3</article> 
  </section> 
  <section> 
    <p>Sport</p> 
    <article>Story 1</article> 
    <article>Story 2</article> 
    <article>Story 3</article> 
  </section> 
 </section> 
```

#### `&#60;header&#62;`和`&#60;hgroup&#62;`

`&#60;header&#62;`元素通常位于文档，部分或文章的顶部，通常包含主标题和一些导航和搜索工具。

```html

<header> 
  <h1>Company A</h1> 
  <ul> 
    <li><a href="/home">Home</a></li> 
    <li><a href="/about">About</a></li> 
    <li><a href="/contact">Contact us</a></li> 
  </ul> 
  <form target="/search"> 
    <input name="q" type="search" /> 
    <input type="submit" /> 
  </form> 
 </header> 
```

`&#60;hgroup&#62;`如果您希望主标题包含一个或多个子标题，则应使用该元素。

```html

<hgroup> 
  <h1>Heading 1</h1> 
  <h2>Subheading 1</h2> 
  <h2>Subheading 2</h2> 
 </hgroup> 
```

记住， `&#60;header&#62;` element可以包含任何内容，但是`&#60;hgroup&#62;` element只能包含其他标题，即`&#60;h1&#62;`到`&#60;h6&#62;`并包括`&#60;hgroup&#62;` 。

#### `&#60;aside&#62;`

`&#60;aside&#62;` element适用于不属于其出现的文本流的一部分的内容，但仍以某种方式相关。这个`&#60;aside&#62;`作为主要内容的侧边栏。

```html

<aside> 
  <p>This is a sidebar, for example a terminology definition or a short background to a historical figure.</p> 
 </aside> 
```

在HTML5之前，我们的菜单是用`&#60;ul&#62;`创建的`&#60;ul&#62;`的和`&#60;li&#62;`的。现在，与这些一起，我们可以将菜单项与`&#60;nav&#62;` ，用于在您的页面之间导航。你可以拥有任意数量的`&#60;nav&#62;`例如，页面上的元素，通常在顶部（在`&#60;header&#62;` ）和侧边栏中的本地导航（在`&#60;aside&#62;`元素中）进行全局导航。

```html

<nav> 
  <ul> 
    <li><a href="/home">Home</a></li> 
    <li><a href="/about">About</a></li> 
    <li><a href="/contact">Contact us</a></li> 
  </ul> 
 </nav> 
```

#### `&#60;footer&#62;`

如果有一个`&#60;header&#62;`必须有一个`&#60;footer&#62;` 。 A `&#60;footer&#62;`通常位于文档，部分或文章的底部。就像`&#60;header&#62;`内容通常是元信息，例如作者详细信息，法律信息和/或相关信息的链接。包含`&#60;section&#62;`也是有效的`&#60;section&#62;`页脚内的元素。

```html

<footer>&copy;Company A</footer> 
```

#### `&#60;small&#62;`

`&#60;small&#62;`元素经常出现在一个`&#60;footer&#62;`或者`&#60;aside&#62;`通常包含版权信息或法律免责声明的元素，以及其他此类细则。但是，这并不是为了使文本更小。它只是描述其内容，而不是处方表述。

```html

<footer><small>&copy;Company A</small> Date</footer> 
```

#### `&#60;time&#62;`

`&#60;time&#62;` element允许将明确的ISO 8601日期附加到该日期的人类可读版本。

```html

<time datetime="2017-10-31T11:21:00+02:00">Tuesday, 31 October 2017</time> 
```

为什么要打扰`&#60;time&#62;` ？虽然人类可以通过正常方式读取可以通过上下文消除歧义的时间，但计算机可以读取ISO 8601日期并查看日期，时间和时区。

#### `&#60;figure&#62;`和`&#60;figcaption&#62;`

`&#60;figure&#62;`用于包装图像内容，以及`&#60;figcaption&#62;`是为你的形象加上标题。

```html

<figure> 
  <img src="https://en.wikipedia.org/wiki/File:Shadow_of_Mordor_cover_art.jpg" alt="Shadow of Mordor" /> 
  <figcaption>Cover art for Middle-earth: Shadow of Mordor</figcaption> 
 </figure> 
```

### 了解有关新HTML5元素的更多信息：

*   [w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp)提供了许多新闻元素的简单明了的描述以及它们应该如何/在何处使用。
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)还为所有HTML元素提供了很好的参考，并深入研究每个元素。