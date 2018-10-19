---
title: Installing Wordpress Locally on Mac
localeTitle: Instalando o Wordpress Localmente no Mac
---
Instalar o WordPress localmente permitirá que você crie temas com segurança e permitirá que você experimente o WordPress gratuitamente sem pagar pela hospedagem.

## Transferências Necessárias:

*   [MAMP](https://www.mamp.info/en/)
*   [WordPress](https://wordpress.org/about/)

O primeiro passo para instalar o WordPress localmente é fazer o download do MAMP. MAMP significa Macintosh, Apache, MySQL e PHP. Este é o servidor local que executará a nova instalação do WordPress. Instalar o MAMP deve ser fácil, porque é como instalar qualquer outro aplicativo.

Depois que o MAMP for instalado, você desejará desinstalar o MAMP pro. Para fazer isso, basta navegar até a pasta de aplicativos e encontrar a pasta pro do MAMP. Haverá um desinstalador dentro desta pasta. Eu escolhi clicar em todas as caixas de seleção, já que é uma nova instalação do MAMP.

## Configurando o MAMP

Abra o aplicativo MAMP e você deve ser saudado com esta tela:

Temos que definir algumas preferências, então clique no ícone de preferências. Na tela de preferências, clique em `Ports` .

Aqui você pode deixar as portas como está, o que exigirá que você inclua o número da porta na URL `localhost:8888` .

Se você não quiser incluir o número da porta na URL, poderá alterar as portas do Apache e do MySQL para 80. A razão pela qual optei por não fazer isso é porque você sempre será solicitado a fornecer sua senha.

Em seguida, você clicará na guia Apache e definirá uma raiz de documento. Eu escolhi criar uma nova pasta chamada "Sites" na minha pasta de usuário.

Agora que terminamos de editar todas as configurações, clique em OK para salvar.

## Começando MAMP

Para iniciar o MAMP, clique em "Iniciar Servidores".

Isso deve abrir uma nova janela com o endereço `http://localhost:8888/MAMP/?language=English` no seu navegador da web.

Se o seu navegador não abrir, você poderá clicar `Open WebStart page` .

Criando um banco de dados

O próximo passo é clicar no link `phpMyAdmin` em MySQL, que o levará a esta página:

Clique em novo no menu de navegação à esquerda.

Digite um nome para o banco de dados e clique em criar. Eu escolhi o "WordPress".

## Instalando o WordPress

Descompacte o arquivo do WordPress que você baixou e arraste o conteúdo para a pasta que você criou anteriormente como raiz do documento.

Depois que os arquivos forem copiados, vá para `localhost:8888` .

Escolha seu idioma e, na tela seguinte, clique em `Let's Go` .

Digite o nome do banco de dados que você criou e "root" para o nome de usuário e senha, e clique em enviar.

Clique em `Run the install` e, na próxima tela, insira os detalhes do seu login.

Clique em `Submit` , e você será levado para o login no seu WordPress local hospedado.

Sucesso! Faça o login com o nome de usuário e senha que você criou.