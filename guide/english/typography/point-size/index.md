---
title: Point Size
---
## Point Size

The point size is a way to introduce standardization to typography. The point size is the smallest unit of measurement. 

In metal type, point size refers to the height of the metal body on which a typeface's character is cast. In digital typefaces, the metal body is replaced by an invisible box known as the *em square*. Each character fits inside that em square or em box. The **em size of a font is equal to it's point size.** 
```css
html{
  font-size:16px;
}

body{
  font-size:1em;  // 1em is equal to 16px
}
```

The point size is also used to measure leading (line-height), line length and other elements, apart from font size.   
In digital typefaces, **one point is equal to 1/72 of an inch**. Twelve points make one pica. Six picas make one inch. A common way of representing picas and points is as follows:

- 1 pica = 1p
- 1 point = 1 pts or p1 
- 6 picas and 3 points = 6p3
- 7-point Open Sans with 9 points of leading = 7/9 Open Sans

The optimal point size for print is usually between 10-12 points while that for web, the optimal point size is between 15-25 points. 
In CSS, you should set font-size in ems or rems than pixels as the former are scalable in nature. Recently, there has been much talk about fluid typography using the newly introduced units vw and vh. Learn more about it here : [Fluid Typography](https://www.smashingmagazine.com/2016/05/fluid-typography/) 

Remember, different fonts set at the same point size will not appear to be of the same size due to their individual characteristics, namely&mdash;x-height, stroke modulation or contrast and character-width.  

#### More Information:

 * [Point Size](https://practicaltypography.com/point-size.html) Practical Typography
 * [Point Size](https://en.wikipedia.org/wiki/Point_(typography)) Wikipedia 
 * [Thinking with Type](http://amzn.to/2yDqGNR) Thinking With Type


