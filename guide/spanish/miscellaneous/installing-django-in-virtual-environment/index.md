---
title: Installing Django in Virtual Environment
localeTitle: Instalación de Django en un entorno virtual
---
[Django](https://www.djangoproject.com) es un marco de opinión que le ayuda a ser productivo. Por ejemplo, la estructura de archivos cuando creas un proyecto Django. Pero, si desea explorar el campo del desarrollo web en Python en detalle; Tal vez [Flask](http://flask.pocoo.org/) esté más arriba en tu callejón. Siéntase libre de omitir esta parte del artículo y saltar directamente a la [ayuda de instalación de Flask.](#installing-flask-in-virtual-environment)

A partir de este escrito, la versión actual de Django era Django 1.9.2. Pero cuando estás leyendo esto, ahora mismo, podría ser más alto.

La guía de instalación oficial está disponible [aquí](https://docs.djangoproject.com/en/1.9/intro/install/#install-django) . Debes instalar la última versión estable y oficial; y **no** la última versión de desarrollo (¡a menos que sepa lo que está haciendo y le guste vivir peligrosamente!)

Pero antes de comenzar la instalación, asegúrese de estar dentro de un entorno virtual **activado** ; donde ejecutar el siguiente comando en la terminal se vería así:
```
$ python --version 
 Python 3.5.1 
```

Puede que no sea `3.5.1` para ti. Bien podría ser `3.4.3` . Pero eso está bien, siempre y cuando no se muestre como `2.7.9` o algo más que comience con `2` .

Una vez que se haya asegurado de estar en un entorno virtual activado, el comando de `python` apunta a un Python de la versión 3; usted está listo para instalar Django. Simplemente siga la [guía de instalación](https://docs.djangoproject.com/en/1.9/topics/install/#installing-official-release) oficial e instálela con `pip` , el administrador de paquetes de Python.

Una vez instalada; sería una buena idea comprobar qué todos instalaron `pip` ; ejecutando el siguiente comando:
```
$ pip freeze 
```

Esto generaría una lista de módulos instalados con Python actual; y deberías ver Django con la versión adecuada (algo como `Django==1.9.2` en la lista).

Si desea utilizar Windows, la discusión anterior no es aplicable para usted. Quizás solo tenga acceso a una máquina con Windows y, por razones personales, preferiría no trabajar en un cuadro de Linux basado en navegador en la nube (¿conexión lenta, tal vez?).

Es posible que pueda seguir este [tutorial](https://docs.djangoproject.com/en/1.9/howto/windows/) y configurar Django con Python 3 en su máquina Windows.

O bien, puede usar [Virtualbox](https://www.virtualbox.org/) con un [Vagrant](https://www.vagrantup.com/) box para el desarrollo de Django directamente en su máquina.