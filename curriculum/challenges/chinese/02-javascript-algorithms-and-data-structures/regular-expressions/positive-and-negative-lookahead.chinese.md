---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1
videoUrl: ''
localeTitle: 积极和消极的前瞻
---

## Description
<section id="description"> <code>Lookaheads</code>是一种模式，它告诉JavaScript在字符串中向前看以进一步检查模式。当您想要在同一个字符串上搜索多个模式时，这非常有用。有两种<code>lookaheads</code> ： <code>positive lookahead</code>和<code>negative lookahead</code> 。一个<code>positive lookahead</code>向前看将确保搜索模式中的元素存在，但实际上不匹配它。正向前瞻用作<code>(?=...)</code> ，其中<code>...</code>是不匹配的必需部分。另一方面， <code>negative lookahead</code>将确保搜索模式中的元素不存在。负向前瞻用作<code>(?!...)</code> ，其中<code>...</code>是您不希望在那里的模式。如果不存在负前瞻部分，则返回模式的其余部分。前瞻有点令人困惑，但一些例子会有所帮助。 <blockquote>让quit =“qu”; <br>让noquit =“qt”; <br>让quRegex = / q（？= u）/; <br>让qRegex = / q（？！u）/; <br> quit.match（quRegex）; //返回[“q”] <br> noquit.match（qRegex）; //返回[“q”] </blockquote> <code>lookaheads</code>更实际用途是检查一个字符串中的两个或更多个模式。这是一个（天真）简单的密码检查器，可以查找3到6个字符和至少一个数字： <blockquote> let password =“abc123”; <br>让checkPass = /（？= \ w {3,6}）（？= \ D * \ d）/; <br> checkPass.test（密码）; //返回true </blockquote></section>

## Instructions
<section id="instructions">使用<code>lookaheads</code>在<code>pwRegex</code>匹配长的时间大于5个字符，并有两个连续的数字密码。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用两个积极的<code>lookaheads</code> 。
    testString: assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
  - text: 你的正则表达式不应该匹配<code>&quot;astronaut&quot;</code>
    testString: assert(!pwRegex.test("astronaut"));
  - text: 你的正则表达式不应该与<code>&quot;airplanes&quot;</code>匹配
    testString: assert(!pwRegex.test("airplanes"));
  - text: 你的正则表达式不应该匹配<code>&quot;banan1&quot;</code>
    testString: assert(!pwRegex.test("banan1"));
  - text: 你的正则表达式应该匹配<code>&quot;bana12&quot;</code>
    testString: assert(pwRegex.test("bana12"));
  - text: 你的正则表达式应该匹配<code>&quot;abc123&quot;</code>
    testString: assert(pwRegex.test("abc123"));
  - text: 你的正则表达式不应该匹配<code>&quot;123&quot;</code>
    testString: assert(!pwRegex.test("123"));
  - text: 你的正则表达式不应该匹配<code>&quot;1234&quot;</code>
    testString: assert(!pwRegex.test("1234"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
