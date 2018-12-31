---
title: Legibility and Readability
---
## Legibility and Readability

### Legibility

**Legibility** means being able to differentiate different characters in a text. Legible text implies it can be easily interpreted.
Look at the unique characteristics of a typeface when considering legibility. Some of the considerations are as follows: 

* You should use each typeface according to its *context and intended usage*. Look into its history and its best use case scenarios. For example : Garamond is best used for large bodies of text on print whereas Georgia for screen. 
* Keep in mind whether the typeface is for *display text or body text*. 
* The x-height of a typeface is the size of the lowercase 'x' in a typeface. A typeface with *medium to high x-height* results in a text legible at even small sizes. 
* Conventionally, **serif** typefaces are more legible for body text than their sans-serif counterparts.

### Readability

**Readability** means arranging groups of words or a blocks of text in such a way to make the text more accessible. The idea is to reduce the amount of effort required to read a body of text. 

Stephen Coles remarks that readability, not only begs the question of  "Can you read it?" but whether **" do you want to read it?"**.

Jason Santa Maria points out in his book *On Web Typography* that reading is not a linear activity. We read in a back and forth motion called **saccades**, which is our eyes hopping from one point to another.  Also, text with familiar words makes it easier for us to read. Some basic points to remember when considering readability are as follows:  

* **Contrast** refers to the change in thickness of the stroke in different parts of the letter. Higher the contrast, higher the change in stroke. Use medium to low contrast typefaces for long bodies of text.
* **Line Height** refers to the distance between two lines of text. You do not want to make the block of text neither too tight nor too loose. You can control line height in CSS by the property 'line-height'. For most texts, you can set it between 1.2 to 1.5 (without any units).
* **Line length** (measure) refers to the average number of characters in a line of text. A large line length hampers readability by making it difficult for our eyes to scan the text. Usually about 45-75 characters per line is optimal for a body of text. If you plan to increase the line length beyond that, then also take care to increase the line height so that there is enough space between two lines of text. In CSS, you can set the width of the container, and by using the em unit, you can get close to a set number of characters, depending on the width-to-height ratio of the font. Example: <code>width: 35em;</code>

* **Tracking** refers to adjusting the space between characters in a text. Adding tracking means adding white space between characters and vice versa. At small font sizes i.e. less than 10pts, adding tracking helps in improving readability. Similarly, for large headings, use negative tracking to bring the letters closer. You can control tracking in CSS via 'letter-spacing' property. For example:  <code>letter-spacing: 0.05em;</code>
* **Font size** refers to the size of the font used in a text. For mobile display, use sizes of at least 12px. You can control font-size in CSS via 'font-size' property. Example: font-size: 48px;

As you can see, you need to take into account a lot of factors to ensure optimal legibility and readability. Remember, there are no hard and fast rules for any of the above described factors. They are mere guidelines which might help you to train your typographic eye better. 

### Additional Links:

 * [Practical-typography](https://practicaltypography.com) for basics of Typography.
 * [Tutsplus Web Design](https://webdesign.tutsplus.com/articles/typographic-readability-and-legibility--webdesign-12211) - An Article on Legibility and Readability
 * [On Web Typography](https://abookapart.com/products/on-web-typography) - A book about typography on Web. 
 * [Typography and Accessibility](https://webaim.org/techniques/fonts/) - How typography relates to web accessibility.




