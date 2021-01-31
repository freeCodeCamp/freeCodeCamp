# Cómo utilizar Docker en Windows Home

Hay unas cuantas fallas que evitar al configurar docker en Windows Home. En primer lugar, tienes que usar [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) como administrador. Desafortunadamente, Windows Home no soporta Docker para Windows Desktop, por lo que se debe utilizar Toolbox en su lugar. Tiene que ejecutarse como Administrador, ya que la instalación utiliza enlaces simbólicos, los cuales no se pueden crear de otra manera.

Una vez instalado Toolbox, ejecute Docker Quickstart Terminal como Administrador. Esto creará una máquina virtual `predeterminada`, si no existía anteriormente. Una vez que esto haya ocurrido, cierre la terminal y abra VirtualBox (otra vez como Administrador). Debería ser capaz de ver la máquina `predeterminada`. El sitio es bastante intensivo en recursos, así que detén la máquina virtual y aumenta la configuración tanto como puedas - memoria en particular. Se ha confirmado que trabaja con 4GB de ram.

Una vez que estés contento de que Docker está funcionando, clona el repositorio freeCodeCamp en un directorio dentro de `C:\Users`. Estos directorios son compartidos dando acceso a los directorios locales que necesita Docker durante la instalación.

Si ves mensajes como

```shell
bash: change_volumes_owner.sh: No such file or directory
```

al ejecutar `npm run docker:init` es probable que esto sea el culpable.
