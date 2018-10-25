---
title: Chef
localeTitle: líder
---
## Cocinero

Chef es una herramienta de automatización que transforma la infraestructura en código. En otras palabras, es una herramienta que se utiliza para automatizar la creación y configuración de su infraestructura. También se utiliza para mantener su infraestructura una vez que se crea.

### ¿Por qué usar chef

Hay varias cosas a considerar antes de que una aplicación completa y probada entre en producción. Algunas de las principales cosas son,

*   Creación de infraestructura (cloud o on-premisis)
*   Configuración
*   Mantener infraestructura

Puede crear manualmente su infraestructura, configurarla y mantenerla. Es un proceso muy tedioso y las posibilidades de cometer un error son altas. Cualquier manual requiere mucha atención a los detalles, capacitar a otros en su equipo y vigilarlo constantemente para asegurarse de que todo funcione como se espera. Si su aplicación evoluciona rápidamente, entonces cada vez que vaya a producción, tendrá que hacer todo este trabajo manualmente.

Chef es una herramienta que ayuda a automatizar este proceso. Usted escribe el código (chef usa _Ruby_ ) para su infraestructura y la fuente lo controla. Chef leerá este código para crear y configurar su infraestructura automáticamente. Las ventajas de usar Chef son,

*   La creación y configuración de infraestructura es automatizada.
*   El seguimiento y mantenimiento es automatizado.
*   Las posibilidades de un error son insignificantes
*   La infraestructura es fuente controlada.
*   Implementar la aplicación rápidamente y con frecuencia

### Imagen general y componentes

![Chef big picture](https://docs.chef.io/_images/chef_overview.svg "Chef general")

Los componentes principales son,

*   Libro de cocina y recetas
*   Nodo
*   Puesto de trabajo
*   Chef Server
*   Chef Cliente

#### Libro de cocina y recetas

Un libro de cocina es la unidad fundamental de configuración. Define un escenario y contiene todo lo que se requiere para admitir ese escenario. El libro de cocina contiene las siguientes cosas,

*   Recetas
*   Valores de atributo
*   Distribuciones de archivos
*   Plantillas
*   Extensiones a recursos personalizados y bibliotecas.

La receta es el elemento de configuración más fundamental. Se crea con _Ruby_ y consta de una colección de recursos necesarios para configurar un sistema. Debe ser almacenado en un libro de cocina.

#### Nodo

Un nodo es cualquier máquina administrada por Chef. Puede ser físico, virtual, en la nube, dispositivo de red, etc.

#### Puesto de trabajo

Workstation (la región azul en la imagen grande) es una computadora que ejecuta el Kit de Desarrollo del Chef (ChefDK) para desarrollar y probar recetas y libros de cocina. Básicamente, es su máquina local donde escribe y prueba los scripts de Chef que se usa más adelante para automatizar la infraestructura. Los scripts de Chef de Workstation se cargan en Chef Server una vez que están listos.

#### Chef Server

El servidor de chef actúa como un centro para los datos de configuración. Almacena todos los datos de configuración, como libros de cocina, recetas, plantillas y distribuciones de archivos que son necesarios para la creación y configuración de la infraestructura.

#### Chef Cliente

Un Chef Client es un agente que se ejecuta localmente en todos los nodos administrados por Chef. Se comunica con el servidor Chef para obtener los datos de configuración necesarios para configurar el nodo. El cliente Chef es responsable de ejecutar todos los pasos necesarios para poner un nodo en el estado esperado. Los diferentes pasos incluyen,

*   Registro y autenticación del nodo con el servidor Chef.
*   Sincronizar libros de cocina
*   Compilando y ejecutando las recetas requeridas.
*   Manejo de excepciones y notificaciones.

#### Más información:

Una documentación más detallada se puede encontrar aquí - [Documentación del chef](https://docs.chef.io/chef_overview.html "Cocinero")