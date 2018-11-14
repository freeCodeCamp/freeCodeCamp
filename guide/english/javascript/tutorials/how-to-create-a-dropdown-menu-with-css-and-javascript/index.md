---
title: How to Create a Dropdown Menu with CSS and JavaScript
---

## How to Create a Dropdown Menu with CSS and JavaScript
In this tutorial you will learn how to create a simple dropdown menu with vanilla Javascript, HTML and CSS. We will walk through the HTML, CSS and Javascript code, but paying more attention to the programming, since this is a JS tutorial. We'll use just plain JS and CSS, with no frameworks or preprocessors. The only (kind-of) exception will be importing the [Font Awesome](https://fontawesome.com/) CSS file because we'll use one of its icons.

This is targeted to developers that have an average understanding of HTML, CSS and JS. I tried to make it as clean as possible, but I won't focus too much on details here. I hope you all enjoy.

## Screenshots
This is how the code result looks like: 

Initial screen: 

<img src="https://i.imgur.com/jrnu6mE.png" width="200px"></img>


Dropdown opened: 

<img src="https://i.imgur.com/gszPtRa.png" width="200px"></img>


Dropdown with option selected: 

<img src="https://i.imgur.com/TKXxZGF.png" width="200px"></img>


#### HTML:
In this section, we will discuss the implementation of the HTML code for the demo page. 
To start off, let's see the `<head>` code
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Dropdown Example</title>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/'-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="styles.css">
</head>
```
This is basically HTML head boilerplate, with the exception of the `link` tags loading the two CSS stylesheets we will use in this tutorial: the Font Awesome styles, and the `styles.css` file, where we will define this page's styles.

Then, there's the rest of the HTML file, the body:
```html
<body>
	<div class='dropdown'>
		<div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div>
		
		<div class='menu pointerCursor hide'>
			<div class='option' id='option1'>Option 1</div>
			<div class='option' id='option2'>Option 2</div>
			<div class='option' id='option3'>Option 3</div>
			<div class='option' id='option4'>Option 4</div>
		</div>

	</div>
	<span id='result'>The result is: </span>
	<script>
	  ...
	</script>
</body>
</html>
```
This section can be divided into 3 main parts: 

* The `.dropdown` div, where the dropdown element's structure will be defined.
* The `#result` element, that will contain the selected option by the user, from the dropdown element.
* The script written into the `<script>` tag. Its implementation is hidden here, because its details will be explained in the last section of this tutorial.

The dropdown element is a `div` containing a `title` and `menu` elements. The former just defines what text will be presented on the element before any option is selected and the latter will define the options that will be selectable by the element.

The `result` element is there just to show you what option is currently selected.  

#### Styles:
Below you can check the full css code out. As you can see it makes use of CSS3 `transition` and `transform` constructs.

Please pay attention to the `.dropdown` classes definitions. These are used to define the layout for the dropdown container component as well as its inner elements, such as the `.title` and its `.option`'s.

```css
body{
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.hide {
    max-height: 0 !important;
}

.dropdown{
	border: 0.1em solid black;
	width: 10em;
	margin-bottom: 1em;
}

.dropdown .title{
	margin: .3em .3em .3em .3em;	
	width: 100%;
}

.dropdown .title .fa-angle-right{
	float: right;
	margin-right: .7em;
	transition: transform .3s;
}

.dropdown .menu{
	transition: max-height .5s ease-out;
	max-height: 20em;
	overflow: hidden;
}

.dropdown .menu .option{
	margin: .3em .3em .3em .3em;
	margin-top: 0.3em;
}

.dropdown .menu .option:hover{
	background: rgba(0,0,0,0.2);
}

.pointerCursor:hover{
	cursor: pointer;
}

.rotate-90{
	transform: rotate(90deg);
}
```

#### JavaScript:
Now we'll see how the Javascript part is implemented. We'll first go through the function definitions 
and then the code that calls these functions to make the dropdown actions happen.

Basically, there are 3 actions that take place depending on what the user interaction is, as their listeners are added to the DOM elements:
1. Clicking on the dropdown element
2. Selecting one of the dropdown options
3. Changing the currently selected option

I'd like to make it clear that we are using arrow functions( `() => {}` ) and the `const` keyword, which are ES6 features. You're probably good if you're using a recent version of your browser, but keep that in mind.

#### 1. Clicking on the dropdown element
```Javascript
function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');
}
```

When the dropdown element is clicked, it opens(if it is closed) or closes(if it is opened). This happens by binding `toggleMenuDisplay` to the click event listener on the dropdown element. This function toggles the display of its `menu` element by the use of the `toggleDisplay` and `toggleClass` functions.


#### 2. Selecting one of the dropdown options
```Javascript
function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hide');			

	const id = e.target.id;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown .title');
	const icon = document.querySelector('.dropdown .title .fa');


	titleElem.textContent = newValue;
	titleElem.appendChild(icon);
	
	//trigger custom event
	document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
	//setTimeout is used so transition is properly shown
	setTimeout(() => toggleClass(icon,'rotate-90',0));
}
```
#### 3. Changing the currently selected option
```Javascript
function handleTitleChange(e){
	const result = document.getElementById('result');

	result.innerHTML = 'The result is: ' + e.target.textContent;
}
```

The function `handleTitleChange` is bound to the custom `change` event on the `.title` element, to change the `#result` element content whenever the title element changes. This event's triggering is done on the previous section.

#### Main code
```Javascript

//get elements
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);
```

In the main section there's just some simple code to get the dropdown's title and options elements to bind to them the events discussed on the last section.

##  Demo
This application's full code and demo can be found [here](https://codepen.io/GCrispino/pen/EEXmYd).

## More Information
* [ES6 introduction](https://guide.freecodecamp.org/javascript/es6)
* [Arrow functions](https://guide.freecodecamp.org/javascript/es6/arrow-functions/)
* [Let and Const](https://guide.freecodecamp.org/javascript/es6/let-and-const/)