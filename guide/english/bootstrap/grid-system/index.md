---
title: Grid System
---
## Grid System

In a nutshell, Bootstrap grid system helps you create mobile-first layouts. Mobile first means that the grid layout will automatically be responsive for smaller screens. The HTML then defines the grid layout for larger screens.  It comprises of a system of rows and columns to help you structure your content. 

Rows are horizontal groups of columns, and each page has a maximum of 12 columns per row. Within each row, the content is placed inside the columns and it can span anywhere between 1 to 12 columns.

Bootstrap has five different types of grid tiers: Extra small, Small, Medium, Large, and Extra large. There is a breakpoint defined for each of these grid tiers.

Bootstrap uses pixels to define the grid tier breakpoints.

#### How it works

###### Container
The container is the outer most element that *contains* your grid. Use `container` for a fixed-width container in the middle of the screen (add an extra margin on larger screens) or `container-fluid` for full width.

```
<div class="container"></div>
```

###### Row
Use `row` to group your columns. This will keep everything lined up properly and help you structure your grid.
```
<div class="row"></div>
```

###### Columns
Column classes indicate the number of columns you’d like to use out of the possible 12 per row. For example `col-sm-6` would mean your columns use up half the width of the `row` on a small screen, and `col-lg-4` would use up a third on a large screen.

Here is how you would define a class prefix to use up one column width on the various screen sizes:

- **Extra Small** `col-1`
- **Small** `col-sm-1`
- **Medium** `col-md-1`
- **Large** `col-lg-1`
- **Extra Large** `col-xl-1`

```
<div class="col-sm-1"></div>
```


#### Example

A full width grid that has four columns, each taking up a full row on xs screens, half a row on sm and md screens, and a quarter of the width of the row on screens that are large and above:

```
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-6 col-lg-4">First Column</div>
    <div class="col-12 col-sm-6 col-lg-4">Second Column</div>
    <div class="col-12 col-sm-6 col-lg-4">Third Column</div>
    <div class="col-12 col-sm-6 col-lg-4">Forth Column</div>
  </div>
</div>
```

*Note that `col-md` and `col-xl` are not defined, where a size is not defined, it will default down to the next smaller size that has been specified.*

Bootstrap provides a ready-made 12 column grid system for use in layouts. Consider the following code.

```html
   <div class="container">
	<div class="row">
		<div class="col-md-6">Content</div>
		<div class="col-md-6">Content</div>
	<div>
   </div>
```

where: 

	- col = column
	- md = screen size
	- 6 = column width

As a 12 column grid system, all user defined grid column widths must add up to 12. 

Screen size values can be assigned as follows:

  - xs - < 768px Phones
  - sm - < 992px Tablets
  - md - < 1200px Laptops
  - lg - > 1200px Desktops

The following code and image shows what is possible using different column widths. 

```html
	<div class="container">
		<div class="row">
			<div class="example col-md-6">Content</div>
			<div class="example col-md-6">Content</div>
		<div>
	</div>

	<div class="container">
		<div class="row">
			<div class="example col-md-4">Content</div>
			<div class="example col-md-4">Content</div>
			<div class="example col-md-4">Content</div>
		<div>
	</div>

	<div class="container">
		<div class="row">
			<div class="example col-md-3">Content</div>
			<div class="example col-md-3">Content</div>
			<div class="example col-md-3">Content</div>
			<div class="example col-md-3">Content</div>
		<div>
	</div>

	<div class="container">
		<div class="row">
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
			<div class="example col-md-2">Content</div>
		<div>
	</div>

	<div class="container">
		<div class="row">
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
			<div class="example col-md-1">Content</div>
		</div>
	</div>
```


![12-col-grid](https://github.com/bflatt72/bflatt72.github.io/blob/master/img/bootstrapgrid1.png)


#### More Information:

<a href='https://getbootstrap.com/docs/4.0/layout/grid/' target='_blank' rel='nofollow'>Bootstrap Docs - Grid system</a>

*This guide is based on Bootstrap v4 (it will work with v3 except extra small screens are defined as `xs` and there is no `xl` size)*


* Extra large: **Viewport width >= 1200px**
* Large: **Viewport width >= 992px**
* Medium: **Viewport width >= 768px**
* Small: **Viewport width >= 576px**
* Extra small: **Viewport widths below 576px**      

#### More Information:
https://getbootstrap.com/docs/4.0/layout/grid/
