---
title: Ruby on Rails
localeTitle: Ruby on Rails
---
# Ruby on Rails

[Ruby on Rails](http://rubyonrails.org/) es un marco del lado del servidor (gema) construido en el lenguaje Ruby para hacer sitios web. Rails hace que el desarrollo web sea más rápido, más fácil y más divertido. Incluye todo lo que necesitas para crear aplicaciones fantásticas y tiene una gran comunidad. Rails fue creado por David Heinemeir Hansson y actualmente se encuentra en su quinta versión. Rails enfatiza el uso de otros patrones y paradigmas de ingeniería de software conocidos, que incluyen la [convención sobre la configuración (CoC)](https://en.wikipedia.org/wiki/Convention_over_configuration) , [no se repita (DRY)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) y el patrón de registro activo. Rails es un marco [modelo-vista-controlador (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) , que proporciona estructuras predeterminadas para una base de datos, un servicio web y páginas web. Últimamente, Rails ha integrado un módulo API para que la creación de servicios web sea más rápida y fácil.

## Instalación de rieles

Rails se descarga de la misma manera que cualquier otra gema de Ruby: con el comando de `gem install` . Antes de descargarlo, tendremos que [descargar Ruby](https://www.ruby-lang.org) . Luego, solo faltan 3 palabras para comenzar con Ruby on Rails:

```shell
$ gem install rails 
```

## Configuración de la base de datos

Rails se envía con sqlite3 como la base de datos predeterminada, que es un archivo simple en el disco. Necesitas instalar MySQL o PostgreSQL si quieres usar algo más robusto.

## Creación de una aplicación Rails

1.  Después de instalar Ruby on Rails, es muy sencillo crear una nueva aplicación, solo necesitaremos 3 palabras más:

```shell
$ rails new your_application_name 
```

*   Si quieres usar MySQL `shell $ rails new <application_name> -d mysql`
*   Si quieres usar Postgres `shell $ rails new <application_name> -d postgresql`

1.  Este comando creará una carpeta con el _nombre de su _aplicación__ que informó en el último comando. El siguiente paso es ir al nuevo directorio que acaba de crear:

```shell
$ cd your_application_name 
```

3.  Obtenga las gemas y paquetes de software necesarios antes de ejecutar su aplicación:

```shell
$ bundle install 
```

4.  Ejecutar el servidor de rieles y ver si todo fue en consecuencia también es rápido:

```shell
$ rails server 
```

¡No podría ser más simple! Bueno, esto no es realmente cierto al 100%, podríamos hacerlo aún más pequeño al reducir el comando del `rails server` a:

```shell
$ rails s 
```

5.  Ahora, con su navegador preferido, vaya a `http://localhost:3000` y verá: "¡Yay! ¡Está en Rails!"

### Método alternativo para crear una aplicación Rails

1.  Crear un nuevo directorio:
    
    ```shell
    $ mkdir <application_name> 
    
    ```
    
2.  Entra en el nuevo directorio:
    
    ```shell
    $ cd <application_name> 
    
    ```
    
3.  Crea la aplicación Rails usando la notación de puntos Unix. Esto da como resultado la asignación del nombre del directorio a la nueva aplicación.
    
    ```shell
    $ rails new . 
    
    ```
    
4.  Comienza a explorar el marco de la aplicación que acabas de crear. La estructura de carpetas está organizada de acuerdo con la siguiente tabla:
    

| Archivo / Carpeta | Proposito  
| ----------- | ------- |  
| aplicación / | Contiene los controladores, modelos, vistas, ayudantes, correos, canales, trabajos y activos para su aplicación. Te centrarás en esta carpeta por el resto de esta guía. |  
| bin / | Contiene el script de Rails que inicia su aplicación y puede contener otros scripts que usa para configurar, actualizar, implementar o ejecutar su aplicación. |  
| config / | Configure las rutas de su aplicación, la base de datos y más. Esto se trata con más detalle en Configuración de aplicaciones de Rails. |  
| config.ru | Configuración de rack para servidores basados ​​en Rack utilizados para iniciar la aplicación. |  
| db / | Contiene su esquema de base de datos actual, así como las migraciones de base de datos. |  
| Gemfile, Gemfile.lock | Estos archivos le permiten especificar qué dependencias de gemas son necesarias para su aplicación Rails. Estos archivos son utilizados por la gema Bundler. Para obtener más información sobre Bundler, consulte el sitio web de Bundler. |  
| lib / | Módulos extendidos para su aplicación. |  
| log / | Archivos de registro de la aplicación. |  
| público / | La única carpeta vista por el mundo tal como es. Contiene archivos estáticos y activos compilados. |  
| Rakefile | Este archivo localiza y carga tareas que pueden ejecutarse desde la línea de comandos. Las definiciones de tareas se definen a través de los componentes de Rails. En lugar de cambiar Rakefile, debe agregar sus propias tareas agregando archivos al directorio lib / tasks de su aplicación. |  
| README.md | Este es un breve manual de instrucciones para su aplicación. Debería editar este archivo para decirle a los demás qué hace su aplicación, cómo configurarlo, etc. |  
| prueba / | Pruebas unitarias, accesorios, y otros aparatos de prueba. Estos están cubiertos en las aplicaciones de prueba de rieles. |  
| tmp / | Archivos temporales (como caché y archivos pid). |  
| vendedor / | Un lugar para todos los códigos de terceros. En una aplicación típica de Rails esto incluye gemas vendidas. |  
| .gitignore | Este archivo le dice a git qué archivos (o patrones) debe ignorar. Consulte Github - Ignorar archivos para obtener más información sobre ignorar archivos. |

Un gran lugar para comenzar con este marco impresionante es leer su [página de Introducción](http://guides.rubyonrails.org/getting_started.html) .

## Convención sobre configuración

_Convención sobre configuración_ significa que un desarrollador solo necesita especificar aspectos no convencionales de la aplicación. Por ejemplo, si hay una `Sale` clase en el modelo, la tabla correspondiente en la base de datos se denomina `sales` de forma predeterminada. Es solo si uno se desvía de esta convención, como llamar a la tabla "productos vendidos", que el desarrollador necesita escribir código con respecto a estos nombres. En general, las convenciones de Ruby on Rails conducen a menos código y menos repetición.

## ¿Qué es MVC?

El modelo (registro activo) contiene la lógica de negocios e interactúa con la base de datos. Visualiza (vistas de acción) todos los archivos HTML y la estructura. El controlador (controlador de acción) interactúa con las vistas y el modelo para dirigir las acciones de la aplicación.

## SECO - No te repitas

_No se repita_ significa que la información se encuentra en un lugar único e inequívoco. Por ejemplo, al usar el módulo ActiveRecord de Rails, el desarrollador no necesita especificar nombres de columna de base de datos en las definiciones de clase. En su lugar, Ruby on Rails puede recuperar esta información de la base de datos basándose en el nombre de la clase.

## Ruby on Rails es de código abierto.

No solo es de uso gratuito, también puede ayudar a mejorarlo. Más de 4.500 personas ya han aportado código a [Rails](https://github.com/rails/rails) . Es más fácil de lo que piensas convertirte en uno de ellos.