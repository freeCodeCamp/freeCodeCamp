---
title: Using Arrayprototypereduce to Reduce Conceptual Boilerplate for Problems on Arrays
localeTitle: 使用Arrayprototypereduce减少概念Boilerplate的阵列问题
---
那真是一口气！它可能刚刚被命名为**Use `Array.prototype.reduce()`以轻松解决数组问题**或者**`Array.prototype.reduce()` FTW！** 。这本来就更容易阅读和解析。

但事实并非如此。 JavaScript中的循环就是这样的。它们不简洁，它们会让你在丛林中徘徊一段时间。正如笑话所说，计算机科学中最难的是两件事 - [缓存失效](https://en.wikipedia.org/wiki/Cache_invalidation) ， [命名事物](https://www.quora.com/Why-is-naming-things-hard-in-computer-science-and-how-can-it-can-be-made-easier)和[一个错误](https://en.wikipedia.org/wiki/Off-by-one_error) 。

然后存在[在for循环](http://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop)中编写[异步代码而不使用IIFE闭包的危险](http://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop) 。

本文将从声明开始 - 您可以避免使用for循环或while循环来解决任何与`Array`相关的问题。相反，您可以使用`Array.prototype.reduce()`解决所有问题。如果你想读书;确保您了解递归函数，以及一些很酷的函数工具，如`Array.prototype.map()`或`Array.prototype.filter()` 。

大索赔需要大量证据。因此，让我们演示如何使用`reduce()`来习惯。

你知道的时候，如果你还没有解决FreeCodeCamp算法的脚本部分，你可能想继续阅读下一部分。一些例子可以很好地匹配这些问题。

这是陈词滥调的扰流警报;确保你给这些问题一个诚实的尝试，而不是在你尝试之前先看看解决方案。

此外，如果你已经足够了解它，也许你想回顾这篇文章并提供反馈。

## 我可以减少任何与阵列相关的问题吗？

是的你可以！事实上，问题甚至不必有一个数组 - _它只是一个问题，你可以创建一个中间数组_ 。

我们来举个例子吧。从标准的白色间隔字符串创建一个[slug url](https://en.wikipedia.org/wiki/Semantic_URL#Slug)是很常见的，例如新闻标题，博客文章标题甚至问答论坛上的问题。

比如说，我们必须编写一个实用程序函数来创建这个slug。你可能会写这样的东西：
```
function createSlug(str){ 
  return str.split(" ").reduce(function(prev, next){ 
    return prev.concat(<a href='https://signalvnoise.com/posts/3124-give-it-five-minutes' target='_blank' rel='nofollow'>next.toLowerCase()]); 
  }, []) 
  .join("-"); 
 } 
```

不要相信我的话！来吧，在你的控制台中测试一下像“Leo终于赢得了一个惊人的奥斯卡奖”！看看它的回报。我会等......干嘛？好的，继续前进。

是的，它不是一个强大的实现。它没有处理一些边缘情况，也假设连接应该以`"-"`发生。

但这是一个开始。请注意`reduce`的用法如何使样板不受影响 - 操作只发生在以下行：
```
return prev.concat([next.toLowerCase()]); 
```

这是我们想要的功能的核心。事实上，我们非常确信它的真棒，我们用`return`语句启动`function`体！

你可能会想象，这看起来像黑暗魔法。确保这不是一个下意识的反应，因为你太习惯于写循环。只是\[给它五分钟！

如果上述代码不清楚，您需要了解`reduce`工作原理。通过_理解_ ，我的意思是，知道它像你的手背。

## 但我根本不理解减少！

好吧，不要害怕！你将在接下来的几分钟内成为一名`reduce`忍者。

每个JavaScript函数都需要知道三件事，以了解函数的工作原理：

*   输入
*   输出
*   执行上下文

是的，我可以看到您在新标签中打开官方[MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) ！没关系，先读一下。我很认真，这不是开玩笑。

你应该始终从官方文档开始了解一些事情。

好，现在你与困惑`prev`和`next`回调中;你准备好按照这里的文字。

`Array.prototype.reduce()`将回调和初始值作为输入参数（初始值很重要。许多开发人员忘记正确提供初始值;并搞砸了他们的代码）。

正如您在文档中看到的那样，它还需要一些额外但可选的参数。但稍后会有更多。假设`arr`是一个任意数组。
```
arr.reduce(function(){}, initialValue); 
```

现在，让我们仔细看看回调函数，它是`reduce`的第一个参数。反过来，这个回调有两个参数。这两个论点在官方文档中称为`prev`和`next` 。就个人而言，我认为这些名称并不符合其真实性质。

因此，在整个文本中，我们将它们称为`acc` ，以表示累积值;和`item` ，表示正在访问的当前项目。

到目前为止，这是`reduce`应该是什么样子：
```
arr.reduce(function(acc, item){ 
 /* here you have to complete the function */ 
 }, initialValue); 
```

现在，让我们看看这些`acc`和`item`的价值是什么。我们之前已经提到过`reduce`是迭代结构的替代品。

按理说， `reduce`会采用你的自定义回调函数;并遍历已调用`reduce`的Array。

不要描述这些，让我们问JS执行引擎这些是什么！
```
var arr = <a href='http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/' target='_blank' rel='nofollow'>10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item); 
 }, 0); 
```

在浏览器或节点控制台中执行上述操作会将此作为输出：
```
0 10 
 undefined 20 
 undefined 30 
 undefined 60 
```

请注意，输出的数量与数组`[10, 20, 30, 60]`的元素数量相同。实际上，它会打印出Array的元素！

因此，我们可以推断出`reduce()`接受自定义回调并在Array的每个元素上执行它。这样做时，它使当前项可用作自定义回调作为`item`参数。

但是`acc`怎么样？我们看到除了第一行之外，当`item = 10` ，它是`undefined` 。在第一行中，它对应于第一次迭代，其值与`initialvalue`相同。

总之，我们的`acc`累加器，不累积！

但那么，我们如何使它积累？让我们试试这个：
```
var arr = [10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item); 
   return acc; 
 }, 0); 
```

这次输出变为：
```
0 10 
 0 20 
 0 30 
 0 60 
```

如您所见， `acc`的值始终保持不变。这是预期的 - 我们不会在自定义回调中的任何位置改变`acc`的值。我们返回在给定迭代中可用的任何`reduce` 。

但我们确实意识到了一些东西 - 当前迭代的`acc`值，将是来自前一次迭代的自定义回调的`return`值。最终，当迭代结束时， `acc`的最终值将通过`reduce`调用返回。

这只留下了我们理解中的一个重要部分 - 执行环境的价值，或者\[ `this` ！

所以，我们再次接近我们的友好邻居JS控制台并执行：
```
var arr = <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode' target='_blank' rel='nofollow'>10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item, this); 
   return acc; 
 }, 0); 
```

如果您处于\[严格模式，它将返回`undefined`作为`this`值。否则，在浏览器，它会指向[`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window)对象作为`this` 。我们可以使用[`bind`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind)覆盖和设置它们吗？当然！只需使用`bind`与回调：
```
var arr = <a href='https://en.wikipedia.org/wiki/Loop_invariant' target='_blank' rel='nofollow'>10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item, this); 
   return acc; 
 }.bind(arr), 0); 
```

我已经绑定了数组`arr`本身;但您可以将其设置为环境中的任何对象。

## 了解减少

让我们总结一下我们对这个`reduce`函数的理解，以便于参考：

*   Reduce将自定义回调作为其第一个参数，并将一些初始值作为其第二个参数。
*   重要的是我们不要忘记第二个参数，即初始值;我们在使用它时明确设置它。
*   自定义回调的输入参数是累计值`acc` ;和Array， `item`的当前`item` 。
*   下一次迭代的`acc`值将是当前迭代中回调内部的返回值。
*   使用`reduce()`全部意义在于正确地形成`acc` ;最后从`reduce()`调用返回它。

你不要试着通过填鸭来记住它们！相反，让我们通过在真实代码中应用它们来记住它们。

## 使用Reduce

让我们从头顶开始一个简单的Array操作 - _在Array中找到最大值_

为简洁起见，我假设它是一个整数数组。

为了形成解决方案，我们需要考虑如何形成`acc`因为`reduce`需要我们的回调并迭代数组。

我认为有用的一个想法是用\[loop-invariants\]来思考。无论阵列的大小或内容如何，​​我们都想提出一个配方;到目前为止， `acc`应始终具有最大值。

说，我的阵列是`[20, 50, 5, 60]` 。经过两次迭代; `item`为`5` ， `acc`应为`max(20, 50) = 50` `acc` `max(20, 50) = 50` 。

_到目前为止_ ， `acc`总是获得最大的_子阵列_的唯一方法是，如果我们总是选择当前`item`最大值并且`acc` - 并且返回他的赢家！

那么，这就是函数的样子：
```
var arr = [20, 50, 5, 60]; 
 arr.reduce(function(acc, item){ 
  return Math.max(acc, item); 
 }, 0); 
```

与函数式编程原理相结合，可能会像以下一样重写它;
```
var arr = [20, 50, 5, 60]; 
 arr.reduce(Math.max, 0); 
```

但是这不会起作用并会返回`NaN` 。这是原因 - `acc`和`item`不是自定义回调的**唯一**参数。当您调用[`Math.max()`](//forum.freecodecamp.com/t/javascript-math-max/14682)尝试在非数字参数上调用它时，会产生`NaN` 。

请注意，我没有考虑选择初始值。我把它选为`0` ;导致一个错误！

那么，如果我的数组由小于零的值组成呢？比如说， `arr = <a href='https://en.wikipedia.org/wiki/Least_common_multiple' target='_blank' rel='nofollow'>-7, -56, -5, -2]` 。返回的值将为`0` ，即使在Array `arr`也不存在。

相反，我们应该为初始值选择尽可能低的值。
```
var arr = [-20, -50, -5, -60]; 
 arr.reduce(function(acc, item){ 
  return Math.max(acc, item); 
 }, -Infinity); 
```

我们到了那里。我们应该在另一个与阵列相关的问题上磨练我们只是为了享受一些乐趣，让我们更加强硬一点。

比如，我们要找到\[整数数组的LCM。现在，从理论上讲，我们知道两个数字的LCM将是它们的乘积，除以它们的[HCF](https://en.wikipedia.org/wiki/Greatest_common_divisor) 。

存在用于HCF发现的Eucledian算法;它的实施和丰富。没有必要浪费你的时间让你自己写一个HCF功能，或者找一个。

相反，让我们看看如何将两个数字的LCM扩展为多个数字的LCM。 Newsflash - 它不是整个阵列的产品除以它们的HCF。不。那在数学上是错误的。

三个数字的LCM将是前两个数字的最小公倍数;然后是第一个LCM的LCM和剩余的数字。同样，您可以制定策略以首先找出子阵列的LCM，然后取另一个数字并使用第一个LCM找到其LCM。

那么，我们如何制定解决方案呢？我们需要在迭代的中间考虑`acc` 。毫无疑问，最终的`acc`应该是整个阵列的LCM。但在第`nth`次迭代期间也是如此; `acc`应该保持到目前为止所经过的`(n-1)`元素的最小公倍数。

是的，初始值。它应该是一个数字，其LCM与另一个数字将是另一个数字。显然，它是`1` 。

让我们写下我们的`reduce`解决方案。
```
var arr = <a href='http://www.freecodecamp.com/challenges/symmetric-difference' target='_blank' rel='nofollow'>1, 2, 3, 4, 5, 6]; 
 arr.reduce(function(acc, item){ 
  return acc * item / hcf(acc, item); 
 }, 1); 
```

我假设环境中有一个`hcf()`函数。我在某种程度上选了条目;它应该返回`60`作为答案。

## 更多减少

Reduce不仅仅是为您提供实用程序来解决一些Mathy问题的函数，例如数组的总和，数组的hcf，数组的最小值等。

它完全有能力超越。我们现在将处理一些复杂的例子。

说，你希望压扁嵌套数组。是的，在您开始在座位上上下跳跃之前 - 嵌套可以是任意级别的深度。

例如，我们可以使用此Array来测试我们的代码。
```
var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]]; 
```

这看起来非常复杂 - 嵌套数组，具有不同深度的空嵌套数组。

输出应该是`[1, 2, 3, 'cat', 'dog', 'fish', 'bird']`

现在是制定战略的时候了。我们显然需要区分数组和元素。此外， `acc`应该是整个迭代过程中形成的数组;意思是初始值是一个空数组`[]` 。

在整个回调函数代码中，我们只需从`item`提取内容，该内容可以是深度嵌套的数组;我们将`Array.prototype.concat()`与`acc`值一起使用。最好在`Array.prototype.push()`上使用`concat()` `Array.prototype.push()` ;因为`push()`改变了原始数组;而`concat()`创建一个新数组并返回它。

因为我们不知道任何给定时刻的嵌套水平;我们必须递归地调用我们的自定义回调。意思是，我们必须在其他地方写它并在`reduce()`通过名称来调用它。
```
var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]]; 
 
 function flattenArray(arr) { 
  return arr.reduce(function(acc, item){ 
    if(Array.isArray(item)){ 
      return acc.concat(flattenArray(item)); // recursively call to flatten nested array 
    return acc.concat(item); // this does the ordering. If you want reverse ordered output, just reverse it! 
  }, []) 
 
 } 
 
 // call it like this 
 flattenArray(arr); 
```

当然，这需要一些递归函数的背景;但是，与这个漫长的问题相比，这并不难以接受！

是的，继续玩吧。但请注意我们如何能够简单地编写3-4行清晰函数，并记住一些简单的指导原则 - 并做一些尽可能复杂的事情。这是可读和可维护的。

例如，如果你想稍后改变或调整逻辑逻辑（假设你想要大写一些字符串或编码一些字符串）;你可以很容易地确定改变的地方。实际嵌套发生在`if`条件内。我们在那里使用`reduce`调用的方式 - 它维护元素在数组中的顺序。

让我们看看另一个看似复杂的例子吧，让它屈服于`reduce`之剑！

我们要找出\[两个或更多阵列的对称差异。它看起来令人生畏;但是你开始思考了。

初始值是多少？当然，我们正在组建一个阵列;所以这将是一个空数组`<a href='https://github.com/reactjs/redux' target='_blank' rel='nofollow'>]`开头。然后是`acc` - 因为我们的最终解决方案将包含差异数组;它也必须是一个数组。这将继续打击到目前为止所遇到的数组的对称差异。

需要明确的是，这个函数可以接受任意数量的数组;因此，我们必须将它们全部转换为数组数组以便于操作。
```
function symDiff(args){ 
  // convert args to an Array 
  var argsArray = Array.prototype.slice.call(arguments); 
 
  // now do the reduce magic! 
  argsArray.reduce(function(acc, item){ 
    return acc 
      .filter(function(itemInAcc){ 
        return item.indexOf(itemInAcc) === -1; 
      }) 
      .concat(item.filter(function(itemInItem){ 
        return acc.indexOf(itemInItem) === -1; 
      })); 
  }. []); 
 } 
