---
title: Python from X Import Y
localeTitle: 来自X Import Y的Python
---
如果您已经阅读了`import statements` wiki，那么您已经看到我在其中一个示例中使用了此语句。今天，我们将尝试了解它的作用

所以拿起同样的例子：
```
>>> from math import ceil, sqrt 
 >>> # here it would be 
 >>> sqrt(36) 
 <<< 6 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CS5t/1)

或者我们可以使用这个：
```
>>> import math 
 >>> # here it would be 
 >>> math.sqrt(36) 
 <<< 6 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CS5u)

然后我们的代码看起来像`math.sqrt(x)`而不是`sqrt(x)` 。发生这种情况是因为当我们使用`import x` ，创建名称空间`x`本身就是为了避免名称冲突。您必须以`x.<name>`访问模块的每个对象。但是当我们使用`from x import y`我们同意将`y`添加到主全局命名空间。因此，在使用它时，我们必须确保在程序中没有具有相同名称的对象。

> **如果名为`y`的对象已存在，则永远不要使用`from x import y`**

例如，在`os`模块中有一个方法`open` 。但我们甚至有一个名为`open`的内置函数。所以，这里我们应该避免使用`from os import open` 。

我们甚至可以使用`form x import *` ，这会将该模块的所有方法，类导入到程序的全局命名空间中。这是一个糟糕的编程习惯。请避免它。

一般来说，你应该避免`from x import y`因为它可能会导致大规模程序出现问题。例如，你永远不知道同事程序员是否想要创建一个恰好是现有函数之一的新函数。您也不知道Python是否会更改要导入函数的库。虽然如前所述，这些问题不会像单独项目那样经常存在，但这是不好的编程实践，应该避免。