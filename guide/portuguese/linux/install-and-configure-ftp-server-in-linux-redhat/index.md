---
title: Install and configure FTP server in Redhat/Centos Linux
localeTitle: Instalar e configurar o servidor FTP no Redhat / Centos Linux
---
## Instalar e configurar o servidor FTP no Redhat / Centos Linux

FTP significa File Transfer Protocol. Foi escrito por Abhay Bhushan e publicado como RFC 114 em 16 de abril de 1971. É suportado por todos os sistemas operacionais e navegadores. Ele é construído em uma arquitetura cliente-servidor.

## Instalar e configurar o servidor FTP no Redhat / Centos Linux

Passo 1: Vamos usar localhost para a nossa máquina para configurar o servidor ftp.

Etapa 2: Instale o pacote vsftpd (daemon de FTP muito seguro).

`yum install -y vsftpd`

Etapa 3: Inicie o servidor FTP quando o sistema estiver ativado.

`systemctl enable vsftpd.service`

Etapa 4: Verificando o status do servidor ftp

`systemctl status vsftpd.service`

Etapa 5: Configure o pacote vsftpd. Vamos editar `/etc/vsftpd/vsftpd.conf`

`Change the line which contain anonymous_enable=NO to anonymous_enable=YES` `This will give permit any one to access FTP server with authentication.` `Change the following to YES` `local_enable=YES` `write_enable=YES<br>`

Etapa 6: Iniciar o servidor FTP `systemctl start vsftpd.service`

Etapa 7: Instalar o Cliente FTP `yum install -y lftpd`

Etapa 8: Conectar o FTP ao host local `lftp localhost`