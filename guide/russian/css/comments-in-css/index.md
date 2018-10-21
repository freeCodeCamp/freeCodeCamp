---
title: Comments in CSS
localeTitle: Комментарии в CSS
---
## Комментарии в CSS

Комментарии используются в CSS для объяснения блока кода или для внесения временных изменений во время разработки. Прокомментированный код не выполняется.

Синтаксис комментария в CSS работает как для одиночных, так и для многострочных комментариев. Вы можете добавить столько комментариев в таблицу стилей, сколько захотите.

```css
    /* 
        Это
        многострочный
        комментарий
    */ 
 
    /* Это комментарий для одной строки*/ 
    .group:after { 
        content: ""; 
        display: table; 
        clear: both; 
    } 
```

Используя комментарии CSS, чтобы сделать ваши таблицы стилей более читабельными, CSS будет легче поддерживать в будущем для вас или другого разработчика. Хорошая практика - использовать комментарии CSS, чтобы помочь идентифицировать части любой таблицы стилей, которые могут быть трудно понять для тех, кто не писал код.

Вы также можете сделать свои комментарии более понятными, стилизуя его.

```css
/* 
 *** 
 * SECTION FOR H2 STYLE 
 *** 
 * A paragraph where I give informations 
 * about everything that someone who reads the code 
 * but didn't write it would need to know. 
 * The asterisk around the paragraph make it more readable. 
 *** 
 */ 
 
 You can add as many comments to your stylesheet as you like. It's good practice to use CSS comments to help identify parts of any stylesheet that might be difficult to understand from a cursory glance. Comments are especially important when working in a team, when your code must be understood by others. By using CSS comments to make your stylesheets more readable, the CSS will be easier to maintain in the future. 
 
 ## Comment Formats 
 
 Comments should be used everyday in your CSS to keep in maintainable and readable by any dev who dives into said CSS. 
 Here are a few exmples to get you started of CSS comments you can use in your daily work to make your life that bit easier. 
```

CSS / \* ++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ CSS СОДЕРЖАНИЕ

1.0 - Сброс 2.0 - Шрифты 3.0 - Глобалы 4.0 - Цветовая палитра 5.0 - Заголовок 6.0 - Тело 6.1 - Слайдеры 6.2 - Изображения 7.0 - Нижний колонтитул ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ \* /

/ 1.0 - Сброс \* /

/ 2.0 - Шрифты \* /

/ 3.0 - Globals \* /

/ 4.0 - Цветовая палитра \* /

/ 5.0 - Заголовок \* /

/ 6.0 - Тело \* /
```
/************************************************************************ 
 5.1 - Sliders */ 
 
 /************************************************************************ 
 5.2 - Imagery */ 
```

/ 7.0 - Нижний колонтитул \* / \`\` \`css

h2 { font-size: 1.2em; font-family: «Ubuntu», serif; text-transform: верхний регистр; } \`\` \`

### Дополнительная информация:

*   [Документация MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
*   [Комментарии CSS от Адама Робертса](https://www.sitepoint.com/css-comments/)
*   [Советы по CSS](https://cssguidelin.es/#commenting)
