---
id: 56533eb9ac21ba0edf2244bb
title: Пропуски у словах
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

Тепер ми використаємо наші знання про рядки, щоб створити стильну гру у слова [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs), яку ми називаємо "Пропуски в словах". Ви створите (за бажанням гумористичні) речення типу "Заповніть пропуски".

У грі "Пропуски в словах", у вас є речення з пропущеними частинами мови, наприклад, іменниками, дієсловами, прикметниками та прислівниками. Потім ви заповнюєте вибрані вами відсутні фрагменти слів так, аби завершене реченням мало сенс.

Розгляньте це речення - Було дуже **\_\_\_\_**, і ми **\_\_\_\_** себе **\_\_\_\_**. У цьому реченні відсутні три фрагменти: прикметник, дієслово та прислівник; ми можемо додати вибрані нами слова для того, щоб завершити його. Потім ми можемо призначити надіслане речення змінній наступним чином:

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

У цьому завданні у вас є іменник, дієслово, прикметник та прислівник. Вам потрібно створити завершене речення зі словами на ваш вибір, а також використати ті, які ми надаємо.

Вам потрібно використати рядок оператор конкатенації `+`, щоб створити новий, за допомогою наданих змінних: `myNoun`, `myAdjective`, `myVerb`, і `myAdverb`. Потім ви задасте сформованому рядку змінну `wordBlanks`. Не слід змінювати слова, які зазначені як змінні.

Вам також потрібно враховувати пропуски у вашому рядку для того, щоб кінцеве речення містило пробіли між усіма словами. У результаті ви маєте отримати завершене речення.

# --hints--

`wordBlanks` має бути рядком.

```js
assert(typeof wordBlanks === 'string');
```

Ви не повинні змінювати значення, задані як `myNoun`, `myVerb`, `myAdjective` або `myAdverb`.

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

Ви не повинні безпосередньо використовувати змінні `собака`, `біг`, `великий`, або `швидко` для того, щоб створити `wordBlanks`.

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` має містити всі слова, які задані як змінні: `myNoun`, `myVerb`, `myAdjective` і `myAdverb` виокремленими словами, які не є символами (а також будь-якими додатковими словами у вашій madlib).

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
