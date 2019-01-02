---
title: Gitignore
localeTitle: .gitignore
---
## Gitignore

El archivo `.gitignore` es un archivo de texto que le dice a Git qué archivos o carpetas debe ignorar en un proyecto.

Un archivo `.gitignore` local generalmente se coloca en el directorio raíz de un proyecto. También puede crear un archivo `.gitignore` global y cualquier entrada en ese archivo se ignorará en todos sus repositorios Git.

Para crear un archivo `.gitignore` local, cree un archivo de texto y `.gitignore` nombre `.gitignore` (recuerde incluir el `.` Al principio). Luego edite este archivo según sea necesario. Cada nueva línea debe incluir un archivo o carpeta adicional que desee que Git ignore.

Las entradas en este archivo también pueden seguir un patrón coincidente.

*   `*` se utiliza como una coincidencia de comodín
*   `/` se usa para ignorar las `.gitignore` acceso relativas al archivo `.gitignore`
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

Para agregar o cambiar su archivo .gitignore global, ejecute el siguiente comando:

```bash
git config --global core.excludesfile ~/.gitignore_global 
```

Esto creará el archivo `~/.gitignore_global` . Ahora puede editar ese archivo de la misma manera que un archivo `.gitignore` local. Todos los repositorios de Git ignorarán los archivos y carpetas enumerados en el archivo `.gitignore` global.

### Más información:

*   Documentación Git: [Gitignore](https://git-scm.com/docs/gitignore)
*   Ignorando archivos: [GitHub](https://help.github.com/articles/ignoring-files/)
*   Plantillas útiles `.gitignore` : [GitHub](https://github.com/github/gitignore)