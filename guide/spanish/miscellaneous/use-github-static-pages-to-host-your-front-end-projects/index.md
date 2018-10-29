---
title: Use Github Static Pages to Host Your Front End Projects
localeTitle: Use las páginas estáticas de Github para hospedar sus proyectos front-end
---
**Beneficios**

Me encanta Codepen.io, es una herramienta maravillosa y fácil de usar para la simple experimentación de front-end. Pero a medida que los proyectos de fcc se volvieron más complejos, me di cuenta de que la codificación local me iba a ahorrar muchos dolores de cabeza. Mi editor de texto y [mi](https://incident57.com/codekit/) combo [codekit](https://incident57.com/codekit/) son simplemente más rápidos.

*   Autocompletar
*   Compila todo (codepen realmente estaba arrastrando tratando de compilar Jade)
*   Mejor auto-actualización
*   Construido en la glorieta
*   Versiones de Git
*   Mejora de la experiencia inmobiliaria en pantalla.

## Git a Github

Ya que estoy guardando localmente, y usando git para el control de versiones, pensé que también podría subir a Github. Además, Github tiene un servicio fantástico y gratuito para proyectos front-end llamado [Github Pages](https://pages.github.com/) . Solo actualiza tu repositorio y tus cambios están en vivo.

El funcionamiento es simple. Github comprueba si su repositorio tiene una rama llamada `gh-pages` y sirve cualquier código que se encuentre en esa rama. Aquí no hay cosas de back-end, pero HTML, CSS y JS funcionan como un encanto.

## Lo primero es lo primero

Hagamos una nueva carpeta para tu proyecto. [Usaré el](http://www.freecodecamp.com/challenges/stylize-stories-on-camper-news) proyecto [Camper News](http://www.freecodecamp.com/challenges/stylize-stories-on-camper-news) como mi ejemplo.

Llegue a su directorio de trabajo y haga uno nuevo. Puedes hacer esto en la terminal (o no).

![Directorio de proyectos](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2e3faaa2752657c592a9991ceed29a0200f332e6.png)

Ahora, vaya al directorio del proyecto, y (seguramente en el terminal esta vez) use el comando `git init` . Nota, este tutorial asume [que tienes git instalado](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) .

Esta bien impresionante Ahora estamos listos para trabajar.

## Próximos pasos

Crea algunos archivos en tu directorio campNews. No sé, tal vez un index.html y probablemente app.css y app.js, o cualquier convención de nomenclatura que prefieras. Pon tu código en estos archivos. Bien, ahora estamos listos para nuestro primer compromiso. Lleva **dos pasos** .

1.  `git add -A` preparará todos estos nuevos archivos y el nuevo código dentro de ellos
2.  `git commit -m 'relevant message'` comprometerá todo el trabajo que haya realizado en la sucursal en la que se encuentra actualmente ('maestro' de forma predeterminada)

## La clave de todo esto.

OK, hasta ahora seguimos siendo locales. Hay algunas cosas que debemos hacer para tomar nuestro trabajo y trasladarlo a Github. Es en este punto que me gusta cambiar de ramas. Recuerde: github solo sirve desde páginas gh, y si ha seguido hasta ahora, su rama se llama 'maestro'. Vamos a hacer una nueva rama (local) de gh-pages.

`git checkout -b gh-pages` lo creará, copiará todo el trabajo de master a gh-pages y me cambiará a la rama. Uf.

`git branch -d master` se librará de la rama master. Suena loco, lo sé, pero ¿para qué lo necesitamos? Solo piensa en gh-pages como tu NUEVA rama maestra.

Ahora, `git add -A` y `git commit -m 'relevant message'` nuevo, por si acaso. Y prepárese para dejar su editor y terminal y conectarse en línea por primera vez.

Ve a tu perfil de github y crea un nuevo repositorio. Nombre algo relevante, como campNews.

![Nuevo repo](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3f113af87b94fcd649c78d5f6d36463795671e7b.png)

Una vez que se haya creado, ingrese y capture la URL de clonación HTTPS. (Ignore los archivos en mi captura de pantalla, su repo estará vacío en este punto).

![clon url](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a0f3da26ba0802342d7d6f7890763a2bca32b62a.png)

## Poniendolo todo junto

Y puedes dejar el mundo online. ¡De vuelta a la terminal! Vamos a conectar nuestro proyecto local a este repositorio github. Todo lo que necesita es un comando.

`git remote add origin <server>` Simplemente reemplace el servidor con la URL HTTPS que acaba de copiar. Así que mi orden se ve así:

`git remote add origin https://github.com/gkobilansky/campNews.git` .

OK, hasta ahora hemos:

1.  Creó nuestro proyecto
2.  Versión en git
3.  Se comprometieron algunos cambios.
4.  Lo cambié a la rama 'gh-pages'
5.  Conectado a github

## ¡Último paso!

Empuje su proyecto a github. De nuevo, simple:

`git push origin gh-pages`

Ese comando se asegurará de que tus últimas confirmaciones se carguen en github. Una vez que haya hecho esto al menos una vez, su proyecto debería estar disponible en http: // _nombre de usuario_ .github.io / _repository_ , así que para mí es [http://gkobilansky.github.io/campNews](http://gkobilansky.github.io/campNews) .

Una vez que todo esto está hecho, el proceso simplemente se repite:

1.  `git add -A`
2.  `git commit -m 'relevant message'`
3.  `git push origin gh-pages`

Concedido, curva de aprendizaje más pronunciada que codepen.io, pero más rápido y más flexible una vez que aprendas a hacerlo.

¡Feliz codificación!

PD. Gracias a [esta guía](http://rogerdudler.github.io/git-guide/) de Roger Dudler por mantener las cosas simples.