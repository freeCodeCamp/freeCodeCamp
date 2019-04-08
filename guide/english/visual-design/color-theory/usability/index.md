---
title: Color and Usability
---
## Color and Usability

Like the variances in [representation of color by visual displays](/visual-design/color-theory/index.md), human eyes and brain interpret colors in a variety of ways.

About one in twenty people have color blindness.[2]
That's almost a 376 million people!
Color blindness is when a range of different colors are interpreted as hues of one color.
Sometimes a person does not know that they experience color blindness, because the colors "look normal" to them.
This has serious implications for contrasting colors between letters and their backgrounds, and for alerts, where color conveys a context of importance for example.
Even something as simple as conveying 'stop' and 'go' is problematic, since the most common form of color blindness is where red and green appear the same.


Over one percent of the population has [other kinds of significant visual loss (Wikipedia.org)](https://en.wikipedia.org/wiki/Visual_impairment).
Losses may include sensitivity to too much or too little contrast, distortions, and limits in the range of viewing clarity (nearsightedness or farsightedness).

Computer screens are capable of displaying contrasts that are about double of contrasts available on paper. 


Here are guidelines to help meet design challenges of accommodating these variances while not adversely affecting others' experience.
These guidelines also help [adaptive technology (Wikipedia.org)](https://en.wikipedia.org/wiki/Assistive_technology#Visual_impairments) work more effectively.

### Definitions

**brightness** To determine brightness for the guidelines, sum the RGB color values. If a font has RGB color (255,0,0) this means it has 100% red, and 0% green and blue light. It's brightness is 255 + 0 + 0 = 255.
Maximum brightness is white with 255 + 255 + 255 = 765.

**contrast** To determine contrast for the guidelines, subtract the *brightness* between two colors.

### Guidelines

 1. Avoid exceeding paper-level contrasts in text.  Differ brightness between text and text background at least 300 if not 400 --a little more for small fonts, less for larger fonts. 
If the font color is Red, the RGB value might be (255,0,0) is a brightness of 255 out of 765.
If the background is yellow, the RGB value might be (255,255,0) = 510.
The difference between 510 and 255 is 255. 
This example contrast is too low, and brings us to the next guideline.

 2. For purposes of checking contrast and adapting color blindness, assume red and green primary colors are the same color.
The most common form of color blindness sees red and green similarly.
This means for effectiveness with important communication, consider that the colors Red RGB(255,0,0), Green RGB(0,255,0) and "Olive"[1] RGB(127,127,0) are essentially the same color with the same contrast.
For calculating contrast, yellow RGB(255,255,0) has double the brightness of any one primary color.
The two primary colors still produce twice the brightness of one.

### Summary

The good news is that there is still lots of flexibility available in choosing an effective color pallet that is palatable to readers.

 

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
#### Useful color scheme picker websites:

1. [Adobe Color](https://color.adobe.com)
2. [Paletton](http://paletton.com)

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

1. [Web colors (Wikipedia.org)](https://en.wikipedia.org/wiki/Web_colors#Web-safe_colors)

2. [Color blindness (Wikipedia.org)](https://en.wikipedia.org/wiki/Color_blindness)
