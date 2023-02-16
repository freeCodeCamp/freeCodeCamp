---
id: 587d7dab367417b2b2512b6d
title: Застосування функційного програмування для перетворення рядків на URL-слаги
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

Декілька попередніх завдань охоплювали ряд корисних методів масивів та рядків, які дотримуються принципів функційного програмування. Ми також дізналися про потужний метод `reduce`, який використовується для скорочення задач. За його допомогою можна виконати будь-яку операцію над масивом: від обчислення до сортування. Пригадайте, що `map` та `filter` є особливими випадками `reduce`.

Об’єднаємо вивчене, щоб розв’язати практичне завдання.

Багато сайтів керування вмістом (CMS) додають заголовки дописів до частини URL в цілях соціальних закладок. Наприклад, якщо ви напишете середній допис під назвою `Stop Using Reduce`, ймовірно, URL міститиме заголовок (`.../stop-using-reduce`). Можливо, ви вже помітили це на сайті freeCodeCamp.

# --instructions--

Заповніть функцію `urlSlug` так, щоб вона конвертувала рядок `title` та повертала URL, написану через дефіси. Ви можете використати будь-який з методів, описаних у цьому розділі, але не використовуйте `replace`. Ось вимоги:

Вхідними даними є рядок зі словами з великої літери, розділеними пробілом

Вихідними даними є рядок зі словами, де пробіли замінено на дефіс (`-`)

Вихідні дані повинні бути у нижньому регістрі

Вихідний рядок не повинен мати жодних пробілів

# --hints--

Ваш код не повинен використовувати метод `replace` у цьому завданні.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`urlSlug("Winter Is Coming")` має повертати рядок `winter-is-coming`.

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

`urlSlug(" Winter Is  Coming")` має повертати рядок `winter-is-coming`.

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

`urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` має повертати рядок `a-mind-needs-books-like-a-sword-needs-a-whetstone`.

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

`urlSlug("Hold The Door")` має повертати рядок `hold-the-door`.

```js
assert(urlSlug('Hold The Door') === 'hold-the-door');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```

# --solutions--

```js
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```
