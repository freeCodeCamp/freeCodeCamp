---
title: Font Family Property
localeTitle: Propiedad familiar de fuentes
---
## Propiedad familiar de fuentes

La propiedad de la familia de fuentes es una propiedad en CSS. Los desarrolladores lo utilizan para cambiar la familia de fuentes (o "fuente") del texto de un sitio web, o una parte del texto de un sitio web.

Los ejemplos de fuentes incluyen Arial, Georgia, Times New Roman y muchos más.

Para cambiar la fuente de una parte del texto, escriba el selector del texto específico y un par de corchetes. Dentro de los corchetes, escriba `font-family:` y luego el nombre de la fuente. Si el nombre de la fuente tiene más de una palabra, debe usar comillas simples o dobles. De lo contrario, las citas no son necesarias.

```html

<p>This font will be in Times New Roman.</p> 
```

```css
p { 
  font-family: 'Times New Roman'; 
 } 
```

Pero muchas personas diferentes con diferentes computadoras navegan en la web a nivel mundial. Esto significa que no todos tendrán Times New Roman instalado en sus computadoras. Para ayudar a esos usuarios, debe agregar fuentes de respaldo. Las fuentes alternativas son otras que el navegador utilizará en caso de que la primera fuente no esté disponible. Agregue una coma después de la primera fuente y agregue el nombre de la primera fuente alternativa. Puede utilizar más de una fuente alternativa.

```html

<p>This font may or may not be in Lato.</p> 
```

```css
p { 
  font-family: Lato, Helvetica, Georgia; 
  /* Helvetica and Georgia are fallback fonts */ 
 } 
```

Si el usuario no tiene instalado Lato primero, entonces el navegador intentará usar Helvetica. Si el usuario tampoco tiene Helvetica, entonces el navegador intentará usar Georgia. Si el usuario no tiene Georgia, el navegador usará una fuente instalada en la computadora del usuario.

Para las fuentes de respaldo, puede usar fuentes con nombre como Georgia. También puede usar tipos generales como "sans-serif", "serif", "monoespacio" y otros. Las fuentes Sans-serif, como Lato, son fuentes sin pequeñas líneas en los extremos de las letras y los números. Las fuentes Serif, como Times New Roman, usan pequeñas líneas al final de las letras y los números. Las fuentes monoespaciadas, como Consolas, tienen letras y números que tienen el mismo ancho.

```html

<p>This font may or may not be in Lato.</p> 
```

```css
p { 
  font-family: Lato, sans-serif, monospace; 
 } 

```