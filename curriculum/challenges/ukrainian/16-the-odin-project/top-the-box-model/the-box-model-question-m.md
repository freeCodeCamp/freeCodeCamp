---
id: 64a674c27a7d00f97013ed14
videoId: rIO5326FgPE
title: Блокова модель. Запитання M
challengeType: 15
dashedName: the-box-model-question-m
--- 
# --description--

Оскільки блокова модель є основним поняттям, зануримось у нього глибше завдяки [уроку з MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model). Він охоплює той самий матеріал, що й відео вище та ознайомить вас з вбудованими блоками, які ми розглянемо в наступному уроці. Зверніть увагу на приклади та приділіть деякий час, щоб поекспериментувати з редактором у браузері!

# --question--

## --text--

Як налаштувати альтернативну блокову модель для всіх елементів?

## --answers--

```css
html {
    box-sizing: inherit;
}
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

---

```css
* {
    box-sizing: border-box;
}
```

---

```css
html {
  box-sizing: border-box;
}
* {
  box-sizing: inherit;
}
```

---

```css
html {
    box-sizing: border-box;
}
*,
*::before,
*::after {
    box-sizing: inherit;
}
```



## --video-solution--

4
