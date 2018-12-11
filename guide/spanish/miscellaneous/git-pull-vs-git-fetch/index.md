---
title: Git Pull Vs Git Fetch
localeTitle: Git Pull Vs Git Fetch
---
Estos dos comandos son utilizados regularmente por los usuarios de git. Veamos la diferencia entre ambos comandos.

Por el bien del contexto, vale la pena recordar que probablemente estamos trabajando en un repositorio de clones. ¿Qué es un clon? simplemente un duplicado de otro repositorio. Básicamente es obtener su propia copia del código fuente de otra persona.

Dicho esto, para mantener actualizado su clon con cualquier cambio que se haya aplicado al original, deberá traerlos a su clon. Ahí es donde entra `fetch` y `pull` . `git fetch` es el comando que le dice a tu git local que recupere la información más reciente de metadatos del original (sin embargo, no realiza ninguna transferencia de archivos. Es más bien como solo verificar si hay cambios disponibles). `git pull` por otro lado, hace que AND aporte (copie) esos cambios desde el repositorio remoto.

P.ej
```
git pull origin ankur bugfix 
```

Lo que debe tener en cuenta es tener en cuenta que, por lo general, hay al menos tres copias de un proyecto en su estación de trabajo. Una copia es su propio repositorio con su propio historial de confirmación (el que ya está guardado, por así decirlo). La segunda copia es su copia de trabajo en la que está editando y construyendo (aún no está comprometida con su repositorio). La tercera copia es su copia local "en caché" de un repositorio remoto (probablemente el original desde donde clonó el suyo). Puede usar `git fetch` para conocer los cambios realizados en el repositorio / rama remota desde su último tirón. Esto es útil para permitir la verificación antes de realizar una extracción real, que podría cambiar los archivos en su sucursal actual y copia de trabajo (y potencialmente perder sus cambios, etc.).
```
git fetch 
 git diff ...origin 

```