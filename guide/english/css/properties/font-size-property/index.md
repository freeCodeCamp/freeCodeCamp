---
title: Font Size Property
---
## Font Size Property

### Definition and Usage

The `font-size` property is used to set the size of an element's font. Below is the default syntax for this property.

```css
font-size:medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit;
```
As shown above, this property can take several values. The default value is *medium* and the values from *xx-small* to *xx-large* set the font size from very small to very large (like clothing sizes). The *smaller* and *larger* values set the font size to smaller than the parent element's font size and larger than the parent element's font size, respectively. Despite the availability of the aforementiond values, the most common type of value used is a length unit. Length units may include: **px**, **%**, **em**, **rem** and **pt**.

### Length Units Explained

#### px

You can use the **px* unit to set a fixed font size for an element in pixels. One pixel is one dot on the user's screen. Since pixels provide a fixed font size, the font size cannot be responsive. This is a negative because font sizes may not appear well on different screen dimensions and you would have to use media queries to make the font scale.

**Example:**

```css
p {
  font-size: 20px;
}
```
**Result:**
![Example One](https://image.prntscr.com/image/TI_29z3FRO20dJD2Dc7JJA.png)

#### %

You can use the percentage **%** unit to set the font size relative to the body element's font size. The default is 16px so 100% would be equal to 16px. If the body's font size is changed, the font size of any elements contained within the body that have a value as a percentage, will also change. This unit allows the font to be scaled on various screen sizes.

**Example:**

```css
p {
  font-size: 120%;
}
```
**Result:**
![Example Two](https://image.prntscr.com/image/P9HTpWbETeyjZhxzf9z-SA.png)
The code above changes the font size to 120% of the default font size which is 16px.

#### em

Another unit which can be used for the font size is the **em** unit. One **em** unit is equal to the default font size of the nearest parent element. This means that 2em would be double the font size and 4em would be 4 times the font size. The **em** unit is becoming more popular since it can scale and is mobile-friendly. 

**Example:**

```css
p {
  font-size: 1.4em;
}
```
**Result:**
![Example Three](https://image.prntscr.com/image/AeCJ0TCbRHqOTAFJ9CYNUQ.png)
The code above sets the font size of the paragraph to 1.4 times the font size of its nearest parent which is the body element. The body element has a default font size of 16px so this paragraph would have a font size of 1.4 * 16 = 22.4px.

#### rem

The **rem** unit is very similar to the **em** unit but the font size is relative to the root element's default font size. The root element is the `<html>` element.

**Example:**
```css
html {
	font-size: 12px;
}
p {
	font-size: 1.4rem;
}
```
**Result:**
![Example Four](https://image.prntscr.com/image/V5bn69UmSPOHSVM5YSAcyw.png)
The paragraph above has a 1.4em font size. This time the root element's font size has been changed to 12px so the paragraph's font is now 12 * 1.4 = 16.8px. The **rem** unit doesn't consider the body element's font despite the fact that it is still 16px.

#### pt

The final unit for font sizes is the point (**pt**) value. This value is relative to real life sizes of text. One **pt** is equal to 1/72 inches on paper, so 72pt is equal to 1 inch. Point values are accurate on paper but they may look different on different browsers. This unit is only useful when you need to print out pages with an accurate font size. The **pt** unit is not scalable.

**Example:**
```css
p {
  font-size: 16pt;
}
```
**Result:**
![Example Five](https://image.prntscr.com/image/IyOOr_WCT963wa0DoWyoOg.png)
The font size above is 16pt.

I have attached some article links below if you'd like to read more on this topic.

#### More Information:

* https://css-tricks.com/css-font-size/
* https://www.w3schools.com/cssref/pr_font_font-size.asp
* https://css-tricks.com/confused-rem-em/
* https://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/



