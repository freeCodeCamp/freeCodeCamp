---
title: Rust
localeTitle: Moho
---
# Moho

## Introducción

Rust es un lenguaje de programación de sistemas centrado en tres objetivos: seguridad, velocidad y concurrencia. Su diseño le permite crear programas que tienen el rendimiento y el control de un lenguaje de bajo nivel, pero con las poderosas abstracciones de un lenguaje de alto nivel. Estas propiedades hacen que Rust sea adecuado para programadores que tienen experiencia en lenguajes como C y buscan una alternativa más segura, así como aquellos de lenguajes como Python que buscan formas de escribir código que funcione mejor sin sacrificar la expresividad. Rust ejecuta la mayoría de sus verificaciones de seguridad y decisiones de administración de memoria en tiempo de compilación, para que el rendimiento en tiempo de ejecución de su programa no se vea afectado. Esto lo hace útil en varios casos de uso en los que otros idiomas no son buenos: programas con requisitos de espacio y tiempo predecibles, incrustados en otros idiomas y escritura de código de bajo nivel, como controladores de dispositivos y sistemas operativos. También se utiliza para aplicaciones web y también potencia el sitio de registro de paquetes Rust, [crates.io](https://www.crates.io) .

Para más información diríjase a [la página de inicio de Rust](https://www.rust-lang.org) .

## Instalación

Los desarrolladores de rust hacen que sea extremadamente fácil de instalar y administrar el herrumbre en su sistema. Esto se logra a través de la herramienta `rustup` que le permite no solo instalar `rustc` compilador, sino también cambiar fácilmente entre las versiones estable, beta y nocturna del compilador y mantenerlas todas actualizadas.

La documentación oficial de instalación se puede encontrar [aquí](https://doc.rust-lang.org/book/second-edition/ch01-01-installation.html) .

### Linux o Mac

Si está ejecutando Linux o Mac, la instalación de `rustup` se realiza mejor a través del terminal:

```bash
$ curl https://sh.rustup.rs -sSf | sh 
```

Esto descargará y ejecutará un script en su máquina que instala la herramienta. El script de instalación agrega automáticamente Rust a su sistema `PATH` después de su próximo inicio de sesión.

### Windows

En Windows, vaya al [sitio web de rustup](https://rustup.rs) y siga las instrucciones para descargar `rustup-init.exe` . Ejecuta eso y sigue el resto de las instrucciones que te dan.

### Actualizando

Una vez que haya instalado el `rustup` , la actualización a nuevas versiones es simple. Todo lo que necesitas para ejecutar es:

```bash
$ rustup update 
```

Para ver el número de versión actual, el hash de confirmación y la fecha de confirmación de su compilador Rust, ejecute el siguiente comando:

```bash
$ rustc --version 
 rustc xyz (abcabcabc yyyy-mm-dd) 
```

### Desinstalación

Desinstalar el óxido de su sistema es tan fácil como instalarlo:

```bash
$ rustup self uninstall 

```