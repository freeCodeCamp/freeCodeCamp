---
title: Tables
localeTitle: 表
---
## ##表

#### 基本表

为了实现基本样式示例，将基类`.table`添加到任何`<table>`元素。

**例**
```
<table class="table"> 
  ... 
 </table> 
```

![基本表](https://github.com/TroyB12/Pictures/blob/master/Basic%20Table.PNG)

* * *

#### 表条纹

为了在表中实现条纹行效果（斑马条纹），除了`.table`之外， `.table`在任何`<table>`元素上使用`.table-striped` 。条带化表格通过`:nth-child` CSS选择器设置样式，这在Internet Explorer 8中不可用。
```
<table class="table table-striped"> 
  ... 
 </table> 
```

![条纹表](https://github.com/TroyB12/Pictures/blob/master/Table%20Striped.PNG)

* * *

#### 表有边框

为了实现`.table-bordered` ，除了`.table`之外， `.table`在任何`<table>`元素上使用`.table-bordered` `.table` 。
```
<table class="table table-bordered"> 
  ... 
 </table> 
```

![边界表](https://github.com/TroyB12/Pictures/blob/master/Table%20Bordered.PNG)

* * *

#### 表格悬停

为了实现对表的悬停行效果，除了`.table`之外， `.table`在任何`<table>`元素上使用`.table-bordered` `.table` 。
```
<table class="table table-hover"> 
  ... 
 </table> 
```

![悬停表](https://github.com/TroyB12/Pictures/blob/master/Table%20Hover.PNG)

* * *

#### 表浓缩

为了实现精简表，在任何`<table>`元素上除了`.table`之外还使用`.table-condensed` 。
```
<table class="table table-condensed"> 
  ... 
 </table> 
```

![凝聚表](https://github.com/TroyB12/Pictures/blob/master/Table%20Condensed.PNG)

* * *

#### 表响应

通过将任何`.table`表包装在`.table-responsive`元素中来实现响应表。

...

![响应表](https://github.com/TroyB12/Pictures/blob/master/Table%20Responsive.PNG)

* * *

开发人员可以使用**上下文类**来更改每个单独行和/或单元格的样式。

*   `.active` - 将悬停颜色应用于特定行或单元格
    
*   `.success` - 表示成功或积极的操作
    
*   `.info` - 表示中立的信息更改或操作
    
*   `.warning` - 表示可能需要注意的警告
    
*   `.danger` - 表示危险或潜在的负面行为
    
    ... ... ... ... ...
    
    ... ... ... ... ...
    

![上下文类表](https://github.com/TroyB12/Pictures/blob/master/Table%20Contextual%20Classes.PNG)

* * *