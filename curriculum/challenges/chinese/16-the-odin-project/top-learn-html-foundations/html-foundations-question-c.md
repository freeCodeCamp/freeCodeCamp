---
id: 637f4e1c72c65bc8e73dfe20
title: HTML Foundations Question C
challengeType: 15
dashedName: html-foundations-question-c
---

# --description--

要演示一个 HTML 模板，你首先需要一个 HTML 文件用于操作。

在你的计算机上创建一个新文件夹，并命名它为 `html-boilerplate`。 在该文件夹中创建一个新文件，命名为 `index.html`。

你可能已经熟悉了许多不同类型的文件，例如文档、pdf 和图像文件。

要让计算机知道你想要创建一个 HTML 文件，你需要在文件名添加后缀 `.html`，如你在创建 `index.html` 文件时所做的那样。

值得注意的是，你命名了你的 HTML 文件索引。 你应该总是将包含你的网站主页的 HTML 文件命名为 `index.html`。 This is because web servers will by default look for an `index.html` page when users land on your websites - and not having one will cause big problems.

## DOCTYPE

每个 HTML 页面都以文档类型声明开始。 文档类型的目的是告诉浏览器它应该使用什么版本的 HTML 来渲染文档。 最新版本的 HTML 是 HTML5，该版本的文档类型是 `<!DOCTYPE html>`。

旧版本的 HTML 文档类型比较复杂。 例如：HTML4 的文档类型声明是

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

然而，你可能不会想要使用旧版本的 HTML，因此你会总是使用 `<!DOCTYPE html>`。

打开你的文本编辑器早些时候创建的 `index.html` 文件，并将 `<!DOCTYPE html>` 添加到第一行。

# --question--
## --text--

`DOCTYPE` 声明的目的是什么？

## --answers--

它告诉浏览器使用哪个版本的 HTML 来渲染文档。

---

它告诉浏览器此文档使用 JavaScript。

---

它告诉浏览器文档的标题。


## --video-solution--

1
