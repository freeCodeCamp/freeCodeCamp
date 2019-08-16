---
title: Gitignore
localeTitle: .gitignore
---
## Gitignore

El archivo `.gitignore` es un archivo de texto que le dice a Git qué archivos o carpetas deben ser ignorados en un proyecto.

Un archivo local `.gitignore` se ubica generalmente en el directorio raíz de un proyecto. También se puede crear un archivo `.gitignore` global y cualquier entrada de este archivo será ignorarada en todos sus repositorios Git.

Para crear un archivo `.gitignore` local, cree un archivo de texto y guardeló con el nombre `.gitignore` (recuerde incluir el `.` al principio). Luego edite este archivo según sea necesario. Cada nueva línea debe incluir un archivo o carpeta adicional que desee que sea ignorado por Git.

Las entradas en este archivo también pueden seguir un patrón.

*   `*` se utiliza como un carácter comodín
*   `/` se usa para ignorar las rutas relativas al archivo `.gitignore`
*   `#` se usa para agregar comentarios a un archivo `.gitignore`

Este es un ejemplo de cómo podría verse el archivo `.gitignore` :
```
# Ignore Mac system files 
 .DS_store 
 
 # Ignore node_modules folder 
 node_modules 
 
 # Ignore all text files 
 *.txt 
 
 # Ignore files related to API keys 
 .env 
 
 # Ignore SASS config files 
 .sass-cache 
```

Para agregar o modifica su archivo .gitignore global, ejecute el siguiente comando:

```bash
git config --global core.excludesfile ~/.gitignore_global 
```

Esto creará el archivo `~/.gitignore_global` . Ahora puede editar ese archivo de la misma manera que un archivo `.gitignore` local. Todos los repositorios de Git ignorarán los archivos y carpetas enumerados en el archivo `.gitignore` global.

### Más información:

*   Documentación Git: [Gitignore](https://git-scm.com/docs/gitignore)
*   Ignorando archivos: [GitHub](https://help.github.com/articles/ignoring-files/)
*   Plantillas `.gitignore` útiles: [GitHub](https://github.com/github/gitignore)
