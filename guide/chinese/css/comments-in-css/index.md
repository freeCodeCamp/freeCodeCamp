---
title: Comments in CSS
localeTitle: CSS中的评论
---
## CSS中的评论

CSS中使用注释来解释代码块或在开发期间进行临时更改。注释的代码不会执行。

CSS中的注释语法适用于单行注释和多行注释。您可以根据需要在样式表中添加任意数量的注释。

```css
    /* 
        This is 
        a multi-line 
        comment 
    */ 
 
    /* This is a single line comment*/ 
    .group:after { 
        content: ""; 
        display: table; 
        clear: both; 
    } 
```

通过使用CSS注释使您的样式表更具可读性，将来您或其他开发人员将更容易维护CSS。 最好使用CSS注释来帮助识别任何样式表中可能难以理解的部分。

您还可以通过样式化使您的评论更具可读性。

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

CSS / \* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ CSS目录

1.0 - 重置 2.0 - 字体 3.0 - 全球 4.0 - 调色板 5.0 - 标题 6.0 - 身体 6.1 - 滑块 6.2 - 图像 7.0 - 页脚 ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++++++++++++++++ +++++++++++++++++++++++++++++

/ 1.0 - 重置\* /

/ 2.0 - 字体\* /

/ 3.0 - 全球\* /

/ 4.0 - 调色板\* /

/ 5.0 - 标题\* /

/ 6.0 - 身体\* /
```
/************************************************************************ 
 5.1 - Sliders */ 
 
 /************************************************************************ 
 5.2 - Imagery */ 
```

/ 7.0 - 页脚\* / \`\`\`css

h2 { font-size：1.2em; font-family：“Ubuntu”，serif; text-transform：大写; } \`\`\`

### 更多信息：

*   [MDN文档](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
*   [CSS评论由Adam Roberts撰写](https://www.sitepoint.com/css-comments/)
*   [CSS指南](https://cssguidelin.es/#commenting)