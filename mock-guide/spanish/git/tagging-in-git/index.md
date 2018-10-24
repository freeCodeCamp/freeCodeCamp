---
title: Tagging in Git
localeTitle: Etiquetado en Git
---
El etiquetado permite a los desarrolladores marcar puntos de control importantes en el curso del desarrollo de sus proyectos. Por ejemplo, las versiones de lanzamiento de software se pueden etiquetar. (Ej: v1.3.2) Esencialmente le permite asignar un nombre especial (etiqueta) a un commit.

Para ver todas las etiquetas creadas en orden alfabético:

```bash
git tag 
```

Para obtener más información en una etiqueta:

```bash
git show v1.4 
```

Hay dos tipos de etiquetas:

1.  Anotado

```bash
git tag -a v1.2 -m "my version 1.4" 
```

2.  Ligero

```bash
git tag v1.2 
```

Se diferencian en la forma en que se almacenan.  
Estos crean etiquetas en su confirmación actual.

En el caso, le gustaría etiquetar una confirmación anterior, especifique el ID de confirmación que desea etiquetar:

```bash
git tag -a v1.2 9fceb02 
```

Los nombres de las etiquetas se pueden usar en lugar de las ID de confirmación al retirar y enviar las confirmaciones a un repositorio remoto.

#### Más información:

