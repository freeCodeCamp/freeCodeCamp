<table>
    <tr>
        <!-- Do not translate this table -->
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربي </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

＃如何处理编码挑战

###在GitHub上更改

每个挑战都存储在自己的降价文件中。这使得从GitHub中编辑挑战变得容易。

您无需在本地系统上运行任何操作即可进行更改。

在GitHub界面中找到要修改的文件后，单击铅笔图标开始编辑文件。这将自动创建项目的分支，如果您还没有。

您还可以克隆项目并在计算机上进行本地编辑。如需帮助，请阅读主要[贡献指南]（/ CONTRIBUTING.md）。

###挑战模板

这是挑战markdown文件的模板。

````MD
---
id：唯一标识符（alphanumerical，MongoDB _id）
标题：挑战标题
challengeType：0
guideUrl：'引导文章的网址'
videoUrl：'视频解释的网址'
---

##说明
<section id ='description'>
挑战的描述以及通过的要求
</节>

##说明
<section id ='说明'>
关于究竟需要做什么的说明。
</节>
##测试
<section id ='tests'>

```yml
 - 文字：应该返回“foo”。
  testString：'使用Chai断言的字符串化函数'
```

</节>

<div id ='js-seed'>

```JS
默认情况下，代码在编辑器中显示。
```

</ DIV>

###测试前
<div id ='js-setup'>

```JS
测试设置代码。
```

</div>

</节>

###经过测试
<div id ='js-teardown'>

```JS
测试拆解代码。
```

</ DIV>

</节>

##解决方案
<section id ='solution'>

```JS
挑战解决方案代码
```

</节>
````

###有用的链接

创建和编辑挑战：

1. [挑战风格指南]（style-guide-for-curriculum-challenges.md） - 如何创建和格式化挑战

2. [挑战类型]（https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js） - 数字挑战类型值的含义（枚举）。

3. [贡献FreeCodeCamp  - 编写ES6挑战测试]（https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s） - 视频[Ethan Arrowood]（https://twitter.com/ ArrowoodTech）因为他对旧版课程做出了贡献
