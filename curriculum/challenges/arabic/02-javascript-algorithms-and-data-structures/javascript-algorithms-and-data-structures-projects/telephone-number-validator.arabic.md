---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof telephoneCheck("555-555-5555") === "boolean", "<code>telephoneCheck("555-555-5555")</code> should return a boolean.");'
  - text: ''
    testString: 'assert(telephoneCheck("1 555-555-5555") === true, "<code>telephoneCheck("1 555-555-5555")</code> should return true.");'
  - text: ''
    testString: 'assert(telephoneCheck("1 (555) 555-5555") === true, "<code>telephoneCheck("1 (555) 555-5555")</code> should return true.");'
  - text: ''
    testString: 'assert(telephoneCheck("5555555555") === true, "<code>telephoneCheck("5555555555")</code> should return true.");'
  - text: ''
    testString: 'assert(telephoneCheck("555-555-5555") === true, "<code>telephoneCheck("555-555-5555")</code> should return true.");'
  - text: ''
    testString: 'assert(telephoneCheck("(555)555-5555") === true, "<code>telephoneCheck("(555)555-5555")</code> should return true.");'
  - text: ''
    testString: 'assert(telephoneCheck("1(555)555-5555") === true, "<code>telephoneCheck("1(555)555-5555")</code> should return true.");'
  - text: ''
    testString: 'assert(telephoneCheck("555-5555") === false, "<code>telephoneCheck("555-5555")</code> should return false.");'
  - text: ''
    testString: 'assert(telephoneCheck("5555555") === false, "<code>telephoneCheck("5555555")</code> should return false.");'
  - text: ''
    testString: 'assert(telephoneCheck("1 555)555-5555") === false, "<code>telephoneCheck("1 555)555-5555")</code> should return false.");'
  - text: ''
    testString: 'assert(telephoneCheck("1 555 555 5555") === true, "<code>telephoneCheck("1 555 555 5555")</code> should return true.");'
  - text: ''
    testString: 'assert(telephoneCheck("1 456 789 4444") === true, "<code>telephoneCheck("1 456 789 4444")</code> should return true.");'
  - text: ''
    testString: 'assert(telephoneCheck("123**&!!asdf#") === false, "<code>telephoneCheck("123**&!!asdf#")</code> should return false.");'
  - text: ''
    testString: 'assert(telephoneCheck("55555555") === false, "<code>telephoneCheck("55555555")</code> should return false.");'
  - text: ''
    testString: 'assert(telephoneCheck("(6054756961)") === false, "<code>telephoneCheck("(6054756961)")</code> should return false");'
  - text: ''
    testString: 'assert(telephoneCheck("2 (757) 622-7382") === false, "<code>telephoneCheck("2 (757) 622-7382")</code> should return false.");'
  - text: ''
    testString: 'assert(telephoneCheck("0 (757) 622-7382") === false, "<code>telephoneCheck("0 (757) 622-7382")</code> should return false.");'
  - text: ''
    testString: 'assert(telephoneCheck("-1 (757) 622-7382") === false, "<code>telephoneCheck("-1 (757) 622-7382")</code> should return false");'
  - text: ''
    testString: 'assert(telephoneCheck("2 757 622-7382") === false, "<code>telephoneCheck("2 757 622-7382")</code> should return false.");'
  - text: ''
    testString: 'assert(telephoneCheck("10 (757) 622-7382") === false, "<code>telephoneCheck("10 (757) 622-7382")</code> should return false.");'
  - text: ''
    testString: 'assert(telephoneCheck("27576227382") === false, "<code>telephoneCheck("27576227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(275)76227382&quot;)</code> يجب أن ترجع كاذبة.
    testString: 'assert(telephoneCheck("(275)76227382") === false, "<code>telephoneCheck("(275)76227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;2(757)6227382&quot;)</code> يجب أن ترجع false.
    testString: 'assert(telephoneCheck("2(757)6227382") === false, "<code>telephoneCheck("2(757)6227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;2(757)622-7382&quot;)</code> يجب أن ترجع false.
    testString: 'assert(telephoneCheck("2(757)622-7382") === false, "<code>telephoneCheck("2(757)622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;555)-555-5555&quot;)</code> يجب أن ترجع false.
    testString: 'assert(telephoneCheck("555)-555-5555") === false, "<code>telephoneCheck("555)-555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(555-555-5555&quot;)</code> يجب أن <code>telephoneCheck(&quot;(555-555-5555&quot;)</code> خطأ.
    testString: 'assert(telephoneCheck("(555-555-5555") === false, "<code>telephoneCheck("(555-555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(555)5(55?)-5555&quot;)</code> يجب أن ترجع false.
    testString: 'assert(telephoneCheck("(555)5(55?)-5555") === false, "<code>telephoneCheck("(555)5(55?)-5555")</code> should return false.");'

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
</section>
