---
title: Vagrant
localeTitle: Vagabundo
---
## Vagabundo

Vagrant es una herramienta para crear y administrar entornos de máquinas virtuales (VM). Las máquinas virtuales se pueden usar para cualquier causa, pero son particularmente útiles para los desarrolladores y DevOps.

### ¿Por qué Vagrant es útil?

Como desarrollador, al utilizar una máquina virtual, puede tener un entorno local para probar el código, que es el mismo que el entorno de producción, independientemente del entorno que utilice para la codificación.

Para DevOps, las máquinas virtuales son muy útiles para tener una máquina desechable y altamente configurable para probar la infraestructura, configuraciones, scripts o cualquier otra cosa.

Con Vagrant, para usar una máquina virtual solo necesita un archivo único, llamado `VagrantFile` , que contiene la máquina virtual y toda la configuración necesaria. De esta manera, puede crear fácilmente un entorno de desarrollo aislado y específico que sea muy portátil y que todos los miembros de un equipo puedan compartir y utilizar.

Vagrant también tiene `boxes` predefinidos que son máquinas virtuales de base, que pueden clonarse y expandirse fácilmente.

Otra característica muy interesante de Vagrant es el uso de `synced folders` . Es posible sincronizar las carpetas de la máquina virtual, con las carpetas en la máquina invitada. Al hacer eso, puede usar su editor favorito en archivos locales y al mismo tiempo sincronizar esos archivos con la máquina virtual en ejecución.

#### Más información:

[Sitio web vagabundo](https://www.vagrantup.com/)

### Instalar vagrant

Para instalar Vagrant, primero encuentre el [paquete apropiado](https://www.vagrantup.com/downloads.html) para su sistema y descárguelo. Vagrant se empaqueta como un paquete específico de funcionamiento. Ejecuta el instalador para tu sistema. El instalador agregará automáticamente vagrant a la ruta de su sistema para que esté disponible en las terminales. Si no lo encuentra, intente cerrar sesión y volver a iniciar sesión en su sistema (esto es particularmente necesario para Windows).

### Verificar la instalacion

Después de instalar Vagrant, verifique que la instalación haya funcionado abriendo un nuevo símbolo del sistema o consola, y verifique que vagrant esté disponible:

```bash
$ vagrant 
 Usage: vagrant [options] <command> [<args>] 
 
    -v, --version                    Print the version and exit. 
    -h, --help                       Print this help. 
 
 # ... 
```

### Empezando

```bash
$ vagrant init hashicorp/precise64 
 $ vagrant up 
```

### Cajas

Las cajas se agregan a Vagrant con la caja vagrant add. Esto almacena el cuadro bajo un nombre específico para que múltiples entornos Vagrant puedan reutilizarlo. Si aún no ha agregado una caja, puede hacerlo ahora:

```bash
$ vagrant box add hashicorp/precise64 
```

### Encontrar más cajas

El mejor lugar para encontrar más cajas es el [catálogo de](https://vagrantcloud.com/boxes/search) cajas [Vagrant Cloud de HashiCorp](https://vagrantcloud.com/boxes/search) .

### Común

Youtube: [Primeros pasos con Vagrant](https://www.youtube.com/watch?v=LyIyyFDgO4o) por [Codecourse](https://www.youtube.com/user/phpacademy)

#### Más información:

El sitio web de Vagrant: [vagrantup.com](https://www.vagrantup.com)