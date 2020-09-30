# 如何帮助应对视频挑战

视频挑战是免费CodeCamp课程中一种新型挑战。

视频挑战是关于某一特定主题的长篇视频课程的一小部分。 视频挑战页面包含YouTube视频。 每个挑战页面都有一个与视频相关的多项选择问题。 在课程中继续下一个视频挑战之前，用户必须正确回答这个问题。

视频挑战页面是由免费CodeCamp团队成员创建的。 YouTube视频也由免费CodeCamp团队成员上传。 许多视频挑战还没有与此相关的问题。

您可以通过创建与视频部分相关的多个选择问题以及为视频挑战将问题添加到Markdown文件中来提供帮助。


## 挑战模板

下面是挑战Markdown 文件的模板。

````md
---
id: 唯一标识符 (字母数字, MongoDB_id
title: Challenge Title
challengeType: 11
video Id: 'YouTube video Id for video challenge'
--

## 描述

<section id='description'>
可选描述，带有与视频有关的有用信息。
</section>

## 测试

<section id='tests'>

```yml
问题:
  text: 'Question'
  答案:
    - '答案 On'
    - '答案两'
    - '答案三'
  解决方法: 3
````

</section>
````

## 为视频挑战创建问题

### 访问视频挑战Markdown 文件

您可以在以下课程中找到视频挑战的 markdown 文件：

- [与Python Course的数据分析](https://github)。 om/freeCodeCamp/freeCodeCamp/tree/master/courum/challenges/english/08/data-analysis-with-Python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github)。 om/freeCodeCamp/freeCodeCamp/tree/master/curcourum/challenges/english/11-mechanise-learning-with-python/tensorflow)
- [数字课程](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/courum/challenges/english/08-data-analysis-with-python/numpy)
- [如何神经网络工作课程](https://github.com/freeCodeCamp/tree/master/courum/challenges/english/ 111-mechande-learning-with-python/how -neural-networks-work)

从上述选项

### Skim through the video associated with the challenge and create a mutiple option question

First, seek the video Id.

例如，在视频挑战标记文件页眉的下面代码中，视频Id 是“nVAaxZ34khk”。 关于GitHub，信息应以表格格式排列。
````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis 示例A challengeType: 11
videoId: nVAaxZ34khk
---
```

接下来，使用该视频ID访问YouTube视频。 视频的 url 将是：
https://www.youtube om/watch?v=[videoId]    (将视频Id 添加到没有方括号的URL)

在上面的例子中，网址是 https://www。 outube.com/watch?v=nVAaxZ34khk

用该视频Id Skim YouTube视频，并想到一个基于视频内容的多个选择问题。

### 添加问题到Markdown文件

您可以在本地或直接通过 GitHub 接口添加问题。 要在本地添加问题，您需要[本地设置免费CodeCamp](howto setup-freecodecamp-locally.md)。 您也可以在 GitHub 上找到文件，然后点击编辑按钮在您的浏览器中添加问题。

如果一个问题尚未添加到某个视频挑战中， 它将有以下默认问题:

```yml
问题:
  文本: |
    问题
  答案:
    - |
      一个
    - |
      两个
    - |
      三个
  解决方法: 3
```

用你的问题更新“问题”一词。 用可能的答案更新“一个”、“两个”和“三个”。 请务必更新答案正确的解决方案号。 您可以使用相同的格式添加更多可能的答案。 问题和答案可以用引号包围。

#### 使用 Markdown 格式化您的问题

问题中的文本被解析为Markdown。 确保正确格式化的最简单方式是用 `文本开始提问：|`如这样：

```yml
问题:
  文本: |
    问题
```

然后您需要确保您的问题在新的行上，并且缩进了一个级别超过 `文本：|`。

同样的方法可以用来回答整个问题。

```yml
问题:
  文本: |
    问题
  答案:
  - |
    第一个答案
  - |
    第二个
  - |
    第三个
  解决方案: 2
```

请确保每个答案都是合理的，但只有一个正确的答案。

#### 使用 HTML

问题和答案可以包含某些HTML标签，如 `<br>` 作为新行。 当问题无法在没有它们的情况下表达时，应该少量使用HTML标记。

### 提问示例

#### 没有HTML的示例

````yml
问题:
  文本: |
    此 JavaScript 代码日志到控制台是什么？
    ```js
    console.log('hello world');
    ````


    选择答案！
  回答：
    - | 你好 *世界*
    - | **你好** 世界
    - | 你好世界 解决方案: 3
````

``yml
问题:
  text: |
    运行此代码后打印出来的内容:
    ```py
    宽度 = 15
    高度 = 12。
    打印(height/3)
    ````
  回答：
    - | 39
    - | 4
    - | 4.0
    - | 5.0
    - | 5 解决方案: 3
````

#### HTML

```yml
问题的示例：
  text：|
    运行此代码后会打印什么：
    <pre><code>宽度= 15<br>高度 = 12。<br>打印(height/3)<code></pre>
  答案：
    - |
      39
    - |
      4 - |
    - |
      4
    - |
      5.
    - |
      5
  解决方法: 3
````

最后一个例子表明，HTML可以使用，但它不能像没有它的版本那样可读。

更多的示例，您可以查看下一个视频课程的 markdown 文件。 所有挑战都已经有问题： [Python适用于每个人课程](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## 打开拉取请求

在创建一个或多个问题后，您可以将更改提交给一个新分支并 [打开一个拉取请求](how-to-open-a-pull-request.md)。
