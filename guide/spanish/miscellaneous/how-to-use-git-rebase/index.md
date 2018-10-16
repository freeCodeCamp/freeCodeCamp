---
title: How to Use Git Rebase
localeTitle: Cómo usar Git Rebase
---
**¿Fue referido a esta página para que su PR sea aceptado? ¡Desplázate a la derecha hasta Git Rebase en FCC!**

`git rebase` es una herramienta extremadamente útil que trata sobre la reescritura del historial de git, aunque se usa más comúnmente para _aplastar_ múltiples confirmaciones en una. Aunque es útil en este escenario, esta no es la única función que puede realizar el comando `git rebase` . De hecho, se demuestra que es mucho más útil cuando se usa para la función prevista que su nombre sugiere: básicamente para _volver_ a _escribir_ una rama. Déjame explicarte lo que quiero decir con eso.

Digamos que tienes un repositorio como este:
```
                                                  --- Commit 5 ----------- auth branch 
                                                / 
                                               --- Commit 4 -------------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch 
```

Si desea combinar la rama `auth` con la rama `dev` , git le lanzará un error porque su rama `auth` está desactualizada: no tiene en cuenta el Commit 4. Tendrá que actualizar su sucursal. hasta la fecha.

Git le proporciona dos métodos para hacer esto: el comando de `merge` y el comando de `rebase` . Para una exploración del comando de `merge` , visite el artículo relevante de la wiki: [Git Merge](//forum.freecodecamp.com/t/understand-how-to-use-git-merge/13215)

Vamos a ejecutar `rebase` ahora:
```
$ git checkout auth 
 $ git rebase dev 
```

El repositorio ahora se verá así:
```
                                                                 --- Commit 5 --- auth branch 
                                                               / 
                                               --- Commit 4 --------------------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 --------------------------------------- master branch 
```

¿Ves lo que pasó? Básicamente, Git guardó las confirmaciones en la rama de `auth` , las "eliminó" y luego las creó nuevamente con las mismas confirmaciones _después de_ las confirmaciones en la rama `dev` . ¡Esto significa que `Commit 4` solo existe en la rama `dev` y no en la rama `auth` ! Y eso es realmente todo lo que hay que hacer! Esto puede parecer un poco confuso al principio, pero trate de entender el diagrama. Esta es una herramienta extremadamente útil.

## Git-Rebase en FCC

### Prevención de conflictos de fusión

Si contribuye al código base de la FCC, o planea hacerlo, siempre ejecute este comando antes de realizar cambios en sus archivos locales y presionarlos:

`git pull --rebase upstream staging`

Si no tiene una configuración en `upstream` ascendente, ejecute este comando antes de ejecutar el comando anterior (git generará un error porque no sabe qué es en sentido ascendente): `git remote add upstream https://github.com/freecodecamp/freecodecamp.git`

Esto extraerá los últimos cambios de la rama de preparación de la FCC y los volverá a ajustar con la rama de preparación de su fork para que no tenga ningún conflicto al abrir el PR ![:slight_smile:](//forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=2 ": slight_smile:")

### Aplastamiento

Si tiene varias confirmaciones que desea aplastar en una, siga las instrucciones para **[Aplastar](//forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231)** .