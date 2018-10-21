# 如何编辑编程挑战

### 在GitHub上更改

每个挑战都存储在独立的markdown文件中。这使得您能都方便地在GitHub上直接编辑挑战。

您无需在本地系统上进行任何操作就可以编辑和修改挑战。

在GitHub界面中找到要修改的文件后，单击铅笔图标开始编辑文件。这将会在您的repository下自动创建项目的分支（如果之前没有该项目分支的话）。

您还可以克隆项目并在本地计算机上进行编辑。如需帮助，请阅读[贡献指南](/CONTRIBUTING.md)。

### 挑战模板

这是编程挑战的模板(markdown格式)。

````MD
---
id：唯一标识符（alphanumerical，MongoDB _id）
title：编程挑战的标题
challengeType：0
guideUrl：'该编程挑战指南的网址'
videoUrl：'讲解视频的网址'
---

## 问题描述
<section id ='description'>
描述该编程挑战并说明通过挑战的要求
</section>

## 说明
<section id ='instructions'>
说明究竟需要做什么。
</section>
## 测试
<section id ='tests'>

```yml
- text：应当返回“foo”。
  testString：'使用Chai断言的字符串化函数'
```

</section>

<div id='js-seed'>

```JS
默认显示在编辑器中的代码。
```

</div>

### 测试前
<div id ='js-setup'>

```JS
测试配置代码（setup）。
```

</div>

</section>

### 测试完成
<div id ='js-teardown'>

```JS
测试完成后执行的代码（tear down）。
```

</div>

</section>

## 答案
<section id ='solution'>

```JS
答案代码
```

</section>
````

### 有用的链接

创建和编辑挑战：

1. [挑战风格指南](style-guide-for-curriculum-challenges.md) - 如何创建挑战并正确编排

2. [挑战类型](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - 挑战类型（数字id）的数值所对应的含义（枚举）。

3. [贡献FreeCodeCamp - 编写ES6挑战测试](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - [Ethan Arrowood](https://twitter.com/ArrowoodTech)编辑旧版课程过程的录像，展示了如何创建和编辑挑战
