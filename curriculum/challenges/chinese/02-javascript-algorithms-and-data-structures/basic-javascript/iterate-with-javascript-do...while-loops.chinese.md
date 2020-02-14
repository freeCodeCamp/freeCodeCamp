---
id: 5a2efd662fb457916e1fe604
title: Iterate with JavaScript Do...While Loops
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript迭代...循环
---

## Description
<section id="description">您可以使用循环多次运行相同的代码。你将学习的下一个类型的循环称为“ <code>do...while</code> ”循环，因为它首先将“ <code>do</code> ”循环内部代码的一次传递，无论如何，然后它运行“ <code>while</code> ”指定条件为真一旦这种情况不再真实就停止。我们来看一个例子。 <blockquote> var ourArray = []; <br> var i = 0; <br>做{ <br> ourArray.push（ⅰ）; <br>我++; <br> } while（i &lt;5）; </blockquote>这与任何其他类型的循环一样正常，结果数组看起来像<code>[0, 1, 2, 3, 4]</code> 。然而，什么使得<code>do...while</code>与其他循环不同，但是当条件在第一次检查时失败时它的行为如何。让我们看看这个在行动。这是一个常规的while循环，只要<code>i &lt; 5</code> ，它就会在循环中运行代码。 <blockquote> var ourArray = []; <br> var i = 5; <br>而（i &lt;5）{ <br> ourArray.push（ⅰ）; <br>我++; <br> } </blockquote>请注意，我们将<code>i</code>的值初始化为5.当我们执行下一行时，我们注意到<code>i</code>不小于5.所以我们不执行循环内的代码。结果是<code>ourArray</code>最终没有添加任何内容，因此当上面示例中的所有代码完成运行时，它仍然看起来像这个<code>[]</code> 。现在，看一下<code>do...while</code>循环。 <blockquote> var ourArray = []; <br> var i = 5; <br>做{ <br> ourArray.push（ⅰ）; <br>我++; <br> } while（i &lt;5）; </blockquote>在这种情况下，我们将<code>i</code>的值初始化为5，就像我们使用while循环一样。当我们到达下一行时，没有检查<code>i</code>的值，所以我们转到花括号内的代码并执行它。我们将在数组中添加一个元素并在进行条件检查之前递增<code>i</code> 。然后，当我们检查<code>i &lt; 5</code>看到<code>i</code>现在是6，这不符合条件检查。所以我们退出循环并完成。在上面的例子的末尾， <code>ourArray</code>的值是<code>[5]</code> 。本质上， <code>do...while</code>循环确保循环内的代码至少运行一次。让我们尝试通过将值推送到数组来实现<code>do...while</code>循环。 </section>

## Instructions
<section id="instructions">将代码中的<code>while</code>循环更改为<code>do...while</code>循环，以便循环将数字10推送到<code>myArray</code> ，当代码完成运行时， <code>i</code>将等于<code>11</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>do...while</code>循环。
    testString: assert(code.match(/do/g));
  - text: '<code>myArray</code>应该等于<code>[10]</code> 。'
    testString: assert.deepEqual(myArray, [10]);
  - text: <code>i</code>应该等于<code>11</code>
    testString: assert.equal(i, 11);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

while (i < 5) {
  myArray.push(i);
  i++;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
