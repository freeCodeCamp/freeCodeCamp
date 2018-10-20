---
title: VirtualBox
localeTitle: VirtualBox
---
# VirtualBox

![](https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png)

O VirtualBox é um [virtualizador tipo 2](https://itharley.com/a-b-c-docker-capitulo-1/ "Verificar a parte de arquitetura"), ou hosted, de código aberto e suportado pela Oracle. Ele permite a instalação e execução de vários sistemas operacionais, como  Windows, BSD, Linux, Solaris, dentre outros, na forma de máquinas virtuais (ou VMs).

# Download e Instalação

O VirtualBox pode ser baixado aqui: [Downloads do VirtualBox](https://www.virtualbox.org/wiki/Downloads)

# Configuração

*   Para configurar sua primeira máquina virtual, baixe o arquivo .iso do site do sistema operacional desejado;
    
*   Em seguida, aperte o botão "New" no VirtualBox. Dê um nome para sua VM, e preencha os demais campos da caixa de diálogo;

*   Adicionalmente, você pode clicar sobre o botáo "Modo Guiado" para criar a máquina usando um assistente; 
    
O aplicativo realizará diversas ações. Ponto importante: observe quanto armazenamento você selecionou para o disco da VM. Esse é o tamanho que o sistema operacional da máquina virtual enxergará. Este espaço será efetivamente ocupado no disco do seu computador, também. Portanto, é importante antes verificar quanto espaço livre você possui no disco do seu computador, de maneira a poder usar tranquilamente não só sua máquina virtual, como também o restante das aplicações do seu computador. 

O mesmo cuidado vale para a memória RAM.  O VirtualBox obviamente não permitirá que você aloque toda a RAM disponível em seu computador para a VM.  Isto se deve ao fato de que esses recursos (disco, RAM e CPU) estarem indisponíveis para o sistema operacional host (ou seja, seu computador) durante a execução da VM.
    
Para mais informações, visite o site [Manual do VirtualBox Capítulo 1](https://www.virtualbox.org/manual/ch01.html)

# Execute a máquina

*   Selecione sua nova VM, clique em configurações e navegue até a guia Armazenamento.
    
*   Em seguida, clique no botão em forma de disco "Adiciona a unidade óptica" na linha "Controlador IDE".
    
*   Escolha o seu arquivo .iso
    
*   Feche as configurações e aperte Start!
    
*   Agora sua máquina irá executar e instalar o sistema operacional no disco virtual criado anteriormente.
    
*   Depois de terminar sua máquina pela primeira vez, volte para a guia Armazenamento em Configurações. Certifique-se de remover arquivo .iso ou remova o slot da unidade vazio. Deve haver apenas um.
    
    Parabéns! Você executou sua primeira máquina virtual no VirtualBox.
    
    Visite a [Manual do VirtualBox](https://www.virtualbox.org/manual/UserManual.html) para obter mais informações sobre como usar e configurar VMs.
    
O Oracle VM VirtualBox é um poderoso produto de virtualização multiplataforma para uso corporativo ou pessoal. O VirtualBox está disponível gratuitamente como software de código aberto sob a licença GNU General Public License (GPL) versão 2.

O VirtualBox estende as capacidades do seu computador existente para que ele possa rodar múltiplos sistemas operacionais. Você pode até executar o VirtualBox dentro de uma máquina virtual, rodar outro sistema operacional, todos no mesmo PC. Os únicos limites são espaço em disco e memória.

Obs.: o VirtualBox ainda não permite a extensão dos [flags de virtualização (AMD-V ou VT-x)](https://pt.wikipedia.org/wiki/Virtualiza%C3%A7%C3%A3o_x86) da CPU física para uma VM. Ou seja, se você precisa executar um sistema operacional dentro do VirtualBox e, a partir deste sistema operacional, subir outra VM (o que daria uma VM dentro de outra VM), isto não é possível.

O VirtualBox é uma solução simples para:

*   Executar vários sistemas operacionais simultaneamente;
*   Verificar programas específicos sem alteração do computador host;
*   Instalar e testar facilmente softwares diversos;
*   Configurar um sistema completamente e empacotá-lo como máquina virtual ou virtual appliance;
*   Realizar testes e recuperação de desastres;
*   Experimentar livremente um ambiente de computação, sem afetar nada fora da máquina virtual;
*   Consolidar infra-estrutura;
*   Reduzir custos de hardware e gastos com energia elétrica.

O VirtualBox suporta uma ampla variedade de sistemas operacionais:

*   Windows;
*   Linux
*   macOS.

E mais um grande número de sistemas operacionais legados: (incluindo, mas não limitado a):
*   Windows (NT 4.0, 2000, XP, Server 2003, Vista);
*   DOS / Windows 3.x;
*   Linux (2.4, 2.6, 3.xe 4.x);
*   Solaris e OpenSolaris;
*   OS/2;
*   OpenBSD.

#### Mais Informações:

*   [virtualbox.org](https://www.virtualbox.org)
*   [Como configurar um ambiente linux local com o vagrant](https://medium.com/@JohnFoderaro/how-to-set-up-a-local-linux-environment-with-vagrant-163f0ba4da77)
