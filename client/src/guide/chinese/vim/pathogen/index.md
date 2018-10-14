---
title: Pathogen
localeTitle: 病原
---
## 病原

Pathogen可帮助您轻松管理运行时路径。

它可以轻松安装Vim捆绑。

运行以下命令：
```
mkdir -p ~/.vim/autoload ~/.vim/bundle && \ 
 curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim 
```

* * *

## 运行时路径操作

将此命令添加到.vimrc文件中：
```
execute pathogen#infect() 
```

如果您没有任何.vimrc文件，请键入`vim ~/.vimrc`并粘贴：
```
execute pathogen#infect() 
 syntax on 
 filetype plugin indent on 
```

这是一个非常基本的例子。 此时，每个插件都将被解压缩到`~/.vim/bundle` ，并将被添加到_`runtimepath`_

* * *

#### |例

如果你想安装像NERDTree这样的插件，只需运行：
```
cd ~/.vim/bundle 
 git clone https://github.com/scrooloose/nerdtree 
```

它将被添加到\_ `runtimepath` 。

Vim插件的策划资源： [Vim Awesome](https://vimawesome.com)