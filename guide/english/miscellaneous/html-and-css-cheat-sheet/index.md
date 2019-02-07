---
title: HTML and CSS Cheat Sheet
---
This a page that (hopefully) in time will grow to cover the basic and simple HTML and CSS solutions.

Please add to your alternate solutions if you know a different way.

## Making a `<hr>` horizontal rule smaller
```css
    hr {
      width: 75%;
      margin-left: auto;
      margin-right: auto;
    }
```
## Giving a `<div>` non scrolling background
```css
    #divName {
      padding-top: 50px;
      height: 500px;
      color: #fff;
      background-image: url("your_url.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 100%;
    }
```
Try different values to see the how it affects the div and over in the html

```html
<div id="divName" class="container-fluid">
```

## Vertical alignment (for one line of text)

This can be of use in a CSS navigation menu. The key is to make the height of the menu and the line-height of the text the same.
```css
.nav li{
     line-height:50px;
     height:50px;
 }
 ```
 More neat tricks <a href = "https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/" target = '_blank' rel='nofollow'>can be found here</a>

## Drop Caps

A drop caps is a large capital letter letter used at the beginning of a text block.
```css
p:first-letter{
    display:block;
    float:left;
    margin:3px;
    color:#f00;
    font-size:300%;
    }
 ```

## Center a horizontal list

<a href='http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/' target='_blank' rel='nofollow'>http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/</a>

## Sections and Outlines of an HTML Document

<a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document' target='_blank' rel='nofollow'>https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document</a>
