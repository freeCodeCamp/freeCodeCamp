---
id: 587d7b8c367417b2b2512b57
challengeType: 1
forumTopicId: 301210
title: 用 * 从文件中导入所有内容
---

## Description
<section id='description'>
我们还可以用<code>import</code>语法从文件中导入所有的内容。下面是一个从同目录下的<code>"math_functions"</code>文件中导入所有内容的例子：

```js
import * as myMathModule from "./math_functions.js";
```

上面的 <code>import</code> 语句会创建一个叫做 <code>myMathModule</code> 的对象。这只是一个变量名，可以随便命名。对象包含 <code>math_functions.js</code> 文件里的所有导出，可以像访问对象的属性那样访问里面的函数。下面是使用导入的 <code>add</code> 和 <code>subtract</code> 函数的例子：

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

</section>

## Instructions
<section id='instructions'>
下面的代码需要从同目录下的<code>"string_functions"</code>文件中导入所有内容。使用提供的对象，在当前文件的顶部添加正确的<code>import *</code>语句
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 正确使用<code>import * as</code>语法。
    testString: assert(code.match(/import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js

// add code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

</div>
</section>

## Solution
<section id='solution'>

```js
import * as stringFunctions from "./string_functions.js";
// add code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

</section>
