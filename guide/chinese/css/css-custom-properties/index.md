---
title: CSS Custom Properties
localeTitle: CSS自定义属性
---
## CSS自定义属性

CSS自定义属性也称为CSS变量。截至2018年10月，CSS定制属性仍然是一项实验性技术。在生产中使用该功能之前，请考虑[浏览器支持](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#Browser_compatibility)

### 声明自定义属性

在选择器中，使用两个连字符（ - ）和名称（后跟值）声明自定义属性。值可以是简单的，例如颜色（RGB，十六进制代码等）或大小（使用像素，em，rem等），或者它可以更复杂，如阴影定义。请参阅以下示例。

```css
:root { 
  --firstVariable: red; 
  --headerSize: 16px; 
  --dropShadow: 1px 1px 2px 2px rgba(100,100,100,0.2); 
```

在`:root`选择器中声明自定义属性使这些属性全局可用。 `:root`选择器可以被认为与`html`选择器相同。

### 使用自定义属性

要使用自定义属性，将使用`var()`函数，该函数接受自定义属性名称的单个参数。 \`\`\`CSS h1 { font-size：var（ - headerSize）; }

.card { box-shadow：var（ - dropShadow）; }
```
### Cascading Custom Properties 
 When custom properties are declared in the `:root` selector, those properties are globally available; any style rules can use the properties. If a custom property needs to be different for specific element, class, or id, a property of the same can be declared in that selector. The compiler will first look for a property name within the immediate enclosing selector, then move to the `:root`. 
```

CSS ：根 { - 色彩：红色; }

h1 { - 颜色：蓝色; }

h1 { font-color：var（ - font-color）; /\* 蓝色 \*/ }

h2 { font-color：var（ - font-color）; / \*红\* / } \`\`\`

#### 更多信息：

欲了解更多信息，请访

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
*   [W3C候选推荐文件](https://www.w3.org/TR/css-variables/)
*   [浏览器支持](https://caniuse.com/#feat=css-variables)