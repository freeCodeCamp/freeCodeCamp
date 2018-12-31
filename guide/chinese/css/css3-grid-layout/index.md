---
title: CSS Grid Layout
localeTitle: CSS网格布局
---
## CSS网格布局

CSS Grid Layout是CSS中最强大的布局系统。 它是一个二维系统，意味着它可以处理列和行，不像flexbox主要是一维系统。 虽然并非所有浏览器都完全支持网格布局，但它是制作页面布局的最先进和最方便的方法。

### 如果使用CSS网格
在你的container內加入 `display: grid`
```
<div class="container">
  <!--  你的內容  -->
</div>
```

```
.container {
  display: grid;
}
```

### 如果使用CSS网格
```
<div class="container">
  <div class="box">Box A</div>
  <div class="box">Box B</div>
  <div class="box">Box C</div>
  <div class="box">Box D</div>
</div>
```

```
.container {
  display: grid;
}
```

下一步你需要設定GRID的行數和排數和子項目的位置
```
<div class="container">
  <div class="box box-a"><strong>Tomato:</strong> Box A</div>
  <div class="box box-b"><strong>Orange:</strong>Box B</div>
  <div class="box box-c"><strong>Gold: </strong>Box C</div>
  <div class="box box-d"><strong>Chocolate:</strong>Box D</div>
</div>
```

```
*, *::after, *::before { box-sizing: border-box;}

/* 使用GRID */
.container {
  width: 80vw;
  margin: 80px auto;
  padding: 0;
  display: grid;
/* 設定你需要的行數的宽度 */
  grid-template-columns: 1fr 2fr 3fr;
/* 設定你需要的排數的高度 */
  grid-template-rows: 15vh;
/* 
  設定你需要的行數和排數的间隙 
  行數 20px，排數 10px
*/
  grid-gap: 10px 20px;
}

.box {
  text-align: center;
  border-right: 5px #000 solid;
  border-left: 5px #000 solid;
}

/* 設定你需要的行數的位置 */
.box-a {
  background: tomato;
  grid-column: 1/-1;
}

.box-b {
  background: orange;
  grid-column: 1/3;
}

.box-c {
  background: gold;
  grid-column: 3;
  grid-row: 2/4;
}

.box-d {
  background: chocolate;
  grid-column: 2;
}



```


#### 更多信息：

有关更多信息，请阅读 [](http://chris.house/blog/a-complete-guide-css-grid-layout/) Chris House [完整的CSS网格布局指南](http://chris.house/blog/a-complete-guide-css-grid-layout/) 。

有关浏览器支持的更多信息，请访问[https://caniuse.com](https://caniuse.com/#feat=css-grid) 。
