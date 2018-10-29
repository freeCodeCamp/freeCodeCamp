---
title: Setting Up Python Web Framework Django and Flask
localeTitle: Configurando Python Web Framework Django y Flask
---
En este artículo, discutiremos cómo instalar [Django](https://www.djangoproject.com/) y [Flask](http://flask.pocoo.org/) , dos marcos web populares escritos en Python.

Quizás ya esté familiarizado con el uso generalizado y el soporte de la comunidad para Python; en desarrollo web. También deberías saber qué es un framework web; y las opciones disponibles para Python.

En caso de que estas suposiciones no sean ciertas, es posible que desee echar un vistazo a este artículo de wiki . Si está al corriente, vamos a comenzar a configurar los marcos web de Python en su máquina de desarrollo local.

Pero sería injusto si ignoramos por completo el debate [Python 2 vs Python 3](http://docs.python-guide.org/en/latest/starting/which-python/#the-state-of-python-2-vs-3) .

## Ambiente virtual

Antes de instalar Django, le pediremos que instale una herramienta extremadamente útil para ayudar a mantener ordenado su entorno de codificación en su computadora. Es posible omitir este paso, pero es muy recomendable. ¡Comenzar con la mejor configuración posible le ahorrará muchos problemas en el futuro!

Entonces, vamos a crear un entorno virtual (también llamado virtualenv). Virtualenv aislará su configuración de Python / Django por proyecto. Esto significa que cualquier cambio que realice en un sitio web no afectará a otros que también esté desarrollando. Limpio, ¿verdad?

Para obtener más información sobre los entornos virtuales, consulte la sección correspondiente [aquí](https://guide.freecodecamp.org/python/virtual-environments/) .

## Terminando

Si ya ha instalado `pip` , simplemente:
```
$ pip install django 
```

Una vez finalizada la instalación podemos crear un nuevo proyecto:
```
$ django-admin startproject myproject 
 $ cd myproject 
 $ python manage.py runserver 
```

Vaya a `http://localhost:8000` ! :cohete:

Hemos instalado con éxito el marco web de nuestra necesidad. Sin embargo, aún no está completo. La mayoría de las aplicaciones web están basadas en contenido y datos, por lo que necesitamos un almacenamiento de datos. O, una base de datos, si lo desea.

En el próximo artículo, discutiremos cómo instalar PostgreSQL y usarlo con nuestra aplicación web Python.

Un punto para reflexionar: hemos estado usando mucho `pip` , pero apenas hemos dicho nada al respecto. Bueno, por ahora, es solo un gestor de paquetes como `npm` . Tiene algunas diferencias con `npm` ; Pero, no tienes que preocuparte por eso ahora. Si estás interesado, revisa la [documentación oficial del `pip`](http://pip-python3.readthedocs.org/en/latest/index.html) .

_Si tiene sugerencias o preguntas, únase a nosotros en [Gitter](https://gitter.im/FreeCodeCamp/FreeCodeCamp)_ .