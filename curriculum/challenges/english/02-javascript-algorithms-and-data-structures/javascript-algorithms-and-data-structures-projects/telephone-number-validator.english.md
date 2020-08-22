---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
isHidden: false
isRequired: true
forumTopicId: 16090
---

## Description
<section id='description'>
Return <code>true</code> if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>
For this challenge you will be presented with a string such as <code>800-692-7753</code> or <code>8oo-six427676;laskdjf</code>. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is <code>1</code>. Return <code>true</code> if the string is a valid US phone number; otherwise return <code>false</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>telephoneCheck("555-555-5555")</code> should return a boolean.
    testString: assert(typeof telephoneCheck("555-555-5555") === "boolean");
  - text: <code>telephoneCheck("1 555-555-5555")</code> should return true.
    testString: assert(telephoneCheck("1 555-555-5555") === true);
  - text: <code>telephoneCheck("1 (555) 555-5555")</code> should return true.
    testString: assert(telephoneCheck("1 (555) 555-5555") === true);
  - text: <code>telephoneCheck("5555555555")</code> should return true.
    testString: assert(telephoneCheck("5555555555") === true);
  - text: <code>telephoneCheck("555-555-5555")</code> should return true.
    testString: assert(telephoneCheck("555-555-5555") === true);
  - text: <code>telephoneCheck("(555)555-5555")</code> should return true.
    testString: assert(telephoneCheck("(555)555-5555") === true);
  - text: <code>telephoneCheck("1(555)555-5555")</code> should return true.
    testString: assert(telephoneCheck("1(555)555-5555") === true);
  - text: <code>telephoneCheck("555-5555")</code> should return false.
    testString: assert(telephoneCheck("555-5555") === false);
  - text: <code>telephoneCheck("5555555")</code> should return false.
    testString: assert(telephoneCheck("5555555") === false);
  - text: <code>telephoneCheck("1 555)555-5555")</code> should return false.
    testString: assert(telephoneCheck("1 555)555-5555") === false);
  - text: <code>telephoneCheck("1 555 555 5555")</code> should return true.
    testString: assert(telephoneCheck("1 555 555 5555") === true);
  - text: <code>telephoneCheck("1 456 789 4444")</code> should return true.
    testString: assert(telephoneCheck("1 456 789 4444") === true);
  - text: <code>telephoneCheck("123**&!!asdf#")</code> should return false.
    testString: assert(telephoneCheck("123**&!!asdf#") === false);
  - text: <code>telephoneCheck("55555555")</code> should return false.
    testString: assert(telephoneCheck("55555555") === false);
  - text: <code>telephoneCheck("(6054756961)")</code> should return false
    testString: assert(telephoneCheck("(6054756961)") === false);
  - text: <code>telephoneCheck("2 (757) 622-7382")</code> should return false.
    testString: assert(telephoneCheck("2 (757) 622-7382") === false);
  - text: <code>telephoneCheck("0 (757) 622-7382")</code> should return false.
    testString: assert(telephoneCheck("0 (757) 622-7382") === false);
  - text: <code>telephoneCheck("-1 (757) 622-7382")</code> should return false
    testString: assert(telephoneCheck("-1 (757) 622-7382") === false);
  - text: <code>telephoneCheck("2 757 622-7382")</code> should return false.
    testString: assert(telephoneCheck("2 757 622-7382") === false);
  - text: <code>telephoneCheck("10 (757) 622-7382")</code> should return false.
    testString: assert(telephoneCheck("10 (757) 622-7382") === false);
  - text: <code>telephoneCheck("27576227382")</code> should return false.
    testString: assert(telephoneCheck("27576227382") === false);
  - text: <code>telephoneCheck("(275)76227382")</code> should return false.
    testString: assert(telephoneCheck("(275)76227382") === false);
  - text: <code>telephoneCheck("2(757)6227382")</code> should return false.
    testString: assert(telephoneCheck("2(757)6227382") === false);
  - text: <code>telephoneCheck("2(757)622-7382")</code> should return false.
    testString: assert(telephoneCheck("2(757)622-7382") === false);
  - text: <code>telephoneCheck("555)-555-5555")</code> should return false.
    testString: assert(telephoneCheck("555)-555-5555") === false);
  - text: <code>telephoneCheck("(555-555-5555")</code> should return false.
    testString: assert(telephoneCheck("(555-555-5555") === false);
  - text: <code>telephoneCheck("(555)5(55?)-5555")</code> should return false.
    testString: assert(telephoneCheck("(555)5(55?)-5555") === false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function telephoneCheck(str) {
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
