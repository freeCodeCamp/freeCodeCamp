---
title: Puppet
localeTitle: Marioneta
---
## Marioneta

Puppet es una herramienta de administración de la configuración que le permite automatizar la configuración y la administración de su infraestructura. Esto le ayuda a ahorrar tiempo al automatizar las tareas repetitivas y garantizar que sus sistemas se mantengan en el estado deseado.

Puppet viene en dos variedades, Puppet Enterprise y Puppet de código abierto. Las plataformas compatibles incluyen la mayoría de las distribuciones de Linux, varias plataformas UNIX y Windows.

Puppet fue desarrollado por [Puppet Labs](https://puppet.com/company) .

### Empezando

Puede configurar su infraestructura en una arquitectura cliente / servidor o en una arquitectura independiente. El primero utiliza el `agent` Puppet y las aplicaciones `master` Puppet, mientras que el segundo utiliza la `apply` aplicación Puppet.

#### Agente / Arquitectura Maestra

En esta arquitectura, uno o más nodos ejecutan la aplicación maestra Puppet. Los servidores maestros controlan la información de configuración de la infraestructura completa.

Los nodos administrados ejecutan la aplicación del agente Puppet como un servicio en segundo plano y solicitan periódicamente su `catalog` configuración a los maestros Puppet.

El maestro Puppet compila y devuelve cada catálogo de nodos, utilizando múltiples fuentes de información. Esta información recopilada se conoce como `facts` .

Una vez que un agente de Puppet recibe un catálogo, comprueba cada recurso descrito en él. Si un recurso no está en el estado deseado, el agente lo corrige.

#### Arquitectura autónoma

En esta arquitectura, cada nodo gestionado tiene la copia de la configuración completa.

Cada agente Puppet ejecuta la aplicación de aplicación como una tarea programada o un trabajo cron.

Al igual que en la arquitectura agente / maestra, la aplicación Puppet compila el catálogo y verifica cada recurso descrito. Si un recurso no está en el estado deseado, Puppet apply lo corregirá.

Al igual que la aplicación maestra Puppet, Puppet apply necesita acceso a varias fuentes de datos de configuración, que utiliza para compilar un catálogo para el nodo que está administrando.

#### Catalogar

Un catálogo es un documento que especifica la configuración de una máquina. Enumera todos los recursos que deben administrarse, el estado deseado y las dependencias entre ellos.

Puppet configura un sistema compilando primero un catlog y luego aplicándolo.

#### Hechos

Puppet reúne datos sobre todos los nodos con una herramienta llamada `facter` . Facter recopila la información necesaria para configurar el sistema. Por ejemplo, nombres de host, direcciones IP, nombres de SO, entre otros. Sin embargo, también es posible añadir hechos adicionales.

Para obtener más información, consulte la documentación de la arquitectura Puppet.

#### Más información:

*   [Web](https://puppet.com) oficial de marionetas
*   Una visión general de la [arquitectura](https://puppet.com/docs/puppet/5.3/architecture.html) Puppet
*   Cómo utilizar Puppet para administrar tus servidores. Una serie de tutoriales de [DigitalOcean.](https://www.digitalocean.com/community/tutorial_series/how-to-use-puppet-to-manage-your-servers-2)