---
title: Phoenix
localeTitle: Fénix
---
## Que es phoenix

Phoenix es un marco de desarrollo web escrito en Elixir y creado por Chris McCord. Este marco de código abierto implementa el patrón MVC del lado del servidor, y tiene muchas similitudes con otros marcos web como Ruby on Rails o Django para Python. Phoenix se escribió con un énfasis en ser amigable con los desarrolladores, a la vez que cuenta con una productividad fantástica y un alto rendimiento de las aplicaciones. El marco Phoenix incluye algunas funciones muy potentes, como los 'canales' para manejar la comunicación en tiempo real y Ecto, que es una herramienta fantástica para ORM (Mapeo relacional de objetos).

## Instalando Phoenix

La instalación de Phoenix es relativamente simple, pero antes de que podamos hacer eso, debemos asegurarnos de que Elixir, el gestor de paquetes Hex y Erlang ya estén trabajando en nuestro sistema. El sitio de Elixir tiene una [guía de instalación](https://elixir-lang.org/install.html) fantástica tanto para Elixir como para Erlang. Una vez que se hayan configurado con éxito, simplemente ejecute:

```shell
$ mix local.hex 
```

Para instalar el gestor de paquetes Hex, y luego instalar la ejecución del archivo de Phoenix:

```shell
$ mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez 
```

## Creando una aplicación Phoenix:

1.  Después de instalar Phoenix, crear una aplicación es simple:

```shell
$ mix phx.new <application_name> 
```

2.  Ejecutar este comando con generar una estructura de directorios y todos los archivos básicos necesarios con el nombre de _aplicación_ que usó en el comando anterior. Luego se le pedirá que instale dependencias básicas para la aplicación, por lo que le responderemos que sí.
    
3.  A continuación, se nos pedirá que cambiemos a nuestro directorio de proyectos:
    

```shell
$ cd <application_name> 
```

4.  De forma predeterminada, Phoenix asume que usaremos PostgreSQL para nuestra aplicación con un nombre de usuario y contraseña de 'postgres'. Si ese no es el caso, deberá cambiar su configuración; de lo contrario, todo lo que tenemos que hacer es crear nuestra base de datos:

```shell
$ mix ecto.create 
```

5.  Finalmente, iniciaremos nuestro servidor:

```shell
$ mix phx.server 
```

6.  Ahora, ingrese a su navegador y navegue a localhost: 4000 y vea la página de bienvenida. Enhorabuena, tienes una aplicación de trabajo de Phoenix.