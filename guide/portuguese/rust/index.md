---
title: Rust
localeTitle: Ferrugem
---
# Ferrugem

## Introdução

Rust é uma linguagem de programação de sistemas focada em três objetivos: segurança, velocidade e simultaneidade. Seu design permite criar programas com desempenho e controle de uma linguagem de baixo nível, mas com as poderosas abstrações de uma linguagem de alto nível. Essas propriedades tornam o Rust adequado para programadores que têm experiência em linguagens como o C e buscam uma alternativa mais segura, além de linguagens como o Python, que estão procurando maneiras de escrever códigos que tenham um desempenho melhor sem sacrificar a expressividade. O Rust executa a maioria de suas verificações de segurança e decisões de gerenciamento de memória em tempo de compilação, para que o desempenho de tempo de execução de seu programa não seja afetado. Isso torna útil em vários casos de uso em que outros idiomas não são bons: programas com requisitos de espaço e tempo previsíveis, incorporação em outros idiomas e gravação de código de baixo nível, como drivers de dispositivo e sistemas operacionais. Também usado para aplicativos da Web também [ativa o](https://www.crates.io) site de registro do pacote Rust, [crates.io](https://www.crates.io) .

Para mais informações, [acesse a página da Rust](https://www.rust-lang.org) .

## Instalação

Os desenvolvedores de ferrugem tornam extremamente fácil instalar e gerenciar ferrugem em seu sistema. Isto é conseguido através da `rustup` da ferramenta, que permite não só instalar o `rustc` , mas também alternar facilmente entre as versões estável, beta e nocturna do compilador e mantê-las atualizadas.

A documentação oficial de instalação pode ser encontrada [aqui](https://doc.rust-lang.org/book/second-edition/ch01-01-installation.html) .

### Linux ou Mac

Se você estiver executando Linux ou Mac, a instalação do `rustup` é melhor feita através do terminal:

```bash
$ curl https://sh.rustup.rs -sSf | sh 
```

Isto irá baixar e executar um script para sua máquina que instala a ferramenta. O script de instalação adiciona automaticamente o Rust ao seu sistema `PATH` após o seu próximo login.

### janelas

No Windows, acesse o [site](https://rustup.rs) do [rustup](https://rustup.rs) e siga as instruções para fazer o download do `rustup-init.exe` . Execute isso e siga o restante das instruções que ele fornece.

### Atualizando

Depois de ter instalado `rustup` , atualizando para versões mais recentes é simples. Tudo que você precisa para executar é:

```bash
$ rustup update 
```

Para visualizar o número da versão atual, confirmar o hash e confirmar a data do seu compilador de ferrugem, execute o seguinte comando:

```bash
$ rustc --version 
 rustc xyz (abcabcabc yyyy-mm-dd) 
```

### Desinstalando

Desinstalar ferrugem do seu sistema é tão fácil quanto instalá-lo:

```bash
$ rustup self uninstall 

```