```

是的我知道。它看起来很大。所以，让我们看看我们是否可以重构以使其变小。请注意，两个`filter`功能都做同样的工作;除了改变了一组参数对。凉！让我们创建一个单独的函数，并用这些参数调用它两次。
```
function symDiff(args){ 
  // convert args to an Array 
  var argsArray = Array.prototype.slice.call(arguments); 
 
  // now do the reduce magic! 
  argsArray.reduce(function(acc, item){ 
    var funWithFiltering = function(arr1, arr2){ 
      return arr1.filter(function(itemInArr1){ 
        return arr2.indexOf(itemInArr1) === -1; 
      }); 
    }; 
 
    return funWithFiltering(acc, item).concat(funWithFiltering(item, acc)); 
  }. []); 
 } 
```

这看起来更好。但还有一个问题。这将在数​​组中保留重复。如果不需要，我们可以使用`reduce`轻松编写另一个函数来删除重复项。
```
function removeDuplicates(arr){ 
  arr.filter(item, index, self){ 
    // Keep only the first instance of the array, as given by indexOf() 
    // Remove other elements from Array 
    return self.indexOf(item) === index; 
  } 
 } 
```

我们不能再继续忽视这一点了。我一直在使用`filter`同时承诺使用`reduce` ，对吗？原因很简单 - `filter`可以用`reduce`编写。实际上，任何阵列操作，理论上;可以用`reduce()` 。

试一试！用`reduce`实现`map`和`filter` 。你也必须处理可选参数。

## 包起来

哇，这是相当多的！但是我想我已经做了一个强有力的使用`reduce`情况，只要你想用循环来完成它。习惯于它就像它的第一天性。

一旦你在某些String转换或数组操作上遇到问题;从写作开始
```
return arr.reduce(function(acc, item){_}, _); 
```

然后填写空白。当您使用`reduce()` ，您正在考虑每个元素与另一个元素的交互。你是通过从头到尾依据来形成输出的。

框架\[Redux采用了`reduce`原则，在网页设计中越来越受欢迎。

还要注意另一个显着特征 - `reduce`力量或引导您形成解决方案而不改变现有的任何东西。例如，在最后一个例子中;我们过滤和连接 - 但我们知道它会按原样运行;因为第一组操作没有改变该迭代中的任何`acc`或`item` 。

这将是与您保持一致的好时机，即`initialValue`参数是[可选的](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Parameters) 。您无需明确提供。

如果省略这个;对于第一次迭代， `acc`将是数组中的第一项，而`item`将是数组中的第二项。这意味着我们可以编写一个数组实用程序的总和，只是省略它。或者，如果在数组中找到最大值，我们不需要考虑`-Infinity` - 如果我们删除初始值，它将工作得很好。

但是在一些复杂的情况下，最好根据一些基础 - 一些初始化来可视化和制定解决方案。但是，如果没有它你会更舒服，对每个人来说都是他自己！

如果您有任何进一步的问题或建议，请加入我们的[gitter聊天室](https://gitter.im/FreeCodeCamp/FreeCodeCamp) ;并告诉我们你如何`reduce` ！