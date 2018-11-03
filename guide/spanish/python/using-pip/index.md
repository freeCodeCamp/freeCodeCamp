---
title: Python Using Pip
localeTitle: Python usando pip
---
Hemos visto cómo utilizar `import` declaraciones a `import` varios módulos y usarlos en nuestros programas. Python viene con varios módulos integrados, pero la comunidad de Python tiene más que ofrecer.

> ¡Son los módulos los que hacen que Python sea tan poderoso!

Los módulos de terceros agregan mucha más funcionalidad a Python. Ahora aprenderemos cómo instalar estos módulos para poder usarlos en nuestros programas.

La forma más sencilla es usar `pip`
```
pip install <module_name> 
```

Si ha usado `npm` , entonces puede pensar que es _npm_ de Python.

Nota al margen: la diferencia es que con npm, `npm install` por defecto instala paquetes localmente en un proyecto, mientras que `pip install` por defecto en todo el mundo. Para instalar módulos localmente, debe crear y activar lo que se denomina un [entorno virtual](http://docs.python-guide.org/en/latest/dev/virtualenvs/) , por lo tanto, `pip install` instalaciones en la carpeta donde se encuentra ese entorno virtual, en lugar de hacerlo globalmente (lo que puede requerir privilegios de administrador).

La última vez, en la wiki de `import-statements` usamos el módulo de `requests` como ejemplo. Como es un módulo de terceros, debemos instalarlo por separado después de instalar python.

Instalarlo sería tan simple como `pip install requests` . Incluso puede pasar varios argumentos junto con él. El que te encontrarás con más frecuencia es `--upgrade` . Puede actualizar un módulo de python por:
```
pip install <module_name> --upgrade 
```

Por ejemplo, actualizar el módulo de solicitudes a su última versión sería tan simple como `pip install requests --upgrade` actualizar.

Antes de usar `pip` , necesitarás instalarlo (es bastante simple). Puedes instalarlo desde [aquí](https://bootstrap.pypa.io/get-pip.py)

Simplemente haga clic en el enlace. Y guarde el archivo como `get-pip.py` _Por favor, no olvide la extensión `.py` ._ Y ejecutarlo.

Una alternativa al uso de pip sería probar [`easy_install`](https://bootstrap.pypa.io/ez_setup.py) .

Usar `easy_install` también es simple. La sintaxis es:
```
easy_install <module_name> 
```

Sin embargo, `pip` es más popular que usar `easy_install` .

**Nota:** En algunos sistemas donde están instalados Python 2 y Python 3, `pip` y `pip3` harán cosas diferentes. `pip` instala la versión de Python 2 del paquete, y `pip3` instalará la versión de Python 3 del paquete. Para obtener más información sobre la diferencia entre Python 2 y 3, consulte [esta](https://guide.freecodecamp.org/python/python-2-vs-python-3) guía. Puede comprobar el `pip` versión haciendo `pip --version` y / o `pip3 --version` :
```
pip3 --version 
 pip 18.0 from /usr/local/lib/python3.5/dist-packages/pip (python 3.5) 
```

También podemos crear un archivo txt que contenga una lista de módulos que deben instalarse usando pip. Por ejemplo, podríamos crear el archivo `requirements.txt` y su contenido:
```
Kivy-Garden==0.1.4 
 macholib==1.5.1 
 idna==2.6 
 geoip2nation==0.1.2 
 docutils>=0.14 
 Cython 
```

En este archivo también podríamos configurar una versión para la instalación. Después de esto, invocando pip con:
```
 pip install -r <FILE CONTAINING MODULES> 
 
          OR IN OUR CASE 
 
 pip install -r requirements.txt 
```

Debe instalar todos los módulos listados en el archivo.