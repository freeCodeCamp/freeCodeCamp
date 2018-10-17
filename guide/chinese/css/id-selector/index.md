---
title: ID Selector
localeTitle: ID选择器
---
## ID选择器

CSS ID选择器将样式应用于特定的html元素。 CSS ID选择器必须与HTML元素的ID属性匹配。 与可以应用于整个站点中的多个元素的类不同，特定ID可以仅应用于站点上的单个元素。 CSS ID将覆盖CSS类属性。 要选择具有特定id的元素，请写入散列（＃）字符，后跟元素的id。

### 句法

```css
#specified_id { /* styles */ } 
```

您可以将ID选择器与其他类型的选择器组合以设置非常特定的元素。

```css
section#about:hover { color: blue; } 
 
 div.classname#specified_id { color: green; } 
```

### 关于ID的说明

如果可能，应在样式时避免使用ID。因为它具有很高的特异性，只有在内联样式或在`<style>`添加样式时才能覆盖它。 ID的权重覆盖类选择器和类型选择器。

请记住，ID选择器必须与HTML元素的ID属性匹配。

```html

<div id="specified_id"><!-- content --></div> 
```

### 特异性

ID选择器具有高特异性，使其难以覆盖。类具有低得多的特异性，并且通常是样式元素的首选方式，以避免特异性问题。 [MDN的特殊性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

#### 更多信息：

[freeCodeCamp Challenge - 设置元素的ID](https://www.freecodecamp.org/challenges/set-the-id-of-an-element)

[freeCodeCamp Challenge - 使用ID属性为元素设置样式](https://www.freecodecamp.org/challenges/use-an-id-attribute-to-style-an-element)

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)