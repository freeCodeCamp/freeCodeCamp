---
title: Bash Head
localeTitle: Bash Head
---
## Comando Bash: head

Head é usado para imprimir as dez primeiras linhas (por padrão) ou qualquer outra quantidade especificada de um arquivo ou arquivos. O Cat é usado para ler um arquivo seqüencialmente e imprimi-lo na saída padrão. ou seja, imprime todo o conteúdo do arquivo inteiro. - isso nem sempre é necessário, talvez você queira apenas verificar o conteúdo de um arquivo para ver se é o correto, ou verificar se ele realmente não está vazio. O comando head permite visualizar as primeiras N linhas de um arquivo.

se mais de um arquivo for chamado, as dez primeiras linhas de cada arquivo serão exibidas, a menos que um número específico de linhas seja especificado. A escolha de exibir o cabeçalho do arquivo é opcional usando a opção abaixo

### Uso

```bash
head [options] [file_name(s)] 
```

Opções mais usadas:

*   `-n N` , imprime as primeiras N linhas do (s) arquivo (s)
*   `-q` , não imprime os cabeçalhos de arquivo
*   `-v` , sempre imprime os cabeçalhos dos arquivos

### Exemplo

```bash
head file.txt 
```

Imprime no terminal as primeiras dez linhas do arquivo.txt (padrão)

```bash
head -n 7 file.txt 
```

Imprime no terminal as primeiras sete linhas do arquivo.txt

```bash
head -q -n 5 file1.txt file2.txt 
```

Imprima no terminal as primeiras 5 linhas do arquivo1.txt, seguidas das primeiras 5 linhas do arquivo2.txt

### Mais Informações:

*   [Wikipedia](https://en.wikipedia.org/wiki/Head_(Unix))