---
title: Docker
localeTitle: Estibador
---
## Estibador

Docker es una plataforma abierta para construir, enviar y ejecutar aplicaciones distribuidas. Está escrito en ir. Se lanzó por primera vez en 2013 y está desarrollado por Docker, Inc.

Docker se utiliza para ejecutar paquetes llamados "contenedores". Los contenedores están aislados unos de otros y del sistema operativo. Estos son más ligeros que las máquinas virtuales, ya que no utilizan la máquina host para ejecutar un sistema operativo.

La contenedorización, que es una forma de implementar y ejecutar aplicaciones, ejecuta servicios aislados que se ejecutan de forma nativa en el kernel de Linux. La memoria se puede configurar manualmente para cada contenedor en Docker.

Docker se utiliza para simplificar las configuraciones y garantizar un flujo continuo de integración y despliegue sin problemas. Se pueden especificar contenedores específicos para entornos de desarrollo, organización y producción. Una verdadera implementación de un contenedor en producción, de acuerdo con el manual de Docker, es ejecutarlo como un servicio, utilizando el archivo `docker-compose.yml` para la configuración. Este es un archivo YAML que define cómo deben comportarse los contenedores Docker en producción.

Una de las mayores ventajas de Docker es que puede ser utilizado por un equipo que usa diferentes sistemas operativos para crear proyectos sin tener que preocuparse por conflictos de software.

### Instalación

*   Ubuntu: `sudo apt install docker`
    
*   RedHat: `yum install docker-ce`
    
*   Windows / macOS: [Descargar](https://www.docker.com/get-started)
    
*   Linux:
    
```
curl -fsSL https://get.docker.com -o get-docker.sh 
 sh get-docker.sh 
```

#### Más información:

*   Para descargar y documentación, visite el sitio oficial de docker: el [sitio oficial de Docker](https://www.docker.com)
*   Para más información sobre la contenedorización, consulte [Operaciones de TI de búsqueda.](https://searchitoperations.techtarget.com/definition/application-containerization-app-containerization)
*   Un Docker 101 curso [Docker 101](https://github.com/docker/labs/tree/master/beginner/)