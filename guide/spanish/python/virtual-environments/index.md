---
title: Virtual Environments
localeTitle: Entornos virtuales
---
## Entornos virtuales

Los entornos virtuales se pueden describir como directorios de instalación aislados. Este aislamiento le permite localizar la instalación de las dependencias de su proyecto, sin obligarlo a instalarlas en todo el sistema.

Imagina que tienes dos aplicaciones App1 y App2. Ambos requieren el paquete Pak, pero con diferentes versiones. Si instala Pak versión 2.3 para App1, no podrá ejecutar App2, ya que requiere la versión 3.1. Aquí es cuando los entornos virtuales son útiles.

Beneficios:

*   Puede tener múltiples entornos, con múltiples conjuntos de paquetes, sin conflictos entre ellos. De esta manera, se pueden satisfacer los requisitos de diferentes proyectos al mismo tiempo.
*   Puede lanzar fácilmente su proyecto con sus propios módulos dependientes.

Aquí hay dos formas en que puede crear entornos virtuales de Python.

## Virtualenv

[`virtualenv`](https://virtualenv.pypa.io/en/stable/) es una herramienta utilizada para crear entornos aislados de Python. Crea una carpeta que contiene todos los ejecutables necesarios para usar los paquetes que necesitaría un proyecto de Python.

Puedes instalarlo con `pip` :
```
pip install virtualenv 
```

Verifique la instalación con el siguiente comando:
```
virtualenv --version 
```

### Crear un ambiente

Para crear un entorno virtual utiliza:
```
virtualenv --no-site-packages my-env 
```

Esto crea una carpeta en el directorio actual con el nombre del entorno ( `my-env/` ). Esta carpeta contiene los directorios para instalar módulos y ejecutables de Python.

También puede especificar la versión de Python con la que desea trabajar. Solo usa el argumento `--python=/path/to/python/version` . Por ejemplo, `python2.7` :
```
virtualenv --python=/usr/bin/python2.7 my-env 
```

### Lista de ambientes

Puedes listar los entornos disponibles con:
```
lsvirtualenv 
```

### Activar un entorno

Antes de que puedas comenzar a usar el entorno necesitas activarlo:
```
source my-env/bin/activate 
```

Esto asegura que solo se utilicen paquetes bajo `my-env/` .

Observará que el nombre del entorno se muestra a la izquierda de la solicitud. De esta forma podrás ver cuál es el entorno activo.

### Instalar paquetes

Puede instalar los paquetes uno por uno, o fijando un `requirements.txt` archivo para su proyecto.
```
pip install some-package 
 pip install -r requirements.txt 
```

Si desea crear un `requirements.txt` archivo de los paquetes ya instalados, ejecute el siguiente comando:
```
pip freeze > requirements.txt 
```

El archivo contendrá la lista de todos los paquetes instalados en el entorno actual y sus respectivas versiones. Esto te ayudará a lanzar tu proyecto con sus propios módulos dependientes.

### Desactivar un entorno

Si ha terminado de trabajar con el entorno virtual, puede desactivarlo con:
```
deactivate 
```

Esto lo regresa al intérprete de Python predeterminado del sistema con todas las bibliotecas instaladas.

### Eliminar un entorno

Simplemente elimine la carpeta de entorno.

## Conda

[`Conda`](https://conda.io/docs/index.html) es una gestión de paquetes, dependencias y entornos para muchos idiomas, incluido Python.

Para instalar Conda, siga estas [instrucciones](https://conda.io/docs/user-guide/install/index.html) .

### Crear un entorno

Para crear un entorno virtual utiliza:
```
conda create --name my-env 
```

Conda creará la carpeta correspondiente dentro del directorio de instalación de Conda.

También puede especificar con qué versión de Python desea trabajar:
```
conda create --name my-env python=3.6 
```

### Lista de ambientes

Puedes enumerar todos los entornos disponibles con:
```
conda info --envs 
```

### Activar un entorno

Antes de que puedas comenzar a usar el entorno necesitas activarlo:
```
source activate my-env 
```

### Instalar paquetes

Lo mismo que con `virtualenv` .

### Desactivar un entorno

Si ha terminado de trabajar con el entorno virtual, puede desactivarlo con:
```
source deactivate 
```

### Eliminar un entorno

Si desea eliminar un entorno de Conda use:
```
conda remove --name my-env 
```

#### Más información:

*   [web oficial de](https://virtualenv.pypa.io/en/stable/) `virtualenv`
*   [Sitio web oficial de](https://conda.io/docs/index.html) `Conda`
*   `The Hitchhicker's Guide to Python` - [Pypenv y entornos virtuales](http://docs.python-guide.org/en/latest/dev/virtualenvs/)