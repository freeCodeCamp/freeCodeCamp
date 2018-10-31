---
title: Search and Replace
localeTitle: Pesquisar e substituir
---
# Pesquisando e substituindo no Vim

Pesquisar e substituir no vim pesquisarão todas as instâncias de um determinado padrão de texto e substituirão por uma string.

### Teclas de Comando

Os comandos usados ​​para pesquisa e substituição:

*   `:substitute`
*   `:s` (abreviada forma abreviada de substituto)

### Estrutura de Comando

A estrutura usada para pesquisa e substituição:

`:[range]` `s` / `[pattern]` / `[string]` / `[flags]` `[count]`

Onde…

*   `[range]` indica as linhas a pesquisar (por exemplo, `1` : primeira linha, `$` : última linha, `%` : todas as linhas).
*   `[pattern]` é o padrão de texto a ser pesquisado.
*   `[string]` é a string que substituirá o padrão de texto.
*   `[flags]` ativa opções adicionais de pesquisa e substituição (por exemplo, `c` : confirmar substituição, `g` : substituir todas as ocorrências em cada linha, `i` : ignorar maiúsculas e minúsculas).
*   `[count]` substitui em `[count]` linhas começando da última linha em `[range]` (ou linha atual se `[range]` omitido).

### Exemplos comuns

Alguns exemplos comuns de pesquisa e substituição estão listados abaixo:

*   `:s/foo/bar/` Altera o primeiro 'foo' para 'bar' na linha atual.
*   `:s/foo/bar/g` Muda cada 'foo' para 'bar' na linha atual.
*   `:%s/foo/bar/g` Muda cada 'foo' para 'bar' em todas as linhas.
*   `:13s/foo/bar/g` Mude cada 'foo' para 'bar' na linha 13.
*   `:%s/foo/bar/cgi` Altere todos os 'foo' para 'bar' em todas as linhas.