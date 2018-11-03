---
title: Git Blame
localeTitle: Git Blame
---
## Git Blame

Con `git blame` puedes ver quién cambió qué en un archivo específico, línea por línea, lo cual es útil si trabajas en equipo, en lugar de hacerlo solo. Por ejemplo, si una línea de código hace que te preguntes por qué está allí, puedes usar `git blame` y sabrás a quién debes preguntar.

### Uso

Utiliza `git blame` así: `git blame NAME_OF_THE_FILE`

Por ejemplo: `git blame triple_welcome.rb`

Verás una salida como esta:

```shell
0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 1) 3.times do 
 e483daf0 (John Doe      2018-06-18 23:50:40 -0500 2)   print 'Welcome ' 
 0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 3) end 
```

Cada línea está anotada con el SHA, el nombre del autor y la fecha de la última confirmación.

### Aliasing Git Blame

A algunos programadores no les gusta la palabra "culpa", debido a la connotación negativa que "culpar a alguien" trae consigo. Además, la herramienta rara vez se usa (si acaso) para culpar a alguien, sino para pedir consejo o comprender el historial de un archivo. Por lo tanto, a veces las personas usan un alias para cambiar la `git blame` a algo que suena un poco mejor, como `git who` , `git history` o `git praise` . Para hacerlo, simplemente agregue un alias de git como este:

`git config --global alias.history blame`

Puede encontrar más información sobre los comandos git alias [aquí](../git-alias/index.md) .

### Plugins de editor de texto utilizando Git Blame

Hay algunos complementos por ahí para varios editores de texto que utilizan `git blame` . Por ejemplo, para crear algo así como mapas de calor o agregar información en línea para la línea actual que está inspeccionando. Un ejemplo famoso es [GitLense](https://gitlens.amod.io/) para VSCode.

### Otras lecturas

*   [Documentación de Git Blame](https://git-scm.com/docs/git-blame)
*   [Lectura adicional sobre el uso de Git Blame](https://corgibytes.com/blog/2016/10/18/git-blame/)