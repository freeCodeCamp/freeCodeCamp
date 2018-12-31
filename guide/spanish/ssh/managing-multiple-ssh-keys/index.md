---
title: Managing multiple SSH keys
localeTitle: Gestión de múltiples claves SSH
---
# Gestión de múltiples claves SSH

Es seguro decir que la mayoría de los desarrolladores en la esfera web se han encontrado con SSH en algún momento. SSH es uno de los protocolos más utilizados para el intercambio seguro de datos. Utiliza SSH para conectarse a servidores remotos, que también incluye administrar su código usando git y sincronizar con repositorios remotos.

Aunque se considera una buena práctica tener un par de claves públicas y privadas por dispositivo, a veces necesita usar varias claves y / o tiene nombres de claves poco ortodoxas. Es posible que esté utilizando un par de claves SSH para trabajar en los proyectos internos de su empresa, pero podría estar usando una clave diferente para acceder a los servidores de algunos clientes corporativos. Incluso podría estar usando una clave diferente para acceder a su propio servidor privado.

La administración de claves SSH puede volverse complicada tan pronto como necesite usar una segunda clave. Espero que este artículo sea de ayuda para cualquier persona que tenga problemas con la administración de claves SSH.

Supongo que el lector tiene conocimientos básicos de git y SSH. La mayoría de los ejemplos a lo largo del artículo usarán git. Por supuesto, todo esto se aplicará a cualquier otra comunicación de SSH. Dicho esto, hay algunos trucos específicos de git incluidos.

¡Atado, aquí vamos!

## Status quo

Primero, veamos cómo podría verse su flujo de trabajo antes de tener que preocuparse por varias claves.

Tiene una clave privada almacenada en `~/.ssh/id_rsa` con una clave pública correspondiente `~/.ssh/id_rsa.pub` .

Imaginemos que desea insertar / extraer cambios de código a / desde un servidor git remoto; dice GitHub, ¿por qué? Para hacerlo, primero debe agregar su clave pública a GitHub. No repasaré ese paso, debería ser lo suficientemente fácil como para saber cómo hacerlo. También asumí que te llamas Steve y estás trabajando en un proyecto de alto secreto que utiliza Raspberry Pies para detectar el tráfico de la red.

Para comenzar tu trabajo, tienes que clonar un repositorio git usando SSH:

```bash
git clone git@github.com:steve/raspberry-spy.git 
```

En este momento, GitHub dirá: "¡Este es un repositorio privado! Necesitamos cifrar el tráfico usando esta clave pública que tengo aquí y su clave privada"

Usted ha agregado la clave pública a su perfil en GitHub, pero SSH tiene que averiguar de alguna manera dónde se encuentra su clave privada correspondiente. Como no tenemos ninguna pista sobre qué clave privada se debe usar cuando SSH `git@github.com` a `git@github.com` , el cliente SSH intenta encontrar una clave en la ubicación predeterminada, que es `~/.ssh/id_rsa` . Es su mejor estimación. Si no hay ningún archivo en esa ubicación, aparecerá un error:

```bash
Cloning into 'raspberry-spy'... 
 Permission denied (publickey). 
 fatal: Could not read from remote repository. 
 
 Please make sure you have the correct access rights 
 and the repository exists. 
```

Si tiene _alguna_ clave privada almacenada en el archivo `~/.ssh/id_rsa` , el cliente SSH usará esa clave privada para el cifrado de la comunicación. Si esa clave tiene una contraseña (como debería ser), se le pedirá una contraseña, como:

```bash
Enter passphrase for key '/Users/steve/.ssh/id_rsa': 
```

Si ingresa la contraseña correcta y si esa clave privada es la que corresponde a la clave pública que adjuntó a su perfil, todo irá bien y el repositorio se clonará con éxito.

Pero, ¿qué `~/.ssh/_id_rsa` si asignó un nombre diferente a su clave (por ejemplo, `~/.ssh/_id_rsa` )? El cliente SSH no podrá determinar dónde se almacena la clave privada. Obtendrá el mismo `Permission denied ...` error como antes.

Si desea utilizar una clave privada que haya nombrado de manera diferente, debe agregarla manualmente:

```bash
ssh-add ~/.ssh/_id_rsa 
```

Después de ingresar la frase de contraseña, puede verificar si la clave se agregó a `ssh-agent` (cliente SSH) ejecutando `ssh-add -l` . Este comando mostrará una lista de todas las claves que están actualmente disponibles para el cliente SSH.

Si intenta clonar el repositorio ahora, tendrá éxito.

## ¿Hasta ahora tan bueno?

Si tiene los ojos muy abiertos, puede comenzar a notar algunos problemas potenciales.

En primer lugar, si reinicia su computadora, `ssh-agent` se reiniciará y tendrá que agregar sus claves con nombres no predeterminados usando `ssh-add` nuevo, escribiendo contraseñas y todas esas cosas tediosas.

¿Podemos automatizar la adición de claves o de alguna manera especificar qué clave usar al acceder a ciertos servidores?

¿Podemos guardar contraseñas de alguna manera para no tener que escribirlas cada vez? Si solo hubiera algo como un _llavero_ para guardar claves SSH protegidas por contraseña 🤔.

Tenga la seguridad de que hay respuestas a todas esas preguntas.

## Entrar, `config` SSH

