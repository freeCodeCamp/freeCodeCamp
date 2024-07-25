---
id: 6489cb0b82cf2e4f86f03ae3
title: Каскадність CSS. Урок №3
challengeType: 15
dashedName: the-cascade-of-css-lesson-c
---

# --description--

Розберемо декілька прикладів, щоб зрозуміти специфічність. Розглянемо такий код HTML та CSS:

```html
<!-- index.html -->

<div class="main">
  <div class="list subsection"></div>
</div>
```

```css
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

У прикладі вище обидва правила використовують лише селектори класу, але правило №2 специфічніше, оскільки використовує більше селекторів класу.

# --question--

## --text--

На основі наданого коду HTML та CSS, якого кольору буде елемент `<div class="list subsection"></div>`?

## --answers--

Синього

---

Червоного

---

Фіолетового

---

Чорного

## --video-solution--

2
