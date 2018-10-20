---
title: CSS Grid Layout
---
## CSS Grid Layout
CSS Grid Layout is the most powerful layout system available in CSS.
It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system.
Though Grid Layout isn't fully supported by all browsers, it's the most advanced and conveniet way to make page layouts.

There are two kinds of grid containers: block grids ( display:
grid ) and inline grids ( display: inline-grid ). These are very much like block and inline-block boxes.

A grid is made up of the following components: 

..* A grid line is a horizontal or vertical dividing line within the grid container. These are placed as the author directs and create grid cells, areas, and tracks by implication.
Grid lines can be labeled with identifier tokens; that’s the
basis of grid item placement

..* A grid cell is any space bounded by four grid lines, with
no other grid lines running through it, analogous to a
table cell. This is the smallest unit of area in grid layout.
Grid cells cannot be directly addressed with CSS grid
properties; that is, no property allows you to say a grid
item should be associated with a given cell. (But see the
next point for more details.)

..* A grid area is any rectangular area bounded by four grid
lines and made up of one or more grid cells. An area can
be as small as a single cell or as large as all the cells in the grid. Grid areas are directly addressable by CSS grid
properties, which allow you to define the areas and then
associate grid items with them.

..* A grid track is a continuous run between two adjacent
grid lines—in other words, a grid column or a grid row. It
goes from one edge of the grid container to the other.
The size of a grid track is dependent on the placement of
the grid lines that define it. Grid columns and rows are
broadly analogous to table columns and rows. More
generically, they can be referred to as block axis and inline
axis tracks, where (in Western languages) column tracks
are on the block axis and row tracks are on the inline
axis.

#### More Resources:
- [A Complete Guide to CSS Grid Layout](http://chris.house/blog/a-complete-guide-css-grid-layout/)
- [Grid by Example](https://gridbyexample.com/)
- [Wes Bos - Free CSS Grid Course](https://cssgrid.io/)
- [YouTube - CSS Grid Playlist](https://www.youtube.com/watch?v=FEnRpy9Xfes&list=PLbSquHt1VCf1x_-1ytlVMT0AMwADlWtc1)

More info about browser support can be read at <a href="https://caniuse.com/#feat=css-grid" target="_blank">https://caniuse.com</a>.
