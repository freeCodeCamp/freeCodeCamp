---
title: Doctype Declaration
localeTitle: Declaración de Doctype
---
## Declaración de Doctype

La declaración de tipo de documento HTML, también conocida como `DOCTYPE` , es la primera línea de código requerida en cada documento HTML o XHTML. La declaración `DOCTYPE` es una instrucción para el navegador web sobre la versión de HTML en la que está escrita la página. Esto garantiza que la página web sea analizada de la misma manera por diferentes navegadores web.

En HTML 4.01, la declaración `DOCTYPE` refiere a una definición de tipo de documento (DTD). Una DTD define la estructura y los elementos legales de un documento XML. Debido a que HTML 4.01 se basó en el lenguaje de marcado generalizado estándar (SGML), era necesario referirse a una DTD en la declaración `DOCTYPE` .

Además, doctypes para HTML 4.01 requería la declaración de DTD `strict` , de `transitional` o de `frameset` , cada uno con un caso de uso diferente, como se describe a continuación.

*   **DTD estricta** : se usa para páginas web que _excluyen_ atributos y elementos que W3C espera eliminar gradualmente a medida que crece el soporte de CSS
*   **DTD de transición** : se utiliza para páginas web que _incluyen_ atributos y elementos que W3C espera eliminar gradualmente a medida que crece el soporte de CSS
*   **Frameset DTD** : Se utiliza para páginas web con marcos.

En contraste, la declaración de HTML5 `DOCTYPE` es mucho más simple: ya no requiere una referencia a las DTD ya que ya no se basa en SGML. Vea los ejemplos a continuación para una comparación entre HTML 4.01 y HTML5 `DOCTYPE` s.

### Ejemplos

Sintaxis de Doctype para HTML5 y más allá:

```html

<!DOCTYPE html> 
```

Sintaxis de Doctype para HTML 4.01 estricto:

```html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 
```

Sintaxis de Doctype para transitional HTML 4.01:

```html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
```

Sintaxis de doctype para frameset HTML 4.01:

```html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"> 
```

## Historia

Durante los años formativos de HTML, los estándares web aún no se habían acordado. Los proveedores de navegadores crearían nuevas características de la forma que quisieran. Había poca preocupación por los navegadores de la competencia. El resultado fue que los desarrolladores web tuvieron que elegir un navegador para desarrollar sus sitios. Esto significaba que los sitios no se rendirían bien en navegadores no compatibles. Esta situación no pudo continuar.

El W3C (World Wide Web Consortium) escribió un conjunto de estándares web para manejar esta situación. Todos los proveedores de navegadores y desarrolladores web deben cumplir con estos estándares. Esto aseguraría que los sitios web se mostrarían bien en todos los navegadores. Los cambios requeridos por los estándares eran bastante diferentes de algunas prácticas existentes. La adhesión a ellos rompería los sitios web existentes que no cumplen con las normas.

Para manejar este problema, los proveedores comenzaron a programar los modos de representación en sus navegadores. Los desarrolladores web necesitarían agregar una declaración doctype en la parte superior de un documento HTML. La declaración doctype indicaría al navegador qué modo de representación usar para ese documento. Tres modos de representación separados estaban generalmente disponibles en todos los navegadores. **El modo de estándares completos** representa las páginas de acuerdo con los estándares web de W3C. **El modo Quirks** hace que las páginas no cumplan con los estándares. **El modo casi estándar** está cerca del modo estándar completo, pero cuenta con soporte para una pequeña cantidad de peculiaridades.

En la era moderna de HTML5, los estándares web se implementan completamente en todos los navegadores principales. Los sitios web se desarrollan generalmente de manera compatible con los estándares. Debido a esto, la declaración de doctype HTML5 solo existe para indicar al navegador que rinda el documento en modo de estándares completos.

## Uso

La Declaración de Doctype debe ser la primera línea de código en un documento HTML, además de los comentarios, que pueden ir antes si es necesario. Para documentos HTML5 modernos, la declaración doctype debe ser como sigue:

`<!DOCTYPE html>`

#### Más información:

Aunque ya no se usa en general, hay varios otros tipos de declaración de tipo de documento de versiones anteriores de HTML. También hay versiones específicas para documentos XML. Para leer más sobre estos y ver ejemplos de código para cada uno, eche un vistazo al [artículo de Wikipedia](https://en.wikipedia.org/wiki/Document_type_declaration) .

[Una nota de la W3](https://www.w3.org/QA/Tips/Doctype)

[Entrada del glosario de MDN](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)

[Escuelas w3](https://www.w3schools.com/tags/tag_doctype.asp)

[Una explicación rápida del "Modo de las bromas" y el "Modo de estándares"](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode)