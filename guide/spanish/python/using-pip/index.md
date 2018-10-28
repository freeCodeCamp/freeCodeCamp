---
title: Python Using Pip
localeTitle: Python usando Pip
---
Hemos visto cómo utilizar declaraciones `import` para importar varios módulos y usarlos en nuestros programas. Python viene con varios módulos integrados, pero la comunidad de Python tiene más que ofrecer.

> ¡Son los módulos los que hacen que Python sea tan poderoso!

Los módulos de terceros agregan mucha más funcionalidad a Python. Ahora aprenderemos cómo instalar estos módulos para poder usarlos en nuestros programas.

La forma más sencilla es usar `pip`
```
pip install <nombre_del_módulo> 
```

Si has usado `npm`, se puede decir que `pip` es el _npm_ de Python.

Nota al margen: la diferencia es que con npm, `npm install` instala por defecto paquetes localmente en un proyecto, mientras que `pip install` lo hace de manera global por defecto. Para instalar módulos localmente, debes crear y activar lo que se conoce como un [entorno virtual](http://docs.python-guide.org/en/latest/dev/virtualenvs/), de modo que `pip install` instale en la carpeta donde se encuentra ese entorno virtual, en lugar de hacerlo globalmente (lo que podría requerir privilegios de administrador).

La última vez, en la wiki de `import-statements` usamos el módulo `requests` como ejemplo. Como es un módulo de terceros, debemos instalarlo por separado después de instalar Python.

Instalarlo sería tan simple como `pip install requests`. Puedes incluso pasarle varios argumentos. El que te encontrarás con más frecuencia es `--upgrade`. Puedes actualizar un módulo de Python con:
```
pip install <nombre_del_módulo> --upgrade 
```

Por ejemplo, para actualizar el módulo `requests` a su última versión sería tan sencillo como `pip install requests --upgrade`.

Antes de usar `pip`, necesitarás instalarlo (es bastante fácil). Puedes instalarlo desde [aquí](https://bootstrap.pypa.io/get-pip.py).

Simplemente haz clic en el enlace. Guarda el archivo como `get-pip.py` _Por favor, no olvides la extensión `.py`._ Y ejecútalo.

Una alternativa al uso de pip sería probar [`easy_install`](https://bootstrap.pypa.io/ez_setup.py).

Usar `easy_install` también es sencillo. La sintaxis es:
```
easy_install <nombre_del_módulo> 
```

Sin embargo, `pip` es más popular que `easy_install`.

**Nota:** En algunos sistemas donde están instalados Python 2 y Python 3, `pip` y `pip3` harán cosas diferentes. `pip` instala la versión de Python 2 del paquete, y `pip3` instalará la versión de Python 3 del paquete. Para obtener más información sobre la diferencia entre Python 2 y 3, consulte [esta](https://guide.freecodecamp.org/python/python-2-vs-python-3) guía. Puedes comprobar la versión de `pip` haciendo `pip --version` y/o `pip3 --version`:
```
pip3 --version 
 pip 18.0 from /usr/local/lib/python3.5/dist-packages/pip (python 3.5) 
```

También podemos crear un archivo txt que contenga una lista de módulos que deben instalarse usando pip.
Por ejemplo, podríamos crear el archivo `requirements.txt` y su contenido:
```
Kivy-Garden==0.1.4 
 macholib==1.5.1 
 idna==2.6 
 geoip2nation==0.1.2 
 docutils>=0.14 
 Cython 
```

En este archivo también podríamos configurar una versión para la instalación.
Después de esto, al invocar pip con:
```
 pip install -r <ARCHIVO QUE CONTIENE LOS MÓDULOS> 
 
          O EN NUESTRO CASO
 
 pip install -r requirements.txt 
```

Debe instalar todos los módulos listados en el archivo.