Como resultado, el [archivo de configuración SSH](https://linux.die.net/man/5/ssh_config) es una cosa, una cosa que nos puede ayudar. Es un archivo de configuración por usuario para la comunicación SSH. Cree un nuevo archivo: `~/.ssh/config` y ábralo para editarlo.

### Gestión de claves SSH con nombre personalizado

Lo primero que vamos a resolver usando este archivo de `config` es evitar tener que agregar claves SSH personalizadas usando `ssh-add` . Asumiendo que su clave SSH se llama `~/.ssh/_id_rsa` , agregue lo siguiente al archivo de `config` :

```bash
Host github.com 
  HostName github.com 
  User git 
  IdentityFile ~/.ssh/_id_rsa 
  IdentitiesOnly yes 
```

Ahora asegúrese de que `~/.ssh/_id_rsa` no esté en `ssh-agent` ejecutando `ssh-add -D` . Este comando eliminará todas las claves de la sesión de `ssh-agent` actualmente activa. La sesión se restablece cada vez que cierra sesión o reinicia (o si `ssh-agent` proceso de `ssh-agent` manualmente). Podemos "simular" reiniciar ejecutando el comando mencionado.

Si intenta clonar su repositorio GitHub ahora, será igual que si añadiéramos la clave manualmente (como hicimos antes). Se le pedirá la contraseña:

```bash
git clone git@github.com:steve/raspberry-spy.git 
 Cloning into 'raspberry-spy'... 
 Enter passphrase for key '/Users/steve/.ssh/_id_rsa': 
```

Habrá notado que la clave para cuya contraseña se nos solicita es la misma clave que especificamos en nuestro archivo de `config` . Después de ingresar la contraseña de la clave SSH correcta, el repositorio se clonará correctamente.

Nota: si, después de una clonación exitosa, intenta `git pull` , se le solicitará la contraseña nuevamente. Vamos a resolver eso más tarde.

Es importante que `Host github.com` de `config` y `github.com` de URI `git@github.com:steve/raspberry-spy.git` coincida. También puede cambiar `config` para ser `Host mygithub` y clonar usando URI `git@mygithub:steve/raspberry-spy.git` .

Esto abre las compuertas. A medida que va reduciendo esto, su mente está acelerada y pensando en cómo han terminado todos sus problemas con las claves SSH. Aquí hay algunos ejemplos de configuración útiles:

```bash
Host bitbucket-corporate 
        HostName bitbucket.org 
        User git 
        IdentityFile ~/.ssh/id_rsa_corp 
        IdentitiesOnly yes 
```

Ahora puedes usar `git clone git@bitbucket-corporate:company/project.git`

```bash
Host bitbucket-personal 
        HostName bitbucket.org 
        User git 
        IdentityFile ~/.ssh/id_rsa_personal 
        IdentitiesOnly yes 
```

Ahora puedes usar `git clone git@bitbucket-personal:steve/other-pi-project.git`
```
Host myserver 
        HostName ssh.steve.com 
        Port 1111 
        IdentityFile ~/.ssh/id_rsa_personal 
        IdentitiesOnly yes 
        User steve 
        IdentitiesOnly yes 
```

Ahora puedes SSH en tu servidor usando `ssh myserver` . ¿Cuan genial es eso? No necesita ingresar el puerto y el nombre de usuario manualmente cada vez que ejecute el comando `ssh` .

#### Bonus: Configuraciones por repositorio

También puede definir qué clave específica debe usarse para cierto repositorio, anulando cualquier cosa en la `config` SSH. El comando SSH específico se puede definir configurando `sshCommand` en el `core` en `<project>/.git/config` `sshCommand` . Ejemplo:

```bash
[core] 
        sshCommand = ssh -i ~/.ssh/id_rsa_corp 
```

Esto es posible con git 2.10 o posterior. También puede usar este comando para evitar editar el archivo manualmente:

```bash
git config core.sshCommand 'ssh -i ~/.ssh/id_rsa_corp' 
```

### Gestión de contraseñas

La última pieza del rompecabezas es la gestión de contraseñas. Queremos evitar tener que ingresar la contraseña cada vez que se inicia la conexión SSH. Para hacerlo, podemos utilizar el software de administración de llavero que viene con MacOS y varias distribuciones de Linux.

Comience agregando su llave al llavero pasando la opción `-K` al comando `ssh-add` :

```bash
ssh-add -K ~/.ssh/id_rsa_whatever 
```

Ahora puedes ver tu clave SSH en el llavero. En MacOS se ve algo como esto: ![Keychain Access](https://raw.githubusercontent.com/fvoska/guides/master/static/images/pages/ssh/managing-multiple-ssh-keys/keychain-access.png "Acceso Llavero")

Si elimina las claves de `ssh-agent` través de `ssh-add -D` (esto ocurrirá cuando reinicie su computadora, como se mencionó anteriormente) e intente SSH-ing, se le solicitará la contraseña nuevamente. ¿Por qué? Acabamos de añadir la clave al llavero. Si vuelve a marcar Acceso al llavero, notará que la clave que agregó con `ssh-add -K` aún está en el llavero. Raro, ¿eh?

Resulta que hay un aro más para saltar. Abra su archivo de `config` SSH y agregue lo siguiente:

```bash
Host * 
  AddKeysToAgent yes 
  UseKeychain yes 
```

Ahora, SSH buscará la clave en el llavero y, si la encuentra, no se le solicitará la contraseña. La clave también se agregará a `ssh-agent` . En MacOS esto funcionará en MacOS Sierra 10.12.2 o posterior. En Linux puede usar algo como `gnome-keyring` y podría funcionar incluso sin esta última modificación a la `config` SSH. En cuanto a Windows, ¿quién sabe, verdad?

Espero que alguien haya encontrado esto útil. Ahora ve y configura tu archivo de `config` SSH!