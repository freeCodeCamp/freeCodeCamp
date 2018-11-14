---
title: HTML5 Audio
localeTitle: HTML5音频
---
## HTML5音频

在HTML5之前，必须使用Adobe Flash等插件在浏览器中播放音频文件。 HTML

element用于在文档中嵌入声音内容。它可能包含一个或多个音频源，使用src属性或[source](source)元素表示

以下代码段添加了一个文件名为`tutorial.ogg`或`tutorial.mp3`的音频文件。该 element表示浏览器可以选择的备用音频文件。浏览器将使用第一种识别的格式。

#### 例1

```html

<audio controls> 
  <source src="tutorial.ogg" type="audio/ogg"> 
  <source src="tutorial.mp3" type="audio/mpeg"> 
 Your browser does not support the audio element. 
 </audio> 
```

#### 例2

```html

<audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" controls loop autoplay> 
 </audio> 
```

`controls`属性包括播放，暂停和音量等音频控件。如果您不使用此属性，则不会显示任何控件。

使用`<source>`元素可以指示浏览器可以选择的其他音频文件。浏览器将使用第一种识别格式。 `<audio>`和`</audio>`标记之间的文本可能会显示在不支持HTML5 `<audio>`元素的浏览器中。

autoplay属性将在后台自动播放您的音频文件。让访问者选择播放音频被认为是更好的做法。

preload属性指示如果播放器未设置为自动播放，浏览器应该执行的操作。

如果提到，loop属性将在连续循环中播放您的音频文件

由于这是html5，有些浏览器不支持它。您可以访问https://caniuse.com/#search=audio进行查看

#### 更多信息：

https://caniuse.com/#search=audio

https://www.w3schools.com/html/html5\_audio.asp

https://msdn.microsoft.com/en-us/library/gg589529(v=vs.85).aspx