---
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
localeTitle: Use tabindex para especificar el orden de enfoque del teclado para varios elementos
---
## Use tabindex para especificar el orden de enfoque del teclado para varios elementos

Siguiendo las instrucciones:

Agregue un conjunto de atributos de tabindex a "1" a la entrada de búsqueda, y un atributo de tabindex establecido a "2" a la entrada de envío.

las lineas 16 y 17 \`\` \`css  
```
become: 
 
 ```css 
    <input type="search" name="search" id="search"> 
    <input type="submit" name="submit" value="Submit" id="submit"> 
```

De esta manera, los controles de formulario de entrada y envío de entrada serán los dos primeros elementos en el orden de tabulación.