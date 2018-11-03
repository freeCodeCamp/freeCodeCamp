---
title: Limit Item Size Using the minmax Function ##
localeTitle: Limitar el tamaño del elemento utilizando la función minmax ##
---
El uso de la función _minmax_ junto con la función de _repetición_ es exactamente lo que describe este desafío, pero al principio no fue algo obvio para mí. La forma de superar este desafío es eliminar el valor de **ancho** máximo dentro de la función de _repetición_ y luego agregar la función _minmax_ en lugar del valor de **ancho máximo de** _repetición_ .

Aquí hay un **ejemplo** de cómo se ve usar un enfoque de _antes_ y _después_ :

### antes de

```css
    grid-template-columns: repeat(3, 1fr); 
```

### Después

```css
    grid-template-columns: repeat(3, minmax(50px, 2fr)); 
```

* * *

También puede consultar este bolígrafo incorporado en Codepen para ver el ejemplo en acción, que puede cambiar de tamaño para ver los resultados:

Vea la función Pen [limit-item-size-using-the-minmax-function](https://codepen.io/skywardcode/pen/EeGGze/) de skywardcode ( [@skywardcode](https://codepen.io/skywardcode) ) en [CodePen](https://codepen.io) .

### Recursos

[Red de desarrolladores de Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)