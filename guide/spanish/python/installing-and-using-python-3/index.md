---
title: Installing and Using Python 3
localeTitle: Instalación y uso de Python 3
---
## Instalación de Python 3

Puedes descargar Python desde este [enlace](https://www.python.org/downloads/) oficial. Según su sistema operativo (Windows o Linux o OSX), es posible que desee instalar Python 3 siguiendo [estas instrucciones](http://docs.python-guide.org/en/latest/starting/installation/) .

## Uso de entornos virtuales

Siempre es una buena idea [aislar](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) la instalación de Python; y manteniéndolo separado de su _sistema Python_ . El _sistema Python_ es la ruta al intérprete de Python, que es utilizado por otros módulos instalados junto con su sistema operativo.

No es **seguro** instalar marcos o bibliotecas web de Python directamente con _System Python_ . En su lugar, puedes usar [Virtualenv](https://virtualenv.readthedocs.org/en/latest/) para crear y generar un proceso Python separado cuando estés desarrollando aplicaciones Python.

### Virtualenvwrapper

El [módulo Virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/) le facilita la administración y el aislamiento de varios entornos de entornos aislados de Python en una sola máquina; sin dañar ningún módulo o servicio escrito en Python y utilizado por su máquina.

Por supuesto, la mayoría de los entornos de desarrollo alojados en la nube, como [Nitrous](https://www.nitrous.io/) o [Cloud9,](https://c9.io/) también vienen con estos preinstalados y listos para que usted pueda codificar. Puede seleccionar rápidamente un cuadro de su panel y comenzar a codificar después de activar un entorno Python 3.

En [Cloud9](https://c9.io/) , debe seleccionar el cuadro Django al crear un nuevo entorno de desarrollo.

Unos pocos ejemplos de comandos de shell seguirían. Si desea copiar y pegar, tenga en cuenta que el signo `$` es una abreviatura para el indicador de terminal, no es parte del comando. Mi aviso de terminal se ve algo como esto:
```
alayek:~/workspace (master) $ 
```

Y, una `ls` se vería como
```
alayek:~/workspace (master) $ ls 
```

Pero, mientras escribo lo mismo en esta documentación, lo estaría escribiendo como
```
$ ls 
```

Volviendo a nuestra discusión, puede crear un recinto de seguridad incluido en el intérprete de Python 3 en Cloud9 ejecutando en su terminal en la nube:
```
$ mkvirtualenv py3 --python=/usr/bin/python3 
```

Debe ejecutarlo solo una vez después de crear una nueva caja para su proyecto. Una vez ejecutado, este comando creará un nuevo virtualenv listo para su uso, denominado `py3` .

Para ver los entornos virtuales disponibles, puede utilizar
```
$ workon 
```

Para activar `py3` , puede usar el comando `workon` con el nombre del entorno:
```
$ workon py3 
```

Los tres comandos de terminal anteriores también funcionarían en máquinas Linux locales o máquinas OSX. Estos son comandos de [virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/#introduction) ; así que si planea usarlos, asegúrese de tener este módulo instalado y agregado a la variable `PATH` .

Si estás dentro de un entorno virtual; Puede descubrirlo fácilmente consultando el indicador de su terminal. El nombre del entorno se mostrará claramente en el indicador de su terminal.

Por ejemplo, cuando estoy dentro del entorno `py3` ; Estaría viendo esto como mi indicador de terminal:
```
(py3)alayek:~/workspace (master) $ 
```

¡Note el `(py3)` entre llaves! Si por alguna razón, no está viendo esto, incluso si está dentro de un entorno virtual; Puedes intentar hacer una de las cosas [mencionadas aquí](http://stackoverflow.com/questions/1871549/python-determine-if-running-inside-virtualenv) .

Salir de un entorno virtual; o para desactivar uno - usa el comando
```
$ deactivate 
```

De nuevo, esto funciona solo con el módulo virtualenvwrapper.

### Pipenv

Una alternativa al uso de virtualenvwrapper es [Pipenv](https://docs.pipenv.org/) . Crea automáticamente entornos virtuales para sus proyectos y mantiene un `Pipfile` que contiene las dependencias. Usando Pipenv significa que ya no es necesario utilizar PIP y virtualenv separado, o es propietario de su propio `requirements.txt` archivo. Para aquellos familiarizados con JavaScript, Pipenv es similar a usar una herramienta de empaquetado como `npm` .

Para comenzar con Pipenv, puede seguir esta [guía](https://docs.pipenv.org/install.html#installing-pipenv) muy detallada. Pipenv hace que sea fácil de [especificar qué versión de Python](https://docs.pipenv.org/basics.html#specifying-versions-of-python) que desea utilizar para cada proyecto, [la importación](https://docs.pipenv.org/basics.html#importing-from-requirements-txt) de una existente `requirements.txt` archivo y [graficar](https://docs.pipenv.org/#pipenv-graph) sus dependencias.