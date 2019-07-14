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

В следующем примере показан линейный градиент, который начинается сверху. Он начинает красный, переход на желтый: ![по умолчанию-линейный градиент-](https://cdn-media-1.freecodecamp.org/imgr/2uGfleD.jpg)

#### пример
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Top to Bottom</h3> 
 <p>This linear gradient starts at the top. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![по умолчанию-линейный градиент-](https://cdn-media-1.freecodecamp.org/imgr/CvtXCMd.jpg)

##### Линейный градиент - слева направо

В следующем примере показан линейный градиент, начинающийся слева. Он начинает красный, переход на желтый: ![слева направо](https://cdn-media-1.freecodecamp.org/imgr/e4dRvZR.jpg)

#### пример
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left, red , green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to right, red , green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Left to Right</h3> 
 <p>This linear gradient starts at the left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![слева направо](https://cdn-media-1.freecodecamp.org/imgr/k4FSyXz.jpg)

#### Линейный градиент - диагональ

Вы можете сделать градиент по диагонали, указав горизонтальные и вертикальные стартовые позиции.

В следующем примере показан линейный градиент, который начинается в левом верхнем углу (и идет вправо справа). Он начинает красный, переход на желтый:

![диагональ](https://cdn-media-1.freecodecamp.org/imgr/YvtbUBH.jpg)

#### пример
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left top, red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(bottom right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(bottom right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to bottom right, red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Diagonal</h3> 
 <p>This linear gradient starts at top left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![диагонально-ехр](https://cdn-media-1.freecodecamp.org/imgr/8gKRhAp.jpg)

#### Дополнительная информация:

[Документация MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) || [w3schools](https://www.w3schools.com/css/css3_gradients.asp)