---
title: Chef
localeTitle: líder
---
## Cocinero

Chef es una potente plataforma de automatización que transforma la infraestructura en código. Ya sea que esté operando en la nube, en las instalaciones o en un entorno híbrido, Chef automatiza cómo se configura, implementa y administra la infraestructura en su red, sin importar su tamaño.

#### Como trabaja el chef

Chef almacena colecciones de recetas en un libro de cocina. Un libro de cocina debe relacionarse con una sola tarea, pero puede tener varias configuraciones de servidor diferentes involucradas (por ejemplo, una aplicación web con una base de datos, tendrá dos recetas, una para cada parte, almacenadas juntas en un libro de cocina).

Hay un servidor de Chef que almacena cada uno de estos libros de cocina y, a medida que un nuevo cliente de chef se registra en el servidor, se envían las recetas para indicar al nodo cómo configurarse.

El cliente se registrará de vez en cuando para asegurarse de que no se hayan producido cambios y que no es necesario cambiar nada. Si lo hace, entonces el cliente se ocupa de ello. Los parches y las actualizaciones se pueden implementar en toda su infraestructura al cambiar la receta. No es necesario interactuar con cada máquina individualmente.

#### Configuración del Chef

![titulo de la imagen](https://regmedia.co.uk/2015/10/07/chef_configuration_management.jpg)

#### Más información:

*   [Chef TutorialsPoint](https://www.tutorialspoint.com/chef/chef_overview.htm)
*   [Documnetation oficial](https://docs.chef.io/chef_overview.html)
*   [Chef Tutorial](http://gettingstartedwithchef.com/)