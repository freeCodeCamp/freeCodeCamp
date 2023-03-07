---
id: 56533eb9ac21ba0edf2244bb
title: Пропуски у словах
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

Вам надано речення з пропущеними словами: іменниками, дієсловами, прикметниками та прислівниками. Потім ви заповнюєте пропуски словами так, щоб завершене речення мало сенс.

Розгляньте речення «It was really **\_\_\_\_**, and we **\_\_\_\_** ourselves **\_\_\_\_**». У цьому реченні відсутні три слова: прикметник, дієслово та прислівник; ми можемо додати вибрані слова, щоб завершити речення. Потім ми можемо присвоїти завершене речення змінній наступним чином:

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

У цьому завданні вам надано іменник, дієслово, прикметник та прислівник. Ви повинні завершити речення, використовуючи слова на власний вибір, а також надані нами.

Ви повинні використати оператор конкатенації `+`, щоб побудувати новий рядок, використовуючи надані змінні: `myNoun`, `myAdjective`, `myVerb` та `myAdverb`. Потім ви присвоїте сформований рядок до змінної `wordBlanks`. Ви не повинні змінювати слова, присвоєні зміннім.

Вам також потрібно врахувати пропуски у рядку, щоб завершене речення містило пробіли між усіма словами. Результатом повинне бути завершене речення.

# --hints--

`wordBlanks` має бути рядком.

```js
assert(typeof wordBlanks === 'string');
```

Ви не повинні змінювати значення, присвоєні до `myNoun`, `myVerb`, `myAdjective` або `myAdverb`.

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

Ви не повинні напряму використовувати значення `dog`, `ran`, `big` або `quickly`, щоб створити `wordBlanks`.

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` має містити всі слова, присвоєні до змінних `myNoun`, `myVerb`, `myAdjective` та `myAdverb`, розділені розділовим знаком (та додаткові слова на ваш вибір).

```js
assert(
  /\bdog\b/.test(wordBlanks) &&
    /\bbig\b/.test(wordBlanks) &&
    /\bran\b/.test(wordBlanks) &&
    /\bquickly\b/.test(wordBlanks)
);
```

# --seed--

## --after-user-code--

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');
```

## --seed-contents--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = ""; // Change this line
// Only change code above this line
```

# --solutions--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

let wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```
