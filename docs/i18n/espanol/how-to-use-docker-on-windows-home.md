# Cómo utilizar Docker en Windows Home

Hay unas cuantas dificultades que debes evitar al configurar Docker en Windows Home. En primer lugar, tienes que utilizar [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) como administrador. Desafortunadamente, Windows Home no soporta Docker para Windows Desktop, por lo que se debe utilizar Toolbox en su lugar. Tiene que ejecutarse como Administrador, ya que la instalación utiliza enlaces simbólicos, los cuales no se pueden crear de otra manera.

Una vez instalado Toolbox, ejecute Docker Quickstart Terminal como Administrador. Esto creará una máquina virtual `default` (predeterminada) si no existía anteriormente. Una vez que esto haya ocurrido, cierra la terminal y abre VirtualBox (otra vez como Administrador). Debes ser capaz de ver la máquina `default`. El sitio es bastante intensivo en recursos, así que detén la máquina virtual y aumenta la configuración tanto como puedas, especialmente la memoria. Se ha confirmado que trabaja con 4GB de ram.

Una vez que estés contento de que Docker está funcionando, clona el repositorio freeCodeCamp en un directorio dentro de `C:\Users`. Estos directorios son compartidos dándole acceso a Docker a los directorios locales que necesita durante la instalación.

Si ves mensajes como

```shell
bash: change_volumes_owner.sh: No such file or directory
```

when you `pnpm run docker:init` this is likely the culprit.
