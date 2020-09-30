# 如何处理编码挑战

我们的目标是发展一个有趣和明确的互动学习体验。

设计互动式编码挑战是困难的。 编写长篇解释或创建视频教程要容易得多， 还有中型和YouTube上的人。 然而，就我们的核心课程而言，我们坚持的是对大多数人来说最有效的东西――一种完全交互式的视频游戏经验。

我们想要骆驼达到流量状态。 我们希望他们尽可能少地利用我们的课程来建立势头和爆炸。 我们希望他们充满信心地参加这些项目，并广泛接触到方案拟订概念。

创造这些挑战需要极大的创造性和对细节的关注。 有大量的帮助。 你将得到整个贡献者团队的支持，你可以反弹和展示你的挑战。 保持在 [贡献者房间](https://gitter.im/freecodecamp/contributors) 中活动并提问大量问题。

在你的帮助下，我们可以设计一个交互式编码课程，帮助数以百万计的人学习如何编程。

每个挑战的内容都存储在自己的Markdown文件中。 这个Markdown 文件后来被转换为 HTML ，使用我们的工具来创建交互式的网页。

您可以在 [`/courum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges) 目录中找到所有免费CodeCodeCodeCamp.org的课程内容。

## 设置课程的配刀工具

在您完成课程之前，您需要设置一些工具来帮助您测试您的更改。 您可以使用下面的任何选项：

- 您可以 [在本地建立免费CodeCamp](how-to-setup-freecodecamp-locally.md)。 对于经常/重复捐款来说，这是 **个强烈推荐的** 个。 此设置允许您工作并测试您的更改。
- 使用 Gitpod，免费在线开发环境。 点击下面的按钮将在您的浏览器中为免费CodeCodeCamp启动一个现成的开发环境。 这只需要几分钟。

  [![在 Gitpod 中打开](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- 点击相应文件的铅笔图标编辑GitHub 界面上的文件。 虽然这是最快的方式，但不推荐 ****，因为您无法测试您在 GitHub 上的更改。 如果我们的维护者认为您所做的更改需要在本地测试，您将需要再次遵循以上方法。

## 挑战模板

下面是挑战Markdown 文件当前看起来的模板。  To see the streamlined template we will be adopting see [below](#upcoming-challenge-template).

````md
---
id: 唯一标识符 (字母数字, MongoDB_id
title: Challenge Title
challengeType: 0
videoUrl: 'url of video explanation'
-

#description

<section id='description'>
The description of the challenge and what is required to passe
</section>

## Instructions

<section id='instructions'>
instructions on the corresponding what is needs.
</section>

## 测试

<section id='tests'>

```yml
测试：
  - 文本：应该返回 "foo"
    测试字符串：'一个严格的函数可能使用Chai断言'
````

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='{ext}-seed'>

默认情况下在编辑器中显示的 ```{ext}
代码。

这是应对这一挑战的一个必要部分。
```

</div>

### Before Test

<div id='{ext}-setup' mark="crwd-mark">

```{ext}
可选的测试设置代码。
```

</div>

### After Test

<div id='{ext}-teardown'>

```{ext}
可选的测试拆解代码。
```

</div>

</section>

## Solution

<section id='solution'>

```{ext}
// solution 需要
```

</section>

````

> [!注意]
>
> 1。 在以上各节中，{ext}的例子是：
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2。 对于上面的 `Tests` 部分，`text` 和 `testString` 应该是有效的 YAML 字符串。 `testString`可以是一个严格的函数或表达式，可以使用 Chai断言。

## 挑战数量

每个挑战都需要一个 'id'。 如果您没有指定一个，则MongoDB将创建一个新的随机数据保存过程； 然而，我们不想这样做，因为我们希望挑战的标本在不同的环境中保持连贯一致(阶段性工作)， 生产，许多不同的开发者等。

若要在 shell 中生成一个新的 shell (假设MongoDB 是分开运行)：

1。 运行 `mongo` 命令。
2. 运行 `ObjectId()` 命令。

例如：

```bash
$ mongo
MongoDB shell 版本 v3.6.1
连接到: mongodb:127.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

结果是一个新的 id，例如上面 `a474d78df58bafeb3535d34`。

一旦你有您的 id，将它放入Markdown 文件作为顶部的 `id` 字段，例如：

```yml
---
id：5a474d78df58bafeb3535d34
标题：挑战标题
```

## 命名挑战

命名东西是很难的。 我们通过施加一些限制使它变得更加容易。

所有挑战标题都应该是明确的，应该遵循这种模式：

\[verb\]\[对象条款\]

这里有一些示例挑战名称：

- Use Clockwise Notation to Specify the Padding of an Element
- 带.reduce压缩数组
- Use Bracket Notation to Find the First Character in a String

## 挑战描述/说明

刑期应当简明扼要，只要使用最起码的术语。 如果使用这些术语，应立即用英文对术语加以界定。

保持段落简短(约1-4句)。 人们更可能阅读几个简短的段落，而不是一堵墙的文本。

挑战文本应该使用第二个人("你")来帮助给它一个话音。 这样，案文和指示似乎直接与面临挑战的骆驼骑手说话。 尝试避免使用第一个人("I", "we", "let", and "us").

不要使用出站链接。 这些会中断流程。 在这些挑战中，耕种者绝不应需要做任何事情。 如果有资源，你认为收藏家会从中受益，将它们添加到挑战相关的文章中。

如果绝对必要，您可以添加图表。

挑战中不使用表情或表情符号。 免费CodeCamp有一个全球社区，世界各地表情或表情的文化含义可能不同。 另外，Emoji可能会在不同的系统中以不同的方式呈现。

适当的封口在可能时应使用正确的大写。 下面是挑战中应该出现的一系列词语。

- JavaScript (大写字母"J" 和 "S" 且无缩略语)
- Node.js
- 前端开发(带有破折号的形状)是当您在前端工作时(无破折号的窗体)。 “后端”、“完整堆栈”和许多其他复合条款也是如此。

### 2分钟规则

每项挑战都应在120秒内由一位母语英语发言者来解决，他已经完成了迎接挑战的任务。 这包括阅读方向/说明理解种子代码所需的时间。 写他们自己的代码并获得所有测试通过。

如果完成挑战需要超过两分钟，您有两个选项：

- 简化挑战，或
- 将挑战分为两项挑战。

2分钟规则迫使你这个挑战设计师简洁、你的种子代码清晰、你的测试向前进行。

我们跟踪玩家需要多长时间来解决变化，并使用这种信息来确定需要简化或分割的挑战。

### 模块化

每一项挑战都应传授一种概念，这一概念应从挑战的名称中看出。

我们可以通过重复和变异来加强先前涵盖的概念――例如： 在一个挑战中提出h1元素，然后再提出3元素，然后提出几个挑战。

我们的目标是面临数千分钟的挑战。 这些问题可以一起出现，重申先前涵盖的概念。

### 格式化挑战文本

以下是质疑性案文和实例的具体格式准则：

- 语言关键字在 `<code>` 标签中。 例如，HTML 标签名称或 CSS 属性名称
- 定义关键字的第一个实例，或是一般关键词(例如"对象"或 "不可变") 在 `<dfn>` 标签
- 代码部件的引用(例如函数、方法或变量名称)应该用 `<code>` 标签包裹。 见下面的示例：
- 使用 <code>parseint</code> 将变量 <code>实数</code> 转换为整数。
- 多行代码块 **之前必须是空行**。 下一行必须以三个背杆开头，紧接着是 [支持的语言之一](https://prismjs.com/#supported-languages)。 要完成代码块，您必须开始一个仅有三个背面和 **另一个空行** 的换行符。 **注意：** 如果您要在 YAML 中使用示例代码 使用 `yaml` 而不是 `yml` 来查看右侧的语言。

见下面的示例：

````md
以下是代码的示例：

```{language}

[YOUR CODE HERE]

````
````

- 应格式化笔记形式的附加信息<strong>注意：</strong> 笔记文本...
- 如果需要多个笔记 然后使用格式`<strong>注：</strong> 首注文本，单独列出所有注释。 第二个注文。
- 在适用的情况下使用双引文

## 写作测试

挑战应该有最低数量的必要测试来验证骆驼是否理解一个概念。

我们的目标是传达挑战试图传授的唯一观点，并检验他们对这一点的理解。

挑战测试可以使用 Node.js 和 Chai.js 断言库。 此外，如有必要，用户生成的代码可以在 `code` 变量中访问。

## 格式化种子代码

这里是挑战种子代码的特定格式准则：

- 使用两个空格缩进
- JavaScript 语句结尾有分号
- 在适用的地方使用双引号
- 评论字符和评论本身之间应该有空格

  `// 修复此行`

## 提示和解决方案

每个挑战都有一个“获取提示” 按钮， 这样用户可以访问为挑战创建的任何提示/解决方案。 课程提示/解决方案主题位于`Guide`类别下[我们的论坛](https://forum.freecodecamp.org/c/guide)。

如果你发现一个现有挑战的提示/解决方案主题有问题，你可以在论坛上[贡献者类别](https://forum.freecodecamp.org/c/contributors) 提出建议。 信任等级3的版主和用户将审查评论意见，并决定是否列入相应的提示/解决办法专题。

### 添加新的挑战提示/解决方案主题

在添加新的挑战提示/解决方案主题时采取以下步骤。

1. 首先按照相同步骤创建一个新主题，但审查下一个步骤以创建标题。
2. 主题的标题应该从`freeCodeCamp挑战指南：`中包含课程挑战的实际标题开始。 例如，如果挑战被命名为“`Chunky Mankey`”，主题标题将是“`freeCodeCamp挑战指南：Chunky Mokey`”。
3. `camperbot`应该是这些主题/帖子的所有者。 所以你需要请求一个管理员来将主帖子的所有权更改为“camperbot”。
4. 一旦创建了新主题，论坛主题ID将被创建。 它位于论坛主题URL末尾。 必须通过通常的拉请求过程将此ID添加到课程挑战文件的前台，让“获取提示”按钮链接到主题中。

### 提示和解决方案主题内容指南

为课程挑战相关指南主题提出解决方案时 必须添加完整的代码。 这包括所有原始种子代码以及通过所有挑战测试所需的任何更改。 创建新的提示/解决方案主题时应使用以下模板：

``md
# 挑战名称进入这里

-

## 问题解释

这概述了需要做些什么，而不只是重置挑战说明和/或说明。 这是一个可选的章节

#### 相关链接

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## 提示

### # 提示1

提示在此处

### Hint 2

提示在这里

-

## 解决方案

<details><summary>Svolution 1 (click to Show/Hide)</summary>

```js
function my(
  console. og('Hello World!');
}
````

#### 代码解释

- 代码解释在此处
- 代码解释在此处

#### 相关链接

- [链接文本](link_url_goes_here)
- [链接文本](link_url_goes_here)

</details>
````

## 测试挑战

在您之前[创建拉取请求](how-open-a pull-request)。 d) 对于您的更改，您需要确认您所做的更改不会无意中造成挑战问题。 

1. 要测试所有挑战，请从根目录运行下面的命令

````
npm 运行测试：课程
``` 

2. 您也可以通过这些命令测试一个块或一个超级挑战块

```
npm 运行测试:course --block='Basic HTML 和 HTML5'
```

```
npm 运行 test:course --superblock=responsible web-design
```

您也可以通过执行以下步骤来测试一个挑战：

1。 切换到“课程”目录：

   ```
   cd 课程
   ```

2. 对您更改过的每个挑战文件运行以下：

   ```
   npm 运行测试-- -g '挑战的完整英文标题'
   ```

一旦您验证了每一个挑战通过测试，[请创建一个拉取请求](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/howto opena-pull-request.md)。

> [!提示]
> 你可以将 `.env` 中的环境变量`LOCALE` 设置为你需要测试的挑战语言。
> 
> 当前接受的值是 'english' 和 '中文, 默认设置为 'english' 。

## 即将到来的挑战模板

正在更新到更清洁、更少嵌套结构的挑战模板。  这还没有完全完成，但以下内容应该接近最终结构：

``mdx

---
id：唯一的标识符(字母和数字, MongoDB_id
标题: '挑战标题'
challengeType: Integer, defined in "client/utils/challengeType s`
videoUrl: 'url of video explanation'
forumTopicId: 12345
-

import Script from './script dx';

## --step-description--

文字描述，Markdown

```html
<div> 
  示例代码
</div>
```

## --step-hints--

![test-id-1]

将会有任意数量的 id、 说明 (Markdown) 和代码块。

```js
测试代码
```

![test-id-2]

Markdown 语法中的更多说明

```js
更多代码
```

## --step-seed--

### --before-user-code--

```lang
在用户之前评价过的代码
```

### --后用户代码--

```lang
在用户完成后和测试前评估的代码
```

### --seed-content--

![index-html]

```html
部分html
```

```css
一些css
```

```js
一些js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solution-marker--
</h1>



<p spaces-before="0">
  与种子部分完全相同
</p>

<h2 spaces-before="0">
  --next 解决-标记
</h2>



<p spaces-before="0">
  再次相同
</p>

<h1 spaces-before="0">
  --question-marker--
</h1>

<h2 spaces-before="0">
  --text-marker--
</h2>



<p spaces-before="0">
  问题在此处(仅用于视频挑战)
</p>

<h2 spaces-before="0">
  --ansters-marker--
</h2>



<p spaces-before="0">
  答案 1
</p>

<hr />

<p spaces-before="0">
  答案 2
</p>

<hr />

<p spaces-before="0">
  更多答案
</p>

<h2 spaces-before="0">
  --solution-marker--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  有用的链接
</h3>



<p spaces-before="0">
  创建和编辑挑战：
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">挑战类型</a> - 数字挑战类型值是什么(枚举)。
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">为FreeCodeCamp - 写入 ES6 挑战测试</a> - 一个视频跟随 <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> ，因为他为旧版课程做出了贡献。
    </p>
  </li>

</ol>
