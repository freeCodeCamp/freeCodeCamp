---
title: Manipulating Complex Objects
localeTitle: 操纵复杂对象
---
## 操纵复杂对象

这是一个例子：

```javascript
var myMusic = [ 
  { 
    "artist": "Billy Joel", 
    "title": "Piano Man", 
    "release_year": 1973, 
    "formats": [ 
      "CD", 
      "8T", 
      "LP" 
    ], 
    "gold": true 
  } 
  // Add record here 
 ]; 
```

这是一个解决方案： 字符串`// Add record here`我们将新专辑添加到`myMusic` 。你需要从`,`开始。你可以复制已经创建的相册： `javascript { "artist": "Billy Joel", "title": "Piano Man", "release_year": 1973, "formats": [ "CD", "8T", "LP" ], "gold": true }`

粘贴后`,` ：

```javascript
  // Add record here 
  , 
  { 
    "artist": "Billy Joel", 
    "title": "Piano Man", 
    "release_year": 1973, 
    "formats": [ 
      "CD", 
      "8T", 
      "LP" 
    ], 
    "gold": true 
  } 
 ]; 
```

现在，您可以更改相册的值：

```javascript
  // Add record here 
  , 
  { 
    "artist": "Deep Purple", 
    "title": "Smoke on the water", 
    "release_year": 1976, 
    "formats": [ 
      "CD", 
      "8T", 
      "LP" 
    ], 
    "gold": true 
  } 
 ]; 
```

这是一个完整的解决方案：

\`\`\`的JavaScript var myMusic = \[ { “艺术家”：“比利乔尔”， “头衔”：“钢琴侠”， “发布_年份”：1973年， “格式”：\[ “光盘”， “8T” “LP” \] “黄金”：是的 }， //在这里添加记录 { “艺术家”：“深紫色”， “标题”：“在水面上冒烟”， “发行_年份”：1976年， “格式”：\[ “光盘”， “8T” “LP” \] } \]。

\`\`\`