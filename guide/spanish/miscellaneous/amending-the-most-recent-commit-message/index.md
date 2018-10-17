---
title: Amending the Most Recent Commit Message
localeTitle: Modificando el mensaje de confirmación más reciente
---
A menudo, surgirá la ocasión en que el último compromiso se envió prematuramente (falta un archivo, falta un cambio en un archivo, etc.) o el mensaje de confirmación puede haber sido mal escrito o incompleto. Para tal ocasión, Git ofrece la bandera de compromiso de `--amend` . Para modificar una confirmación, comience escribiendo:
```
git commit --amend 
```

Lo anterior confirmará cualquier cambio adicional y abrirá su editor, permitiéndole cambiar el mensaje de confirmación de la confirmación más reciente. Además, puede establecer el mensaje de confirmación directamente en la línea de comandos con:
```
git commit --amend -m "New commit message" 
```

Si desea agregar archivos o cambios a la confirmación, solo debe asegurarse de que los cambios se agreguen a la preparación con `git add` antes de ejecutar el comando. Además, si desea agregar todos los archivos vistos, modificados (en la preparación o de otro modo) y cambiar la confirmación, puede usar:
```
git commit --amend -am "New commit message" 
```

La bandera `-a` dice que se agreguen todos los archivos que Git ha dicho que rastreen.

## Modificando un commit después de empujar a remoto

Cuando se usa la `--amend` , Git reemplazará la última confirmación con la nueva confirmación completa con un nuevo hash. Esto significa que si ya ha presionado el control remoto antes de modificarlo, faltará la confirmación anterior de cualquier inserción posterior y se rechazará cualquier nueva inserción. La forma de evitar esto es `--force` el empuje. _NOTA: - la `--force` no debe hacerse a la ligera._ Para ello, escriba:
```
git push <remote> <branch> --force 
```

**O**
```
git push <remote> <branch> -f 
```

El empuje forzado sobrescribirá la rama remota con el estado de la local. Si hay confirmaciones en la sucursal remota que no tiene en su sucursal local, las perderá. Esto puede causar problemas si otros ya han retirado o clonado de su repositorio. Si usted cree que otros _pueden_ tener ya descargado la modificación comprometerse, por favor coordinar con ellos.

## Ver también

*   [git-commit (1) Página de manual](https://www.kernel.org/pub/software/scm/git/docs/git-commit.html)
*   [Pro Git](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)
*   [Desbordamiento de pila](http://stackoverflow.com/questions/179123/edit-an-incorrect-commit-message-in-git/179147#179147)