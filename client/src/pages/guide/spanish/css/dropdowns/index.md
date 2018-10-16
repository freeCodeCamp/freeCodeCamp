---
title: Dropdowns
localeTitle: Listas deplegables
---
## Listas deplegables

Los menús desplegables se utilizan en CSS para ocultar una lista predefinida dentro de un botón.

Ejemplos:

```html

<div class="dropdown"> 
  <button class="dropbtn">Name</button> 
  <div class="dropdownContent"> 
    <a href="#">One</a> 
    <a href="#">Two</a> 
    <a href="#">Three</a> 
  </div> 
 </div> 
```

Entonces deberías personalizar las clases en css.

```css
.dropdown { 
  position: relative; 
  display: inline-block; 
 } 
 
 .dropbtn { 
  background-color: red; 
  padding: 10px; 
 } 
 
 .dropdown-content { 
  display: none; 
  position: absolute; 
 } 
 
 .dropdown:hover .dropdown-content { 
  display:block; 
 } 
```

Necesita las clases div separadas para crear el botón y otra div para separar la lista de lo que contiene el botón.

#### Un ejemplo

```html

<div id="container"> 
 
        <div id="myNav1" class="overlay"> 
 
            <div class="overlay-content" id="myNav1-content"> 
 
                <div> 
                    <a href="#" id="list1_obj1" class="list1" >Content 1</a> 
                </div> 
                <div> 
                    <a href="#" id="list1_obj2" class="list1" >Content 2</a> 
                </div> 
 
            </div> 
 
         </div> 
 
         <div id="myNav2" class="overlay"> 
 
             <a href="javascript:void(10)" class="closebtn" onclick="closeNav()">&times</a> 
            <div class="overlay-content" id="myNav2-content"> 
 
                <div> 
                    <a href="#" id="list2_obj1" class="list2" >Content 3</a> 
                </div> 
                <div> 
                   <a href="#" id="list2_obj2" class="list2" >Content 4</a> 
                </div> 
                <div> 
                  <a href="#" id="list2_obj3" class="list2" >Content 5</a> 
                </div> 
 
            </div> 
 
         </div> 
 
 </div> 
```

```css
#myNav1 { 
    height: 0; 
    width: 50%; 
    position: fixed; 
    z-index: 6; 
    top: 0; 
    left: 0; 
    background-color: #ffff; 
    overflow: hidden; 
    transition: 0.3s; 
    opacity: 0.85; 
 } 
 
 #myNav2 { 
    height: 0; 
    width: 50%; 
    position: fixed; 
    z-index: 6; 
    bottom: 0; 
    right: 0; 
    background-color: #ffff; 
    overflow: hidden; 
    transition: 0.3s; 
    opacity: 0.85; 
 } 
 
 .overlay-content { 
    position: relative; 
    width: 100%; 
    text-align: center; 
    margin-top: 30px; 
 } 
 
 #myNav1-content{ 
    top: 12%; 
    left: 5%; 
    display: none; 
 } 
 
 #myNav2-content{ 
    top: 12%; 
    right: 10%; 
    display: none; 
 } 
```

#### Más información:

*   Botón desplegable W3 School Dropdown: [enlace a W3 School](https://www.w3schools.com/howto/howto_css_dropdown.asp)
*   W3 School Dropdowns: [Enlace a W3 School](https://www.w3schools.com/css/css_dropdowns.asp)