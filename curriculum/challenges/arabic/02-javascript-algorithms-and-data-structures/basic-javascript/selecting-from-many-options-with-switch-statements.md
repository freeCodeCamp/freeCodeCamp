---
id: 56533eb9ac21ba0edf2244dd
title: الاختيار من بين العديد من الخيارات باستخدام عبارات Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

إذا كان لديك العديد من الخيارات للاختيار من بينهما، استخدم عبارة <dfn>switch</dfn>. تختبر عبارة `switch` قيمة ويمكن أن تحتوي على العديد من عبارات <dfn>case</dfn> التي تحدد القيم المختلفة الممكنة. يتم تنفيذ العبارات من أول قيمة `case` متطابقة حتى يتم العثور على `break`.

فيما يلي مثال على عبارة `switch`:

```js
switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

يتم اختبار قيم `case` مساواة تامة strict equality (`===`). كلمة `break` تخبر JavaScript بالتوقف عن تنفيذ العبارات. إذا تم حذف كلمة `break`, سيتم تنفيذ العبارة التالية.

# --instructions--

اكتب عبارة switch تختبر `val` وتعين `answer` للشروط التالية:  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` يجب أن يكون له قيمة السلسلة (string) النصية `alpha`

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` يجب أن يكون له قيمة السلسلة (string) النصية `beta`

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` يجب أن يكون له قيمة السلسلة (string) النصية `gamma`

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` يجب أن يكون له قيمة السلسلة (string) النصية `delta`

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
