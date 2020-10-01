---
id: aaa48de84e1ecc7c742e1124
challengeType: 5
forumTopicId: 16004
title: 回文检查器
---

## Description
<section id='description'>
如果给定的一个字符串是回文，那么返回<code>true</code>，否则返回<code>false</code>。
<dfn>palindrome（回文）</dfn>，指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。
<strong>注意：</strong><br>检查回文时，你需要先除去<strong>所有非字母数字的字符</strong>（标点、空格和符号）并且将所有字符转换成字母大写或字母小写。
我们将会传入不同格式的字符串，例如：<code>"racecar"</code>、<code>"RaceCar"</code>、<code>"race CAR"</code>等等。
我们也会传入一些包含特殊符号的字符串，例如<code>"2A3*3a2"</code>，<code>"2A3  3a2"</code>和<code>"2_A3*3#A2"</code>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>palindrome('eye')</code>应该返回一个布尔值。"
    testString: assert(typeof palindrome("eye") === "boolean");
  - text: "<code>palindrome('eye')</code>应该返回 true。"
    testString: assert(palindrome("eye") === true);
  - text: "<code>palindrome('_eye')</code>应该返回 true。"
    testString: assert(palindrome("_eye") === true);
  - text: "<code>palindrome('race car')</code>应该返回 true。"
    testString: assert(palindrome("race car") === true);
  - text: "<code>palindrome('not a palindrome')</code>应该返回 false。"
    testString: assert(palindrome("not a palindrome") === false);
  - text: "<code>palindrome('A man, a plan, a canal. Panama')</code>应该返回 true。"
    testString: assert(palindrome("A man, a plan, a canal. Panama") === true);
  - text: "<code>palindrome('never odd or even')</code>应该返回 true。"
    testString: assert(palindrome("never odd or even") === true);
  - text: "<code>palindrome('nope')</code>应该返回 false。"
    testString: assert(palindrome("nope") === false);
  - text: "<code>palindrome('almostomla')</code>应该返回 false。"
    testString: assert(palindrome("almostomla") === false);
  - text: "<code>palindrome('My age is 0, 0 si ega ym.')</code>应该返回 true。"
    testString: assert(palindrome("My age is 0, 0 si ega ym.") === true);
  - text: "<code>palindrome('1 eye for of 1 eye.')</code>应该返回 false。"
    testString: assert(palindrome("1 eye for of 1 eye.") === false);
  - text: '<code>palindrome("0_0 (: /-\ :) 0-0")</code>应该返回 true。'
    testString: 'assert(palindrome("0_0 (: /-\ :) 0-0") === true);'
  - text: "<code>palindrome('five|\_/|four')</code>应该返回 false。"
    testString: assert(palindrome("five|\_/|four") === false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function palindrome(str) {
  // Good luck!
  return true;
}



palindrome("eye");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```

</section>
