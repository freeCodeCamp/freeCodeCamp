---
title: Haskell
localeTitle: Haskell
---
## ¿Qué es Haskell?

Haskell es un lenguaje de programación puramente funcional estandarizado, de propósito general, con tipografía estática declarativa y fuerte.

Haskell tiene raíces profundas en las matemáticas, y pronto aprenderá a apreciar las implicaciones de esto.

## Versión

Actualmente, la última versión de GHC es 8.6 (a partir del 12 de octubre de 2018)

## Instalación

La forma recomendada de instalar Haskell es mediante la [descarga de](https://docs.haskellstack.org/en/stable/README/#how-to-install) pila: [pila](https://docs.haskellstack.org/en/stable/README/#how-to-install) Stack es un programa multiplataforma para el desarrollo de proyectos Haskell. Está dirigido a los haskellers tanto nuevos como experimentados.

Para comenzar a usar Haskell, necesitas el GHC (The Glasgow Haskell Compiler), así que para la configuración: [configuración de pila](https://docs.haskellstack.org/en/stable/README/#how-to-install://docs.haskellstack.org/en/stable/README/#quick-start-guide)

```shell
stack new my-project 
 cd my-project 
 stack setup 
 stack build 
 stack exec my-project-exe 
```

Una palabra de cautela, trate de no usar la instalación de pila Aunque se instalará el paquete globalmente, esto no se recomienda ya que las diferentes versiones de los paquetes son compatibles con las diferentes versiones de GHC. Por lo tanto, usar la copia local del paquete usando la construcción de pila es la mejor manera de seguir.

## Hola Mundo

```haskell
main :: IO () 
 main = print "Hello Haskell :)" 
```

Guarde el código anterior en un archivo llamado "hello.hs" y guárdelo.

Para compilar el ejemplo de Hello World, esto convertirá nuestro código de haskell en códigos de bytes comprensibles a máquina.

```shell
stack ghc hello.hs 
 ./hello 
```

## Documentación

Hackage proporciona documentación para Haskell

## ¿Querer aprender más?

*   [Enlace de](https://wiki.haskell.org/Haskell) haskell wiki