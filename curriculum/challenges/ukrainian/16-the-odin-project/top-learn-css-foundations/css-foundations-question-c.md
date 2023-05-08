---
id: 63ee352b0d8d4841c3a7091c
videoId: LGQuIIv2RVA
title: Основи CSS. Запитання C
challengeType: 15
dashedName: css-foundations-question-c
---

# --description--

Що робити, якщо у вас є дві групи елементів, які мають спільні оголошення стилів?

```css
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
```

Обидва селектори (`.read` та `.unread`) мають спільні оголошення `color: white;` та `background-color: black;`, але окрім них вони мають декілька власних унікальних оголошень. Щоб зменшити повторення, ви можете згрупувати ці два селектори разом у вигляді списку, розділеного комами:

```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

Обидва наведені вище приклади (з групуванням і без нього) матимуть однаковий результат, але другий приклад зменшує повтори оголошень та полегшує одночасне редагування `color` чи `background-color` для обох класів.

# --question--

## --text--

Як би ви застосували одне правило до двох різних селекторів: `.red-box` та `.yellow-box`?

## --answers--

```css
.red-box,
.yellow-box {
  width: 25px;
  height: 25px;
}
```

---

```css
.red-box {
  width: 25px;
  height: 25px;
}

.yellow-box {
  width: 25px;
  height: 25px;
}
```

---

```css
.red-box { 
  width: 25px;
  .yellow-box {
    height: 25px;
  }
}
```

## --video-solution--

1
