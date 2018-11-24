---
title: Pathogen
localeTitle: Patógeno
---
## Patógeno

Pathogen le ayuda a administrar su ruta de tiempo de ejecución con facilidad.

Permite instalar fácilmente paquetes para Vim.

Ejecuta los siguientes comandos:
```
mkdir -p ~/.vim/autoload ~/.vim/bundle && \ 
 curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim 
```

* * *

## Manipulación del camino en tiempo de ejecución

Agregue este comando a su archivo .vimrc:
```
execute pathogen#infect() 
```

Si no tiene ningún archivo .vimrc, escriba `vim ~/.vimrc` y pegue esto:
```
execute pathogen#infect() 
 syntax on 
 filetype plugin indent on 
```

Este es un ejemplo muy básico. En este momento, todos los complementos se extraerán a `~/.vim/bundle` y se agregarán a _`runtimepath`_

* * *

#### | Ejemplo

Si desea instalar complementos como NERDTree, simplemente ejecute esto:
```
cd ~/.vim/bundle 
 git clone https://github.com/scrooloose/nerdtree 
```

Se agregará al \_ `runtimepath` .

Recursos curados de los complementos de Vim: [Vim Awesome](https://vimawesome.com)