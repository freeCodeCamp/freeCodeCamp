---
title: How to Make a Pull Request on Free Code Camp
localeTitle: Cómo hacer una solicitud de extracción en Free Code Camp
---
# Solicitud de extracción de Code Camp gratis

**¿Qué es una solicitud de extracción?**

Una solicitud de extracción (PR) es un método para enviar los cambios propuestos al Free Code Camp Repo (o cualquier Repo, para el caso). Realizará cambios en las copias de los archivos que conforman Free Code Camp en una bifurcación personal y luego solicitará que los acepte el Free Code Camp.

## ¿Necesitas ayuda?

Los Mods y el personal de Free Code Camp están disponibles para ayudarlo con los problemas relacionados con la Solicitud de extracción en nuestra [sala de chat de colaboradores de ayuda.](https://gitter.im/FreeCodeCamp/Contributors)

## Métodos

Hay dos métodos para crear un Pull para Free Code Camp:

1.  Edición de archivos a través de la interfaz de GitHub
2.  Edición de archivos en un clon local

## Importante: SIEMPRE EDITAR EN UNA RAMIFICACIÓN

Elimine solo una cosa de este documento, debe ser esto: Nunca, NUNCA realice ediciones en la rama de `staging` . SIEMPRE haga una nueva rama ANTES de editar archivos. Esto es crítico, porque si no se acepta su RP, su copia de la `staging` en `staging` quedará manchada para siempre y la única manera de solucionarlo es eliminar su fork y volver a abrirla.

## Edición a través de su horquilla local (Recomendado)

Este es el método recomendado. Lea acerca de [cómo configurar y mantener una instancia local de Free Code Camp](http://forum.freecodecamp.com/t/how-to-fork-and-maintain-a-local-instance-of-free-code-camp/19116) .

1.  Realizar el paso de mantenimiento de rebasar la `staging`
2.  Asegúrate de estar en la rama de `staging` utilizando el `git status` :

\`  
estado de $ git  
En la puesta en escena de la rama  
Su sucursal está actualizada con 'origen / puesta en escena'.

No hay nada que cometer, trabajando en el directorio limpio.  
\`

1.  Si no está en el almacenamiento intermedio o si su directorio de trabajo no está limpio, resuelva los archivos / confirmaciones pendientes y el almacenamiento de `git checkout staging`
2.  Cree una rama de la `staging` en `staging` con git: `git checkout -B branch/name-here` Nota: La denominación de la rama es importante. Use un nombre como `fix/short-fix-description` o `feature/short-feature-description` Revise las [Pautas de contribución para](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) obtener más detalles.
3.  Edite su (s) archivo (s) localmente con el editor de su elección
4.  Comprueba el `git status` tu `git status` para ver archivos sin etapas.
5.  Agregue sus archivos editados: `git add path/to/filename.ext` También puede hacer: `git add .` para agregar todos los archivos sin etapas. Sin embargo, tenga cuidado porque puede agregar accidentalmente los archivos que no desea que se agreguen. Revisa tu `git status` primero.
6.  Confirme sus ediciones: `git commit -m "Brief Description of Commit"`
7.  [Aplasta tus compromisos](http://forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231) , si hay más de uno.
8.  Empuje sus compromisos a su Horquilla GitHub: `git push -u origin branch/name-here`
9.  Ir a los pasos comunes

## Edición a través de la interfaz de GitHub

**Nota:** no se recomienda editar a través de la interfaz de GitHub, ya que no es posible actualizar su fork a través de la interfaz de GitHub sin borrar y volver a crear su fork.

1.  Crear un tenedor de la FCC Repo
2.  [Crea una rama](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/) dentro de tu horquilla. Nota: la denominación de sucursales es importante. Use un nombre como `fix/short-fix-description` o `feature/short-feature-description` Revise las [Pautas de contribución para](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) obtener más detalles.
3.  Edita el archivo y confirma los cambios.
4.  Continuar con los pasos comunes.

## Pasos comunes

1.  Una vez que se hayan realizado las ediciones, se le solicitará que cree una solicitud de extracción en la página de Github de su fork.
2.  De forma predeterminada, todas las solicitudes de extracción deben ir en contra del repositorio principal de la FCC, rama de `staging` .
3.  Haga un título claro para su RP que sucintamente indique lo que se está arreglando. No agregue el número de problema en el título. Ejemplos: `Add Test Cases to Algorithm Drop It` `Correct typo in Challenge Size Your Images`
4.  En el cuerpo de su RP, incluya un resumen más detallado de los cambios que realizó y por qué.
5.  Indique si ha probado en una copia local del sitio o no.
6.  Si su RP se debe a un problema, puede hacer [referencia y cerrar ese problema](https://help.github.com/articles/closing-issues-via-commit-messages/) automáticamente agregando una palabra clave como `Closes #xxxx` , donde `xxxx` es el número del problema.

## Próximos pasos

### Si se solicitan cambios

No se preocupe, muchas RP, especialmente las primeras RP, requieren corrección o actualización. Si ha utilizado la interfaz de GitHub para crear su PR, deberá cerrar su PR, crear una nueva rama y volver a enviar. Esto se debe a que no puede aplastar sus confirmaciones a través de la interfaz de GitHub.

Si tiene una copia local del repositorio, puede realizar los cambios solicitados y modificar su compromiso con: `git commit --amend` Esto actualizará su compromiso existente. Cuando lo empujes a tu bifurcación, necesitarás hacer un impulso de fuerza para sobrescribir tu antiguo compromiso: `git push --force`

Asegúrese de publicar en la conversación de relaciones públicas que ha realizado los cambios solicitados.

### Si su PR es aceptada

Una vez que se acepte su RP, puede eliminar la rama que creó para enviarla. Esto mantiene limpio su tenedor de trabajo. Puede hacer esto presionando un botón en la interfaz de GitHub PR. Puede eliminar la copia local de la sucursal con: `git branch -D branch/to-delete-name`

### Si tu PR es rechazada

¡No desesperes! Debe recibir comentarios sólidos de los Moderadores de problemas sobre por qué se rechazó y qué se necesita. Por favor, sigue contribuyendo.