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

# Como trabajar con correos salientes localmente (para el flujo de trabajo de correo electrónico)

> **Nota:** Hay un **Opcional** Paso - Solo es requerido cuando trabajamos con el cuando se trabaja con flujos de trabajo de correo electrónico

## Introducción

Algunos flujos de trabajo del correo electrónico, como la actualizar el correo electrónico de un usuario, requieren de una API, en el backend para mandar correos electrónicos. mientras desarrollamos podemos usar una herramienta para obtenerlos localmente, en lugar de tener que usar un proveedor de correo electrónico y enviar un correo electrónico real. MailHog es una de las muchas herramientas de email para probar en el entorno de desarrollo para desarrolladores, que capturará los correos electrónicos de su instancia local que freeCodeCamp está enviando. 
 

## Instalando MailHog

Como podemons instalar y usar MailHog depende del sistema operativo

- [Instalando MailHog en macOS](#installing-mailhog-on-macos)
- [Instalando MailHog en Windows](#installing-mailhog-on-windows)
- [Instalando MailHog en Linux](#installing-mailhog-on-linux)

### Instalando MailHog en MacOS

Aquí podemos ver como instalar MailHog en macOS [Homebrew](https://brew.sh/):


```
bash
brew install mailhog
brew services start mailhog
```

Esto emepezara un servicio de mailHog en segundo plano.

Siguiente, puedes ir a [using MailHog](#using-mailhog).

### Instalar MailHog en Windows

Descarga la versión mas reciente de MailHog de [MailHog's official repository](https://github.com/mailhog/MailHog/releases). Click en el link dependiendo de tu versión de Windows (32 ó 64 bit) y el archivo .exe será descargado en tu computadora.

Una vez que termine la descarga, haga clic en el archivo. Probablemente recibirá una notificación de firewall de Windows donde tendrá que permitir el acceso a MailHog. Una vez que lo haga, se abrirá una línea de comando estándar de Windows con MailHog ya en ejecución.

Para cerrar MailHog, cierre el símbolo del sistema. Para volver a ejecutarlo, haga clic en el mismo archivo .exe. No necesitas descargar uno nuevo.

Siguiente, Puedes ir a [using MailHog](#using-mailhog).

### Instalando MailHog en Linux

Primero instalar [Go](https://golang.org).

Para sistemas basados en Debian como Ubuntu y Linux Mint, en la terminal:

```
bash
sudo apt-get install golang
```

Para CentOS, Fedora, Red Hat Linux, y otros sistemas basados en RPM-based, en la terminal:

```
bash
sudo dnf install golang
```

O:

```
bash
sudo yum install golang
```

Establecer path para Go:

```
bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Despues instalar y correr MailHog:

```
bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Siguiente, Puedes ir a [using MailHog](#using-mailhog).

## Using MailHog
## Usando MailHog

Una vez que hayas instalado MailHog y lo hayas iniciado, debes abrir tu bandeja de entrada de MailHog en tu navegador, y abre una nueva pestaña o ventana y navegar a [http://localhost:8025] (http://localhost:8025).
Ahora debería ver una pantalla como la siguiente:

![MailHog Screenshot 1](images/mailhog/1.jpg)

Cuando la instalación de freeCodeCamp envíe un correo electrónico, verás que aparece aquí. Como aquí abajo:

![MailHog Screenshot 2](images/mailhog/2.jpg)

Abre el correo y verás dos pestañas donde puedes ver el contenido: texto sin formato y fuente. Asegúrate de que estás en la pestaña de texto sin formato.

![MailHog Screenshot 3](images/mailhog/3.jpg)

Cualquier enlace en el correo electrónico debe ser seleccionable.

## Enlaces útiles

- Para cualquier otra pregunta relacionada con MailHog o para obtener instrucciones sobre configuraciones personalizadas, consulte el repositorio [MailHog] (https://github.com/mailhog/MailHog).