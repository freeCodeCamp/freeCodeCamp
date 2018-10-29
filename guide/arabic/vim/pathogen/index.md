---
title: Pathogen
localeTitle: العوامل الممرضة
---
## العوامل الممرضة

الممرض يساعدك على إدارة مسار وقت التشغيل الخاص بك بكل سهولة.

يتيح تثبيت حزمة بسهولة لفيم.

قم بتشغيل الأوامر التالية:

 `mkdir -p ~/.vim/autoload ~/.vim/bundle && \ 
 curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim 
` 

* * *

## التلاعب مسار Runtime

أضف هذا الأمر إلى ملفك .vimrc:

 `execute pathogen#infect() 
` 

إذا لم يكن لديك أي ملف .vimrc ، اكتب `vim ~/.vimrc` وقم بلصق هذا:

 `execute pathogen#infect() 
 syntax on 
 filetype plugin indent on 
` 

هذا هو مثال أساسي جدا. في هذه اللحظة ، سيتم استخراج كل الإضافات إلى `~/.vim/bundle` وستتم إضافتها إلى _`runtimepath`_

* * *

#### | مثال

إذا كنت ترغب في تثبيت مكونات مثل NERDTree ، فقم ببساطة بتشغيل هذا:

 `cd ~/.vim/bundle 
 git clone https://github.com/scrooloose/nerdtree 
` 

سيتم إضافته إلى \_ `runtimepath` .

براند ressource من الإضافات [Vim](https://vimawesome.com) : [Vim Awesome](https://vimawesome.com)