---
title: Linear Gradient
---
## Linear Gradient
You can use a CSS linear gradient to make colors transition or fade from one color to another.


### Syntax 
To create a linear gradient you must define at least two color stops.(They are the colors the transitions are created from). It is declared on either the `background` or `background-image` properties.
```css
background: linear-gradient(direction, colour-stop1, colour-stop2, ...);
```
Note: If no direction is specified, the transition is `top to bottom` by default


### Different Gradient transitions
**Top to Bottom :**
```css
background: linear-gradient(red, yellow);
```
![Top to Bottom](https://cdn.discordapp.com/attachments/261391445074771978/371702268803809301/image.png)

**Left To Right :**
To make it left to right, you add an additional parameter at the beginning of the linear-gradient starting with the word `to` followed by the direction you want the transition to go.
```css
background: linear-gradient(to right, red , yellow);
```
![Left to Right](https://cdn.discordapp.com/attachments/261391445074771978/371702990161051648/image.png)

**Diagonal Positions :**
You can also transition a gradient diagonally by specifying the direction you want the transition to go, for example: `top left` or `bottom right`.
Here's a sample for a gradient starting at top-left
```css
 background: linear-gradient(to bottom right, red, yellow);
```
![Top-left](https://cdn.discordapp.com/attachments/261391445074771978/371705382105776128/image.png)


### Using Angles to Specify Direction of the gradient
You can also use angles, to be more accurate in specifying the direction of the gradient:
```css
background: linear-gradient(angle, colour-stop1, colour-stop2);
```
The angle is specified as an angle between a horizontal line and the gradient line.
```css
background: linear-gradient(90deg, red, yellow);
```
![90 degrees](https://cdn.discordapp.com/attachments/261391445074771978/371710718698848256/image.png)



### Using more than two colors
You're not limited to just two colors, you can use as many comma separated colors as you want.
```css
background: linear-gradient(red, yellow, green); 
```
![A gradient with 3 color stops](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)

You can also use other color units like RGB or hex codes to specify the colors.


### Define where the colors will transition
Your gradient can transition wherever you want by giving your colors a value when you define the linear-gradient
```css
background: linear-gradient(to right,red 5px, yellow 25%, green 80%);
```
![transition location](https://media.discordapp.net/attachments/503920393355132940/503920497919131660/gradient.png)

In this case, the transition from red to yellow will start at 5px and finish at 25% from the left, and the transition from yellow to green will start at 25% and finish at 80% from the left.


### Hard color stops
You can not only use gradients to transition with fading colors, but you can also use it to change from one solid color to another solid color instantly
```css
background: linear-gradient(to right,red 45%, yellow 45%);
```
![Hard color stops](https://cdn.discordapp.com/attachments/261391445074771978/371716730046775318/image.png)

Here the transition from red to yellow will start at 45% and finish at 45%.


**More information:** [Linear-gradient on Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
