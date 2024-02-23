---
id: aff0395860f5d3034dc0bfc9
title: مدقق الأرقام الهواتف
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

قم بإرجاع `true` إذا كان ال string الذي تم تمريره يبدو كرقم هاتف صالح في الولايات المتحدة.

يمكن للمستخدم ملء حقل النموذج بأي طريقة يختارها طالما أنه يحتوي على تنسيق رقم أمريكي صالح. فيما يلي أمثلة على التنسيقات الصالحة للأرقام الأمريكية (راجع الاختبارات أدناه للتعرف على المتغيرات الأخرى):

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

من أجل هذا التحدي، سيتم تقديم string مثل `800-692-7753` أو `8oo-six427676;laskdjf`. وظيفتك هي التحقق من صحة رقم الهاتف الأمريكي أو رفضه استناداً إلى أي مجموعة من الصيغ المقدمة أعلاه. كود المنطقة مطلوب. إذا تم توفير كود البلد، يجب عليك تأكيد أن كود البلد هو `1`. قم بإرجاع `true` إذا كان ال string رقم هاتف أمريكي صالح؛ وإلا أرجع `false`.

# --hints--

`telephoneCheck("555-555-5555")` يجب أن يعيد boolean.

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` يجب أن يعيد `true`.

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` يجب أن يعيد `true`.

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` يجب أن يعيد `true`.

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` يجب أن يعيد `true`.

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` يجب أن يعيد `true`.

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` يجب أن يعيد `true`.

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` يجب أن يعيد `true`.

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` يجب أن يعيد `true`.

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

`telephoneCheck("11 555-555-5555")` يجب أن يعيد `false`.

```js
assert(telephoneCheck('11 555-555-5555') === false);
```

# --seed--

## --seed-contents--

```js
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```

# --solutions--

```js
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```
