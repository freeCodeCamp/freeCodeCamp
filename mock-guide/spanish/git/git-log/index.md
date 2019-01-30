---
title: Git Log
localeTitle: Git Log
---
## Git Log

El comando `git log` muestra todas las confirmaciones en el historial de un repositorio.

Por defecto, el comando muestra cada confirmación:

*   Algoritmo de hash seguro (SHA)
*   autor
*   fecha
*   cometer mensaje

### Navegando por Git Log

Git utiliza el buscapersonas de la terminal Less para recorrer el historial de confirmación. Puedes navegarlo con los siguientes comandos:

*   para desplazarse hacia abajo una línea, use j o ↓
*   para desplazarse hacia arriba una línea, use k o ↑
*   para desplazarse hacia abajo en una página, use la barra espaciadora o el botón Av Pág.
*   para desplazarse por una página, use b o el botón Re Pág
*   para salir del registro, usa q

### Git Log Flags

Puedes personalizar la información presentada por `git log` usando marcas.

#### \--una línea

`git log --oneline`

El indicador `--oneline` hace que se muestre el `git log`

*   un compromiso por línea
*   Los primeros siete personajes de la SHA.
*   el mensaje de confirmación

#### \--estado

`git log --stat`

El indicador `--stat` hace que se muestre el `git log`

*   Los archivos que fueron modificados en cada confirmación.
*   el número de líneas agregadas o eliminadas
*   una línea de resumen con el número total de archivos y líneas cambiadas

#### \--patch o -p

`git log --patch`

o, la versión más corta

`git log -p`

La `--patch` hace que se muestre el `git log`

*   los archivos que modificaste
*   la ubicación de las líneas que agregó o eliminó
*   Los cambios específicos que hiciste.

### Ver número especificado de confirmaciones por autor

Para ver un número específico de confirmaciones por un autor en el repositorio actual (opcionalmente en un formato prettified), se puede usar el siguiente comando

`git log --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" -n {NUMBER_OF_COMMITS} --author="{AUTHOR_NAME}" --all`

#### Comenzar en un compromiso específico

Para iniciar el `git log` en una confirmación específica, agregue el SHA:

`git log 7752b22`

Esto mostrará la confirmación con el SHA 7752b22 y todas las confirmaciones realizadas antes de esa confirmación. Puedes combinar esto con cualquiera de las otras banderas.

#### \--grafico

`git log --graph`

La `--graph` permite ver su `git log` como un gráfico. Para hacer las cosas más interesantes, puede combinar este comando con la opción `--oneline` que aprendió de arriba.

`git log --graph --oneline`

La salida sería similar a,
```
* 64e6db0 Update index.md 
 * b592012 Update Python articles (#5030) 
 * ecbf9d3 Add latest version and remove duplicate link (#8860) 
 * 7e3934b Add hint for Compose React Components (#8705) 
 * 99b7758 Added more frameworks (#8842) 
 * c4e6a84 Add hint for "Create a Component with Composition" (#8704) 
 *   907b004 Merge branch 'master' of github.com:freeCodeCamp/guide 
 |\ 
 | * 275b6d1 Update index.md 
 * |   cb74308 Merge branch 'dogb3rt-patch-3' 
 |\ \ 
 | |/ 
 |/| 
 | *   98015b6 fix merge conflicts after folder renaming 
 | |\ 
 |/ / 
 | * fa83460 Update index.md 
 * | 6afb3b5 rename illegally formatted folder name (#8762) 
 * | 64b1fe4 CSS3: border-radius property (#8803) 
```

Una de las ventajas de usar este comando es que le permite obtener una visión general de cómo se han fusionado los compromisos y cómo se creó el historial de git.

Puede haber otras opciones que podría usar en combinación con `--graph` . Par de ellos son `--decorate` y `--all` . Asegúrese de probar estos también. Y consulte la [documentación](https://git-scm.com/docs/git-log) para obtener más información útil.

#### Más información:

*   [Conceptos básicos de Git - Viendo el historial de Commit](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
*   [Git Log](https://git-scm.com/docs/git-log)

##### Otros recursos en Git en guide.freecodecamp.org

*   [Git Merge](../git-merge/index.md)
*   [Git Checkout](../git-checkout/index.md)
*   [Git Commit](../git-commit/index.md)
*   [Git Stash](../git-stash/index.md)
*   [Git Branch](../git-branch/index.md)