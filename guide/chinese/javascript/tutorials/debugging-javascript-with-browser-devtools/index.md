---
title: Debugging JavaScript with Browser Devtools
localeTitle: 使用浏览器Devtools调试JavaScript
---
作为开发人员，您经常需要调试代码。您可能已经在一些挑战中使用了`console.log` ，这是最简单的调试方法。

在本文中，我们将告诉您一些最酷的技巧，使用浏览器的本机调试工具进行调试。

## 简要了解FreeCodeCamp代码编辑器：

在进入调试之前，让我们泄漏一些有关FCC _真棒代码检查引擎的_秘密事实。

我们使用自定义的[CodeMirror](http://codemirror.net/mode/javascript/index.html)作为代码编辑器。 [`eval()`函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)用于评估编辑器中表示为字符串的JavaScript代码。调用`eval()` ，浏览器将本机执行您的代码。我们将在本文后面的部分中了解更多为什么这个秘密很重要。

## 现在转向技巧：

## 谷歌Chrome DevTools

谷歌浏览器是最流行的浏览器之一，内置JavaScript引擎[V8](https://developers.google.com/v8/) ，为开发人员提供了一个很棒的工具集，名为[Chrome DevTools](https://developer.chrome.com/devtools) 。强烈建议您访问他们的[完整JavaScript调试指南](https://developer.chrome.com/devtools/docs/javascript-debugging) 。

### 1：DevTools的基础知识

#### 启动Chrome DevTools

点击`F12`

。或者你可以按

`Ctrl` + `Shift` + `I`

在Windows和Linux或

`Cmd` + `Shift` + `I`

在Mac上，或者如果您只是喜欢鼠标，请转到`Menu > More Tools > Developer Tools` 。

#### 了解`Sources`和`console`选项卡。

在调试时，这两个选项卡可能是您最好的朋友。 “ `Sources`选项卡可用于显示您正在访问的网页上的所有脚本。此选项卡包含代码窗口，文件树，调用堆栈和监视窗口等部分。

`console`选项卡是所有日志输出的位置。此外，您可以使用控制台选项卡的提示来执行JavaScript代码。它类似于Windows上的命令提示符或Linux上的终端。

_提示：使用`Esc`键随时在DevTools中切换控制台。_

### 2：常用快捷方式和功能

虽然您可以访问[完整的快捷方式列表](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts) ，但以下是一些最常用[的快捷方式](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts) ：

功能Windows，Linux Mac  
搜索关键字，支持正则表达式。 `Ctrl` + `F``Cmd` + `F`  
搜索并打开文件`Ctrl` + `P``Cmd` + `P`  
跳转到`Ctrl` + `G` +行`:line_no``Cmd` + `G` + `:line_no`  
添加断点`Ctrl` + `B` ，或单击行号。 `Cmd` + `B` ，或点击第no行。  
暂停/恢复脚本执行`F8` `F8`  
跳过下一个函数调用`F10` `F10`  
进入下一个函数调用`F11` `F11`

### 3：为我们的代码使用源映射

您最喜欢的功能之一是通过[源映射](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps) [动态调试动态脚本](https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-dynamic-javascript) 。

每个脚本都可以在DevTools的Source选项卡中可视化。源选项卡包含所有JavaScript源文件。但代码编辑器中的代码通过`eval()`在浏览器进程中简称为虚拟机（VM）的容器中执行。

您可能已经猜到，我们的代码实际上是一个没有文件名的脚本。所以我们在Source选项卡中没有看到。

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 "：闪耀：") **_黑客来了！_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 "：闪耀：")

我们必须利用`Source Maps`从编辑器中为JavaScript指定一个名称。它非常简单：

让我们说我们正在使用[Factorialize](https://www.freecodecamp.com/challenges/factorialize-a-number)挑战，我们的代码如下所示：
```
function factorialize(num) { 
  if(num <= 1){ 
  ... 
 } 
 factorialize(5); 
```

我们需要做的就是将`//# sourceURL=factorialize.js`添加到代码的顶部，即第一行：
```
//# sourceURL=factorialize.js 
 
 function factorialize(num) { 
  if(num <= 1){ 
  ... 
```

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 "：闪耀：") **_而尤里卡就是这样！_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 "：闪耀：")

现在打开DevTools并搜索文件名。添加断点，调试远离并享受！