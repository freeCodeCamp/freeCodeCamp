---
title: Installing Rust
localeTitle: Instalando óxido
---# Instalando óxido

El uso de `rustup` es preferido para la instalación de Rust. `rustup` instala y administra Rust para su sistema.

## Instalando Rust en Windows

Visite el [sitio web de rustup](https://rustup.rs) y descargue el `rustup-init.exe` . ¡Instálalo y entonces deberías estar listo para empezar!

## Instalación de Rust en otros sistemas operativos (Mac OS X, Linux, BSD, Unix)

Abre tu terminal y escribe este comando:

```sh
curl https://sh.rustup.rs -sSf | sh 
```

Esto buscará el instalador de `rustup` y, a su vez, `rustup` todo lo que necesita.

# Verificando instalación

La instalación de `rustup` instalará todas las cosas relevantes para la oxidación, pero lo más importante es que se instale el compilador y el administrador de paquetes. Para verificar que todo está instalado, ejecute este comando:

```sh
cargo version 
```

¡Ahora podrás usar Rust!

# Más información

Para obtener más información sobre el proceso de instalación, visite https://www.rust-lang.org/en-US/install.html