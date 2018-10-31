---
title: local-lamp-server-on-ubuntu
localeTitle: local-lamp-server-on-ubuntu
---## Local LAMP Server no Ubuntu

O objetivo deste breve guia é levá-lo através do processo de configuração de um servidor LAMP (Linux, Apache, MySQL, PHP) em uma máquina local Ubuntu Linux ou máquina virtual. Isso permitirá que um desenvolvedor desenvolva usando PHP e MySQL (com o phpMyAdmin). Esta é uma pilha comum que é necessária para o desenvolvimento do Wordpress.

### Instale os pacotes necessários

Você precisará instalar os seguintes pacotes para o servidor LAMP. Você pode instalá-los todos de uma vez, separando cada pacote por um espaço, ou um de cada vez, como mostrado. Eu prefiro baixar um de cada vez, porque é mais fácil ver se houve algum erro. Digite o terminal e digite o seguinte:

*   `sudo apt-get install apache2`
*   `sudo apt-get install php`
*   `sudo apt-get install php-mysql`
*   `sudo apt-get install mysql-server`

Você deve então ser solicitado a definir uma senha para o usuário root do MySQL. Depois de definir a senha, continue a instalar:

*   `sudo apt-get install libapache2-mod-php`
*   `sudo apt-get install php-mcrypt`
*   `sudo apt-get install phpmyadmin`

Você deve então ser perguntado qual servidor usar o select apache pressionando enter. Selecione não para configuração avançada do servidor.

### Alterar permissões para o / var / www / html

Para que os scripts e arquivos php sejam executados pelo servidor LAMP, eles precisam ser salvos no diretório / var / www / html. Você pode pensar neste local como seu servidor local. Para fazer alterações neste diretório, precisamos alterar as permissões nele. No terminal, digite o comando:

*   `sudo chown {your ubuntu username} /var/www/html`

### Crie um link simbólico para o phpMyAdmin

Por padrão, o phpMyAdmin é instalado no diretório / usr / share /. Precisamos movê-lo para o nosso diretório do servidor local. Nós navegamos até o diretório do servidor no qual queremos o link:

*   `cd /var/www/html`

Em seguida, crie o link inserindo o comando:

*   `ln -s /usr/share/phpmyadmin phpmyadmin`

### Reinicie o Apache e teste

Execute o seguinte comando para reiniciar o Apache, definindo as alterações feitas:

*   `sudo systemctl restart apache2`

Você deve então ser capaz de criar um arquivo info.php no diretório / var / www / html.

*   `touch /var/www/html/info.php`

No arquivo digite o seguinte código php:

*   `<?php phpinfo(); ?>`

Em seguida, abra um navegador e digite localhost / info.php Você deve ver uma página do arquivo php que você acabou de escrever que lhe dá informações sobre php.

Finalmente, para acessar o phpMyAdmin, acesse o localhost / phpmyadmin em seu navegador. O nome de usuário root defualt é 'root' e a senha é a senha que você escolheu anteriormente para o banco de dados MySQL.

### Mais Informações