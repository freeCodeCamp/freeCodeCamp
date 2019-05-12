---
title: Installing Rust
localeTitle: Instalando Rust
---
# Instalando Rust

Usar `rustup` é preferido para a instalação Rust. `rustup` instala e gerencia o Rust para o seu sistema.

## Instalando o Rust no Windows

Visite o [site](https://rustup.rs) do [rustup](https://rustup.rs) e baixe o `rustup-init.exe` . Instale-o e então você deve estar pronto para ir!

## Instalando o Rust em outros sistemas operacionais (Mac OS X, Linux, BSD, Unix)

Abra seu terminal e digite este comando:
```shell
curl https://sh.rustup.rs -sSf | sh 
```

Isso irá buscar o instalador do `rustup` e, por sua vez, buscará tudo o que você precisa.

# Verificando instalação

Instalar `rustup` irá instalar todas as coisas relevantes para ferrugem, mas o mais relevante é instalar o compilador e o gerenciador de pacotes. Para verificar se tudo está instalado, execute este comando:
```shell
cargo version 
```

Agora você poderá usar o Rust!

# Mais Informações

Para saber mais sobre o processo de instalação, visite https://www.rust-lang.org/pt-BR/install.html
