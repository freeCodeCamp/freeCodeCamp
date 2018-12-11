---
title: Tabs and Pills
---
## Tabs and Pills

Tabs and Pills are forms of navigation.  Meaning they help the end-user navigate through the site in a user-friendly manner.

### Tabs

To achieve bootstrap tabs, first you need an element that has the `.nav` class assigned to it.  Then you simply add an extra class named `.nav-tabs`.
```html
<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">Profile</a></li>
  <li role="presentation"><a href="#">Messages</a></li>
</ul>
```
    
![Bootstrap Tabs](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs.PNG)
---

### Pills

Bootstrap Pills is achieved the same way as Bootstrap Tabs except instead of `.nav-tabs`, use `.nav-pills`.
```html
<ul class="nav nav-pills">
  <li role="presentation" class="active"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">Profile</a></li>
  <li role="presentation"><a href="#">Messages</a></li>
</ul>
```

![Bootstrap Pills](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills.PNG)
---

### Pills Stacked

Bootstrap Pills are also vertically stackable by using `.nav stacked` in conjunction with `.nav-pills`.
```html
<ul class="nav nav-pills nav-stacked">
  ...
</ul>
```

![Bootstrap Pills Stacked](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Stacked.PNG)
---

### Bootstrap Tabs/Pills Justified

Both Bootstrap Tabs and Pills can have equal width of their parent at screens wider than 768px by using `.nav-justified` class.  On smaller screens, the nav links are stacked.
```html
<ul class="nav nav-tabs nav-justified">
  ...
</ul>
<ul class="nav nav-pills nav-justified">
  ...
</ul>
```

![Bootstrap Tabs/Pills Justified](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20And%20Pills%20Justified.PNG)
---

### Disabled Links

For any nav component (tabs or pills) add `.disabled` for gray links and no hover effects
```html
<ul class="nav nav-pills">
  ...
  <li role="presentation" class="disabled"><a href="#">Disabled link</a></li>
  ...
</ul>
```

![Disabled Links](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20and%20Pills%20Disabled%20Link.PNG)
---

### Tabs with Dropdowns

Add dropdown menus to your nav tabs.
```html
<ul class="nav nav-tabs">
  ...
  <li role="presentation" class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
      Dropdown <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
      ...
    </ul>
  </li>
  ...
</ul>
```
    
![Tabs with Dropdowns](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20Dropdown.PNG)
---

#### Tabs with Dropdowns

Add dropdown menus to your nav pills.
```html
<ul class="nav nav-pills">
  ...
  <li role="presentation" class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
      Dropdown <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
      ...
    </ul>
  </li>
  ...
</ul>
```

![Pills with Dropdowns](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Dropdown.PNG)


#### More Information
- [Bootstrap Documentation for Tabs and Pills](https://getbootstrap.com/docs/4.1/components/navs/#tabs)
