---
id: 56533eb9ac21ba0edf2244cf
title: Збірка записів
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

Вам наданий літерал об'єкту, який є частиною вашої збірки музичних альбомів. Кожен альбом має свій унікальний ідентифікаційний номер та декілька інших властивостей. Не всі альбоми мають повну інформацію.

Ви починаєте з функції `updateRecords`, яка приймає літерал об'єкту `records`, який містить колекцію музичного альбому, `id`, `prop` (такі як `artist` чи `tracks`), і `value`. Завершіть функцію, використовуючи правила нижче, щоб змінити об'єкт, переданий до функції.

-   Ваша функція повинна завжди повертати весь об'єкт збірки записів.
-   Якщо `prop` це не `tracks` і `value` не є пустим рядком, то оновіть або встановіть `prop` альбому до `value`.
-   Якщо `prop` є `tracks` але альбом немає властивості `tracks`, створіть пустий масив та додайте `value` до нього.
-   Якщо `prop` є `tracks` та `value` не є пустим рядком, додайте `value` до кінця наявного масиву `tracks` у альбомі.
-   Якщо `value` є пустим рядком, видаліть дану властивість `prop` з альбому.

**Note:** Копія об'єкту `recordCollection` використовується для тестування.

# --hints--

Після `updateRecords(recordCollection, 5439, "artist", "ABBA")`, `artist` повинен бути рядок `ABBA`

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

After `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, `tracks` should have the string `Take a Chance on Me` as the last and only element.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

Після `updateRecords(recordCollection, 2548, "artist", "")`, не потрібно встановлювати `artist`

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

Після `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, `tracks` повинні мати рядок `Addicted to Love` останнім елементом.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

Після `updateRecords(recordCollection, 2468, "tracks", "Free")`, `tracks` повинні мати рядок `1999` першим елементом.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

Після `updateRecords(recordCollection, 2548, "tracks", "")`, не потрібно встановлювати `tracks`

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

Після `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, `albumTitle` повинно стати рядком `Riptide`

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
