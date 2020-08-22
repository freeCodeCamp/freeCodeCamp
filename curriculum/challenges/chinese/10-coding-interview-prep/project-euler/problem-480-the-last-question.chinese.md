---
id: 5900f54c1000cf542c51005f
challengeType: 5
title: 'Problem 480: The Last Question'
videoUrl: ''
localeTitle: 问题480：最后一个问题
---

## Description
<section id="description">考虑所有可以通过从短语中选择任何顺序的字母形成的单词：thereisasyetinsufficientdataforameaningfulanswer假设15个字母或更少的字母按字母顺序列出并从1开始按顺序编号。列表包括：1：a 2： aa 3：aaa 4：aaaa 5：aaaaa 6：aaaaaa 7：aaaaaac 8：aaaaaacd 9：aaaaaacde 10：aaaaaacdee 11：aaaaaacdeee 12：aaaaaacdeeee 13：aaaaaacdeeeee 14：aaaaaacdeeeeee 15：aaaaaacdeeeeeef 16：aaaaaacdeeeeeeee 17：aaaaaacdeeeeeee 17：aaaaaacdeeeeeeh ... 28 ：aaaaaacdeeeeeey 29：aaaaaacdeeeeef 30：aaaaaacdeeeeefe ... 115246685191495242：euleoywuttttsss 115246685191495243：euler 115246685191495244：eulera ... 525069350231428029：ywuuttttssssrrrDefine P（w）作为单词w的位置。将W（p）定义为位置p中的单词。我们可以看到P（w）和W（p）是逆的：P（W（p））= p和W（P（w））= w。示例：W（10）= aaaaaacdee P（aaaaaacdee）= 10 W（115246685191495243）= euler P（euler）= 115246685191495243找到W（P（军团）+ P（量热计） -  P（歼灭）+ P（精心策划） -  P（飘飘））。使用小写字符（没有标点符号或空格）给出答案。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler480()</code>应该返回turnthestarson。
    testString: assert.strictEqual(euler480(), turnthestarson);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler480() {
  // Good luck!
  return true;
}

euler480();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