*   Documentación Git: [Documentación](https://git-scm.com/docs/git-tag)
*   Capítulo Git Tagging: [Libro](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

Puede enumerar todas las etiquetas disponibles en un proyecto con el comando `git tag` (indique que aparecerán en orden alfabético):
```
$ git tag 
 v1.0 
 v2.0 
 v3.0 
```

Esta forma de enumerar etiquetas es ideal para proyectos pequeños, pero los proyectos más grandes pueden tener cientos de etiquetas, por lo que es posible que deba filtrarlas cuando busque un punto importante en el historial. Puede encontrar etiquetas que contengan caracteres específicos agregando un `-l` al comando de `git tag` :
```
$ git tag -l "v2.0*" 
 v2.0.1 
 v2.0.2 
 v2.0.3 
 v2.0.4 
```

## Crear una etiqueta

Puede crear dos tipos de etiquetas: anotadas y ligeras. Los primeros son objetos de la competencia en la base de datos GIT: son suma de comprobación, requieren un mensaje (como confirmaciones) y almacenan otros datos importantes como nombre, correo electrónico y fecha. Por otro lado, las etiquetas ligeras no requieren un mensaje o almacenar otros datos, trabajando solo como un puntero a un punto específico del proyecto.

### Crear una etiqueta anotada

Para crear una etiqueta anotada, agregue `-a tagname -m "tag message"` al comando de `git tag` :
```
$ git tag -a v4.0 -m "release version 4.0" 
 $ git tag 
 v1.0 
 v2.0 
 v3.0 
 v4.0 
```

Como puede ver, la `-a` especifica que está creando una etiqueta anotada, después aparece el nombre de la etiqueta y, finalmente, la `-m` seguida del mensaje de la etiqueta para almacenar en la base de datos de Git.

### Crear una etiqueta ligera

Las etiquetas ligeras contienen solo la suma de verificación de confirmación (no se almacena ninguna otra información). Para crear uno, simplemente ejecute el comando `git tag` sin ninguna otra opción (los caracteres -lw al final del nombre se usan para indicar etiquetas ligeras, pero puede marcarlos como desee):
```
$ git tag v4.1-lw 
 $ git tag 
 v1.0 
 v2.0 
 v3.0 
 v4.0 
 v4.1-lw 
```

Esta vez no especificó un mensaje u otros datos relevantes, por lo que la etiqueta solo contiene la suma de verificación del compromiso referido.

## Ver los datos de la etiqueta

Puede ejecutar el comando `git show` para ver los datos almacenados en una etiqueta. En el caso de etiquetas anotadas, verá los datos de la etiqueta y los datos de confirmación:
```
$ git show v4.0 
 tag v4.0 
 Tagger: John Cash <john@cash.com> 
 Date:   Mon Sat 28 15:00:25 2017 -0700 
 
 release version 4.0 
 
 commit da43a5fss745av88d47839247990022a98419093 
 Author: John Cash <john@cash.com> 
 Date:   Fri Feb 20 20:30:05 2015 -0700 
 
  finished details 
```

Si la etiqueta que está viendo es una etiqueta liviana, solo verá los datos de confirmación referidos:
```
$ git show v1.4-lw 
 commit da43a5f7389adcb9201ab0a289c389ed022a910b 
 Author: John Cash <john@cash.com> 
 Date:   Fri Feb 20 20:30:05 2015 -0700 
 
  finished details 
```

## Etiquetado de confirmaciones antiguas

También puede etiquetar confirmaciones pasadas usando la confirmación de etiqueta git. Para hacer esto, deberá especificar la suma de verificación de la confirmación (o al menos una parte de ella) en la línea del comando.

Primero, ejecute git log para averiguar la suma de comprobación de confirmación requerida:
```
$ git log --pretty=oneline 
 ac2998acf289102dba00823821bee04276aad9ca added products section 
 d09034bdea0097726fd8383c0393faa0072829a7 refactorization 
 a029ac120245ab012bed1ca771349eb9cca01c0b modified styles 
 da43a5f7389adcb9201ab0a289c389ed022a910b finished details 
 0adb03ca013901c1e02174924486a08cea9293a2 small fix in search textarea styles 
```

Cuando tenga la suma de comprobación necesaria, agréguela al final de la línea de creación de la etiqueta:
```
$ git tag -a v3.5 a029ac 
```

Verás que la etiqueta se agregó correctamente ejecutando la `git tag` :
```
$ git tag 
 v1.0 
 v2.0 
 v3.0 
 v3.5 
 v4.0 
 v4.1-lw 
```

## Etiquetas de empuje

Git no empuja las etiquetas de manera predeterminada cuando ejecuta el comando git push. Por lo tanto, para insertar con éxito una etiqueta en un servidor, tendrá que `git push origin` comando de `git push origin` :
```
$ git push origin v4.0 
 Counting objects: 14, done. 
 Delta compression using up to 8 threads. 
 Compressing objects: 100% (16/16), done. 
 Writing objects: 100% (18/18), 3.15 KiB | 0 bytes/s, done. 
 Total 18 (delta 4), reused 0 (delta 0) 
 To git@github.com:jcash/gitmanual.git 
 * [new tag]         v4.0 -> v4.0 
 ``` 
 
 You can also use the ```--tags``` option to add multiple tags at once with the ```git push origin``` command: 
```

origen de $ git push --tags Contando objetos: 1, hecho. Objetos de escritura: 100% (1/1), 160 bytes | 0 bytes / s, hecho. Total 1 (delta 0), reutilizado 0 (delta 0) Para git@github.com: jcash / gitmanual.git

*   \[nueva etiqueta\] v4.0 -> v4.0
*   \[nueva etiqueta\] v4.1-lw -> v4.1-lw
```
## Checking out Tags 
 
 You can use ```git checkout``` to checkout to a tag like you would normally do. But you need to keep in mind that this would result a *detached HEAD* state. 
```

$ git checkout v0.0.3 Nota: revisar 'v0.0.3'.

Usted está en estado de 'cabeza desapegada'. Puedes mirar alrededor, hacer experimental. Cambia y confirma, y ​​puedes descartar cualquier confirmación que hagas en este Estado sin afectar a ninguna rama mediante la realización de otra comprobación.
```
## Deleting a Tag 
 
 You may find a situation were you want to delete a certain tag. There's a very useful command for this situations: 
```

$ git tag --delete v0.0.2 $ git tag v0.0.1 v0.0.3 v0.0.4 \`\` \`

### Más información

*   [Git Pro - Conceptos básicos de etiquetado](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
*   [Git Pro - Documentación](https://git-scm.com/docs/git-tag)
*   [Git HowTo](https://githowto.com/tagging_versions)
*   [Git tip: Tags](http://alblue.bandlem.com/2011/04/git-tip-of-week-tags.html)
*   [Creando una etiqueta](https://www.drupal.org/node/1066342)

### Fuentes

Documentación Git: [Etiquetas](https://git-scm.com/book/en/v2/Git-Basics-Tagging)