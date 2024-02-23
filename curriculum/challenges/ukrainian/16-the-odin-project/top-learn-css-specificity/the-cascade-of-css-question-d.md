---
id: 6489cf5882cf2e4f86f03ae5
title: Каскадність CSS. Запитання D
challengeType: 15
dashedName: the-cascade-of-css-question-d
---

# --description--

Тепер додамо трішки змін:

```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection"></div>
</div>
```

```css
/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

Хоча правило №2 у прикладі вище має більше селекторів класу ніж селекторів ID, специфічнішим є правило №1, оскільки ID перемагає клас.

# --question--

## --text--

На основі зміненого коду HTML та CSS, якого кольору буде елемент `<div class="list" id="subsection"></div>`?

## --answers--

оранжевого

---

червоного

---

синього

---

блакитного

## --video-solution--

3
