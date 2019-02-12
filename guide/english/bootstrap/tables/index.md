---
title: Tables
---
## Tables
---

#### Basic Table
In order to achieve the basic styling example add the base class `.table` to any `<table>` element.

**Example**

    <table class="table">
      ...
    </table>
    
![Basic Table](https://github.com/TroyB12/Pictures/blob/master/Basic%20Table.PNG)

---

#### Table Head

You can define separate header section in your table structure.
This is example
```html
<table class="table">
    <thead class=theat-dark>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Bob</td>
      <td>Robo</td>
      <td>@bro</td>
    </tr>
  </tbody>
</table>
```


#### Table Striped

In order to achieve the striped row effect (zebra-striping) in tables use `.table-striped` in addition to `.table` on any `<table>` element.  Striped tables are styled via the `:nth-child` CSS selector, which is not available in Internet Explorer 8.

    <table class="table table-striped">
      ...
    </table>

![Striped Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Striped.PNG)

---
#### Table Bordered

In order to achieve the bordered table use `.table-bordered` in addition to `.table` on any `<table>` element.

    <table class="table table-bordered">
      ...
    </table>

![Bordered Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Bordered.PNG)

---
#### Table Hover

In order to achieve the hover row effect on tables, use `.table-bordered` in addition to `.table` on any `<table>` element.

    <table class="table table-hover">
      ...
    </table>

![Hover Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Hover.PNG)

---
#### Table Condensed

In order to achieve the condensed table use `.table-condensed` in addition to `.table` on any `<table>` element.

    <table class="table table-condensed">
      ...
    </table>

![Condensed Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Condensed.PNG)

---

#### Table Responsive

In order to achieve the responsive table by wrapping any `.table` table in a `.table-responsive` element.

<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>

![Responsive Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Responsive.PNG)

---

Developers are able to change the style of each individual row and/or cell by using **contextual classes**.

- `.active` -	Applies the hover color to a particular row or cell
- `.success` -	Indicates a successful or positive action
- `.info` -	Indicates a neutral informative change or action
- `.warning` -	Indicates a warning that might need attention
- `.danger` -	Indicates a dangerous or potentially negative action

    <!-- On rows -->
    <tr class="active">...</tr>
    <tr class="success">...</tr>
    <tr class="warning">...</tr>
    <tr class="danger">...</tr>
    <tr class="info">...</tr>

    <!-- On cells (`td` or `th`) -->
    <tr>
      <td class="active">...</td>
      <td class="success">...</td>
      <td class="warning">...</td>
      <td class="danger">...</td>
      <td class="info">...</td>
    </tr>
    
![Contextual Class Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Contextual%20Classes.PNG)

---
