---
title: Create a dummy file with a specific size
localeTitle: Crie um arquivo fictício com um tamanho específico
---
## Como criar arquivos fictícios com um tamanho específico usando o comando "dd":

O comando "dd" pode ser usado para criar um arquivo de tamanho específico. Isso é útil se você quiser testar as velocidades de download ou quaisquer outros testes e precisar de um arquivo de tamanho específico.
```
dd if=/dev/zero of=file_name.txt bs=1024k count=10 
```

Isto irá criar um arquivo de 1MB chamado file\_name.txt.

bs é o tamanho do seu byte e count representa o número de blocos. Uma maneira fácil de ver é 1024K X 10.

Aqui está uma maneira ainda mais simples de criar um arquivo de 1 MB:
```
dd if=/dev/zero of=file_name.txt bs=1MB count=1 

```