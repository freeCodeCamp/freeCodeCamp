---
title: Tabs and Pills
localeTitle: Abas e Comprimidos
---
## Abas e Comprimidos

Guias e Pílulas são formas de navegação. Isso significa que eles ajudam o usuário final a navegar pelo site de uma maneira amigável.

### Guias

Para obter as guias de bootstrap, primeiro você precisa de um elemento que tenha a classe `.nav` atribuída a ele. Então você simplesmente adiciona uma classe extra chamada `.nav-tabs` .

```html

<ul class="nav nav-tabs"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
```

## ![Guias de bootstrap](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs.PNG)

### Comprimidos

O Bootstrap Pills é obtido da mesma forma que o Bootstrap Tabs, exceto em vez de `.nav-tabs` , use `.nav-pills` .

```html

<ul class="nav nav-pills"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
```

## ![Comprimidos Bootstrap](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills.PNG)

### Comprimidos empilhados

Pílulas Bootstrap também são empilháveis ​​verticalmente usando `.nav stacked` em conjunto com `.nav-pills` .

```html

<ul class="nav nav-pills nav-stacked"> 
  ... 
 </ul> 
```

## ![Comprimidos de inicialização empilhados](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Stacked.PNG)

### Bootstrap Tabs / Pills Justified

Ambas as guias e pílulas do Bootstrap podem ter largura igual do pai em telas mais largas que o 768px usando `.nav-justified` classe `.nav-justified` . Em telas menores, os links de navegação são empilhados.

```html

<ul class="nav nav-tabs nav-justified"> 
  ... 
 </ul> 
 <ul class="nav nav-pills nav-justified"> 
  ... 
 </ul> 
```

## ![Bootstrap Tabs / Pills Justified](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20And%20Pills%20Justified.PNG)

### Links desativados

Para qualquer componente nav (guias ou pílulas) adicione `.disabled` para links cinza e sem efeitos de foco

```html

<ul class="nav nav-pills"> 
  ... 
  <li role="presentation" class="disabled"><a href="#">Disabled link</a></li> 
  ... 
 </ul> 
```

## ![Links desativados](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20and%20Pills%20Disabled%20Link.PNG)

### Guias com Dropdowns

Adicione menus suspensos às suas guias de navegação.

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

## ![Guias com Dropdowns](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20Dropdown.PNG)

#### Guias com Dropdowns

Adicione menus suspensos às suas pílulas nav.

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

![Comprimidos com Dropdowns](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Dropdown.PNG)