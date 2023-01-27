---
id: 56533eb9ac21ba0edf2244cf
title: مجموعة السجلات (Record Collection)
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

لديك حروف الكائن التي تمثل جزء من مجموعة سجلاتك الموسيقية. يحتوي كل سجل على رقم معرف فريد يعدّ الهُوِيَّة والعديد من الخصائص الأخرى. ليست كل السجلات لديها معلومات كاملة.

أنت تبدأ بالوظيفة `updateRecords` التي تأخذ الكائن حرفي يدعي `records`، يحتوي على مجموعة ألبومات موسيقية. و `id`, و `prop` (مثل `artist` أو `tracks`)، و `value`. أكمل الوظيفة باستخدام القواعد أدناه لتعديل الكائن الممرر إلى الوظيفة.

-   الوظيفة الخاص بك يجب أن يرجع دائما كائن مجموعة السجلات بِرُمَّته.
-   إذا كان `prop` ليس `tracks` و `value` ليس مقطع فارغ، حديث أو تعيين `prop` السجلات إلى `value`.
-   إذا كان `prop` هو `tracks` ولكن السجلات ليس لديه خاصية `tracks`، أنشئ قائمة فارغة واضف إليها `value`.
-   إذا كان `prop` هو `tracks` و `value` ليس مقطع فارغ، أضف مقطع `value` إلي أخر سجل موجودة داخل قائمة `tracks`.
-   إذا كان `value` هو مقطع فارغ، قم بحذف خاصية `prop` من السجلات.

**ملاحظة:** يتم استخدام نسخة من `recordCollection` للاختبارات.

# --hints--

بعد `updateRecords(recordCollection, 5439, "artist", "ABBA")`, يجب أن يكون `artist` مقطع الآتي `ABBA`

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

بعد `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, يجب أن يحتوي `tracks` مقطع `Take a Chance on Me` كآخر عنصر والعنصر الوحيد.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

بعد `updateRecords(recordCollection, 2548, "artist", "")`, لا ينبغي تعيين `artist`

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

بعد `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, يجب أن يحتوي `tracks` مقطع `Addicted to Love` كآخر عنصر.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

بعد `updateRecords(recordCollection, 2468, "tracks", "Free")`, يجب أن يحتوي `tracks` المقطع `1999` كأول عنصر.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

بعد `updateRecords(recordCollection, 2548, "tracks", "")`, لا ينبغي تعيين `tracks`

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

بعد `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, يجب أن يحتوي `albumTitle` مقطع `Riptide` الأتي

```js
assert(
  updateRecords(_recordCollection, 1245, 'albumTitle', 'Riptide')[1245][
    'albumTitle'
  ] === 'Riptide'
);
```

# --seed--

## --before-user-code--

```js
const _recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
```

## --seed-contents--

```js
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
```

# --solutions--

```js
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') delete records[id][prop];
  else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }

  return records;
}
```
