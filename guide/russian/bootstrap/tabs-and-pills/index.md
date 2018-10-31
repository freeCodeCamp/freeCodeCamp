---
title: Tabs and Pills
localeTitle: Таблетки и таблетки
---
## Таблетки и таблетки

Таблетки и таблетки - это формы навигации. Это означает, что они помогают конечному пользователю перемещаться по сайту удобным для пользователя способом.

### Вкладки

Чтобы получить вкладки начальной загрузки, сначала вам понадобится элемент, `.nav` присвоен класс `.nav` . Затем вы просто добавляете дополнительный класс с именем `.nav-tabs` .

```html

<ul class="nav nav-tabs"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
```

## ![Вкладки бутстрапа](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs.PNG)

### Таблетки

Бутстрап-пилюли `.nav-tabs` же, как вкладки Bootstrap, кроме вместо `.nav-tabs` , используйте `.nav-pills` .

```html

<ul class="nav nav-pills"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
```

## ![Бутстрап-таблетки](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills.PNG)

### Штабелированные таблетки

Бутстрап-пилюли также вертикально штабелируются, используя `.nav stacked` вместе с `.nav-pills` .

```html

<ul class="nav nav-pills nav-stacked"> 
  ... 
 </ul> 
```

## ![Загрузочные таблетки](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Stacked.PNG)

### Бутстрапные табы / таблетки оправданы

Обе вкладки Bootstrap и Pills могут иметь равную ширину родителя на экранах шириной более 768 пикселей, используя `.nav-justified` . На меньших экранах навигационные ссылки сложены.

```html

<ul class="nav nav-tabs nav-justified"> 
  ... 
 </ul> 
 <ul class="nav nav-pills nav-justified"> 
  ... 
 </ul> 
```

## ![Бутстрапные табы / таблетки оправданы](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20And%20Pills%20Justified.PNG)

### Отключенные ссылки

Для любого навигационного компонента (вкладки или пилюли) добавьте `.disabled` для серых ссылок и никаких эффектов зависания

```html

<ul class="nav nav-pills"> 
  ... 
  <li role="presentation" class="disabled"><a href="#">Disabled link</a></li> 
  ... 
 </ul> 
```

## ![Отключенные ссылки](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20and%20Pills%20Disabled%20Link.PNG)

### Вкладки с раскрывающимися списками

Добавьте выпадающие меню на вкладки nav.

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

## ![Вкладки с раскрывающимися списками](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20Dropdown.PNG)

#### Вкладки с раскрывающимися списками

Добавьте выпадающие меню на свои навигационные таблетки.

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

![Таблетки с выпадающими окнами](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Dropdown.PNG)