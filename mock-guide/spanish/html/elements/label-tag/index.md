---
title: Label Tag
localeTitle: Día de la etiqueta
---
# Etiqueta

< **_etiqueta_** > define una etiqueta para una  tipo de elemento / etiqueta.

### Uso
```
<label for="id">Label</label> 
 <input type="text" name="text" id="id" value="yourvalue"><br> 
```

Como puede ver, el atributo _for_ de la etiqueta debe ser igual al atributo id del elemento relacionado para unirlos.

### Soporte de plataforma

| Navegador | Element Support | |: -----: |: -------------: | | Internet Explorer |: marca de _verificación_ blanca: | | Mozilla Firefox |: marca de _verificación_ blanca: | | Google Chrome |: marca de _verificación_ blanca: | Ópera |: marca de _verificación_ blanca: | | Safari |: marca de _verificación_ blanca: |

### Atributos

| Atributo | Valor | Descripción | |: -------: |: ----: |: ---------: | para _ID de_ elemento _| Especifica a qué elemento de formulario está enlazada una etiqueta | | form | form_ id | Especifica una o más formas a las que pertenece la etiqueta |

### Atributo global

La **etiqueta** < **label** > admite los atributos globales en HTML.

### Atributo del evento

La **etiqueta** < **label** > admite los atributos de evento en HTML.

> El elemento < **label** > no se representa como algo especial para el usuario. Sin embargo, proporciona una mejora de la usabilidad para los usuarios de mouse, porque si el usuario hace clic en el texto dentro del elemento, cambia el control.

#### Más información:

# [https://www.w3schools.com/jsref/dom _obj_ label.asp](https://www.w3schools.com/jsref/dom_obj_label.asp)

## Etiqueta

La `<label>` define una etiqueta para un elemento `<input>` .

Una etiqueta se puede vincular a un elemento utilizando el atributo "for" o colocando el elemento dentro del elemento.

```html

<label for="peas">Do you like peas? 
  <input type="checkbox" name="peas" id="peas"> 
 </label> 
```

```html

<label>Do you like peas? 
  <input type="checkbox" name="peas"> 
 </label> 
```

#### Más información:

[MDN - Etiqueta Tabel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)  
[W3School - Etiqueta de la etiqueta](https://www.w3schools.com/tags/tag_label.asp)