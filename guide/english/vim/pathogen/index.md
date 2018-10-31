---
title: Pathogen
---

## Pathogen

Pathogen helps you to manage your runtime path with ease.

It lets install easily bundle for Vim.

Run the following commands :

```
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
```

---

## Runtime Path Manipulation

Add this command to your .vimrc file :

```
execute pathogen#infect()
```

If you don't have any .vimrc file, type `vim ~/.vimrc` and paste this :

```
execute pathogen#infect()
syntax on
filetype plugin indent on
```

This is a very basic example.
At this moment, every plugins will be extracted to `~/.vim/bundle` and will be added to the _`runtimepath`_

---

#### | Example

If you wish to install a plugins like NERDTree, simply run this :

```
cd ~/.vim/bundle
git clone https://github.com/scrooloose/nerdtree
```

It will be added to the \_`runtimepath`.

Curated ressource of Vim plugins : [Vim Awesome](https://vimawesome.com)
