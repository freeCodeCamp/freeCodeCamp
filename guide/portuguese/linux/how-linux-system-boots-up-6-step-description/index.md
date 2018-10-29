---
title: Linux Booting Process
localeTitle: Processo de Inicialização do Linux
---
# Processo de Inicialização do Linux - Processo Descritivo de 6 Passos

O sistema operacional é definido como o software de baixo nível que suporta as funções básicas de um computador, como agendamento de tarefas e controle de periféricos. O SO mantém esses 6 estágios de alto nível de um processo típico de inicialização do Linux.

![Passos](https://raw.githubusercontent.com/Ayushverma8/tech-interview-handbook/master/LinuxBootingProcess.jpg)

### 1\. BIOS

*   BIOS significa Basic Input / Output System
*   Executa algumas verificações de integridade do sistema no HDD
*   Procura, carrega e executa o programa de boot loader, principalmente no Master Boot Record (MBR)
*   Ele procura por boot loader em disquete, cd-rom ou disco rígido. Podemos pressionar uma tecla (normalmente F12 de F2, mas depende do seu sistema) durante a inicialização do BIOS para alterar a seqüência de inicialização.
*   Depois que o programa de boot loader é detectado e carregado na memória, o BIOS dá o controle a ele.
*   Então, em termos simples, o BIOS carrega e executa o gerenciador de inicialização MBR

### 2\. MBR

*   MBR significa Master Boot Record.
*   Está localizado no primeiro setor do disco inicializável. Normalmente, / dev / hda ou / dev / sda. Por que é sda e hda? consulte aqui para mais.
*   O MBR tem menos de 512 bytes de tamanho. Isto tem três componentes: 1) informação primária do carregador de inicialização em 1 446 bytes. 2) informação da tabela de partição nos próximos 64 bytes. 3) verificação de validação de mbr nos últimos 2 bytes.
*   Ele contém informações sobre o GRUB (ou LILO em sistemas antigos).
*   Portanto, em termos simples, o MBR carrega e executa o carregador de inicialização GRUB.

### 3\. GRUB

*   Está localizado no primeiro setor do disco inicializável. Normalmente, / dev / hda ou / dev / sda. Por que é sda e hda? consulte aqui para mais.
*   Se você tem múltiplas imagens de kernel instaladas em seu sistema, você pode escolher qual delas será executada, por padrão, somente a principal é inicializada.
*   O GRUB exibe uma tela inicial, aguarda alguns segundos, se você não digitar nada, ele carrega a imagem padrão do kernel, conforme especificado no arquivo de configuração do grub.
*   O GRUB tem o conhecimento do sistema de arquivos (o antigo gerenciador de Linux LILO não entendia o sistema de arquivos).
*   O arquivo de configuração do Grub é /boot/grub/grub.conf (/etc/grub.conf é um link para isso). A seguir, o exemplo grub.conf do CentOS.
```
#boot=/dev/sda 
 default=0 
 timeout=5 
 splashimage=(hd0,0)/boot/grub/splash.xpm.gz 
 hiddenmenu 
 title CentOS (2.6.18-194.el5PAE) 
          root (hd0,0) 
          kernel /boot/vmlinuz-2.6.18-194.el5PAE ro root=LABEL=/ 
          initrd /boot/initrd-2.6.18-194.el5PAE.img 
```

### 4\. Kernel

*   Monta o sistema de arquivos raiz conforme especificado em “root =” no grub.conf
*   Kernel executa o programa / sbin / init
*   É o primeiro programa a ser executado pelo Linux Kernel, ele tem o ID do processo (PID) de 1. Faça um 'ps -ef | grep init 'e verifique o pid. Você também pode usar o netstat
*   initrd significa Disco RAM Inicial.
*   O initrd é usado pelo kernel como sistema de arquivos raiz temporário até que o kernel seja inicializado e o sistema de arquivos raiz real seja montado. Ele também contém drivers necessários compilados dentro, o que ajuda a acessar as partições do disco rígido e outros hardwares.

### 5\. Init

*   Olha para o arquivo / etc / inittab para decidir o nível de execução do Linux.
    
*   A seguir estão os níveis de execução disponíveis
    
*   0 - parada
    
*   1 - modo de usuário único
    
*   2 - Multiuser, sem NFS
    
*   3 - Modo multiusuário completo
    
*   4 - sem uso
    
*   5 - X11
    
*   6 - reiniciar
    
*   Init identifica o initlevel padrão de / etc / inittab e usa isso para carregar todo o programa apropriado.
    
*   Execute o 'grep initdefault / etc / inittab' em seu sistema para identificar o nível de execução padrão
    
*   Se você quiser entrar em apuros, você pode definir o nível de execução padrão como 0 ou 6. Como você sabe o que significa 0 e 6, provavelmente você não pode fazer isso.
    
*   Normalmente, você definiria o nível de execução padrão como 3 ou 5.
    

### 6\. Programas de nível de execução

*   Quando o sistema Linux está inicializando, você pode ver vários serviços sendo iniciados. Por exemplo, pode dizer “iniciando o sendmail…. ESTÁ BEM". Esses são os programas de nível de execução, executados a partir do diretório de nível de execução, conforme definido pelo nível de execução.
*   Dependendo da sua configuração de nível de inicialização padrão, o sistema executará os programas a partir de um dos seguintes diretórios.
*   Nível de execução 0 - /etc/rc.d/rc0.d/
*   Nível de execução 1 - /etc/rc.d/rc1.d/
*   Nível de execução 2 - /etc/rc.d/rc2.d/
*   Nível de execução 3 - /etc/rc.d/rc3.d/
*   Nível de execução 4 - /etc/rc.d/rc4.d/
*   Nível de execução 5 - /etc/rc.d/rc5.d/
*   Nível de execução 6 - /etc/rc.d/rc6.d/
*   Sob os diretórios /etc/rc.d/rc\*.d/, você veria programas que começam com S e K.
*   Programas iniciados com S são usados ​​durante a inicialização. S para inicialização.
*   Programas começa com K são usados ​​durante o desligamento. K para matar.
*   Existem números ao lado de S e K nos nomes dos programas. Esse é o número de sequência em que os programas devem ser iniciados ou mortos.