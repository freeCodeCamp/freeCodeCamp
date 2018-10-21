---
title: Cards
localeTitle: Карты
---
## \# Bootstrap 4 Cards

*   Используя Bootstrap 4, вы можете создавать карты.
    
*   Карты - это прямоугольники с небольшим количеством дополнений вокруг содержимого внутри них, которые могут использоваться для удобного отображения определенного набора информации.
    

##### Чтобы создать базовую карту Bootstrap 4, вам необходимо создать контейнер `<div>` с классом `.card` и внутри другого контейнера `<div>` с классом `.card-body`

###### Вот как он будет выглядеть в html-документе

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-body">Content</div> 
 </div> 
```

## \### Верхний и нижний колонтитулы

Структура карты может быть увеличена добавлением заголовка и нижнего колонтитула. Чтобы добавить один из этих элементов, вам нужно создать контейнер `<div>` с `.card-header` или `.card-footer` .

###### Вот как он будет выглядеть в html-документе

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-header">Header content</div> 
  <div class="card-body">Body content</div> 
  <div class="card-footer">Footer content</div> 
 </div> 
```

## \### Карты с изображениями

*   Вы также можете использовать определенные классы для отображения изображений в карточках.
    
*   Для этой цели есть два класса: card-img-top, который помещает изображение в верхнюю часть карты и карту-img-bottom, которая помещает изображение снизу, причем оба они подгоняют их к закругленной границе карту аккуратно.
    
*   Эти классы должны использоваться с `<img>` внутри карты для правильной работы.
    
*   Имейте в виду, что если вы хотите, чтобы изображение охватывало всю ширину, вы добавляли бы контейнер изображения вне контейнера `<div>` с классом body-body.
    

###### Вот как он будет выглядеть в html-документе

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

## \### Наложение карт

*   Чтобы сделать изображение на фоне карты и отобразить текст поверх нее, вам нужно использовать класс-img-overlay для содержимого, которое вы хотите отображать на изображении, вместо использования класса карты-тела ,

###### Вот как он будет выглядеть в html-документе

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <img src="picture.jpg" alt="Picture" class="card-img-top"> 
 <!-- this content is displayed over the image, which is now in the background and covers the whole element --> 
  <div class="card-img-overlay">Overlay content</div> 
 </div> 

```