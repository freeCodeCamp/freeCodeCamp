---
title: Git Commit
localeTitle: Git Commit
---
## Git Commit

El comando `git commit` guardará todos los cambios en etapas, junto con una breve descripción del usuario, en un "commit" en el repositorio local.

Los compromisos están en el corazón del uso de Git. Puede pensar en una confirmación como una instantánea de su proyecto, donde se crea una nueva versión de ese proyecto en el repositorio actual. Dos características importantes de los compromisos son:

*   puede recuperar los cambios comprometidos en una fecha posterior o revertir el proyecto a esa versión ( [ver pago de Git](https://guide.freecodecamp.org/git/git-checkout) )
*   Si múltiples confirmaciones editan diferentes partes del proyecto, no se sobrescribirán entre sí, incluso si los autores de la confirmación no se conocían entre sí. Este es uno de los beneficios de usar Git sobre una herramienta como Dropbox o Google Drive.

### Opciones

Hay una serie de opciones que puedes incluir con `git commit` . Sin embargo, esta guía solo cubrirá las dos opciones más comunes. Para obtener una lista extensa de opciones, consulte la [documentación de Git](https://git-scm.com/docs/git-commit) .

#### La opción -m

La opción más común utilizada con `git commit` es la opción `-m` . La `-m` significa mensaje. Cuando se llama a `git commit` , se requiere incluir un mensaje. El mensaje debe ser una breve descripción de los cambios que se están comprometiendo. El mensaje debe estar al final del comando y debe estar entre comillas `" "` .

Un ejemplo de cómo usar la opción `-m` :

```shell
git commit -m "My message" 
```

La salida en su terminal debería verse así:

```shell
[master 13vc6b2] My message 
 1 file changed, 1 insertion(+) 
```

**NOTA:** Si no se incluye `-m` con el comando `git commit` , se le solicitará que agregue un mensaje en su editor de texto predeterminado. Consulte "Uso de mensajes de confirmación detallados" a continuación.

#### La opción -a

Otra opción popular es la opción `-a` . La `-a` representa a todos. Esta opción escalona automáticamente todos los archivos modificados para ser confirmados Si se agregan nuevos archivos, la opción `-a` no mostrará esos nuevos archivos. Sólo se confirmarán los archivos que el repositorio Git conoce.

Por ejemplo:

Digamos que tiene un archivo `README.md` que ya se ha confirmado en su repositorio. Si realiza cambios en este archivo, puede usar la opción `-a` en su comando commit para poner en escena y agregar los cambios a su repositorio. Sin embargo, ¿qué sucede si también agrega un nuevo archivo llamado `index.html` ? La opción `-a` no mostrará el `index.html` ya que no existe actualmente en el repositorio. Cuando se han agregado nuevos archivos, se debe invocar el comando `git add` para organizar los archivos antes de que se puedan enviar al repositorio.

Un ejemplo de cómo usar la opción `-a` :

```shell
git commit -am “My new changes” 
```

La salida en su terminal debería verse así:

```shell
[master 22gc8v1] My new message 
 1 file changed, 1 insertion(+) 
```

### Usando mensajes de confirmación detallados

Aunque `git commit -m "commit message"` funciona bien, puede ser útil proporcionar información más detallada y sistemática.

Si se compromete sin usar la opción `-m` , git abrirá su editor de texto predeterminado con un nuevo archivo, que incluirá una lista comentada de todos los archivos / cambios que se almacenan en la confirmación. Luego escribe su mensaje de confirmación detallado (la primera línea se tratará como la línea del asunto) y la confirmación se realizará cuando guarde / cierre el archivo.

Tener en cuenta:

*   Mantenga la longitud de sus líneas de mensajes de confirmación de menos de 72 caracteres como práctica estándar
*   Está perfectamente bien - e incluso recomendado - escribir mensajes de confirmación multilínea
*   También puede consultar otros problemas o extraer solicitudes en su mensaje de confirmación. GitHub asignó una referencia numérica a todas las solicitudes y problemas de extracción, así que, por ejemplo, si desea consultar la solicitud de extracción n.º 788, simplemente hágalo en la línea del asunto o en el texto del cuerpo, según corresponda.

#### La opción de enmienda

La opción `--amend` permite cambiar su último compromiso. Digamos que acaba de confirmar y cometió un error en su mensaje de registro de confirmación. Puede modificar convenientemente la confirmación más reciente usando el comando:

```shell
git commit --amend -m "an updated commit message" 
```

Si olvidas incluir un archivo en el commit:

```shell
git add FORGOTTEN-FILE-NAME 
 git commit --amend -m "an updated commit message" 
 
 # If you don't need to change the commit message, use the --no-edit option 
 git add FORGOTTEN-FILE-NAME 
 git commit --amend --no-edit 
```

Los compromisos prematuros suceden todo el tiempo en el curso de su desarrollo diario. Es fácil olvidarse de configurar un archivo o cómo formatear correctamente su mensaje de confirmación. La `--amend` es una forma conveniente de solucionar estos pequeños errores. Este comando reemplazará el antiguo mensaje de confirmación con el actualizado especificado en el comando.

Los compromisos modificados son en realidad compromisos completamente nuevos y el compromiso anterior ya no estará en su rama actual. Cuando trabaje con otros, debe tratar de evitar la modificación de las confirmaciones si la última confirmación ya está insertada en el repositorio.

Con `--amend` , uno de los indicadores útiles que podría usar es `--author` que le permite cambiar el autor del último compromiso realizado. Imagine una situación en la que no haya configurado correctamente su nombre o correo electrónico en las configuraciones de git, pero ya hizo un compromiso. Con el `--author` puede simplemente cambiarlos sin restablecer el último compromiso.
```
git commit --amend --author="John Doe <johndoe@email.com>" 
```

#### La opción -v o --verbose

La opción `-v` o `--verbose` se usa sin la opción `-m` . La opción `-v` puede ser útil cuando desee editar un mensaje de confirmación de Git en su editor predeterminado y poder ver los cambios que realizó para la confirmación. El comando abre su editor de texto predeterminado con una plantilla de mensaje de confirmación _, así como_ una copia de los cambios que realizó para esta confirmación. Los cambios, o diff, no se incluirán en el mensaje de confirmación, pero proporcionan una buena manera de hacer referencia a sus cambios cuando los describe en su mensaje de confirmación.

### Más información:

*   Documentación Git: [commit](https://git-scm.com/docs/git-commit)