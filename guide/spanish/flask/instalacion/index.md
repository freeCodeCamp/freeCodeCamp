---
title: Installing and Using Flask
localeTitle: Instalaci&oacute;n y Uso de Flask
---
## Instalaci&oacute;n

Para la instalaci&oacute;n se debe tener instalado Python y pip.

    $ pip install Flask


## Uso

Una vez instalado, para hacer uso del mismo, crear un archivo _app.py_ 
con el siguiente contenido

    from flask import Flask
    app = Flask(__name__)
    
    @app.route('/')
    def hola():
        return "Hola mundo"

Para correr la aplicacion, se debe especificar la variable de ambiente 
`FLASK_APP` con el nombre del script y se ejecuta Flask:

    $ export FLASK_APP=app.py
    $ flask run

Si esta en Windows, depende del interprete de comandos siendo usado. Por 
ejemplo en Simbolo de Sistema:

    C:\path\hacia\app>set FLASK_APP=app.py

O en PowerShell:

    PS C:\path\hacia\app> $env:FLASK_APP = "app.py"

Esto ejecuta un sencillo servidor, el cual es bueno para hacer las 
pruebas de la aplicacion, mas no para poner en producci&oacute;n.

Abra el navegador y vaya a la direccion http://127.0.0.1:5000, debe 
observar el saludo que escribi&oacute; en el script.
