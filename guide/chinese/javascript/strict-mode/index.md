---
title: Strict Mode
localeTitle: 严格的模式
---
ECMAScript 5中引入了严格模式，允许您在“严格”的操作环境中放置程序或函数。这种严格的上下文阻止了某些操作被采取并引发更多异常。

严格模式对常规JavaScript语义进行了一些更改。

*   首先，严格模式通过更改它们以抛出错误来消除一些JavaScript无声错误。
*   其次，严格模式修复了使JavaScript引擎难以执行优化的错误：严格模式代码有时可以比非严格模式的相同代码运行得更快。
*   第三，严格模式禁止在ECMAScript的未来版本中可能定义的某些语法。

严格模式代码和非严格模式代码可以在同一个脚本中共存。

```javascript
// Non-strict code... 
 
 (function(){ 
    "use strict"; 
 
    // Define your library strictly... 
 })(); 
 
 // Non-strict code... 
```

## 调用严格模式

严格模式适用于_整个脚本_或_单个功能_ 。

**脚本的严格模式**

```javascript
// Whole-script strict mode syntax 
 
 "use strict"; 
 var v = "Hi!  I'm a strict mode script!"; 
```

**严格的功能模式**

```javascript
function strict(){ 
    // Function-level strict mode syntax 
 
    'use strict'; 
    function nested() { return "And so am I!"; } 
    return "Hi!  I'm a strict mode function!  " + nested(); 
 } 
 
 function notStrict() { return "I'm not strict."; } 
```

**基本上它可以通过检测可能导致破损的事情（通常是非严格模式）来帮助您减少错误。**

_有关更多信息，请查看此[MDN页面](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode) 。_