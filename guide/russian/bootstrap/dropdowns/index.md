---
title: Dropdowns
localeTitle: Dropdowns
---
## Dropdowns

Bootstrap предоставляет Dropdowns в качестве плагина для отображения списков ссылок. Dropdown кнопка - это кнопка, которая переключает отображение списка ссылок.

Выпадающие списки Bootstrap разработаны для того, чтобы быть универсальными и применимыми к различным ситуациям. Например, можно создавать выпадающие списки, содержащие поля поиска или формы входа.

## пример

```html

<div class="dropdown"> 
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
    Dropdown example 
  </button> 
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
    <a class="dropdown-item" href="#">Action</a> 
    <a class="dropdown-item" href="#">Another action</a> 
    <a class="dropdown-item" href="#">Something else here</a> 
  </div> 
 </div> 
```

## Пример Разъяснения

Класс _.dropdown_ указывает на выпадающее меню.

Чтобы открыть меню, используйте кнопку или ссылку с классом _.dropdown-toggle_ и _атрибутом drop-drop_ _data-toggle =_ .

Класс _.caret_ создает значок стрелки (▼), который указывает на то, что кнопка является выпадающим списком.

Добавьте _класс .dropdown-menu_ в неупорядоченный элемент списка, чтобы создать выпадающее меню.

#### Дополнительная информация:

https://getbootstrap.com/docs/4.0/components/dropdowns/
