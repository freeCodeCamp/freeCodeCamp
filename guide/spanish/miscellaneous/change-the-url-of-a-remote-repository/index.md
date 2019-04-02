---
title: Change the Url of a Remote Repository
localeTitle: Cambiar la URL de un repositorio remoto
---
El comando `git remote set-url` cambia la `git remote set-url` un repositorio remoto existente.

**Este comando toma dos argumentos:**

1.  Un nombre remoto existente. Por ejemplo, origen o upstream son dos opciones comunes.
    
2.  Una nueva URL para el control remoto. Por ejemplo, `https://github.com/USERNAME/OTHERREPOSITORY.git`
    

**Entonces, para cambiar la URL de un repositorio remoto, harías algo como esto:**

1.  Ver el repositorio remoto existente:

`git remote -v`

1.  Cambia la URL del repositorio remoto:

`git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git`

1.  Y puedes verificar el nuevo repositorio remoto haciendo:

`git remote -v`

_Para obtener más información, echa un vistazo a [este artículo github.](https://help.github.com/articles/changing-a-remote-s-url/)_