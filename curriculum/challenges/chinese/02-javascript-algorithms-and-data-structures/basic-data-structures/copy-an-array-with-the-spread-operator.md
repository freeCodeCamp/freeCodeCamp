---
id: 587d7b7b367417b2b2512b13
challengeType: 1
forumTopicId: 301157
title: 使用扩展运算符复制数组
---

## Description
<section id='description'>
<code>slice()</code>已经能让我们从一个数组中选择一些元素来复制到新数组中了，而 ES6 中又新引入了一个简洁且可读性强的语法<dfn>展开运算符（spread operator）</dfn>，它能让我们方便地复制数组中的<em>所有</em>元素。展开语法是这样的：<code>...</code>
在实践中，我们可以这样用展开运算符来复制一个数组：

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray 等于 [true, true, undefined, false, null]
// thisArray 保持不变，等于 thatArray
```

</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>copyMachine</code>函数，它接受<code>arr</code>（一个数组）和<code>num</code>（一个数字）作为输入参数。该函数应该返回一个由<code>num</code>个<code>arr</code>组成的新数组。我们已经为你写好了大部分的代码，但它还不能正确地工作。请修改这个函数，使用展开语法，使该函数正确工作（提示：我们已经学到过的一个方法很适合用在这里！）
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>copyMachine([true, false, true], 2)</code>应该返回<code>[[true, false, true], [true, false, true]]</code>'
    testString: assert.deepEqual(copyMachine([true, false, true], 2), [[true, false, true], [true, false, true]]);
  - text: '<code>copyMachine([1, 2, 3], 5)</code>应该返回<code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>'
    testString: assert.deepEqual(copyMachine([1, 2, 3], 5), [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]);
  - text: '<code>copyMachine([true, true, null], 1)</code>应该返回<code>[[true, true, null]]</code>'
    testString: assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
  - text: '<code>copyMachine([&quot;it works&quot;], 3)</code>应该返回<code>[[&quot;it works&quot;], [&quot;it works&quot;], [&quot;it works&quot;]]</code>'
    testString: assert.deepEqual(copyMachine(['it works'], 3), [['it works'], ['it works'], ['it works']]);
  - text: <code>copyMachine</code>函数中应该对数组<code>arr</code>使用<code>spread operator</code>。
    testString: assert(removeJSComments(code).match(/\.\.\.arr/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
```

</div>

### After Test
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
```

</div>

</section>

## Solution
<section id='solution'>

```js
function copyMachine(arr,num){
	let newArr=[];
	while(num >=1){
	// change code below this line 
	newArr.push([...arr]);
	//change code above this line
	num--;
	}
	return newArr;
}
console.log(copyMachine([true, false, true], 2));
```

</section>
