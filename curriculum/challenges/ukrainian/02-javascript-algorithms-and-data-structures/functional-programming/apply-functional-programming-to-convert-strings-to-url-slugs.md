---
id: 587d7dab367417b2b2512b6d
title: Застосуйте функціональне програмування для перетворення рядків в URL потоки
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

Останні кілька викликів охопили ряд корисних масивів та рядкових методів, що дотримуються принципів функціонального програмування. Ми також дізналися про `reduce`, який є потужним методом, що використовується для зменшення проблем для більш простої форми. Від середнього рівня обчислення до сортування, будь-яку масивну операцію можна досягти шляхом її застосування. Згадайте, що `map` і `filter` є особливими випадками `reduce`.

Об'єднаймо те, що ми навчилися вирішувати практичні проблеми.

Багато сайтів управління контентом (CMS) мають заголовки матеріалу, доданих до частини URL для простих закладок. Наприклад, якщо ви напишете середній пост під назвою `Stop Using Reduce`, ймовірно, що URL буде мати певний формат рядка з заголовком (`.../stop-using-reduce`). Можливо, ви вже помітили це на сайті freeCodeCamp.

# --instructions--

Заповніть функцію `urlSlug`, щоб вона конвертувала рядок `title` і повертала версію з дефісом для URL. Ви можете використати будь-який з методів, використаних у цьому розділі, і не використовуйте `replace`. Ось вимоги:

Вхідний - це рядок з пробілами і текстовими словами

Вихідний рядок з пробілами між словами, заміненим на дефіс (`-`)

Вихідний рядок повинен бути весь малими літерами

Вихідний рядок не повинен мати жодних пробілів

# --hints--

Не використовуйте метод `replace` у вашому коді для цього завдання.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`urlSlug("Winter Is Coming")` повинен повернути рядок `winter-is-coming`.

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

`urlSlug("Winter Is  Coming")`  повернути рядок `winter-is-coming`.

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

`urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` потрібно повернути рядок `a-mind-needs-books-like-a-sword-needs-needs-a-whetstone`.

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

`urlSlug(" Hold The Door")`слід повернути рядок `hold-door`.

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
