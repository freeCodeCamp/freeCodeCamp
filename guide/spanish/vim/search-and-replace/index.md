---
title: Search and Replace
localeTitle: Buscar y reemplazar
---
# Buscando y reemplazando en Vim

Buscar y reemplazar en vim buscará todas las instancias de un patrón de texto dado y lo reemplazará con una cadena.

### Teclas de comando

Los comandos utilizados para buscar y reemplazar:

*   `:substitute`
*   `:s` (forma abreviada abreviada de sustituto)

### Estructura de mando

La estructura utilizada para buscar y reemplazar:

`:[range]` `s` / `[pattern]` / `[string]` / `[flags]` `[count]`

dónde…

*   `[range]` indica las líneas a buscar (por ejemplo, `1` : primera línea, `$` : última línea, `%` : todas las líneas).
*   `[pattern]` es el patrón de texto a buscar.
*   `[string]` es la cadena que reemplazará el patrón de texto.
*   `[flags]` activan las opciones de búsqueda y reemplazo adicionales (por ejemplo, `c` : confirmar sustitución, `g` : reemplazar todas las apariciones en cada línea, `i` : ignorar mayúsculas y minúsculas).
*   `[count]` reemplaza en `[count]` líneas a partir de la última línea en `[range]` (o línea actual si `[range]` omite `[range]` ).

### Ejemplos comunes

Algunos ejemplos comunes de búsqueda y reemplazo se enumeran a continuación:

*   `:s/foo/bar/` Cambia el primer 'foo' a 'bar' en la línea actual.
*   `:s/foo/bar/g` Cambia cada 'foo' a 'bar' en la línea actual.
*   `:%s/foo/bar/g` Cambia cada 'foo' a 'bar' en todas las líneas.
*   `:13s/foo/bar/g` Cambie cada 'foo' a 'bar' en la línea 13.
*   `:%s/foo/bar/cgi` Cambie cada 'foo' a 'bar' en todas las líneas.