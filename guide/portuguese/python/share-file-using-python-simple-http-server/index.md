---
title: Share File Using Python SimpleHTTPserver
localeTitle: Compartilhar arquivo usando o SimpleHTTPserver do Python
---
## As etapas precisam seguir para enviar o arquivo.

1.  Certifique-se de ambos os computadores conectados através da mesma rede via LAN ou WIFI.
2.  Abra o terminal no Ubuntu e verifique se você tem o python instalado no seu PC.
3.  Se não estiver instalado, instale-o digitando no terminal "sudo apt-get install python" sem aspas.
4.  Vá para o diretório cujo arquivo você deseja compartilhar usando o comando cd (change directory).
5.  Digite este comando "python -m simpleHTTPserver" sem aspas.
6.  Abra um novo terminal e digite ifconfig e encontre seu endereço IP.

## Agora no segundo computador

1.  Abra o navegador e digite o endereço IP do primeiro.
2.  Não se esqueça de adicionar o número da porta no final do endereço IP, que por padrão é: 8000

Uma página será aberta mostrando a estrutura do tipo Diretório e mostrará todos os arquivos do pc de origem.  
Agora você pode acessar todos os arquivos.