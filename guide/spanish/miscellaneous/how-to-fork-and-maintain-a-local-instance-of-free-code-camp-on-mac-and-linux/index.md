---
title: How to Fork and Maintain a Local Instance of Free Code Camp on Mac and Linux
localeTitle: Cómo bifurcar y mantener una instancia local de Free Code Camp en Mac y Linux
---
Si planea escribir una Solicitud de extracción para Free Code Camp , es casi seguro que necesitará una copia local del sitio. Tener una copia local del sitio le dará una capacidad adicional con Git que no está disponible a través de la interfaz del navegador de GitHub, incluida la actualización de su bifurcación y las confirmaciones de rebasado / aplastamiento.

Esta guía cubrirá cómo dividir el proyecto de la FCC, clonar una copia local y cómo mantener el tenedor. Se darán todos los comandos de Git para la línea de comandos, que le recomendamos encarecidamente que utilice, pero la mayoría de los comandos también se pueden ejecutar en un entorno gráfico de Git.

Si está usando Windows, [use esta guía en su lugar](https://forum.freecodecamp.com/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366) .

## ¿Necesitas ayuda?

Los Mods y el personal de Free Code Camp están disponibles para ayudarlo con los problemas relacionados con la Solicitud de extracción en nuestra [sala de chat de colaboradores de ayuda.](https://gitter.im/FreeCodeCamp/HelpContributors)

## Configurando su sistema

1.  Instala [Git](https://git-scm.com/) o tu cliente Git favorito
2.  (Opcional) [Configure una clave SSH](https://help.github.com/articles/generating-ssh-keys/) para Github.  
    El uso de SSH puede acelerar enormemente sus interacciones con GitHub, ya que no se le pedirá su contraseña.
3.  Cree un directorio de proyectos padre en su sistema. A los efectos de este documento, asumiremos que es `/mean/`

## Bifurcación Free Code Camp

1.  Vaya al repositorio de Free Code Camp de nivel superior: `https://github.com/FreeCodeCamp/freecodecamp`
2.  Haga clic en el botón "Bifurcación" en la esquina superior derecha de la interfaz. [Más detalles aquí](https://help.github.com/articles/fork-a-repo/) .
3.  Después de `username/freecodecamp` el proyecto, se lo llevará a su copia del repositorio de la FCC en `username/freecodecamp`

## Clonando su tenedor

1.  Desde su fork de FCC, copie la URL de clonación HTTPS o SSH (si instaló las claves SSH)
2.  Abra un Bash Shell / Command Line / Terminal en su directorio de proyectos (IE: `/mean/` )
3.  Clona tu tenedor de git:

`git clone https://github.com/yourUserName/FreeCodeCamp.git`

Esto descargará el repositorio completo de la FCC a su directorio de proyectos.

`bash $ git clone https://github.com/yourUserName/FreeCodeCamp.git Cloning into 'FreeCodeCamp'... remote: Counting objects: 37294, done. remote: Compressing objects: 100% (13/13), done. remote: Total 37294 (delta 5), reused 0 (delta 0), pack-reused 37281 Receiving objects: 100% (37294/37294), 18.69 MiB | 3.99 MiB/s, done. Resolving deltas: 100% (26053/26053), done. Checking connectivity... done. Checking out files: 100% (573/573), done.`

### Configuración de su Upstream

1.  Cambiar directorio al nuevo directorio `FreeCodeCamp`
2.  Agregue un control remoto al repositorio oficial de la FCC:

`git remote add upstream https://github.com/FreeCodeCamp/FreeCodeCamp.git`

¡Felicidades, ahora tiene una copia local del repositorio de la FCC!

## Manteniendo tu Tenedor

Ahora que tiene una copia de su tenedor, hay un trabajo que tendrá que hacer para mantenerlo actualizado.

## Rebasando desde aguas arriba

Haga esto cada vez antes de crear una rama para un RP:

1.  Asegúrese de que está en la `staging` rama

`bash $ git status On branch staging Your branch is up-to-date with 'origin/staging'.`

1.  Si no está en el almacenamiento intermedio, resuelva los archivos / confirmaciones pendientes y el almacenamiento de pago.  
    `git checkout staging`
2.  Hacer un tirón con rebase contra `upstream` :

`git pull --rebase upstream staging`

Esto reducirá todos los cambios en la puesta en escena oficial sin realizar un compromiso adicional en su repositorio local.  
4\. (Opcional) Forzar empuje su puesta en escena actualizada a su horquilla GitHub

`git push origin staging --force`

Esto sobrescribirá la rama de ensayo en su horquilla.

`bash $ git push origin staging --force Counting objects: 99, done. Delta compression using up to 12 threads. Compressing objects: 100% (38/38), done. Writing objects: 100% (38/38), 16.14 KiB | 0 bytes/s, done. Total 38 (delta 25), reused 0 (delta 0) To git@github.com:yourUserName/FreeCodeCamp.git f7a525c..8a2271d staging -> staging`