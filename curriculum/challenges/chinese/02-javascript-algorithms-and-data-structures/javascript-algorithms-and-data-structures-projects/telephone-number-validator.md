---
id: aff0395860f5d3034dc0bfc9
challengeType: 5
forumTopicId: 16090
title: 电话号码验证器
---

## Description
<section id='description'>
如果传入的字符串是一个有效的美国电话号码格式，则返回<code>true</code>。
只要是有效的美国电话号码的格式，用户可以按照他们的方式填写表单中的电话号码。以下是一些正确的例子（其他格式变形请参考以下例子）：
<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>
在这个挑战中，你将会看到例如<code>800-692-7753</code>或者<code>8oo-six427676;laskdjf</code>的号码。你的任务是根据上面不同的格式组合，判断它是否美国号码。区号是必须的。如果提供国家代码，则必须确认国家代码为<code>1</code>。如果这是有效的美国电话就返回<code>true</code>，否则返回<code>false</code>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>telephoneCheck('555-555-5555')</code>应该返回布尔值。"
    testString: assert(typeof telephoneCheck("555-555-5555") === "boolean");
  - text: "<code>telephoneCheck('1 555-555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("1 555-555-5555") === true);
  - text: "<code>telephoneCheck('1 (555) 555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("1 (555) 555-5555") === true);
  - text: "<code>telephoneCheck('5555555555')</code>应该返回 true。"
    testString: assert(telephoneCheck("5555555555") === true);
  - text: "<code>telephoneCheck('555-555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("555-555-5555") === true);
  - text: "<code>telephoneCheck('(555)555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("(555)555-5555") === true);
  - text: "<code>telephoneCheck('1(555)555-5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("1(555)555-5555") === true);
  - text: "<code>telephoneCheck('555-5555')</code>应该返回 false。"
    testString: assert(telephoneCheck("555-5555") === false);
  - text: "<code>telephoneCheck('5555555')</code>应该返回 false。"
    testString: assert(telephoneCheck("5555555") === false);
  - text: "<code>telephoneCheck('1 555)555-5555')</code>应该返回 false。"
    testString: assert(telephoneCheck("1 555)555-5555") === false);
  - text: "<code>telephoneCheck('1 555 555 5555')</code>应该返回 true。"
    testString: assert(telephoneCheck("1 555 555 5555") === true);
  - text: "<code>telephoneCheck('1 456 789 4444')</code>应该返回 true。"
    testString: assert(telephoneCheck("1 456 789 4444") === true);
  - text: "<code>telephoneCheck('123**&!!asdf#')</code>应该返回 false。"
    testString: assert(telephoneCheck("123**&!!asdf#") === false);
  - text: "<code>telephoneCheck('55555555')</code>应该返回 false。"
    testString: assert(telephoneCheck("55555555") === false);
  - text: "<code>telephoneCheck('(6054756961)')</code>应该返回 false。"
    testString: assert(telephoneCheck("(6054756961)") === false);
  - text: "<code>telephoneCheck('2 (757) 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("2 (757) 622-7382") === false);
  - text: "<code>telephoneCheck('0 (757) 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("0 (757) 622-7382") === false);
  - text: "<code>telephoneCheck('-1 (757) 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("-1 (757) 622-7382") === false);
  - text: "<code>telephoneCheck('2 757 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("2 757 622-7382") === false);
  - text: "<code>telephoneCheck('10 (757) 622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("10 (757) 622-7382") === false);
  - text: "<code>telephoneCheck('27576227382')</code>应该返回 false。"
    testString: assert(telephoneCheck("27576227382") === false);
  - text: "<code>telephoneCheck('(275)76227382')</code>应该返回 false。"
    testString: assert(telephoneCheck("(275)76227382") === false);
  - text: "<code>telephoneCheck('2(757)6227382')</code>应该返回 false。"
    testString: assert(telephoneCheck("2(757)6227382") === false);
  - text: "<code>telephoneCheck('2(757)622-7382')</code>应该返回 false。"
    testString: assert(telephoneCheck("2(757)622-7382") === false);
  - text: "<code>telephoneCheck('555)-555-5555')</code>应该返回 false。"
    testString: assert(telephoneCheck("555)-555-5555") === false);
  - text: "<code>telephoneCheck('(555-555-5555')</code>应该返回 false。"
    testString: assert(telephoneCheck("(555-555-5555") === false);
  - text: "<code>telephoneCheck('(555)5(55?)-5555')</code>应该返回 false。"
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
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```

</section>
