---
title: Convert seconds to compound duration
id: 596fd036dc1ab896c5db98b1
challengeType: 5
videoUrl: ''
localeTitle: 将秒转换为复合持续时间
---

## Description
<section id="description">任务： <p>实现一个功能： </p>取一个表示以秒为单位的持续时间的正整数作为输入（例如， <code>100</code> ），并返回一个字符串，该字符串显示分解为周，日，小时，分钟和秒的相同持续时间，如下所述（例如，“ <code>1 min, 40 sec</code> “）。 <p>证明它通过以下三个测试用例： </p><p style="font-size:115%; margin:1em 0 0 0">测试用例</p><table><tbody><tr><th>输入号码</th><th>输出数量</th></tr><tr><td> 7259 </td><td> <code>2 hr, 59 sec</code> </td> </tr><tr><td> 86400 </td><td> <code>1 d</code> </td> </tr><tr><td> 6000000 </td><td> <code>9 wk, 6 d, 10 hr, 40 min</code> </td> </tr></tbody></table><p style="font-size:115%; margin:1em 0 0 0">细节</p>应使用以下五个单位： <table><tbody><tr><th>单元</th><th>输出中使用的后缀</th><th>转变</th></tr><tr><td>周</td><td> <code>wk</code> </td> <td> 1周= 7天</td></tr><tr><td>天</td><td> <code>d</code> </td> <td> 1天= 24小时</td></tr><tr><td>小时</td><td> <code>hr</code> </td> <td> 1小时= 60分钟</td></tr><tr><td>分钟</td><td> <code>min</code> </td> <td> 1分钟= 60秒</td></tr><tr><td>第二</td><td> <code>sec</code> </td> <td></td></tr></tbody></table>但是，仅包括输出中具有非零值的数量（例如，返回“ <code>1 d</code> ”而不是“ <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code> ”）。更大的单位优先于较小的单位尽可能（例如，返回<code>2 min, 10 sec</code>而不是<code>1 min, 70 sec</code>或<code>130 sec</code> ）模拟测试用例中显示的格式（从最大单位到最小单位的数量，以逗号+空格分隔;数值和单位每个数量用空格分隔）。 <p></p><hr style="margin:1em 0;"><p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertSeconds</code>是一个函数。
    testString: assert(typeof convertSeconds === 'function');
  - text: '<code>convertSeconds(7259)</code>应该返回<code>2 hr, 59 sec</code> 。'
    testString: assert.equal(convertSeconds(testCases[0]), results[0]);
  - text: <code>convertSeconds(86400)</code>应返回<code>1 d</code> 。
    testString: assert.equal(convertSeconds(testCases[1]), results[1]);
  - text: '<code>convertSeconds(6000000)</code>应该返回<code>9 wk, 6 d, 10 hr, 40 min</code> 。'
    testString: assert.equal(convertSeconds(testCases[2]), results[2]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertSeconds (sec) {
  // Good luck!
  return true;
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

/section>
