---
title: How to Create Popups
---
## How to Create Popups

Popup is a window that pops up (appears) when you select an option with a mouse or press a special function key.

In this example , the popup will appear when you click on a button and will stay on the screen until you press X option.

We will construct the popup using ```HTML``` , ```CSS``` and ```JavaScript```

### Step 1 HTML

The HTML provides the structure for the popup

```html 
<!-- div class="container" will contain the button that will open the popup when I click on it, and the popup window that will appear -->
<div class="container">
  <button id="Btn">Open The PopUp</button>
  <div class="popup_main_div">
    <p class="text">Popup with JavaScript</p>
    <div class="close_popup"><p>X</p></div>
  </div>
</div>
```

### Step 2 CSS
We will choose our own style for the popup window. Notice: the popup div should be hidden at first, so in the style I will select display: none; 


```css 
.popup_main_div{
    position: fixed;
    width: 800px;
    height: 400px;
    border: 2px solid black;
    border-radius: 5px;
    background-color: #fff;
    left: 50%;
    margin-left: -400px;
    top: 50%;
    margin-top: -250px;
    display: none; 

  }
  .close_popup{
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    border: 2px solid black;
    text-align: center;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
   .close_popup p{
     margin-top: 5px;
     font-weight: 400;

   }
   .text{
     text-align: center;
     font-size: 30px;
     font-weight: 400;
     margin-top: 22%;
   }
   #Btn{
     position: absolute;
     left: 50%;
     top:20%;

   }
```


### Step 3 JavaScript



```js
// First of all I will initialize my variables 
// Select the elements that we will use from the DOM
// I wiil add en event in the button which will trigger a function that will change the popup's display style from none to block

  const Btn=document.getElementById("Btn")
  const PopupDiv = document.querySelector(".popup_main_div")
  const ClosePopup = document.querySelector(".close_popup")
  Btn.addEventListener('click',function(){
    PopupDiv.style.display="block"
  })
  ClosePopup.addEventListener('click',function(){
    PopupDiv.style.display="none"
  })

```

Live code in : [Codepen.io](https://codepen.io/voula12/pen/qyyNeK)
