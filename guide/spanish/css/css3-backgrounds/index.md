---
title: CSS3 Backgrounds
localeTitle: Fondos CSS3
---
## Fondos CSS3

La propiedad abreviada de `background` CSS se usa para definir propiedades de múltiplos como:

`background-color` `background-image` `background-repeat` `background-attachment` `background-position`

### Color de fondo

El `background-color` propiedad especifica el color de fondo de un elemento.

```css
   background-color : #F00; 
```

### Imagen de fondo

La propiedad `background-image` especifica una imagen para usar como fondo de un elemento. Por defecto, la imagen se repite para cubrir toda la superficie del elemento.

```css
   background-image: url("GitHub-Mark.png"); 
```

### Imagen de fondo - Repetición

Por defecto, la propiedad de la `background-image` repite en los ejes X e Y. Si desea establecer un eje, como el eje X, use el tipo de propiedad de `background-repeat` :

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: repeat-x; 
```

Pero a veces no quieres tener tu fondo en toda la superficie, debes especificarlo escribiendo:

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
```

### Imagen de fondo - Posición

Puede especificar la posición del fondo escribiendo:

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position : left bottom; 
```

Se establecerá el fondo en la parte inferior izquierda del elemento.

### Imagen de fondo - Posición fija

Si desea tener una imagen de fondo que no se desplace con el resto de la página, puede usar la propiedad `background-attachement` :

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position: left bottom; 
   background-attachment: fixed; 
```

### Propiedad de taquigrafía

Puede pasar todas las propiedades en un `background` super-propiedad:

```css
   background: #F00 url("GitHub-Mark.png") no-repeat fixed left bottom; 
```

Cuando usas la propiedad de taquigrafía, debes respetar este orden:

1.  Color de fondo
2.  Imagen de fondo
3.  Repetición de fondo
4.  Adjunto de fondo
5.  Posición de fondo

No importa si falta una propiedad, siempre que respete el pedido:

```css
   background: url("GitHub-Mark.png") no-repeat left bottom; 
```

Esto funcionará incluso si faltan el color y el accesorio.

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)