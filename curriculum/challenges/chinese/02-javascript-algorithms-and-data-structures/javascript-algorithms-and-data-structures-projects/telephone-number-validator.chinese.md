---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Telephone Number Validator
---

## Description
<section id='description'>
如果给定的一个字符串是回文，那么返回<code>true</code>，否则返回<code>false</code>。
<dfn>palindrome（回文）</dfn>，指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。
<strong>注意：</strong><br>检查回文时，你需要先除去<strong>所有非字母数字的字符</strong>（标点、空格和符号）并且将所有字符转换成字母大写或字母小写。
我们将会传入不同格式的字符串，例如：<code>"racecar"</code>、<code>"RaceCar"</code>、<code>"race CAR"</code>等等。
我们也会传入一些包含特殊符号的字符串，例如<code>"2A3*3a2"</code>，<code>"2A3  3a2"</code>和<code>"2_A3*3#A2"</code>。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>telephoneCheck('555-555-5555')</code>应该返回布尔值。"
    testString: assert(typeof telephoneCheck("555-555-5555") === "boolean", '<code>telephoneCheck("555-555-5555")</code>应该返回布尔值。');
  - text: "<code>telephoneCheck('1 555-555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("1 555-555-5555") === true, '<code>telephoneCheck("1 555-555-5555")</code>应该返回 true。');
  - text: "<code>telephoneCheck('1 (555) 555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("1 (555) 555-5555") === true, '<code>telephoneCheck("1 (555) 555-5555")</code>应该返回 true。');
  - text: "<code>telephoneCheck('5555555555')</code>应该返回 true。"
    testString: assert(telephoneCheck("5555555555") === true, '<code>telephoneCheck("5555555555")</code>应该返回 true。');
  - text: "<code>telephoneCheck('555-555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("555-555-5555") === true, '<code>telephoneCheck("555-555-5555")</code>应该返回 true。');
  - text: "<code>telephoneCheck('(555)555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("(555)555-5555") === true, '<code>telephoneCheck("(555)555-5555")</code>应该返回 true。');
  - text: "<code>telephoneCheck('1(555)555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("1(555)555-5555") === true, '<code>telephoneCheck("1(555)555-5555")</code>应该返回 true。');
  - text: "<code>telephoneCheck('555-5555')</code>应该返回 false。"
    testString: assert(telephoneCheck("555-5555") === false, '<code>telephoneCheck("555-5555")</code>应该返回 false。');
  - text: "<code>telephoneCheck('5555555')</code>应该返回 false。"
    testString: assert(telephoneCheck("5555555") === false, '<code>telephoneCheck("5555555")</code>应该返回 false。');
  - text: "<code>telephoneCheck('1 555)555-5555')</code>应该返回 false。"
    testString: assert(telephoneCheck("1 555)555-5555") === false, '<code>telephoneCheck("1 555)555-5555")</code>应该返回 false。');
  - text: "<code>telephoneCheck('1 555 555 5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("1 555 555 5555") === true, '<code>telephoneCheck("1 555 555 5555")</code>应该返回 true。');
  - text: "<code>telephoneCheck('1 456 789 4444')</code>应该返回 true。"
    testString: assert(telephoneCheck("1 456 789 4444") === true, '<code>telephoneCheck("1 456 789 4444")</code>应该返回 true。');
  - text: "<code>telephoneCheck('123**&!!asdf#')</code>应该返回 false。"
    testString: assert(telephoneCheck("123**&!!asdf#") === false, '<code>telephoneCheck("123**&!!asdf#")</code>应该返回 false。');
  - text: "<code>telephoneCheck('55555555')</code>应该返回 false。"
    testString: assert(telephoneCheck("55555555") === false, '<code>telephoneCheck("55555555")</code>应该返回 false。');
  - text: "<code>telephoneCheck('(6054756961)')</code>应该返回 false。"
    testString: assert(telephoneCheck("(6054756961)") === false, '<code>telephoneCheck("(6054756961)")</code>应该返回 false。');
  - text: "<code>telephoneCheck('2 (757) 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("2 (757) 622-7382") === false, '<code>telephoneCheck("2 (757) 622-7382")</code>应该返回 false。');
  - text: "<code>telephoneCheck('0 (757) 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("0 (757) 622-7382") === false, '<code>telephoneCheck("0 (757) 622-7382")</code>应该返回 false。');
  - text: "<code>telephoneCheck('-1 (757) 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("-1 (757) 622-7382") === false, '<code>telephoneCheck("-1 (757) 622-7382")</code>应该返回 false。');
  - text: "<code>telephoneCheck('2 757 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("2 757 622-7382") === false, '<code>telephoneCheck("2 757 622-7382")</code>应该返回 false。');
  - text: "<code>telephoneCheck('10 (757) 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("10 (757) 622-7382") === false, '<code>telephoneCheck("10 (757) 622-7382")</code>应该返回 false。');
  - text: "<code>telephoneCheck('27576227382')</code>应该返回 false。"
    testString: assert(telephoneCheck("27576227382") === false, '<code>telephoneCheck("27576227382")</code>应该返回 false。');
  - text: "<code>telephoneCheck('(275)76227382')</code>应该返回 false。"
    testString: assert(telephoneCheck("(275)76227382") === false, '<code>telephoneCheck("(275)76227382")</code>应该返回 false。');
  - text: "<code>telephoneCheck('2(757)6227382')</code>应该返回 false。"
    testString: assert(telephoneCheck("2(757)6227382") === false, '<code>telephoneCheck("2(757)6227382")</code>应该返回 false。');
  - text: "<code>telephoneCheck('2(757)622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("2(757)622-7382") === false, '<code>telephoneCheck("2(757)622-7382")</code>应该返回 false。');
  - text: "<code>telephoneCheck('555)-555-5555')</code>应该返回 false。"
    testString: assert(telephoneCheck("555)-555-5555") === false, '<code>telephoneCheck("555)-555-5555")</code>应该返回 false。');
  - text: "<code>telephoneCheck('(555-555-5555')</code>应该返回 false。"
    testString: assert(telephoneCheck("(555-555-5555") === false, '<code>telephoneCheck("(555-555-5555")</code>应该返回 false。');
  - text: "<code>telephoneCheck('(555)5(55?)-5555')</code>应该返回 false。"
    testString: assert(telephoneCheck("(555)5(55?)-5555") === false, '<code>telephoneCheck("(555)5(55?)-5555")</code>应该返回 false。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```

</section>
              