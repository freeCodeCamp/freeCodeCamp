---
title: Icons
localeTitle: Иконки
---
## Иконки

Bootstrap предоставляет Glyphicons для отображения иконок. Bootstrap по умолчанию не включает библиотеку значков, но тут есть несколько рекомендаций. Хотя большинство наборов иконок включают в себя несколько форматов файлов, мы предпочитаем реализацию SVG для их улучшенной доступности и векторной поддержки.

### Как пользоваться

Чтобы использовать зиконку в Bootstrap, создайте тег span с базовым классом `glyphicon` и отдельным классом иконок. Используйте его только для элементов, которые не содержат текстового содержимого и не имеют дочерних элементов.

**Пример кода:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

`<span class="glyphicon glyphicon-cog"></span>`

Структура Bootstrap предоставляет вам более 250 значков, называемых глифами. Они входят в формат шрифта из набора Glyphicon Halflings.

### Как пользоваться

Чтобы использовать значки начальной загрузки, вы просто создаете `<span>` и применяете необходимый класс CSS для иконки. Пример кода приведен ниже.

**Пример кода:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

### Список классов Glyphicon Bootstrap

Это пример классов CSS, которые bootstrap предоставляет для глификонов. Более того, они доступны [здесь](https://getbootstrap.com/docs/3.3/components/#glyphicons)

`.glyphicon glyphicon-plus` Это значок плюса / добавления бутстрапа.

`.glyphicon glyphicon-trash` Это значок мусора / удаления бутстрапа.

_Примечание. Не включайте точку в атрибуте класса HTML, ссылаясь на классы с точкой, используется только при настройке классов в CSS._

### Иконка «Bootstrap» в кнопках

```html

  <button type="button" class="btn btn-default" aria-label="Left Align"> 
    <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span> 
  </button> 
```

_Примечание. Значок Glyphicons Bootstrap недоступен при загрузке V4_

### Дополнительная информация:

*   [Бутстрап Глификон Icons Doc](https://getbootstrap.com/docs/3.3/components/#glyphicons)
