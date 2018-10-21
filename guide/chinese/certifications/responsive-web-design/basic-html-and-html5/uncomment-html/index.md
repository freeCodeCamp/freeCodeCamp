---
title: Uncomment HTML
localeTitle: 取消注释HTML
---
## 取消注释HTML

评论主题在开始时通常有点令人困惑。 看看这个例子：
```
<!-- This is a commented block. 
 It doesn't matter how long it is, if it has <h1>HTML elements</h1> in it or if it develops 
 into 
 few lines, 
 everything between the first weird series of character and the last is commented out --> 
```

你也可以在线使用评论： `<!-- Uh, I does not exists! -->`在这里！

唯一要考虑的是，当你看到这组char `<!--`从那里看到的所有东西都被注释掉了，因为你找到了镜面反射`-->` ;这些是HTML元素的开始和结束标记！

##### 取消注释

取消注释意味着从注释文本中取出：取消注释后面句子的h3元素（全部注释掉）：
```
<!-- <h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> --> 
```

就像这样简单：
```
<!-- <h1>Comment header</h1> --> <h3>Comment subtle</h3> <!-- <article>I am the text of the comment</article> --> 
```

注意如何在h3 HTML元素之前添加一个结束注释标记（ `-->` ）以匹配句子开头的开始注释标记，并在它之后添加一个开始注释标记（ `<!--` ）以匹配结束最后的标签：这样你就创建了两个内联注释，一个在h3元素之前，一个在！之后。

如果你想取消注释一切都更容易：
```
<h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> 
```

只需删除评论的开始和结束标记即可。