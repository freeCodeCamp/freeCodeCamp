---
title: Flex Grow
---
# Flex-grow

A flex item can be set to ‘grow’ along the main axis. What this means is that the item will occupy any total available space inside the flex container, making it wider or taller depending on the <code>flex-direction</code> of the flex container. When there are multiple flex items in a container, the available space is shared among them to provided proportions. <code>flex-grow:</code> has no effect with static dimensions; use <code>min-width:</code>, <code>min-height:</code> or <code>flex-basis:</code>.

Here’s an example with just one div in a flex container. Notice than <code>min-</code> is used with <code>width</code> and <code>height</code> to allow it to be affected. However, <code>flex-grow:</code> has not been applied in this instance.

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: yellow;
}
.box {
  background-color: brown;
  min-width:200px;
  min-height: 200px;
  box-sizing: border-box;
  border: solid 1px black;
  color: white;
}
```
```html
<div class="container">
  <div class="box">Box 1</div>
</div>
```
![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/flex-grow-no-grow.png "flex-grow: not applied")

The next example shows the div with <code>flex-grow: 1;</code> applied to the <code>.box</code> class. With <code>flex-grow:</code> the div *grows* into the available space both sides of it.
```css
.box {
  background-color: brown;
  min-width:200px;
  min-height: 200px;
  box-sizing: border-box;
  border: solid 1px black;
  color: white;
  flex-grow: 1;
}
```
![alt text](https://github.com/leebut/Flexbox-Images/blob/master/flex-grow-one-item.png?raw=true "One flex item, flex-grow: 1;")

The value of 1 could have been any number because it only becomes significant when multiple flex items are allocated different proportions of free space. It is similar to cutting a cake into pieces, one piece is the whole cake, but if there are two people, they get (as close to) one equal piece each. Let’s take a look at that now.

In this example, the classes <code>box</code> and <code>box2</code> both receive 1 piece of the free space each (50%), an equal allocation. If the number were 15, they’d both receive 15 smaller pieces of the space.
```css
.box {
  background-color: brown;
  min-width:200px;
  min-height: 200px;
  box-sizing: border-box;
  border: solid 1px black;
  color: white;
  flex-grow: 1;
}
.box2 {
  display: flex;
  min-width:200px;
  min-height: 200px;
  justify-content: center;
  background: rgb(142, 213, 255);
  align-items: center;
  flex-grow: 1;
}
```
```html
<div class="container">
  <div class="box">Box 1</div>
  <div class="box2">Box 2</div>
</div>
```
![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/flex-grow-two-items-grow-val-1.png "Two flex items receiving flex-grow: 1;")

See what happens when Box 2 is allocated <code>flex-grow: 2;</code>.
```css
.box2 {
  display: flex;
  min-width:200px;
  min-height: 200px;
  justify-content: center;
  background: rgb(142, 213, 255);
  align-items: center;
  flex-grow: 2;
}
```
![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/flex-grow-two-items-grow-val-1%2B2.png "One item receives flex-grow: 1, the other receives flex-grow: 2")

This time, Box 2 receives twice as much free space as Box 1. Remember, it does not make Box 2 twice as wide. It is simply allocated twice as much free space. To use the cake analogy, Box 1 receives one piece of cake, while Box 2 receives two pieces.
