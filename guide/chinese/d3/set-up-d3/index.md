---
title: Set Up D3
localeTitle: 设置D3
---
## HTML设置

现在，您只需使用文本文件和Web浏览器。您将从HTML的静态页面开始。然后你将添加d3.js. 创建名为d3js _projects_的文件夹_。在名为project_ 1.html _的文件夹中创建一个HTML文件_ 。

从基本的HTML网页开始：

```html

<!DOCTYPE html> 
 <html> 
  <head> 
  </head> 
  <body> 
    <p>Hello!</p> 
  </body> 
 </html> 
```

它显示在浏览器中：

![](https://d1gg5jm9r4jrt6.cloudfront.net/project_1_browser_snapshot_600x198.png)

### D3.js设置

要获取主要的D3.js JavaScript文件，请转到D3.js网站。在页面上的第一段后，您将看到一个包含最新版本链接的部分。下载最新版本d3.v2.min.js.将此文件保存在d3js\_projects文件夹中。

文件d3.v2.min.js与HTML文件保存在同一文件夹中，因此可以轻松引用它。我们从HTML文件的头部引用JavaScript文件。我们更新的HTML文件现在如下所示：

`html <!DOCTYPE html> <html> <head> <script type="text/javascript" src="d3.v2.min.js"></script> </head> <body> <p>Hello!</p> </body> </html>`

源文件设置测试

为了测试我们的D3.js设置，我们打开了inspect元素工具包。在Webkit Inspector的Element选项卡中，我们打开所有元素，以便我们可以看到整个HTML结构。然后我们将鼠标悬停在d3.vs.min.js src上。

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

当我们点击链接时，它会将我们带到“源”选项卡。这将显示D3.js缩小的代码。

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.source.check.png)

\### JavaScript控制台设置测试

最后一次测试将在JavaScript控制台中进行。此测试告诉我们D3.js是否正确加载以供我们在JavaScript控制台中使用。 在此快照中，找到Webkit检查器中的“控制台”选项卡：

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

当您单击选项卡时，它将显示一个空白屏幕，您可以在其中键入和评估JavaScript。

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Console_600x170.png)

在JavaScript控制台中，键入以下内容：

`javascript alert("hello");`

这将导致弹出警报弹出并说“你好！”。这就是它的样子：

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Consoler_Alert_600x335.png)

现在测试D3.js是否正确加载。在控制台中键入小写“d3”，后跟句点：

`javascript d3`

如果我们正确安装了D3.js，则应显示以下内容：

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.javascript.console_300x420.png)

如果所有测试都通过并且您能够正确加载D3.js，那么您就可以开始了。

＃＃＃＃ 更多信息