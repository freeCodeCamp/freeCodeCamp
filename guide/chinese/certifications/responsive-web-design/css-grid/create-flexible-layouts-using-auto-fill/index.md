---
title: Create Flexible Layouts Using auto-fill
localeTitle: 使用自动填充创建灵活布局
---
## 使用自动填充创建灵活布局

此挑战将通过向_重复_功能添加**自动填充**值来阐述先前的挑战。这将导致div的数量根据视口的大小而不是先前指定的列值进行扩展。在下面的**Before**部分中，指定了**grid-template-column**值“3”。

_请记住，以下代码段仅是示例，而不是freeCodeCamp课程的确切挑战。_

### 之前

```css
    grid-template-columns: repeat(3, minmax(50px, 2fr)); 
```

### 后

```css
    grid-template-columns: repeat(auto-fill, minmax(50px, 2fr)); 
```

* * *

### 资源

您可以参考下一页的**语法**部分来查看**自动填充**值： [Mozilla开发者网络](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)