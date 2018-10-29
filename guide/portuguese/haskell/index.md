---
title: Haskell
localeTitle: Haskell
---
## O que é o Haskell?

Haskell é uma linguagem de programação padronizada, de uso geral e puramente funcional, com tipagem estática declarativa e forte.

Haskell tem raízes profundas na matemática, e você logo aprenderá a apreciar as implicações disso.

## Versão

Atualmente a versão mais recente do GHC é 8.6 (em 12 de outubro de 2018)

## Instalação

A maneira recomendada de instalar o Haskell é usando stack: [stack download](https://docs.haskellstack.org/en/stable/README/#how-to-install) Stack é um programa multi-plataforma para o desenvolvimento de projetos Haskell. Destina-se a Haskellers novos e experientes.

Para realmente começar a usar o Haskell, você precisa do GHC (The Glasgow Haskell Compiler), para configurar: [stack setup](https://docs.haskellstack.org/en/stable/README/#how-to-install://docs.haskellstack.org/en/stable/README/#quick-start-guide)

```shell
stack new my-project 
 cd my-project 
 stack setup 
 stack build 
 stack exec my-project-exe 
```

Uma palavra de cautela, tente não usar a instalação da pilha embora ele instale o pacote globalmente, isso não é recomendado, pois versões diferentes de pacotes são compatíveis com versões diferentes do GHC. Portanto, usar a cópia local do pacote usando a compilação da pilha é a melhor maneira de seguir.

## Olá Mundo

```haskell
main :: IO () 
 main = print "Hello Haskell :)" 
```

Salve o código acima em um arquivo chamado "hello.hs" e salve.

Para compilar o exemplo Hello World, isso converterá nosso código haskell em bytecodes compreensíveis por máquina.

```shell
stack ghc hello.hs 
 ./hello 
```

## Documentação

O Hackage fornece documentação para o Haskell

## Quer aprender mais?

*   Haskell wiki [link](https://wiki.haskell.org/Haskell)