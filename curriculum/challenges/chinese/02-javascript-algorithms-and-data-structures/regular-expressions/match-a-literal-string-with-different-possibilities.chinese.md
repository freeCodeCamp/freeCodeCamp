---
id: 587d7db4367417b2b2512b90
title: Match a Literal String with Different Possibilities
challengeType: 1
videoUrl: ''
localeTitle: 匹配具有不同可能性的文字字符串
---

## Description
<section id="description">使用<code>/coding/</code>等正则表达式，可以在另一个字符串中查找<code>&quot;coding&quot;</code>模式。这对搜索单个字符串很有用，但它仅限于一种模式。您可以使用<code>alternation</code>或<code>OR</code>运算符搜索多个模式： <code>|</code> 。此运算符在其之前或之后匹配模式。例如，如果你想匹配<code>&quot;yes&quot;</code>或<code>&quot;no&quot;</code> ，你想要的正则表达式是<code>/yes|no/</code> 。您还可以搜索两种以上的模式。您可以通过添加更多模式来实现此操作，其中更多<code>OR</code>运算符将它们分开，例如<code>/yes|no|maybe/</code> 。 </section>

## Instructions
<section id="instructions">完成正则表达式<code>petRegex</code>以匹配宠物<code>&quot;dog&quot;</code> ， <code>&quot;cat&quot;</code> ， <code>&quot;bird&quot;</code>或<code>&quot;fish&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>petRegex</code>应该为字符串<code>&quot;John has a pet dog.&quot;</code>返回<code>true</code> <code>&quot;John has a pet dog.&quot;</code>
    testString: assert(petRegex.test('John has a pet dog.'));
  - text: 你的正则表达式<code>petRegex</code>应该为字符串<code>&quot;Emma has a pet rock.&quot;</code>返回<code>false</code> <code>&quot;Emma has a pet rock.&quot;</code>
    testString: assert(!petRegex.test('Emma has a pet rock.'));
  - text: 你的正则表达式<code>petRegex</code>应该为字符串<code>&quot;Emma has a pet bird.&quot;</code>返回<code>true</code> <code>&quot;Emma has a pet bird.&quot;</code>
    testString: assert(petRegex.test('Emma has a pet bird.'));
  - text: 你的正则表达式<code>petRegex</code>应该返回<code>true</code>为字符串<code>&quot;Liz has a pet cat.&quot;</code>
    testString: assert(petRegex.test('Liz has a pet cat.'));
  - text: 你的正则表达式<code>petRegex</code>应该返回<code>false</code>为<code>&quot;Kara has a pet dolphin.&quot;</code>的字符串<code>&quot;Kara has a pet dolphin.&quot;</code>
    testString: assert(!petRegex.test('Kara has a pet dolphin.'));
  - text: 你的正则表达式<code>petRegex</code>应该返回<code>true</code>为字符串<code>&quot;Alice has a pet fish.&quot;</code>
    testString: assert(petRegex.test('Alice has a pet fish.'));
  - text: 你的正则表达式<code>petRegex</code>应该返回<code>false</code>为字符串<code>&quot;Jimmy has a pet computer.&quot;</code>
    testString: assert(!petRegex.test('Jimmy has a pet computer.'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
