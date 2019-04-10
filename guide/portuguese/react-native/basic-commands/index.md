---
title: Basic Commands
localeTitle: Comandos Básicos
---
## Comandos Básicos

Aqui você encontrará uma lista de comandos básicos para começar a desenvolver aplicativos iOS e Android usando o React Native. Se você ainda não o instalou, é altamente recomendável seguir o [guia oficial](https://facebook.github.io/react-native/docs/getting-started.html) .

### Começando um novo projeto

Existem diferentes maneiras de inicializar um aplicativo nativo de resposta. Pode utilizar a **Expo** ou `create-react-native-app` (que por sua vez utiliza o Expo-Cli) para iniciar o seu novo projeto, mas com este método você tem mais controle do que aconteceu no seu projecto e pode comunicar, ajustar e escrever módulos próprios com bibliotecas nativas para iOS e plataforma móvel Android.
```
react-native init [PROJECT-NAME] 
 cd [PROJECT-NAME] 
```

**Executar aplicativo no emulador Android**

Este comando é auto-explicativo e, como ele diz, iniciará o emulador do Android e instalará o aplicativo que você acabou de criar. Você precisa estar na raiz do projeto para executar este comando.
```
react-native run-android 
```

**Executar aplicativo no emulador do iOS**

Este comando faz exatamente o mesmo que o `react-native run-android` mas em vez do emulador Android, ele abre o simulador do iPhone.
```
react-native run-ios 
```

**Vincular dependências a projetos nativos**

Algumas bibliotecas têm dependências que precisam ser vinculadas no código nativo gerado para o React Native. Se algo não funcionar depois da instalação de uma nova biblioteca, talvez seja porque você pula essa etapa.
```
react-native link [LIBRARY-NAME] 
```

**Pacote claro**

Se algo não funcionar como esperado, talvez seja necessário limpar e criar um novo pacote com esse comando.
```
watchman watch-del-all 
```

**Suporte decoradores**

O JSX não suporta decoradores por padrão, então você precisa instalar o plugin **Babel** para fazê-lo funcionar.
```
npm install babel-plugin-transform-decorators-legacy --save 
 npm install babel-plugin-transform-class-properties --save 
```

### Exportar APK para executar no dispositivo

Com os seguintes comandos, você terá um apk não assinado para poder instalar e compartilhar com seus colegas para fins de teste. Basta lembrar que este apk não está pronto para fazer o upload para a App Store ou produção. Você vai encontrar o seu apk recem criado em `android/app/build/outputs/apk/app-debug.apk`

**1\. Configuração de depuração do pacote**
```
react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug 
```

**2\. Criar compilação de depuração**
```
cd android 
 ./gradlew assembleDebug 

```
