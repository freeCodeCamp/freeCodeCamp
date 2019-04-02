---
title: How to install phpmyadmin on Linux (Ubuntu).
localeTitle: Como instalar o phpmyadmin no Linux (Ubuntu).
---
# Como instalar o phpmyadmin no Linux (Ubuntu)

O servidor de [banco de](https://en.wikipedia.org/wiki/MySQL) dados [MySQL](https://en.wikipedia.org/wiki/MySQL) pode ser administrado usando a linha de comando, executando comandos no terminal. Mas é mais conveniente e menos tedioso usar uma interface gráfica de usuário (GUI) - mais especialmente para aqueles que não se sentem à vontade para inserir comandos em um terminal.

[phpMyAdmin](https://en.wikipedia.org/wiki/PhpMyAdmin) é uma ferramenta GUI de software livre e de código aberto escrita em PHP, destinada a lidar com a administração do MySQL através da web. O phpMyAdmin suporta uma vasta gama de operações no MySQL e na sua versão suportada pela comunidade - o [MariaDB](https://en.wikipedia.org/wiki/MariaDB) .

As operações de banco de dados usadas com frequência (gerenciamento de bancos de dados, tabelas, colunas, relações, índices, usuários, permissões, etc.) podem ser executadas por meio da GUI, enquanto você ainda pode executar diretamente qualquer instrução SQL. E também realizam exportação e importação de dados em formatos de arquivos populares (CSV, SQL, XML, PDF, Word, Excel, LaTeX e muitos outros). Você pode instalar o phpMyAdmin Linux, Windows e Mac OS (é multi-plataforma). Tornou-se uma das ferramentas de administração mais populares do MySQL.

Nesta postagem, você verá como instalá-lo em um sistema operacional Linux. Mas antes de começarmos a garantir que você tenha o Apache, MySQL e PHP, instale em seu sistema. Se não aprender como fazer isso [aqui](https://fossnaija.com/install-lamp-server-linux-ubuntu/) .

### Instalando o phpMyAdmin.

*   Abra o terminal Linux e use o gerenciador de pacotes de software do Ubuntu `apt` to install,
    
    sudo apt-get instala o phpmyadmin
    
*   Então a instalação começa. Quando solicitado, selecione _“Apache2”_ na caixa de diálogo **“Configurando o phpMyAdmin”.** Quando solicitado pelo nome de usuário e senha do MySQL, digite “root” para o nome de usuário e escolha uma senha apropriada para a senha.
    
*   Após a conclusão da instalação, configure o phpMyAdmin para ser reconhecido pelo servidor web local. Abra o arquivo de configuração do apache no seu editor de texto favorito;
    
    ```
    sudo gedit /etc/apache2/apache2.conf 
    
    ```
    
    e adicione a seguinte linha na parte inferior do arquivo (você pode adicioná-lo em qualquer lugar do arquivo, eu escolho o final aqui para que você possa acessá-lo facilmente para modificação, se necessário):
    
    `Include /etc/phpmyadmin/apache.conf`
    
*   Em seguida, reinicie o servidor da web;
    
    ```
    sudo service apache2 restart 
    
    ```
    
*   Agora digite o seguinte url no seu navegador;
    
    `https://localhost/phpmyadmin`
    
    Você deve ver uma página de login para você digitar seu nome de usuário e senha, se você não tiver feito isso.
    
    **Nome de usuário** = _root_
    
    **Senha** = _SUA SENHA _MYSQL__
    

Se tiver sucesso, o painel do phpMyAdmin será exibido. Então você pode começar a usar o phpMyAdmin.

### Mais Informações:

*   Para uma etapa de instalação gráfica, verifique [aqui](https://fossnaija.com/install-phpmyadmin-linux-ubuntu/) .
    
*   [PhpMyAdmin Documentação de instalação](https://docs.phpmyadmin.net/en/latest/setup.html) .