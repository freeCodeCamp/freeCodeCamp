---
title: CSS3 Shadow Effects
localeTitle: Теневые эффекты CSS3
---
## Теневые эффекты CSS3

С помощью CSS3 вы можете создавать два типа теней: `text-shadow` (добавляет тень к тексту) и `box-shadow` (добавляет тень к другим элементам).

### Текстовая тень CSS3

Свойство `text-shadow` может принимать до четырех значений:

*   горизонтальная тень
*   вертикальная тень
*   эффект размытия
*   цвет

##### Примеры:

*   Обычная тень текста

```css
h1 { 
    text-shadow: 2px 2px 5px crimson; 
 } 
```

![Обычный теневой пример](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow1.png)

*   Светящийся текстовый эффект

```css
h1 { 
    text-shadow: 0 0 4px #00FF9C; 
 } 
```

![Световой текст](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow2.png)

#### Несколько теней

Для этого вы просто добавляете запятую между двумя (или более) наборами значений:

```css
h1 { 
    color: white; 
    text-shadow: 0 0 3px #F10D58, 0 0 7px #4578D5; 
 } 
```

![Множественный анализ теней с белым текстом](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow3.png)

### CSS3 Box Shadow

Свойство `box-shadow` может принимать до шести значений:

*   (необязательно) ключевое слово `inset` (изменяет тень на единицу внутри кадра)
*   горизонтальная тень
*   вертикальная тень
*   эффект размытия
*   распространение
*   цвет

##### Примеры:

```css
.first-div { 
    box-shadow: 1px 1px 5px 3px grey; 
 } 
 
 .second-div { 
    box-shadow: 0 0 5px 1px lightgrey; 
 } 
 
 .third-div { 
    box-shadow: inset 0 0 15px 5px rgba(0,0,0,0.75); 
 } 
```

![Примеры теневой коробки](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/box-shadows.png)

#### Дополнительная информация:

*   [Веб-документы MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b)
*   [Проверить поддержку браузера](https://caniuse.com/#search=box-shadow)
*   [CSS box-shadow generator](https://www.cssmatic.com/box-shadow) (не стесняйтесь экспериментировать с тенями)