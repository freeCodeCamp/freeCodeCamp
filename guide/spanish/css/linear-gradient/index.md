---
title: Linear Gradient
localeTitle: Gradiente lineal
---
## Gradiente lineal

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/css/linear-gradient/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

#### Más información:

En Gradiente lineal, los colores fluyen en una sola dirección, es decir, de izquierda a derecha, de arriba a abajo, o cualquier ángulo que elija.

![Un degradado con dos paradas de color.](https://cdn.discordapp.com/attachments/261391445074771978/371707961422118912/image.png)

**Un degradado lineal con dos paradas de color.**

### Sintaxis-

Para crear un degradado lineal, debe definir al menos dos paradas de color (son los colores entre los que se crean las transiciones). Se declara en las propiedades de **fondo** o **de imagen de fondo** .
```
background: linear-gradient(direction, colour-stop1, colour-stop2, ...); 
```

**Nota: Si no se especifica ninguna dirección, la transición es de arriba a abajo por defecto**

### Diferentes transiciones de gradiente

**De arriba hacia abajo :**
```
background: linear-gradient(red, yellow); 
```

![De arriba hacia abajo](https://cdn.discordapp.com/attachments/261391445074771978/371702268803809301/image.png)

**De izquierda a derecha :**

Para hacerlo de izquierda a derecha, agrega un parámetro adicional al comienzo del gradiente lineal () que comienza con la palabra **a la** que indica la dirección:
```
background: linear-gradient(to right, red , yellow); 
```

![De izquierda a derecha](https://cdn.discordapp.com/attachments/261391445074771978/371702990161051648/image.png)

**Posiciones diagonales:**

También puede transicionar un degradado diagonalmente especificando las posiciones de inicio horizontales y verticales, por ejemplo, arriba a la izquierda o abajo a la derecha.

Aquí hay una muestra de un gradiente que comienza en la parte superior izquierda:
```
 background: linear-gradient(to bottom right, red, yellow); 
```

![Arriba a la izquierda](https://cdn.discordapp.com/attachments/261391445074771978/371705382105776128/image.png)

### Usando ángulos para especificar la dirección del gradiente

También puede usar ángulos, para ser más precisos al especificar la dirección del gradiente:
```
background: linear-gradient(angle, colour-stop1, colour-stop2); 
```

El ángulo se especifica como un ángulo entre una línea horizontal y la línea de gradiente.
```
background: linear-gradient(90deg, red, yellow); 
```

![90 grados](https://cdn.discordapp.com/attachments/261391445074771978/371710718698848256/image.png)

### Usando más de dos colores

No está limitado a solo dos colores, puede usar tantos colores separados por comas como desee.
```
background: linear-gradient(red, yellow, green); 
```

![Un degradado con 3 paradas de color.](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)

También puede usar otras sintaxis de color como RGB o códigos hexadecimales para especificar los colores.

### Color duro para

No solo puede usar degradados para hacer la transición con colores difuminados, sino que también puede usarlo para cambiar instantáneamente de un color sólido a otro color sólido.
```
background: linear-gradient(to right,red 15%, yellow 15%); 
```

![Color duro se detiene](https://cdn.discordapp.com/attachments/261391445074771978/371716730046775318/image.png)

**Más información** [: gradiente lineal en Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)