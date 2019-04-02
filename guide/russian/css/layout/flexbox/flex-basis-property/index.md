---
title: Flex Basis Property
localeTitle: Свойство Flex Basis
---
# Основы Flex

Свойство `flex-basis` определяет размер `flex-item` вдоль основной оси контейнера flex. Основная ось горизонтальна, если `flex-direction` установлено в `row` и оно будет вертикальным, если свойство `flex-direction` установлено в `column` .

## Синтаксис

```css
flex-basis: auto | content | <width> | <height>; 
```

## flex-basis: авто

`flex-basis: auto` просматривает основной размер элемента и определяет размер. Например, в горизонтальном гибком контейнере `auto` будет искать `width` и `height` если ось контейнера будет вертикальной.

Если размер не указан, `auto` будет возвращаться к `content` .

## flex-basis: контент

`flex-basis: content` разрешает размер, основанный на содержимом элемента, если только `width` или `height` не установлены с помощью стандартного `box-sizing` .

В обоих случаях, когда `flex-basis` является либо `auto` либо `content` , если указан основной размер, этот размер будет иметь приоритет.

## Flex-основа:

Это точно так же, как указание `width` или `height` , но только более гибкое. `flex-basis: 20em;` задает начальный размер элемента `20em` . Его окончательный размер будет основываться на доступном пространстве, мультипликаторе `flex-grow` и `flex-shrink` multiple.

В спецификации предлагается использование `flex` стенографической собственности. Это помогает создать `flex-basis` наряду с `flex-grow` и `flex-shrink` свойствами.

## Примеры

Вот строки отдельных гибких контейнеров и отдельных гибких элементов, показывающие, как `flex-basis` влияет на `box-sizing` .

![эффект гибкой основы по горизонтальной оси](https://vijayabharathib.github.io/fcc_guide_images/css/properties/flex-basis-horizontal.png)

Когда направление `flex-direction` - `column` , тот же `flex-basis` будет управлять свойством `height` . Пример ниже,

![пример гибкой контрольной высоты в вертикальном контейнере](https://vijayabharathib.github.io/fcc_guide_images/css/properties/flex-basis-vertical.png)

#### Дополнительная информация:

Дополнительные ссылки на следующие страницы:

*   [Уровень](https://drafts.csswg.org/css-flexbox-1/) спецификации CSS [1](https://drafts.csswg.org/css-flexbox-1/)
*   Страница «Сеть разработчиков Mozilla» на [гибкой основе](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis#content)