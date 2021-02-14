# Cómo utilizar Docker en Windows Home

There are a few pitfalls to be avoided when setting up Docker on Windows Home. First of all, you have to use [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) as Administrator. Desafortunadamente, Windows Home no soporta Docker para Windows Desktop, por lo que se debe utilizar Toolbox en su lugar. Tiene que ejecutarse como Administrador, ya que la instalación utiliza enlaces simbólicos, los cuales no se pueden crear de otra manera.

Una vez instalado Toolbox, ejecute Docker Quickstart Terminal como Administrador. This will create a `default` virtual machine if it does not already exist. Una vez que esto haya ocurrido, cierre la terminal y abra VirtualBox (otra vez como Administrador). Debería ser capaz de ver la máquina `predeterminada`. The site is quite resource-intensive, so stop the virtual machine and raise the settings as much as you can - memory in particular. Se ha confirmado que trabaja con 4GB de ram.

Una vez que estés contento de que Docker está funcionando, clona el repositorio freeCodeCamp en un directorio dentro de `C:\Users`. Estos directorios son compartidos dando acceso a los directorios locales que necesita Docker durante la instalación.

Si ves mensajes como

```shell
bash: change_volumes_owner.sh: No such file or directory
```

al ejecutar `npm run docker:init` es probable que esto sea el culpable.