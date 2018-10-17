---
title: Cards
localeTitle: 牌
---
## #Bootstrap 4卡

*   使用Bootstrap 4可以创建卡片。
    
*   卡片是带边框的盒子，内部有一些填充物，可以方便地显示一组特定的信息。
    

##### 要创建一个基本的Bootstrap 4卡，您需要创建一个带有`.card`类的`<div>`容器，并在另一个带有`.card-body`类的`<div>`容器中`.card-body`

###### 这就是它在html doc中的外观

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-body">Content</div> 
 </div> 
```

## ＃＃＃ 页眉和页脚

可以通过添加页眉和页脚来增强卡的结构。要添加其中一个元素，必须使用`.card-header`或`.card-footer`类创建`<div>`容器。

###### 这就是它在html doc中的外观

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-header">Header content</div> 
  <div class="card-body">Body content</div> 
  <div class="card-footer">Footer content</div> 
 </div> 
```

## ###卡片与图像

*   您还可以使用特定的类来显示卡片中的图像。
    
*   为此目的有两个类：card-img-top，它将图像放在卡片的顶部;而card-img-bottom，将图像放在底部，两者都使它们适合圆形边框。卡整齐地。
    
*   这些类必须与卡内的`<img>`标签一起使用才能正常工作。
    
*   请记住，如果您希望图像跨越整个宽度，则可以使用card-body类将图像容器添加到`<div>`容器之外。
    

###### 这就是它在html doc中的外观

```html

<div class="card"> 
 <!-- content of the card goes here --> 
 <!-- image on the top of the content --> 
  <img src="picture.jpg" alt="Picture" class="card-img-top"> 
  <div class="card-body">Body content</div> 
 </div> 
 <div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-body">Body content</div> 
 <!-- image on the bottom of the content --> 
  <img src="picture.jpg" alt="Picture" class="card-img-bottom"> 
 </div> 
```

## ###卡片叠加

*   要将图像放入卡片的背景并在其上显示文本，您需要在要在图像上显示的内容上使用class card-img-overlay，而不是使用卡片体类。

###### 这就是它在html doc中的外观

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <img src="picture.jpg" alt="Picture" class="card-img-top"> 
 <!-- this content is displayed over the image, which is now in the background and covers the whole element --> 
  <div class="card-img-overlay">Overlay content</div> 
 </div> 

```