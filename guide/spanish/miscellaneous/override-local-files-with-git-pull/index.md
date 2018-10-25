---
title: Override Local Files with Git Pull
localeTitle: Anular archivos locales con Git Pull
---
# ¿Cuándo necesitas sobrescribir los archivos locales?

Si siente la necesidad de descartar todos los cambios locales y simplemente restablecer / sobrescribir todo con una copia desde la rama remota, debe seguir esta guía.

Importante: Si tienes algún cambio local, se perderán. Con o sin la opción `--hard` , se `--hard` los compromisos locales que no hayan sido empujados.  
Si tiene algún archivo que Git no rastrea (por ejemplo, contenido de usuario cargado), estos archivos no se verán afectados.

## El flujo de trabajo de sobrescritura:

Para sobrescribir tus archivos locales haz:
```
git fetch --all 
 git reset --hard <remote>/<branch_name> 
```

Por ejemplo:
```
git fetch --all 
 git reset --hard origin/master 
```

## Cómo funciona:

`git fetch` descarga lo último desde el control remoto sin intentar fusionar o volver a generar nada.

Luego, el reinicio de git restablece la rama maestra a lo que acabas de recuperar. La opción `--hard` cambia todos los archivos en su árbol de trabajo para que coincidan con los archivos en `origin/master` .

## Información Adicional:

Vale la pena señalar que es posible mantener las confirmaciones locales actuales mediante la creación de una rama desde el `master` o la rama en la que desee trabajar antes de reiniciar:

Por ejemplo:
```
git checkout master 
 git branch new-branch-to-save-current-commits 
 git fetch --all 
 git reset --hard origin/master 
```

Después de esto, todas las confirmaciones antiguas se mantendrán en las confirmaciones `new-branch-to-save-current-commits` . Sin embargo, los cambios no comprometidos (incluso en etapas) se perderán. Asegúrate de guardar y cometer todo lo que necesites.

## Atribución:

_Este artículo se basa en una pregunta de desbordamiento de pila [aquí](http://stackoverflow.com/questions/1125968/force-git-to-overwrite-local-files-on-pull/8888015#8888015)_