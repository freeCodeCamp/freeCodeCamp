---
title: Pathogen
localeTitle: Patógeno
---
## Patógeno

O Pathogen ajuda você a gerenciar seu caminho de execução com facilidade.

Permite instalar facilmente o pacote para o Vim.

Execute os seguintes comandos:
```
mkdir -p ~/.vim/autoload ~/.vim/bundle && \ 
 curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim 
```

* * *

## Manipulação de Caminho de Tempo de Execução

Adicione este comando ao seu arquivo .vimrc:
```
execute pathogen#infect() 
```

Se você não tem nenhum arquivo .vimrc, digite `vim ~/.vimrc` e cole isto:
```
execute pathogen#infect() 
 syntax on 
 filetype plugin indent on 
```

Este é um exemplo muito básico. Neste momento, todos os plugins serão extraídos para `~/.vim/bundle` e serão adicionados ao _`runtimepath`_ do _`runtimepath`_

* * *

#### | Exemplo

Se você deseja instalar um plug-in como o NERDTree, simplesmente execute isto:
```
cd ~/.vim/bundle 
 git clone https://github.com/scrooloose/nerdtree 
```

Ele será adicionado ao `runtimepath` .

Curadoria do recurso de plugins do Vim: [Vim Awesome](https://vimawesome.com)