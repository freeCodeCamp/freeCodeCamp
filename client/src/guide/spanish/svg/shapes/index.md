---
title: SVG Shapes
localeTitle: SVG Shapes
---
## SVG Shapes

Se pueden crear varias formas usando el dibujo SVG. Un dibujo SVG puede usar y combinar siete formas: Trazado, Rectángulo, Círculo, Elipse, Línea, Polilínea y Polígono.

### Camino

El elemento de `path` es el que se ve con más frecuencia y generalmente lo generan los programas diseñados para exportar el código SVG.

```svg
  <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" /> 
```

La `path` ejemplo anterior generará un símbolo "más" (+) cuando se use dentro de un dibujo SVG. Los elementos de `path` SVG no se crean manualmente, sino que se generan a través de programas de diseño que pueden manipular gráficos vectoriales, como Illustrator o Inkscape.

### Rectángulo

El elemento de rectángulo `rect` dibuja un rectángulo en la pantalla y acepta seis atributos.

```svg
  <rect x="0" y="0" width="100" height="50" rx="10" ry="10" /> 
```

`x` e `y` asignan la posición de la esquina superior izquierda del rectángulo, y el `width` y la `height` asignan el tamaño del rectángulo. `rx` y `ry` asignan el radio de las esquinas del rectángulo, similar a la propiedad de borde-radio CSS.

### Circulo

El elemento `circle` acepta tres atributos.

```svg
  <circle cx="100" cy="100" r="50" /> 
```

`cx` y `cy` asignan la posición del centro del círculo, y `r` asigna el radio (tamaño) del círculo.

### Elipse

El elemento elipse, `ellipse` , es similar al elemento `circle` , excepto que el radio se divide en dos atributos.

```svg
  <ellipse cx="100" cy="100" rx="50" ry="20" /> 
```

Nuevamente, `cx` y `cy` asignan la posición del centro de la elipse, y ahora `rx` y `ry` asignan el radio horizontal y vertical de la elipse, respectivamente. Una `rx` más grande dará una elipse "gruesa", y una `ry` más grande dará una elipse más delgada. Si `rx` y `ry` son iguales, formará un círculo.

### Línea

El elemento de `line` es simple, y acepta cuatro atributos.

```svg
  <line x1="0" x2="100" y1="50" y2="70" /> 
```

Los atributos `x1` e `y1` asignan el primer punto de la línea, y los atributos `x2` e `y2` asignan el segundo punto de la línea.

### Polilínea

Una `polyline` es una serie de líneas rectas conectadas, asignadas en un solo atributo.

```svg
  <polyline points="0 100, 50 70, 60 40, 20 0" /> 
```

El atributo de `points` asigna una lista de puntos, cada punto separado por una coma.

### Polígono

El elemento de `polygon` también es una serie de líneas rectas conectadas, pero en este caso, la última línea volverá a conectarse automáticamente al punto inicial.

```svg
  <polygon points="0 100, 50 70, 60 40, 20 0" /> 
```

Este ejemplo dibujará la misma forma que la `polyline` anterior, pero dibujará una línea adicional para "cerrar" la serie de líneas.

## Más información

Documentación [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) : [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)