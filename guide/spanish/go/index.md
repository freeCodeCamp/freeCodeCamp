---
title: Go
localeTitle: Ir
---
## Ir

![Ir de parachoques](https://golang.org/doc/gopher/bumper320x180.png)

**Go** (o **golang** ) es un lenguaje de programación creado en Google en 2007 por Robert Griesemer, Rob Pike y Ken Thompson. Es un lenguaje compilado, de tipo estático, en la tradición de Algol y C. Se han agregado funciones de recolección de basura, tipificación estructural limitada, seguridad de memoria y programación concurrente de estilo CSP. El compilador y otras herramientas de lenguaje originalmente desarrolladas por Google son gratuitas y de código abierto. Su popularidad está aumentando rápidamente. Es una gran opción para construir aplicaciones web.

Para más información diríjase a [la página de inicio de Go.](https://golang.org/)

¿Quieres un rápido [Tour de Go?](https://tour.golang.org/welcome/1)

## \## Pre-instalaciones:

#### Instale Golang con Homebrew:

```bash
$ brew update 
 $ brew install golang 
```

#### Cuando esté instalado, intente ejecutar la versión go para ver la versión instalada de Go.

## \### Configurar el espacio de trabajo:

##### Añadir variables de entorno:

Primero, deberá indicar a Go la ubicación de su área de trabajo.

Agregaremos algunas variables de entorno en la configuración de shell. Uno de los archivos ubicados en su directorio de inicio bash\_profile, bashrc o .zshrc (para Oh My Zsh Army)

```bash
$ vi .bashrc 
```

\`

Luego agrega esas líneas para exportar las variables requeridas.

#### Este es en realidad su archivo .bashrc

```bash
export GOPATH=$HOME/go-workspace # don't forget to change your path correctly! 
 export GOROOT=/usr/local/opt/go/libexec 
 export PATH=$PATH:$GOPATH/bin 
 export PATH=$PATH:$GOROOT/bin 
```

## \#### Crea tu espacio de trabajo:

##### Crea el árbol de directorios del espacio de trabajo:

```bash
$ mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin 
 $GOPATH/src : Where your Go projects / programs are located 
 $GOPATH/pkg : contains every package objects 
 $GOPATH/bin : The compiled binaries home 
```

### Inicio rápido

Para un proyecto Go de arranque rápido y repetitivo, pruebe [Alloy](https://www.growthmetrics.io/open-source/alloy)

1.  Repositorio de Aleaciones Clonales
```
git clone https://github.com/olliecoleman/alloy 
 cd alloy 
```

2.  Instala las dependencias
```
glide install 
 npm install 
```

3.  Iniciar el servidor de desarrollo
```
go install 
 alloy dev 
```

4.  Visite el sitio web en `http://localhost:1212`

_Alloy usa Node, NPM y Webpack_

### Ir al patio de recreo

[Ir al patio de recreo](https://play.golang.org/)

Aprender a instalar go en su máquina local es importante, pero si desea comenzar a jugar vaya directamente a su navegador, entonces Go Playground es la caja de arena perfecta para comenzar de inmediato. Para obtener más información sobre Go Playground, consulte su artículo titulado [Inside the Go Playground](https://blog.golang.org/playground)