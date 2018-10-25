---
title: Containers
localeTitle: Contenedores
---
## Contenedores

Los contenedores son una solución al problema de cómo hacer que el software se ejecute de manera confiable cuando se traslada de un entorno informático a otro. Esto podría ser desde una computadora portátil de un desarrollador a un entorno de prueba, desde un entorno de prueba a producción, y quizás desde una máquina física en un centro de datos a una máquina virtual en una nube privada o pública.

En otras palabras, un contenedor consta de un entorno de tiempo de ejecución completo: una aplicación, más todas sus dependencias, bibliotecas y otros archivos binarios, y los archivos de configuración necesarios para ejecutarse, agrupados en un solo paquete. Al contener la plataforma de la aplicación y sus dependencias, se eliminan las diferencias en las distribuciones del sistema operativo y la infraestructura subyacente.

Los contenedores son una virtualización a nivel de sistema operativo, una característica del sistema operativo en la que el kernel permite la existencia de múltiples instancias aisladas de espacio de usuario. Tales instancias, llamados contenedores, pueden parecer computadoras reales desde el punto de vista de los programas que se ejecutan en ellos.

## Maquinas virtuales

Una máquina virtual es esencialmente una emulación de una computadora real que ejecuta programas como una computadora real. Las máquinas virtuales se ejecutan en la parte superior de una máquina física mediante un "hipervisor". Un hipervisor, a su vez, se ejecuta en una máquina host o en "bare-metal".

Un _hipervisor_ es una pieza de software, firmware o hardware que las máquinas virtuales ejecutan sobre. Los hipervisores se ejecutan en computadoras físicas, lo que se conoce como el "equipo host". El equipo host proporciona a las máquinas virtuales recursos, incluidos RAM y CPU. Estos recursos se dividen entre máquinas virtuales y se pueden distribuir como mejor le parezca. Entonces, si una máquina virtual ejecuta una aplicación con más recursos, puede asignar más recursos a esa que las otras máquinas virtuales que se ejecutan en la misma máquina host.

La máquina virtual que se ejecuta en la máquina host (nuevamente, mediante un hipervisor) también se denomina “máquina invitada”. Esta máquina invitada contiene tanto la aplicación como lo que sea necesario para ejecutar esa aplicación (por ejemplo, binarios y bibliotecas del sistema). También tiene una pila de hardware virtualizada completa, que incluye adaptadores de red, almacenamiento y CPU virtualizados, lo que significa que también tiene su propio sistema operativo invitado completo. Desde el interior, la máquina invitada se comporta como una unidad propia con sus propios recursos dedicados. Desde el exterior, sabemos que es una VM que comparte los recursos proporcionados por la máquina host.

Como se mencionó anteriormente, una máquina invitada puede ejecutarse en un hipervisor alojado o en un hipervisor completo. Hay algunas diferencias importantes entre ellos.

En primer lugar, un hipervisor de virtualización alojado se ejecuta en el sistema operativo de la máquina host. Por ejemplo, una computadora que ejecuta OSX puede tener una VM (ej. VirtualBox o VMware Workstation 8) instalada encima de ese SO. La máquina virtual no tiene acceso directo al hardware, por lo que tiene que pasar por el sistema operativo del host (en nuestro caso, el OSX de Mac).

El beneficio de un hipervisor alojado es que el hardware subyacente es menos importante. El sistema operativo del host es responsable de los controladores de hardware en lugar del propio hipervisor y, por lo tanto, se considera que tiene más "compatibilidad de hardware". Por otra parte, esta capa adicional entre el hardware y el hipervisor crea más sobrecarga de recursos, lo que reduce El rendimiento de la máquina virtual.

Un entorno de hipervisor completo soluciona el problema de rendimiento mediante la instalación y ejecución desde el hardware de la máquina host. Debido a que se conecta directamente con el hardware subyacente, no necesita un sistema operativo host para ejecutarse. En este caso, lo primero que se instalará en el servidor de una máquina host como sistema operativo será el hipervisor. A diferencia del hipervisor alojado, un hipervisor simple tiene sus propios controladores de dispositivo e interactúa con cada componente directamente para cualquier E / S, procesamiento o tareas específicas del sistema operativo. Esto da como resultado un mejor rendimiento, escalabilidad y estabilidad. La desventaja aquí es que la compatibilidad del hardware es limitada porque el hipervisor solo puede tener tantos controladores de dispositivo integrados.

Después de toda esta charla sobre los hipervisores, puede que se esté preguntando por qué necesitamos esta capa adicional de "hipervisor" entre la máquina virtual y la máquina host.

Bueno, dado que la máquina virtual tiene un sistema operativo virtual propio, el hipervisor desempeña un papel esencial al proporcionar a las máquinas virtuales una plataforma para administrar y ejecutar este sistema operativo invitado. Permite que las computadoras host compartan sus recursos entre las máquinas virtuales que se ejecutan como invitados encima de ellas.

## Envase

A diferencia de una máquina virtual que proporciona virtualización de hardware, un contenedor proporciona virtualización a nivel de sistema operativo al abstraer el "espacio de usuario". Verás a qué me refiero cuando desempaquemos el término contenedor.

Para todos los propósitos y propósitos, los contenedores parecen una máquina virtual. Por ejemplo, tienen espacio privado para el procesamiento, pueden ejecutar comandos como root, tienen una interfaz de red privada y una dirección IP, permiten rutas personalizadas y reglas de iptable, pueden montar sistemas de archivos, etc.

La única gran diferencia entre los contenedores y las máquinas virtuales es que los contenedores _comparten_ el núcleo del sistema host con otros contenedores.

## Orquestación

Hay varios marcos de orquestación de contenedores aprovechados en la producción: docker-swarm y kubernetes

## Lista de proveedores de contenedores

A continuación se muestra una pequeña lista de los vendedores de contenedores más utilizados que se pueden usar.

*   [Estibador](https://www.docker.com/)
*   [Kubernetes](https://kubernetes.io/)
*   [Amazon AWS ECS](https://aws.amazon.com/ecs/?nc1=h_ls)
*   [RKT](https://github.com/rkt/rkt)
*   [Tela azul](https://azure.microsoft.com/en-us/services/service-fabric/)