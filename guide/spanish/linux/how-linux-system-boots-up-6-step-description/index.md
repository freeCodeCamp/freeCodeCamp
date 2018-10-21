---
title: Linux Booting Process
localeTitle: Proceso de arranque de Linux
---
# Proceso de arranque de Linux - Proceso descriptivo de 6 pasos

El sistema operativo se define como el software de bajo nivel que admite las funciones básicas de una computadora, como la programación de tareas y el control de periféricos. El sistema operativo mantiene estas 6 etapas de alto nivel de un proceso de arranque típico de Linux.

![Pasos](https://raw.githubusercontent.com/Ayushverma8/tech-interview-handbook/master/LinuxBootingProcess.jpg)

### 1\. BIOS

*   BIOS significa sistema básico de entrada / salida
*   Realiza algunas verificaciones de integridad del sistema en el disco duro.
*   Busca, carga y ejecuta el programa del cargador de arranque, principalmente en el Registro de arranque maestro (MBR)
*   Busca el cargador de arranque en disquete, cd-rom o disco duro. Podemos presionar una tecla (normalmente F12 de F2, pero depende de su sistema) durante el inicio del BIOS para cambiar la secuencia de inicio.
*   Una vez que el programa del cargador de arranque se detecta y se carga en la memoria, el BIOS le da el control.
*   Entonces, en términos simples, BIOS carga y ejecuta el cargador de arranque MBR

### 2\. MBR

*   MBR significa Master Boot Record.
*   Se encuentra en el primer sector del disco de arranque. Normalmente, / dev / hda o / dev / sda. ¿Por qué es sda y hda? Consulte aquí para más.
*   MBR es menos de 512 bytes de tamaño. Esto tiene tres componentes 1) información del cargador de arranque primario en los primeros 446 bytes 2) información de la tabla de partición en los siguientes 64 bytes 3) verificación de validación de mbr en los últimos 2 bytes.
*   Contiene información sobre GRUB (o LILO en sistemas antiguos).
*   Entonces, en términos simples, MBR carga y ejecuta el cargador de arranque GRUB.

### 3\. GRUB

*   Se encuentra en el primer sector del disco de arranque. Normalmente, / dev / hda o / dev / sda. ¿Por qué es sda y hda? Consulte aquí para más.
*   Si tiene varias imágenes de kernel instaladas en su sistema, puede elegir cuál ejecutar, por defecto solo se inicia la principal.
*   GRUB muestra una pantalla de inicio, espera unos segundos, si no ingresa nada, carga la imagen del kernel predeterminada como se especifica en el archivo de configuración de grub.
*   GRUB tiene el conocimiento del sistema de archivos (el cargador de Linux anterior LILO no entendía el sistema de archivos).
*   El archivo de configuración de Grub es /boot/grub/grub.conf (/etc/grub.conf es un enlace a este). La siguiente es una muestra de grub.conf de CentOS.
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

*   Monta el sistema de archivos raíz como se especifica en "root =" en grub.conf
*   Kernel ejecuta el programa / sbin / init
*   Es el primer programa que ejecuta Linux Kernel, tiene el ID de proceso (PID) de 1. Haga un 'ps -ef | grep init 'y compruebe el pid. También puedes usar netstat.
*   initrd significa disco RAM inicial.
*   initrd es utilizado por el kernel como sistema de archivos raíz temporal hasta que el kernel se inicia y el sistema de archivos raíz real está montado. También contiene los controladores necesarios compilados en el interior, lo que le ayuda a acceder a las particiones del disco duro y otro hardware.

### 5\. Inic

*   Mira el archivo / etc / inittab para decidir el nivel de ejecución de Linux.
    
*   Los siguientes son los niveles de ejecución disponibles
    
*   0 - detener
    
*   1 - Modo de usuario único
    
*   2 - Multiusuario, sin NFS
    
*   3 - Modo multiusuario completo
    
*   4 - sin uso
    
*   5 - X11
    
*   6 - reiniciar
    
*   Init identifica el nivel de inicio predeterminado de / etc / inittab y lo utiliza para cargar todo el programa apropiado.
    
*   Ejecute 'grep initdefault / etc / inittab' en su sistema para identificar el nivel de ejecución predeterminado
    
*   Si desea meterse en problemas, puede establecer el nivel de ejecución predeterminado en 0 o 6. Ya que sabe lo que significa 0 y 6, probablemente no lo haga.
    
*   Normalmente, establecería el nivel de ejecución predeterminado en 3 o 5.
    

### 6\. Programas de nivel de ejecución.

*   Cuando el sistema Linux se está iniciando, es posible que vea que se inician varios servicios. Por ejemplo, podría decir "a partir de sendmail .... DE ACUERDO". Esos son los programas de nivel de ejecución, ejecutados desde el directorio de nivel de ejecución según lo definido por su nivel de ejecución.
*   Según la configuración de nivel de inicio predeterminada, el sistema ejecutará los programas desde uno de los siguientes directorios.
*   Nivel de ejecución 0 - /etc/rc.d/rc0.d/
*   Ejecute el nivel 1 - /etc/rc.d/rc1.d/
*   Ejecutar nivel 2 - /etc/rc.d/rc2.d/
*   Ejecutar nivel 3 - /etc/rc.d/rc3.d/
*   Nivel de ejecución 4 - /etc/rc.d/rc4.d/
*   Ejecutar nivel 5 - /etc/rc.d/rc5.d/
*   Ejecutar nivel 6 - /etc/rc.d/rc6.d/
*   Bajo los directorios /etc/rc.d/rc\*.d/, vería programas que comienzan con S y K.
*   Los programas que comienzan con S se utilizan durante el inicio. S para la puesta en marcha.
*   Los programas que comienzan con K se utilizan durante el apagado. K para matar.
*   Hay números justo al lado de S y K en los nombres de los programas. Esos son los números de secuencia en los que se deben iniciar o eliminar los programas.