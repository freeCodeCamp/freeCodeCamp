---
title: Install and Configure Apache Server in Linux
localeTitle: Instalar e Configurar o Apache Server no Linux
---
Apache HTTP Server, coloquialmente chamado de Apache, é gratuito e de código aberto software de servidor da web de plataforma cruzada. O Apache é desenvolvido e mantido por um comunidade aberta de desenvolvedores sob os auspícios da Apache Software Foundation.

## Instalar e Configurar o Apache Server no Linux

Etapa 1: instalar o Apache Server `yum install httpd`

Etapa 2: Configurando o http web sever `cd /etc/httpd/conf.d`

Etapa 3: Crie um arquivo de configração personalizado com a extensão .conf. `vim *.conf`

Etapa 4: Iniciando o Apache Server `systemctl start httpd.service`

Etapa 5: Iniciar automaticamente o Apache Server quando o sistema operacional for iniciado. `systemctl enable httpd.service`

Etapa 6: adicione permissão de firewall. `firewall-cmd --add-service=http --permanent`