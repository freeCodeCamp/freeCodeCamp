---
id: 56533eb9ac21ba0edf2244dd
title: الاختيار من بين العديد من الخيارات باستخدام عبارات Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

إن كنت تريد الاختيار بين خيارات كثيرة، استخدم عبارة <dfn>switch</dfn>. تختبر عبارة `switch` قيمة، ومن الأمكن أن تحتوي على عديد من عبارات <dfn>case</dfn> التي تحدد قيم مختلفة ممكنة. يتم تنفيذ العبارات من أول قيمة `case` متطابقة حتى يتم العثور على `break`.

فيما يلي مثال على عبارة `switch`:

```js
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
```

تستخدم اختبارات القيم في `case` المساواة الصارمة (`===`). كلمة `break` تخبر JavaScript بالتوقف عن تنفيذ العبارات. إذا تم حذف كلمة `break`, سيتم تنفيذ العبارة التالية.

# --instructions--

اكتب عبارة switch لتختبر قيمة `val` وتعين المتغير `answer` للشروط التالية:  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` يجب أن يكون له قيمة المقطع النصي (string) `alpha`

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` يجب أن يكون له قيمة المقطع النصي `beta`

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` يجب أن يكون له قيمة المقطع النصي `gamma`

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` يجب أن يكون له قيمة المقطع النصي `delta`

```js
assert(caseInSwitch(4) === 'delta');
```

يجب ألا تستخدم أي عبارات `if` أو `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

يجب أن يكون لديك على الأقل ٣ عبارات `break`

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
```

# --solutions--

```js
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```
