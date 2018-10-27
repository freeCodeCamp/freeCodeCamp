---
title: Bash ls
localeTitle: Bash ls
---
## Bash ls

`ls` es el comando en sistemas operativos tipo Unix para listar el contenido de un directorio, por ejemplo, nombres de carpetas y archivos.

### Uso

```bash
cat [options] [file_names] 
```

Opciones más utilizadas:

*   `-a` , todos los archivos y carpetas, incluidos los que están ocultos y comienzan con a `.`
*   `-l` , Lista en formato largo
*   `-G` , habilitar salida coloreada.

Puedes listar los items de un directorio incluso sin tener que entrar en el. Imagina que estas en un directorio con las carpetas Test1,Test2. Estas en el directorio raiz que contiene estas carpetas por lo que puedes listar los contenidos de Test1 de la siguiente manera:

```bash 
ls Test1 
```

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
