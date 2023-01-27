---
id: 587d7b7c367417b2b2512b19
title: تعديل كائن متداخل داخل كائن (Modify an Object Nested Within an Object)
challengeType: 1
forumTopicId: 301164
dashedName: modify-an-object-nested-within-an-object
---

# --description--

ألقي نَّظْرَة على كائن أكثر تعقيداً قليلاً. يمكن أن تكون خصائص object متداخلة إلى عمق اعتباطي، ويمكن أن تكون قيمهم أي نوع من البيانات المدعومة من قبل JavaScript، بما في ذلك القائمات (arrays) حتى الكائنات (objects) أخرى. انظر إلى ما يلي:

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

`nestedObject` له ثلاث خواص: `id` (القيمة رَقَم)، `date` (القيمة هي string)، و `data` (القيمة object مع بنيته المتداخلة). ومع أن الهياكل يمكن أن تصبح معقدة بسرعة، إلا أننا لا نزال نستطيع استخدام نفس الوظائف للوصول إلى المعلومات التي تحتاجها. لتعيين قيمة `10` إلى خاصية `busy` من object المتداخل `onlineStatus`، نحن نستخدم dot notation للإشارة إلى الخاصية:

```js
nestedObject.data.onlineStatus.busy = 10;
```

# --instructions--

هنا تعرف كائن `userActivity`، الذي يتضمن object آخر داخله. عيّن قيمة هُوِيَّة `online` بقيمة `45`.

# --hints--

`userActivity` يجب أن يحتوي على الخواص `id`, و `date`, و `data`.

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

`userActivity` يجب أن يحتوي على هُوِيَّة `data` بقيمة object يحتوي على الهُوِيَّات الآتية `totalUsers` و `online`.

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

الخاصية `online` المتداخلة في هُوِيَّة `data` من `userActivity` يجب أن تكون قيمتها `45`

```js
assert(userActivity.data.online === 45);
```

يجب تعيين خاصية `online` باستخدام dot او علامات الأقواس.

```js
assert.strictEqual(code.search(/online: 45/), -1);
```

# --seed--

## --seed-contents--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);
```

# --solutions--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```
