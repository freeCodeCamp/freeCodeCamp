---
title: Coding standards
localeTitle: Padrões de codificação
---
### Esboço

*   Por que padrões de codificação?
*   Introdução ao PEP 8
*   Comandos

### Por que padrões de codificação?

A comunidade global de python está crescendo rapidamente e quase todo mundo usa python. É aqui que a legibilidade do código e os padrões uniformes são importantes. Qualquer pessoa no planeta deve ser capaz de ler seu código e entender o que ele faz. Há muitos aspectos para entender o código do outro, por exemplo, comentários sobre o que uma função faz, dividindo logicamente tarefas entre módulos e funções, bons nomes de variáveis, etc.

### Introdução ao PEP 8

Nós amamos aderir às convenções. A comunidade de usuários de python criou um conjunto de padrões, que agora são considerados convenções. Qualquer código de nível de setor que você escreve é ​​executado através do verificador PEP 8. Portanto, é uma boa prática começar a escrever docstrings para suas classes e funções e nomear variáveis ​​em minúsculas com sublinhados apropriados. Pode valer a pena dar uma olhada nesses padrões antes de começar a codificação.

[Aqui está o link exaustivo](https://www.python.org/dev/peps/pep-0008/ "Padrões PEP 8")

### Comandos

Veja como você verifica se o seu código python atende aos padrões dele.

```shell
:~$ pip install pep8 
 :~$ pep8 --first myCode.py 
```

Isso dará todas as linhas que violam os padrões, juntamente com uma breve descrição das correções.