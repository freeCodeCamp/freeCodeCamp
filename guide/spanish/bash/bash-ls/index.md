---
title: Bash ls
localeTitle: Bash ls
---
## Bash ls

`ls` es un comando en sistemas operativos similares a Unix para listar el contenido de un directorio, por ejemplo, nombres de carpetas y archivos.

### Uso

```bash
cat [options] [file_names] 
```

Opciones más utilizadas:

*   `-a` , todos los archivos y carpetas, incluidos los que están ocultos y comienzan con a `.`
*   `-l` , Lista en formato largo
*   `-G` , habilitar salida coloreada.

### Ejemplo:

Lista de archivos en `freeCodeCamp/guide/`

```bash
ls                                                                ⚬ master 
 CODE_OF_CONDUCT.md bin                package.json       utils 
 CONTRIBUTING.md    gatsby-browser.js  plugins            yarn.lock 
 LICENSE.md         gatsby-config.js   src 
 README.md          gatsby-node.js     static 
 assets             gatsby-ssr.js      translations 
```

#### Más información:

*   [Wikipedia](https://en.wikipedia.org/wiki/Ls)