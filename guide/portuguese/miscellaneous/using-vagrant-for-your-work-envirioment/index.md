---
title: Using Vagrant for Your Work Envirioment
localeTitle: Usando o Vagrant para seu ambiente de trabalho
---
As instruções a seguir ajudarão você a instalar o software necessário e também a configurar seu primeiro Vagrant e Virtual Box.

## Instalação

Isso criará um ambiente de trabalho para que você possa testar seu site na sua máquina local. O **Vagrantfile** pode ser configurado para o seu ambiente específico para que qualquer pessoa que trabalhe com você possa fazer e ver alterações, independentemente de usarem o Linux, o Mac OS X ou o Windows. Usando este ambiente virtual, você poderá ver seus scripts PHP rodando, construindo e trabalhando com seus bancos de dados, e muito mais. Então, sem mais nem fazer, vamos ao que interessa.

Confira os links a seguir e instale cada programa. Certifique-se de que corresponda ao seu sistema operacional (sistema operacional).

*   [Caixa virtual](https://www.virtualbox.org/)
*   [Vagabundo](https://www.vagrantup.com/downloads.html)
*   [Git Bash, Gui e Comando](https://git-scm.com/downloads)

Agora que temos os programas necessários instalados, vamos ao que interessa.

**O Git** tem vários programas diferentes que podemos usar aqui. Vamos abrir a **GUI** do **Git** . Também podemos iniciar o **Virtual Box** para que possamos ver a caixa em execução.

Depois de executar a **GUI** do **Git** , você verá várias opções. Vamos selecionar a opção top, **"Create New Repository"** .

Selecione o botão **"Procurar"** e selecione a unidade que você deseja instalar e executar sua máquina virtual / servidor. Você pode clicar com o botão direito na área da pasta e criar uma nova pasta. Vamos chamar de **FreeCodeCampMachine** .

Agora, você verá o **Git Gui** e ao lado de Directory, você verá **C: / FreeCodeCampMachine** .

Na parte inferior, selecione o botão que diz **"Criar"** .

Agora a interface parece diferente. Não se preocupe com nenhum dos botões na parte inferior nem se preocupe com todas as opções na parte superior. Queremos trabalhar em uma coisa. Selecione a opção no canto superior esquerdo que diz **"Repositório"** , então, sob essa opção, você encontrará **"Git Bash"** . Selecione **Git Bash** .

Agora vemos que estamos em uma janela de terminal / console. Você deve ver o nome do seu computador seguido por **MINGW64 / d / FreeCodeCampMachine (master)** . Isso simplesmente diz que estamos operando na pasta que você criou e você está no repositório **principal** . Mais tarde, vamos criar um ramo, mas vamos nos preocupar com isso mais tarde.

Agora, vamos jogar alguns comandos para baixo e fazer a bola rolar. Primeiro digite o seguinte e pressione Enter:
```
$ git clone https://github.com/scotch-io/scotch-box myProject 
```

Isto irá criar uma pasta dentro do seu diretório chamado **"myProject"** . Em seguida, vamos detalhar essa pasta, então digite os seguintes comandos e aperte enter:
```
$ cd myProject 
```

Agora estamos na pasta em que queremos estar. Agora digite o seguinte na linha de comando e tecle enter:
```
vagrant up 
```

Agora, vamos abrir uma janela do navegador e digite o seguinte endereço IP:
```
http://192.168.33.10/ 
```

Você deve ver uma página de destino do **Scotch Box** informando tudo o que está lá e instalou. Agora, quando você vasculhar o arquivo criado anteriormente, encontrará um que diz **"público"** . Dentro dessa pasta, você verá um arquivo chamado **"index.php"** e é o que você vê na página de destino. Você pode editar esse arquivo com um editor de texto, salvá-lo e atualizar seu navegador para ver suas alterações.