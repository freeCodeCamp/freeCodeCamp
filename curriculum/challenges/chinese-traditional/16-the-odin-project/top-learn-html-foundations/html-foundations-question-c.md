---
id: 637f4e1c72c65bc8e73dfe20
title: HTML Foundations Question C
challengeType: 15
dashedName: html-foundations-question-c
---

# --description--

要演示一個 HTML 模板，你首先需要一個 HTML 文件用於操作。

在你的計算機上創建一個新文件夾，並命名它爲 `html-boilerplate`。 在該文件夾中創建一個新文件，命名爲 `index.html`。

你可能已經熟悉了許多不同類型的文件，例如文檔、pdf 和圖像文件。

要讓計算機知道你想要創建一個 HTML 文件，你需要在文件名添加後綴 `.html`，如你在創建 `index.html` 文件時所做的那樣。

值得注意的是，你命名了你的 HTML 文件索引。 你應該總是將包含你的網站主頁的 HTML 文件命名爲 `index.html`。 This is because web servers will by default look for an `index.html` page when users land on your websites - and not having one will cause big problems.

## DOCTYPE

每個 HTML 頁面都以文檔類型聲明開始。 文檔類型的目的是告訴瀏覽器它應該使用什麼版本的 HTML 來渲染文檔。 最新版本的 HTML 是 HTML5，該版本的文檔類型是 `<!DOCTYPE html>`。

舊版本的 HTML 文檔類型比較複雜。 例如：HTML4 的文檔類型聲明是

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

然而，你可能不會想要使用舊版本的 HTML，因此你會總是使用 `<!DOCTYPE html>`。

打開你的文本編輯器早些時候創建的 `index.html` 文件，並將 `<!DOCTYPE html>` 添加到第一行。

# --question--
## --text--

`DOCTYPE` 聲明的目的是什麼？

## --answers--

它告訴瀏覽器使用哪個版本的 HTML 來渲染文檔。

---

它告訴瀏覽器此文檔使用 JavaScript。

---

它告訴瀏覽器文檔的標題。


## --video-solution--

1
