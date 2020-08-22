---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: 电话号码验证器
---

## Description
<section id="description">如果传递的字符串看起来像有效的美国电话号码，则返回<code>true</code> 。用户可以按照他们选择的方式填写表单字段，只要其具有有效美国号码的格式即可。以下是美国数字的有效格式示例（有关其他变体，请参阅下面的测试）： <blockquote> 555-555-5555 <br> (555)555-5555 <br> （555）555-5555 <br> 555 555 5555 <br> 5555555555 <br> 1 555 555 5555 </blockquote>对于此挑战，您将看到一个字符串，如<code>800-692-7753</code>或<code>8oo-six427676;laskdjf</code> 。您的工作是根据上面提供的任何格式组合验证或拒绝美国电话号码。区号是必需的。如果提供了国家/地区代码，则必须确认国家/地区代码为<code>1</code> 。如果字符串是有效的美国电话号码，则返回<code>true</code> ;否则返回<code>false</code> 。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>telephoneCheck(&quot;555-555-5555&quot;)</code>应该返回一个布尔值。
    testString: assert(typeof telephoneCheck("555-555-5555") === "boolean");
  - text: <code>telephoneCheck(&quot;1 555-555-5555&quot;)</code>应该返回true。
    testString: assert(telephoneCheck("1 555-555-5555") === true);
  - text: <code>telephoneCheck(&quot;1 (555) 555-5555&quot;)</code>应该返回true。
    testString: assert(telephoneCheck("1 (555) 555-5555") === true);
  - text: <code>telephoneCheck(&quot;5555555555&quot;)</code>应该返回true。
    testString: assert(telephoneCheck("5555555555") === true);
  - text: <code>telephoneCheck(&quot;555-555-5555&quot;)</code>应该返回true。
    testString: assert(telephoneCheck("555-555-5555") === true);
  - text: <code>telephoneCheck(&quot;(555)555-5555&quot;)</code>应该返回true。
    testString: assert(telephoneCheck("(555)555-5555") === true);
  - text: <code>telephoneCheck(&quot;1(555)555-5555&quot;)</code>应该返回true。
    testString: assert(telephoneCheck("1(555)555-5555") === true);
  - text: <code>telephoneCheck(&quot;555-5555&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("555-5555") === false);
  - text: <code>telephoneCheck(&quot;5555555&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("5555555") === false);
  - text: <code>telephoneCheck(&quot;1 555)555-5555&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("1 555)555-5555") === false);
  - text: <code>telephoneCheck(&quot;1 555 555 5555&quot;)</code>应该返回true。
    testString: assert(telephoneCheck("1 555 555 5555") === true);
  - text: <code>telephoneCheck(&quot;1 456 789 4444&quot;)</code>应该返回true。
    testString: assert(telephoneCheck("1 456 789 4444") === true);
  - text: '<code>telephoneCheck(&quot;123**&amp;!!asdf#&quot;)</code>应该返回false。'
    testString: assert(telephoneCheck("123**&!!asdf#") === false);
  - text: <code>telephoneCheck(&quot;55555555&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("55555555") === false);
  - text: <code>telephoneCheck(&quot;(6054756961)&quot;)</code>应该返回false
    testString: assert(telephoneCheck("(6054756961)") === false);
  - text: <code>telephoneCheck(&quot;2 (757) 622-7382&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("2 (757) 622-7382") === false);
  - text: <code>telephoneCheck(&quot;0 (757) 622-7382&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("0 (757) 622-7382") === false);
  - text: <code>telephoneCheck(&quot;-1 (757) 622-7382&quot;)</code>应该返回false
    testString: assert(telephoneCheck("-1 (757) 622-7382") === false);
  - text: <code>telephoneCheck(&quot;2 757 622-7382&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("2 757 622-7382") === false);
  - text: <code>telephoneCheck(&quot;10 (757) 622-7382&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("10 (757) 622-7382") === false);
  - text: <code>telephoneCheck(&quot;27576227382&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("27576227382") === false);
  - text: <code>telephoneCheck(&quot;(275)76227382&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("(275)76227382") === false);
  - text: <code>telephoneCheck(&quot;2(757)6227382&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("2(757)6227382") === false);
  - text: <code>telephoneCheck(&quot;2(757)622-7382&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("2(757)622-7382") === false);
  - text: <code>telephoneCheck(&quot;555)-555-5555&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("555)-555-5555") === false);
  - text: <code>telephoneCheck(&quot;(555-555-5555&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("(555-555-5555") === false);
  - text: <code>telephoneCheck(&quot;(555)5(55?)-5555&quot;)</code>应该返回false。
    testString: assert(telephoneCheck("(555)5(55?)-5555") === false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function telephoneCheck(str) {
  // Good luck!
  return true;
}

telephoneCheck("555-555-5555");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
