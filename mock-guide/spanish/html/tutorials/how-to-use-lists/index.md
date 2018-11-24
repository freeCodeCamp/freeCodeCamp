---
title: How to Use Lists
localeTitle: Cómo usar las listas
---
## Cómo usar las listas

Las listas se utilizan para especificar un conjunto de elementos consecutivos o información relacionada de forma bien formada y semántica, como una lista de ingredientes o una lista de pasos de procedimientos. El marcado HTML tiene tres tipos diferentes de listas: listas **ordenadas** , no **ordenadas** y listas de **descripción** .

### Listas ordenadas

Una lista ordenada se utiliza para agrupar un conjunto de elementos relacionados, en un orden específico. Esta lista se crea con la etiqueta `<ol>` . Cada elemento de la lista está rodeado con la etiqueta `<li>` .

##### Código

```html

<ol> 
    <li>Mix ingredients</li> 
    <li>Bake in oven for an hour</li> 
    <li>Allow to stand for ten minutes</li> 
 </ol> 
```

##### Ejemplo

1.  Mezclar los ingredientes
2.  Hornear en horno durante una hora
3.  Dejar reposar durante diez minutos.

### Listas Desordenadas

Una lista desordenada se utiliza para agrupar un conjunto de elementos relacionados, sin ningún orden en particular. Esta lista se crea con la etiqueta `<ul>` . Cada elemento de la lista está rodeado con la etiqueta `<li>` .

##### Código

```html

<ul> 
    <li>Chocolate Cake</li> 
    <li>Black Forest Cake</li> 
    <li>Pineapple Cake</li> 
 </ul> 
```

#### Ejemplo

*   Pastel de chocolate
*   Torta del bosque negro
*   Pastel de piña

### Descripción de listas

Una lista de descripción se utiliza para especificar una lista de términos y sus descripciones. Esta lista se crea con la etiqueta `<dl>` . Cada elemento de la lista está rodeado con la etiqueta `<dd>` .

##### Código

```html

<dl> 
    <dt>Bread</dt> 
    <dd>A baked food made of flour.</dd> 
    <dt>Coffee</dt> 
    <dd>A drink made from roasted coffee beans.</dd> 
 </dl> 
```

##### Salida

Pan de molde

Una comida al horno hecha de harina.

café

Una bebida hecha de granos de café tostados.

#### Lista de estilos

También puede controlar el estilo de la lista. Puede utilizar la propiedad de listas de `list-style` de lista. Su lista puede ser viñetas, cuadradas, en números romanos o puede ser imágenes que desee.

propiedad de `list-style` es una forma abreviada de `list-style-type` `list-style-position` `list-style-image` , `list-style-position` `list-style-image` , `list-style-image` .

#### Más información:

\[Listas HTML · Documentos de plataforma web\] (https://webplatform.github.io/docs/guides/html\_lists/ )