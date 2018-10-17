---
title: Ansible
localeTitle: Ansible
---
## Ansible

Ansible es una herramienta de automatización fácil de usar. Ansible se puede utilizar para automatizar implementaciones, actualizaciones, seguridad, administración de sistemas, aprovisionamiento de contenedores y más. Los archivos de configuración son fáciles de administrar archivos YAML escritos en un lenguaje sencillo. La instalación es simple y debido a su formato Master-Push, no se necesitan agentes en máquinas remotas. Las comunicaciones con máquinas remotas se realizan a través de SSH.

### Instalación en Ubuntu Servers 14.04 o más reciente

Se recomienda la instalación a través del PPA de Ansible en los servidores de Ubuntu.

Primero asegúrese de que su sistema esté actualizado.
```
$ sudo apt-get update 
 $ sudo apt-get upgrade 
```

A continuación, querrá agregar el siguiente paquete a su sistema
```
$ sudo apt-get install software-properties-common 
```

Agregue el ppa: ansible / ansible a su sistema
```
$ sudo apt-add-repository ppa:ansible/ansible 
```

Actualiza tus repos de nuevo
```
$ sudo apt-get update 
```

Por lo general, hay algunos pasos involucrados en la implementación de su código en producción (en el sitio en vivo). El número de pasos aumenta a medida que su sitio / aplicación / aplicación web se hace más grande y más complejo.

La solución a esto es el despliegue automatizado. La automatización viene en forma de scripts que actúan como un conjunto de instrucciones (al igual que todo el código) que describen cada uno de estos pasos.

Ansible es una herramienta de automatización, utilizada a menudo para la implementación como se mencionó anteriormente, pero cada vez más utilizada para otras automatizaciones complejas.

Utiliza un lenguaje llamado [YAML](https://en.wikipedia.org/wiki/YAML) que le permite describir las instrucciones cercanas al inglés simple, como puede ver en este ejemplo del módulo de Ansible:

```YAML
--- 
 - yum: name={{contact.item}} state=installed 
 with_items: 
 - app_server 
 - acme_software 
 
 
 - service: name=app_server state=running enabled=yes 
```

Finalmente, instale el paquete.
```
$ sudo apt-get install ansible 
```

Un beneficio importante de usar Ansible es que usa SSH (Secure SHell) de manera predeterminada, y los módulos pueden residir en cualquier máquina (computadora) que no requiera servidores, daemons o bases de datos.

El verdadero poder de Ansible está en el uso de libros de jugadas. Lea más sobre la configuración y el uso de [la documentación oficial](https://docs.ansible.com/ansible/latest/index.html) de Ansible on [Ansible](https://docs.ansible.com/ansible/latest/index.html) .

Módulos ansibles, que son pequeños programas específicos para tareas. Una vez que cumplen con su propósito, por ejemplo, ejecutar su script de implementación, Ansible elimina estos módulos.

#### Más información:

*   [Aprende más sobre cómo funciona Ansible](https://www.ansible.com/how-ansible-works/)
*   [Documentación ansible](http://docs.ansible.com/)