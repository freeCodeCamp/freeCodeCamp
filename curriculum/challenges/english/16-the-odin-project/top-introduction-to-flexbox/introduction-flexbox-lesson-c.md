---
id: 6571b2fecc1de61d7b4dd381
title: Introduction to Flexbox Lesson C
challengeType: 15
dashedName: introduction-flexbox-lesson-c
---
# --description--

Somewhat confusingly, any element can be both a flex container and a flex item. Said another way, you can also put `display: flex` on a flex item and then use flexbox to arrange its children.

<img src="https://cdn.freecodecamp.org/curriculum/odin-project/flex-box/flexbox-03.png" style="width: 95%; height: 95%;" alt="a flex container that has multiple flex items, within those flex items are nested flex items as well. Making the parent of those nested flex items also a flex container." />

Creating and nesting multiple flex containers and items is the primary way you will be building up complex layouts. The following image was achieved using only flexbox to arrange, size, and place the various elements. Flexbox is a very powerful tool.

<img src="https://cdn.freecodecamp.org/curriculum/odin-project/flex-box/flexbox-02.png" alt="a complex layout of flex items and flex containers. There are multiple flex containers nested into each other, thus making them flex items as well"/>

Certainly, the image features a representation of a CSS Flexbox layout with nested flex containers. The outer container is denoted as "ALSO a flex container" highlighted in blue, and within it is another container marked as "with flex items" in red. Inside the red container, there are three items labeled as "flex items" in peach. This demonstrates that a flex container can be nested within another flex container and contain its own flex items, showcasing the recursive nature of Flexbox layout structures.

# --questions--

## --text--

Which CSS property is applied to elements to make them flex containers?

## --answers--

`align-items`

---

`display: flex`

---

`justify-content`

---

`flex`

## --video-solution--

2
