---
title: Understand How to Use Git Merge
localeTitle: Entender cómo usar Git Merge
---
Digamos que está trabajando en una aplicación que es similar a Reddit, pero específicamente para fragmentos de código. En una aplicación de este tipo, es probable que tenga una rama `master` que contenga todas las funciones liberadas, una rama `dev` que pueda contener funciones que se hayan codificado, pero que aún no se hayan implementado. Todos los desarrolladores en el equipo creará sus propias ramas de la `dev` rama para las características individuales. La estructura del repositorio se vería así:
```
                                  --- Commit 3 --------- dev branch 
                                / 
 --- Commit 1 ---- Commit 2 ---------------------------- master branch 
```

Si decide fusionar el tercer commit ( `Commit 3` ) en la rama `master` de la rama `dev` , entonces sería tan simple como ejecutar un comando `git merge` porque la rama `dev` está _actualizada_ con la rama `master` : todos las confirmaciones en la rama `master` existen en la rama `dev` . Puedes fusionar las ramas ejecutando los siguientes comandos:
```
git checkout dev 
 git merge master 
```

El resultado sería algo como esto:
```
                                               --------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch 
```

Ahora decides trabajar en la característica de autenticación. Para trabajar en la función de autenticación, creas otra rama basada en la rama `dev` y decides llamarla `auth` . Así es como se ve la estructura de recompra:
```
                                                  ------ auth branch 
                                                / 
                                               --------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch 
```

Si tuviera que confirmar algún cambio en la rama de `auth` , fusionarlos con la rama `dev` sería trivial porque está actualizado con la rama `dev` . Ahora, mientras trabajaba en la función de autenticación, uno de los desarrolladores terminó de codificar la función de resaltado de sintaxis y decidió fusionarla con la rama `dev` . El repositorio se ve así ahora:
```
                                                  --- Commit 5 --- auth branch 
                                                / 
                                               --- Commit 4 ------ dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 ------------------------ master branch 
```

Tu rama, en terminología de Git, ahora es un compromiso detrás de la rama `dev` . Esto significa que no puede simplemente fusionar las dos ramas: debe actualizar su rama de `auth` con la rama `dev` . Esto se puede hacer con `git merge` !

La fusión de la rama `auth` con la rama `dev` , o la rama `dev` con la rama `master` es sencilla y hace lo que se espera, pero la combinación a la inversa tiene sus propias idiosincrasias que no son intuitivas a primera vista. Puedo balbucear al respecto, o puedo mostrarte otro gran diagrama de lo que sucedería si fusionaras la rama `dev` con la rama `auth` en este momento:
```
                                                  --- Commit 5 ----------- auth branch 
                                                /               / 
                                               --- Commit 4 -------------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch 
```

¿Ves lo que hice ahí? Mire el diagrama por un segundo y trate de entender lo que está sucediendo aquí antes de continuar. Básicamente, hiciste otra confirmación a la rama de `auth` con las confirmaciones en la rama `dev` incluida. Pero eso está bien, ¿verdad? Después de todo, al final del día quería actualizar mi sucursal de `auth` con la de `dev` , ¿y ahora _está_ actualizada? Sí. Pero déjame mostrarte un diagrama para ilustrar explícitamente lo que implica el otro diagrama: Tu rama de `auth` ahora se ve así:
```
    --- Commit 5 ------- Commit 4 ------- auth branch 
  /                / 
 ------ Commit 4 --- --------------------- dev branch 
```

¿Vealo Ahora? _Copiaste_ el commit sobre. Si fueras a unirte a la rama `dev` ahora, se vería algo así:
```
    --- Commit 5 ------- Commit 4 -------------------------------------- auth branch 
  /                /                  \ 
 ------- Commit 4 ----------------------- Commit 5 ---- Commit 4 -------- dev branch 
```

¡Has fusionado el mismo commit dos veces! Por supuesto, esto no tendrá repercusiones para su propio código, pero si un buen día decide ver sus `git logs` , inmediatamente se dará cuenta de lo sucio que está su historial de git, con algunos confirmaciones una y otra vez. Si quisiera volver a un compromiso, sería muy difícil decidir a qué compromiso volver.

Es preferible que utilices [Git-Rebase](http://forum.freecodecamp.com/t/how-to-use-git-rebase/13226) .