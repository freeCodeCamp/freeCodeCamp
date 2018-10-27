---
title: CSS3 Gradients
localeTitle: Градиенты CSS3
---
## Градиенты CSS3

Градиенты CSS3 позволяют отображать плавные переходы между двумя или более указанными цветами.

Раньше вам приходилось использовать изображения для этих эффектов. Однако, используя градиенты CSS3, вы можете сократить время загрузки и использование полосы пропускания. Кроме того, элементы с градиентами выглядят лучше при увеличении, потому что градиент генерируется браузером.

CSS3 определяет два типа градиентов:

*   Линейные градиенты (идет вниз / вверх / влево / вправо / по диагонали)
*   Радиальные градиенты (определяемые их центром)

### Линейные градиенты CSS3

Чтобы создать линейный градиент, вы должны определить не менее двух цветовых остановок. Цветные остановки - это цвета, которые вы хотите сделать плавными переходами. Вы также можете установить начальную точку и направление (или угол) вместе с эффектом градиента.

#### Синтаксис
```
background: linear-gradient(direction, color-stop1, color-stop2, ...); 
```

##### Линейный градиент - сверху вниз (по умолчанию)

В следующем примере показан линейный градиент, который начинается сверху. Он начинается с красного и переходит в желтый: ![по умолчанию-линейный градиент-](https://i.imgur.com/2uGfleD.jpg)

#### Пример
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* Для браузеров, не поддерживающих градиенты */ 
    background: -webkit-linear-gradient(red, green); /* Для Safari 5.1 - 6.0 */ 
    background: -o-linear-gradient(red, green); /* Для Opera 11.1 - 12.0 */ 
    background: -moz-linear-gradient(red, green); /* Для Firefox 3.6 - 15 */ 
    background: linear-gradient(red, green); /* Синтаксис по умолчанию (всегда ставится в конце) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Линейный градиент - Сверху вниз</h3> 
 <p>Этот линейный градиент начинается сверху и опускается вниз. С красного он переходит в желтый:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>На заметку:</strong> Internet Explorer 9 и ранее не поддерживает градиенты.</p> 
 
 </body> 
 </html> 
```

![по умолчанию-линейный градиент-](https://i.imgur.com/CvtXCMd.jpg)

##### Линейный градиент - слева направо

В следующем примере показан линейный градиент, начинающийся слева. Он начинается с красного и переходит в желтый: ![слева направо](https://i.imgur.com/e4dRvZR.jpg)

#### Пример
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* Для браузеров, не поддерживающих градиенты */ 
    background: -webkit-linear-gradient(left, red , green); /* Для Safari 5.1 - 6.0 */ 
    background: -o-linear-gradient(right, red, green); /* Для Opera 11.1 - 12.0 */ 
    background: -moz-linear-gradient(right, red, green); /* Для Firefox 3.6 - 15 */ 
    background: linear-gradient(to right, red , green); /* Синтаксис по умолчанию (всегда ставится в конце) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Линейный градиент - Слева направо</h3> 
 <p>Этот линейный градиент начинается слева. От красного он переходит в желтый:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>На заметку:</strong> Internet Explorer 9 и ранее не поддерживает градиенты.</p> 
 
 </body> 
 </html> 
```

![слева направо](https://i.imgur.com/k4FSyXz.jpg)

#### Линейный градиент - Диагональ

Вы можете сделать градиент по диагонали, указав горизонтальные и вертикальные стартовые позиции.

В следующем примере показан линейный градиент, который начинается в левом верхнем углу (и идет вправо справа). Он начинает красный, переход на желтый:

![диагональ](https://i.imgur.com/YvtbUBH.jpg)

#### Пример
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* Для браузеров, не поддерживающих градиенты */ 
    background: -webkit-linear-gradient(left top, red, green); /* Для Safari 5.1 - 6.0 */ 
    background: -o-linear-gradient(bottom right, red, green); /* Для Opera 11.1 - 12.0 */ 
    background: -moz-linear-gradient(bottom right, red, green); /* Для Firefox 3.6 - 15 */ 
    background: linear-gradient(to bottom right, red, green); /* Синтаксис по умолчанию (всегда ставится в конце) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Линейный градиент - Диагональ</h3> 
 <p>Этот линейный градиент начинается с левого верхнего угла. От красного он переходит в желтый:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>На заметку:</strong> Internet Explorer 9 и ранее не поддерживает градиенты.</p> 
 
 </body> 
 </html> 
```

![диагонально-ехр](https://i.imgur.com/8gKRhAp.jpg)

#### Дополнительная информация:

[Документация MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) || [w3schools](https://www.w3schools.com/css/css3_gradients.asp)