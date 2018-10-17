---
title: Using the Find Command
localeTitle: Usando o comando Find
---
# Usando o comando Find

O comando find do Linux é uma ferramenta poderosa para ajudá-lo a localizar arquivos e diretórios em seu servidor. Com um pouco de prática, você pode facilmente rastrear as coisas com base no nome, tipo, tamanho ou data (quando elas foram criadas ou atualizadas pela última vez).

Pense em encontrar como seu ajudante ansioso:

Você: "Estou procurando por algo no meu servidor".

Encontre: "Eu posso ajudar! O que você pode me dizer sobre isso?"

Você: "Era um arquivo, maior que 2GB, em algum lugar sob meu diretório home, atualizado nas últimas 48 horas."

Encontrar: "Tada!"

Find é um programa, então você realmente teria que dizer para `find ~ -type f -size +2G` .

Aqui estão alguns exemplos de comandos usando find:

*   `find ~ -type d # Show me all the subdirectories inside my home directory`
*   `find / -type f -name 'todo.txt' # Show me files named 'todo.txt' anywhere under the root directory (ie anywhere)`

O primeiro parâmetro sempre nomeia o diretório no qual procuraremos. Em nossos exemplos acima, estes são ~ (diretório home do usuário atual) e / (diretório raiz do sistema de arquivos).

Outros parâmetros são opcionais e podem ser combinados de qualquer maneira que você achar útil:

*   O parâmetro type permite restringir a busca apenas por arquivos (f), diretórios (d) ou links simbólicos (l). Se você omitir o parâmetro type, você estará procurando por todos esses tipos.
*   O parâmetro name permite especificar o que você deseja encontrar pelo nome, seja com uma string literal ('filename.txt') ou usando curingas ('file?. \*').

`man find` mostrará muitos mais parâmetros e vale a pena ser revisto. Localizar pode localizar arquivos por nome, usuário, data de criação, tamanho e muito mais. Da próxima vez que você estiver procurando por algo, encontre-o!