---
title: npm Cheat Sheet
localeTitle: hoja de trucos npm
---
## hoja de trucos npm

Una lista de comandos y indicadores de terminal para ayudar a usar `npm`

## instalar `package.json` dependencias

```shell
npm install 
```

**Taquigrafía**

```shell
# install 
 npm i <package> 
 # uninstall 
 npm un <package> 
 # update 
 npm up <package> 
```

## Lista de paquetes instalados globalmente.

```shell
npm list -g --depth=0 
```

## Desinstalar paquete global

```shell
npm -g uninstall <name> 
```

## Actualizar NPM en Windows

Después de intentar varias veces actualizar npm en Windows, encontré esto mientras hurgaba en las carpetas de npm.

```shell
npm-windows-upgrade 
```

## Actualizando paquetes globales

Para ver qué paquetes necesitan actualizarse, use:

```shell
npm outdated -g --depth=0 
```

Para actualizar los paquetes globales individualmente puede usar:

```shell
npm update -g <package> <package> <package> 
```

## Listar los scripts disponibles para ejecutar

```shell
npm run 
```

## actualizar npm

```shell
npm install -g npm@latest 
 # using windows? Then use 
 npm-windows-upgrade 
```

## banderas

`-S` es lo mismo que `--save` no es necesario en npm 5+ `-D` es lo mismo que `--save-dev`

## versión instalada

```shell
npm list # for local packages 
```

## Administrador de versiones de nodos `nvm`

Digamos que desea instalar Node v6.9.1 que escribiría en el terminal:

```shell
nvm install 6 
```

Si tiene varias versiones de Node.js instaladas en su área de trabajo, puede cambiar a una versión específica escribiendo:

```shell
nvm use 4.8.4 
```

### Hacer una versión de nodo por defecto.

Para configurar una versión predeterminada del nodo para su área de trabajo, simplemente escriba:

```shell
nvm alias default 6 
```

Donde 6 era la versión que querías que fuera usada por defecto.