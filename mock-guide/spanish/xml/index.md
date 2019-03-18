---
title: Extensible Markup Language (XML)
localeTitle: Lenguaje de marcado extensible (XML)
---
## Lenguaje de marcado extensible (XML)

XML significa eXtensible Markup Language. Es extensible, porque no usa un conjunto predefinido de etiquetas para identificar componentes estructurales, sino que proporciona un mecanismo para definir dichos conjuntos de etiquetas. El propósito principal del lenguaje es compartir los datos. A diferencia de HTML, en XML no hay un conjunto predefinido de etiquetas y las etiquetas especifican el significado, en lugar de la presentación.

\## Sintaxis de XML La sintaxis XML se refiere a las reglas que determinan cómo se puede escribir una aplicación XML. La sintaxis XML es muy sencilla, y esto hace que XML sea muy fácil de aprender. Los documentos XML deben contener un elemento raíz que sea el padre de todos los demás elementos:
```
<root> 
  <child> 
    <subchild>.....</subchild> 
  </child> 
 </root> 
```

#### XML debe tener un elemento raíz

La sintaxis anterior muestra el elemento raíz que es necesario al crear un código XML. Esto se puede ver en el ejemplo:
```
<?xml version="1.0" encoding="UTF-8"?> 
 <note> 
  <to>Tove</to> 
  <from>Jani</from> 
  <heading>Reminder</heading> 
  <body>Don't forget me this weekend!</body> 
 </note> 
```

En este ejemplo, 'nota' es el elemento raíz.

*   Ventajas de usar XML:
    
    *   Simplicidad: los documentos XML son archivos de texto normales que se pueden crear y editar con cualquier editor de texto.
    *   Independencia del vendedor
    *   Independencia de la plataforma
    *   Amplia infraestructura
*   Desventajas de usar XML:
    
*   Sintaxis verbosa y engorroso
    
*   Almacenamiento altamente ineficiente
    

En el lenguaje informático, el lenguaje de marcado extensible (XML) es el que define un conjunto o bloque de reglas que luego se utilizan para codificar documentos en un formato que es legible para máquinas y para humanos.

Hay una cosa principal entre XML y HTML que los hace diferentes entre sí. Es que XML fue diseñado para llevar una información particular y se enfoca solo en esa información. Y HTML se enfoca en mostrar esa información particular como el diseño y todas estas cosas con respecto a la información.

Además, XML no utiliza etiquetas predefinidas como las que utiliza HTML. Utiliza etiquetas definidas por el usuario.

A continuación se presenta la simplicidad causada por XML:

1.  Simplifica el intercambio de datos.
2.  Simplifica el transporte de datos.
3.  Simplifica los cambios de plataforma.
4.  Simplifica la disponibilidad de los datos.

Y su principal logro fue que se convirtió en una Recomendación del W3C desde febrero de 1998.

### Más información

*   [Introducción a XML](https://developer.mozilla.org/en-US/docs/XML_introduction)
*   [Introducción a XML](https://www.w3schools.com/xml/xml_whatis.asp)