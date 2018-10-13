<table>
    <tr>
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربى </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# Cómo trabajar con correos localmente (para tareas de trabajo con correo electrónico)

> **Nota:** Este es un paso **opcional** - Sólo es requerido al trabajar con tareas de trabajo con correo electrónico

## Introducción

Algunas tareas de trabajo con correo electrónico, como actualizar el correo de un usuario, requieren que la API del servidor back-end envie correos electrónicos. Durante el proceso de desarrollo podemos usar una herramienta para obtenerlos localmente en lugar de tener que usar un proveedor de correo electrónico y enviar un correo real. MailHog es una de las muchas herramientas de email para realizar pruebas en el entorno de desarrollo para programadores, ayudando a recibir los correos electrónicos que la instancia local de freeCodeCamp está enviando. 
 

## Instalando MailHog

El proceso para instalar y usar MailHog depende del sistema operativo

- [Instalando MailHog en macOS](#installing-mailhog-on-macos)
- [Instalando MailHog en Windows](#installing-mailhog-on-windows)
- [Instalando MailHog en Linux](#installing-mailhog-on-linux)

### Instalando MailHog en MacOS

Aquí podemos ver como instalar MailHog en macOS [Homebrew](https://brew.sh/):


```bash
brew install mailhog
brew services start mailhog
```

Esto iniciará un servicio de mailHog en segundo plano.

A continuación, puedes ir a [usando MailHog](#using-mailhog).

### Instalar MailHog en Windows

Descarga la versión más reciente de MailHog del [repositorio oficial de MailHog](https://github.com/mailhog/MailHog/releases). Click en el link dependiendo de tu versión de Windows (32 ó 64 bit) y el archivo .exe será descargado en tu computadora.

Una vez que termine la descarga, haz clic en el archivo. Probablemente recibirás una notificación del firewall de Windows donde tendrás que permitir el acceso a MailHog. Una vez que lo hagas, se abrirá una línea de comando estándar de Windows con MailHog ya en ejecución.

Para cerrar MailHog, cierra el símbolo del sistema. Para volver a ejecutarlo, haz clic en el mismo archivo .exe. No necesitas descargar uno nuevo.

A continuación, puedes seguir a [usando MailHog](#using-mailhog).

### Instalando MailHog en Linux

Primero debes instalar [Go](https://golang.org).

Para sistemas basados en Debian como Ubuntu y Linux Mint, ejecuta en la terminal:

```
bash
sudo apt-get install golang
```

Para CentOS, Fedora, Red Hat Linux, y otros sistemas basados en RPM, ejecuta en la terminal:

```bash
sudo dnf install golang
```

O:

```bash
sudo yum install golang
```

Establece la ruta de directorio para Go:

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Finalmente, instalar y correr MailHog:

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

A continuación, puedes ir a [usando MailHog](#using-mailhog).

## Usando MailHog

Una vez que hayas instalado MailHog y lo hayas iniciado, debes abrir tu bandeja de entrada de MailHog en tu navegador, y abrir una nueva pestaña o ventana y navegar a [http://localhost:8025] (http://localhost:8025). Deberías ver una pantalla como la siguiente:

![Captura de pantalla MailHog 1](../images/mailhog/1.jpg)

Cuando tu instalación de freeCodeCamp envíe un correo electrónico, verás que aparece aquí. Como verás abajo:

![Captura de pantalla MailHog 2](../images/mailhog/2.jpg)

Abre el correo y verás dos pestañas donde puedes ver el contenido: texto sin formato y fuente. Asegúrate de que estás en la pestaña de texto sin formato (Plain Text).

![Captura de pantalla MailHog 3](../images/mailhog/3.jpg)

Cualquier enlace en el correo electrónico debe redireccionar.

## Enlaces útiles

- Para cualquier otra pregunta relacionada con MailHog o para obtener instrucciones sobre configuraciones personalizadas, consulta el repositorio de [MailHog](https://github.com/mailhog/MailHog/)
