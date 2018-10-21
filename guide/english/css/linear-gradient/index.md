---
title: Linear Gradient
---
## Linear Gradient

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/linear-gradient/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

In Linear Gradient, the colors flow in a single direction, i.e- From Left to Right, Top to Bottom, or any angle you choose.

![A gradient with Two colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371707961422118912/image.png)


**A Linear gradient with Two colour stops**

### Syntax- 
To create a linear gradient you must define atleast two colour stops.(They are the colours the transitions are created among).It is declared on either the **background** or **background-image** properties.

```
background: linear-gradient(direction, colour-stop1, colour-stop2, ...);
```
**Note: If no direction is Specified, the transition is Top to Bottom by default**

### Different Gradient transitions-

**Top to Bottom :**
```
background: linear-gradient(red, yellow);
```
![Top to Bottom](https://cdn.discordapp.com/attachments/261391445074771978/371702268803809301/image.png)

**Left To Right :**

To make it left to right, you add an additional parameter at the beginning of the linear-gradient() starting with the word **to** which indicates the direction:
```
background: linear-gradient(to right, red , yellow);
```
![Left to Right](https://cdn.discordapp.com/attachments/261391445074771978/371702990161051648/image.png)

**Diagonal Positions :**

You can also transition a gradient diagonally by specifying the horizontal and vertical starting positions, for example, top-left, or bottom-right.

Here's a sample for a gradient starting at top-left-
```
 background: linear-gradient(to bottom right, red, yellow);
```
![Top-left](https://cdn.discordapp.com/attachments/261391445074771978/371705382105776128/image.png)


### Using Angles to Specify Direction of the gradient-

You can also use angles, to be more accurate in specifying the direction of the gradient:
```
background: linear-gradient(angle, colour-stop1, colour-stop2);
```
The angle is specified as an angle between a horizontal line and the gradient line.

```
background: linear-gradient(90deg, red, yellow);
```
![90 degrees](https://cdn.discordapp.com/attachments/261391445074771978/371710718698848256/image.png)

### Using more than two colours-

You're not limited to just two colours, you can use as many comma seperated colours as you want.
```
background: linear-gradient(red, yellow, green); 
```
![A gradient with 3 colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)

You can also use other colour syntaxes like RGB or hex codes to specify the colors.

### Hard colour stops-

You can not only use gradients to transition with fading colours, but you can also use it to change from one solid colour to another solid colour instantly
```
background: linear-gradient(to right,red 15%, yellow 15%);
```
![Hard colour stops](https://cdn.discordapp.com/attachments/261391445074771978/371716730046775318/image.png)


**More information-** [Linear-gradient on Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
