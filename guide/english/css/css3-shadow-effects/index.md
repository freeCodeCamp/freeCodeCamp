---
title: CSS3 Shadow Effects
---
## CSS3 Shadow Effects

With CSS3 you can create two types of shadows: `text-shadow` (adds shadow to text) and `box-shadow` (adds shadow to other elements).

### CSS3 Text Shadow
The `text-shadow` property can take up to four values:
* the horizontal shadow
* the vertical shadow
* the blur effect
* the color

##### Examples:
* Normal text shadow
```css
h1 {
	text-shadow: 2px 2px 5px crimson;
}
```
![Normal text shadow example](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow1.png)

* Glowing text effect
```css
h1 {
	text-shadow: 0 0 4px #00FF9C;
}
```
![Glowing text example](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow2.png)


#### Multiple Shadows
To achieve this, you simply add a comma between two (or more) sets of values:

```css
h1 {
	color: white;
	text-shadow: 0 0 3px #F10D58, 0 0 7px #4578D5;
}
```
![Multiple shadows example with white text](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow3.png)


### CSS3 Box Shadow
The `box-shadow` property can take up to six values:
* (optional) the `inset` keyword (changes the shadow to one inside the frame)
* the horizontal shadow
* the vertical shadow
* the blur effect
* the spreading
* the color

##### Examples:
```css
.first-div {
	box-shadow: 1px 1px 5px 3px grey;
}

.second-div {
	box-shadow: 0 0 5px 1px lightgrey;
}

.third-div {
	box-shadow: inset 0 0 15px 5px rgba(0,0,0,0.75);
}
```
![Box-shadow examples](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/box-shadows.png)


#### More Information:
* <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b' target='_blank' rel='nofollow'>MDN web docs</a>
* <a href='https://caniuse.com/#search=box-shadow' target='_blank' rel='nofollow'>Check for browser support</a>
* <a href='https://www.cssmatic.com/box-shadow' target='_blank' rel='nofollow'>CSS box-shadow generator</a> (feel free to experiment with box-shadows)


