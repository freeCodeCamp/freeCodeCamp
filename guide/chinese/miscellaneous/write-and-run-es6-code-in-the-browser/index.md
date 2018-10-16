---
title: Write and Run Es6 Code in the Browser
localeTitle: 在浏览器中编写并运行Es6代码
---
> 在页面中包含以下代码。
```
<!-- Write these first. Here `bootstrap.js` doesn't mean Twitter Bootstrap. --> 
 <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script> 
 <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script> 
 
 <!-- Edit the src. Write `type="module"` (important) for linked script --> 
 <script src="app.js" type="module"></script> 
 
 <!-- Remember to write `type="module"` for embedded script --> 
 <script type="module"> 
    //→ write your script here 
 </script> 
```

**请参阅：** [Traceur编译器入门](https://github.com/google/traceur-compiler/wiki/Getting-Started)

**演示：** [ES6 Demo Repo Source](https://github.com/abhisekp/JS-Weird-Parts/tree/109ab3b0c94d1fbf9bbc402dd36e9bca60d5b456)