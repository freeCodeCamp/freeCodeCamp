---
title: Semantic UI Buttons
localeTitle: Семантические кнопки пользовательского интерфейса
---
## Семантические кнопки пользовательского интерфейса

Кнопка указывает на возможное действие пользователя. Семантический интерфейс обеспечивает простой в использовании синтаксис, который упрощает не только стилизацию кнопки, но и семантику естественного языка.

#### Как использовать

Семантический интерфейс пользовательского интерфейса просто добавляется к элементу кнопки, для примера показано, как его использовать.

#### Типы

*   Стандартная кнопка

Стандартная кнопка семантического интерфейса
```
<button class="ui button">Standard Button</button> 
```

*   Кнопка акцента

Кнопка с другим уровнем выделения
```
<button class="ui primary button"> 
```

Другие классы акцентов являются `secondary` , `positive` и `negative`

*   Анимированная кнопка

Кнопка с анимацией, показывающая скрытое содержимое
```
<div class="ui animated fade button" tabindex="0"> 
  <div class="visible content">Sign-up for a Pro account</div> 
  <div class="hidden content">$12.99 a month</div> 
 </div> 
```

Свойство `tabindex="0"` выше делает клавиатуру кнопки фокусируемой, поскольку `<button>` не использовался.

*   Яркая кнопка

Кнопка рядом с ярлыком
```
<div class="ui labeled button" tabindex="0"> 
  <div class="ui button"><i class="heart icon"></i> Like</div> 
  <a class="ui basic label">2,048</a> 
 </div> 
```

элемент `<i>` используется для указания значка, здесь это значок сердца `<i class="heart icon"></i>` вместе с базовой меткой `<a class="ui basic label">2,048</a>`

*   Кнопка значка

Кнопка Semantic UI может быть просто значком
```
<button class="ui icon button"> 
  <i class="camera icon"></i> 
 </button> 
```

Вышеупомянутый значок камеры

#### группы

Семантические кнопки пользовательского интерфейса могут существовать в группе
```
<div class="ui buttons"> 
  <button class="ui button">One</button> 
  <button class="ui button">Two</button> 
  <button class="ui button">Three</button> 
 </div> 
```

#### содержание

Семантические кнопки пользовательского интерфейса могут содержать условные обозначения
```
<div class="ui buttons"> 
  <button class="ui positive button">Yes</button> 
  <div class="or" data-text="or"></div> 
  <button class="ui negative button">No</button> 
 </div> 
```

#### состояния

Семантические кнопки пользовательского интерфейса могут существовать в разных состояниях, `active` , `disabled` , `loading` . Просто добавьте название штата к `class` атрибута `of` \`элемента.
```
<button class="ui loading button">Loading</button> 
```

#### вариации

Семантические кнопки пользовательского интерфейса существуют в различных размерах, `mini` , `tiny` , `small` , `medium` , `large` , `big` , `huge` и `massive` .
```
<button class="ui massive button">Massive Button</button> 
```

Существует гораздо больше о кнопках семантического интерфейса, посетите дополнительную ссылку в разделе «Дополнительная информация», чтобы узнать больше.

#### Дополнительная информация:

*   [Документы с интерфейсом пользовательских интерфейсов](https://semantic-ui.com/elements/button.html)