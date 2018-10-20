# Flex Direction
```flex-direction:``` of a container determines how flex items will be aligned in the viewport.

Flex items are aligned along the **main** and **cross** axes. The main axis of ```flex-direction: row;```, the default, runs from left to right, while the cross axis runs perpendicular to it (top to bottom) In a column, the main axis runs from top to bottom, and the cross axis is perpendicular to it. 

There is a short code sample at the end of this page.

![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/main%20axis%20row.png "Flex direction, row.")

![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/main%20axis%20col.png "Flex diection, column.")

![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/cross%20axis%20row.png "Cross axis of a row.")

![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/cross%20axis%20col.png "Cross axis of a column.")

## Justify-content:
To align items along the main axis, we need to use ```justify-content:```. There are several ways to align items.

- **```flex-start;```** aligns items to the left of a row, and the top of a column.
- **```center;```** centres the items along the main axis.
- **```space-between;```** adds equal spacing between flex items but no spacing on the outermost edges.
- **```space-around;```** adds equal spacing around flex items, but the outermost edges may be narrower.
- **```space-evenly;```** adds equal spacing between flex items and the outermost edges.
- **```flex-end;```** aligns items to the right side of a row and the bottom of a column.

Justify-content works when flex items have a static size (250px) or have reached their max-width / max-height values. If items have ```flex-grow:``` applied, they will always try to occupy any free space in a container, so there will be nothing to align the items to.

The following screenshots follow the order of the bullet list above. The container's flex direction is row, with a yellow background.

flex-start
![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/just-cont-flex-start.png "flex-start")

center
![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/just-cont-center.png "center")

space-between
![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/just-cont-space-between.png "space-between")

space-around
![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/just-cont-space-around.png "space-around")

space-evenly
![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/just-cont-space-evenly.png "space-evenly")

flex-end
![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/just-cont-flex-end.png "flex-end")

## align-items
**```align-items:```** works in the same way as **```justify-content:```** does for the main-axis, but there are some different and fewer alignment options.

- **```flex-start;```** aligns items to the left of a row, and the top of a column.
- **```center;```** centres the items along the main axis.
- **```flex-end;```** aligns items to the right side of a row and the bottom of a column.
- **```stretch;```** items are stretched to fill the entire width / height depending on the flex direction.
- **```baseline;```** aligns items to their baselines.

In the following screenshots, I gave the container a height of 50vh. The images follow the order of the bullet list above.

**_NOTE:_** for ```stretch;``` to work, I removed the inflexible height property (200px) from the flex items.

flex-start

![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/align-items-flex-start.png "flex-start")

center

![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/align-items-center.png "center")

flex-end

![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/align-items-flex-end.png "flex-end")

stretch

![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/align-items-stretch.png "stretch")

baseline

![alt text](https://raw.githubusercontent.com/leebut/Flexbox-Images/master/align-items-baseline.png "baseline")

## align-content
**```align-content:```** is slightly different to ```align-items:``` because it distributes complete rows / columns, depending on the flex direction along the cross axis of the container. The previous alignment methods will align individual flex items of a single row in a container, whereas ```align-content``` will align everything.

- **```flex-start;```** aligns rows / columns to the left of a container.
- **```center;```** centres the rows / columns along the cross axis of a container.
- **```space-between;```** adds equal spacing between rows / columns but no spacing on the outermost edges.
- **```space-around;```** adds equal spacing around rows / columns, but the outermost edges may be narrower.
- **```flex-end;```** aligns rows / columns to the right side of a and the bottom of a container.
- **```stretch;```** rows / columns are stretched to fill the entire width / height of the container depending on the flex direction.

## Code sample

### HTML
```
<div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
    <div class="box">Box 4</div>
</div>
```
  
### CSS
```
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: yellow;
  height: 50vh;
}
.box {
  background-color: brown;
  width: 200px; // Remove this or set max- for stretch to work
  height: 200px; // Remove this or set max- for stretch to work
  box-sizing: border-box;
  border: solid 1px black;
  color: white;
}
```
